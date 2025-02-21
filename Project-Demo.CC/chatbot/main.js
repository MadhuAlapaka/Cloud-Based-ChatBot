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
let hobbies = ["i love to talk with humans", "i like to make friends like you" ];
let informatory = ["Hospital, Fuel Station ,Rest Area ,Tourist Information, Hotel or Accommodation, Public Telephone,Parking Area,Food and Refreshments,Bus Stop,Railway Station"];
let thank = ["Most welcome","Not an issue","Its my pleasure","Mention not"];
let closing = ['Ok bye-bye','As you wish, bye take-care','Bye-bye, see you soon..'];
let instruct =["i like instruct about traffic rules and regulations"];
let stop=["Drivers should immediately stop after seeing this"];
let color =["A white background indicates a regulatory sign; yellow conveys a general warning message; green shows permitted traffic movements or directional guidance; fluorescent yellow/green indicates pedestrian crossings and school zones; orange is used for warning and guidance in roadway work zones; coral is used for incident management"];
let rules=["Traffic Signs or Road Signs are signs erected at the side of roads to provide information to road users."];
let meaning=["Indicates the traffic to give way to the fellow traffic on the right."];
let signs=["Traffic signs can be broadly categorised into three types, mandatory, cautionary and informatory."];
let no=["Indicates restricted area"];
let Document=["Driving License,Vehicle Registration Certificate (RC),Insurance Certificate,Pollution Under Control (PUC) Certificate,Permit and Fitness Certificate (for commercial vehicles),ID Proof,Tax Token,Emission Certificate,Road Tax Receipt,Vehicle User Manual,Emergency Contact List,First Aid Kit"];
let prohibited=["Indicates the place is restricted for walking"];
let cautionary=["Narrow Road Ahead,School Zone,Pedestrian Crossing,Animal Crossing,Falling Rocks,Slippery Road,Railway Crossing,Cattle Crossing,Two-Way Traffic,Uneven Road"];
let mandatory=[" The mandatory traffic signs in India are as follows:No Entry,Pedestrian Prohibited	,Horn Prohibited,No Parking,No Stopping or Standing,Speed Limited,Right Hand Curve	,Left Hand Curve,Narrow Road Ahead,Narrow Bridge,Dangerous Dip	Cautions,Hump or Rough	Cautions,Barrier Ahead "];

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
    speech.text = "Sorry, I don't have information about this topic";

    if(message.includes('What are the 7 main types of traffic signs and their colors'||'what colors represent what meaning in traffic signs'))
	{
        let finalresult = color[Math.floor(Math.random() * color.length)];
        speech.text = finalresult;
    }
	if(message.includes('who are you'))
	{
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
	if(message.includes('what are types of traffic signs in India'||' how many types in traffic signs'))
	{
        let finalresult = signs[Math.floor(Math.random() * signs.length)];
        speech.text = finalresult;
    }
    if(message.includes('fine'))
	{
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
    }
    if(message.includes('what is traffic' || 'what is traffic jam'))
	{
        let finalresult = traffic[Math.floor(Math.random() * traffic.length)];
        speech.text = finalresult;
    }
    if(message.includes('What is the main function of traffic' || 'What is the main role of traffic'))
	{
		let finalresult = functions[Math.floor(Math.random() * functions.length)];
		speech.text = finalresult;
    }
    if(message.includes('What is the rule for use of mobile phone' || 'rule for use of mobile phone'))
	{
        let finalresult = uses[Math.floor(Math.random() * uses.length)];
        speech.text = finalresult;
    }
    if(message.includes('Which are traffic signals' || 'about traffic signals'))
	{
        let finalresult = signal[Math.floor(Math.random() * signal.length)];
        speech.text = finalresult;
	}
    if(message.includes('how are you' || 'how are you doing today'))
	{
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
    }
	if(message.includes('what are informatory traffic signs' || 'types of informatory traffic signs'))
	{
        let finalresult = informartory[Math.floor(Math.random() * informatory.length)];
        speech.text = finalresult;
    }
	
	if(message.includes('What do you mean traffic rules'|| 'Traffic rules meaning '))
	{
        let finalresult = instruct[Math.floor(Math.random() * instruct.length)];
        speech.text = finalresult;
    }
	
    if(message.includes('tell me something about you' || 'tell me something about your hobbies'))
	{
        let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
        speech.text = finalresult;
    }
    if(message.includes('why to following traffic rules'||'use of following traffic rules'))
	{
        let finalresult = rules[Math.floor(Math.random() * rules.length)];
        speech.text = finalresult;
    }
    if(message.includes('thank you' || 'thank you so much'))
	{
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
    }
    if(message.includes('talk to you' || 'talk'))
	{
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
    }
	if(message.includes('stop sign meaning' || 'meaning of stop sign'))
	{
        let finalresult = stop[Math.floor(Math.random() * stop.length)];
        speech.text = finalresult;
    }
	if(message.includes('Give way sign meaning' || 'meaning of give way sign'))
	{
        let finalresult = meaning[Math.floor(Math.random() * meaning.length)];
        speech.text = finalresult;
    }
	if(message.includes('meaning of no entry sign' || 'no entry sign meaning'))
	{
        let finalresult = no[Math.floor(Math.random() * no.length)];
        speech.text = finalresult;
    }
	if(message.includes('pedestrian prohibited sign meaning' || 'meaning of prohibited sign'))
	{
        let finalresult = prohibited[Math.floor(Math.random() * prohibited.length)];
        speech.text = finalresult;
    }
	if(message.includes('types of mandatory signs' || 'what are mandatory signs'))
	{
        let finalresult = mandatory[Math.floor(Math.random() * mandatory.length)];
        speech.text = finalresult;
    }
	if(message.includes('whay are cautionary sign' || 'types of cautionary sign'))
	{
        let finalresult = cautionary[Math.floor(Math.random() * cautionary.length)];
        speech.text = finalresult;
    }
	if(message.includes('what Documents to carry while travelling by vehicle' || 'Things to carry when travelling by our own vehicle'))
	{
        let finalresult = Document[Math.floor(Math.random() * Document.length)];
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
