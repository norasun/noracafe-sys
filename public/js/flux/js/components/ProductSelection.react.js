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
      productPrice: this.props.price,
    });
  },

  render: function(){
    return(
      <a className="Product clearfix" href="#" ref="productContent">

        <span className="pull-left">
           {this.props.name}
        </span>

        <button href="#" className="btn btn-default btn-sm pull-right" type="submit" onClick={this._addOrder}>加入订单</button>

        <span className="pull-right mr-20">
          ¥{this.props.price}
        </span>
      </a>
    );
  }


});


var ProductSelection = React.createClass({

  getInitialState: function(){
    return {data : getProductState()};
  },

  render: function(){

    var data = this.state.data;


    var ProductList = data.map(function(item){
      return (
        <ProductItem name={item.name} price={item.price} key={item.id} />
      );

    });


    //console.log(ProductList);


    return (
      <div>
        {ProductList}
      </div>
    );
  }

});

module.exports = ProductSelection;
