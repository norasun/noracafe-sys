var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var merge = require('react/lib/merge');

var CHANGE_EVENT = 'change';

var _orders = [];


//添加订单
function add(orderInfo){

  var id = orderInfo.productID;
  var newOrderInfo = orderInfo;


  var changed = false;
  _orders.map(function(v, i){
    if(v.productID == orderInfo.productID){
      var quantity = v.productQuantity + 1;
      newOrderInfo.productQuantity = quantity;
      _orders.splice(i,1,newOrderInfo);
      changed = true;
    }
  });

  if(!changed){
    var quantity = 1;
    newOrderInfo.productQuantity = quantity;
    _orders.push(orderInfo);
  }
  console.log(_orders);

}

function reduce(orderInfo){

  var id = orderInfo.productID;
  var newOrderInfo = orderInfo;


  var changed = false;
  _orders.map(function(v, i){
    if(v.productID == orderInfo.productID){
      var quantity = v.productQuantity - 1;
      if(quantity <= 0){
        quantity = 0;
        _orders.splice(i,1);
      }else{
        newOrderInfo.productQuantity = quantity;
        _orders.splice(i,1,newOrderInfo);
      }

    }
  });

}


//修改订单量
function update(orderInfo){
  var newQuantity = _orders[orderInfo.productID].quantity + 1;
  _orders[id].productQuantity = newQuantity;
}

var OrderStore = merge(EventEmitter.prototype, {

  getAll: function(){
    return _orders;
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


AppDispatcher.register(function(payload){

  var action = payload.action;
  var data = payload.action.data;

  switch(action.actionType){
    case AppConstants.ActionTypes.ORDER_ADD:
      add(data);
      break;
    case AppConstants.ActionTypes.ORDER_REDUCE:
      reduce(data);
      break;
    default:
      return true;
  }

  OrderStore.emitChange();

  return true;

});


module.exports = OrderStore;
