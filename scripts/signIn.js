import {  clientInfo, saveToStorage} from "./utils/client-info.js"

  
console.log(clientInfo)
 

 const saveInfoElement = document.querySelector('.js-save-button')
 
 saveInfoElement.addEventListener('click',()=>{
 
    savingClientInfo()
 })

 



  function savingClientInfo(){
    const firstNameInputElement = document.querySelector('.js-first-name')
    const firstName = firstNameInputElement.value
   
    
 const surNameElement = document.querySelector('.js-surname')
 const surName = surNameElement.value

 const dateinputElement = document.querySelector('.js-date-of-birth')

const dateOfBirth = dateinputElement.value

 const genderInputElement = document.querySelector('.js-gender-select')

const gender = genderInputElement.value

 const userNameInputElement = document.querySelector('.js-username')

 const userName = userNameInputElement.value




 const firstPasswordInputElement = document.querySelector('.js-create-password')

const firstPassword = firstPasswordInputElement.value


 const confirmPasswordInputElement = document.querySelector('.js-retype-password')
 const password = confirmPasswordInputElement.value



 const correctName =  firstName.length > 3
 const correctSurName = surName.length > 3

const correctDateOfBirth = dateOfBirth !==''

 const correctGender = gender.length > 3

 const matchPassword = password === firstPassword

 const passwordLength =  password.length

 const usernameLength= userName.length > 5


 let matchingClient;

clientInfo.forEach((client)=>{

if(userName === client.userName){

    matchingClient = client
}
})

if(matchingClient){

    console.log(matchingClient.userName)

}else if( correctName && correctDateOfBirth && usernameLength && correctGender && matchPassword && passwordLength >= 6 && passwordLength <= 10 && !matchingClient){

    clientInfo.push(
        {
            firstname:firstName,
            surName:surName,
            dateOfBirth:dateOfBirth,
            gender:gender,
            userName:userName,
            password :password,
    
        })

  firstNameInputElement.value=``    
  surNameElement.value=``  
  dateinputElement.vale=``
  genderInputElement.value = ``

  userNameInputElement.value = ``
  firstPasswordInputElement.value = ``
  confirmPasswordInputElement.value = ``
  
  document.body.classList.add('proceeding')

document.body.innerHTML =`
<div class = "complete-sign-in-div">


<div>

Thank you for Signing In <b> ${ firstName} ${surName} </b>

</div>

<div>

 You can now proceed to <a href="logIn.html">
        <span class="log-in-span js-login-span"> Log In </span>
    </a>

</div>

</div>


`


console.log(clientInfo)

 saveToStorage()

console.log(localStorage)
return

 
}


if(!correctName){
     document.querySelector('.js-first-name-caution').innerHTML =`<span>Name too short!</span>`
}else{
    document.querySelector('.js-first-name-caution').innerHTML =``
}

if(!correctSurName){
    document.querySelector('.js-surname-caution').innerHTML =`<span> Surname too short!</span>`

}else{
    document.querySelector('.js-surname-caution').innerHTML =``
}
if(!correctDateOfBirth){
    document.querySelector('.js-date-of-birth-caution').innerHTML =`<span>Invalid date of birth!</span>`

}else{
    document.querySelector('.js-date-of-birth-caution').innerHTML =``
}
if(!correctGender){
    document.querySelector('.js-gender-caution').innerHTML =`<span>Please choose your gender!</span>`

}else{
    document.querySelector('.js-gender-caution').innerHTML =``
}
if(!usernameLength){
    document.querySelector('.js-username-caution').innerHTML =`<span>Username too short!</span>`

}else if(matchingClient){
    document.querySelector('.js-username-caution').innerHTML =`<span>Username already exists,proceed to Log-In</span>`
}else{
    document.querySelector('.js-username-caution').innerHTML =` `

}

if(!matchPassword){
    document.querySelector('.js-confirm-password-caution').innerHTML =`<span> Passwords not matching!
    </span>`

 }else if(matchPassword && passwordLength < 6 ||passwordLength > 10){

        document.querySelector('.js-confirm-password-caution').innerHTML =`<span>Password too short!</span>`
 }else if(matchPassword && passwordLength >= 6 && passwordLength <= 10 ){
    document.querySelector('.js-confirm-password-caution').innerHTML =`  `
   
}


/*
return {
    usernameLength,
    matchPassword,
    passwordLength,
    correctGender,
    correctName,
    correctDateOfBirth,
    matchingClient,
}*/
 }