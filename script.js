function startSimulation(){

let packet = document.getElementById("packet");
let status = document.getElementById("status");

// Reset position
packet.style.left = "calc(50% - 260px)";

status.innerText = "Client sending packet...";

// Step 1: Client → Router
setTimeout(()=>{
packet.style.left = "calc(50% - 60px)";
status.innerText = "Packet reached Router";
},1000);

// Step 2: Router → Server
setTimeout(()=>{
packet.style.left = "calc(50% + 140px)";
status.innerText = "Packet delivered to Server";
},2000);

// Step 3: Response back (Server → Router)
setTimeout(()=>{
packet.style.background = "lime";
packet.style.left = "calc(50% - 60px)";
status.innerText = "Server responding...";
},3000);

// Step 4: Router → Client
setTimeout(()=>{
packet.style.left = "calc(50% - 260px)";
status.innerText = "Response received at Client ✅";
},4000);

}