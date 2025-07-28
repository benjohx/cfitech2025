-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 01, 2025 at 05:54 PM
-- Server version: 8.3.0
-- PHP Version: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db2`
--

DELIMITER $$
--
-- Procedures
--
DROP PROCEDURE IF EXISTS `getUserFromCities`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getUserFromCities` ()   BEGIN
SELECT CONCAT(firstname," ",lastname) AS auteur FROM utilisateur WHERE villes IN("paris","lion","New-York");
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `utilisateurs`
--

DROP TABLE IF EXISTS `utilisateurs`;
CREATE TABLE IF NOT EXISTS `utilisateurs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `prenom` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `pseudo` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `mot_de_passe` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `age` int NOT NULL,
  `ville_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `pseudo` (`pseudo`),
  KEY `ville_id` (`ville_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `utilisateurs`
--

INSERT INTO `utilisateurs` (`id`, `nom`, `prenom`, `pseudo`, `mot_de_passe`, `age`, `ville_id`) VALUES
(1, 'jackson', 'Karengera', 'Ali', '$2y$10$FC.vYMv9bQ55aBwrkj/RFezKkLXWQSI5H0ZaO7bf3IYPH05t2mEvq', 123456, 4),
(2, 'josue', 'Benimana', 'Josh', '$2y$10$d3a36G7sKCN.5HAbhYndW./CwOMTCRNtDt6YhMyNpZ6795m7NyVwC', 45, 2);

-- --------------------------------------------------------

--
-- Table structure for table `villes`
--

DROP TABLE IF EXISTS `villes`;
CREATE TABLE IF NOT EXISTS `villes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `pays` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `capitale` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `villes`
--

INSERT INTO `villes` (`id`, `nom`, `pays`, `capitale`) VALUES
(1, 'Paris', 'France', 'Paris'),
(2, 'Bruxelles', 'Belgique', 'Bruxelles'),
(3, 'Berlin', 'Allemagne', 'Berlin'),
(4, 'Madrid', 'Espagne', 'Madrid'),
(5, 'Rome', 'Italie', 'Rome'),
(6, 'Lisbonne', 'Portugal', 'Lisbonne'),
(7, 'Londres', 'Royaume-Uni', 'Londres'),
(8, 'Amsterdam', 'Pays-Bas', 'Amsterdam'),
(9, 'Vienne', 'Autriche', 'Vienne'),
(10, 'Athènes', 'Grèce', 'Athènes');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
