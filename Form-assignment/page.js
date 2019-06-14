


window.onload = function() {
    document.getElementById("f1").focus();
  };



   function myFunction(){

 let a = document.getElementById("f1");

 if (a.value ==""){
     a.style.borderColor = "red";
     alert ("pls enter firstname ");
     document.getElementById("g").focus();
     document.getElementById("g").style.backgroundColor = "red";
     document.getElementById("g").value = "error first name required";
    }
    else{
        document.getElementById("g").style.backgroundColor = "green";
        a.style.borderColor = "green";
        document.getElementById("g").value = " good now enter second name plz";
        document.getElementById("f2").focus();
        a.style.borderColor = "green";
       }   
    

  }
  

  function myFunction2(){

    let a = document.getElementById("f2");
   
    if (a.value ==""){
        a.style.borderColor = "red";
        alert ("pls enter middle or enter nil");
        document.getElementById("g").focus();
        document.getElementById("g").style.backgroundColor = "red";
        document.getElementById("g").value = "error middle name required - nil can be entered ";
       }
       else{
           document.getElementById("g").style.backgroundColor = "green";
           a.style.borderColor = "green";
           document.getElementById("g").value = " good now enter last name plz";
           document.getElementById("f3").focus();
           a.style.borderColor = "green";
          }   
       
   
     }


     function myFunction3(){

        let a = document.getElementById("f3");
       
        if (a.value ==""){
            a.style.borderColor = "red";
            alert ("pls enter middle ");
            document.getElementById("g").focus();
            document.getElementById("g").style.backgroundColor = "red";
            document.getElementById("g").value = "error last name required";
           }
           else{
               document.getElementById("g").style.backgroundColor = "green";
               a.style.borderColor = "green";
               document.getElementById("g").value = " good now enter  email plz";
               document.getElementById("e1").focus();
               a.style.borderColor = "green";
              }   
           
       
         }



         function myFunction4(){

            let a = document.getElementById("e1");
            let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (a.value .match(mailformat)){
                document.getElementById("g").style.backgroundColor = "green";
                a.style.borderColor = "green";
                document.getElementById("g").value = " good now enter  phone number plz";
                document.getElementById("p1").focus();
                a.style.borderColor = "green";

                
               }
               else{
                a.style.borderColor = "red";
                alert ("pls enter correct email required ");
                document.getElementById("g").focus();
                document.getElementById("g").style.backgroundColor = "red";
                document.getElementById("g").value = "error email correct required";
                  }   
               
           
             }

             function myFunction5(){

                let a = document.getElementById("p1");
                
                  if(isNaN(a.value)){

                    alert ("pls enter digits only  ");
                    document.getElementById("g").focus();
                    document.getElementById("g").style.backgroundColor = "red";
                    document.getElementById("g").value = "error phone no should be  digits only";


                  }

                else if ((a.value).length!==10){
                    
    
                    a.style.borderColor = "red";
                    alert ("pls enter correct phone no  required ");
                    document.getElementById("g").focus();
                    document.getElementById("g").style.backgroundColor = "red";
                    document.getElementById("g").value = "error phone no should be 10 digits";
                    console.log((a.value).length)
                   }

                   
                   else{
                    document.getElementById("g").style.backgroundColor = "green";
                    a.style.borderColor = "green";
                    document.getElementById("g").value = " good now enter  gender plz";
                   
                    a.style.borderColor = "green";
                      }   
                   
               
                 }


                 function myFunction6(){

                    let a = document.getElementById("address");
                   
                    if (a.value ==""){
                        a.style.borderColor = "red";
                        alert ("pls enter address");
                        document.getElementById("g").focus();
                        document.getElementById("g").style.backgroundColor = "red";
                        document.getElementById("g").value = "error address required ";
                       }
                       else{
                           alert("now enter dob");
                           document.getElementById("g").style.backgroundColor = "green";
                           a.style.borderColor = "green";
                           document.getElementById("g").value = " good and now plz make sure all checkbox and radio button are properly checked" ;
                           document.getElementById("dob").focus();
                           a.style.borderColor = "green";
                          }   
                       
                   
                     }



                     function datasubmit() {
                        var fname, mname, lname, email, phno, gender, addr, dob, education, hobbies, data, fullname;
                        fname = document.getElementById("f1").value;
                        mname = document.getElementById("f2").value;
                        lname = document.getElementById("f3").value;
                        email = document.getElementById("e1").value;
                        phno = document.getElementById("p1").value;
                        addr = document.getElementById("address").value;
                        dob = document.getElementById("dob").value;
                        education = document.getElementById("select").value;
                      
                        hobbies = "";
                        if(fname == "" || mname == "" || lname == "" || email == "" || phno == "" || addr == "" || dob == "" || education == "")
                        {
                        alert("Please enter the required fields!");
                        }

                        else{
                            if (mname=="nil"||mname=="Nil")mname="";
                            fullname = fname +" "+ mname +" "+ lname;
                        data = "<table><tr><th>Name</th><td>" +fullname+ "</td></tr>";
                        data += "<tr><th>Email</th><td>" +email+ "</td></tr>";
                        data += "<tr><th>Phone No.</th><td>" +phno+ "</td></tr>";
                        data += "<tr><th>Date-of-Birth</th><td>" +dob+ "</td></tr>";
                        if(document.getElementById("chckmale").checked)
                        {
                        data += "<tr><th>Gender</th><td>Male</td></tr>";
                        }
                        else if(document.getElementById("chckfemale").checked)
                        {
                        data += "<tr><th>Gender</th><td>Female</td></tr>";
                        }
                        data += "<tr><th>Address</th><td>" +addr+ "</td></tr>";
                        data += "<tr><th>Education</th><td>" +education+ "</td></tr>";
                        if(document.getElementById("chckmusic").checked)
                        {
                        hobbies += "Music,";
                        }
                        if(document.getElementById("chckcricket").checked)
                        {
                        hobbies += "Cricket,"; 
                        }
                        if(document.getElementById("chckothers").checked)
                        {
                        hobbies += "Others";
                        }
                        if(hobbies==""){alert("plz check hobbies first");}
                        else {
                        data += "<tr><th>Hobbies</th><td>" +hobbies+ "</td></tr></table>";
                        document.getElementById("result").innerHTML = data;}
                        }
                        }
