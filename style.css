body{
margin:0;
font-family:'Orbitron',sans-serif;
height:100vh;
overflow:hidden;
color:white;
display:flex;
justify-content:center;
align-items:center;
background:black;
}

.background{
position:fixed;
width:100%;
height:100%;
background: radial-gradient(circle at top, #1a1a40, #000);
overflow:hidden;
z-index:-1;
}

.background::after{
content:"";
position:absolute;
width:200%;
height:200%;
background: repeating-radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 2px);
animation: stars 60s linear infinite;
}

@keyframes stars{
from{transform:translateY(0);}
to{transform:translateY(-1000px);}
}

.card{
background:rgba(255,255,255,0.05);
backdrop-filter:blur(15px);
padding:30px;
border-radius:25px;
width:400px;
text-align:center;
box-shadow:0 0 30px #00f0ff;
animation: rgbGlow 5s infinite alternate;
}

@keyframes rgbGlow{
0%{box-shadow:0 0 20px #00f0ff;}
50%{box-shadow:0 0 40px #ff00ff;}
100%{box-shadow:0 0 20px #00ff88;}
}

.status{
font-size:20px;
margin:10px 0;
}

.online{color:#00ff88;}
.offline{color:#ff4444;}

.stats{
margin:15px 0;
}

.gauge{
height:12px;
background:#222;
border-radius:20px;
overflow:hidden;
margin:10px 0;
}

.gauge-fill{
height:100%;
width:0%;
background:linear-gradient(90deg, green, yellow, red);
transition:0.5s;
}

canvas{
margin-top:15px;
background:rgba(0,0,0,0.3);
border-radius:15px;
padding:10px;
}

.buttons button{
margin:8px;
padding:10px 15px;
border:none;
border-radius:10px;
cursor:pointer;
font-weight:bold;
transition:0.3s;
}

.join{
background:linear-gradient(45deg,#00ff88,#00ccff);
color:black;
}

button:hover{
transform:scale(1.1);
}

@media(max-width:450px){
.card{
width:90%;
}
  }
