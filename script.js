// clicks 
function clearBg(){
    document.getElementById("no-1").style.background= "aquamarine"
    document.getElementById("no-2").style.background= "none"
    document.getElementById("no-3").style.background= "none"
    document.getElementById("no-4").style.background= "none"
}


function clearBg2(){
    document.getElementById("no-1").style.background= "none"
    document.getElementById("no-2").style.background = " aquamarine"
    document.getElementById("no-3").style.background= "none"
    document.getElementById("no-3").style.background= "none"
}

function clearBg3(){
    document.getElementById("no-3").style.background = " aquamarine"
    document.getElementById("no-1").style.background= "none"
    document.getElementById("no-2").style.background= "none"
    document.getElementById("no-4").style.background= "none"
}
function clearBg4(){
    document.getElementById("no-4").style.background = " aquamarine"
    document.getElementById("no-1").style.background= "none"
    document.getElementById("no-2").style.background= "none"
    document.getElementById("no-3").style.background= "none"
}


// one validation


function one(){
    if(checkname){
        if(checkmail){
            if(chechNo){
                
            }
        }
    }
    return false
}


function checkname(){
    var letters =/^[a-z][a-z\s]*$/ ;
    var name = document.getElementById("name");
    if(name.value.match(letters)){
        document.getElementById("name-error").innerHTML= ""
        return true
    }else{
        document.getElementById("name-error").innerHTML= "please enter valid name";
        name.focus()
        return false
    }
}

function checkmail(){
    var filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var mail = document.getElementById("email");
    if(mail.value.match(filter)){
        document.getElementById("email-error").innerHTML = ""
        return true
    }else{
        document.getElementById("email-error").innerHTML = " please enter valid email";
        mail.focus()
        return false
    }
}

function chechNo(){
    var no = document.getElementById("number").value;
    if(no == ""){
        document.getElementById("no-error").innerHTML = " this field is required"
        no.focus()
        return false
    }else{
        document.getElementById("no-error").innerHTML = " "
        document.getElementById("two").style.display= "block";
        document.getElementById("one").style.display= "none"

        document.getElementById("no-1").style.background= "none"
        document.getElementById("no-2").style.background = " aquamarine"
        document.getElementById("no-3").style.background= "none"
        document.getElementById("no-3").style.background= "none"
        return true
    }
}




// select plan 
function selectplan(){
    document.getElementById("plan-1").style.border = "1px solid blue";
    document.querySelector("#plan-1").style.background = "hsl(229, 24%, 87%)"
    document.getElementById("plan-2").style.border = "1px solid black";
    document.querySelector("#plan-2").style.background = "none"
    document.getElementById("plan-3").style.border = "1px solid black";
    document.querySelector("#plan-3").style.background = "none"
}

function selectplantwo(){
    document.getElementById("plan-2").style.border = "1px solid blue";
    document.querySelector("#plan-2").style.background = "hsl(229, 24%, 87%)";
    document.getElementById("plan-1").style.border = "1px solid black";
    document.querySelector("#plan-1").style.background = "none"
    document.getElementById("plan-3").style.border = "1px solid black";
    document.querySelector("#plan-3").style.background = "none"
}

function selectplanthree(){
    document.getElementById("plan-3").style.border = "1px solid blue";
    document.querySelector("#plan-3").style.background = "hsl(229, 24%, 87%)";
    document.getElementById("plan-1").style.border = "1px solid black";
    document.querySelector("#plan-1").style.background = "none"
    document.getElementById("plan-2").style.border = "1px solid black";
    document.querySelector("#plan-2").style.background = "none"
}





function textChangeone(){
    var x = document.getElementById("text-1").innerHTML;
    if(x === "$9/mo"){
        document.getElementById("text-1").innerHTML = "$90/yr"
    }else{
        document.getElementById("text-1").innerHTML = "$9/mo";
    }
}
function textChangetwo(){
    var s = document.getElementById("text-2").innerHTML;
    if(s === "$12/mo"){
        document.getElementById("text-2").innerHTML = "$120/yr"
    }else{
        document.getElementById("text-2").innerHTML = "$12/mo"
    }
}

function textChange() {
    var message1 = "$15/mo";
    var message2 = "$150/yr";
    var element = document.getElementById('text-3');

    if (element.innerHTML === message1)
        element.innerHTML = message2;
    else
        element.innerHTML = message1;

    return false;
}

function circlemove(){
    document.getElementById("circle").classList.toggle("circle")
    document.getElementById("circle").classList.toggle("active")
    document.getElementById("year").classList.toggle("show");
    document.getElementById("year-one").classList.toggle("show-one");
    document.getElementById("year-two").classList.toggle("show-two");
}

function goback(){
    document.getElementById("two").style.display= "none";
    document.getElementById("one").style.display= "block";
    document.getElementById("no-1").style.background= "aquamarine"
    document.getElementById("no-2").style.background = " none"
    document.getElementById("no-3").style.background= "none"
    document.getElementById("no-3").style.background= "none"
}
function gonext(){
    document.getElementById("no-3").style.background= "aquamarine"
    document.getElementById("no-1").style.background = " none"
    document.getElementById("no-2").style.background= "none"
    document.getElementById("no-4").style.background= "none"
}



// three-one 
function online(){
    document.getElementById("online").classList.toggle("online")
}
function onlineone(){
    document.getElementById("online-one").classList.toggle("online")
}
function onlinetwo(){
    document.getElementById("online-two").classList.toggle("online")
}
function online1(){
    document.getElementById("online-3").classList.toggle("online")
}
function onlineone1(){
    document.getElementById("online-4").classList.toggle("online")
}function onlinetwo1(){
    document.getElementById("online-5").classList.toggle("online")
}

function gobackone(){
    document.getElementById("three-one").style.display= "none";
    document.getElementById("three-two").style.display= "none";
    document.getElementById("two").style.display= "block";
    document.getElementById("no-2").style.background= "aquamarine"
    document.getElementById("no-1").style.background = " none"
    document.getElementById("no-3").style.background= "none"
    document.getElementById("no-3").style.background= "none"
}

function gonextone(){
    document.getElementById("no-4").style.background= "aquamarine"
    document.getElementById("no-1").style.background = " none"
    document.getElementById("no-2").style.background= "none"
    document.getElementById("no-3").style.background= "none"
}



// four one 
function nextmonth(){
    document.getElementById("three-one").style.display="none";
    document.getElementById("four-one").style.display = "block"
}

function gobackthree(){
    document.getElementById("three-one").style.display="block";
    document.getElementById("four-one").style.display = "none"
    document.getElementById("no-3").style.background= "aquamarine"
    document.getElementById("no-1").style.background = " none"
    document.getElementById("no-2").style.background= "none"
    document.getElementById("no-4").style.background= "none"
}

// four two 
function nextyear(){
    document.getElementById("three-two").style.display="none";
    document.getElementById("four-two").style.display = "block"
}

function gobackthreeone(){
    document.getElementById("three-two").style.display="block";
    document.getElementById("four-two").style.display = "none"
    document.getElementById("no-3").style.background= "aquamarine"
    document.getElementById("no-1").style.background = " none"
    document.getElementById("no-2").style.background= "none"
    document.getElementById("no-4").style.background= "none"
}



// thanks 

function thanks(){
    document.getElementById("four-one").style.display = "none"
    document.getElementById("four-two").style.display = "none"
    document.getElementById("thanks").style.display = "block"

}


// ChannelMergerNode 
function change(){
    document.getElementById("four-one").style.display = "none"
    document.getElementById("four-two").style.display = "none"
    document.getElementById("two").style.display = "block"
    document.getElementById("no-2").style.background= "aquamarine"
    document.getElementById("no-1").style.background = " none"
    document.getElementById("no-3").style.background= "none"
    document.getElementById("no-4").style.background= "none"
}