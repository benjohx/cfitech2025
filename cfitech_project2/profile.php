<?php
 $nav = "profile";
require_once "header.php";
require_once "Utilisateur.php";
if (!isset($_SESSION['user'])) {

    exit();
}
$user = Utilisateur::getUserByPseudo($_SESSION['user']['pseudo']);
?>
<style>

.profile-container {
  max-width: 600px;
  margin: 0 auto;
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}


.profile-container h1 {
  font-size: 2em;
  margin-bottom: 20px;
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
}


.profile-container p {
  font-size: 1em;
  line-height: 1.6;
  margin: 10px 0;
}


.profile-container p strong {
  display: inline-block;
  width: 120px;
  color: #555;
}


.profile-container a {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 15px;
  background-color: #007BFF;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.profile-container a:hover {
  background-color: #0056b3;
}
.profile-picture img {
    width: 150px; /* Adjust size */
    height: 150px;
    border-radius: 50%; /* Circular image */
    object-fit: cover;
    border: 2px solid #ccc;
    margin-bottom: 15px;
}


</style>


<div class="profile-container">
  
  <div class="profile-picture">
    <img src="<?= !empty($user['profile_picture']) ? htmlspecialchars($user['profile_picture']) : 'img/pro.jpg'; ?>" 
         alt="Photo de profil de <?= htmlspecialchars($user['pseudo']) ?>" />
  </div>

  <h1>Profil de <?= htmlspecialchars($user['pseudo']) ?></h1>
  <p><strong>Nom :</strong> <?= htmlspecialchars($user['nom']) ?></p>
  <p><strong>Prénom :</strong> <?= htmlspecialchars($user['prenom']) ?></p>
  <p><strong>Âge :</strong> <?= htmlspecialchars($user['age']) ?> ans</p>
  <p><strong>Ville :</strong> <?= htmlspecialchars($user['ville_nom']) ?></p>
  <p><strong>Nationalité :</strong> <?= strtoupper(substr(htmlspecialchars($user['pays']), 0, 4)) ?></p>
</div>
