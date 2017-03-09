document.addEventListener("deviceready", onDeviceReady, false);


function onDeviceReady() {
    // var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');

    dbcopy()
}



function dbcopy() {
        //Database filename to be copied is demo.db

        //location = 0, will copy the db to default SQLite Database Directory
        window.plugins.sqlDB.copy("mydb.db", 0, copysuccess,copyerror);

        // or

        //location = 1, will copy the database to /Library folder
        // window.plugins.sqlDB.copy("demo.db", 1, copysuccess,copyerror);

        // or

        //location = 2, will copy the database to /Library/LocalDatabase folder (Disable iCloud Backup)
        // window.plugins.sqlDB.copy("demo.db", 2, copysuccess,copyerror);

}

function removeDB() {
      var location = 1;
      window.plugins.sqlDB.remove("mydb.db", location, rmsuccess,rmerror);  
}

function copysuccess() {
        //open db and run your queries
         db = window.sqlitePlugin.openDatabase({name: "mydb.db"});.
}

function copyerror(e) {
        //db already exists or problem in copying the db file. Check the Log.
        $("#df").html("Error Code = "+JSON.stringify(e));
        //e.code = 516 => if db exists
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
