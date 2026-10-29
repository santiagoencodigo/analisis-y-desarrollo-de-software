-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-05-2025 a las 02:52:29
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pruebanotas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiantes`
--

CREATE TABLE `estudiantes` (
  `ID_ESTUDIANTE` int(15) NOT NULL,
  `NOMBRE` varchar(60) NOT NULL,
  `APELLIDO` varchar(60) NOT NULL,
  `DOCUMENTO` varchar(12) NOT NULL,
  `CORREO` varchar(60) DEFAULT NULL,
  `MATERIA` varchar(30) NOT NULL,
  `DOCENTE` varchar(60) NOT NULL,
  `PROMEDIO` int(3) NOT NULL,
  `FECHA_REGISTRO` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estudiantes`
--

INSERT INTO `estudiantes` (`ID_ESTUDIANTE`, `NOMBRE`, `APELLIDO`, `DOCUMENTO`, `CORREO`, `MATERIA`, `DOCENTE`, `PROMEDIO`, `FECHA_REGISTRO`) VALUES
(2, 'Ana', 'Luna', '28897570', 'al@gmail.com', 'Matemáticas', 'Estefania Lopez', 99, '2025-04-18'),
(5, 'Soledad', 'Solecito', '1030500720', 'solsol@gmail.com', '3', 'Angel Cardenas', 100, '2025-04-18');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materias`
--

CREATE TABLE `materias` (
  `ID_MATERIA` int(15) NOT NULL,
  `MATERIA` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `materias`
--

INSERT INTO `materias` (`ID_MATERIA`, `MATERIA`) VALUES
(1, 'SOCIAL'),
(2, 'MATEMÁTICAS'),
(3, 'INGLES'),
(5, 'ETICA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `ID_USUARIO` int(11) NOT NULL,
  `NOMBRE` varchar(60) NOT NULL,
  `APELLIDO` varchar(60) NOT NULL,
  `USUARIO` varchar(40) NOT NULL,
  `CORREO` varchar(100) NOT NULL,
  `PASSWORD` varchar(80) NOT NULL,
  `PERFIL` varchar(30) NOT NULL,
  `ESTADO` varchar(20) DEFAULT NULL,
  `token_recuperacion` varchar(255) DEFAULT NULL,
  `token_expira` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`ID_USUARIO`, `NOMBRE`, `APELLIDO`, `USUARIO`, `CORREO`, `PASSWORD`, `PERFIL`, `ESTADO`, `token_recuperacion`, `token_expira`) VALUES
(1, 'Diego', 'Palacio', 'diegop', '', '123', 'Administrador', 'Activo', NULL, NULL),
(2, 'Angel', 'Cardenas', 'acor', '', '123', 'Docente', 'Activo', NULL, NULL),
(3, 'angel', 'tria', 'amtriana', '', '123', 'Administrador', 'Inactivo', NULL, NULL),
(5, 'Carolina', 'Sandoval', 'caros', 'amtrianasena@gmail.com', '123', 'Docente', 'Activo', '02747aa5e0ea8dbad4e73cf451c23d4dbd07be25248fb3f8fb81eb3e262024c9eef1e8a35fe65de507971af3f8d4f3731536', '2025-05-18 20:46:15'),
(6, 'angie', 'b', 'c', '', '456', 'Docente', 'Activo', NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `estudiantes`
--
ALTER TABLE `estudiantes`
  ADD PRIMARY KEY (`ID_ESTUDIANTE`);

--
-- Indices de la tabla `materias`
--
ALTER TABLE `materias`
  ADD PRIMARY KEY (`ID_MATERIA`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`ID_USUARIO`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `estudiantes`
--
ALTER TABLE `estudiantes`
  MODIFY `ID_ESTUDIANTE` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `materias`
--
ALTER TABLE `materias`
  MODIFY `ID_MATERIA` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `ID_USUARIO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
