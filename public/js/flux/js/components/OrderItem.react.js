var React = require('react');
var TodoActions = require('../actions/OrderActions');

var OrderItem = React.createClass({

  getInitialState: function(){

  },

  render: function(){
    var productID = this.props.productID;
    var productName = this.props.productName;
    var productPrice = this.props.productPrice;
    var productQuantity = this.props.productQuantity;

    return (

      <div className="Order clearfix">
        <span className="pull-left">{productName}</span>

        <span className="pull-right">¥{productPrice}元</span>
        <a href="#" className="pull-right orderAdd mr-20"><i className="fa fa-plus-circle"></i></a>
        <span className="pull-right orderNum">{productQuantity}</span>
        <a href="#" className="pull-right orderDelete"><i className="fa fa-minus-circle"></i></a>

      </div>

    );

  }

});
