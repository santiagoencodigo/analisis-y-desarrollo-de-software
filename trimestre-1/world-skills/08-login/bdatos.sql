CREATE DATABASE login_prueba;

USE login_prueba;

CREATE TABLE usuarios(
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(50) NOT NULL,
    password VARCHAR(200) NOT NULL
);

INSERT INTO usuarios(usuario, password) VALUES ('santiagoencodigo', 'santiago123');
