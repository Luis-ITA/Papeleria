<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=devide-width, initial-scale=1">

        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title> Programacion Web </title>
        <link href="{{ asset('css/app.css')}}" rel="stylesheet">
            <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossorigin="anonymous"
            />
    </head>
    <body style="background-color:#EEEEEE;">
        <div id="app"></div>
        <script src="{{ asset('js/app.js') }}"> </script>
        <script src="https://unpkg.com/react/umd/react.production.min.js" 
                crossorigin />
        <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" 
                crossorigin />
        <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" 
                crossorigin />
        <script src='https://maps.googleapis.com/maps/api/js'></script>



    </body>
</html>
