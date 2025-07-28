<?php
require_once "baseDeDonnees.php";

class Ville {
    public static function getAll() {
        $pdo = Database::connect();
        $stmt = $pdo->query("SELECT * FROM villes");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
?>
