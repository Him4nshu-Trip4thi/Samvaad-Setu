import React, { use, useState } from 'react'

const server_url="http://localhost:8000";

var connections={};

const peerConfigConnections = {
    "iceServers": [
        {"url": "stun:stun.l.google.com:19302"}
    ]
}

export default function VideoMeetComponent() {

    var socketRef = useRef();
    let socketIdRef = useRef();

    let localVideoRef = useRef(); 

    let [videoAvailable, setVideoAvailable] = useState(true);
    let [audioAvailable, setaudioAvailable] = useState(true);

    let [video, setVideo] = useState();
    let [audio, setAudio] = useState();
    let [screen, setScreen] = useState();
    let [showModal, setModal] = useState();
    let [screenAvailable, setScreenAvailable] = useState();
    let [messages, setMessages] = useState([]);
    let [message, setMessage] = useState("");
    let [newMessages, setNewMessages] = useState(0);
    let [askForUsername, setAskForUsername] = useState(true);
    let [username, setUsername] = useState("");
    let [videos, setvideos] = useState([]);

    const videoRef = useRef([])

    //TODO
    // if(isChrome() === false){

    // }






  return (
    <div>VideoMeetComponent  {window.location.href}</div>
  )
}
