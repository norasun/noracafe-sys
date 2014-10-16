var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var TodoActions = {

  update: function(todoInfo){

    AppDispatcher.handleViewAction({
      actionType: AppConstants.ActionTypes.TODO_UPDATE,
      data: todoInfo
    });

  }

}

module.exports = TodoActions;
