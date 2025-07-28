<?php 
    $nav = "tourist";

?>
<?php
require_once "baseDeDonnees.php";

class Utilisateur {
    public static function create($nom, $prenom, $pseudo, $mot_de_passe, $age, $ville_id) {
        $pdo = Database::connect();
        $stmt = $pdo->prepare("INSERT INTO utilisateurs (nom, prenom, pseudo, mot_de_passe, age, ville_id) VALUES (?, ?, ?, ?, ?, ?)");
        return $stmt->execute([$nom, $prenom, $pseudo, password_hash($mot_de_passe, PASSWORD_DEFAULT), $age, $ville_id]);
    }

    public static function getUserByPseudo($pseudo) {
        $pdo = Database::connect();
        $stmt = $pdo->prepare("SELECT utilisateurs.*, villes.nom AS ville_nom, villes.pays FROM utilisateurs 
                               LEFT JOIN villes ON utilisateurs.ville_id = villes.id WHERE pseudo = ?");
        $stmt->execute([$pseudo]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
}
?>

