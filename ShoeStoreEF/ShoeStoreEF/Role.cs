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
    
    public partial class Role
    {
        public Role()
        {
            this.AdminRoles = new HashSet<AdminRole>();
            this.Permissions = new HashSet<Permission>();
        }
    
        public int RoleId { get; set; }
        public string RoleName { get; set; }
        public string Description { get; set; }
        public int Sequence { get; set; }
    
        public virtual ICollection<AdminRole> AdminRoles { get; set; }
        public virtual ICollection<Permission> Permissions { get; set; }
    }
}
