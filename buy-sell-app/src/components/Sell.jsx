import React, { Component } from 'react'
class Sell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productTitle: "",
            productPrice: "",
            productCondition: "",
            itemsForSale : []
        }
    }
    handleSubmission = (event) => {
        event.preventDefault();
        // console.log(this.state)
        this.state.itemsForSale.push({
            title: this.state.productTitle,
            price: this.stateproductPrice,
            condition: this.stateproductCondition
        });
        this.setState({ itemsForSale: this.state.itemsForSale })
        // console.log(this.state.itemsForSale)
        this.setState({
            productTitle: "",
            productPrice: "",
            productCondition: "",
        })
    }
handleOffer = (event) => {
    
    if(event.target.name == "productTitle") {
        this.setState({productTitle :event.target.value})
    }else if(event.target.name == "productPrice") {
        this.setState({productPrice :event.target.value})
    }else if(event.target.name == "productCondition") {
        this.setState({productCondition :event.target.value});
        
    } 
    
}

    render() {
        return (
            <div>
                <form action="">
                    <fieldset>
                        <legend>Items For Sale</legend>
                        <label htmlFor="">Product title</label>
                        <input type="text" name="productTitle" id="productTitle" value={this.state.productTitle} onChange={this.handleOffer} />

                        <label htmlFor="">Product Price</label>
                        <input type="text" name="productPrice" id="productPrice" value={this.state.productPrice} onChange={this.handleOffer} />

                        <label htmlFor="">Product Condition</label>
                        <input type="text" name="productCondition" id="productConditioin" value={this.state.productCondition} onChange={this.handleOffer} />

                        <button onClick={this.handleSubmission}>Make Offer!</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default Sell;