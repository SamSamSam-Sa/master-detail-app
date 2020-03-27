using MasterDetail.DBRepository;
using MasterDetail.DBRepository.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace MasterDetail.Host.Controllers
{
    [ApiController]
    [Route("ClientController")]
    public class ClientController : Controller
    {
        private MasterDetailContext masterDetailContext;

        [HttpGet]
        public IEnumerable<Client> GetAllClientsInfo()
        {
            var smth = masterDetailContext.Clients.Include(x => x.Orders).ToList();
            return smth;
        }

        [HttpPost]
        public string PostClientInfo(Client client)
        {
            masterDetailContext.Clients.Add(client);
            masterDetailContext.SaveChanges();

            return String.Format("Клиент '{0}' добавлен!", client.Id);
        }

        [HttpPut]
        public string PutClientInfo(Client client)
        {
            masterDetailContext.Clients.Update(client);
            masterDetailContext.SaveChanges();

            return String.Format("Клиент '{0}' обновлён!", client.Id);
        }

        [HttpDelete]
        public string DeleteClientInfo(int id)
        {
            var client = masterDetailContext.Clients.Include(x => x.Orders).SingleOrDefault(x => x.Id == id);
            if (client != null)
            {
                var clientOrders = client.Orders;
                if (client != null)
                {
                    masterDetailContext.Orders.RemoveRange(clientOrders);

                }
                masterDetailContext.Clients.Remove(client);
                masterDetailContext.SaveChanges();

            }

            return String.Format("Клиент '{0}' удалён!", id);
        }

        public ClientController(MasterDetailContext masterDetailContext)
        {
            this.masterDetailContext = masterDetailContext;
        }
    }
}