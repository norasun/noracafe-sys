
  /** @jsx React.DOM */

  //产品
  var Product = React.createClass({
    onClick: function(e){

      var preOrderLeft = $('#'+e.target.id).offset().left;
      var preOrderTop = $('#'+e.target.id).offset().top - 2;
      var preOrderWidth = $('#'+e.target.id).outerWidth();
      this.props.productClick({productId: this.props.productId, name: this.props.name, price: this.props.price, offsetLeft: preOrderLeft, offsetTop: preOrderTop, width: preOrderWidth});
      return false;
    },
    render: function(){
      var domid = 'product'+this.props.productId;
      return (
        <a className="Product clearfix" onClick={this.onClick} href="#" id={domid} >
          <span className="pull-left">
            {this.props.name}
          </span>
          <span className="pull-right">
            ¥{this.props.price}
          </span>

        </a>
      );
    }
  });

  //产品列表
  var ProductList = React.createClass({
    render: function(){
      var obj = this;
      var productNodes = this.props.data.map(function(product){
        return (
          <Product name={product.name} price={product.price} productId={product.id} productClick={obj.props.productClick} />
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
        <div className="productBox" style={this.props.opacity}>
          <ProductList data={this.props.data} productClick={this.props.productClick} />
        </div>
      );
    },
    onClick: function(){
      alert(1);
    }
  });




  //订单
  var Order = React.createClass({
    render: function(){
      return (
        <div className="Order">
          {this.props.name}
          {this.props.num}份
          ¥{this.props.price}元
        </div>
      );
    }
  });

  //订单列表
  var OrderList = React.createClass({
    render: function(){
      var orderNodes = this.props.data.map(function(order){
        return (
          <Order name={order.name} num={order.num} price={order.price} />
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

    render: function(){
      return (
          <div class="OrderBox">
            <OrderList data={this.props.data} />
          </div>
      );

    }
  });

//订单预处理
  var PreOrder = React.createClass({
    getInitialState: function() {

      return {productId: '', productName: '', productNum: 1};
    },
    onClick: function(){

      this.props.orderSubmit({productName: this.props.name, productNum: this.refs.productNum.getDOMNode().value});
    },
    render: function(){
      if(this.props.show == 'show'){

        return (

          <div className="PreOrder" style={this.props.style}>
            {this.props.name}

            <select onChange={this.onChange} ref="productNum">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button type="button" onClick={this.onClick} className="btn btn-mwm">添加</button>
          </div>
        );
      }else{
        return (
          null
        );
      }

    }
  });

  //订单app
  var OrderApp = React.createClass({
    getInitialState: function() {

      return {data: data, orderData: [], preOrder:[]};
    },
    productClick: function(productInfo){
      var newData = this.state.data;
      var newOrderData = this.state.orderData;
      this.setState({data:newData, orderData:newOrderData, productboxopacity:{opacity:0.5}, preOrder: {show: 'show', style: {left: productInfo.offsetLeft, top: productInfo.offsetTop, width: productInfo.width}, productId: productInfo.productId, productName: productInfo.name}});
    },
    orderSubmit: function(orderInfo){
      var oldOrders = this.state.orderData;
      var num = parseInt(orderInfo.productNum);
      var newOrders = [];
      var changed = false;
      oldOrders.map(function(v, i){

        if(v.name == orderInfo.productName){
          //如果订单中已经点过的则更新数量
          num = num + parseInt(v.num);
          oldOrders.splice(i,1,{name: orderInfo.productName, num: num, price: 1}); //删除重复的订单，更新数量，然后在删除的节点后面直接追加
          newOrders = oldOrders;
          changed = true;
        }


      });
      //如果之前没有合并过重复订单，则直接追加
      if(changed == false){
          newOrders = oldOrders.concat([{name: orderInfo.productName, num: num, price: 1}]);
      }

      this.setState({data:data, orderData:newOrders, productboxopacity:{opacity:1}, preOrder: {show: '', productId: '', productName: ''}});

    },
    render: function(){
      var obj = this;
      var productNodes = this.state.data.map(function(product){
        return (
          <a className="Product" onClick={obj.onClick} href="#" id={product.id} >
            {product.name} ¥{product.price}
          </a>
        );
      });

      return (
        <div className="row">
          <div className="col-md-8">
            <div className="white-container">
              <h3>点单 <small className="text-muted">此界面由店员操作</small></h3>

              <ProductBox data={this.state.data} productClick={this.productClick} opacity={this.state.productboxopacity}/>

            </div>
          </div>

          <div className="col-md-4">
            <div className="black-container">
              <h3>订单</h3>
              <OrderBox data={this.state.orderData} />
            </div>
          </div>
          <PreOrder data={this.state.preOrder} show={this.state.preOrder.show} name={this.state.preOrder.productName} orderSubmit={this.orderSubmit} style={this.state.preOrder.style}/>
        </div>
      );
    }
  });


  React.renderComponent(<OrderApp />, document.getElementById('orderApp'));
