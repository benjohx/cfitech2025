
<?php
   
   
    try{
        $pdo = new PDO('mysql:dbname=josue_cfitech;host=localhost', "root",""); 

        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
       // echo 'Connexion réussie';
    }catch (PDOException $e){
        die('Erreur : '. $e->getMessage());
    }
?>
