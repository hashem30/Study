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
    
    public partial class MenuCategory
    {
        public MenuCategory()
        {
            this.Menus = new HashSet<Menu>();
            this.PageBindings = new HashSet<PageBinding>();
            this.TopMenus = new HashSet<TopMenu>();
        }
    
        public int MenuCategoryId { get; set; }
        public string MenuCategoryName { get; set; }
        public int Sequence { get; set; }
    
        public virtual ICollection<Menu> Menus { get; set; }
        public virtual ICollection<PageBinding> PageBindings { get; set; }
        public virtual ICollection<TopMenu> TopMenus { get; set; }
    }
}
