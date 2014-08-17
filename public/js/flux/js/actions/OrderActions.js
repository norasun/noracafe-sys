var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var OrderActions = {

  add: function(orderInfo){

    AppDispatcher.handleViewAction({
      actionType: AppConstants.ORDER_ADD,
      data: orderInfo
    });
    
  }

}

module.exports = OrderActions;
