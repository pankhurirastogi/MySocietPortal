
<html>
<head>

<title>MySocietyInfo</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<!--------signup and login---->
   <meta charset="UTF-8" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
        <meta name="description" content="Login and Registration" />
        <meta name="keywords" content="html5, css3, form, switch, animation, :target, pseudo-class" />
        <meta name="author" content="Codrops" />
        <link rel="shortcut icon" href="../favicon.ico"> 
        <link rel="stylesheet" type="text/css" href="/assets/css/demo.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />
    <link rel="stylesheet" type="text/css" href="/assets/css/animate-custom.css" />
<!---------signup and login---->

  <script src="/assets/jquery-1.11.2.js"></script>


  <script type="text/javascript">
  $(document).ready(function(){
  	  	$(".container").hide();
  	  	$("#krity").click(function(event){
  	  	   $(".container").show();

  	  	});
  	  });
  </script>


<style>
#header {
    background-color:black;
    color:white;
    text-align:center;
    padding:5px;
    font-weight: 900px;
    font-family: cursive;
    font-size: -webkit-xxx-large;
}

#nav {
    line-height:30px;
    background-color:#eeeeee;
    height:430px;
    width:210px;
    float:left;
    padding:30px;	
	  margin-bottom:130px;      
}

#section {
    width:1050px;
    float:left;
    padding:10px;   
    border: 0px solid black; 
}

#first {
    width: 706px;
    height: 700px;
    float:left; /* add this */
    border: 0px solid red;
}
#third  {
    width: 706px;
    height: 300px;
    border: 0px solid blue;
    
    margin: 220px ;
    margin-left: auto;

  }
   #overlay {
     visibility: hidden;
     position: absolute;
     left: 0px;
     top: 0px;
     width:100%;
     height:100%;
     text-align:center;
     z-index: 1000;
}
#overlay div {
     width:300px;
     margin: 100px auto;
     background-color: #fff;
     border:1px solid #000;
     padding:15px;
     text-align:center;
}

/**#mydiv {
    line-height:30px;
    background-color:#eeeeee;
    height:500px;
    width:330px;
    float:right;
    padding:5px;  
    margin-bottom:100px;      
}**/

#mydiv {
    border: 0px solid green;
    width: 320px;
    height: 700px;
    float: right; /* add this */
     margin: 5px;
    padding: 5px;
}

  .elem{
  
    -webkit-transition-property: -webkit-transform;
    -webkit-transition-duration: 1s;


    -moz-transition-property: -moz-transform;
    -moz-transition-duration: 1s;
}
.elem:hover {
    -webkit-animation-name: rotate; 
    -webkit-animation-duration: 2s; 
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;

    -moz-animation-name: rotate; 
    -moz-animation-duration: 2s; 
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: linear;
}
@-webkit-keyframes rotate {
    from {-webkit-transform: rotateY(0deg);}
    to {-webkit-transform: rotateY(360deg);}
}

@-moz-keyframes rotate {
    from {-moz-transform: rotateY(0deg);}
    to {-moz-transform: rotateY(360deg);}
}

div.img{
      margin: 2px;
      padding:  2px;
      height: auto;
      width:  auto;

  }
h2{
  font-size: 2.5em;
  font-family: Georgia;
  letter-spacing: 0.1em;
  color: rgb(142,11,0);
  text-shadow: 1px 1px 1px rgba(255,255,255,0.6);
}
p.colorred
{
  color: #3a3a3a;
   text-indent: 80px;
  
}


.styled-button-1
 {
  background-color:#5F9EA0;
  color:#fff;
  font-family:'Helvetica Neue',sans-serif;
  font-size:18px;
  line-height:30px;
  border-radius:20px;
  -webkit-border-radius:20px;
  -moz-border-radius:20px;
  border:0;
  text-shadow:#C17C3A 0 -1px 0;
  width:120px;
  height:32px
}  


#footer {
   
}
</style>

  



</head>

<body>

  <div id="overlay">

  Click here to [<button href="javascript :" id="closee">close</button>]


</div>

<div id="header" style="height:120px">
<h1><strong>My Society Portal</strong></h1>


</div>

<div id="nav">
  <form name="form1" method="post" action=""  >
      <div align="center"></div>
  </form>
  <input name="Submit" type="button"  value="HOME"  id="home" style="margin-bottom:10px; HEIGHT:70px; width:200px;   font-family: cursive;
  font-size: x-large;"  >
  <input type="submit" name="Submit2" value="ABOUT US" STYLE="margin-bottom:10px; HEIGHT:70px; width:200px;   font-family: cursive;
  font-size: x-large;" id="yooo" >
  <input type="submit" name="Submit2" value="REGISTER" STYLE="margin-bottom:10px; HEIGHT:70px; width:200px;  font-family: cursive;
  font-size: x-large;" id="krity" >
  <input type="submit" name="Submit2" value="SIGN IN" STYLE="margin-bottom:10px; HEIGHT:70px; width:200px;  font-family: cursive;
  font-size: x-large;"  id="sn"  hrf="javascript :" >
  <input type="submit" name="Submit2" value="CONTACT US"  id="contact" STYLE="margin-bottom:10px; HEIGHT:70px; width:200px;  font-family: cursive;
  font-size: x-large;"  >
  <br>
<br>
</div>

<div id="section" align="center" >
	
  
      <!-------------Start Of Registration Heading Only---->
        




      <!-----End Of Registration Heading Only---->



      <!---------start of registration and sign in----->




      <div class="container">
            <!-- Codrops top bar -->
            <div class="container">
          <!--/ Codrops top bar -->
            <header>
                <h1>Login and Registration Form </h1>
       
            </header>
            <section>       
                <div id="container_demo" >
                    <!-- hidden anchor to stop jump http://www.css3create.com/Astuce-Empecher-le-scroll-avec-l-utilisation-de-target#wrap4  -->
                   <a class="hiddenanchor" id="toregister"></a>
                    <a class="hiddenanchor" id="tologin"></a>
                    <div id="wrapper">
                        <div id="login" class="animate form">
                            <form  action="mysuperscript.php" autocomplete="on"> 
                                <h1>Log in</h1> 
                                <p> 
                                    <label for="username" class="uname" data-icon="u" > Your email or username </label>
                                    <input id="username" name="username" required="required" type="text" placeholder="myusername or mymail@mail.com"/>
                                </p>
                                <p> 
                                    <label for="password" class="youpasswd" data-icon="p"> Your password </label>
                                    <input id="password" name="password" required="required" type="password" placeholder="eg. X8df!90EO" /> 
                                </p>
                                <p class="keeplogin"> 
                  <input type="checkbox" name="loginkeeping" id="loginkeeping" value="loginkeeping" /> 
                  <label for="loginkeeping">Keep me logged in</label>
                </p>
                                <p class="login button"> 
                                    <input type="submit" value="Login"  class="loginuser" href="javscript :">
                </p>
                                <p class="change_link">
                  Not a member yet ?
                  <a href="#toregister" class="to_register">Join us</a>
                </p>
                            </form>
                        </div>

                        <div id="register" class="animate form">
                            <form  action="mysuperscript.php" autocomplete="on"> 
                                <h1> Sign up </h1> 
                                <p> 
                                    <label for="usernamesignup" class="uname" data-icon="u">Your username</label>
                                    <input id="usernamesignup" name="usernamesignup" required="required" type="text" placeholder="mysuperusername690" />
                                </p>
                                 <p> 
                                    <label for="year" class="younum" data-icon="u">year</label>
                                    <select id="year" >
                                         


                                         <option>1</option>
                                         <option>2</option>
                                         <option>3</option>
                                         <option>4</option>


                                    </select>
                                </p> 


                               
                                <p> 
                                    <label for="emailsignup" class="youmail" data-icon="e" > Your email</label>
                                    <input id="emailsignup" name="emailsignup" required="required" type="email" placeholder="mysupermail@mail.com"/> 
                                </p>
                                <p> 
                                    <label for="passwordsignup" class="youpasswd" data-icon="p">Your password </label>
                                    <input id="passwordsignup" name="passwordsignup" required="required" type="password" placeholder="eg. X8df!90EO"/>
                                </p>
                               
                                <!///////////>

                                    <p> 
                                    <label for="phone_no" class="younum" data-icon="p">Enter Your Number</label>
                                    <input id="phone_no" name="phone_no" required="required" type="number" placeholder="eg. 1234567890"/>
                                </p>

                                 <p> 
                                    <label for="interest_1" class="younum" data-icon="u">Enter Your Interest(First preference)</label>
                                    <select id="interest_1" >
                                         <option >dance</option>
                                         <option >singing</option>
                                         <option >programming</option>
                                         <option >open_sourse</option>
                                         <option>rmanualrobot</option>
                                         <option>quizes</option>
                                         <option>dramatics</option>
                                         <option>creative-writing </option>
                                         <option>android</option>
                                         <option>current-affairs</option>
                                    </select>
                                </p> 
                                                                 <p> 
                                    <label for="interest_2" class="younum" data-icon="u">Enter Your Interest(Second Preference)</label>
                                    <select id="interest_2" >
                                     <option >dance</option>
                                         <option >singing</option>
                                         <option >programming</option>
                                         <option >open_sourse</option>
                                         <option>manualrobot</option>
                                         <option>quizes</option>
                                         <option>dramatics</option>
                                         <option>creative-writing </option>
                                         <option>android</option>
                                         <option>current-affairs</option>

                                    </select>
                                </p> 

                                 <p> 
                                    <label for="interest_3" class="younum" data-icon="u">Enter Your Interes(Third Preference)</label>
                                    <select id="interest_3" >
                                     <option >dance</option>
                                         <option >singing</option>
                                         <option >programming</option>
                                         <option >open_sourse</option>
                                         <option>manualrobot</option>
                                         <option>quizes</option>
                                         <option>dramatics</option>
                                         <option>creative-writing </option>
                                         <option>android</option>
                                         <option>current-affairs</option>

                                    </select>
                                </p> 


                               



                                <!///////////>

                                <p class="signin button"> 
                  <input type="submit" value="Sign up" class="registeruser" /> 
                </p>
                                <p class="change_link">  
                  Already a member ?
                  <a href="#tologin" class="to_register"> Go and log in </a>
                </p>
                            </form>
                        </div>
            
                    </div>
                </div>  
            </section>
        </div>











    </----------end of registration and sign in----->
</div>

<footer>
	 </footer>
       <script src="/assets/home.js"></script>

</body>
</html>
