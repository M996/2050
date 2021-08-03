<?php


function currenturl() {
$pageURL = 'http';
$pageURL .= "://";
if ($_SERVER["SERVER_PORT"] != "80") {
$pageURL .= $_SERVER["SERVER_NAME"].":".$_SERVER["SERVER_PORT"].$_SERVER["REQUEST_URI"];
} else {
$pageURL .= $_SERVER["SERVER_NAME"].$_SERVER["REQUEST_URI"];
}
return $pageURL;
}

$url = currenturl();
$url = currenturl();
if ($url ===  'http://website.com/index.php') {
 header("Location: https://website.com/index.php"); // Make sure website is redirecting to https from http.
}

if ($url != 'http://localhost/Skeleton-Custom/index.php' || $url != 'https://website.com/index.php') {
  session_start();
}


?>

<!DOCTYPE html>

<html>
<head>
  <meta charset="UTF-8">
  <meta name=viewport content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="public/css/index-style.css">
  <link rel="stylesheet" type="text/css" href="public/css/header-style.css">
  <link rel="stylesheet" type="text/css" href="public/css/build-window-style.css">
  <link rel="stylesheet" type="text/css" href="public/css/unit-window-style.css">
  <link rel="stylesheet" type="text/css" href="public/css/combat-window-style.css">
  <link rel="shortcut icon" href="public/images/mainlogo.ico">
  <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>
</head>



