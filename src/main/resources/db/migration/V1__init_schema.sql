CREATE TABLE hatarent.usersRental (
	user_id BIGINT NOT NULL,
	rental_id BIGINT NOT NULL,
	CONSTRAINT usersRental_users_FK FOREIGN KEY (user_id) REFERENCES hatarent.users(id),
	CONSTRAINT usersRental_rental_FK FOREIGN KEY (rental_id) REFERENCES hatarent.rental(id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_unicode_ci;

CREATE TABLE hatarent.profiles (
	id BIGINT auto_increment NOT NULL PRIMARY KEY,
	user_id BIGINT NOT NULL,
	picture_id BIGINT NOT NULL,
	name varchar(20) NOT NULL,
	surname varchar(20) NOT NULL,
	fullname varchar(40) NULL,
	about varchar(100) NULL,
	rewards SET('friendly', 'polite', 'respectful') NULL,
	CONSTRAINT profiles_users_FK FOREIGN KEY (user_id) REFERENCES hatarent.users(id),
	CONSTRAINT profiles_profile_images_FK FOREIGN KEY (picture_id) REFERENCES hatarent.profile_images(id) ON DELETE SET NULL
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_unicode_ci;

CREATE TABLE hatarent.profile_images (
	id BIGINT auto_increment NOT NULL PRIMARY KEY,
	image_path varchar(100) NOT NULL,
	CONSTRAINT profile_images_path UNIQUE KEY (image_path)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_unicode_ci;

C
CREATE TABLE hatarent.review (
	id BIGINT auto_increment NOT NULL PRIMARY KEY,
	user_id BIGINT NULL,
	rental_id BIGINT NOT NULL,
	rating ENUM(1,2,3,4,5) NOT NULL,
	description varchar(200) NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NULL,
	CONSTRAINT review_users_FK FOREIGN KEY (user_id) REFERENCES hatarent.users(id) ON DELETE SET NULL,
	CONSTRAINT review_rental_FK FOREIGN KEY (rental_id) REFERENCES hatarent.rental(id) ON DELETE CASCADE
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_unicode_ci;

CREATE TABLE hatarent.booking (
	id BIGINT auto_increment NOT NULL PRIMARY KEY,
	user_id BIGINT NOT NULL,
	rental_id BIGINT NOT NULL,
	start_date TIMESTAMP NOT NULL,
	duration INT NOT NULL,
	end_date TIMESTAMP NOT NULL,
	accepted_at TIMESTAMP NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	CONSTRAINT booking_users_FK FOREIGN KEY (user_id) REFERENCES hatarent.users(id) ON DELETE CASCADE,
	CONSTRAINT booking_rental_FK FOREIGN KEY (rental_id) REFERENCES hatarent.rental(id) ON DELETE CASCADE
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_unicode_ci;


CREATE TABLE hatarent.rental_images (
	id BIGINT auto_increment NOT NULL PRIMARY KEY,
	image_path varchar(100) NOT NULL,
	rental_id BIGINT NOT NULL,
	`position` INT NOT NULL,
	CONSTRAINT rental_images_path UNIQUE KEY (image_path),
	CONSTRAINT rental_images_position UNIQUE KEY (rental_id,`position`),
	CONSTRAINT rental_images_rental_FK FOREIGN KEY (rental_id) REFERENCES hatarent.rental(id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_unicode_ci;
