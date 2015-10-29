using System.Web.Optimization;
using System.Web.Optimization.React;

namespace ReactJSNet
{
    public static class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new BabelBundle("~/bundles/main").Include(
                "~/Scripts/Tutorial.jsx",
                "~/Scripts/showdown.js",
                "~/Scripts/jquery-2.1.4.min.js"
            ));

            /*
            bundles.Add(new Bundle("~/bundles/main", new IBundleTransform[]
            {
                // This works the same as BabelBundle (transform then minify) but you could
                //add your own transforms as well.
                new BabelTransform(),
                new JsMinify(),
            }).Include(
                "~/Scripts/Tutorial.jsx"
            ));*/
            // Forces files to be combined and minified in debug mode
            // Only used here to demonstrate how combination/minification works
            // Normally you would use unminified versions in debug mode.
            BundleTable.EnableOptimizations = true;
        }
    }
}