function valid(){
    //Name
    var name=document.getElementById("nm").value;
    var np=/^(F|f)[a-z,A-Z]{4,9}$/;
    if(!(np.test(name))){
        document.getElementById('nm').style.backgroundColor="red";
		document.getElementById("label").style.visibility="visible";
		setTimeout(valid,1000);
        return false;
    }

    //Email 
    var eml=document.getElementById("eml").value;
    var mp=/^([a-z,A-Z,0-9][a-z,A-Z,0-9,_,.])@((gmail)|(rguktn))\.((com)|(in)|(net)|(edu))?$/;
    if(!(mp.match(eml))){
        return false;
    }

    //PHONE number
            var i=document.getElementById("ind").checked;
			var u=document.getElementById("usa").checked;
			var p=document.getElementById("pn").value;

			if(i == true)
			{

				var r=/^977\d{7}$/;
				if(r.test(p)== false)
				{
					//alert("Enter number in Indian format")
					document.getElementById("pn").style.backgroundColor="red";
					document.getElementById("in").style.visibility="visible";
					return false;
				}
			}
			else if(u == true)
			{
				var re=/^\d{4}\-\d{4}\-\d{4}$/;
				if(re.test(p) == false)
				{
					//alert("Enter number in USA format");
					document.getElementById("pn").style.backgroundColor="red";
					document.getElementById("us").style.visibility="visible";
					return false;
				}
			}
			else
			{
				alert("You are not selected country");
				return false;
			}
	
	//payment method
	var ddm=document.getElementById("dd").checked;
	var acm=document.getElementById("ac").checked;
	var payn=document.getElementById("pay").value;

			if(ddm == true)
			{

				var r=/^SBIN\d{7}$/;
				if(r.test(payn)== false)
				{
					//alert("Enter number in Indian format")
					document.getElementById("pay").style.backgroundColor="red";
					return false;
				}
			}
			else if(acm == true)
			{
				var re=/^\d{11}$/;
				if(re.test(payn) == false)
				{
					//alert("Enter number in USA format");
					document.getElementById("pay").style.backgroundColor="red";
					return false;
				}
			}
			else
			{
				alert("You are not selected any method");
				return false;
			}		
	var cnty1=document.getElementById("america").checked;
    var cnty2=document.getElementById("england").checked;
    var cnty3=document.getElementById("germany").checked;
    if(cnty1 || cnty2 || cnty3)
    {
		prompt("Have you want beer or not?");
    }


}

function namec(){
    document.getElementById("nm").value=document.getElementById("nm").value.toUpperCase();
    
}
function costf(){
    var nuz=document.getElementById("nuz").checked;
	var kad=document.getElementById("kadapa").checked;
	var sklm=document.getElementById("sklm").checked;
	var ong=document.getElementById("ong").checked;
	var cos=document.getElementById("sn").value;

	if(nuz == true || kad == true){
		var trent=cos*2000;
		document.getElementById("rent").value=trent;

	}
	if(sklm == true || ong == true){
		var trent=cos*3000;
		document.getElementById("rent").value=trent;
	}
    
}

