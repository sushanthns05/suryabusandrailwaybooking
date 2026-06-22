const express = require('express');
const router = express.Router();

router.get('/admin/stats', (req, res) => {
    res.json({
        totalUsers: 1542,
        totalBookings: 8432,
        revenue: '₹ 12,45,000',
        activeRoutes: 124,
        cancellations: 45
    });
});

router.get('/employee/stats', (req, res) => {
    res.json({
        dailyBookings: 142,
        revenue: '₹ 45,000',
        pendingVerifications: 12
    });
});

router.get('/customer/stats', (req, res) => {
    res.json({
        upcomingJourneys: 2,
        walletBalance: '₹ 1,200',
        rewardPoints: 450
    });
});

module.exports = router;
