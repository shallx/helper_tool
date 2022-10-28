$("#generateFirebaseOptionsObject").click(function () {
    var jsonString = $("#fire_json").val();
    var data = JSON.parse((jsonString));
    var output = 
    `const FirebaseOptions firebaseOptions = FirebaseOptions(
        apiKey: '${data.client[0].api_key[0].current_key}',
        appId: '${data.client[0].client_info.mobilesdk_app_id}',
        messagingSenderId: '${data.project_info.project_number}',
        projectId: '${data.project_info.project_id}',
);`;
    $("#output").val(JSON.parse(JSON.stringify(output)));
  });


  
  // clear button
  $("#clear").click(function () {
    console.log("On clear click");
    $("#sshLink").val("");
    $("#username").val("");
    $("#output").val("");
  });
  

