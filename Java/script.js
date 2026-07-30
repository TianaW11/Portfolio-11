function GDNav(){
    document.body.style.backgroundColor= "rgb(255, 215, 184)"; 
    setTimeout(function(){
        window.location.href ='GD.html'; 
    }, 150); 
}

function TPNav(){
     document.body.style.backgroundColor= "rgb(241, 214, 245);"; 
    setTimeout(function(){
        window.location.href ='TP.html'; 
    }, 150); 
}
function PHNav(){
     document.body.style.backgroundColor= "rgb(179, 235, 255);"; 
    setTimeout(function(){
        window.location.href ='PH.html'; 
    }, 150); 
}
function PTNav(){
     document.body.style.backgroundColor= "rgb(235, 226, 178)"; 
    setTimeout(function(){
        window.location.href ='Paint.html'; 
    }, 150); 
}


window.addEventListener('pageshow', function(event){
    if (event.persisted){
        document.body.style.backgroundColor = ''; 
    }
})






function toggleParagraph(){
    var description = document.getElementById("piece-description"); 
    description.classList.toggle("show"); 
    console.log("current classes on description:", description.className); 
}
function toggleParagraph2(){
    var description = document.getElementById("piece-description2"); 
    description.classList.toggle("show"); 
    console.log("current classes on description:", description.className); 
}
function toggleParagraph3(){
    var description = document.getElementById("piece-description3"); 
    description.classList.toggle("show"); 
    console.log("current classes on description:", description.className); 
}
function toggleParagraph4(){
    var description = document.getElementById("piece-description4"); 
    description.classList.toggle("show"); 
    console.log("current classes on description:", description.className); 
}
function toggleParagraph5(){
    var description = document.getElementById("piece-description5"); 
    description.classList.toggle("show"); 
    console.log("current classes on description:", description.className); 
}
function toggleParagraph6(){
    var description = document.getElementById("piece-description6"); 
    description.classList.toggle("show"); 
    console.log("current classes on description:", description.className); 
}
function toggleParagraph7(){
    var description = document.getElementById("piece-description7"); 
    description.classList.toggle("show"); 
    console.log("current classes on description:", description.className); 
}


function toggleParagraph10(){
    var description = document.getElementById("piece-description10"); 
    description.classList.toggle("show"); 
    console.log("current classes on description:", description.className); 
}
function toggleParagraph11(){
    var description = document.getElementById("piece-description11"); 
    description.classList.toggle("show"); 
    console.log("current classes on description:", description.className); 
}
