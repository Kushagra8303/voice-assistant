function sendMessage() {
    let userInput = document.getElementById("userInput").value;
    let chatbox = document.getElementById("chatbox");

    let userMessage = document.createElement("p");
    userMessage.classList.add("user");
    userMessage.textContent = userInput;
    chatbox.appendChild(userMessage);

    // Simple AI reply example
    let botMessage = document.createElement("p");
    botMessage.classList.add("bot");
    if (userInput.toLowerCase().includes("html")) {
        botMessage.textContent = "You might be interested in our HTML basics course!";
    } 
    else if (userInput.toLowerCase().includes("python")) {
        botMessage.textContent = "Check out our Advanced Python Programming course.";
    } 
    else if (userInput.toLowerCase().includes("java")) {
        botMessage.textContent = "java is a plateform independent programming languages";
    } 
    else if (userInput.toLowerCase().includes("kotlin")) {
        botMessage.textContent = "kotin is andriod app development programming languages which are based on java.";
    } 
     else if (userInput.toLowerCase().includes("html")) {
        botMessage.textContent = "HTML IS a hyper text markup languages .";
    }
     else {
        botMessage.textContent = "I'm here to help you find the best course!";
    }
    chatbox.appendChild(botMessage);

    document.getElementById("userInput").value = "";
    chatbox.scrollTop = chatbox.scrollHeight;
}
// 