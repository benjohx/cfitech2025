<?php
$nav = "signup";
require_once "header.php";
require_once "Utilisateur.php";
require_once "Ville.php";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    Utilisateur::create($_POST['nom'], $_POST['prenom'], $_POST['pseudo'], $_POST['mot_de_passe'], $_POST['age'], $_POST['ville_id']);
    echo "Inscription réussie ! <a href='login.php'>Connectez-vous</a>";
}
$villes = Ville::getAll();
?>
<main role="main" class="container">
    <style>
     
.form-container {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
}

.form-container h2 {
    margin-bottom: 15px;
    color: #333;
}

form {
    display: flex;
    flex-direction: column;
}

label {
    font-size: 14px;
    font-weight: bold;
    text-align: left;
    display: block;
    margin-top: 10px;
}

input, select {
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    width: 100%;
}

button {
    margin-top: 15px;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s;
}

button:hover {
    background-color: #0056b3;
}
    </style>
</head>
<body>

    <div class="form-container">
        <h2>Inscription</h2>
        <form method="POST">
            <label for="nom">Nom</label>
            <input type="text" id="nom" name="nom" placeholder="Nom" required>

            <label for="prenom">Prénom</label>
            <input type="text" id="prenom" name="prenom" placeholder="Prénom" required>

            <label for="pseudo">Pseudo</label>
            <input type="text" id="pseudo" name="pseudo" placeholder="Pseudo" required>

            <label for="mot_de_passe">Mot de passe</label>
            <input type="password" id="mot_de_passe" name="mot_de_passe" placeholder="Mot de passe" required>

            <label for="age">Âge</label>
            <input type="number" id="age" name="age" placeholder="Âge" required>

            <label for="ville_id">Ville</label>
            <select id="ville_id" name="ville_id" required>
                <?php foreach ($villes as $ville) { 
                    echo "<option value='{$ville['id']}'>{$ville['nom']}</option>"; 
                } ?>
            </select>

            <button type="submit">S'enregistrer</button>
        </form>
    </div>

    </div>
    </main>
    <?php
    require_once "footer.php";
?>