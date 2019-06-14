// Check for the File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {

 alert("pls choose or browse  the file");

    document.getElementById('files').addEventListener('change', handleFileSelect, false);
  } else {
    alert('The File APIs are not fully supported in this browser.');
  }
  let filename ="";
  var base64String="";
  function handleFileSelect(evt) {
    var f = evt.target.files[0]; // FileList object
    filename = f.name;
    var x = document.getElementById("select");
    var option = document.createElement("option");
    let y = filename.split(".");
    option.text = y[1];

    if (SelectHasValue(select,y[1])==false){
    x.add(option);}

    var reader = new FileReader();
    // Closure to capture the file information.
    reader.onload = (function(theFile) {
      return function(e) {
        var binaryData = e.target.result;
        //Converting Binary Data to base 64
         base64String = window.btoa(binaryData);
        //showing file converted to base64
        alert ("pls click on the button for conversion");
       
      };
    })(f);
    // Read in the image file as a data URL.
    reader.readAsBinaryString(f);
  }


  function h(){

    document.getElementById('base64').value = base64String;
    alert('File converted to base64 successfuly!\nCheck in Textarea');
  }



  document.getElementById("dwn-btn").addEventListener("click", function(){
    // Generate download of hello.txt file with some content
    var text = window.atob(base64String);
    var nm = filename;
    let y = nm.split(".");
    var x = document.getElementById("select").value;
    y[1]=x;
    nm = y[0]+"."+y[1];
    console.log(nm);
    download(nm, text);
}, false);

  function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }
  



  function check(){
    var nm = filename;
    let y = nm.split(".");
    let g = "pls check that the extention selected  in drop is = "+y[1];
     alert(g);

  }
  function SelectHasValue(select, value) {
    obj = document.getElementById(select);

    if (obj !== null) {
        return (obj.innerHTML.indexOf('value="' + value + '"') > -1);
    } else {
        return false;
    }
}  
