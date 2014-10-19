@extends('layout')


@section('content')

  <?php
    $products = Product::all()->toJson();
  ?>

  <div class="container">

    <div class="row">
      <div class="col-md-8">
        <div class="mb-15" style="margin-top:20px;">
          <p>
            <strong class="text-xxl mr-20">点单</strong>
            <a href="/create_product">菜单设置</a>
          </p>
        </div>
      </div>

    </div>

    <div class="row">

      <div class="col-md-8">
        <div class="white-container">


          <div class="container-fluid">
            <div id="productList" class="row">
            </div>
          </div>

        </div>
      </div>

      <div class="col-md-4">
        <div class="black-container">
          <form role="form" method="post" action="create_order">

          <div id="createOrderList">

          </div>

          <div class="pt-20">
            <textarea class="form-control" rows="2" placeholder="备注..."></textarea>
          </div>
          <div class="pt-20 clearfix">

            <button href="#" type="submit" class="btn btn-mwm btn-lg pull-right btn-block">下单</button>
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
