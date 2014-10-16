/** @jsx React.DOM*/

var React = require('react');
var ReactPropTypes = React.PropTypes;
var OrderActions = require('../actions/OrderActions');
var OrderActions = require('../actions/TodoActions');
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

              <span className="ml-10">{item.num}份 <Todo totalNum={item.num} checkedNum={1} /></span>

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

var Todo = React.createClass({
  getInitialState: function(){
    return null;
  },
  wow: function(){
    alert(1);
  },
  render: function(){
    var checklist = [];
    for(i=1;i<=parseInt(this.props.totalNum);i++){
      if(i<=this.props.checkedNum){
          checklist.push(<input type="checkbox" className="mr-10" defaultChecked onClick={this.wow}/>);
      }else{
          checklist.push(<input type="checkbox" className="mr-10" />);
      }


    }


    return(
      <span>{checklist}</span>
    );
  }
});


module.exports = TodoList;
