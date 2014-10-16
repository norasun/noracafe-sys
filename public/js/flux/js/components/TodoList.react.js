/** @jsx React.DOM*/

var React = require('react');
var ReactPropTypes = React.PropTypes;
var OrderActions = require('../actions/OrderActions');
var TodoActions = require('../actions/TodoActions');
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
    this.setState({data: getTodoListState()});
    alert('changed!');
  },
  render: function(){
    var listData = this.state.data;
    var a = listData.map(function(v, i){

      var first_keyname = 'productname' + i;

      var b = v.orderdetails.map(function(item, i){
        var second_keyname = 'todolistname' + i;
        return(
          <div key={second_keyname} className="row pb-10">
            <div className="col-md-7 text-m">

              <span className="ml-10">{item.num}份 <Todo todoId={item.id} totalNum={item.num} checkedNum={item.checked_num} /></span>

            </div>
          </div>
        );
      });
      return(
        <div key={first_keyname}>

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

  updateTodolist: function(event){
    //console.log(data);
  //  console.log(event.target.value);
    TodoActions.update({
      "todoId": this.props.todoId,
      "checkedNum": event.target.value
    });

  },
  render: function(){
    var checklist = [];

    var checkedNum = parseInt(this.props.checkedNum);
    for(i=1;i<=parseInt(this.props.totalNum);i++){
      var todo_keyname = 'todo' + i;
      if(i<=checkedNum){

          checklist.push(<input key={todo_keyname} type="checkbox" className="mr-10" value={i} defaultChecked onChange={this.updateTodolist} />);
      }else{
          checklist.push(<input key={todo_keyname} type="checkbox" className="mr-10" value={i} onChange={this.updateTodolist} />);
      }


    }


    return(
      <span>{checklist}</span>
    );
  }
});


module.exports = TodoList;
