const express = require('express');
const connectDB = require('./configs/database');
const userRoutes = require('./routes/user.routes');
const { authMiddleware, errorMiddleware } = require('./middlewares/middleware');
 
// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(authMiddleware);

// API routes
app.use('/api', userRoutes);

// Error handling middleware
app.use(errorMiddleware);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});