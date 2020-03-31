import React from 'react';
import './App.css';
import Nav from './components/Nav.js';
import ClientsList from './components/ClientsList.js';
import OrdersList from './components/OrdersList.js';
import ClientCreate from './components/ClientCreate';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      showClientCreate: false,
      showOrderCreate: false,
      clients: this.getClients(),
      client: {},
      selectedClientCardId: null,
      orders: []
      // order: {}
    };

  }

  getClients = () =>{
    return [
      {id:"1", name: "rtgrtgrg", surname:"dgdrgre", patronymic:"gergr", dateOfBirth: "2017-05-24", phoneNumber: "fgbgbrt", orders:[{id:"1", price: "bla"}, {id:"2", price: "ititi"}]},
      {id:"2", name: "rtgrtg", surname:"dgdrggergergre", patronymic:"gekkiuyrgr", dateOfBirth: "2017-05-24", phoneNumber: "nybtr", orders: [{id:"3", price: "uyt"}, {id:"4", price: "rgergerg"}]}
    ];
  }

  toggleClientCreate = () => {
    this.setState({
      showClientCreate: !this.state.showClientCreate,
      client: {}
    });
  }

  toggleOrderCreate = () => {
    this.setState({
      showOrderCreate: !this.state.showOrderCreate,
      order: {}
    })
  }

  editClient = (id) => {
    let currentClient =  this.state.clients.find(client => client.id === id);
    this.setState({ client: currentClient, showClientCreate: true });
  }

  editOrder = (id) => {
    this.state.order.find(order => order.id === id)
      .then((currentOrder) => {
        this.setState({ order: currentOrder, showOrderCreate: true });
      })
      .catch((err) => console.log(err));
  }

  getClientOrders = (clientId) => {
    this.setState({orders: this.state.clients.find(client => client.id === clientId).orders});
  }

  selectClientCard = (clientId) => {
    this.setState({ selectedClientCardId: clientId });
    this.getClientOrders(clientId);
  }
  
  performSubmissionRequest = (clientData, id) => {
    if (id) {
      let clientsArr = this.state.clients;
      let newClientsArr = clientsArr.splice((clientsArr.findIndex(client => client.id === id)), 0, clientData);
      this.setState({
        clients: newClientsArr
      });
    } else {
        let clientsArr = this.state.clients;
        clientData.id = clientsArr.length + 1;
        clientData.orders=[];
        clientsArr.push(clientData);
        this.setState({
          clients: clientsArr
        });
    }
  }

  submitClient = (clientData, id) => {
    this.performSubmissionRequest(clientData, id);
    this.setState({ showClientCreate: false });
  }

  render(){
    return (
      <div className="app-container">
        <Nav />
        {this.state.showClientCreate ?
          <ClientCreate 
          client={this.state.client}
          toggleClientCreate={this.toggleClientCreate}
          submitClient={this.submitClient}
        />
        :
          <div className="app-content-container">
            <div className="app-clients-column">
              <ClientsList 
                editClient={this.editClient}
                clients={this.state.clients}
                selectCard={this.selectClientCard}
                selectedClientCardId={this.state.selectedClientCardId}
                toggleClientCreate={this.toggleClientCreate}
              />
            </div>
            <div className="app-orders-column">
              <OrdersList 
                orders={this.state.orders}
              />
            </div>
          </div>
        }
      </div>
    );  
  }
}

export default App;
