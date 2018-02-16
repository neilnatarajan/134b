// JavaScript source code
/*Format Date into MM/DD/YY HH:MM*/
function formatDate(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
}

/*Called when user inputs chat message*/
function sendMessage() {
    //create div bubble with current user's input
    var chatcontainer = document.getElementById("chat-container");
    var chatbox = document.getElementsByClassName("chatbox");
    var chatinput = document.getElementById("chat-input");
    var chatbubble = document.createElement("div");

    //Create chatbubble div that will house the user's input
    chatbubble.className = "container darker";
    var image = document.createElement("img");
    image.src = "avatarstock.png";
    image.alt = "Avatar";
    image.className = "right";

    var text = document.createElement("p");
    var textnode = document.createTextNode(chatinput.value);
    text.appendChild(textnode);

    var time = document.createElement("span");
    time.className = "time-left";
    var d = new Date();
    var e = formatDate(d);
    var timenode = document.createTextNode(e);
    time.appendChild(timenode);

    //put components of chat bubble together
    chatbubble.appendChild(image);
    chatbubble.appendChild(text);
    chatbubble.appendChild(time);

    //Insert message into stream
    chatcontainer.insertBefore(chatbubble, chatbox[0]);

    //Clear message from chatbox on submit
    document.getElementById("chat-input").value = "";
}