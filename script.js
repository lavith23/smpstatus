const ip = "output-pdt.gl.at.ply.gg";
const port = "7855";

let startTime = Date.now();
let wasOnline = false;

const ctx = document.getElementById('pingChart').getContext('2d');

let pingData = [];
let labels = [];

const pingChart = new Chart(ctx, {
type: 'line',
data: {
labels: labels,
datasets: [{
label: 'Ping',
data: pingData,
borderColor: '#00ffcc',
backgroundColor: 'rgba(0,255,200,0.2)',
tension: 0.4,
fill: true
}]
},
options: {
responsive: true,
plugins: { legend: { display: false } },
scales: {
x: { display: false },
y: {
beginAtZero: true,
ticks: { color: 'white' }
}
}
}
});

async function fetchStatus(){
try{
let res = await fetch(`https://api.mcsrvstat.us/bedrock/2/${ip}:${port}`);
let data = await res.json();

if(data.online){

document.getElementById("status").innerHTML="🟢 Server Online";
document.getElementById("status").className="status online";
document.getElementById("players").innerText=data.players.online+" / "+data.players.max;

let ping=data.debug.ping || 0;
document.getElementById("ping").innerText=ping;

let percent=Math.min(ping,200)/2;
document.getElementById("gaugeFill").style.width=percent+"%";

addPingData(ping);

if(!wasOnline){
document.getElementById("onlineSound").play();
}
wasOnline=true;

}else{
document.getElementById("status").innerHTML="🔴 Server Offline";
document.getElementById("status").className="status offline";
wasOnline=false;
}

}catch{
document.getElementById("status").innerHTML="Error Fetching";
}
}

function addPingData(ping){
let time = new Date().toLocaleTimeString();

if(pingData.length > 10){
pingData.shift();
labels.shift();
}

pingData.push(ping);
labels.push(time);
pingChart.update();
}

function joinServer(){
window.location.href=`minecraft://?addExternalServer=LavithSMP|${ip}:${port}`;
}

function copyIP(){
navigator.clipboard.writeText(ip);
alert("IP Copied!");
}

function copyPort(){
navigator.clipboard.writeText(port);
alert("Port Copied!");
}

function updateUptime(){
let seconds=Math.floor((Date.now()-startTime)/1000);
document.getElementById("uptime").innerText=seconds+"s";
}

setInterval(fetchStatus,5000);
setInterval(updateUptime,1000);
fetchStatus();
