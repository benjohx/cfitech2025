<?php
session_start();
 $_SESSION['role']= "admin";
$_SESSION['user']=[
    'firstname' => "benjohx1",
    'lastname' => "2025",
    'gender' => "M"
];
$title = "index";
$nav = "index";
require "header.php";
require "bd.php";




$resultat = $pdo->query('SELECT * from users');
$donnees = $resultat->fetchAll(PDO::FETCH_OBJ);
// Fetch formations
$formations = $pdo->query('SELECT * FROM formations')->fetchAll(PDO::FETCH_OBJ);

?>

     <!-- Hero Section -->
	 <section class="hero">
        <div class="hero-video">
            <video autoplay muted loop>
                <source src="./asset/videos/friends.mp4" >
            </video>
        </div>
        <div class="hero-content">
            <h1>Welcome to Cfitech</h1>
            <p>Where creativity meets innovation</p>
            <a href="login.php" class="cta-button glightbox" data-type="video">LOGIN</a>
        </div>
    </section>

<!-- Formations Section -->
<section class="formations">
    <div class="container">
        <h2>Nos Formations</h2>
        <div class="formation-list">
            <?php foreach ($formations as $formation): ?>
                <div class="formation-card">
                    <h3><?= htmlspecialchars($formation->intitule) ?></h3>
                    <p><strong>Durée:</strong> <?= $formation->nb_mois ?> mois</p>
                    <p><strong>Date de début:</strong> <?= date('d M Y', strtotime($formation->starting_date)) ?></p>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
<style> 

/* Formations Section */
.formations {
    padding: 60px 20px;
    background-color: #f9f9f9;
}

.formations h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 40px;
    color: #333;
}

.formation-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    max-width: 1100px;
    margin: 0 auto;
}

.formation-card {
    background-color: #fff;
    padding: 25px;
    border-radius: 15px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.formation-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
}

.formation-card h3 {
    font-size: 1.4rem;
    margin-bottom: 10px;
    color: #007bff;
}

.formation-card p {
    font-size: 0.95rem;
    margin-bottom: 8px;
    color: #555;
}


</style>

        
<?php require "footer.php"; ?>