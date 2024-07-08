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
        console.log('incorrect password')
    }else

    if(incorrectUsername){

        console.log('Incorrect Username or password')
    }
 })

 