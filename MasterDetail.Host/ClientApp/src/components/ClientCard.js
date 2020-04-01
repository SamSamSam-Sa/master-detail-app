import React from 'react';
import '../App.css';
import DateRangeRoundedIcon from '@material-ui/icons/DateRangeRounded';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';

class ClientCard extends React.Component {
	constructor(props){
		super(props);
		const { client } = this.props;
		this.state = {
			id: client.id,
			name: client.name,
			surname: client.surname,
			patronymic: client.patronymic,
			dateOfBirth: client.dateOfBirth,
			phone: client.phone
		}
	}

	formatDate = (fullDateString) => {
		return fullDateString.slice(0,10);
	}

	render() {
		const { onClick, selected, editClient, deleteClient } = this.props;

		return (
			<div onClick={onClick} className={selected ? "client-card-container client-card-container-selected" : "client-card-container"}>
				<div className="client-card-header">
					<div className="client-card-id" >
						Id: {this.state.id}
					</div>
					<div className="client-tool-bar">
						<span className="edit-icon" onClick={() => editClient(this.state.id)}>
							<EditRoundedIcon className="material-icons action" />
						</span>
						<span className="delete-icon" onClick={() => deleteClient(this.state.id)}>
							<DeleteForeverRoundedIcon className="material-icons action"/>
						</span>
					</div>
				</div>
				<div className="client-card-name">
					{this.state.name} {this.state.surname} <br/>{this.state.patronymic}
				</div>
				<div className={selected ? "client-card-extra-information client-card-extra-information-show" : "client-card-extra-information"}>
					<span className="birth-date-icon">
						<DateRangeRoundedIcon className="material-icons" />
						{this.formatDate(this.state.dateOfBirth)}
					</span>
					<span className="phone-icon">
						<PhoneRoundedIcon className="material-icons" />
						{this.state.phone}
					</span>
				</div>
			</div>
		);
	}
}

export default ClientCard;