import React from "react";
import "./App.css";
import Nav from "./components/Nav.js";
import ClientsList from "./components/ClientsList.js";
import OrdersList from "./components/OrdersList.js";
import ClientCreate from "./components/ClientCreate";
import OrderCreate from "./components/OrderCreate";
import { get, post, put, remove } from "./HttpService.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showClientCreate: false,
      showOrderCreate: false,
      clients: [],
      client: {},
      selectedClientCardId: null,
      orders: [],
      order: {}
    };
    this.getClients();
  }

  getClients = () => {
    return get("https://localhost:44394/ClientController").then(
      res => {
        console.log(res);
        this.setState({
          clients: JSON.parse(res)
        });
      },
      function(error) {
        console.log("Error!!!");
        console.log(error);
      }
    );
  };

  toggleClientCreate = () => {
    this.setState({
      showClientCreate: !this.state.showClientCreate,
      client: {}
    });
  };

  toggleOrderCreate = () => {
    this.setState({
      showOrderCreate: !this.state.showOrderCreate,
      order: {}
    });
  };

  editClient = id => {
    let currentClient = this.state.clients.find(client => client.id === id);
    this.setState({ client: currentClient, showClientCreate: true });
  };

  editOrder = id => {
    let currentOrder = this.state.orders.find(order => order.id === id);
    this.setState({ order: currentOrder, showOrderCreate: true });
  };

  getClientOrders = clientId => {
    this.setState({
      orders: this.state.clients.find(client => client.id === clientId).orders
    });
  };

  selectClientCard = clientId => {
    this.setState({
      selectedClientCardId: clientId
    });
    this.getClientOrders(clientId);
  };

  performClientSubmissionRequest = (clientData, id) => {
    let params = JSON.stringify(clientData);
    if (id) {
      return put("https://localhost:44394/ClientController", params).then(
        function(res) {
          console.log(res);
        },
        function(error) {
          console.log(error);
        }
      );
    } else {
      return post("https://localhost:44394/ClientController", params).then(
        function(res) {},
        function(error) {
          console.log(error);
        }
      );
    }
  };

  submitClient = (clientData, id) => {
    let scope = this;
    this.performClientSubmissionRequest(clientData, id).then(() => {
      scope.getClients();
      this.setState({ showClientCreate: false });
    });
  };

  performOrderSubmissionRequest = (orderData, id) => {
    let params = JSON.stringify(orderData);
    let clientId = this.state.selectedClientCardId;
    if (id) {
      return put("https://localhost:44394/OrderController", params).then(
        function(res) {
          console.log(res);
        },
        function(error) {
          console.log(error);
        }
      );
    } else {
      return post(
        `https://localhost:44394/OrderController?clientId=${clientId}`,
        params
      ).then(
        function(res) {
          console.log(res);
        },
        function(error) {
          console.log(error);
        }
      );
    }
  };

  submitOrder = (orderData, id) => {
    let scope = this;
    this.performOrderSubmissionRequest(orderData, id).then(() => {
      scope.getClients().then(() => {
        scope.getClientOrders(scope.state.selectedClientCardId);
        scope.setState({
          showOrderCreate: false
        });
      });
    });
  };

  deleteClient = id => {
    let scope = this;
    remove(`https://localhost:44394/ClientController/${id}`).then(
      function(res) {
        console.log(res);
        scope.getClients();
      },
      function(error) {
        console.log(error);
      }
    );
  };

    deleteOrder = id => {
        let scope = this;
        remove(`https://localhost:44394/OrderController/${id}`).then(
            function (res) {
                console.log(res);
                scope.getClients().then(() => {
                    scope.getClientOrders(scope.state.selectedClientCardId);
                });
            },
            function (error) {
                console.log(error);
            }
        );
  };

  render() {
    return (
      <div className="app-container">
        <Nav />
        {this.state.showClientCreate || this.state.showOrderCreate ? (
          this.state.showClientCreate ? (
            <ClientCreate
              client={this.state.client}
              toggleClientCreate={this.toggleClientCreate}
              submitClient={this.submitClient}
            />
          ) : (
            <OrderCreate
              order={this.state.order}
              toggleOrderCreate={this.toggleOrderCreate}
              submitOrder={this.submitOrder}
            />
          )
        ) : (
          <div className="app-content-container">
            <div className="app-clients-column">
              <ClientsList
                deleteClient={this.deleteClient}
                editClient={this.editClient}
                clients={this.state.clients}
                selectCard={this.selectClientCard}
                selectedClientCardId={this.state.selectedClientCardId}
                toggleClientCreate={this.toggleClientCreate}
              />
            </div>
            <div className="app-orders-column">
              <OrdersList
                deleteOrder={this.deleteOrder}
                editOrder={this.editOrder}
                orders={this.state.orders}
                toggleOrderCreate={this.toggleOrderCreate}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
