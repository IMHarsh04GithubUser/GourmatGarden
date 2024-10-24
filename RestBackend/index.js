const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/employee");
const BookTable = require("./models/reservation");
const AddCategory = require("./models/AdminAdd");
const CartPayment = require("./models/Payment");
const ListCat = require("./models/ListCat");
const QueryMessage = require("./models/message");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/RestaurantApp", {})
  .then(() => console.log("MongoDB Started"))
  .catch((err) => console.log(err));

// Multer Storage Setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = "./uploads";
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir); // Ensure the uploads directory exists
    }
    return cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    return cb(null, `${file.originalname}`);
  },
});

const upload = multer({ storage });

// Register a new employee
app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  // Check if email already exists
  const existingUser = await EmployeeModel.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ message: "Email already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new EmployeeModel({
    email,
    password: hashedPassword,
  });

  await newUser.save();
  return res.status(201).json({ message: "User registered successfully" });
});

// Login an employee
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await EmployeeModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User does not exist" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    res.status(200).json({ message: "Success", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Book a table
app.post("/booking", async (req, res) => {
  try {
    const { email, name, date, persons } = req.body;

    const table = await BookTable.create(req.body);
    res.status(201).json(table);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "mathurharsh020@gmail.com",
        pass: "gvwc itho dces ybrd", // Store in .env file for security
      },
    });

    const mailOptions = {
      from: '"Gourmat Garden" <gourmatgarden@gmail.com>',
      to: email,
      subject: "Seat Booking Confirmation",
      text: `Hello ${name},\n\nYour seat has been confirmed for Date ${date}.\n\nTotal Number of Person: ${persons}\nThank you for choosing our restaurant!`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error("Error sending email:", err);
        return res
          .status(500)
          .json({ message: "Error sending email: " + err.message });
      } else {
        console.log("Email sent:", info.response);
        return res.status(200).json({
          message: `Booking confirmed! An email has been sent to ${email}.`,
        });
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Handle messages and log them
app.post("/message", async (req, res) => {
  try {
    const { email, name } = req.body;
    const message = await QueryMessage.create(req.body);
    res.status(201).json(message);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "mathurharsh020@gmail.com",
        pass: "gvwc itho dces ybrd", // Store in .env file for security
      },
    });

    const messagemailoptions = {
      from: "Gourmat Garden <gourmatgarden@gmail.com>",
      to: email,
      subject: "Thank You for Dining with Us!",
      text: `Thank you for taking the time to share your feedback about your recent visit to Gourmat Garden. We truly appreciate your insights and are glad to hear from you.\n
      We have reviewed your feedback and will take it into consideration as we continue to enhance our dining experience. Our goal is always to provide exceptional service and delicious meals, and your input helps us achieve that.\n\n
      If you have any additional thoughts or need further assistance, please don’t hesitate to reach out. We look forward to the opportunity to serve you again and hope to make your next visit even better.\n
      Thank you once again for your feedback and for being a valued customer.\n
      Best Regards,\n
      Harsh,\n
      Owner,\n
      Gourmat Garden\n
      9971XXXX`,
    };

    transporter.sendMail(messagemailoptions, (err, info) => {
      if (err) {
        console.error("Error sending email:", err);
        return res
          .status(500)
          .json({ message: "Error sending email: " + err.message });
      } else {
        console.log("Email sent:", info.response);
        return res.status(200).json({
          message: `Feedback Received! An email has been sent to ${email}.`,
        });
      }
    });

    const log = JSON.stringify(message);
    fs.appendFile("message.txt", log + "\n", (err) => {
      if (err) {
        console.error("Error writing to log file", err);
      } else {
        console.log("Message logged successfully.");
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Admin Panel - Add new category
app.post("/add", upload.single("image"), async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    const image = req.file ? req.file.filename : null;

    if (!name || !description || !price || !category || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newCategory = new AddCategory({
      name,
      description,
      price,
      category,
      image,
    });
    await newCategory.save();

    res.status(201).json({ message: "Saved Successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//Admin Panel List Categories

app.get("/list", async (req, res) => {
  try {
    const foods = await AddCategory.find();
    res.json({ success: true, data: foods });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

//Admin Panel Remove Functionality

app.post("/remove", async (req, res) => {
  try {
    const { id } = req.body;

    const foodItem = await AddCategory.findByIdAndDelete(id);
    if (foodItem) {
      res
        .status(200)
        .json({ success: true, message: "Item removed successfully" });
    } else {
      res.status(404).json({ success: false, message: "Item not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

//CartData
app.post("/cartbill", async (req, res) => {
  try {
    const { cart, address, totalAmount, email } = req.body;
    const orderedItems = cart.map(item => item.name).join(', ');

    console.log("Received data:", req.body);
    const Cart = new CartPayment({
      cart,
      address,
      totalAmount,
      email,
    });
    await Cart.save();
    res.status(201).json({ message: "Cart Saved Successfully" });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "mathurharsh020@gmail.com",
        pass: "gvwc itho dces ybrd",
      },
    });

    const mailOptions = {
      from: '"Gourmat Garden" <gourmatgarden@gmail.com>',
      to: email,
      subject: "Order Received",
      text: `Hello ${email},\n We have received Your order \nThank you for choosing our restaurant! \n Your Ordered Food - ${orderedItems}\n Total Amount - ${totalAmount}(CASH ON DELIVERY)\n Address- ${address}`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error("Error sending email:", err);
        return res
          .status(500)
          .json({ message: "Error sending email: " + err.message });
      } else {
        console.log("Email sent:", info.response);
        return res.status(200).json({
          message: `Booking confirmed! An email has been sent to ${email}.`,
        });
      }
    });
  } catch (error) {
    res.status(501).json({ message: "Error in Cart" });
  }
});

//fetch data to Admin Panel Orders
app.get("/orders", async (req, res) => {
  try {
    const orderPanel = await CartPayment.find();
    res.json({ success: true, data: orderPanel });
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
