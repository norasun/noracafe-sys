
  /** @jsx React.DOM */

  //产品
  var Product = React.createClass({
    onClick: function(e){
      /*
      var productObjId = this.refs.productContent.getDOMNode().id;
      var jqueryObj = $('#'+productObjId);
      var preOrderLeft = jqueryObj.offset().left;
      var preOrderTop = jqueryObj.offset().top - 2;
      var preOrderWidth = jqueryObj.outerWidth();
      this.props.productClick({productId: this.props.productId, name: this.props.name, price: this.props.price, offsetLeft: preOrderLeft, offsetTop: preOrderTop, width: preOrderWidth});
      */
      this.props.orderSubmit({productName: this.props.name, productNum: 1});
      return false;
    },
    render: function(){
      var domid = 'product'+this.props.productId;
      return (
        <a className="Product clearfix" href="#" onClick={this.onClick} ref="productContent" id={domid}>

          <span className="pull-left">
             {this.props.name}
          </span>

          <button href="#" className="btn btn-default btn-sm pull-right"  type="submit">加入订单</button>

          <span className="pull-right mr-20">
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
          <Product name={product.name} price={product.price} productId={product.id} productClick={obj.props.productClick} orderSubmit={obj.props.orderSubmit} />
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
          <ProductList data={this.props.data} productClick={this.props.productClick} orderSubmit={this.props.orderSubmit} />
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
        <div className="Order clearfix">
          <span className="pull-left">{this.props.name}</span>

          <span className="pull-right">¥{this.props.price}元</span>
          <a href="#" className="pull-right orderDelete mr-20"><i className="fa fa-plus-circle"></i></a>
          <span className="pull-right orderNum">{this.props.num}</span>
          <a href="#" className="pull-right orderDelete"><i className="fa fa-minus-circle"></i></a>

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
        <div className="OrderList">
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
  /*
  var PreOrder = React.createClass({
    getInitialState: function() {

      return {productId: '', productName: '', productNum: 1};
    },
    onClick: function(){
      this.props.orderSubmit({productName: this.props.name, productNum: this.refs.productNum.getDOMNode().value});
    },
    cancelOrder: function(){
      this.props.cancelOrder();
    },
    render: function(){
      if(this.props.show == 'show'){

        return (

          <div className="PreOrder clearfix" style={this.props.style}>
            {this.props.name}

            <select onChange={this.onChange} ref="productNum">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button type="button" onClick={this.onClick} className="btn btn-mwm pull-right">确定</button>
            <button type="button" onClick={this.cancelOrder} className="btn btn-default pull-right mr-20">取消</button>
          </div>
        );
      }else{
        return (
          null
        );
      }

    }
  });
  */

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
    cancelOrder: function(){
      var oldData = this.state.data;
      var oldOrderData = this.state.orderData;
      this.setState({data:oldData, orderData:oldOrderData, productboxopacity:{opacity:1}, preOrder: {show: '', productId: '', productName: ''}});
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
              <div className="mb-15">
                <p>
                  <strong className="text-l mr-20">菜单</strong>
                  <a href="/create_product" className="btn btn-default btn-xs">商品管理</a>
                </p>
                <p>
                <small className="text-muted mr-10">
                  此界面由掌柜操作，可以在客人点单时录入订单，也可在其他任意时间段把销售情况补录系统。
                  <a href="#">[ 如何规划菜单 ]</a>
                </small>
                </p>
              </div>
              <ProductBox data={this.state.data} productClick={this.productClick} orderSubmit={this.orderSubmit} opacity={this.state.productboxopacity}/>
            </div>
          </div>

          <div className="col-md-4">
            <div className="black-container">
              <div className="mb-15">
                <strong className="text-l mr-20">订单</strong>
              </div>
              <OrderBox data={this.state.orderData} />
              <div className="pt-20">
                订单时间:
                <input type="text" className="form-control" />
              </div>
              <div className="pt-20">
                桌位:
                <select>
                  <option>1</option>
                </select>
              </div>
              <div className="pt-20 clearfix">

                <button href="#" className="btn btn-mwm btn-lg pull-right">下单</button>
              </div>

            </div>
          </div>

        </div>
      );
    }
  });


  React.renderComponent(<OrderApp />, document.getElementById('orderApp'));
