<?php
//need to change to match memberCerts
require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT *
        FROM Earn_Certification ec, Certification c
        WHERE ec.certID = c.certID';
$vars = [];
//
// if (isset($_GET['personID'])) {
//   // This is an example of a parameterized query
//   $sql = 'SELECT *
//           FROM Earn_Certification ec, Certification c
//           WHERE ec.certID = c.certID AND ec.personID = ?';
//   $vars = [ $_GET['personID'] ];
// }

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$members = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($members, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
