import React from 'react';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';

class OrderCard extends React.Component{
   render(){
      const { order, editOrder, deleteOrder} = this.props;
      return(
         <div className="order-card-container">
            <div className="order-card-header">
               <div className="order-card-id">
                  № {order.id}
               </div>
               <div className="order-tool-bar">
                  <span className="edit-icon" onClick={() => editOrder(order.id)}>
                     <EditRoundedIcon className="material-icons action"/>
                  </span>
                  <span className="delete-icon" onClick={() => deleteOrder(order.id)}>
                     <DeleteForeverRoundedIcon className="material-icons action"/>
                  </span>
               </div>
            </div>
            <div className="order-card-sum">
               {order.sum}
            </div>
         </div>
      );
   }
}

export default OrderCard;