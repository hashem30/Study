using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SelfHostingService;
using System.ServiceModel;
using System.ServiceModel.Description;

namespace MyCalculatorServiceHost
{
    class Program
    {
        static void Main(string[] args)
        {
            Uri httpUrl = new Uri("http://localhost:8090/SelfHostingService/SimpleCalculator");

            //Create ServiceHost
            ServiceHost host = new ServiceHost(typeof(SelfHostingService.SimpleCalculator), httpUrl);

            //Add a service endpoint
            host.AddServiceEndpoint(typeof(SelfHostingService.ISimpleCalculator), new WSHttpBinding(), "");

            //Enable metadata exchange
            ServiceMetadataBehavior smb = new ServiceMetadataBehavior();
            smb.HttpGetEnabled = true;
            host.Description.Behaviors.Add(smb);

            //Start the Service
            host.Open();
            Console.WriteLine("Service is host at " + DateTime.Now.ToString());
            Console.WriteLine("Host is running... Press  key to stop");
            //Console.WriteLine(smb.ad.ad);
            Console.ReadLine();
        }
    }
}
