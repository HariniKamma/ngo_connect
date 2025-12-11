<?php
require('config.php');
header('Content-Type: application/json');

try {
    // Get data from frontend
    $data = json_decode(file_get_contents('php://input'), true);
    $amount = $data['amount'] * 100; // Convert to paise
    $name = $data['name'];
    $email = $data['email'];

    // Create order in Razorpay
    $order = $api->order->create([
        'receipt' => 'donation_rcptid_' . rand(1000, 9999),
        'amount' => $amount,
        'currency' => 'INR',
        'payment_capture' => 1
    ]);

    // Send response to frontend
    echo json_encode([
        'success' => true,
        'order_id' => $order['id'],
        'amount' => $amount,
        'currency' => 'INR',
        'name' => $name,
        'email' => $email
    ]);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
?>
