import React, { Component } from 'react'
import ListOfItems from './ListOfItems';
import Sell from './Sell';
import Buy from './Buy'
class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userBuy : false,
            userSell: false,
            itemsForSale : []
        }
    }
    updateSellArray = (sellArray) => {
        this.state.itemsForSale.push(sellArray);
        this.setState({itemsForSale: this.state.itemsForSale})
    }
    userBuy= () =>{
        this.setState({userBuy : true})
        this.setState({userSell : false})

    }
    userSell= () =>{
        this.setState({userBuy : false})
        this.setState({userSell : true})
    }

    render() {
        let userDecision;
        if(this.state.userBuy) {
            userDecision =  <Buy/>

        } else if ( this.state.userSell){
            userDecision =<Sell updateSellArray = {this.updateSellArray}/> 
        }
        return (
            <div>
                <h1>Buy Sell App</h1>

                <button onClick = {this.userBuy}>Buying</button>
                <button onClick = {this.userSell}>Selling</button>
                {userDecision}
                <ListOfItems updateSellArray = {this.updateSellArray}/>
               
               
            </div>
        );
    }
}

export default AppContainer;