<?php
 $nav = "login";
?>
<?php
require "header.php";
require_once "Utilisateur.php";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user = Utilisateur::getUserByPseudo($_POST['pseudo']);
    if ($user && password_verify($_POST['mot_de_passe'], $user['mot_de_passe'])) {
        session_start();
        $_SESSION['connected'] = true;
        $_SESSION['pseudo'] = $_POST['pseudo'];
        $_SESSION['user'] = $_POST['pseudo'] = $user;
        header("Location: profile.php");
        exit();
    } else {
        echo "Identifiants incorrects";
    }
}
?>

<main role="main" class="container">
    <style>
        .login-container h2 {
            margin-bottom: 15px;
            color: #333;
            font-size: 22px;
        }

        form {
            display: flex;
            flex-direction: column;
        }

        input {
            padding: 12px;
            margin: 8px 0;
            border: 1px solid #ccc;
            border-radius: 6px;
            font-size: 16px;
            width: 40%;
            transition: border-color 0.3s;
        }

        input:focus {
            border-color: #007bff;
            outline: none;
        }

        button {
            margin-top: 15px;
            padding: 12px;
            background-color: #007bff;
            color: white;
            width: 40%;
            border: none;
            border-radius: 6px;
            font-size: 16px;
            cursor: pointer;
            transition: background 0.3s, transform 0.2s;
        }

        button:hover {
            background-color: #0056b3;
            transform: scale(1.05);
        }
    </style>

    <div class="login-container">
        <h2>Login </h2>
    </div>
<form method="POST">
    <input type="text" name="pseudo" placeholder="Pseudo" required>
    <input type="password" name="mot_de_passe" placeholder="Mot de passe" required>
    <button type="submit">Se connecter</button>
</form>
</div>
</main>
    <?php
    require_once "footer.php";
?>