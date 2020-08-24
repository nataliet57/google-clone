<?php 
// grant access to database with config file 
include("../config.php");

// if linkId variable has been sent, update the values
if(isset($_POST["linkId"])) {
    $query = $con->prepare("UPDATE sites SET clicks = clicks + 1 WHERE id=:id");
    $query->bindParam(":id", $_POST["linkId"]);

    $query->execute();

}
else{
    echo "No link passed to page";
}

?>