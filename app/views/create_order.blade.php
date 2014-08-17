@extends('layout')


@section('content')

  <?php
    $products = Product::all()->toJson();
  ?>

  <div class="container">

    <div class="row">

      <div class="col-md-8">
        <div class="white-container">

          <div class="mb-15">
            <p>
              <strong class="text-l mr-20">菜单</strong>
              <a href="/create_product" class="btn btn-default btn-xs">商品管理</a>
            </p>
            <p>
            <small class="text-muted mr-10">
              此界面由掌柜操作，可以在客人点单时录入订单，也可在其他任意时间段把销售情况补录系统。

            </small>
            </p>
          </div>

          <div id="productList">
          </div>

        </div>
      </div>

      <div class="col-md-4">

        <div id="orderList">

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
<script src="/js/flux/bundle.js"></script>

@stop
