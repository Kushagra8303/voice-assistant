let btn = document.querySelector("#btn");

let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "hi-GB";
    window.speechSynthesis.speak(text_speak);
}
function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    console.log(hours);
    if (hours >= 0 && hours < 12) {
        speak("Good morning Master");
    } else if (hours >= 12 && hours < 16) {
        speak("Good afternoon Master");
    } else {
        speak("Good evening Master");
    }
}

window.addEventListener('load', () => {
    let bt1 = document.querySelector("#bt1");
    if (bt1) {
        bt1.addEventListener('click', () => {
            wishMe();
            bt1.style.display = "none";
        });
    } else {
        console.error("Element #bt1 not found in the DOM");
    }
});




let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
    recognition.start();
    btn.style.display = "none";
    voice.style.display = "block";
});


//here voice chat code
function takeCommand(message) {
    btn.style.display = "flex";
    voice.style.display = "none";
    if (message.includes("hello")) {
        speak("Hello sir, what can I help you with related to this question?");
    } else if (message.includes("who are you")) {
        speak("I am Shifra, created by Nisha ji");
    } else if (message.includes("open youtube")) {
        speak("Opening YouTube");
        window.open("https://www.youtube.com");
    } else if (message.includes("open instagram")) {
        speak("Opening Instagram");
        window.open("https://www.instagram.com");
    } else if (message.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric", second: "numeric" });
        speak(time);
    } else if (message.includes("date")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" });
        speak(date);
    } else if (message.includes("open facebook")) {
        speak("Opening Facebook");
        window.open("https://www.facebook.com/", "_blank");
    } else if (message.includes("open google")) {
        speak("Opening Google");
        window.open("https://www.google.com");
    } else if (message.includes("open whatsapp")) {
        speak("Opening WhatsApp");
        window.open("whatsapp://");
    } else if (message.includes("open calculator")) {
        speak("Opening Calculator");
        window.open("calculator://");
    } else if (message.includes("i am kush")) {
        speak("Hello master, how are you?");
    } else if (message.includes("shifra")) {
    } else if (message.includes("i am nisha")) {
        speak("hello nisha u are also my creater");
    }
    
    else if (message.includes("How are you?")) {
        speak("i am fine how about you");
    }
    
    else if (message.includes("shifra")) {
        let finalText = "This is what I found on the internet regarding " + message.replace("shifra", "");
        speak(finalText);
        window.open(`https://www.google.com/search?q=${message.replace("shifra", "")}`);
    } else if (message.includes("Good morning")) {
        let finalText = "This is what I found on the internet regarding " + message.replace("Good morning", "");
        speak(finalText);
        window.open(`https://www.google.com/search?q=${message.replace("Good morning", "")}`);
    } else if (message.includes("good afternoon")) {
        let finalText = "This is what I found on the internet regarding " + message.replace("good afternoon", "");
        speak(finalText);
        window.open(`https://www.google.com/search?q=${message.replace("good afternoon", "")}`);
    } else if (message.includes("Good evening")) {
        let finalText = "This is what I found on the internet regarding " + message.replace("Good evening", "");
        speak(finalText);
        window.open(`https://www.google.com/search?q=${message.replace("Good evening", "")}`);
    } else {
        let finalText = "This is what I found on the internet regarding " + message.replace("search", "");
        speak(finalText);
        window.open(`https://www.google.com/search?q=${message.replace("search", "")}`);
    }
}