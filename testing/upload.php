<?php
if (isset($_POST['submit'])){
    $file = $_FILES['file'];
    
    $fileName = $_FILES['file']['name'];
    $fileTmpName = $_FILES['file']['tmp_name'];
    $fileSize = $_FILES['file']['size'];
    $fileError = $_FILES['file']['error'];
    $filetype = $_FILES['file']['type'];
    
    $fileExt = explode('.',$fileName);
    $fileActualExt = strtolower(end($fileExt));
    
    $allowed = array('jpg','jpeg','png');
    
    if (in_array($fileActualExt, $allowed)) {
        if ($fileError === 0){
            if ($fileSize < 500000000) {
             $fileNameNew = uniqid('', true).".".$fileActualExt; 
                $fileDestination = 'uploads/'.$fileNameNew;
                move_uploaded_file($fileTmpName, $fileDestination);
                echo '<div class="uploaded-image">';
                echo '<img src="'.$fileDestination.'" alt="'.$fileName.'">';
                echo '<button class="delete-button" data-filename="'.$fileNameNew.'">Delete</button>';
                echo '</div>';
                
            } else {
                 echo "Your file is too big";
             }
           } else {
                echo "There was an error uploading your file";
            }
         
    } else {
        echo "THis file type is dont't allowed";
    }
}
