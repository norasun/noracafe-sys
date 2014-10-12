/** @jsx React.DOM*/

var React = require('react');
var ReactPropTypes = React.PropTypes;
var OrderActions = require('../actions/OrderActions');
var OrderStore = require('../stores/OrderStore');


function getOrderState() {
  return {
    allOrders: OrderStore.getAll()
  };
}


var OrderItem = React.createClass({

  _addOrder: function(){

    OrderActions.add({
      productID: this.props.itemID,
      productName: this.props.name,
      productPrice: this.props.price
    });

    return false;
  },

  _reduceOrder: function(){

    OrderActions.reduce({
      productID: this.props.itemID,
      productName: this.props.name,
      productPrice: this.props.price
    });

    return false;
  },

  render: function(){
    return(
      <div className="Order clearfix">
        <span className="pull-left">{this.props.name}</span>

        <span className="pull-right">¥{this.props.price}</span>
        <a href="#" className="pull-right orderAdd mr-20" onClick={this._addOrder}> + </a>
        <span className="pull-right orderNum">{this.props.num}</span>
        <a href="#" className="pull-right orderDelete" onClick={this._reduceOrder}> - </a>

      </div>
    );

  }


});


var OrderList = React.createClass({

  getInitialState: function(){
    return getOrderState();
  },

  componentDidMount: function() {
    OrderStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    OrderStore.removeChangeListener(this._onChange);
  },

  _onChange: function(){

    this.setState(getOrderState());
  },

  render: function(){

    var data = this.state.allOrders;

    var orderList = data.map(function(item){
      console.log(item.productQuantity);
      var key = Date.now();
      return(

          <OrderItem itemID={item.productID} name={item.productName} price={item.productPrice} num={item.productQuantity} />
      );


    });


    return(
      <div>
        {orderList}
      </div>
    );

  }

});

module.exports = OrderList;
