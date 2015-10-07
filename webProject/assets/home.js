var flag=0;
var sightml;
var befhtml;
var eventss= new Array();
var soc_used;

$(document).on('click','.loginuser',function(event){

	
event.preventDefault();

 

var emailid=$('#username').val();
var password=$('#password').val();

	

	$.ajax({
  	type: "POST",
  	url: "d",
  	data: {  emailid:emailid,
             password:password

  		   
  	 }
	}).done(function( data ) {
    //var set_data='<h1 align=left>hello user</h1><br><br><button class="findsociety" href="javascript :">check societies</button><button class="logg" href="javascript :">log out</button><p id ="panh"></p><div id="mydiv">yoyoyoyoy</div>';
      befhtml= $('#section').html();

      //var set_data='<div id="first" align="center"><h2>WELCOME</h2><br><p id="colorred">When you post a new question, other users will almost immediately see it and try to provide good answers. This often happens in a matter of      minutes, so be sure to check back frequently when your question is still new for the best response.</p> <input type="submit" align="right" class="findsociety" href="javascript :" /><input type="submit" align="right" class="logg" value="Events" href="javascript :" /><div id="neww" align="left" float="left"  width="400px"></div></div><div id="mydiv" class ="Capture4">&nbsp;</div>';
        var set_data='<div id="first" align="center"><h2>WELCOME pankhuri</h2><input type="submit" align="right" class="styled-button-1 logg" value="Log Out" style="float:right;" href="javascript :" /><br><br><br><p class="colorred" > <b><i>When you post a new question, other users will almost immediately see it and try to provide good answers. This often happens in a matter of minutes, so be sure to check back frequently when your question is still new for the best response.</i></b></p><br><input type="submit" align="right" class="styled-button-1 findsociety" value="Society" href="javascript :" /><div id="third" ><a target="_blank" ><img id="fullpic" src="Capture4.png" alt="choose ur own pic" width="250" height="229" align="left"></a><p class="colorred" id="neww"><b><i><strong>When you post a new question, other users will almost immediately see it and try to provide good answers. This often happens in a matter of minutes, so be sure to check back frequently when your question is still new for the best response.</i></b></strong></p><br><br><h3 style="float: left"><b>CONTACT NO:</b></h3><button id="events_det" href="javascript :">events</button></div></div><div id="mydiv" class="img"></div>';
  


      console.log(data);
if(data!=0)    { 
  flag=data;
  $('#section').html(set_data).show();
  $('#third').hide();
  }
    
  });
});

$(document).on('click','.findsociety',function(event){

 
$.ajax({ 
    type: 'POST', 
    url: 'fs', 
    data: { }, 
    dataType: 'json',
    success: function (data) { 
       console.log(data);

        
        $.each(data, function(index, element) {
          console.log(element);
          eventss.push(element);
          console.log(index);

          var htmll='<div><p>'+element.soname+'</p><img  src="'+element.evenimage+'" id="'+index+'" href="javascript :" width="220px" height="220px"></div>';
          console.log(htmll);
          console.log(element.evenimage);
          console.log(eventss);
         $('#mydiv').append(htmll);
         //$('body').append(htmll);



           /** $('body').append($('<div>', {
                text: element.soname
            }));**/
        });
    }
});
});


$(document).on('click','.showelements',function(event){

  flag=3;
if(flag==0)
 alert("pankhuri");
else
  alert('vanshi');
  // var htmll='<div><img src="/assets/pankhuri.jpg"></div>';
   //$('body').append(htmll);

  

 
});
$(document).on('click','#reg',function(event){

 //var reghtml='<form action="b" method="post">name<input type="text" name="name"><br> year<input type="number" name="year"><br>emailid<input type="text" name="emailid"><br>phonenumber<input type="text" name="phonenumber"><br>interest1<input type="text" name="interest-1"><br>interest2<input type="text" name="interest_2"><br>interest3<input type="text" name="interest_3"><br>password<input type="password" name="password"><input type="submit"></form>';
  var reghtml='<form action="b" method="post">name<input type="text" name="name" class="name"><br>year<input type="number" name="year" class="year"><br>emailid<input type="text" name="emailid" class="emailid"><br>phonenumber<input type="text" name="phonenumber" class="phonenumber"><br>interest1<input type="text" name="interest-1" class="interest_1"><br>interest2<input type="text" name="interest_2" class="interest_2"><br>interest3<input type="text" name="interest_3" class="interest_3"><br>password<input type="password" name="password" class="password"><input type="submit" class="registeruser" href="javascript :"></form>';

      $('#section').html(reghtml);



    

  

 
});

$(document).on('click','#sn',function(event){

   

  // var sightml='<div class="container"><section>0<div id="container_demo" ><div id="wrapper>"<div id="login" class="animate form"><form  action="mysuperscript.php" autocomplete="on"><h1>Log in</h1><p><label for="username" class="uname" data-icon="u" > Your email or username </label><input id="username" name="username" required="required" type="text" placeholder="myusername or mymail@mail.com"/></p><label for="password" class="youpasswd" data-icon="p">Your password </label><input id="password" name="password" required="required" type="password" placeholder="eg. X8df!90EO" /> </p><p class="keeplogin"> <input type="checkbox" name="loginkeeping" id="loginkeeping" value="loginkeeping" /> <label for="loginkeeping">Keep me logged in</label></p><p class="login button"> <input type="submit" value="Login"  class="loginuser" href="javscript :"></p><p class="change_link"></form></div></div></section></div>';
    sightml='<div class="container"><section><div id="container_demo" ><a class="hiddenanchor" id="tologin"></a><div id="wrapper"><div id="login" class="animate form"><form  action="mysuperscript.php" autocomplete="on"><h1>Log in</h1><p><label for="username" class="uname" data-icon="u" > Your email or username </label><input id="username" name="username" required="required" type="text" placeholder="myusername or mymail@mail.com"/></p><p> <label for="password" class="youpasswd" data-icon="p"> Your password </label><input id="password" name="password" required="required" type="password" placeholder="eg. X8df!90EO" /></p><p class="keeplogin"> <input type="checkbox" name="loginkeeping" id="loginkeeping" value="loginkeeping" /> <label for="loginkeeping">Keep me logged in</label></p><p class="login button"> <input type="submit" value="Login"  class="loginuser" href="javscript :"></p></form></div></div></div></section></div>';


    $('#section').html(sightml);                
  // $('#login').appendTo('#section');



    

  

 
});

$(document).on('click','#home',function(event){

   //alert("pankhuri");

  // var sightml='<div class="container"><section>0<div id="container_demo" ><div id="wrapper>"<div id="login" class="animate form"><form  action="mysuperscript.php" autocomplete="on"><h1>Log in</h1><p><label for="username" class="uname" data-icon="u" > Your email or username </label><input id="username" name="username" required="required" type="text" placeholder="myusername or mymail@mail.com"/></p><label for="password" class="youpasswd" data-icon="p">Your password </label><input id="password" name="password" required="required" type="password" placeholder="eg. X8df!90EO" /> </p><p class="keeplogin"> <input type="checkbox" name="loginkeeping" id="loginkeeping" value="loginkeeping" /> <label for="loginkeeping">Keep me logged in</label></p><p class="login button"> <input type="submit" value="Login"  class="loginuser" href="javscript :"></p><p class="change_link"></form></div></div></section></div>';

     sightml='<p><B><I>Together we create individuals who are well balanced in their outlook on life </I></B></p><br><br><table align="center"><tr><td><img class="elem" src="/assets/verveimg.jpg" height="200" width="250" id="im1"></td><td><img  class="elem"src="/assets/impetusimg.jpg" height="200" width="250"></td><td><img  class="elem" src="/assets/spiceimg.jpg" height="200" width="250"></td></tr><tr><td><img  class="elem" src="/assets/origoimg.jpg" height="200" width="250"></td><td><img   src="/assets/college.png" height="200" width="250"></td><td><img class="elem" src="/assets/vegaimg.jpg" height="200" width="250"></td></tr><tr><td><img   class="elem" src="/assets/quantaimg.jpg" height="200" width="250"></td><td><img  class="elem" src="/assets/ncss.jpg" height="200" width="250"></td><td><img  class="elem" src="/assets/illuminatiimg.jpg" height="200" width="250"></td></tr></table>';
    $('#section').html(sightml);                
  // $('#login').appendTo('#section');



    

  

 
});

/**$(document).on('click','#sn',function(event){

   alert("pankhuri");

  // var sightml='<div class="container"><section>0<div id="container_demo" ><div id="wrapper>"<div id="login" class="animate form"><form  action="mysuperscript.php" autocomplete="on"><h1>Log in</h1><p><label for="username" class="uname" data-icon="u" > Your email or username </label><input id="username" name="username" required="required" type="text" placeholder="myusername or mymail@mail.com"/></p><label for="password" class="youpasswd" data-icon="p">Your password </label><input id="password" name="password" required="required" type="password" placeholder="eg. X8df!90EO" /> </p><p class="keeplogin"> <input type="checkbox" name="loginkeeping" id="loginkeeping" value="loginkeeping" /> <label for="loginkeeping">Keep me logged in</label></p><p class="login button"> <input type="submit" value="Login"  class="loginuser" href="javscript :"></p><p class="change_link"></form></div></div></section></div>';
   //var sightml='<div class="container"><section><div id="container_demo" ><a class="hiddenanchor" id="tologin"></a><div id="wrapper"><div id="login" class="animate form"><form  action="mysuperscript.php" autocomplete="on"><h1>Log in</h1><p><label for="username" class="uname" data-icon="u" > Your email or username </label><input id="username" name="username" required="required" type="text" placeholder="myusername or mymail@mail.com"/></p><p> <label for="password" class="youpasswd" data-icon="p"> Your password </label><input id="password" name="password" required="required" type="password" placeholder="eg. X8df!90EO" /></p><p class="keeplogin"> <input type="checkbox" name="loginkeeping" id="loginkeeping" value="loginkeeping" /> <label for="loginkeeping">Keep me logged in</label></p><p class="login button"> <input type="submit" value="Login"  class="loginuser" href="javscript :"></p></form></div></div></div></section></div>';
   //var regi='<div class="container"><section><div id="container_demo" ><a class="hiddenanchor" id="tologin"></a><div id="wrapper"><div id="register" class="animate form"><form  action="mysuperscript.php" autocomplete="on"><h1> Sign up </h1><p><label for="usernamesignup" class="uname" data-icon="u">Your username</label><input id="usernamesignup" name="usernamesignup" required="required" type="text" placeholder="mysuperusername690" /></p><p><label for="emailsignup" class="youmail" data-icon="e" > Your email</label<input id="emailsignup" name="emailsignup" required="required" type="email" placeholder="mysupermail@mail.com"/></p><p><label for="passwordsignup" class="youpasswd" data-icon="p">Your password </label><input id="passwordsignup" name="passwordsignup" required="required" type="password" placeholder="eg. X8df!90EO"/></p><p><label for="passwordsignup_confirm" class="youpasswd" data-icon="p">Please confirm your password </label><input id="passwordsignup_confirm" name="passwordsignup_confirm" required="required" type="password" placeholder="eg. X8df!90EO"/></p><p><label for="phone_no" class="younum" data-icon="p">Enter Your Number</label><input id="phone_no" name="phone_no" required="required" type="number" placeholder="eg. 1234567890"/></p><p><label for="selct" class="younum" data-icon="p">Enter Your Number</label><select id="selct" ><option value="volvo">dance</option><option value="saab">singing</option><option value="opel">programming</option><option value="audi">open sourse</option><option>robotics </option><option>quizes</option><option>dramatics</option></select></p><p><label for="selcti" class="younum" data-icon="p">Enter Your Number</label><select id="selcti" ><option value="volvo">dance</option><option value="saab">singing</option><option value="opel">programming</option><option value="audi">open sourse</option><option>robotics </option><option>quizes</option><option>dramatics</option></select></p><p class="signin button"><input type="submit" value="Sign up"/></p><p class="change_link">Already a member ?<a href="#tologin" class="to_register"> Go and log in </a></p></form></div></div></div></section></div>';


    $('#section').html(regi);                
  // $('#login').appendTo('#section');



    

  

 
});**/

$(document).on('click','.registeruser',function(event){

  
event.preventDefault();

var name=$('#usernamesignup').val();
  var year=$('#year').val();
  var emailid=$('#emailsignup').val();
  var phonenumber=$('#phone_no').val();
  var  interest_1=$('#interest_1').val();
  var  interest_2=$('#interest_2').val();
  var  interest_3=$('#interest_3').val();
  var password=$('#passwordsignup').val();


  

  $.ajax({
    type: "POST",
    url: "b",
    data: {  name:name,
             year:year,
             emailid:emailid,
             phonenumber:phonenumber,
             interest_1:interest_1,
             interest_2:interest_2,
             interest_3:interest_3,
             password:password
             

         
     }
  }).done(function( data ) {
    if(data=="done")
    {
      alert("you can now login");
      //$('.name').text(null);
      //$('.year').val(" ");

    }
  });
});


$(document).on('click','.logg',function(event){

  

 



  $.ajax({
    type: "POST",
    url: "logoutt",
    data: { 

         
     }
  }).done(function( data ) {
    //var set_data='<buttton class="findsociety" href="javascript :">check societies</button><p id ="panh"></p>';
     console.log(data);
     $('#section').html(befhtml);
     
  });
});

$(document).on('click','#yooo',function(event){

  

 

   alert(eventss[1].discription);

  
});


$(document).on('click','#0',function(event){

  

    soc_used=eventss[0].id;
    
    $('#neww').html('<p>'+eventss[0].discription+'</p>');
    $('#fullpic').attr('src','/assets/ncss.jpg');
    $('#third').show();
   

  
});


$(document).on('click','#1',function(event){

  

    soc_used=eventss[1].id;

    $('#neww').html('<p>'+eventss[1].discription+'</p>');

    $('#fullpic').attr('src','/assets/ncss.jpg');
    $('#third').show();
   

  
});


$(document).on('click','#contact',function(event){

   //alert("pankhuri");

  // var sightml='<div class="container"><section>0<div id="container_demo" ><div id="wrapper>"<div id="login" class="animate form"><form  action="mysuperscript.php" autocomplete="on"><h1>Log in</h1><p><label for="username" class="uname" data-icon="u" > Your email or username </label><input id="username" name="username" required="required" type="text" placeholder="myusername or mymail@mail.com"/></p><label for="password" class="youpasswd" data-icon="p">Your password </label><input id="password" name="password" required="required" type="password" placeholder="eg. X8df!90EO" /> </p><p class="keeplogin"> <input type="checkbox" name="loginkeeping" id="loginkeeping" value="loginkeeping" /> <label for="loginkeeping">Keep me logged in</label></p><p class="login button"> <input type="submit" value="Login"  class="loginuser" href="javscript :"></p><p class="change_link"></form></div></div></section></div>';

     //sightml='<p><B><I>Together we create individuals who are well balanced in their outlook on life </I></B></p><br><br><table align="center"><tr><td><img class="elem" src="/assets/verveimg.jpg" height="200" width="250" id="im1"></td><td><img  class="elem"src="/assets/impetusimg.jpg" height="200" width="250"></td><td><img  class="elem" src="/assets/spiceimg.jpg" height="200" width="250"></td></tr><tr><td><img  class="elem" src="/assets/origoimg.jpg" height="200" width="250"></td><td><img   src="/assets/college.png" height="200" width="250"></td><td><img class="elem" src="/assets/vegaimg.jpg" height="200" width="250"></td></tr><tr><td><img   class="elem" src="/assets/quantaimg.jpg" height="200" width="250"></td><td><img  class="elem" src="/assets/ncss.jpg" height="200" width="250"></td><td><img  class="elem" src="/assets/illuminatiimg.jpg" height="200" width="250"></td></tr></table>';
     sightml=' <div class="container"><div class="container"><header></header><section><div id="container_demo"><a class="hiddenanchor" id="tologin"></a><div id="wrapper"><div id="login" class="animate form"><form  action="mysuperscript.php" autocomplete="on"><h1>Contact Us</h1><p><label for="sendername" class="uname" data-icon="u" > UserName </label><input id="sendername" name="username" required="required" type="text" placeholder="myusername "/></p><p><label for="semail" class="uname" data-icon="u" > Email Id </label><input id="semail" name="username" required="required" type="text" placeholder="mymail@mail.com"/></p><p><label for="sphone_no" class="younum" data-icon="p">Enter Your Number</label><input id="sphone_no" name="phone_no" required="required" type="number" placeholder="eg. 1234567890"/></p><p>Comment</p><p><textarea id="scomments" name="comments" maxlength="1000" cols="25" rows="6"></textarea></p><p class="Submit button" align="right"><input type="submit" value="Submit"  id="contactbtn"/></form></div><p class="signin button"><input type="submit" value="Sign up"/></p></p></form></div></div></div></section></div>';
    $('#section').html(sightml);                
  // $('#login').appendTo('#section');



    

  

 

});


$(document).on('click','#events_det',function(event){


  $.ajax({ 
    type: 'POST', 
    url: 'getevents', 
    data: { 
        socid:soc_used
    }, 
    dataType: 'json',
    success: function (data) { 
       console.log(data);

        
        $.each(data, function(index, element) {

       var htmll='<div><p>'+element.name+'</p><br><p>'+element.time+'</p><br><p>'+element.date+'</p><br><p>'+element.venue+'</div>';
       $('#overlay').append(htmll);

         
        });
    }
});
     // $('#overlay').css('opacity','0.6');
    $('#nav').css('opacity','0.6');
    $('#section').css('opacity','0.4');
    $('#overlay').css('opacity','0.9');

  $('#overlay').css("visibility","visible");



    

});


 
  $(document).on('click','#closee',function(event){
    
    $('#overlay').css("visibility","hidden");
    $('#nav').css("opacity","1");
    $('#section').css("opacity","1");

  });

  $(document).on('click','#contactbtn',function(event){
    event.preventDefault();
    
    var sender_name=$('#sendername').val();
    var phonenumber=$('#sphone_no').val();
    var emailid=$('#semail').val();
    var comment=$('#scomments').val();



     $.ajax({
    type: "POST",
    url: "contact_det",
    data: {  sender_name:sender_name,
             phonenumber:phonenumber,
             emailid:emailid,
             comment:comment
             

         
     }
  }).done(function( data ) {
     if(data==1)
     {
      alert("your comment has been recorded");
     }
  });
});