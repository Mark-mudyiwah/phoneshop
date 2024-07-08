import { clientInfo } from "./utils/client-info.js";

console.log(clientInfo)




document.querySelector('.js-log-in-button').addEventListener('click',()=>{

    const userNameInputElement = document.querySelector('.js-username-input')


    const passwordInputElement = document.querySelector('.js-password-input')
    
     
    const userName = userNameInputElement. value
    
    const password = passwordInputElement.value  


    let matchingClient;
    let inCorrectPassword;
    let  incorrectUsername;

    clientInfo.forEach((client)=>{

    if( userName === client.userName && password === client.password){
        matchingClient = client
    }

    if( userName === client.userName && password !== client.password){
        inCorrectPassword = true
    }

    if(userName !==client.userName){
 
        incorrectUsername = true
    }

    })

    if(matchingClient){
        window.location.replace('index.html')
        console.log(matchingClient)
    }else

    if(inCorrectPassword){
        document.querySelector('.js-caution-span')
         .innerHTML =`
          Incorrect password!
        `
       
    }else

    if(incorrectUsername){
        document.querySelector('.js-caution-span')
        .innerHTML =`
       Incorrect Username or password!
       `
    }
 })

 