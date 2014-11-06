/** @jsx React.DOM*/

var React = require('react');
var ReactPropTypes = React.PropTypes;
var OrderActions = require('../actions/OrderActions');
var OrderStore = require('../stores/OrderStore');

//获取创建订单的数据
function getNewOrderState() {
  return {
    allOrders: OrderStore.getNewOrder()
  };
}
//获取订单列表的数据
function getcreateOrderListState() {
  return {
    createOrderList: OrderStore.getcreateOrderList()
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
    var total_price = parseInt(this.props.price) * parseInt(this.props.num);

    return(
      <div className="Order clearfix">
        <span className="pull-left">{this.props.name}  <span className="text-gray text-s">¥{this.props.price}</span></span>


        <a href="#" className="pull-right orderAdd" onClick={this._addOrder}> + </a>
        <span className="pull-right orderNum">{this.props.num}</span>
        <a href="#" className="pull-right orderDelete" onClick={this._reduceOrder}> - </a>

      </div>
    );

  }


});




var createOrderList = React.createClass({

  getInitialState: function(){
    return getNewOrderState();
  },

  componentDidMount: function() {
    OrderStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    OrderStore.removeChangeListener(this._onChange);
  },

  _onChange: function(){

    this.setState(getNewOrderState());
  },

  render: function(){

    var data = this.state.allOrders;
    var total_price = 0;
    var createOrderList = data.map(function(item){
      console.log(item.productQuantity);
      var key = Date.now();
      total_price += item.productPrice * item.productQuantity;
      if(item.productQuantity > 0){
          return(

              <OrderItem itemID={item.productID} name={item.productName} price={item.productPrice} num={item.productQuantity} />

          );
      }



    });

    var textData = JSON.stringify(data);
    return(
      <div>
        {createOrderList}

        <input type="hidden" name="hiddendata" value={textData} />

        <div className="pt-20">
          <textarea className="form-control" rows="2" placeholder="备注"></textarea>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 footerBar">

          <button href="#" type="submit" className="btn btn-mwm btn-lg pull-right" >下单</button>
          <span className="text-xxl mt-20 mr-20 pull-right">¥{total_price}</span>
        </div>

      </div>

    );

  }

});

module.exports = createOrderList;
