ALTER TABLE reviews
DROP CONSTRAINT reviews_users_FK;

ALTER TABLE reviews
DROP COLUMN user_id;

ALTER TABLE reviews
ADD COLUMN profile_id BIGINT UNIQUE;

ALTER TABLE reviews
ADD CONSTRAINT reviews_profile_fk
FOREIGN KEY (profile_id)
REFERENCES profiles(id)
ON DELETE SET NULL;
