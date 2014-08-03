@extends('layout')


@section('content')

  <?php
    $products = Product::all()->toJson();
  ?>

  <div class="container">


    <div id="orderApp">

    </div>

  </div>
@stop


@section('js')
<script>
  var data = {{$products}};
</script>
<script src="/js/order.js"></script>

@stop
