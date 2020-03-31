import React from 'react';
import OrderCard from './OrderCard'
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

class OrderList extends React.Component{

   render(){
      const {orders, editOrder, deleteOrder, toggleOrderCreate} = this.props;
      const cards = orders.map((order, index) => {
         return(
            <OrderCard
               key = {index}
               index = {index}
               order = {order}
               editOrder = {editOrder}
               deleteOrder = {deleteOrder}
            />
         );
      });

      return (
         <div className="order-list-container">
            {cards}
            <span className="add-icon" onClick={() => toggleOrderCreate()}>
				<AddCircleRoundedIcon className="material-icons action" />
			</span>
         </div>
      );
   }
}

export default OrderList;