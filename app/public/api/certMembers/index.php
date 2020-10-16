<?php
//need to change to match memberCerts
require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT *
        FROM Earn_Certification ec, Person p
        WHERE ec.personID = p.personID
        ORDER BY p.lastName asc';
$vars = [];

// if (isset($_GET['certID'])) {
//   // This is an example of a parameterized query
//   $sql = 'SELECT *
//           FROM Earn_Certification ec, Person p
//           WHERE ec.personID = p.personID AND ec.certID = ?
//           ORDER BY p.lastName asc';
//   $vars = [ $_GET['certID'] ];
// }

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$members = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($members, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
