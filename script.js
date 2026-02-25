const ip = "output-pdt.gl.at.ply.gg";
const port = "7855";

async function fetchStatus(){
try{
const res = await fetch(`https://api.mcsrvstat.us/bedrock/2/${ip}:${port}`);
const data = await res.json();

const statusBox = document.getElementById("statusBox");
const statusText = document.getElementById("statusText");

if(data.online){

statusBox.className="status-box online";
statusText.innerText="🟢 Server Online";

document.getElementById("players").innerText=
data.players.online+" / "+data.players.max;

let ping=data.debug?.ping || 0;
let pingText=document.getElementById("ping");
pingText.innerText=ping+" ms";

if(ping<80) pingText.style.color="#00ff88";
else if(ping<150) pingText.style.color="yellow";
else pingText.style.color="red";

document.getElementById("version").innerText=data.version || "-";
document.getElementById("motd").innerText=data.motd?.clean?.join(" ") || "-";

const list=document.getElementById("playerNames");
list.innerHTML="";

if(data.players.list && data.players.list.length>0){
data.players.list.forEach(name=>{
let li=document.createElement("li");
li.innerText=name;
list.appendChild(li);
});
}else{
list.innerHTML="<li>No players online</li>";
}

}else{

statusBox.className="status-box offline";
statusText.innerText="🔴 Server Offline";

}

}catch(e){
document.getElementById("statusText").innerText="Error loading data";
}
}

fetchStatus();
setInterval(fetchStatus,5000);
