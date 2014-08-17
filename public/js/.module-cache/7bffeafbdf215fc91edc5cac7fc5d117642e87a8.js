//初始化

var _callbacks = [];
var _promises = [];


//创建dispatcher
var Dispatcher = function(){};



Dispatcher.prototype = $.extend(Dispatcher.prototype, {
  register: function(callback){
    _callback.push(callback);
    return _callback.length - 1;
  },
  dispatch: function(payload){
    var resolves = [];
    var rejects = [];
    _promises = _callbacks.map(function(_, i){
      return new Promise(function(resolve, reject){
        resolves[i] = resolve;
        reject[i] = reject;
      });
    });

    _callbacks.forEach(function(callback, i){

      Promise.resolve(callback(payload)).then(function(){
        resolves[i](payload);
      },function(){
        rejects[i](new Error('Dispatcher报错!'));
      });

    });

    _promises = [];

  }
});



//开始使用dispatcher
var AppDispatcher = $.extend(Dispatcher.prototype, {

  handleViewAction: function(action){

    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });

  }

});






alert(1);
