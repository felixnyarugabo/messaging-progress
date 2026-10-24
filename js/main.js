let input=document.getElementById("messageInput")
let send=document.getElementById("sendButton")
let display=document.getElementById("display")

let datas=JSON.parse(localStorage.getItem('users')) || []

function showMessage(){
display.textContent=""
    datas.forEach(function(data){
        let p=document.createElement('p')
        p.textContent=data
        display.appendChild(p)
         

    })
}
showMessage()

send.addEventListener('click',function message(){
let data=input.value.trim()

if(data===""){
    console.log("data box is empty")
    return
}
datas.push(data)
localStorage.setItem('users',JSON.stringify(datas))
showMessage()
console.log(datas)
input.value=""
})

