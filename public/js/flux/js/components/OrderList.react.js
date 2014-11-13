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
    this.setState({data: getOrderListState()});
  },

  render: function(){
    var listData = this.state.data;
    var a = listData.map(function(v, i){
      var first_keyname = 'order' + i;
      var total_price = 0;
      var createTime = new Date(v.created_at);
      var formated_time =  createTime.getFullYear() + '-' + createTime.getMonth() + '-' + createTime.getDate();
      var b = v.orderdetails.map(function(item, i){
        var second_keyname = "orderdetail" + i;
        var item_price = parseInt(item.num) * parseInt(item.price);
        total_price += item_price;
        return(
          <div className="row lineList" key={second_keyname}>
            <div className="col-md-8 text-m">{item.name}</div>
            <div className="col-md-2 text-right">x{item.num}</div>
            <div className="col-md-2 text-right"><b>¥{item_price}</b></div>
          </div>
        );
      });
      var edit_url = "/update_order/" + v.id;
      return(
        <div  key={first_keyname}>

          <div className="perOrder clearfix">
            <div className="row b_line">
              <div className="col-md-6"><b>#{v.id}</b></div>
              <div className="col-md-6 text-right"><small className="small text-gray">{formated_time}</small></div>
            </div>
            <div className="row vcenter">
              <div className="col-md-9">
                {b}
                <div className="text-right">
                  <b className="text-xl">¥{total_price}</b>
                </div>
              </div>
              <div className="col-md-3">
                <div className="text-right text-xl pt-10">
                  <a href={edit_url} className="mr-10 edit-btn"></a>
                  <a href="#" className="trash-btn"></a>
                </div>
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
