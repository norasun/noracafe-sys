/** @jsx React.DOM*/

var React = require('react');
var ReactPropTypes = React.PropTypes;
var OrderActions = require('../actions/OrderActions');
var OrderStore = require('../stores/OrderStore');


//获取订单列表的数据
function getTodoListState() {
  return OrderStore.getTodoList();
}


var TodoList = React.createClass({
  getInitialState: function(){
    return {data: getTodoListState()};
  },
  componentDidMount: function() {
    OrderStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    OrderStore.removeChangeListener(this._onChange);
  },

  _onChange: function(){

    this.setState(getTodoListState());
  },

  render: function(){
    var listData = this.state.data;
    var a = listData.map(function(v, i){


      var b = v.orderdetails.map(function(item){
        return(
          <div className="row pb-10">
            <div className="col-md-7 text-m">
              <input type="checkbox" />
              <span className="ml-10">[{item.order_id}]  {item.num}份</span>
            </div>
          </div>
        );
      });
      return(
        <div>

          <div className="clearfix mb-20">
            <div className="row b_line">
              <div className="col-md-6 text-l"><b>{v.name}</b></div>

            </div>
            <div className="pl-30">
              {b}

            </div>


          </div>

        </div>
      );
    });

    return(
      <div className="black-container">{a}</div>
    );

  }
});




module.exports = TodoList;


