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