export function loadFromStorage(){

    return JSON.parse(localStorage.getItem('clientInfo'))
}

 export let clientInfo = loadFromStorage()

if(!clientInfo){

    clientInfo = [
        { firstName:'Mark',
            surName  :'Mudyiwa',
            dateOfBirth:'2024/04/24',
            gender:'male',
            userName:'markmudyiwah0@gmail.com',
            password:'mark2004',
            
          },
          
          {
              firstName:'Leon',
              surName  :'Nemauyu',
              dateOfBirth:'2000/09/17',
              gender:'male',
              userName:'leonnemauyu0@gmail.com',
              password:'leon2000yew',
              
          }
          
          ]
        }


    export function saveToStorage(){
        localStorage.setItem('clientInfo',JSON.stringify(clientInfo))
    }
    
    
       