CREATE DATABASE disibin


-- Create the custom enum type
CREATE TYPE user_role AS ENUM ('admin', 'user', 'manager');

-- Create the users table using that type
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    user_name VARCHAR(100) NOT NULL,
    role user_role DEFAULT 'user', -- Applies the enum here
    phone VARCHAR(20) NOT NULL UNIQUE,
    address VARCHAR(255),
    password VARCHAR(255) NOT NULL,
    reset_token VARCHAR(255) DEFAULT NULL,
    token_expireat TIMESTAMP DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



CREATE TABLE blogs (
  blog_id SERIAL PRIMARY KEY,
  title VARCHAR(250) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  description TEXT NOT NULL, 
  image VARCHAR(500) NOT NULL,
  image_id VARCHAR(250) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE teams(
  team_id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  role VARCHAR(100) NOT NULL,
  image VARCHAR(500) NOT NULL,
  image_id VARCHAR(200) NOT NULL,
  created_at timestamp default current_timestamp,
  updated_at timestamp default current_timestamp
)

to add team member