const inputField = document.querySelector("input");
let msgId = 3;

//Fetch Chuck Random Joke
function chuckleDaNor(){
    fetch('https://api.icndb.com/jokes/random')
    .then(response => response.json())
    .then( data => {
        generateChatItem("Fact", data.value.joke)
    })
}

//Function to populate Chat Items
function generateChatItem(person, messageBody){
            let msgIdString = `message-${msgId}`
            msgId = msgId + 1;    

            //Set Timestamp
            let time = new Date();
            let currentT = time.toLocaleTimeString('en-US')
            let tiempo = document.createElement('span')
            tiempo.innerText = currentT
    
            //Sets From
            let iD = document.createElement('span')
            iD.classList.add("sender")
            iD.innerText = person + ": ";

            //Set Message Body
            let body = document.createElement('span')
            body.innerText = messageBody;

            //Set Red X
            let img = document.createElement("span")
            img.innerText = "❌";
            img.setAttribute("onclick", `deleteMsg("${msgIdString}")`);
            img.classList.add("delete")
            img.id = "redX";

            //Add to child-div container
            let child = document.createElement("div")
            child.appendChild(tiempo).appendChild(iD)
            child.appendChild(iD)
            child.appendChild(body)
            child.appendChild(img)
            child.classList.add("message")
            child.id = msgIdString

            let parent = document.getElementById("chatbox")
            parent.appendChild(child)
}
//Delete a message
function deleteMsg(identifier){ 
    document.getElementById(identifier).remove()
}

//User Enter Event Listener
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    //Sets message 'From' 
    if(inputField.value){
        let from = ['Me', "Myself", "I"]
        const fromDefiner = () => {
            return(from[Math.floor(Math.random()*3)]) 
        }
        generateChatItem(fromDefiner(), inputField.value)
        inputField.value = null
    } 
})

//Button Event Listener 
document.querySelector('button').addEventListener('click', (event) => {
    event.preventDefault();
    chuckleDaNor();
})
