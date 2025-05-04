ALTER TABLE hatarent.rentals DROP COLUMN location;
ALTER TABLE hatarent.rentals ADD latitude DECIMAL NOT NULL;
ALTER TABLE hatarent.rentals ADD longtitude DECIMAL NOT NULL;