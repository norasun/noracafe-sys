/** @jsx React.DOM */
var React = require('react');
var OrderActions = require('../actions/OrderActions');
var ProductStore = require('../stores/ProductStore');
var OrderStore = require('../stores/OrderStore');

function getProductState(){

  return ProductStore.getAll();

}

function getOrderState(){
  return OrderStore.getNewOrder();
}


var ProductItem = React.createClass({

  getInitialState: function(){
    return null;
  },

  _addOrder: function(){
    OrderActions.add({
      productID: this.props.key,
      productName: this.props.name,
      productPrice: this.props.price
    });
    return false;
  },

  _reduceOrder: function(){

    OrderActions.reduce({
      productID: this.props.key,
      productName: this.props.name,
      productPrice: this.props.price
    });

    return false;
  },

  render: function(){
    //默认情况下产品未被选中
    var selected = 'Product clearfix';
    var select_num = '';
    var reduce_btn = '';
    //如果选中则高亮该产品
    if(this.props.num > 0){
      selected = 'Product clearfix selectedProduct';
      select_num = 'x' + this.props.num;
      reduce_btn = <a href="#" className="fa fa-minus-circle reduce_red_btn" onClick={this._reduceOrder}></a>;
    }
    return(
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">

      <a className={selected} href="#" ref="productContent"  onClick={this._addOrder}>

        <p className="text-l">
          <strong>{this.props.name}</strong>
        </p>
        <p className="help-block">
          ¥{this.props.price}
        </p>
        <span className="select_num">
          {select_num}
        </span>
      </a>
      </div>
    );
  }


});


var ProductSelection = React.createClass({

  getInitialState: function(){
    return {data : getProductState(), orderData: getOrderState()};
  },
  componentDidMount: function() {
    ProductStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    ProductStore.removeChangeListener(this._onChange);
  },

  _onChange: function(){

    this.setState({data: getProductState(), orderData: getOrderState()});
  },
  render: function(){

    var data = this.state.data;
    var orderData = this.state.orderData;
    var ii = 1;

    var ProductList = data.map(function(item){
      var productQuantity = 0;
      var aaa = orderData.map(function(wow){
        if(wow.productID == item.id){
          productQuantity = wow.productQuantity;
        }
      });

      return (

        <ProductItem name={item.name} price={item.price} key={item.id} itemID={item.id} num={productQuantity} />

      );

    });


    //console.log(ProductList);


    return (
      <div class="container-fluid">
        <div class="row clearfix">
          {ProductList}
        </div>
      </div>
    );
  }

});

module.exports = ProductSelection;
