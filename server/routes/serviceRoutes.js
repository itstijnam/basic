const express = require("express");
const router = express.Router();
const { verifyToken, verifyAdmin } = require("../middleware/authMiddleware");

// Example route: only accessible by authenticated admin users
router.post("/create", verifyToken, verifyAdmin, (req, res) => {
  // You can replace this with your actual service creation logic
  res.status(201).json({ message: "Service created by admin" });
});

// Example route: accessible by any authenticated user
router.get("/all", verifyToken, (req, res) => {
  // You can replace this with logic to fetch all services
  res.status(200).json({ message: "List of services for user", user: req.user });
});

module.exports = router;
