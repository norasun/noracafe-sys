/** @jsx React.DOM */
var React = require('react');

var ProductSelection = require('./components/ProductSelection.react');
var CreateOrderList = require('./components/Order.react');
var OrderList = require('./components/Order.react');

React.renderComponent(
  <ProductSelection />,
  document.getElementById('productList')
);

React.renderComponent(
  <CreateOrderList />,
  document.getElementById('orderList')
);

React.renderComponent(
  <OrderList />,
  document.getElementById('wowwow')
);


