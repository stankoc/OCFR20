<?php
//need to change to match memberCerts
require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT * FROM Earn_Certification ec, Members m
        WHERE ec.personID = m.personID';
$vars = [];

// if (isset($_GET['guid'])) {
//   // This is an example of a parameterized query
//   $sql = 'SELECT * FROM Earn_Certification ec, Members m
//           WHERE ec.personID = m.personID';
//   //$vars = [ $_GET['guid'] ];
//   $vars = [];
// }

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$members = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($members, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
