-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Generation Time: Jan 29, 2023 at 08:20 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `student database`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_login`
--

CREATE TABLE `admin_login` (
  `username` varchar(10) NOT NULL COMMENT 'primary key',
  `password` varchar(10) NOT NULL,
  `name` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin_login`
--

INSERT INTO `admin_login` (`username`, `password`, `name`) VALUES
('admin', 'admin@1234', 'adddminnn');

-- --------------------------------------------------------

--
-- Table structure for table `stu_all_details`
--

CREATE TABLE `stu_all_details` (
  `stu_id` varchar(10) NOT NULL COMMENT 'primary key',
  `name` varchar(20) NOT NULL,
  `date_of_birth` date NOT NULL,
  `gender` char(1) NOT NULL,
  `address` varchar(100) NOT NULL,
  `father_name` varchar(20) NOT NULL,
  `mother_name` varchar(20) NOT NULL,
  `mobile_no` int(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `class_teacher` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `stu_all_details`
--

INSERT INTO `stu_all_details` (`stu_id`, `name`, `date_of_birth`, `gender`, `address`, `father_name`, `mother_name`, `mobile_no`, `email`, `class_teacher`) VALUES
('1dt20cs001', 'rahul', '2002-02-02', 'm', 'delhi', 'raj', 'simran', 2147483647, 'admin234@gmail.com', 'hgdgdgd'),
('1dt20cs002', 'anu', '2002-05-05', 'f', 'dayalcity', 'anoop', 'reshma', 2147483647, 'anu@gmail.com', 'sharma'),
('1dt20cs003', 'rani', '2005-03-05', 'f', 'westbengal', 'dharam', 'geeta', 15468973, 'admin234@gmail.com', 'napsat'),
('1dt20cs005', 'raju', '2000-10-10', 'm', 'QR. No -35/01/08 gh colony chhota govindpur jamshedpur', 'shashi', 'dimpi', 2147483647, 'raju869@gmail.com', 'pankaj'),
('1dt20cs103', 'Joydeep kundu 14 5', '0022-02-22', 'm', 'QR. No -35/01/08 ggfhgsahfghdsagdjh colony chhota govindpur jamshedpur', 'puneet', 'dimpi', 895625897, 'joydeepkundu597@gmail.com', 'sharma');

-- --------------------------------------------------------

--
-- Table structure for table `stu_attendence`
--

CREATE TABLE `stu_attendence` (
  `ST_ID` varchar(10) NOT NULL,
  `ATTENDANCE` char(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `stu_subandmarks`
--

CREATE TABLE `stu_subandmarks` (
  `st_id` varchar(25) NOT NULL COMMENT 'primary key\r\n',
  `subject` char(10) NOT NULL,
  `ia1` int(3) NOT NULL,
  `ia2` int(3) NOT NULL,
  `ia3` int(3) NOT NULL,
  `final` int(3) NOT NULL,
  `st_id1` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `stu_subandmarks`
--

INSERT INTO `stu_subandmarks` (`st_id`, `subject`, `ia1`, `ia2`, `ia3`, `final`, `st_id1`) VALUES
('0000000math', 'math', 0, 0, 0, 0, '0000000'),
('0000000physics', 'physics', 0, 0, 0, 0, '0000000'),
('1dt20cs002math', 'math', 0, 0, 0, 0, '1dt20cs002'),
('1dt20cs002ph', 'ph', 20, 30, 40, 70, '1dt20cs002'),
('1dt20cs003chemestry', 'chemestry', 45, 30, 20, 80, '1dt20cs003'),
('1dt20cs003civil', 'civil', 30, 50, 45, 75, '1dt20cs003'),
('1dt20cs003english', 'english', 10, 20, 30, 40, '1dt20cs003'),
('1dt20cs003math', 'math', 50, 47, 45, 85, '1dt20cs003'),
('1dt20cs003physics', 'physics', 45, 35, 50, 75, '1dt20cs003'),
('1dt20cs005math', 'math', 0, 0, 0, 0, '1dt20cs005'),
('1dt20cs103math', 'math', 0, 0, 0, 0, '1dt20cs103');

-- --------------------------------------------------------

--
-- Table structure for table `teacher_validation`
--

CREATE TABLE `teacher_validation` (
  `tid` varchar(10) NOT NULL COMMENT 'primary key',
  `teacher_name` varchar(20) NOT NULL,
  `password` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_login`
--
ALTER TABLE `admin_login`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `stu_all_details`
--
ALTER TABLE `stu_all_details`
  ADD PRIMARY KEY (`stu_id`);

--
-- Indexes for table `stu_attendence`
--
ALTER TABLE `stu_attendence`
  ADD PRIMARY KEY (`ST_ID`);

--
-- Indexes for table `stu_subandmarks`
--
ALTER TABLE `stu_subandmarks`
  ADD PRIMARY KEY (`st_id`);

--
-- Indexes for table `teacher_validation`
--
ALTER TABLE `teacher_validation`
  ADD PRIMARY KEY (`tid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
