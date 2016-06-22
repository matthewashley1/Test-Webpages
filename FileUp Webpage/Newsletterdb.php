<?php
  //connect to server

  $connection= new MongoClient();

  //connect to a database

  $db= $connection->fileup;
    // selectDB("fileup");

  //Access collection

    $EmailList_collection=$db->EmailList;
      //createCollection("EmailList");

  //insert document

    $doc= array(
      "name:" => array("Matthew Ashley": "matthewashley1@gmail.com",
                  "Joe Watts": "joewatts@gmail.com")
    );

    $EmailList_collection->insert($doc);

 ?>
