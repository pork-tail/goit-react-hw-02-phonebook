import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: uuid(), name: "Rosie Simpson", number: "459-12-56" },
      { id: uuid(), name: "Hermione Kline", number: "443-89-12" },
      { id: uuid(), name: "Eden Clements", number: "645-17-79" },
      { id: uuid(), name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  handleSubmit = (name, number) => {
    const isDuplicate = this.state.contacts.some((item) => item.name === name);
    if (isDuplicate) {
      alert("Такой контакт уже существует " + name);
      return;
    }

    const newContact = {
      id: uuid(),
      name: name,
      number: number,
    };

    this.setState((prevState) => {
      const newContacts = [newContact, ...prevState.contacts];
      return { contacts: newContacts };
    });
  };

  handleDelete = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const formattedFilter = filter.toLowerCase().trim();
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(formattedFilter)
    );
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleChange={this.handleChange} />
        <ContactList
          contacts={filteredContacts}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
