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



  render: function(){
    return(
      <div className="Order clearfix">
        <span className="pull-left">{this.props.name}</span>

        <span className="pull-right">¥{this.props.price}元</span>
        <a href="#" className="pull-right orderAdd mr-20"><i className="fa fa-plus-circle"></i></a>
        <span className="pull-right orderNum">{this.props.num}</span>
        <a href="#" className="pull-right orderDelete"><i className="fa fa-minus-circle"></i></a>

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
      return(

          <OrderItem key={item.productID} name={item.productName} price={item.productPrice} num={item.productQuantity} />
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
