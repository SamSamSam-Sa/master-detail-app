import React from 'react'
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SaveRoundedIcon from '@material-ui/icons/SaveRounded'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'

class ClientCreate extends React.Component{
	constructor(props){
		super(props);
		const { client } = this.props;
		this.state = {
			name: client.name,
			surname: client.surname,
			patronymic: client.patronymic,
			dateOfBirth: client.dateOfBirth,
			phoneNumber: client.phoneNumber
		}
	}
   onSubmit(e) {
      e.preventDefault();
         const clientFormData = {
				name: this.state.name,
				surname: this.state.surname,
				patronymic: this.state.patronymic,
				dateOfBirth: this.state.dateOfBirth,
				phoneNumber: this.state.phoneNumber,
         };
      this.props.submitClient(clientFormData, this.props.client.id);
	}
	
	render() {
		const { toggleClientCreate } = this.props;
		return(
		  	<div className="client-create-container">
				<div className="client-create-container-header">
					<h2>Client data</h2>
					<div className="client-create-tool-bar">
						<span className="close-icon" onClick={() => toggleClientCreate()}>
							<CloseRoundedIcon className="material-icons action"/>
						</span>
					</div>
				</div>
			 	<form className="client-create-form" onSubmit={(e) => this.onSubmit(e)} >
					<TextField 
						id="standard-basic"
						label="Name"
						className="client-create-name-input"
						value={this.state.name}
						onChange={(e) => this.setState({name: e.target.value})}
					/>
					<TextField 
						id="standard-basic"
						label="Surname"
						className="client-create-surname-input"
						value={this.state.surname}
						onChange={(e) => this.setState({surname: e.target.value})}
					/>
					<TextField 
						id="standard-basic" label="Patronymic"
						className="client-create-patronymic-input"
						value={this.state.patronymic}
						onChange={(e) => this.setState({patronymic: e.target.value})}
					/>						  
					<TextField
						id="date"
						label="Birthday"
						type="date"
						className="client-create-dateOfBirth-input"
						InputLabelProps={{
							shrink: true,
						}}
						value={this.state.dateOfBirth}
						onChange={(e) => this.setState({dateOfBirth: e.target.value})}
					/>
					<TextField 
						id="standard-basic"
						label="Phone number"
						className="client-create-phoneNumber-input"
						value={this.state.phoneNumber}
						onChange={(e) => this.setState({phoneNumber: e.target.value})}
					/>
					<IconButton
						aria-label="delete"
						className="client-edit-button"
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

export default ClientCreate;