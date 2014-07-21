<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="favicon.ico">

    <title>乐店</title>

    <!-- Bootstrap core CSS -->
    <link href="/css/bootstrap.min.css" rel="stylesheet">
    <link href="/css/jquery.datetimepicker.css" rel="stylesheet">
    <!-- Custom styles for this template -->
    <link href="/css/main.css" rel="stylesheet">

    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="/js/ie-emulation-modes-warning.js"></script>

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="/js/ie10-viewport-bug-workaround.js"></script>

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>

    <div class="navbar navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="logo" href="#"></a>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">

            <li class="active"><a href="/">首页</a></li>
            <li><a href="/create_ingredient">食材</a></li>
            <li><a href="/create_product">产品</a></li>
            <li><a href="/create_order">下单 <span class="badge">42</span></a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </div>



    <?php
    	$products = Product::all();

    	?>



    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>点菜</h1>
        </div>
      </div>

      <div>

        @foreach($products as $list)

          <div>
            {{$list->name}}
          </div>

        @endforeach


      </div>









    </div><!-- /.container -->


    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="/js/jquery.js"></script>
    <script src="/js/bootstrap.min.js"></script>
    <script src="/js/jquery.datetimepicker.js"></script>
    <script charset="utf-8">
      $(function(){

          $('#default_datetimepicker').datetimepicker({

            lang:'ch',
            timepicker:false,
            format:'Y/m/d',
            formatDate:'Y/m/d'
          });


      });

    </script>
  </body>
</html>
