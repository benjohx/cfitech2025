<?php 
    session_start();
    $title = "Dashboard";
    $nav = "dashboard";
    require "header.php";
    if(!is_connected()){
        header('Location: login.php');
        exit();
    }
?>
<h1>Bienvenue <?php echo $_SESSION['pseudo']; ?> dans votre Dashboard</h1>
<p>Voici votre profil...</p>
<?php require "profile.php"; ?>


<?php require "footer.php"; ?>