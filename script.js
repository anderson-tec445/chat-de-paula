document.getElementById("send-btn").addEventListener("click", function() {
    let userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
        addMessage(userInput, "user");
        generateBotResponse(userInput);
        document.getElementById("user-input").value = "";
    }
});

function addMessage(message, sender) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.className = `chat-message ${sender}`;
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function generateBotResponse(userMessage) {
    let botResponse = "Desculpe, não entendi sua pergunta.";
    if (userMessage.toLowerCase().includes("oi") || userMessage.toLowerCase().includes("olá")) {
        botResponse = "Oi! Como posso ajudar?";
    } else if (userMessage.toLowerCase().includes("ajuda")) {
        botResponse = "Estou aqui para te ajudar com qualquer dúvida básica!";
    } else if (userMessage.toLowerCase().includes("adeus")) {
        botResponse = "Adeus! Até logo!";
    }
    setTimeout(function() {
        addMessage(botResponse, "bot");
    }, 500); // Resposta com leve atraso para parecer mais natural
}
