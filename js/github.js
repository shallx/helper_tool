$("#generateCloneLink").click(function () {
    var sshLink = $("#sshLink").val();
    var username = $("#username").val();
    sshLink = sshLink.replace("github.com", `github.com-${username}`);
    $("#output").val("git clone " + sshLink);
  });


  $("#generateAddOriginCommand").click(function () {
    var sshLink = $("#sshLink").val();
    var username = $("#username").val();
    sshLink = sshLink.replace("github.com", `github.com-${username}`);
    $("#output").val("git remote add origin " + sshLink);
  });
  
  // clear button
  $("#clear").click(function () {
    console.log("On clear click");
    $("#sshLink").val("");
    $("#username").val("");
    $("#output").val("");
  });
  

