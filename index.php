<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Acceuil</title>
</head>
<body>
    
    <form action="">
        <label for="distinct_id"> User id</label>
        <input type="text" name="distinct_id" id="distinct_id"  autocomplete="off">
        <label for="email"> email</label>
        <input type="email" name="email" id="email" autocomplete="off">
        <label for="name"> name</label>
        <input type="text" name="name" id="name" autocomplete="off">
        <label for="phone"> phone</label>
        <input type="text" name="phone" id="phone" autocomplete="off" placeholder="+261 03********">

        <a href="./chatpage.php" onclick="tidioUser()" target="_blank" rel="noopener noreferrer">Tidio</a>

        <!-- <a href="./chatpage.html" onclick="tidioUser()">chat</a> -->
        
        <script src="./SetCookies.js"></script>
    </form>

    
</body>
</html>