
  /** @jsx React.DOM */

  //产品
  var Product = React.createClass({displayName: 'Product',
    onClick: function(e){
      var productObjId = this.refs.productContent.getDOMNode().id;
      var jqueryObj = $('#'+productObjId);
      var preOrderLeft = jqueryObj.offset().left;
      var preOrderTop = jqueryObj.offset().top - 2;
      var preOrderWidth = jqueryObj.outerWidth();
      this.props.productClick({productId: this.props.productId, name: this.props.name, price: this.props.price, offsetLeft: preOrderLeft, offsetTop: preOrderTop, width: preOrderWidth});
      return false;
    },
    render: function(){
      var domid = 'product'+this.props.productId;
      return (
        React.DOM.a({className: "Product clearfix", href: "#", onClick: this.onClick, ref: "productContent", id: domid}, 
          React.DOM.span({className: "pull-left"}, 
            this.props.name
          ), 

          React.DOM.span({className: "pull-right"}, 
            React.DOM.button({className: "btn btn-default btn-sm", type: "submit"}, "添加")
          ), 
          React.DOM.span({className: "pull-right"}, 
            "¥", this.props.price
          )

        )
      );
    }
  });

  //产品列表
  var ProductList = React.createClass({displayName: 'ProductList',
    render: function(){
      var obj = this;
      var productNodes = this.props.data.map(function(product){
        return (
          Product({name: product.name, price: product.price, productId: product.id, productClick: obj.props.productClick})
        );


      });

      return (
        React.DOM.div({className: "productList"}, 
          productNodes
        )
      );

    }
  });

  //产品控件
  var ProductBox = React.createClass({displayName: 'ProductBox',
    render: function(){
      return (
        React.DOM.div({className: "productBox", style: this.props.opacity}, 
          ProductList({data: this.props.data, productClick: this.props.productClick})
        )
      );
    },
    onClick: function(){
      alert(1);
    }
  });




  //订单
  var Order = React.createClass({displayName: 'Order',
    render: function(){
      return (
        React.DOM.div({className: "Order"}, 
          this.props.name, 
          this.props.num, "份" + ' ' +
          "¥", this.props.price, "元"
        )
      );
    }
  });

  //订单列表
  var OrderList = React.createClass({displayName: 'OrderList',
    render: function(){
      var orderNodes = this.props.data.map(function(order){
        return (
          Order({name: order.name, num: order.num, price: order.price})
        );
      });
      return (
        React.DOM.div({class: "Orderlist"}, 
          orderNodes
        )
      );
    }
  });

  //订单控件
  var OrderBox = React.createClass({displayName: 'OrderBox',

    render: function(){
      return (
          React.DOM.div({class: "OrderBox"}, 
            OrderList({data: this.props.data})
          )
      );

    }
  });

//订单预处理
  var PreOrder = React.createClass({displayName: 'PreOrder',
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

          React.DOM.div({className: "PreOrder clearfix", style: this.props.style}, 
            this.props.name, 

            React.DOM.select({onChange: this.onChange, ref: "productNum"}, 
              React.DOM.option({value: "1"}, "1"), 
              React.DOM.option({value: "2"}, "2"), 
              React.DOM.option({value: "3"}, "3"), 
              React.DOM.option({value: "4"}, "4"), 
              React.DOM.option({value: "5"}, "5")
            ), 
            React.DOM.button({type: "button", onClick: this.onClick, className: "btn btn-mwm pull-right"}, "添加"), 
            React.DOM.button({type: "button", onClick: this.onClick, className: "btn btn-mwm pull-right"}, "取消")
          )
        );
      }else{
        return (
          null
        );
      }

    }
  });

  //订单app
  var OrderApp = React.createClass({displayName: 'OrderApp',
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
      this.setState({data:oldData, orderData:oldOrders, productboxopacity:{opacity:1}, preOrder: {show: '', productId: '', productName: ''}});
    },
    render: function(){
      var obj = this;
      var productNodes = this.state.data.map(function(product){
        return (
          React.DOM.a({className: "Product", onClick: obj.onClick, href: "#", id: product.id}, 
            product.name, " ¥", product.price
          )
        );
      });

      return (
        React.DOM.div({className: "row"}, 
          React.DOM.div({className: "col-md-8"}, 
            React.DOM.div({className: "white-container"}, 
              React.DOM.h3(null, "点单 ", React.DOM.small({className: "text-muted"}, "此界面由店员操作")), 

              ProductBox({data: this.state.data, productClick: this.productClick, opacity: this.state.productboxopacity})

            )
          ), 

          React.DOM.div({className: "col-md-4"}, 
            React.DOM.div({className: "black-container"}, 
              React.DOM.h3(null, "订单"), 
              OrderBox({data: this.state.orderData})
            )
          ), 
          PreOrder({data: this.state.preOrder, show: this.state.preOrder.show, name: this.state.preOrder.productName, orderSubmit: this.orderSubmit, cancelOrder: this.cancelOrder, style: this.state.preOrder.style})
        )
      );
    }
  });


  React.renderComponent(OrderApp(null), document.getElementById('orderApp'));
