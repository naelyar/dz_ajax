const urlTwo= 'https://jsonplaceholder.typicode.com/users'

const formId = document.getElementById('form')
const submitBtnId = document.getElementById('submit')

let user = {
    name: 'Naelya',
    lastName: 'Bektursunova'

}

fetch ( urlTwo , {
    method:'POST',
    body: JSON.stringify(user)
})
.then(response => console.log(response))

