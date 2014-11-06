/** @jsx React.DOM */
var React = require('react');

var ProductSelection = require('./components/ProductSelection.react');
var CreateOrderList = require('./components/Order.react');
var OrderList = require('./components/OrderList.react');
var TodoList = require('./components/TodoList.react');

if( document.getElementById("productList") ){
  React.renderComponent(
    <ProductSelection />,
    document.getElementById('productList')
  );
}

if( document.getElementById("createOrderList") ){
  React.renderComponent(
    <CreateOrderList />,
    document.getElementById('createOrderList')
  );
}

if( document.getElementById("orderList") ){
  React.renderComponent(
    <OrderList />,
    document.getElementById('orderList')
  );
}
//
// if( document.getElementById("todoList") ){
//   React.renderComponent(
//     <TodoList />,
//     document.getElementById('todoList')
//   );
// }
