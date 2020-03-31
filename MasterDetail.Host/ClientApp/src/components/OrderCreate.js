import React from 'react'
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SaveRoundedIcon from '@material-ui/icons/SaveRounded'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'

class OrderCreate extends React.Component{
	constructor(props){
		super(props);
		const { order } = this.props;
		this.state = {
			price: order.price
		}
	}

	onSubmit(e) {
      e.preventDefault();
         const orderFormData = {
            price: this.state.price,
         };
      this.props.submitOrder(orderFormData, this.props.order.id);
	}
	
	render() {
		const { toggleOrderCreate } = this.props;
		return(
		  	<div className="order-create-container">
				<div className="order-create-container-header">
					<h2>Order data</h2>
					<div className="order-create-tool-bar">
						<span className="close-icon" onClick={() => toggleOrderCreate()}>
							<CloseRoundedIcon className="material-icons action"/>
						</span>
					</div>
				</div>
			 	<form className="order-create-form" onSubmit={(e) => this.onSubmit(e)} >
					<TextField 
						id="standard-basic"
						label="Order price"
						className="order-create-price-input"
						value={this.state.price}
						onChange={(e) => this.setState({price: e.target.value})}
					/>
					<IconButton
						aria-label="delete"
						className="order-edit-button"
						variant="contained"
						type="submit"
						label="Submit">
						<span className="save-icon">
							<SaveRoundedIcon className="material-icons action" />
						</span>
					</IconButton>
			 	</form>
		  </div>
		);
	 }
}

export default OrderCreate;