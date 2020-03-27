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
    [Route("OrderController")]
    public class OrderController : ControllerBase
    {
        private MasterDetailContext masterDetailContext;

        [HttpGet("{id}")]
        public IEnumerable<Order> GetClientOrdersInfo(int id)
        {
            var client = masterDetailContext.Clients.Include(x => x.Orders).SingleOrDefault(x => x.Id == id);
            //var orderds = masterDetailContext.Orders.Select(x => x);
            if (client != null)
            {
                return client.Orders.ToList();
            }
            throw new Exception("Клиента не существует!");
        }

        [HttpPost]
        public string PostOrderInfo(Order order, int clientId)
        {            
            var client = masterDetailContext.Clients.FirstOrDefault(x => x.Id == clientId);
            masterDetailContext.Orders.Add(order);
            masterDetailContext.SaveChanges();
            client.Orders.Add(order);
            masterDetailContext.SaveChanges();

            return String.Format("Заказ '{0}' добавлен!", order.Id);
        }

        [HttpPut]
        public string PutOrderInfo(Order order)
        {
            masterDetailContext.Orders.Update(order);
            masterDetailContext.SaveChanges();
            return String.Format("Заказ '{0}' обновлён!", order.Id);
        }

        [HttpDelete]
        public string DeleteOrderInfo(int id)
        {
            var order = masterDetailContext.Orders.FirstOrDefault(x => x.Id == id);
            if (order != null)
            {
                masterDetailContext.Orders.Remove(order);
                masterDetailContext.SaveChanges();

            }

            return String.Format("Заказ '{0}' удалён!", id);
        }

        public OrderController(MasterDetailContext masterDetailContext)
        {
            this.masterDetailContext = masterDetailContext;
        }
    }
}
