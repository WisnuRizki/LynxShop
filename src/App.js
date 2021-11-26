import React from 'react';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import HeaderBanner from './components/HeaderBanner/HeaderBanner';
import NewCollection from './components/NewCollection/NewCollection';
import ListProduk from './components/ListProduk/ListProduk';
import Contact from './components/Contact/Contact';
import Keranjang from './components/Keranjang/Keranjang';
import './App.css';


class App extends React.Component{
  constructor(props){
    super();
    this.state = {
      barang: [],
      route: 'listproduk',
      itemBuy: [],
      detailBarang: [],
      modal: false
    }
  }

 

  onRouteChange = (route) => {
    this.setState({route :route})
  }

  onShoes = (event) => {
    const array = [...this.state.itemBuy];
    array.push(event)
    this.setState({itemBuy: array})
    
  }

  onDetailBarang = (event) => {
    this.setState({detailBarang: event})
    this.setState({modal: true})

    console.log(this.state.detailBarang,this.state.modal)
  }

  onCloseModal = () => {
    this.setState({modal: false})
  }

  componentDidMount(){
    fetch('http://localhost:3001/')
    .then(response => response.json())
    .then(data => {
      this.setState({
        barang: data
      })
    })

  }


  render(){
    if(this.state.route === 'home'){
      return(
        <div>
          <div className="_headerContainer_">
            <HeaderMenu onRouteChange={this.onRouteChange}/>
            <HeaderBanner />
          </div>
          <div className="_menuCollection_">
            <NewCollection />
          </div>
          <Contact />
        </div>
      );
    }else if(this.state.route === 'listproduk'){
      return(
        <div>
          <div className="_headerContainer_">
          <HeaderMenu onRouteChange={this.onRouteChange}/>
          <HeaderBanner />
        </div>
        <ListProduk onShoes={this.onShoes} Barang={this.state.barang}
        onDetailBarang={this.onDetailBarang} detailBarang={this.state.detailBarang}
        modal={this.state.modal} onCloseModal={this.onCloseModal}/>

        </div>
      );
    }else if(this.state.route === 'keranjang'){
      return(
        <div>
           <HeaderMenu onRouteChange={this.onRouteChange}/>
            <Keranjang itemBuy={this.state.itemBuy} onRouteChange={this.onRouteChange}/>
        </div>
      );
    }
  }
}

export default App;
