<?php
class Database {
    private static $host = "localhost";
    private static $dbname = "db2";
    private static $username = "root";
    private static $password = "";
    private static $pdo;

    public static function connect() {
        if (!isset(self::$pdo)) {
            try {
                self::$pdo = new PDO("mysql:host=" . self::$host . ";dbname=" . self::$dbname . ";charset=utf8", self::$username, self::$password);
                self::$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } catch (PDOException $e) {
                die("Erreur de connexion : " . $e->getMessage());
            }
        }
        return self::$pdo;
    }
}
?>