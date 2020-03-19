import React, { Component } from 'react'
class ListOfItems extends Component {
    constructor(props) {
        super(props);
        this.state = {


        }
    }
    render() {
        return (
            <div>
                <h3>List of Items</h3>
                {/* TOFIX TYPE ERROR UPDATESELLARRAY.MAP NOT A FUNCTIION
                {
                    this.props.updateSellArray.map((sell, index) =>{
                        return(
                            <div key = {index}>
                                <p>Product Title : {sell.productTitle}</p>
                                <p>Product Price : {sell.productPrice}</p>
                                <p>Product Condition : {sell.productCondition}</p>
                            </div>
                        )
                    })
                } */}

            </div>
        );
    }
}

export default ListOfItems;