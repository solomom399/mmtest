document.addEventListener("deviceready", onDeviceReady, false);


function onDeviceReady() {
    // var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');

    dbcopy()
    
    $("#df").html("Working ")
}

document.addEventListener("backbutton", onBackKeyDown, false);

function onBackKeyDown(e) {
   e.preventDefault();
    var conf = confirm("Are you sure you want to exit this app")
    if(conf){
        navigator.app.exitApp();
    } else {
        alert('Thank you!');
    }
}


function dbcopy() {
        //var myDB = window.sqlitePlugin.openDatabase({name: "mySQLite.db", location: 'default'});
        var myDB = window.sqlitePlugin.openDatabase({name: "newdb.db", location: 'default', createFromLocation: 1});
        /*myDB.transaction(function(transaction) {
            transaction.executeSql('CREATE TABLE IF NOT EXISTS phonegap_pro (id integer primary key, title text, desc text)', [],
            function(tx, result) {
                alert("Table created successfully");
            },
            function(error) {
                alert("Error occurred while creating the table.");
            });
        });
    
    
        var title="sundaravel";
        var desc="phonegap freelancer";
        myDB.transaction(function(transaction) {
            var executeQuery = "INSERT INTO phonegap_pro (title, desc) VALUES (?,?)";
            transaction.executeSql(executeQuery, [title,desc] , function(tx, result) {
                alert('Inserted');
            },
            function(error){
                alert('Error occurred');
            });
        });*/
    
    
        myDB.transaction(function(transaction) {
            transaction.executeSql('SELECT * FROM user', [], function (tx, results) {
                var len = results.rows.length, i;
                $("#rowCount").append(len);
                for (i = 0; i < len; i++){
                    $("#TableData").append("<tr><td>nAme: "+results.rows.item(i).name+"</td></tr>");
                }
            },
            function(error){
                $("#df").html('Error occurred '+error);
            });
        });
}






$(function (){
  function cameraSuccess(imagedata){
    $(".file").val(imagedata)
  }

  function cameraError(error){
    alert(error)
  }

  function accesscamera(){
    var options = {
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType:  Camera.PictureSourceType.CAMERA
    };

    navigator.camera.getPicture(cameraSuccess, cameraError, options);
  }


  $("#btn").on("click",accesscamera)
})
