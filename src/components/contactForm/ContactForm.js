import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./ContactForm.module.css";

class ContactForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
  };

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.handleSubmit(this.state.name, this.state.number);
    this.setState({ name: "", number: "" });
  };
  render() {
    return (
      <div>
        <form className={style.form} onSubmit={this.onSubmit}>
          <label className={style.title}>
            Name
            <input
              className={style.input}
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>

          <label className={style.title}>
            Number
            <input
              className={style.input}
              type="tel"
              name="number"
              onChange={this.handleChange}
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
          <button className={style.addContact} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
