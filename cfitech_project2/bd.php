<?php
    try{
        $pdo = new PDO('mysql:dbname=db2;host=localhost', "root",""); 
        //On définit le mode d'erreur de PDO sur Exception
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo 'Connexion réussie';
    }catch (PDOException $e){
        die('Erreur : '. $e->getMessage());
    }

?>
