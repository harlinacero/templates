using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace WebApplication1.DomainServices.Entities
{
    public class EntityBase
    {
        /// <summary>
        /// Id Entity
        /// </summary>
        [JsonIgnore]
        [IgnoreDataMember]
        public int Id { get; set; }
        /// <summary>
        /// user change entity
        /// </summary>
        public int UserChange { get; set; }
        /// <summary>
        /// Date modfified Entity
        /// </summary>
        public DateTime DateModified { get; set; }
    }
}
