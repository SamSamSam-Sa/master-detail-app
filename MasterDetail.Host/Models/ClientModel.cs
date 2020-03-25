using System;

namespace MasterDetail.Host.Models
{
    public class ClientModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Patronymic { get; set; }
        
        public DateTime DateOfBirth { get; set; }
        public string Phone { get; set; }
    }
}
