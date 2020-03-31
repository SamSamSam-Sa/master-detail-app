import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import SaveRoundedIcon from '@material-ui/icons/SaveRounded'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'

class ClientCreate extends React.Component{
   onSubmit(e) {
      e.preventDefault();
         const clientFormData = {
				name: this.name.value,
				surname: this.surname.value,
				patronymic: this.patronymic.value,
				dateOfBirth: this.dateOfBirth.value,
				phoneNumber: this.phoneNumber.value,
         };
      this.props.submitClient(clientFormData, this.props.client.id);
	}
	
	render() {
		const { client, toggleClientCreate } = this.props;
		return(
		  	<div className="client-create-container">
				<div className="client-create-ontainer-header">
					<h2>Client data</h2>
					<div className="client-create-tool-bar">
						<span className="save-icon" /*onClick={() => toggleClientCreate()}*/>
							<SaveRoundedIcon className="material-icons action" />
						</span>
						<span className="close-icon" onClick={() => toggleClientCreate()}>
							<CloseRoundedIcon className="material-icons action"/>
						</span>
					</div>
				</div>
			 	<form className="client-create-form" onSubmit={(e) => this.onSubmit(e)} >
					<TextField 
						id="standard-basic" label="Standard"
						className="client-create-name-input"
						defaultValue={client.name}
						ref={(TextField) => this.name = TextField}
					/>
					<TextField 
						id="standard-basic" label="Standard"
						className="client-create-surname-input"
						defaultValue={client.surname}
						ref={(TextField) => this.surname = TextField}
					/>
					<TextField 
						id="standard-basic" label="Standard"
						className="client-create-patronymic-input"
						defaultValue={client.patronymic}
						ref={(TextField) => this.patronymic = TextField}
					/>						  
					<TextField
						id="date"
						label="Birthday"
						type="date"
						defaultValue={client.dateOfBirth}
						className="client-create-dateOfBirth-input"
						InputLabelProps={{
							shrink: true,
						}}
						ref={(TextField) => this.dateOfBirth = TextField}
					/>
					<TextField 
						id="standard-basic" label="Standard"
						className="client-create-phoneNumber-input"
						defaultValue={client.phoneNumber}
						ref={(TextField) => this.phoneNumber = TextField}
					/>
					<Button
						className="client-edit-button"
						variant="contained"
						type="submit"
						label="Submit">
						Save
					</Button>
			 	</form>
		  </div>
		);
	 }
}

export default ClientCreate;