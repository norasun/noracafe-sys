@extends('layout')


@section('content')

  <?php
    $products = Product::all()->toJson();

    if(isset($order_id)){
      $orderList = Order::find($order_id);

      if($orderList){
          $orderList = $orderList->load('Orderdetails')->toJson();
          echo $orderList;
      }



    }

  ?>

  <div class="container-fluid">

    <div class="row">
      <div class="col-md-9 col-lg-9">
        <div class="row">

          <div class="col-md-10 col-md-offset-1">
            <div class="white-container">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-12  mt-20 mb-20">
                    <strong class="text-xxl mr-20">点单</strong>
                    <a href="/create_product">设置</a>
                  </div>
                </div>
                <div id="productList" class="row">
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      <div class="col-md-3 col-lg-3">
        <div class="black-container">
          <form role="form" method="post" action="create_order">

          <div id="createOrderList">

          </div>

          <div class="pt-20">
            <textarea class="form-control" rows="2" placeholder="备注..."></textarea>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12" style="box-shadow:20px 0 50px 0 #f5f5f5;position:fixed;right:0;bottom:0;background:#f5f5f5;padding:20px;">
            <span class="text-xxl" style="padding-top:20px;margin-top:40px;">¥228</span>
            <button href="#" type="submit" class="btn btn-mwm btn-lg pull-right" >下单</button>
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
</script>
<!--script src="/js/order.js"></script-->
<script src="/js/flux/js/bundle.js"></script>

@stop
