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
    
    public partial class SalesOrder
    {
        public SalesOrder()
        {
            this.SalesOrderItems = new HashSet<SalesOrderItem>();
        }
    
        public int SalesOrderId { get; set; }
        public int CustomerId { get; set; }
        public int SalesOrderStatusId { get; set; }
        public System.DateTime CreatedTime { get; set; }
        public int CreatedById { get; set; }
        public string CreatedByName { get; set; }
        public System.DateTime UpdatedTime { get; set; }
        public int UpdatedById { get; set; }
        public string UpdatedByName { get; set; }
        public int Sequence { get; set; }
    
        public virtual Customer Customer { get; set; }
        public virtual ICollection<SalesOrderItem> SalesOrderItems { get; set; }
        public virtual SalesOrderStatu SalesOrderStatu { get; set; }
    }
}
