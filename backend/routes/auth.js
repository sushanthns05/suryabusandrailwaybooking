const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Mock database since PG setup might not be active initially
const users = [
    { id: 1, name: 'Admin', email: 'admin@sbrb.com', password: bcrypt.hashSync('admin123', 10), role: 'Admin' },
    { id: 2, name: 'Employee', email: 'employee@sbrb.com', password: bcrypt.hashSync('emp123', 10), role: 'Employee' },
    { id: 3, name: 'Customer', email: 'customer@sbrb.com', password: bcrypt.hashSync('cust123', 10), role: 'Customer' },
];

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);
    
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });
    
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) return res.status(400).json({ message: 'Invalid credentials' });
    
    const token = jwt.sign({ id: user.id, role: user.role, name: user.name }, process.env.JWT_SECRET || 'secretkey', { expiresIn: '1h' });
    
    res.json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role } });
});

router.post('/register', (req, res) => {
    const { name, email, password, mobile_number } = req.body;
    if (users.find(u => u.email === email)) {
        return res.status(400).json({ message: 'User already exists' });
    }
    const newUser = {
        id: users.length + 1,
        name,
        email,
        password: bcrypt.hashSync(password, 10),
        role: 'Customer',
        mobile_number
    };
    users.push(newUser);
    res.status(201).json({ message: 'Registration successful' });
});

module.exports = router;
