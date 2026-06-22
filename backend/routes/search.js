const express = require('express');
const router = express.Router();

const mockTrains = [
    { id: 1, name: 'Shatabdi Express', number: '12007', from: 'SBC', to: 'MAS', dep: '06:00 AM', arr: '11:00 AM', duration: '5h', classes: ['CC', 'EC'], fare: 800 },
    { id: 2, name: 'Rajdhani Express', number: '22691', from: 'SBC', to: 'NDLS', dep: '08:00 PM', arr: '05:30 AM', duration: '33h 30m', classes: ['3A', '2A', '1A'], fare: 2500 }
];

const mockBuses = [
    { id: 1, operator: 'KSRTC Airavat', type: 'AC Sleeper', from: 'Bengaluru', to: 'Hyderabad', dep: '10:00 PM', arr: '06:00 AM', duration: '8h', fare: 1200 },
    { id: 2, operator: 'VRL Travels', type: 'AC Seater', from: 'Bengaluru', to: 'Mysuru', dep: '08:00 AM', arr: '11:00 AM', duration: '3h', fare: 400 }
];

router.get('/trains', (req, res) => {
    // In a real app, we filter by req.query.from, req.query.to, req.query.date
    res.json(mockTrains);
});

router.get('/buses', (req, res) => {
    res.json(mockBuses);
});

module.exports = router;
