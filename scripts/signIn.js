import {  clientInfo, saveToStorage} from "./utils/client-info.js"

  
console.log(clientInfo)
 

 const saveInfoElement = document.querySelector('.js-save-button')
 
 saveInfoElement.addEventListener('click',()=>{
 
    savingClientInfo()
 })

 



  function savingClientInfo(){

    const checkbox = document.querySelector('.js-check-box')

    const isChecked = checkbox.checked

    const firstNameInputElement = document.querySelector('.js-first-name')
    const firstName = firstNameInputElement.value.trim()
   
    
 const surNameElement = document.querySelector('.js-surname')
 const surName = surNameElement.value.trim()

 const dateinputElement = document.querySelector('.js-date-of-birth')

const dateOfBirth = dateinputElement.value

 const genderInputElement = document.querySelector('.js-gender-select')

const gender = genderInputElement.value

 const userNameInputElement = document.querySelector('.js-username')

 const userName = userNameInputElement.value.trim()




 const firstPasswordInputElement = document.querySelector('.js-create-password')

const firstPassword = firstPasswordInputElement.value


 const confirmPasswordInputElement = document.querySelector('.js-retype-password')
 const password = confirmPasswordInputElement.value

const nameLength = firstName.length > 3
const nameIsCharacters = isNaN(parseInt(firstName, 10))
const nameNoNumber = /^[a-zA-Z]+$/.test(firstName)
//validating the  name not to include numbers
 const correctName = nameLength && nameIsCharacters && nameNoNumber 

 console.log(nameLength)
 console.log(nameIsCharacters)
 console.log(nameNoNumber)
 console.log(correctName)

 const surNameLength =surName.length > 3
 const surNameNoNumber = /^[a-zA-Z]+$/.test(surName)
 const surNameIsCharacter = isNaN(parseInt(firstName, 10))
 //validating the surname not to include numbers

 const correctSurName =  surNameLength && nameIsCharacters && surNameNoNumber
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

}else if( correctName && correctDateOfBirth && usernameLength && correctGender && matchPassword && passwordLength >= 6 && passwordLength <= 10 && !matchingClient&& isChecked){

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


if(!nameLength){
    document.querySelector('.js-first-name-caution').innerHTML =`<span>Name must be more than 3 characters&#10005</span>`
}else if(!nameNoNumber||!nameIsCharacters){
      document.querySelector('.js-first-name-caution').innerHTML =`<span>Name must contain olny characters &#10005</span>`
}else{
      document.querySelector('.js-first-name-caution').innerHTML =`
     &#10004`
}

if(!surNameLength){
    document.querySelector('.js-surname-caution').innerHTML =`
    <span> Surname must be more than 3 characters&#10005</span>`
}
else if(!surNameNoNumber ||!surNameIsCharacter){
    document.querySelector('.js-surname-caution').innerHTML =`
    <span>Surname must contain olny characters &#10005</span>
    `
}else{
 document.querySelector('.js-surname-caution').innerHTML =`
    &#10004`
}

if(!correctDateOfBirth){
    document.querySelector('.js-date-of-birth-caution').innerHTML =`<span>Provide your date of birth!</span>`

}else{
    document.querySelector('.js-date-of-birth-caution').innerHTML =`
    &#10004
    `
}
if(!correctGender){
    document.querySelector('.js-gender-caution').innerHTML =`<span>Please choose your gender!</span>`

}else{
    document.querySelector('.js-gender-caution').innerHTML =`
    &#10004
    `
}
if(!usernameLength){
    document.querySelector('.js-username-caution').innerHTML =`<span>Username must be more than 5 characters long&#10005</span>`

}else if(matchingClient){
    document.querySelector('.js-username-caution').innerHTML =`<span>Username already exists,proceed to Log-In</span>`
}else{
    document.querySelector('.js-username-caution').innerHTML =`
    &#10004
    `

}

if(!matchPassword){
    document.querySelector('.js-confirm-password-caution').innerHTML =`<span> Passwords not matching!
    </span>`

 }else if(matchPassword && passwordLength < 6 ||passwordLength > 10){

        document.querySelector('.js-confirm-password-caution').innerHTML =`<span>Password is too short!</span>`
 }else if(matchPassword && passwordLength >= 6 && passwordLength <= 10 ){
    document.querySelector('.js-confirm-password-caution').innerHTML =` 
    &#10004
    `
   
}

if(!isChecked){
     document.querySelector('.js-terms-caution').innerHTML =`
     <span>You must first agree to the terms and conditions!</span>`
}else{
    document.querySelector('.js-terms-caution').innerHTML =``
}

 }
