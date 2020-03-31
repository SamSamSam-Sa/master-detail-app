import React from 'react';
import '../App.css';
import DateRangeRoundedIcon from '@material-ui/icons/DateRangeRounded';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';

class ClientCard extends React.Component {

	render() {
		const { client, onClick, selected, editClient/*, getClient, deleteClient*/ } = this.props;

		return (
			<div onClick={onClick} className={selected ? "client-card-container client-card-container-selected" : "client-card-container"}>
				<div className="client-card-header">
					<div className="client-card-id" >
						Id: {client.id}
					</div>
					<div className="client-tool-bar">
						<span className="edit-icon" onClick={() => editClient(client.id)}>
							<EditRoundedIcon className="material-icons action" />
						</span>
						<span className="delete-icon" /*onClick={() => deleteClient(client.id)}*/>
							<DeleteForeverRoundedIcon className="material-icons action"/>
						</span>
					</div>
				</div>
				<div className="client-card-name">
					{client.name} {client.surname} <br/>{client.patronymic}
				</div>
				<div className={selected ? "client-card-extra-information client-card-extra-information-show" : "client-card-extra-information"}>
					<span className="birth-date-icon">
						<DateRangeRoundedIcon className="material-icons" />
						{client.dateOfBirth}
					</span>
					<span className="phone-icon">
						<PhoneRoundedIcon className="material-icons" />
						{client.phoneNumber}
					</span>
				</div>
			</div>
		);
	}
}

export default ClientCard;