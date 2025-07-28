<?php
require_once "./asset//function//auttentificazione.php"
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css">
    <title> <?php

            if (isset($title)):
                echo $title;
            else:
                echo "newsite";

            endif;

            ?> </title>
    <link rel="stylesheet" href="./asset/./style/./index.css">
</head>

<body>

<header class="header">
        <nav class="nav-container">
            <a href="index.php" class="logo"><img src="./asset/img/logo.png" alt="logo"></a>


            <ul class="nav-menu">
             
                <li class="nav-item <?php if($nav = "index"): ?>active<?php endif ?>">
                    <a href="index.php">HOME</a>
                </li>
                <?php if (is_connected()): ?>
                <li class="nav-item <?php if($nav = "stagiaires"): ?>active<?php endif ?>">
                    <a href="list_stagiaires.php">STAGIAIRES</a>
                </li>
                <?php endif; ?>
                <?php if (is_connected()): ?>
                <li class="nav-item <?php if($nav = "formation"): ?>active<?php endif ?>">
                    <a href="formation.php">PARFORMATION</a>
                </li>
                <?php endif; ?>
                <?php if (is_connected()): ?>
                <li class="nav-item <?php if($nav = "registration"): ?>active<?php endif ?>">
                    <a href="add_stagiaire.php">REGISTRATION</a>
                </li>
                   <?php endif; ?>   
                <?php if(!is_connected()): ?>
                <li class="nav-item <?php if ($nav === "login"): ?> active <?php endif ?>">
                    <a  class="nav-link" href="./login.php">LOGIN </a>
                </li>
                <?php else: ?>
                <li class="nav-item <?php if ($nav === "logout"): ?> active <?php endif ?>">
                    <a  class="nav-link" href="./logout.php">LOGOUT</a>
                </li>  
                <?php endif; ?>
                
            </ul>

            <div class="mobile-menu">
                <i class="fas fa-bars"></i>
            </div>
        </nav>
    </header>


    