<!DOCTYPE html>
<html lang="en">
    <head>
		<meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie-edge">
        <title>Document</title>
	</head>
    <style>
        body {
            background-color: powderblue;
            }
        h1   {
            color: blue;
            }
        p    {
            color: red;
            }
    </style>
	<body>
		<h1>Correo electrónico</h1>
        <p>TIENES QUE CONFIRMAR EL CORREO <?php echo $usuario[0]['username']; ?></p>
        <a href='http://localhost/Clase/ProyectoFinal/Quimica/quimica/AppQuimica/server/public/api/usr/co_vf/<?php echo $usuario[0]['codigo_verificacion']; ?>'>
        ACTIVAR CUENTA</a>
	</body>
</html>
