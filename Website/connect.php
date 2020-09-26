<?php

	$FullName = $_POST['FullName'];
	$gender = $_POST['gender'];
	$username = $_POST['username'];
	$email = $_POST['email'];
	$password = $_POST['password'];
	$confirm_password = $_POST['confirm_password'];

	//Database Connection
	$conn = new mysqli('localhost', 'root', '', 'gobarberdb');
	if($conn->connect_error){
		die('Connection Failed : '.$conn->connect_error);
	}else{
		$stmt = $conn->prepare("insert into registration(FullName, gender, username, email, password, confirm_password) values(?, ?, ?, ?, ?, ?)");
		$stmt->bind_param("ssssss", $FullName, $gender, $username, $email, $password, $confirm_password);
		$stmt->execute();
		echo "Registration Successfully...";
		$stmt->close();
		$conn->close();		
	}






?>