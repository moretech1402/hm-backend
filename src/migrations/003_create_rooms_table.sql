CREATE TABLE rooms (
    id INT PRIMARY KEY AUTO_INCREMENT,              -- Clave primaria autoincremental
    dateAdded DATETIME DEFAULT CURRENT_TIMESTAMP,   -- Fecha de creación con valor por defecto
    roomType VARCHAR(100) NOT NULL,                 -- Tipo de habitación
    number INT NOT NULL,                            -- Número de la habitación
    picture VARCHAR(255) DEFAULT '',                -- URL de la imagen de la habitación
    bedType VARCHAR(100),                           -- Tipo de cama
    roomFloor VARCHAR(50),                          -- Piso de la habitación
    facilities TEXT DEFAULT '[]',                   -- Facilidades de la habitación, por defecto un JSON vacío
    rate DECIMAL(10, 2) NOT NULL,                  -- Tarifa de la habitación
    discount INT DEFAULT 0,                         -- Descuento por defecto en 0
    status VARCHAR(50) DEFAULT 'Booked' NOT NULL    -- Estado de la habitación
);
