<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $units = $_POST['units'];
    $bill = calculateBill($units);

    echo "<!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Electricity Bill Calculator</title>
        <link rel='stylesheet' href='styles.css'>
    </head>
    <body>
        <div class='container'>
            <h1>Electricity Bill Calculator</h1>
            <p>Units Consumed: $units</p>
            <p>Total Bill: $$bill</p>
            <a href='index.php'>Go Back</a>
        </div>
    </body>
    </html>";
}

function calculateBill($units) {
    $rate1 = 3.50; // For the first 50 units
    $rate2 = 4.00; // For the next 100 units
    $rate3 = 5.20; // For the next 100 units
    $rate4 = 6.50; // For units above 250

    if ($units <= 50) {
        $bill = $units * $rate1;
    } elseif ($units <= 150) {
        $bill = (50 * $rate1) + (($units - 50) * $rate2);
    } elseif ($units <= 250) {
        $bill = (50 * $rate1) + (100 * $rate2) + (($units - 150) * $rate3);
    } else {
        $bill = (50 * $rate1) + (100 * $rate2) + (100 * $rate3) + (($units - 250) * $rate4);
    }

    return number_format($bill, 2);
}
?>
