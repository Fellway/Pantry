import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import AppContext from '../../context';


class Form extends React.Component {
    state = {
        id: '',
        category: '',
        name: '',
        quantity: '',
        icon: ''
    };

    handleInputChange = e => {
        this.setState({
            id: Math.round(Math.random() * 10000000),
            [e.target.name]: e.target.value,
        });
    };

  render() {
    return (
      <AppContext.Consumer>
        {(context) => (
          <form autoComplete="off" onSubmit={(e) => context.addItem(e, this.state)}>
            {/* <Input onChange={this.handleInputChange} name="category" label="category" select /> */}
            <Input onChange={this.handleInputChange} name="name" label="name" />
            <Input onChange={this.handleInputChange} name="quantity" label="quantity" type="number" />
            <Input onChange={this.handleInputChange} name="icon" label="icon url" />
            <Button>save</Button>
          </form>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Form;
