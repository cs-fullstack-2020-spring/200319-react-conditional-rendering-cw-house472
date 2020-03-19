import React, {Component} from 'react'
class Buy extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            productTitle: "",
            productPrice: "",
            itemsOffered : []
         }
    }
    handleSubmission = (event) => {
        event.preventDefault();
        // console.log(this.state)
        this.state.itemsOffered.push({
            title: this.state.productTitle,
            price: this.stateproductPrice,
            condition: this.stateproductCondition
        });
        this.setState({ itemsOffered: this.state.itemsForSale })
        // console.log(this.state.itemsForSale)
        this.setState({
            productTitle: "",
            productPrice: "",
            
        })
    }
handleOffer = (event) => {
    
    if(event.target.name == "productTitle") {
        this.setState({productTitle :event.target.value})
    }else if(event.target.name == "productOfferPrice") {
        this.setState({productPrice :event.target.value})
    }
    
}
    render() { 
        return ( 
            <div>
 <form action="">
                    <fieldset>
                        <legend>Wanted To Buy</legend>
                        <label htmlFor="">Product title</label>
                        <input type="text" name="productTitle" id="productTitle" value={this.state.productTitle} onChange={this.handleOffer} />

                        <label htmlFor="">Product Offer Price</label>
                        <input type="text" name="productOfferPrice" id="productOfferPrice" value={this.state.productPrice} onChange={this.handleOffer} />

                        
                        <button onClick={this.handleSubmission}>Make Offer!</button>
                    </fieldset>
                </form>
            </div>
         );
    }
}
 
export default Buy;