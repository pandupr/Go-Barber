 <?php  

$FullName = $_POST['FullName'];
$gender = $_POST['gender'];
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$confirm_password = $_POST['confirm_password'];

if (!empty($FullName) || !empty($gender) || !empty($username) || !empty($email) || !empty($password) || !empty($confirm_password)){
	$host = "localhost";
	$dbUsername = "root";
	$dbPassword = "";
	$dbName = "gobarberdb";

	//create connection
	$conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);

	if(mysqli_connect_error()){
		die('Connect Error('. mysqli_connect_errno().')'. mysqli_connect_error());
	}else{
		$SELECT = "SELECT email From table_customer Where email = ? Limit 1";
		$INSERT = "INSERT Into table_customer (FullName, gender, username, email, password, confirm_password) values(?, ?, ?, ?, ?, ?)";

		//Prepare statement
		$stmt = $conn->prepare($SELECT);
		$stmt -> bind_param("s", $email);
		$stmt -> execute();
		$stmt -> bind_result($email);
		$stmt -> store_result();
		$rnum = $stmt->num_rows;

		if($rnum==0){
			$stmt -> close();

			$stmt = $conn->prepare($INSERT);
			$stmt->bind_param("ssssss", $FullName, $gender, $username, $email, $password, $confirm_password);
			$stmt->execute();
			echo "New record inserted successfully";

		}else{
			echo "Someone already register using this email";
		}
		$stmt -> close();
		$conn -> close();
	}

}else{
	echo "ALl field are required";
	die();
}

?>



