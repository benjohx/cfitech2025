<?php
session_start();
require "header.php";
require "bd.php"; // Database connection
$nav = "registration";
$title = "formation";

// If not connected, redirect
if (!isset($_SESSION['user'])) {
    header("Location: login.php");
    exit;
}

// Get all formations
$formations = $pdo->query("SELECT * FROM formations")->fetchAll(PDO::FETCH_OBJ);

// Check if a formation is selected
$selectedFormationId = $_GET['formation'] ?? null;
$stagiaires = [];

if ($selectedFormationId) {
    $stmt = $pdo->prepare("SELECT * FROM stagiaires WHERE formation_id = ?");
    $stmt->execute([$selectedFormationId]);
    $stagiaires = $stmt->fetchAll(PDO::FETCH_OBJ);
}
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

.menu {
    text-align: center;
    margin-bottom: 30px;
}
.menu a {
    margin: 0 10px;
    padding: 10px 20px;
    background: #007bff;
    color: white;
    border-radius: 10px;
    text-decoration: none;
}
.menu a:hover {
    background: #0056b3;
}

</style>

<!-- Submenu -->
<div class="menu">
    <?php foreach ($formations as $formation): ?>
        <a href="?formation=<?= $formation->id ?>"><?= htmlspecialchars($formation->intitule) ?></a>
    <?php endforeach; ?>
</div>

<?php if ($selectedFormationId): ?>
    <h2 style="text-align:center;">Stagiaires in <?= htmlspecialchars($formations[array_search($selectedFormationId, array_column($formations, 'id'))]->intitule ?? '') ?></h2>
    <?php if ($stagiaires): ?>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Email</th>
                    <th>Date de Naissance</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($stagiaires as $stagiaire): ?>
                    <tr>
                        <td><?= $stagiaire->id ?></td>
                        <td><?= htmlspecialchars($stagiaire->nom) ?></td>
                        <td><?= htmlspecialchars($stagiaire->prenom) ?></td>
                        <td><?= htmlspecialchars($stagiaire->email) ?></td>
                        <td><?= htmlspecialchars($stagiaire->date_naissance) ?></td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    <?php else: ?>
        <p style="text-align:center;">No stagiaires found for this formation.</p>
    <?php endif; ?>
<?php else: ?>
    <p style="text-align:center;">Please select a formation to see the stagiaires.</p>
<?php endif; ?>

<?php require "footer.php"; ?>