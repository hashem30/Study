using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyIISHostingClient
{
    class Program
    {
        static void Main(string[] args)
        {   // Creating Proxy for the MyService
            Service1Client client = new Service1Client();
            Console.WriteLine("Client calling the service...");
            Console.WriteLine("Hello Ram");
            Console.WriteLine(client.GetData(1132));
            Console.Read();
        }
    }
}
