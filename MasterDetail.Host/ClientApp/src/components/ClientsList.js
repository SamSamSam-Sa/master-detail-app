import React from 'react';
import ClientCard from './ClientCard'
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

class ClientList extends React.Component {

	render() {
		const {clients, editClient, selectCard, selectedClientCardId, toggleClientCreate, deleteClient } = this.props;
		const cards = clients.map((client, index) => {
			return (
				<ClientCard className="client-card"
					onClick={() => {
						selectCard(client.id)
					}}
					key={index}
					index={index}
					selected={selectedClientCardId === client.id}
					client={client}
					editClient={editClient}
					deleteClient={deleteClient}
				/>
			);
		});

		return (
			<div className="client-list-container">
				{cards}
				<span className="add-icon" onClick={() => toggleClientCreate()}>
					<AddCircleRoundedIcon className="material-icons action" />
				</span>
			</div>
		);
	}
}

export default ClientList;