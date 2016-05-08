using COL.Core;
using Microsoft.AspNet.SignalR;
using SignalR.Models;
using SignalR.Utility;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Timers;
using System.Web;
using System.Web.Script.Serialization;

namespace SignalR
{
    public class PlayerHub : Hub
    {
        COLDataSource _ds = new COLDataSource();
        static int currenttime = 0;
        static bool forcerefresh = false;
        private int currentEventTs = -1;
        private int previousMin;
        private WBEvent lastPoint;
        private WBLineStyle currentLineStyle;
        private bool needclear = false;
        static Timer playerTimer = new Timer();

        public void JoinGroup(string groupName)
        {
            Groups.Add(Context.ConnectionId, groupName);
        }
        //public void SendDraw(string drawObject, string sessionId, string groupName, string name)
        //{
        //    Clients.Group(groupName).HandleDraw(drawObject, sessionId, name);
        //}

        public void SendDraw(string groupName, string x, string y, string drawtype)
        {
            //Clients.Group(groupName).broadcastDraw(x, y, drawtype);
            // exclude self
            Clients.Others.broadcastDraw(x, y, drawtype);
        }

        public void Play(string second)
        {            
            currenttime = Convert.ToInt32(second);
            //Draw();
            playerTimer.Elapsed += playerTimer_Elapsed;
            playerTimer.Interval = 1000;             // Timer will tick every 1 seconds
            playerTimer.Enabled = true;                       // Enable the timer
            playerTimer.Start();
        }
        public void Stop()
        {
            playerTimer.Stop();
            playerTimer.Enabled = false;
        }
        public void Jump(string second)
        {
            currenttime = Convert.ToInt32(second);
            forcerefresh = true;
        }
        private void playerTimer_Elapsed(object sender, ElapsedEventArgs e)
        {
            Draw();
            currenttime += 1;
        }

        private void Draw()
        {
            _ds.Root = AppDomain.CurrentDomain.BaseDirectory;
            _ds.LectureId = "204304";

            DrawScreenShot();
            DrawWhiteBoard();            
        }

        private void DrawScreenShot()
        {
            ScreenData screen = _ds.GetScreenshotData(DataType.ScreenShot, currenttime);
            if (screen == null)
            {
                return;
            }
            if (screen.Images != null && screen.Images.Count > 0)
            {
                JavaScriptSerializer jss = new JavaScriptSerializer();
                List<ScreenImage> list = new List<ScreenImage>();

                foreach (KeyValuePair<int, byte[]> item in screen.Images)
                {
                    //row 0~7, col 0~7
                    int row = item.Key / Constants.MAX_ROW_NO;
                    int col = item.Key % Constants.MAX_COL_NO;
                    list.Add(new ScreenImage { Row = row, Col = col, ImageStream = Convert.ToBase64String(item.Value) });
                }
                Clients.All.broadcastDrawImage(jss.Serialize(list));
            }

        }
        private void DrawWhiteBoard()
        {
            bool drawLines = true;
            int currentMin = Helper.GetMinute(currenttime * 1000);
            if (previousMin == currentMin && forcerefresh == false)
            {
                // Whiteboard data is based on minute, not second.
                // Only draw when in different minute, or user changed the slider manually.
                drawLines = false;
            }
            else
            {
                forcerefresh = false;
                previousMin = currentMin;
                currentEventTs = -1;
            }

            WBData wbdata = _ds.GetWhiteBoardData(DataType.WB_1, currenttime);
            if (wbdata == null)
            {
                return;
            }            

            if (drawLines && wbdata.WBLines != null && wbdata.WBLines.Count > 0)
            {
                //JavaScriptSerializer jss = new JavaScriptSerializer();
                //List<BoardLine> list = new List<BoardLine>();
                foreach (WBLine line in wbdata.WBLines)
                {
                    WBLineStyle linestyle = Helper.GetLineStyle(line.UColor);
                    Clients.All.broadcastDrawWBLine(linestyle.Color, linestyle.Width, line.X0, line.Y0, line.X1, line.Y1);
                    //list.Add(new BoardLine { Color = linestyle.Color, Width = linestyle.Width, X0 = line.X0, Y0 = line.Y0, X1 = line.X1, Y1 = line.Y1 });
                }
                Clients.All.broadcastDrawWBLineFinished();
                //Clients.All.broadcastDrawWBLine(jss.Serialize(list));
            }

            if (wbdata.WBEvents != null && wbdata.WBEvents.Count > 0)
            {
                Hashtable group = GroupWBEventsBySecond(wbdata.WBEvents);

                int endMilliseconds = currenttime * 1000 % 60000;
                int ix;
                //JavaScriptSerializer jss = new JavaScriptSerializer();
                //List<BoardLine> list = new List<BoardLine>();
                for (ix = currentEventTs; ix <= endMilliseconds; ix++)
                {
                    List<WBEvent> wbevents = group[(uint)ix] as List<WBEvent>;

                    if (wbevents == null)
                        continue;

                    foreach (WBEvent wbevent in wbevents)
                    {

                        if (wbevent.X >= 0)
                        {
                            if (lastPoint == null)
                                lastPoint = wbevent;
                            else
                            {
                                //currentLineStyle.Color.SetStroke();
                                //gctx.SetLineWidth(currentLineStyle.Width);
                                //gctx.MoveTo(lastPoint.X * xRate, lastPoint.Y * yRate);
                                //gctx.AddLineToPoint(wbevent.X * xRate, wbevent.Y * yRate);
                                //gctx.StrokePath();
                                Clients.All.broadcastDrawWBEvent(currentLineStyle.Color, currentLineStyle.Width, lastPoint.X, lastPoint.Y, wbevent.X, wbevent.Y);
                                //list.Add(new BoardLine { Color = currentLineStyle.Color, Width = currentLineStyle.Width, X0 = lastPoint.X, Y0 = lastPoint.Y, X1 = wbevent.X, Y1 = wbevent.Y });
                                lastPoint = wbevent;
                            }
                        }
                        else
                        {
                            switch (wbevent.X)
                            {
                                case -100: //Pen Up
                                    currentLineStyle.Color = -8;
                                    lastPoint = null;
                                    break;
                                case -200: //Clear event
                                    //gctx.ClearRect(rect);
                                    Clients.All.broadcastClearReat();
                                    lastPoint = null;
                                    break;
                                default:
                                    currentLineStyle = Helper.GetLineStyle(wbevent.X);
                                    break;
                            }
                            lastPoint = null;
                        }
                    }
                }
                Clients.All.broadcastDrawWBEventFinished();
                // Clients.All.broadcastDrawWBEvent(jss.Serialize(list));
                currentEventTs = ix;
            }
        }
        private Hashtable GroupWBEventsBySecond(List<WBEvent> lstEvents)
        {
            Hashtable ht = new Hashtable();
            foreach (WBEvent item in lstEvents)
            {
                if (!ht.Contains(item.TimeStamp))
                {
                    List<WBEvent> newlist = new List<WBEvent>();
                    newlist.Add(item);
                    ht.Add(item.TimeStamp, newlist);
                }
                else
                {
                    List<WBEvent> existlist = ht[item.TimeStamp] as List<WBEvent>;
                    existlist.Add(item);
                }
            }

            return ht;
        }
    }
}