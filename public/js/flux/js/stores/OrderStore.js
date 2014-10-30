var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var merge = require('react/lib/merge');
var CHANGE_EVENT = 'change';



if(typeof newOrder == 'undefined'){
  var _newOrder = {};
}else{
  var _newOrder = newOrder; //从服务端网页中获取数据
}


if(typeof orderListData == 'undefined'){
  var _orders = {};
}else{
  var _orders = orderListData; //从服务端网页中获取数据
}

if(typeof todoListData == 'undefined'){
  var _todoList = {};
}else{
  var _todoList = todoListData; //从服务端网页中获取数据
}


//添加订单
function add(orderInfo){

  var id = orderInfo.productID;
  var newOrderInfo = orderInfo;


  var changed = false;
  _newOrder.map(function(v, i){
    if(v.productID == orderInfo.productID){
      var quantity = v.productQuantity + 1;
      
      _newOrder[i].productQuantity = quantity;
      changed = true;
    }
  });

  if(!changed){
    var quantity = 1;
    newOrderInfo.productQuantity = quantity;
    _newOrder.push(orderInfo);
  }
  console.log(_newOrder);
}

function reduce(orderInfo){

  var id = orderInfo.productID;
  var newOrderInfo = orderInfo;


  var changed = false;
  _newOrder.map(function(v, i){
    if(v.productID == orderInfo.productID){
      var quantity = v.productQuantity - 1;
      if(quantity <= 0){
        quantity = 0;
        _newOrder.splice(i,1);
      }else{
        newOrderInfo.productQuantity = quantity;
        _newOrder.splice(i,1,newOrderInfo);
      }

    }
  });

}

function updateTodo(data){

  _todoList.map(function(v,i){

    var orderdetails = v.orderdetails;
    var firstDom = i;
    orderdetails.map(function(v,i){
      var secondDom = i;
      if(v.id == data.todoId){
        _todoList[firstDom].orderdetails[secondDom].checked_num = parseInt(data.checkedNum);
        //更新数据库
        $.post('/set_orderdetail',{"todoId":data.todoId,"checkedNum":data.checkedNum}).done(function(data){

        });

        console.log(_todoList);
      }
    });
  });




}



var OrderStore = merge(EventEmitter.prototype, {

  getNewOrder: function(){
    return _newOrder;
  },
  getOrderList: function(){
    return _orders;
  },
  getTodoList: function(){
    return _todoList;
  },

  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  }


});


OrderStore.dispatchToken = AppDispatcher.register(function(payload){

  var action = payload.action;
  var data = payload.action.data;

  switch(action.actionType){
    case AppConstants.ActionTypes.ORDER_ADD:
      add(data);
      break;
    case AppConstants.ActionTypes.ORDER_REDUCE:
      reduce(data);
      break;
    case AppConstants.ActionTypes.TODO_UPDATE:
      updateTodo(data);
      break;
    default:
      return true;
  }

  OrderStore.emitChange();

  return true;

});


module.exports = OrderStore;
