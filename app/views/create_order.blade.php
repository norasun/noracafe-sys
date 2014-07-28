@extends('layout')


@section('content')

  <?php
    $products = Product::all()->toJson();
  ?>

  <div class="container">
    

    <div id="orderApp">

    </div>

@stop


@section('js')
<script>
  var data = {{$products}};
</script>
<script type="text/jsx" src="/js/order.js"></script>

@stop
