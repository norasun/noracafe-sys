var keyMirror = require('react/lib/keyMirror');

module.exports = {

  ActionTypes: keyMirror({
    ORDER_ADD: null, //添加订单
    ORDER_REDUCE: null, //删除订单
    TODO_UPDATE: null //更新todolist
  }),

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })

};
