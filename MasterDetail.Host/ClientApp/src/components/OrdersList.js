import React from 'react';
import OrderCard from './OrderCard'
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

class OrderList extends React.Component{
	    // componentWillMount() {
    //     this.props.getOrders();
    // }

   render(){
      const {orders, getOrder, deleteOrder} = this.props;
      const cards = orders.map((order, index) => {
         return(
            <OrderCard
               key = {index}
               index = {index}
               order = {order}
               getOrder = {getOrder}
               deleteOrder = {deleteOrder}
            />
         );
      });

      return (
         <div className="order-list-container">
            {cards}
            <span className="add-icon">
				<AddCircleRoundedIcon className="material-icons action" />
			</span>
         </div>
      );
   }
}

export default OrderList;