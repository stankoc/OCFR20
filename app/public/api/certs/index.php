<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT *
        FROM Certification
        ORDER BY certName asc';
$vars = [];

// if (isset($_GET['guid'])) {
//   // This is an example of a parameterized query
//   $sql = 'SELECT * FROM Certification WHERE certID = ?';
//   $vars = [ $_GET['guid'] ];
// }

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$certs = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($certs, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
