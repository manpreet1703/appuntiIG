<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["file"]["name"]);
    $uploadOk = 1;
    $fileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

    // Controlla se il file � un PDF
    if($fileType != "pdf") {
        echo "Solo file PDF sono permessi.";
        $uploadOk = 0;
    }

    // Controlla se il file esiste gi�
    if (file_exists($target_file)) {
        echo "Il file esiste gi�.";
        $uploadOk = 0;
    }

    // Controlla la dimensione del file
    if ($_FILES["file"]["size"] > 5000000) { // 5MB
        echo "Il file � troppo grande.";
        $uploadOk = 0;
    }

    // Se $uploadOk � settato a 0, il file non viene caricato
    if ($uploadOk == 0) {
        echo "Il file non � stato caricato.";
    // Se tutto � ok, tenta di caricare il file
    } else {
        if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
            echo "Il file ". htmlspecialchars(basename($_FILES["file"]["name"])) . " � stato caricato.";
        } else {
            echo "C'� stato un errore nel caricamento del file.";
        }
    }
}
?>
