$("#generateCloneLink").click(function () {
    var sshLink = $("#sshLink").val();
    var username = $("#username").val();
    sshLink = sshLink.replace("github.com", `github.com-${username}`);
    $("#output").val("git clone " + sshLink);
  });
  
  // clear button
  $("#clear").click(function () {
    console.log("On clear click");
    $("#sshLink").val("");
    $("#username").val("");
    $("#output").val("");
  });
  

   // Copy output to cliboard
   $("#copy").click(function () {
    var copyText = $("#output").val();
    var textArea = document.createElement("textarea");
    textArea.value = copyText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
    showSnackbar("Copied to Clipboard");
  });