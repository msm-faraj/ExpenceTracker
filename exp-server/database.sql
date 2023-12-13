CREATE DATABASE destiny;

CREATE TABLE exp_tb(
	exp_id SERIAL PRIMARY KEY,
	exp_time DATE,
	amount NUMERIC(2),
	note VARCHAR(50),
	account VARCHAR(50),
	category VARCHAR(50),
	description VARCHAR(255)
);

