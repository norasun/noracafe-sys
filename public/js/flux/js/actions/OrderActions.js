var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var OrderActions = {

  add: function(orderInfo){

    AppDispatcher.handleViewAction({
      actionType: AppConstants.ActionTypes.ORDER_ADD,
      data: orderInfo
    });

  },

  reduce: function(orderInfo){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ActionTypes.ORDER_REDUCE,
      data: orderInfo
    });

  }

}

module.exports = OrderActions;
