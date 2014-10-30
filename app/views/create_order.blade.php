@extends('layout')


@section('content')

  <?php
    $products = Product::all()->toJson();

    $newOrder = json_encode(array());

    if(isset($order_id)){
      $orderList = Order::find($order_id);

      $jsStore = array();

      if($orderList){
          $orderList = $orderList->load('Orderdetails');

          foreach($orderList['orderdetails'] as $v){

            $jsStore[] = array(
              'productID' => $v['product_id'],
              'productName' => $v['name'],
              'productPrice' => $v['price'],
              'productQuantity' => $v['num']
            );

          }

          $newOrder = json_encode($jsStore);
      }



    }

  ?>

  <div class="container-fluid">

    <div class="row">
      <div class="col-md-8 col-lg-8">
        <div class="row">

          <div class="col-md-10 col-md-offset-1">
            <div class="white-container">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-12 text-center pt-50 pb-50 clearfix">
                    <a href="/create_product" class="pt-5" style="position: absolute;top:20px;right:10px">设置</a>
                    <strong class="text-xxl">点单</strong>

                  </div>
                </div>
                <div id="productList" class="row">
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      <div class="col-md-4 col-lg-4">
        <div class="black-container">
          <form role="form" method="post" action="create_order">

          <div id="createOrderList">

          </div>


          </form>
        </div>


      </div>

    </div>



  </div>
@stop


@section('js')
<script>
  var data = {{$products}};
  var newOrder = {{$newOrder}};
</script>
<!--script src="/js/order.js"></script-->
<script src="/js/flux/js/bundle.js"></script>

@stop
