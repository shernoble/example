const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Routes setup
const doctorRoutes = require("./routes/doctorRoutes");
const nurseRoutes = require("./routes/nurseRoutes");
const patientRoutes = require("./routes/patientRoutes");
const adminRoutes = require("./routes/adminRoutes");

app.use("/doctor", doctorRoutes);
app.use('/nurse', nurseRoutes);
app.use('/admin', adminRoutes);
app.use('/patient', patientRoutes);

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/newHospitalDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Start server
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
