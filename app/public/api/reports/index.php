<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT firstName, lastName, certName, certExpDate
        FROM Person INNER JOIN Earn_Certification INNER JOIN Certification
        WHERE Person.personID = Earn_Certification.personID AND Earn_Certification.certExpDate < CURDATE() AND Earn_Certification.certID = Certification.certID
        ORDER BY lastName asc';
$vars = [];

// if (isset($_GET['guid'])) {
//   // This is an example of a parameterized query
//   $sql = 'SELECT * FROM Person WHERE personID = ?';
//   $vars = [ $_GET['guid'] ];
// }

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$expList = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($expList, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
