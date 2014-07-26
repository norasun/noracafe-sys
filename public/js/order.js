
  /** @jsx React.DOM */

  //产品
  var Product = React.createClass({
    render: function(){
      return (
        <a className="Product" onClick={this.onClick} href="#" >
          {this.props.name}
          ¥{this.props.price}
        </a>
      );
    },
    onClick: function(){
      orderdata = orderdata2;
    }
  });

  //产品列表
  var ProductList = React.createClass({
    render: function(){
      var productNodes = this.props.data.map(function(product){
        return (
          <Product name={product.name} price={product.price} />
        );


      });

      return (
        <div className="productList">
          {productNodes}
        </div>
      );

    }
  });

  //产品控件
  var ProductBox = React.createClass({
    render: function(){
      return (
        <div className="productBox">
          <ProductList data={this.props.data} />
        </div>
      );
    },
    onClick: function(){
      alert(1);
    }
  });



  var orderdata = [
        {name: "Pete Hunt", text: "This is one comment"},
        {name: "Jordan Walke", text: "This is *another* comment"}
  ];

  var orderdata2 = [
        {name: "Pete Hunt", text: "This is one comment"},
        {name: "Jordan Walke", text: "This is *another* comment"},
        {name: "norasun", text: "This is *another* comment"}
  ];


  //订单
  var Order = React.createClass({
    render: function(){
      return (
        <div className="Order">
          {this.props.name}
        </div>
      );
    }
  });

  //订单列表
  var OrderList = React.createClass({
    render: function(){
      var orderNodes = this.props.data.map(function(order){
        return (
          <Order name={order.name} />
        );
      });
      return (
        <div class="Orderlist">
          {orderNodes}
        </div>
      );
    }
  });

  //订单控件
  var OrderBox = React.createClass({
    getInitialState: function() {
      return {data: []};
    },
    render: function(){
      return (
          <div class="OrderBox">
            <OrderList data={this.props.data} />
          </div>
      );

    }
  });

  //订单app
  var OrderApp = React.createClass({
    getInitialState: function() {
      return {data: data, orderData: orderdata};
    },
    onClick: function(e){
      this.setState({data: [{name:'好呀！'}], orderData:[{name:'xx'}]});
      alert(e.target.name);
    },
    render: function(){
      var obj = this;
      var productNodes = this.state.data.map(function(product){
        return (
          <a className="Product" onClick={obj.onClick} href="#" name={product.name} >
            {product.name}
            ¥{product.price}
          </a>
        );
      });

      return (
        <div className="row">
          <div className="col-md-8">
            <div className="white-container" >
              <div className="productBox">
                <div className="productList">
                  {productNodes}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="black-container">
              订单
              <OrderBox data={this.state.orderData} />
            </div>
          </div>
        </div>
      );
    }
  });


  React.renderComponent(<OrderApp />, document.getElementById('orderApp'));
