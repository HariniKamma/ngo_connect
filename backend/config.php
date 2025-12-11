<?php
// Razorpay API keys (use test keys first)
$keyId = "rzp_test_yourkeyhere";
$keySecret = "yourkeysecret";

// Database connection (optional)
$host = "localhost";
$user = "root"; // default XAMPP user
$password = ""; // default XAMPP password
$dbname = "ngo_connect";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Include Razorpay SDK
require('razorpay-php/Razorpay.php');

use Razorpay\Api\Api;

// Create Razorpay API instance
$api = new Api($keyId, $keySecret);
?>
