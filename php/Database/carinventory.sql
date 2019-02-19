-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 03, 2019 at 02:09 PM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `carinventory`
--

-- --------------------------------------------------------

--
-- Table structure for table `manufacturer`
--

CREATE TABLE `manufacturer` (
  `MafID` int(8) NOT NULL,
  `ManufactureName` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `manufacturer`
--

INSERT INTO `manufacturer` (`MafID`, `ManufactureName`) VALUES
(1, 'Toyota'),
(2, 'Tata Motors'),
(3, 'Land Rover '),
(4, 'Apollo'),
(5, 'Askam'),
(6, 'Setra'),
(7, 'Rimac'),
(8, 'Jaguar'),
(9, 'volkswagen'),
(10, 'Rider');

-- --------------------------------------------------------

--
-- Table structure for table `model`
--

CREATE TABLE `model` (
  `ModelID` int(8) NOT NULL,
  `MafID` int(8) NOT NULL,
  `Modelname` varchar(40) NOT NULL,
  `Color` varchar(40) NOT NULL,
  `Year` date NOT NULL,
  `RegistrationNo` varchar(40) NOT NULL,
  `Descripton` varchar(100) NOT NULL,
  `FileID` varchar(245) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `model`
--

INSERT INTO `model` (`ModelID`, `MafID`, `Modelname`, `Color`, `Year`, `RegistrationNo`, `Descripton`, `FileID`) VALUES
(1, 1, 'yaris', 'black', '2004-02-12', 'AP35 BR 1234', 'this is nice one ', 'uploads/Apollo-Automobil-logo-.png'),
(2, 3, 'Roman', 'blue', '2009-12-12', 'RZ 124', 'this includes best features that every one can love it', 'uploads/roman.jpg'),
(3, 2, 'swift', 'blue', '2018-02-11', 'AP35 1234', 'good one', 'uploads/roman.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `manufacturer`
--
ALTER TABLE `manufacturer`
  ADD PRIMARY KEY (`MafID`);

--
-- Indexes for table `model`
--
ALTER TABLE `model`
  ADD PRIMARY KEY (`ModelID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `manufacturer`
--
ALTER TABLE `manufacturer`
  MODIFY `MafID` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `model`
--
ALTER TABLE `model`
  MODIFY `ModelID` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
