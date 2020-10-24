<?php

require 'common.php';

// Only need this line if we're creating GUIDs (see comments below)
use Ramsey\Uuid\Uuid;

// Step 0: Validate the incoming data
// This code doesn't do that, but should ...
// For example, if the date is empty or bad, this insert fails.

// As part of this step, create a new GUID to use as primary key (suitable for cross-system use)
// If we weren't using a GUID, allowing auto_increment to work would be best (don't pass `id` to `INSERT`)
$guid = Uuid::uuid4()->toString(); // i.e. 25769c6c-d34d-4bfe-ba98-e0ee856f3e7a

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
// Note the use of parameterized statements to avoid injection

$personID = $_POST[$guid];
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$address = $_POST['address'];
$city = $_POST['city'];
$st = $_POST['st'];
$zip = $_POST['zip'];
$email = $_POST['email'];
$dob = $_POST['dob'];
$startDate = $_POST['startDate'];
$position = $_POST['position'];
$gender = $_POST['gender'];
$stationNumber = $_POST['stationNumber'];
$isActive = $_POST['isActive'];
$radioNumber = $_POST['radioNumber'];
$workPhoneNum = $_POST['workPhoneNum'];
$cellPhoneNum = $_POST['cellPhoneNum'];
$homePhoneNum = $_POST['homePhoneNum'];

$stmt = $db->prepare(
  'UPDATE Person SET personID = '$personID', firstName = '$firstName', lastName = '$lastName', address = '$address', city = '$city', st = '$st', zip = '$zip', email = '$email',
    dob = '$dob', startDate = '$startDate', position = '$position', gender = '$gender', stationNumber = '$stationNumber', isActive = '$isActive', radioNumber = '$radioNumber', workPhoneNum = '$workPhoneNum', cellPhoneNum = '$cellPhoneNum', homePhoneNum = '$homePhoneNum')
  WHERE personID = ' .$personID);


  $conn->execute($stmt) or die("Cannot update");
// $stmt->execute([

// ]);

// $pubdate = $_POST['updatepubdate'];
	
// $title = $_POST['updatetitle'];

// $publisher = $_POST['updatepublisher'];

// $img = $_POST['updateimg'];
  
// $update = "UPDATE Books SET PublishDate='$pubdate', Title='$title', Publisher='$publisher', Image='$img' WHERE BookID = ".$bookid;
// $conn->query($update) or die("Cannot update");//update or error
// }

// If needed, get auto-generated PK from DB
// $pk = $db->lastInsertId();  // https://www.php.net/manual/en/pdo.lastinsertid.php

// Step 4: Output
// Here, instead of giving output, I'm redirecting to the SELECT API,
// just in case the data changed by entering it
header('HTTP/1.1 303 See Other');
header('Location: ../members/?guid=' . $guid);



// 'DELETE FROM Person
//             WHERE personID = :(?)'