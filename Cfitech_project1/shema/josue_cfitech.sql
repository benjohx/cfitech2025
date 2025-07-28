-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 14, 2025 at 11:58 AM
-- Server version: 9.1.0
-- PHP Version: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `josue_cfitech`
--

-- --------------------------------------------------------

--
-- Table structure for table `formations`
--

DROP TABLE IF EXISTS `formations`;
CREATE TABLE IF NOT EXISTS `formations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `intitule` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `nb_mois` int DEFAULT NULL,
  `starting_date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `formations`
--

INSERT INTO `formations` (`id`, `intitule`, `nb_mois`, `starting_date`) VALUES
(1, 'Web Dev', 12, '2026-01-05'),
(2, 'Technicien', 11, '2025-08-25'),
(3, 'Java Dev', 7, '2025-09-01');

-- --------------------------------------------------------

--
-- Table structure for table `stagiaires`
--

DROP TABLE IF EXISTS `stagiaires`;
CREATE TABLE IF NOT EXISTS `stagiaires` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `prenom` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `date_naissance` date DEFAULT NULL,
  `formation_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `formation_id` (`formation_id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `stagiaires`
--

INSERT INTO `stagiaires` (`id`, `nom`, `prenom`, `email`, `date_naissance`, `formation_id`) VALUES
(1, 'Benimana', 'Josué', 'josue.kouadio@example.com', '1998-03-15', 1),
(2, 'Traoré', 'Fatou', 'fatou.traore@example.com', '2000-06-22', 1),
(3, 'Diallo', 'Ibrahim', 'ibrahim.diallo@example.com', '1997-11-08', 1),
(4, 'Zak', 'Khalimu', 'zak.khalimu@tubiddy.com', '1998-03-15', 2),
(5, 'Dunia', 'Julien', 'jdunia@cfitech.be', '2000-04-11', 2),
(6, 'Diallo', 'Ibrahim', 'ibrahim.diallo@cfitech.be', '1997-11-08', 2),
(7, 'Kiliku', 'kiku', 'kilikukiku@ecfitech.be', '1998-03-15', 1),
(8, 'Fatima', 'Fatou', 'fatima@cfitech.be', '1198-06-22', 1),
(9, 'Asadi', 'Saifu', 'asadi.sayi@cfitech.be', '0000-00-00', 1),
(12, 'Jack', 'BORE', 'jackboire@cfitech.be', '1998-03-15', 3),
(11, 'Exode', 'Rukundo', 'rukundo.exo@cfitech.be', '2025-04-19', 1),
(13, 'Rose', 'Marie', 'rosemarie@cfitech.be', '2000-06-22', 3),
(14, 'John', 'Walker', 'johnwalker@cfitech.be', '1997-11-08', 3),
(15, 'MURINDANYINA', 'RICHARD', 'richard@cfitech.be', '2025-04-25', 2);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `stagiaire_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  KEY `stagiaire_id` (`stagiaire_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
