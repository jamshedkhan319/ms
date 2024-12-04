// সঠিক কোড
const secretCode = "001122"; // আপনার পছন্দমতো কোড ব্যবহার করুন

// লগইন ফাংশন
function login() {
    const loginCode = document.getElementById("loginCode").value.trim();
    const successMessage = document.getElementById("successMessage");

    if (loginCode === secretCode) {
        successMessage.style.display = "block"; // সাকসেস বার্তা দেখানো
        setTimeout(() => {
            document.getElementById("loginContainer").style.display = "none";
            document.getElementById("chatContainer").style.display = "flex";
        }, 1500); // ১.৫ সেকেন্ড পর চ্যাট পেজ দেখানো
    } else {
        alert("Incorrect Password!");
    }
}

// সিস্টেমের মেসেজের জন্য প্রি-ডিফাইন্ড উত্তর
const botResponses = {
    "hi": "Hello JK সার্ভার কোড কি জানা হইছে",
    "আউটবন সার্ভার 00web": "এ তো রাইট কোড",
    "bye": "Goodbye! JK",
    "what is your name": "I am a friendly bot created to chat with you.",
    "default": "কাজ কমপ্লিট করে রিপ্লাই দিচ্ছি।",
};

function sendMessage() {
    const chatBox = document.getElementById("chatBox");
    const messageInput = document.getElementById("messageInput");

    const userMessage = messageInput.value.trim();
    if (!userMessage) return; // ফাঁকা মেসেজ না পাঠানোর জন্য

    // ব্যবহারকারীর মেসেজ দেখানো
    const userMessageDiv = document.createElement("div");
    userMessageDiv.textContent = userMessage;
    userMessageDiv.className = "message user";
    chatBox.appendChild(userMessageDiv);

    // ইনপুট ফিল্ড ক্লিয়ার করা
    messageInput.value = "";

    // বটের টাইপিং এফেক্ট এবং রেসপন্স তৈরি করা
    const botMessageDiv = document.createElement("div");
    botMessageDiv.className = "message bot";
    botMessageDiv.textContent = "...";
    chatBox.appendChild(botMessageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;

    // টাইম ডিলে দিয়ে সঠিক রেসপন্স দেখানো
    setTimeout(() => {
        const botResponse = botResponses[userMessage.toLowerCase()] || botResponses["default"];
        botMessageDiv.textContent = botResponse;
        chatBox.scrollTop = chatBox.scrollHeight; // চ্যাট বক্স স্ক্রল ঠিক করা
    }, 1000); // ১ সেকেন্ড দেরি করে বটের মেসেজ দেখানো
}
