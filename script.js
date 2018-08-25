let valtozo = 0;
document.getElementById("ment").addEventListener("click", function (){ 
    let title = document.getElementById("blogcim").value;
    let text = document.getElementById("blogleiras").value;
    
    let dataToSave = {
        title: title,
        text: text
    };
     
    fb.ref("posztok").once('value').then(data => {
        
    let savedPosts = data.val();
    let path="posztok/"+savedPosts.length;
    fb.ref(path).set(dataToSave);
    savedPosts.length++; 
    });

});

document.getElementById("registration").addEventListener("click", function (){ 
    alert("Itt majd lesz egy regisztrációs űrlap. :)")
     });

document.getElementById("forgetpw").addEventListener("click", function (){ 
   alert("Ez a funkció még nem működik egyelőre. :D")
    });


    document.getElementById("bejelentkezes").addEventListener("click", function (){ 
        let email = document.getElementById("emailcim").value;
        let password = document.getElementById("jelszo").value;
        
        let dataToSave = {
            email_cim: email,
            jelszo: password
        };
         
        fb.ref("bejelentkezes").once('value').then(data => {
            
        let savedPosts = data.val();
        let path="bejelentkezes/"+savedPosts.length;
        fb.ref(path).set(dataToSave);
        savedPosts.length++; 
        });
    
    });

    let d = new Date();
    document.getElementById("day").innerHTML = d.getDate();
    document.getElementById("month").innerHTML = d.getMonth();
    document.getElementById("year").innerHTML = d.getFullYear();