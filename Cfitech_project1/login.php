<?php
//require "./asset//function//auttentificazione.php";
$title = "login";
$nav = "login";
require "header.php";
$erreur = null;


if (!empty($_POST['pseudo']) || !empty($_POST['password'])) {
    if ($_POST['pseudo'] === "zak" && $_POST['password'] === "0000") {
        session_start();


        $_SESSION['connected'] = true;
        $_SESSION['pseudo'] = $_POST['pseudo'];
    } else {
        $erreur = "Identifiants incorrects !";
    }
}
//require "header.php";
if (is_connected()){
    header("Location: formation.php");
}
if ($erreur) : ?>
        <?php echo $erreur ?>
    </div>
<?php endif;
?>
 

 <style>
/* Container for the login form */
.login-container {
  background: #1e1e1e;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  width: 100%;
  max-width: 400px;
  text-align: center;
    margin: 0 auto;
    margin-top: 100px;
    margin-bottom: 50px;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


}

/* Title */
.login-container h1 {
  margin-bottom: 24px;
  font-size: 2rem;
  color: #f9f9f9;
}

/* Inputs */
.login-container input[type="text"],
.login-container input[type="password"] {
  width: 100%;
  padding: 12px 15px;
  margin-bottom: 20px;
  border: none;
  border-radius: 8px;
  background: #2b2b2b;
  color: white;
  font-size: 1rem;
}

.login-container input::placeholder {
  color: #aaa;
}

/* Button */
.login-container button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-container button:hover {
  background-color: #0056b3;
}
 


</style>
<div class="login-container" align="center">
    </br>
    <h1>Login</h1>
    <form action="login.php" method="POST">
        <input type="text" name="pseudo" placeholder="Votre Login">
        <br><br>
        <input type="password" name="password" placeholder="Votre mot de passe">
        <br><br>
        <button class="btn btn-primary" type="submit">Se connecter</button>
    </form> 
</div>

<?php require "footer.php"; ?>