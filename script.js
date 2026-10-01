/* ============================================================
   LILAC XATSPACE — CONFIGURACIÓN FÁCIL DE EDITAR
   Cambia aquí textos, respuestas y cantidad de efectos.
   ============================================================ */

const CONFIG = {
  chat: {
    opening: [
      ["Kissie", "hii ♡ welcome to my little space!"],
      ["Me", "Hello, Kissie <3 your xatspace looks so cute!"],
      ["Kissie", "thank youu ✿"],
      ["Kissie", "I love the lavender colors!"]
    ],
    replies: [
      "hehe ♡ I like that!",
      "aww, that's cute ✿",
      "tell me moree~",
      "I was thinking the same thing ♡",
      "hehe, welcome here!",
      "that made me smile :3",
      "wait, really? ♡",
      "so prettyyy ✧",
      "I will remember that!",
      "come back soon, okay? ♡",
      "i'm so fine, and you? ♡",
      "i like the flowers! ♡",
      "Are you okay? ♡"
    ],
    replyDelayMin: 650,
    replyDelayMax: 1450
  },

  effects: {
    bubbles: 18,
    particles: 70,
    petals: 28,
    rings: 9,
    lines: 14,
    blobs: 7,
    darkBlobs: 5
  }
};

/* ========================= FONDO DINÁMICO ========================= */
const ambientLayer = document.getElementById("ambientLayer");

function random(min,max){ return Math.random()*(max-min)+min; }

function addEffect(type, i){
  const el=document.createElement("span");
  el.className=`ambient ${type}`;
  el.style.left=`${random(-5,95)}vw`;
  el.style.top=`${random(-10,100)}vh`;
  el.style.setProperty("--dur",`${random(7,18)}s`);
  el.style.setProperty("--dx",`${random(-55,55)}px`);
  el.style.setProperty("--sway",`${random(-100,100)}px`);
  el.style.setProperty("--rot",`${random(-35,35)}deg`);

  if(type==="bubble"){
    const s=random(18,90);
    el.style.width=`${s}px`; el.style.height=`${s}px`;
  }
  if(type==="spark"){
    el.style.left=`${random(0,100)}vw`;
    el.style.top=`${random(0,100)}vh`;
    el.style.setProperty("--dur",`${random(2.5,7)}s`);
  }
  if(type==="petal"){
    el.style.left=`${random(0,100)}vw`;
    el.style.top=`${random(-25,5)}vh`;
    el.style.setProperty("--dur",`${random(10,22)}s`);
    el.style.setProperty("--sway",`${random(-150,150)}px`);
    el.style.setProperty("--rot",`${random(0,360)}deg`);
  }
  if(type==="ring"){
    const s=random(45,170);
    el.style.width=`${s}px`; el.style.height=`${s}px`;
  }
  if(type==="line"){
    el.style.width=`${random(100,300)}px`;
  }
  if(type==="blob"){
    const s=random(130,300);
    el.style.width=`${s}px`; el.style.height=`${s*.65}px`;
  }
  if(type==="darkBlob"){
    const s=random(160,360);
    el.style.width=`${s}px`; el.style.height=`${s*.7}px`;
  }

  el.dataset.index=i;
  ambientLayer.appendChild(el);
}

Object.entries(CONFIG.effects).forEach(([type,count])=>{
  const mapped=type==="particles"?"spark":type;
  for(let i=0;i<count;i++) addEffect(mapped,i);
});

/* ========================= GALERÍA ========================= */
const galleryData = {
  photos: {
    label: "Photo gallery",
    icon: "📷",
    items: [
      { file: "photo-01.png", name: "Relax 𓇢𓆸" },
      { file: "photo-02.png", name: "Journey ᯓ ✈︎" },
      { file: "photo-03.png", name: "Flowers 𑁍ࠬܓꫂ❁" },
      { file: "photo-04.png", name: "Coffe ⋆☕︎˖" },
      { file: "photo-05.png", name: "Cute Place ᥫ᭡.ִֶָ𓂃❤︎" },
      { file: "photo-06.png", name: "Dance 𓁇𓁋" }
    ]
  },

  friends: {
    label: "Friends",
    icon: "👥",
    items: [
      { file: "friend-01.png", name: "P （＾ω＾）" },
      { file: "friend-02.png", name: "Y ૮₍˶ᵔᵕᵔ˶₎ა" },
      { file: "friend-03.png", name: "A ⸜(｡˃ᵕ˂)⸝♡" },
      { file: "friend-04.png", name: "K （＾ω＾）" },
      { file: "friend-05.png", name: "N (˶ᵔᵕᵔ˶)" },
      { file: "friend-06.png", name: "D ૮꒰˶•༝•˶꒱ა ♡" }
    ]
  },

  movies: {
    label: "Movies",
    icon: "🎬",
    items: [
      { file: "movie-01.png", name: "Mulán" },
      { file: "movie-02.png", name: "Spirited Away" },
      { file: "movie-03.png", name: "Howl's Moving Castle" },
      { file: "movie-04.png", name: "Brave" },
      { file: "movie-05.png", name: "Wreck-It Ralph" },
      { file: "movie-06.png", name: "Coraline" }
    ]
  },

  series: {
    label: "Series",
    icon: "📺",
    items: [
      { file: "series-01.png", name: "Bones" },
      { file: "series-02.png", name: "Bride of the Water God" },
      { file: "series-03.png", name: "Horimiya" },
      { file: "series-04.png", name: "Naruto" },
      { file: "series-05.png", name: "Pretty Little Liars" },
      { file: "series-06.png", name: "Orphan Black" }
    ]
  }
};

/* ---------- RENDER DE LA GALERÍA ---------- */

function renderGallery(type = "photos") {

  const d = galleryData[type];

  const grid = document.getElementById("galleryGrid");
  const galleryLabel = document.getElementById("galleryLabel");
  const galleryIcon = document.getElementById("galleryIcon");

  if (!d || !grid) return;

  /* Cambiar nombre */
  if (galleryLabel) {
    galleryLabel.textContent = d.label;
  }

  /* Cambiar icono */
  if (galleryIcon) {
    galleryIcon.textContent = d.icon;
  }

  /* Crear las tarjetas */
  grid.innerHTML = d.items.map((item, i) => `
    <div
      class="gallery-card"
      data-image="assets/img/${item.file}"
      data-caption="${item.name}"
    >
      <img
        src="assets/img/${item.file}"
        alt="${item.name}"
      >

      <span>${item.name}</span>
    </div>
  `).join("");

  /* Abrir imagen */
  grid.querySelectorAll(".gallery-card").forEach(card => {

    card.addEventListener("click", () => {

      openImageModal(
        card.dataset.image,
        card.dataset.caption
      );

    });

  });
}


/* ---------- INICIALIZAR ---------- */

renderGallery("photos");


/* ---------- BOTÓN DEL MENÚ ---------- */

const galleryToggle = document.getElementById("galleryToggle");
const galleryMenu = document.getElementById("galleryMenu");


if (galleryToggle && galleryMenu) {

  galleryToggle.addEventListener("click", (event) => {

    event.stopPropagation();

    const isOpen = galleryMenu.classList.toggle("open");

    galleryToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  });

}


/* ---------- OPCIONES DEL MENÚ ---------- */

document.querySelectorAll("[data-gallery]").forEach(button => {

  button.addEventListener("click", (event) => {

    event.stopPropagation();

    const type = button.dataset.gallery;

    /* Cambiar contenido */
    renderGallery(type);

    /* Cerrar menú */
    if (galleryMenu) {
      galleryMenu.classList.remove("open");
    }

    if (galleryToggle) {
      galleryToggle.setAttribute(
        "aria-expanded",
        "false"
      );
    }

  });

});


/* ---------- CERRAR AL HACER CLICK AFUERA ---------- */

document.addEventListener("click", (event) => {

  const galleryWrap = event.target.closest(".gallery-wrap");

  if (!galleryWrap) {

    if (galleryMenu) {
      galleryMenu.classList.remove("open");
    }

    if (galleryToggle) {
      galleryToggle.setAttribute(
        "aria-expanded",
        "false"
      );
    }

  }

});

/* ========================= NAVEGACIÓN ========================= */
function showView(v){
  document.querySelectorAll(".view").forEach(x=>x.classList.remove("active"));
  const target=document.getElementById(v==="profile"?"profileView":`${v}View`);
  if(target) target.classList.add("active");

  document.querySelectorAll(".top-tab").forEach(x=>{
    x.classList.toggle("active",x.dataset.view===v);
  });

  if(v==="chat") startChat();
}
document.querySelectorAll("[data-view]").forEach(b=>b.onclick=()=>showView(b.dataset.view));

/* ========================= MESSAGE ========================= */
let chatStarted=false;

function esc(s){
  return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
}
function addMessage(n,t,me=false){
  const row=document.createElement("div");
  row.className="chat-message"+(me?" me":"");
  row.innerHTML=`<div class="bubble"><b>${esc(n)}:</b> ${esc(t)}</div>`;
  const box=document.getElementById("chatMessages");
  box.appendChild(row);
  box.scrollTop=box.scrollHeight;
}
function startChat(){
  if(chatStarted)return;
  chatStarted=true;
  CONFIG.chat.opening.forEach((m,i)=>{
    setTimeout(()=>addMessage(m[0], m[1], m[0] === "Me"), i*750);
  });
}
function randomReply(){
  const list=CONFIG.chat.replies;
  return list[Math.floor(Math.random()*list.length)];
}
document.getElementById("chatForm").onsubmit=e=>{
  e.preventDefault();
  const input=document.getElementById("chatInput");
  const value=input.value.trim();
  if(!value)return;
  addMessage("Me",value,true);
  input.value="";
  input.focus();

  const delay=random(CONFIG.chat.replyDelayMin,CONFIG.chat.replyDelayMax);
  setTimeout(()=>addMessage("Kissie",randomReply(),false),delay);
};

/* ========================= MUSIC ========================= */
const songs=[
  ["HoneyBee","Olivia Rodrigo","song-01.mp3","cover-01.png"],
  ["Less","Olivia Rodrigo","song-02.mp3","cover-02.png"],
  ["Mystical Magic","Benson Boone","song-03.mp3","cover-03.png"],
  ["Good Luck, Babe!","Chappel Roan","song-04.mp3","cover-04.png"],
  ["We Can't Be Friends","Ariana Grande","song-05.mp3","cover-05.png"],
  ["Imagine Dragons","Bones","song-06.mp3","cover-06.png"],
  ["Teeth","5SOS","song-07.mp3","cover-07.png"]
  
];
const audio=document.getElementById("audio"),seek=document.getElementById("seekBar");
const miniSeek=document.getElementById("miniSeekBar");
let idx=0;

const miniPlay=document.getElementById("miniPlayBtn");
const miniPrev=document.getElementById("miniPrevBtn");
const miniNext=document.getElementById("miniNextBtn");

function syncMusicUI(){
  const s=songs[idx];
  document.getElementById("songTitle").textContent=s[0];
  document.getElementById("miniSongName").textContent=s[0];
  document.getElementById("songArtist").textContent=s[1];
  document.getElementById("miniSongArtist").textContent=s[1];
  document.getElementById("albumArt").src="assets/img/"+s[3];
  document.getElementById("albumArt").alt=s[0]+" cover";
  document.getElementById("albumArt").parentElement.classList.toggle("playing",!audio.paused);
  document.querySelectorAll(".playlist-row").forEach((r,i)=>r.classList.toggle("active",i===idx));
}

document.getElementById("playlist").innerHTML=songs.map((s,i)=>`
  <div class="playlist-row" data-index="${i}">
    <img class="playlist-cover" src="assets/img/${s[3]}" alt="">
    <span><b>${s[0]}</b><br><small>${s[1]}</small></span>
    <span class="track-duration">♪</span>
  </div>
`).join("");

function loadSong(n,auto=false){
  idx=(n+songs.length)%songs.length;
  const s=songs[idx];
  audio.pause();
  audio.src= "assets/music/" + songs[idx][2];
  audio.load();
  syncMusicUI();
  document.getElementById("currentTime").textContent="0:00";
  document.getElementById("duration").textContent="0:00";
  document.getElementById("miniCurrentTime").textContent="0:00";
  document.getElementById("miniDuration").textContent="0:00";
  seek.value=0; miniSeek.value=0;
  if(auto) audio.play().catch(()=>{});
}
function fmt(x){
  return Number.isFinite(x)?`${Math.floor(x/60)}:${String(Math.floor(x%60)).padStart(2,"0")}`:"0:00";
}

document.querySelectorAll(".playlist-row").forEach(r=>r.onclick=()=>loadSong(+r.dataset.index,true));
function toggleAudio(){ audio.paused ? audio.play().catch(()=>{}) : audio.pause(); }
document.getElementById("playBtn").onclick=toggleAudio;
miniPlay.onclick=toggleAudio;
document.getElementById("prevBtn").onclick=()=>loadSong(idx-1,true);
document.getElementById("nextBtn").onclick=()=>loadSong(idx+1,true);
miniPrev.onclick=()=>loadSong(idx-1,true);
miniNext.onclick=()=>loadSong(idx+1,true);
document.getElementById("muteBtn").onclick=()=>{
  audio.muted=!audio.muted;
  document.getElementById("muteBtn").innerHTML=audio.muted?"<span class=\"icon icon-volume muted\"></span>":"<span class=\"icon icon-volume\"></span>";
};
audio.onplay=()=>{
  document.getElementById("playBtn").innerHTML="<span class=\"icon icon-pause\"></span>";
  miniPlay.innerHTML="<span class=\"icon icon-pause\"></span>";
  document.getElementById("albumArt").parentElement.classList.add("playing");
  document.getElementById("musicStatus").textContent="playing ♡";
  document.getElementById("waveform")?.classList.add("playing");
};
audio.onpause=()=>{
  document.getElementById("playBtn").innerHTML="<span class=\"icon icon-play\"></span>";
  miniPlay.innerHTML="<span class=\"icon icon-play\"></span>";
  document.getElementById("albumArt").parentElement.classList.remove("playing");
  document.getElementById("musicStatus").textContent="paused";
  document.getElementById("waveform")?.classList.remove("playing");
};
audio.onloadedmetadata=()=>{
  document.getElementById("duration").textContent=fmt(audio.duration);
  document.getElementById("miniDuration").textContent=fmt(audio.duration);
};
audio.ontimeupdate=()=>{
  const pct=audio.duration?audio.currentTime/audio.duration*100:0;
  document.getElementById("currentTime").textContent=fmt(audio.currentTime);
  document.getElementById("miniCurrentTime").textContent=fmt(audio.currentTime);
  seek.value=pct; miniSeek.value=pct;
};
function seekAudio(value){if(audio.duration)audio.currentTime=value/100*audio.duration;}
seek.oninput=()=>seekAudio(seek.value);
miniSeek.oninput=()=>seekAudio(miniSeek.value);
audio.onended=()=>loadSong(idx+1,true);
loadSong(0);

/* ========================= LOGIN / ENTER ========================= */
const loginScreen=document.getElementById("loginScreen");
const loginForm=document.getElementById("loginForm");
const loginRegister=document.getElementById("loginRegister");
const loginPassword=document.getElementById("loginPassword");
const loginStatus=document.getElementById("loginStatus");
const xatWindow=document.getElementById("xatWindow");

function enterProfile(){
  if(!loginScreen || !xatWindow)return;
  loginStatus.textContent="Loading profile... ♡";
  /* La interacción del botón/formulario permite iniciar audio en navegadores con autoplay bloqueado. */
  audio.play().catch(()=>{});
  xatWindow.classList.add("main-enter");
  loginScreen.classList.add("login-leave");
  document.body.classList.remove("login-lock");
  setTimeout(()=>{
    loginScreen.style.display="none";
    loginScreen.setAttribute("aria-hidden","true");
    xatWindow.classList.remove("main-enter");
  },700);
}

// CORRECCIÓN PARA XAT: Prevenimos el submit nativo para evitar el bloqueo del sandbox del iframe
loginForm.addEventListener("submit", e => {
  e.preventDefault();
  e.stopPropagation();
  
  const register = loginRegister.value.trim();
  const password = loginPassword.value.trim();
  
  if(!register || !password){
    loginStatus.textContent = "Please enter your register and password.";
    if(!register) loginRegister.focus(); else loginPassword.focus();
    return;
  }
  
  enterProfile();
  return false;
});

/* ========================= VIDEO ========================= */
const videos=[1,2,3,4,5,6];
document.getElementById("videoGrid").innerHTML=videos.map(i=>`
  <article class="video-card" data-video="${i}" tabindex="0" role="button" aria-label="open video ${i}">
    <div class="video-thumb">
      <video
        class="video-preview"
        src="assets/video/video-${String(i).padStart(2,"0")}.mp4"
        muted
        loop
        autoplay
        playsinline
        preload="metadata"
        aria-hidden="true"></video>
      <div class="video-preview-shade"></div>
      <div class="video-play" aria-hidden="true">▶</div>
    </div>
    <div class="video-name">video ${String(i).padStart(2,"0")}</div>
  </article>
`).join("");

const videoModal=document.getElementById("videoModal"),mv=document.getElementById("modalVideo");
const videoCaption=document.getElementById("modalVideoCaption");
const videoPrev=document.getElementById("videoPrev"),videoNext=document.getElementById("videoNext");
let currentVideo=0;

function setVideoModal(n,autoplay=true){
  currentVideo=(n+videos.length)%videos.length;
  mv.pause();
  mv.src=`assets/video/video-${String(videos[currentVideo]).padStart(2,"0")}.mp4`;
  mv.loop=true;
  mv.muted=true;
  mv.setAttribute("playsinline","");
  videoCaption.textContent="";
  videoModal.classList.add("open");
  videoModal.setAttribute("aria-hidden","false");
  if(autoplay) mv.play().catch(()=>{});
}

document.querySelectorAll(".video-card").forEach(c=>{
  const open=()=>setVideoModal(videos.indexOf(+c.dataset.video));
  c.onclick=open;
  c.onkeydown=e=>{
    if(e.key==="Enter" || e.key===" "){e.preventDefault();open();}
  };
});
function closeVideoModal(){
  mv.pause();mv.removeAttribute("src");mv.load();
  videoModal.classList.remove("open");videoModal.setAttribute("aria-hidden","true");
}
document.getElementById("modalClose").onclick=closeVideoModal;
videoPrev.onclick=()=>setVideoModal(currentVideo-1);
videoNext.onclick=()=>setVideoModal(currentVideo+1);
videoModal.onclick=e=>{if(e.target===videoModal)closeVideoModal()};

/* ========================= IMAGE MODAL ========================= */
const imageModal=document.getElementById("imageModal"),modalImage=document.getElementById("modalImage"),modalImageCaption=document.getElementById("modalImageCaption");
const imagePrev=document.getElementById("imagePrev"),imageNext=document.getElementById("imageNext");
let currentImageList=[],currentImageIndex=0;
function setImageModal(n){
  if(!currentImageList.length)return;
  currentImageIndex=(n+currentImageList.length)%currentImageList.length;
  const item=currentImageList[currentImageIndex];
  modalImage.src=item.src;modalImage.alt=item.caption;modalImageCaption.textContent="";
  imageModal.classList.add("open");imageModal.setAttribute("aria-hidden","false");
}
function openImageModal(src,caption){
  const cards=[...document.querySelectorAll("#galleryGrid .gallery-card")];
  currentImageList=cards.map(card=>({src:card.dataset.image,caption:card.dataset.caption}));
  currentImageIndex=Math.max(0,currentImageList.findIndex(item=>item.src===src));
  setImageModal(currentImageIndex);
}
function closeImageModal(){
  imageModal.classList.remove("open");imageModal.setAttribute("aria-hidden","true");modalImage.removeAttribute("src");
}
document.getElementById("imageModalClose").onclick=closeImageModal;
imagePrev.onclick=()=>setImageModal(currentImageIndex-1);
imageNext.onclick=()=>setImageModal(currentImageIndex+1);
imageModal.onclick=e=>{if(e.target===imageModal)closeImageModal()};

/* ========================= CALENDARIO ========================= */
const calendarPanel=document.getElementById("calendarPanel");
const calendarGrid=document.getElementById("calendarGrid");
const calendarTitle=document.getElementById("calendarMonthTitle");
const calendarTodayLabel=document.getElementById("calendarTodayLabel");

function renderCalendar(){
  const now=new Date();
  const year=now.getFullYear();
  const month=now.getMonth();
  const today=now.getDate();

  const monthName=new Intl.DateTimeFormat("en-US",{month:"long"}).format(now);
  calendarTitle.textContent=`${monthName} ${year}`;
  calendarTodayLabel.textContent=`Today · ${monthName} ${today}, ${year}`;

  const firstDay=new Date(year,month,1).getDay();
  const daysInMonth=new Date(year,month+1,0).getDate();
  const prevDays=new Date(year,month,0).getDate();

  calendarGrid.innerHTML="";

  // Días del mes anterior para completar la primera fila.
  for(let i=firstDay-1;i>=0;i--){
    const cell=document.createElement("span");
    cell.className="calendar-day other-month";
    cell.textContent=prevDays-i;
    calendarGrid.appendChild(cell);
  }

  for(let day=1;day<=daysInMonth;day++){
    const cell=document.createElement("span");
    cell.className="calendar-day"+(day===today?" today":"");
    cell.textContent=day;
    if(day===today){
      cell.setAttribute("aria-current","date");
      cell.title="Today";
    }
    calendarGrid.appendChild(cell);
  }

  // Completa la última fila para conservar una cuadrícula limpia.
  const remainder=calendarGrid.children.length%7;
  if(remainder){
    for(let day=1;day<=7-remainder;day++){
      const cell=document.createElement("span");
      cell.className="calendar-day other-month";
      cell.textContent=day;
      calendarGrid.appendChild(cell);
    }
  }
}

function openCalendar(){
  renderCalendar();
  calendarPanel.classList.add("open");
  calendarPanel.setAttribute("aria-hidden","false");
}

function closeCalendar(){
  calendarPanel.classList.remove("open");
  calendarPanel.setAttribute("aria-hidden","true");
}

const calendarButton=document.getElementById("calendarButton");
if(calendarButton){
  calendarButton.setAttribute("aria-label","abrir calendario");
  calendarButton.onclick=()=>{
    calendarPanel.classList.contains("open") ? closeCalendar() : openCalendar();
  };
}
document.getElementById("calendarClose").onclick=closeCalendar;
renderCalendar();

/* ========================= HEART / PHRASES ========================= */
const heartPanel=document.getElementById("heartPanel");
const heartButton=document.getElementById("heartButton");
const heartClose=document.getElementById("heartClose");
const heartMessages=document.getElementById("heartMessages");
const HEART_PHRASES=[
  ["El principito.","Jamás encontrarás dos veces a la misma persona, ni siquiera en la misma persona. ♡"],
  ["Isabel Allende.","Ella era una criatura romántica y sentimental, con tendencia a la soledad, de pocas amigas, capaz de emocionarse hasta las lágrimas cuando florecían las rosas en el jardín ✿"],
  ["Valentina Romanetti.","Siempre ha sido de las que tienen p{ajaros en la cabeza y solo yo sé lo bonito que es verlos volar. ♡"],
  ["Fragmentos.","La mitad de tu belleza proviene de tu forma de hablar y tratar a las personas. ❁"],
  ["Fragmentos.","Tengo la mala costumbre de dar un océano cada vez que alguien pide una gota de agua. ♡"],
  ["Anónimo","Hay eternidades tan fugaces que duran solo un instante. ✧"]
];
function renderHeartMessages(){
  const shuffled=[...HEART_PHRASES].sort(()=>Math.random()-0.5);
  heartMessages.innerHTML=shuffled.map(([author,text])=>`
    <div class="heart-bubble">${esc(text)}<span class="heart-author">— ${esc(author)}</span></div>
  `).join("");
}
renderHeartMessages();
function openHeart(){
  renderHeartMessages();
  heartPanel.classList.add("open");
  heartPanel.setAttribute("aria-hidden","false");
}
function closeHeart(){
  heartPanel.classList.remove("open");
  heartPanel.setAttribute("aria-hidden","true");
}
heartButton.onclick=()=>heartPanel.classList.contains("open")?closeHeart():openHeart();
heartClose.onclick=closeHeart;

/* ========================= ESC + CLOSE ========================= */
document.getElementById("closeBtn").onclick=()=>{
  const w=document.getElementById("xatWindow");
  w.classList.add("closing");
  setTimeout(()=>w.classList.remove("closing"),300);
};
document.onkeydown=e=>{
  if(e.key==="Escape"){
    closeVideoModal();closeImageModal();
    closeCalendar();closeHeart();
    galleryMenu.classList.remove("open");
  }
};

/* ========================= DATE + TIME ========================= */
function updateDateTime(){
  const d=new Date();
  const dd=String(d.getDate()).padStart(2,"0"),mm=String(d.getMonth()+1).padStart(2,"0"),yy=d.getFullYear();
  const hh=String(d.getHours()).padStart(2,"0"),mi=String(d.getMinutes()).padStart(2,"0"),ss=String(d.getSeconds()).padStart(2,"0");
  document.getElementById("dateTime").textContent=`${dd}/${mm}/${yy}  ${hh}:${mi}:${ss}`;
}
updateDateTime();setInterval(updateDateTime,1000);
