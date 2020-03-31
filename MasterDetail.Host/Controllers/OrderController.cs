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

        [HttpDelete("{id}")]
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
