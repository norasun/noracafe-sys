/** @jsx React.DOM */
var React = require('react');
var OrderActions = require('../actions/OrderActions');
var ProductStore = require('../stores/ProductStore');

function getProductState(){

  return ProductStore.getAll();

}


var ProductItem = React.createClass({

  getInitialState: function(){
    return null;
  },

  _addOrder: function(){
    OrderActions.add({
      productID: this.props.key,
      productName: this.props.name,
      productPrice: this.props.price
    });
    return false;
  },

  render: function(){
    return(
      <div className="col-md-4">
      <a className="Product clearfix" href="#" ref="productContent"  onClick={this._addOrder}>

        <p className="text-l">
          {this.props.name}
        </p>
        <p className="pt-10">
          ¥{this.props.price}
        </p>
      </a>
      </div>
    );
  }


});


var ProductSelection = React.createClass({

  getInitialState: function(){
    return {data : getProductState()};
  },

  render: function(){

    var data = this.state.data;
    var ii = 1;

    var ProductList = data.map(function(item){

      return (

        <ProductItem name={item.name} price={item.price} key={item.id} itemID={item.id} />

      );

    });


    //console.log(ProductList);


    return (
      <div class="container-fluid">
        <div class="row clearfix">
          {ProductList}
        </div>
      </div>
    );
  }

});

module.exports = ProductSelection;
