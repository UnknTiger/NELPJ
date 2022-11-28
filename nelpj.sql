-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 28, 2022 at 08:36 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nelpj`
--

-- --------------------------------------------------------

--
-- Table structure for table `papal_mysteries`
--

CREATE TABLE `papal_mysteries` (
  `id` int(11) NOT NULL,
  `mystery` varchar(500) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `papal_mysteries`
--

INSERT INTO `papal_mysteries` (`id`, `mystery`, `description`) VALUES
(1, 'The Joyful Mysteries', 'are marked by the joy radiating from the event of the Incarnation. This is clear from the very first mystery, the Annunciation, where Gabriel\'s greeting to the Virgin of Nazareth is linked to an invitation to messianic joy: \"Rejoice, Mary.\" The whole of salvation … had led up to this greeting. \r\n(Prayed on Mondays and Saturdays, and optional on Sundays during Advent and the Christmas Season.)'),
(2, 'The Sorrowful Mysteries', 'The Gospels give great prominence to the Sorrowful Mysteries of Christ. From the beginning, Christian piety, especially during the Lenten devotion of the Way of the Cross, has focused on the individual moments of the Passion, realizing that here is found the culmination of the revelation of God\'s love and the source of our salvation.\r\n(Prayed on Tuesdays and Fridays, and optional on Sundays during Lent.)'),
(3, 'The Glorious Mysteries', '\"The contemplation of Christ\'s face cannot stop at the image of the Crucified One. He is the Risen One!\" The Rosary has always expressed this knowledge born of faith and invited the believer to pass beyond the darkness of the Passion in order to gaze upon Christ\'s glory in the Resurrection and Ascension. … Mary herself would be raised to that same glory in the Assumption.\r\n(Prayed on Wednesdays and Sundays.)'),
(4, 'The Luminous Mysteries', 'Moving on from the infancy and the hidden life in Nazareth to the public life of Jesus, our contemplation brings us to those mysteries which may be called in a special way \"mysteries of light.\" Certainly, the whole mystery of Christ is a mystery of light. He is the \"Light of the world\" (John 8:12). Yet this truth emerges in a special way during the years of His public life.\r\n(Prayed on Thursdays.)');

-- --------------------------------------------------------

--
-- Table structure for table `prayer_rosary`
--

CREATE TABLE `prayer_rosary` (
  `id` int(11) NOT NULL,
  `title` varchar(500) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `prayer_rosary`
--

INSERT INTO `prayer_rosary` (`id`, `title`, `description`) VALUES
(1, 'The sign of the cross', 'In the name of the father, and of the son, and of the holy spirit. Amen'),
(2, 'The Apostles\' Creed', 'I believe in God,\r\nthe Father almighty,\r\nCreator of heaven and earth,\r\nand in Jesus Christ, his only Son, our Lord. He was conceived by the Holy Spirit, and \r\nborn of the Virgin Mary.\r\nHe suffered under Pontius Pilate,\r\nwas crucified, died and was buried;\r\nHe descended to the dead. \r\nOn the third day he rose again from the dead;\r\nhe ascended into heaven,\r\nand is seated at the right hand of the father. He will come again to judge the living and the dead.\r\n\r\nI believe in the Holy Spirit,\r\nthe holy catholic Church,\r\nthe communion of saints,\r\nthe forgiveness of sins,\r\nthe resurrection of the body,\r\nand life everlasting.\r\nAmen.'),
(3, 'The Our Father', 'Our Father, who art in heaven,\r\nhallowed be thy name;\r\nthy kingdom come;\r\nthy will be done on earth as it is in heaven.\r\nGive us this day our daily bread;\r\nand forgive us our trespasses\r\nas we forgive those who trespass\r\nagainst us;\r\nand lead us not into temptation,\r\nbut deliver us from evil.\r\nAmen'),
(4, 'The Hail Mary', 'Hail Mary, full of grace, the Lord is with thee;\r\nblessed art though among women,\r\nand blessed is the fruit of thy womb, Jesus.\r\nHoly Mary, Mother of God,\r\npray for us sinners\r\nnow and at the hour of our death.\r\nAmen.'),
(5, 'The Glory Be To The Father', 'Glory be to the Father, the Son, and the Holy Spirit;\r\nas it was in the beginning, is now, and ever shall be,\r\nworld without end.\r\nAmen.'),
(6, 'The Hail Holy Queen', 'Hail, holy Queen, mother of mercy,\r\nour life, our sweetness, and our hope.\r\nTo you we cry, poor banished children of Eve;\r\nto you we send up our sighs,\r\nmourning and weeping in this valley of tears.\r\nTurn, then, most gracious advocate,\r\nyour eyes of mercy toward us;\r\nand after this, our exile,\r\nshow unto us the blessed fruit of your womb, Jesus.\r\nO clement, O loving, O sweet Virgin Mary.');

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `id` int(11) NOT NULL,
  `lname` varchar(500) NOT NULL,
  `fname` varchar(500) NOT NULL,
  `mi` varchar(2) NOT NULL,
  `gender` varchar(7) NOT NULL,
  `address` text NOT NULL,
  `age` int(100) NOT NULL,
  `birthday` date NOT NULL,
  `contact` varchar(13) NOT NULL,
  `email` varchar(100) NOT NULL,
  `job` text NOT NULL,
  `job_position` text NOT NULL,
  `job_address` text NOT NULL,
  `affiliates` text NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `consecration` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`id`, `lname`, `fname`, `mi`, `gender`, `address`, `age`, `birthday`, `contact`, `email`, `job`, `job_position`, `job_address`, `affiliates`, `username`, `password`, `consecration`) VALUES
(1, 'Anguit', 'Raeshelle Joy', 'S.', 'Female', 'Cadulang, Marigondon, Lapu-Lapu City, Cebu. ', 23, '1998-12-19', '09924317168', 'rae0anguit@gmail.com', 'Philippine President', 'Philippine President', 'Malacañang Palace', 'Government agencies', 'rae', 'rae', 'No'),
(2, 'Berdin', 'Lazie', 'L.', 'Female', 'Babag II, Lapu-Lapu City, Cebu', 26, '1995-10-04', '09928618438', 'lazieberdin@gmail.com', 'IT Specialist', 'IT Specialist', 'Austin, Texas, United States', 'Cerner Corp, Aconex, Textura Corporation.', 'laz', 'laz', 'Yes'),
(3, 'de los Santos', 'Mikee', 'T.', 'Female', 'Camolinas, ', 26, '1996-04-16', '09672415732', 'mikeedelossantos1434@gmail.com', 'Queen of England', 'Queen', 'Buckingham Palace', 'United Kingdom', 'mikee', 'mikee', 'Yes'),
(4, 'Dela Cruz', 'Juan', 'D', 'Female', 'Endi nalista, Cebu City, Cebu.', 0, '2000-02-02', '121345678', 'Juan', 'Consultant', 'Consultant HR department', 'Endi nalista Cebu CIty, Cebu.', 'Google', 'juan', 'juan', 'Yes');

-- --------------------------------------------------------

--
-- Table structure for table `testimonies`
--

CREATE TABLE `testimonies` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `msg` text NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `testimonies`
--

INSERT INTO `testimonies` (`id`, `name`, `msg`, `date`) VALUES
(1, 'Dr. Jun G. Waga, specialist in Occupational Medicine and CFC Area Director for Misamis Oriental', 'Many CFC Members started the 33 day preparation for Total Consecration last January 1, 2012. Some have even sent text reminders. My wife Sony feels we are closer to Mama Mary. I get to recite the rosary more often. By the way, Boy S. brought the 100 books of Secret of Mary to Ozamis City. Praise Jesus thru Mary!', '2012-01-06'),
(2, 'Mr. Romy A. Banaynal, Food Security Strategy Expert for Ministry of Food and Agriculture, North Ghana, CFC member', 'I grew up in a very Marian environment but later my charismatic prayer life focused more on personal relationship with Jesus. Reading St. Montfort’s Total Consecration however, I realize this personal relationship can be more intense through the Motherhood of Mary. Last family Christmas reunion, I shared about the Total Consecration and distributed 40 books of The Secret of Mary by St. Montfort. I am glad everyone is working on the 33-day preparation before Total Consecration and I anticipate we will all consecrate on February 2, 2012.', '2012-01-18'),
(3, 'Pilar S. Parreño, WPI Provincial Coordinator, Misamis Oriental, Region X.', 'I was indeed so shocked that in my neighborhood,  the water reached up to half the level of their houses but in mine the flood didn’t enter!', '2012-01-09'),
(4, 'Brother Art Nunez, coordinator, Mother Thrice Admirable.', 'Your coming over to share the Total Consecration in Cagayan de Oro and Iligan is indeed a true mission!  I still remember when you quoted some message revelation about floods. We did the Consecration prayer with 45 groups of families (around 500 families) and they were protected by what we did.  I saw with my own eyes how the Consecration protected about 500 families who live in Kanaway Saray, Iligan. They live along the coast where over a thousand logs destroyed an area 300 meters away, leaving only two small houses. But in our area with more than 500 families, water around us was normal, as if there was no typhoon Sendong. We have 120 groups of fifteen families in Iligan and 300 groups in 3 other towns. Each family prays the rosary daily before the pilgrim Mother. We will add the praying of the Total Consecration to our prayers in all our groups. We need to re-orient the groups to know more the meaning of Total Consecration to Jesus thru Mary. God bless you and Happy New Year!', '2012-01-01'),
(5, 'Testimony of Dr. Cecilia Legarda, former Assistant Chief of Commission for Higher Education (CHED), NCR', 'I arranged for Mr. Rodel M. (of Jesus Christ Five Fold Ministries who is helping to spread the Total Consecration)  to pray over Genovena Dedomo, sister of Dr. Linda Tacorda. She was scheduled for an operation because six doctors had said her arm needed to be amputated due to cancer. She and her husband were prayed over using the Total Consecration. She felt a tingling sensation. She and her husband cried and believed that Genovena was cured. She has been taking morphine twice a day because of her pain but that night she slept well without it. Linda got their family members to pray the Total Consecration for Genovena before her operation. The miracle is that she did not have to have her arm amputated and instead a mass was removed. Genoveva said after the  Total Consecration, she is closer to Our Lady. She now knows that she will not be abandoned by Our Lady and that she has a mission.', '2012-01-05');

-- --------------------------------------------------------

--
-- Table structure for table `userlogin`
--

CREATE TABLE `userlogin` (
  `id` int(11) NOT NULL,
  `username` varchar(500) NOT NULL,
  `password` varchar(500) NOT NULL,
  `role` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userlogin`
--

INSERT INTO `userlogin` (`id`, `username`, `password`, `role`) VALUES
(1, 'admin', 'admin', 1),
(2, 'user', 'user', 0),
(3, 'vue', 'vue', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `papal_mysteries`
--
ALTER TABLE `papal_mysteries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `prayer_rosary`
--
ALTER TABLE `prayer_rosary`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testimonies`
--
ALTER TABLE `testimonies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `userlogin`
--
ALTER TABLE `userlogin`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `papal_mysteries`
--
ALTER TABLE `papal_mysteries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `prayer_rosary`
--
ALTER TABLE `prayer_rosary`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `register`
--
ALTER TABLE `register`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `testimonies`
--
ALTER TABLE `testimonies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `userlogin`
--
ALTER TABLE `userlogin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
