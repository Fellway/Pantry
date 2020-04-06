import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from '../../theme/GlobalStyle';
import Sidebar from '../../components/Sidebar/Sidebar';
import FloatButton from '../../components/FloatButton/FloatButton';
import Modal from '../../components/Modal/Modal';
import ModalConfirm from '../../components/Modal/ModalConfirm';
import AppContext from '../../context';
import FridgeView from '../Fridge/FridgeView';
import SettingsView from '../Settings/SettingsView';
import CategoriesView from '../Categories/CategoriesView';
import CartView from '../Cart/CartView';



const Wrapper = styled.div`
  display: grid;
  margin-left: 75px;
`;
 
class Root extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          category: 'test',
          name: 'mleko',
          icon: 'https://cdn3.iconfinder.com/data/icons/food-beverage-lineal/64/milk-fresh-cream-box-512.png',
          quantity: 2,
          criticalValue: 1,
        },
        {
          id: 2,
          category: 'test',
          name: 'jabłko',
          icon: 'https://i.pinimg.com/originals/c8/7e/50/c87e50da869b477f4d76a77017462e34.png',
          quantity: 6,
          criticalValue: 5,
        },
        {
          id: 3,
          category: 'test',
          name: 'woda',
          icon: 'https://cdn3.iconfinder.com/data/icons/drink-48/64/Drinks-04-512.png',
          quantity: 4,
          criticalValue: 5,
        },
        {
          id: 4,
          category: 'test',
          name: 'bułki',
          icon: 'https://img.icons8.com/pastel-glyph/2x/bread.png',
          quantity: 2,
          criticalValue: 3,
        },
      ],
      isModalOpen: false,
      isModalConfirmOpen: true,
      deleteId: '',
    };
  }

  addItem = (e, newItem) => {
    e.preventDefault();
    this.setState((prevState) => ({
      products: [...prevState.products, newItem],
      isModalOpen: false,
    }));
  };

  deleteItem = (id) => {
    this.setState(prevState => ({
      products: prevState.products.filter(p => p.id !== id),
      isModalConfirmOpen: false,
      deleteId: '',
    }))
  }

  incrementQuantity = (id) => {
    this.setState(prevState => ({
      products: prevState.products.map(
        p => p.id === id? { ...p, quantity: +p.quantity+1} : p
      )
    }))
  };

  decrementQuantity = (id) => {
    this.setState(prevState => ({
      products: prevState.products.map(
        p => p.id === id? { ...p, quantity: p.quantity > 0 ? p.quantity-1 : 0} : p
      )
    }))
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  openModalConfirm = (id) => {
    this.setState({
      isModalConfirmOpen: true,
      deleteId: id,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  closeModalConfirm = () => {
    this.setState({
      isModalConfirmOpen: false,
      deleteId: '',
    });
  };

  render = () => {
    const { isModalOpen } = this.state;
    const { isModalConfirmOpen } = this.state;
    const { deleteId } = this.state;

    const contextElements = {
      addItem: this.addItem,
      incrementQuantity: this.incrementQuantity,
      decrementQuantity: this.decrementQuantity,
      openModalConfirm: this.openModalConfirm,
      ...this.state,
    };

    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <GlobalStyle />
          <Sidebar />
          <Wrapper>
            <Switch>
              <Route exact path="/" component={FridgeView} />
              <Route path="/categories" component={CategoriesView} />
              <Route path="/cart" component={CartView} />
              <Route path="/settings" component={SettingsView} />
            </Switch>
          </Wrapper>
          {isModalOpen && <Modal closeModalFn={this.closeModal} />}
          {isModalConfirmOpen && deleteId &&  <ModalConfirm deleteItemFn = {() => this.deleteItem(deleteId)} closeModalFn = {this.closeModalConfirm} />}
          <FloatButton openModalFn={this.openModal} />
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}
export default Root;
