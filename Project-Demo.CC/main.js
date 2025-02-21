let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');
let intro = ["Hello, I am Bob", "Hi, I am a Bob", "Hello, My name is Bob"];
let help = ["How may i assist you?","How can i help you?","What i can do for you?"];
let traffic= ["a situation in which a long line of vehicles on a road have stopped moving or are moving very slowly"];
let functions= ["traffic control, supervision of the movement of people, goods, or vehicles to ensure efficiency and safety"];
let uses= ["As per section 250 (A) MMVR, r/w 177 M.V.Act, no driver while driving or riding a motor vehicle (including two wheelers) can use a mobile phone."];
let signal= ["traffic control signal The traffic signal works on light signals, which include three colours: red, yellow and green. As mentioned earlier, red indicates the vehicles to stop, yellow indicates the vehicles to slow down and get ready to stop, and the green light indicates the vehicles to go ahead."];
let greetings = ["i am good you little piece of love", "i am fine, what about you", "don't want to talk", "i am good"];
let hobbies = ["i love to talk with humans", "i like to make friends like you", "i like cooking"];
let pizzas = ["which type of pizza do you like?", "i can make a pizza for you", "i would love to make a pizza for you", "would you like cheese pizza?"];
let thank = ["Most welcome","Not an issue","Its my pleasure","Mention not"];
let closing = ['Ok bye-bye','As you wish, bye take-care','Bye-bye, see you soon..']

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function showusermsg(usermsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg){
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "This is test message";
}
    if(message.includes('who are you')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if(message.includes('fine')){
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
    }
    if(message.includes('what is traffic' || 'what is traffic jam')){
        let finalresult = traffic[Math.floor(Math.random() * traffic.length)];
        speech.text = finalresult;
    }

    if(message.includes('What is the main function of traffic' || 'What is the main role of traffic')){
    let finalresult = functions[Math.floor(Math.random() * functions.length)];
    speech.text = finalresult;
    }
    if(message.includes('What is the rule for use of mobile phone' || 'rule for use of mobile phone')){
        let finalresult = uses[Math.floor(Math.random() * uses.length)];
        speech.text = finalresult;
    }
    if(message.includes('Which are traffic signals' || 'about traffic signals')){
        let finalresult = signal[Math.floor(Math.random() * signal.length)];
        speech.text = finalresult;

    if(message.includes('how are you' || 'how are you doing today')){
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
    }
    if(message.includes('tell me something about you' || 'tell me something about your hobbies')){
        let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
        speech.text = finalresult;
    }
    if(message.includes('pizza')){
        let finalresult = pizzas[Math.floor(Math.random() * pizzas.length)];
        speech.text = finalresult;
    }
    if(message.includes('thank you' || 'thank you so much')){
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
    }
    if(message.includes('talk to you' || 'talk')){
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
    }
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
}

recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
}
recognition.onend=function(){
    mic.style.background="#ff3b3b";
}
mic.addEventListener("click", function(){
    mic.style.background='#39c81f';
    recognition.start();
    console.log("Activated");
})
