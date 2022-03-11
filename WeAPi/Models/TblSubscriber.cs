using System;
using System.Collections.Generic;

#nullable disable

namespace WeAPi.Models
{
    public partial class TblSubscriber
    {
        public int SubscriberId { get; set; }
        public string MailId { get; set; }
        public DateTime SubscribedDate { get; set; }
    }
}
