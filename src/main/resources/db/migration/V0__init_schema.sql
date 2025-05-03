CREATE TABLE hatarent.users (
	id BIGINT auto_increment NOT NULL PRIMARY KEY,
	email varchar(319) NOT NULL,
	password_hash varchar(255) NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	is_admin BOOL DEFAULT 0 NOT NULL,
	CONSTRAINT users_email UNIQUE KEY (email)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_unicode_ci;

CREATE TABLE hatarent.profiles (
	id BIGINT auto_increment NOT NULL PRIMARY KEY,
	user_id BIGINT NOT NULL,
	picture_path varchar(100) NULL,
	name varchar(10) NOT NULL,
	surname varchar(10) NOT NULL,
	about varchar(200) NULL,
	rewards SET('good host','polite','respectful') NULL,
	CONSTRAINT profiles_users_FK FOREIGN KEY (user_id) REFERENCES hatarent.users(id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_unicode_ci;

CREATE TABLE hatarent.rentals (
	id BIGINT auto_increment NOT NULL PRIMARY KEY,
	name varchar(200) NOT NULL,
	description varchar(200) NOT NULL,
	location POINT NOT NULL,
	price_per_night DECIMAL(19,2) NOT NULL,
	features SET('pet friendly','smoking allowed')
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_unicode_ci;

CREATE TABLE hatarent.usersRental (
	user_id BIGINT NOT NULL,
	rental_id BIGINT NOT NULL,
	CONSTRAINT usersRental_users_FK FOREIGN KEY (user_id) REFERENCES hatarent.users(id) ON DELETE CASCADE,
	CONSTRAINT usersRental_rental_FK FOREIGN KEY (rental_id) REFERENCES hatarent.rentals(id) ON DELETE CASCADE
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_unicode_ci;

CREATE TABLE hatarent.reviews (
	id BIGINT auto_increment NOT NULL PRIMARY KEY,
	user_id BIGINT,
	rental_id BIGINT NOT NULL,
	rating ENUM('1','2','3','4','5') NOT NULL,
	description varchar(200) NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	CONSTRAINT reviews_users_FK FOREIGN KEY (user_id) REFERENCES hatarent.users(id) ON DELETE SET NULL,
	CONSTRAINT reviews_rental_FK FOREIGN KEY (rental_id) REFERENCES hatarent.rentals(id) ON DELETE CASCADE
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_unicode_ci;

CREATE TABLE hatarent.booking (
	id BIGINT auto_increment NOT NULL PRIMARY KEY,
	user_id BIGINT NOT NULL,
	rental_id BIGINT NOT NULL,
	start_date DATE NOT NULL,
	duration INT NOT NULL,
	accepted_at TIMESTAMP NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	CONSTRAINT booking_users_FK FOREIGN KEY (user_id) REFERENCES hatarent.users(id) ON DELETE CASCADE,
	CONSTRAINT booking_rental_FK FOREIGN KEY (rental_id) REFERENCES hatarent.rentals(id) ON DELETE CASCADE
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_unicode_ci;

CREATE TABLE hatarent.rental_image (
	rental_id BIGINT NOT NULL,
	image_path varchar(100) NOT NULL,
  image_position INT NOT NULL,
	CONSTRAINT rental_image_rental_FK FOREIGN KEY (rental_id) REFERENCES hatarent.rentals(id) ON DELETE CASCADE,
  CONSTRAINT rental_image_position UNIQUE (rental_id, image_position)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_unicode_ci;
