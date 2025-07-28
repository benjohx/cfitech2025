<?php
    session_start();
    unset($_SESSION['connected']);
    //$_SESSION['connected'] = false;
    unset($_SESSION['pseudo']);
    header("Location: index.php");


































?>