
 
let g ="";
var x = document.getElementById("txtdate").value;

function func(){
    var x = document.getElementById("txtdate").value;
    var y = document.getElementById("select").value;

    var z = select.options[select.selectedIndex].text;
   
    calcTime(z,y,x);

   

/*getUserIP(function(ip){
    document.getElementById("ip").value =  ip;
});*/


}





function func2(){
    var b = new Date();
    var h = b.toString();
    var o = h.split(" ");
    
    document.getElementById("ct").value = o[5];
  
   var xt =  window.screen.availHeight;
var yt = window.screen.availWidth;
var ans = yt + " * " + xt;
var er = window.devicePixelRatio;
document.getElementById("sr").value =ans;
document.getElementById("pr").value =er;


navigator.sayswho= (function(){
    var ua= navigator.userAgent, tem, 
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
})();

document.getElementById("br").value = navigator.sayswho;
var Agent = navigator.userAgent;
var vendor = navigator.vendor;
var device = Agent || vendor || window.opera;

if (/windows /i.test(device)) {
document.getElementById("os").value = "Windows ";
}
if (/android/i.test(device)) {
document.getElementById("os").value = "Android";
}
if (/iPad|iPhone|iPod/.test(device) && !window.MSStream) {
document.getElementById("os").value = "iOS";
}

document.getElementById("ip").style.display = "inline";

}

































function calcTime(city, offset,x) {

    // create Date object for current location
   
    d = new Date(x);
    // convert to msec
    // add local time zone offset 
    // get UTC time in msec
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    
    
    // create new Date object for different city
    // using supplied offset
    nd = new Date(utc + (3600000*offset));
    
    // return time as a string
     
   g  = "The local time in " + city + " is " + nd.toLocaleString();
   document.getElementById("t").value = g;

}
