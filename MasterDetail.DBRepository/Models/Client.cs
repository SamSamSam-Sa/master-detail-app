using System;
using System.Collections.Generic;

namespace MasterDetail.DBRepository.Models
{
    public class Client
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Patronymic { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Phone { get; set; }

        public virtual ICollection<Order> Orders { get; private set; }
        public Client()
        {
            Orders = new List<Order>();
        }
    }

}
