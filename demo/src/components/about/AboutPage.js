import React from 'react';

class AboutPage extends React.Component {
  render() {
    return (
      <div id = "messageBODY">
      <div id="companyheader"><h1><b>NZ Connections</b></h1></div>
      <script src="defaultScript.js"></script>
      {/* <div className="topnav">
          <a href="default.html">Home</a>
          <a href="#about">About</a>
          <a className ="active" href="messenger.html">Message Us</a>
          {/* <div className="search-container">
              <form action="default.html">
                  <input type="text" id="searchInput" onKeyUp={filter()} placeholder="Search..." name="search"/>
              </form>
          </div> 
      </div> */}
      <div id="chat-container">
          <div className="container">
              <img src={require('./avatarstock.png')} alt="Avatar"/>
              <p>Hello! If you have any questions, free to ask our customer service chat.</p>
              <span className="time-right">2/16/2018 11:00</span>
          </div>
  
          <div className="container darker">
              <img src={require('./avatarstock.png')} alt="Avatar" className="right"/>
              <p>Hello, I do have some questions!</p>
              <span className="time-left">2/16/2018 11:01</span>
          </div>
  
          <div className="chatbox">
              <form action="javascript:;" onSubmit="sendMessage()" autoComplete="off">
                  <input type="text" id="chat-input" placeholder="Your message here..." name="message"/>
              </form>
          </div>
      </div>
  </div>
    );
  }
}

function filter() {
    let input, filter, table, tr, td, i;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

    //clear value from search input
    input.value = "";
}


// JavaScript source code
/*Format Date into MM/DD/YY HH:MM*/
function formatDate(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
}

/*Called when user inputs chat message*/
function sendMessage() {
    //create div bubble with current user's input
    let chatcontainer = document.getElementById("chat-container");
    let chatbox = document.getElementsByClassName("chatbox");
    let chatinput = document.getElementById("chat-input");
    let chatbubble = document.createElement("div");

    //Create chatbubble div that will house the user's input
    chatbubble.className = "container darker";
    let image = document.createElement("img");
    image.src = "avatarstock.png";
    image.alt = "Avatar";
    image.className = "right";

    let text = document.createElement("p");
    let textnode = document.createTextNode(chatinput.value);
    text.appendChild(textnode);

    let time = document.createElement("span");
    time.className = "time-left";
    let d = new Date();
    let e = formatDate(d);
    let timenode = document.createTextNode(e);
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

export default AboutPage;
