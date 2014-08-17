/** @jsx React.DOM */
var React = require('react');

var ProductSelection = require('./components/ProductSelection.react');
var OrderList = require('./components/Order.react');

React.renderComponent(
  <ProductSelection />,
  document.getElementById('productList')
);

React.renderComponent(
  <OrderList />,
  document.getElementById('orderList')
);
