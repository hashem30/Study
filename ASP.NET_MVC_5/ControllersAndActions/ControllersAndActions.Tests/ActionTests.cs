using System.Web.Mvc;
using ControllersAndActions.Controllers;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace ControllersAndActions.Tests
{
    [TestClass]
    public class ActionTests
    {
        [TestMethod]
        public void ControllerTest()
        {
            // Arrange - create the controller
            ExampleController target = new ExampleController();
            // Act - call the action method
            ViewResult result = target.Index();
            // Assert - check the result
            Assert.AreEqual("Hello", result.ViewBag.Message);


        }
    }
}
