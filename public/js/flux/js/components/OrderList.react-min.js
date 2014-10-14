/** @jsx React.DOM*/

var React = require('react');
var ReactPropTypes = React.PropTypes;
var OrderActions = require('../actions/OrderActions');
var OrderStore = require('../stores/OrderStore');


//获取订单列表的数据
function getOrderListState() {
  return OrderStore.getOrderList();
}


var OrderList = React.createClass({
  getInitialState: function(){
    return {data: getOrderListState()};
  },
  componentDidMount: function() {
    OrderStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    OrderStore.removeChangeListener(this._onChange);
  },

  _onChange: function(){

    this.setState(getOrderListState());
  },

  render: function(){
    var listData = this.state.data;
    var a = listData.map(function(v, i){
      var total_price = 0;
      var b = v.orderdetails.map(function(item){
        var item_price = parseInt(item.num) * parseInt(item.price);
        total_price += item_price;
        return(
          <div className="row lineList">
            <div className="col-md-7 text-m">{item.name}</div>
            <div className="col-md-2 text-right">x{item.num}</div>
            <div className="col-md-3 text-right"><b>¥{item_price}</b></div>
          </div>
        );
      });
      return(
        <div className="col-md-12">

          <div className="perOrder clearfix">
            <div className="row">
              <div className="col-md-8"><b>#{v.id}</b></div>
              <div className="col-md-4 text-right"><small className="small text-gray">创建于: {v.created_at}</small></div>
            </div>
            <div className="container-fluid">
              {b}
              <div className="row">
                <div className="col-md-12 text-right text-xl lineList"><b>¥{total_price}</b></div>
              </div>
            </div>


          </div>

        </div>
      );
    });

    return(
      <div>{a}</div>
    );

  }
});




module.exports = OrderList;


