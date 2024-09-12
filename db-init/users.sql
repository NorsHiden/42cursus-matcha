CREATE EXTENSION IF NOT EXISTS "pgcrypto";  -- Enables UUID generation in PostgreSQL

CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),  -- UUID as primary key
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    gender VARCHAR(10) CHECK (gender IN ('male', 'female')),  -- 'male' or 'female' only
    biography TEXT,
    fame_rating INTEGER DEFAULT 0,  -- Fame score of the user
    gps_latitude DECIMAL(9,6),  -- For geolocation
    gps_longitude DECIMAL(9,6), -- For geolocation
    is_email_verified BOOLEAN DEFAULT FALSE,  -- Check if email is verified
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE OR REPLACE FUNCTION update_modified_column()

RETURNS TRIGGER AS $$

BEGIN
    NEW.updated_at = now();  
    RETURN NEW;   
END;
$$ language 'plpgsql';

CREATE TRIGGER update_user_modtime BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_modified_column();


CREATE TABLE IF NOT EXISTS user_avatar (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),  -- UUID as primary key
    url VARCHAR(255) NOT NULL,
    is_profile_picture BOOLEAN DEFAULT FALSE,  -- Check if the avatar is a profile picture
    user_id UUID NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
)