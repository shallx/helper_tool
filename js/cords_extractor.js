$("#generate").click(function () {
    var input = $("#input").val();
    const re = new RegExp("([0-9.,-])+");
    var output = re.exec(input);
    $("#output").val(output[0]);
  });
  
  // clear button
  $("#clear").click(function () {
    console.log("On clear click");
    $("#input").val("");
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
  });