<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Electricity Bill Calculator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Electricity Bill Calculator</h1>
        <form action="calculate_bill.php" method="post">
            <label for="units">Enter units consumed:</label>
            <input type="number" id="units" name="units" required>
            <button type="submit">Calculate</button>
        </form>
    </div>
</body>
</html>
