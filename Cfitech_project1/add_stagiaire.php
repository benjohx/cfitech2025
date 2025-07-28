<?php
require "header.php";
// Database connection settings
$host = 'localhost'; // change to your DB host
$db   = 'josue_cfitech';
$user = 'root'; // change to your DB username
$pass = '';     // change to your DB password
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";

// Error handling
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $email = $_POST['email'];
    $date_naissance = $_POST['date_naissance'];
    $formation_id = $_POST['formation_id'];

    $sql = "INSERT INTO stagiaires (nom, prenom, email, date_naissance, formation_id)
            VALUES (:nom, :prenom, :email, :date_naissance, :formation_id)";

    $stmt = $pdo->prepare($sql);

    try {
        $stmt->execute([
            ':nom' => $nom,
            ':prenom' => $prenom,
            ':email' => $email,
            ':date_naissance' => $date_naissance,
            ':formation_id' => $formation_id,
        ]);
        $message = "Stagiaire ajouté avec succès!";
    } catch (\PDOException $e) {
        $message = "Erreur: " . $e->getMessage();
    }
}

// Fetch formations for dropdown
$formations = $pdo->query("SELECT id, intitule FROM formations")->fetchAll();
?>

    <style>
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #1e1e1e;
    color: #f9f9f9;
    margin: 0;
    padding: 20px;
}

h2 {
    text-align: center;
    color: #00bcd4;
    margin-bottom: 30px;
}

form {
    max-width: 500px;
    margin: 0 auto;
    background-color: #2c2c2c;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 0 15px rgba(0,0,0,0.5);
}

form label {
    display: block;
    margin-bottom: 6px;
    font-weight: 600;
    color: #ccc;
}

form input[type="text"],
form input[type="email"],
form input[type="date"],
form select {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 6px;
    background-color: #444;
    color: #fff;
    margin-bottom: 20px;
    font-size: 14px;
}

form input:focus,
form select:focus {
    outline: none;
    border: 2px solid #00bcd4;
    background-color: #555;
}

button[type="submit"] {
    width: 100%;
    padding: 12px;
    background-color: #00bcd4;
    color: #fff;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s ease;
}

button[type="submit"]:hover {
    background-color: #0097a7;
}

p strong {
    display: block;
    text-align: center;
    background: #333;
    padding: 10px;
    border-left: 5px solid #00bcd4;
    margin-bottom: 20px;
    color: #fff;
}


    </style>



<body>
    <h2>Ajouter un Stagiaire</h2>
    <?php if (!empty($message)) echo "<p><strong>$message</strong></p>"; ?>

    <form method="POST">
        <label>Nom:</label><br>
        <input type="text" name="nom" required><br><br>

        <label>Prénom:</label><br>
        <input type="text" name="prenom" required><br><br>

        <label>Email:</label><br>
        <input type="email" name="email" required><br><br>

        <label>Date de Naissance:</label><br>
        <input type="date" name="date_naissance" required><br><br>

        <label>Formation:</label><br>
        <select name="formation_id" required>
            <option value="">-- Sélectionner --</option>
            <?php foreach ($formations as $formation): ?>
                <option value="<?= $formation['id'] ?>"><?= htmlspecialchars($formation['intitule']) ?></option>
            <?php endforeach; ?>
        </select><br><br>

        <button type="submit">Ajouter</button>
    </form>
</body>

<?php require "footer.php"; ?>
