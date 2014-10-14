var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var OrderStore = require('../stores/Orderstore');
var merge = require('react/lib/merge');

var CHANGE_EVENT = 'change';

if(typeof data == 'undefined'){
  var _products = {};
}else{
  var _products = data; //从服务端网页中获取数据
}





function updateit(info){
  
  var obj = OrderStore.getNewOrder();
  _products.map(function(v, i){

      if(v.id == info.productID){

        _products[i].number = info.productQuantity;

      }
      console.log(_products[i]);
  });


}


var ProductStore = merge(EventEmitter.prototype, {

  getAll: function(){
    return _products;
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});



ProductStore.dispatchToken = AppDispatcher.register(function(payload){

  AppDispatcher.waitFor([
    OrderStore.dispatchToken
  ]);

  var action = payload.action;
  var data = payload.action.data;

  switch(action.actionType){
    case AppConstants.ActionTypes.ORDER_ADD:
      updateit(data);
      break;
    case AppConstants.ActionTypes.ORDER_REDUCE:
      updateit(data);
      break;
    default:

  }

  ProductStore.emitChange();

  return true;

});
module.exports = ProductStore;
