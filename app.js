const demoGames = [
  {title:"8-Bit Adventure",system:"NES / Famicom",symbol:"NES",genre:"Homebrew platformer",status:"Homebrew"},
  {title:"Star Harbor",system:"SNES / Super Famicom",symbol:"16",genre:"Community homebrew",status:"Homebrew"},
  {title:"Pocket Quest",system:"Game Boy",symbol:"GB",genre:"Adventure demo",status:"Demo"},
  {title:"Color Garden",system:"Game Boy Color",symbol:"GBC",genre:"Puzzle homebrew",status:"Homebrew"},
  {title:"Pixel Rally 64",system:"Nintendo 64",symbol:"N64",genre:"Racing prototype",status:"Demo"},
  {title:"Tiny Tactics",system:"Game Boy Advance",symbol:"GBA",genre:"Strategy homebrew",status:"Homebrew"},
  {title:"Cube Lab",system:"GameCube",symbol:"GC",genre:"Experimental project",status:"Demo"},
  {title:"Touch the Stars",system:"Nintendo DS",symbol:"DS",genre:"Touchscreen homebrew",status:"Homebrew"},
  {title:"Island Builder",system:"Wii",symbol:"Wii",genre:"Family homebrew",status:"Homebrew"},
  {title:"Pocket Sketch",system:"Nintendo 3DS",symbol:"3DS",genre:"Creative homebrew",status:"Homebrew"},
  {title:"Red Depths",system:"Virtual Boy",symbol:"VB",genre:"Experimental demo",status:"Demo"},
  {title:"Color TV Challenge",system:"Other Nintendo retro",symbol:"TV",genre:"Historical system demo",status:"Demo"}
];
const grid = document.getElementById("gameGrid");
const search = document.getElementById("gameSearch");
const filter = document.getElementById("systemFilter");
const empty = document.getElementById("emptyState");
let activeSystem = "all";
function renderGames(){
  const query = search.value.trim().toLowerCase();
  const chosen = filter.value;
  const list = demoGames.filter(game => {
    const systemMatch = activeSystem === "all" || game.system === activeSystem;
    const selectMatch = chosen === "all" || game.system === chosen;
    const textMatch = (game.title+" "+game.system+" "+game.genre).toLowerCase().includes(query);
    return systemMatch && selectMatch && textMatch;
  });
  grid.innerHTML = list.map((game,index)=>`<article class="game-card"><div class="game-art"><span class="system-symbol">${escapeHtml(game.symbol)}</span><span class="game-number">DEMO ${String(index+1).padStart(2,"0")}</span></div><div class="game-info"><h3>${escapeHtml(game.title)}</h3><p>${escapeHtml(game.system)}</p><div class="game-bottom"><span class="tag">${escapeHtml(game.status)}</span><button class="small-action" data-game="${escapeHtml(game.title)}">Details ↗</button></div></div></article>`).join("");
  empty.classList.toggle("hidden",list.length>0);
}
function escapeHtml(value){return String(value).replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));}
search.addEventListener("input",renderGames);
filter.addEventListener("change",()=>{activeSystem="all";document.querySelectorAll(".system-chip").forEach(chip=>chip.classList.toggle("selected",chip.dataset.system==="all"));renderGames();});
document.getElementById("systemStrip").addEventListener("click",event=>{const chip=event.target.closest("[data-system]");if(!chip)return;activeSystem=chip.dataset.system;filter.value="all";document.querySelectorAll(".system-chip").forEach(item=>item.classList.toggle("selected",item===chip));renderGames();});
grid.addEventListener("click",event=>{const button=event.target.closest("[data-game]");if(button)toast(button.dataset.game+" is a placeholder entry. No game file is included.");});
const views=["library","vault","friends","chat","community","settings"];
function showView(name){if(!views.includes(name))return;views.forEach(view=>document.getElementById("view-"+view).classList.toggle("hidden",view!==name));document.querySelectorAll(".nav-item").forEach(item=>item.classList.toggle("active",item.dataset.view===name));document.getElementById("crumb").textContent=name.toUpperCase();document.querySelector(".sidebar").classList.remove("open");window.scrollTo({top:0,behavior:"smooth"});}
document.querySelectorAll("[data-view],[data-goto]").forEach(button=>button.addEventListener("click",()=>showView(button.dataset.view||button.dataset.goto)));
document.getElementById("menuToggle").addEventListener("click",()=>document.querySelector(".sidebar").classList.toggle("open"));
function toast(message){const el=document.getElementById("toast");el.textContent=message;el.classList.add("show");clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove("show"),2600);}
document.getElementById("vaultInfo").addEventListener("click",()=>document.getElementById("vaultHint").classList.toggle("hidden"));
document.getElementById("communityRules").addEventListener("click",()=>document.getElementById("rulesHint").classList.toggle("hidden"));
document.getElementById("findFriends").addEventListener("click",()=>toast("Friend discovery will be added with secure accounts and moderation."));
document.querySelectorAll(".friend-action").forEach(button=>button.addEventListener("click",()=>showView("chat")));
document.getElementById("chatForm").addEventListener("submit",event=>{event.preventDefault();const input=document.getElementById("chatInput");const value=input.value.trim();if(!value)return;const message=document.createElement("div");message.className="message sent";message.textContent=value;const label=document.createElement("small");label.textContent="Local demo only";message.appendChild(label);document.getElementById("chatMessages").appendChild(message);input.value="";document.getElementById("chatMessages").scrollTop=document.getElementById("chatMessages").scrollHeight;toast("Demo message added locally; it was not sent to anyone.");});
document.querySelectorAll(".switch input").forEach(input=>input.addEventListener("change",()=>toast("Demo only: family permissions are not saved or enforced yet.")));
renderGames();