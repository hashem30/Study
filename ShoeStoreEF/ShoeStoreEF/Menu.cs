//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ShoeStoreEF
{
    using System;
    using System.Collections.Generic;
    
    public partial class Menu
    {
        public Menu()
        {
            this.PageBindings = new HashSet<PageBinding>();
            this.PageBindings1 = new HashSet<PageBinding>();
        }
    
        public int MenuId { get; set; }
        public string MenuName { get; set; }
        public int MenuCategoryId { get; set; }
        public string PageLink { get; set; }
        public string ToolTip { get; set; }
        public string Image { get; set; }
        public int PermissionId { get; set; }
        public bool IsDisplay { get; set; }
        public int Sequence { get; set; }
    
        public virtual MenuCategory MenuCategory { get; set; }
        public virtual ICollection<PageBinding> PageBindings { get; set; }
        public virtual ICollection<PageBinding> PageBindings1 { get; set; }
    }
}
