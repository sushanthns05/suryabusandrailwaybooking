CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    mobile_number VARCHAR(20) UNIQUE,
    role VARCHAR(50) DEFAULT 'Customer' CHECK (role IN ('Customer', 'Employee', 'Admin')),
    wallet_balance DECIMAL(10, 2) DEFAULT 0.00,
    reward_points INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Stations (
    id SERIAL PRIMARY KEY,
    code VARCHAR(10) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL
);

CREATE TABLE Trains (
    id SERIAL PRIMARY KEY,
    train_number VARCHAR(20) UNIQUE NOT NULL,
    train_name VARCHAR(255) NOT NULL,
    train_type VARCHAR(100),
    total_seats INT NOT NULL,
    available_classes VARCHAR(255) -- E.g., 'Sleeper,AC 3 Tier,AC 2 Tier,AC First Class'
);

CREATE TABLE Buses (
    id SERIAL PRIMARY KEY,
    bus_number VARCHAR(50) UNIQUE NOT NULL,
    operator_name VARCHAR(255) NOT NULL,
    bus_type VARCHAR(100), -- 'AC Sleeper', 'Non-AC Seater', etc.
    total_seats INT NOT NULL
);

CREATE TABLE Routes (
    id SERIAL PRIMARY KEY,
    type VARCHAR(20) CHECK (type IN ('Train', 'Bus')),
    vehicle_id INT NOT NULL, -- References Trains.id or Buses.id
    departure_station_id INT REFERENCES Stations(id),
    arrival_station_id INT REFERENCES Stations(id),
    departure_time TIMESTAMP NOT NULL,
    arrival_time TIMESTAMP NOT NULL,
    base_fare DECIMAL(10, 2) NOT NULL
);

CREATE TABLE Bookings (
    id SERIAL PRIMARY KEY,
    pnr_number VARCHAR(20) UNIQUE NOT NULL,
    user_id INT REFERENCES Users(id),
    route_id INT REFERENCES Routes(id),
    booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'Confirmed' CHECK (status IN ('Confirmed', 'RAC', 'Waiting List', 'Cancelled')),
    total_fare DECIMAL(10, 2) NOT NULL
);

CREATE TABLE Passengers (
    id SERIAL PRIMARY KEY,
    booking_id INT REFERENCES Bookings(id),
    name VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    gender VARCHAR(20),
    seat_number VARCHAR(20),
    class_type VARCHAR(50)
);

CREATE TABLE Payments (
    id SERIAL PRIMARY KEY,
    booking_id INT REFERENCES Bookings(id),
    amount DECIMAL(10, 2) NOT NULL,
    payment_method VARCHAR(50),
    payment_status VARCHAR(50) DEFAULT 'Success',
    transaction_id VARCHAR(255) UNIQUE,
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Notifications (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(id),
    message TEXT NOT NULL,
    type VARCHAR(50), -- 'Email', 'SMS', 'Push'
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Refunds (
    id SERIAL PRIMARY KEY,
    booking_id INT REFERENCES Bookings(id),
    refund_amount DECIMAL(10, 2) NOT NULL,
    status VARCHAR(50) DEFAULT 'Pending' CHECK (status IN ('Pending', 'Approved', 'Processed')),
    refund_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
