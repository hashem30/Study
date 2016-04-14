using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ServiceModel;

namespace SelfHostingService
{
    [ServiceContract()]
    public interface ISimpleCalculator
    {
        [OperationContract()]
        int Add(int num1, int num2);
    }
}
