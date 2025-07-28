<?php
require "header.php";
// Database connection settings
$host = 'localhost'; // update if needed
$db   = 'josue_cfitech';
$user = 'root'; // update if needed
$pass = '';     // update if needed
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";

$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

// Fetch stagiaires with their formation name
$sql = "SELECT s.id, s.nom, s.prenom, s.email, s.date_naissance, f.intitule AS formation
        FROM stagiaires s
        LEFT JOIN formations f ON s.formation_id = f.id
        ORDER BY s.nom ASC, s.prenom ASC";

$stagiaires = $pdo->query($sql)->fetchAll();
?>
    <style>
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #1e1e1e;
    color: #f9f9f9;
    margin: 0;
    padding: 0;
}

h1, h2 {
    text-align: center;
    color: #f9f9f9;
    margin-top: 30px;
}

table {
    border-collapse: collapse;
    width: 80%;
    margin: 30px auto;
    background-color: #2b2b2b;
    color: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    border-radius: 10px;
    overflow: hidden;
}

th, td {
    padding: 12px 16px;
    text-align: left;
    border-bottom: 1px solid #444;
}

th {
    background-color: #007bff;
    color: #fff;
    font-weight: bold;
}

tr:hover {
    background-color: #3a3a3a;
}

    </style>
</head>
<body>
    <h2>Liste des Stagiaires</h2>
    <table>
        <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Formation</th>
            <th>Intitule</th>
        </tr>
        <?php foreach ($stagiaires as $stagiaire): ?>
<tr>
    <td><?= $stagiaire['id'] ?></td>
    <td><?= htmlspecialchars($stagiaire['nom'] ?? '') ?></td>
    <td><?= htmlspecialchars($stagiaire['prenom'] ?? '') ?></td>
    <td><?= htmlspecialchars($stagiaire['email'] ?? '') ?></td>
    <td><?= $stagiaire['date_naissance'] ?></td>
    <td><?= htmlspecialchars($stagiaire['formation'] ?? '') ?></td>
</tr>
        <?php endforeach; ?>
    </table>

    <?php require "footer.php"; ?>