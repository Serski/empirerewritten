const IMG="../../assets/img/";
const FACTIONS={
  palaiologoi:{label:"The Palaiologoi",color:"#c5708a"},
  court:{label:"The Court & Builders",color:"#c8a14e"},
  west:{label:"The West",color:"#7593c8"},
  ottoman:{label:"The Ottomans",color:"#c0584e"},
  rebels:{label:"Rebels & Outsiders",color:"#6e9a86"},
};
const C=[
 {id:"john",name:"Emperor John VIII Palaiologos",faction:"palaiologoi",img:"John.png",
  role:"The weary Basileus",
  teaser:"The eldest brother of the dynasty, ruling an empire he knows is already bleeding out — holding collapsing walls upright with diplomacy, ceremony, and ink.",
  full:"A pragmatic unionist, John treats reconciliation with Rome less as faith than necessity, bargaining for gold and crusading promises while struggling to contain the poisonous rivalries of his brothers — especially the widening feud between Constantine and Theodore. In this timeline's great fracture, his balancing act fails: he is assassinated in a late-1432 palace coup orchestrated from within the family.",
  wiki:"https://en.wikipedia.org/wiki/John_VIII_Palaiologos"},

 {id:"theodore",name:"Theodore II Palaiologos",faction:"palaiologoi",crest:"Byzantine.png",
  role:"The shadow of tradition",
  teaser:"Constantine's chief domestic antagonist — the middle son, devout and austere, who treats innovation itself as corruption.",
  full:"The printing press, Latin Bibles, artillery, Western entanglements — all of it, to Theodore, is a betrayal of Orthodox Byzantium. He becomes the nerve-centre of the anti-unionist faction, escalating from obstruction to outright sabotage until the family itself becomes a battlefield. His final gamble is a coup in Constantinople alongside Demetrios: John VIII is murdered, and Theodore is then betrayed and killed in the aftermath.",
  wiki:"https://en.wikipedia.org/wiki/Theodore_II_Palaiologos"},

 {id:"theodora",name:"Theodora Tocco",faction:"palaiologoi",crest:"Byzantine.png",
  role:"Constantine's first wife",
  teaser:"Daughter of Carlo I Tocco, married to Constantine in a hard-edged political settlement after the Battle of the Echinades that placed Glarentza under his control.",
  full:"Intended to stabilise the Morea, their union is worn down by the era's brutality and the private costs of dynasty. She dies in 1430 during childbirth, along with the child — mirroring the original timeline — and her loss leaves Constantine permanently changed.",
  wiki:"https://en.wikipedia.org/wiki/Theodora_Tocco"},

 {id:"theophilus",name:"Theophilus Dragas",faction:"palaiologoi",img:"Theophilus.png",
  role:"Keeper of the treasury",
  teaser:"A distant cousin sent to Glarentza as kin and safeguard — the engine behind the civilian regime, with a hard hand on the treasury.",
  full:"He oversees the Morea's publishing operation and the wider economy that feeds Constantine's reforms and wars. Known for tight control, relentless accounting, and constant complaints about costs, Theophilus can be infuriating — but his stinginess is rooted in loyalty. He is the indispensable counterweight to Constantine's ambition: the man who makes sure the dream doesn't bankrupt itself.",
  wiki:null},

 {id:"sphrantzes",name:"George Sphrantzes",faction:"court",img:"George.png",
  role:"Constantine's right hand",
  teaser:"Courtier, administrator, and diplomat — the one who turns intent into orders that survive contact with reality.",
  full:"Born in Constantinople in 1401, he enters imperial service young under Manuel II; when Constantine is sent to the Morea, Sphrantzes follows and earns a trust that becomes operational power, serving as temporary governor of Glarentza. Historically he was inside the catastrophe of 1453 — enslaved, ransomed — and in old age withdrew to Corfu as a monk to write one of the last intimate records of the Palaiologan world.",
  wiki:"https://en.wikipedia.org/wiki/George_Sphrantzes"},

 {id:"plethon",name:"Georgios Gemistos Plethon",faction:"court",img:"Plethon.png",
  role:"Philosopher of Mystras",
  teaser:"The famed, elderly philosopher who relocates to Glarentza, drawn by the shock of Constantine's vision.",
  full:"Brilliant, stubborn, and dangerously unorthodox, he becomes not a court ornament but an intellectual weapon — a rare voice who can challenge the Emperor without fear, pressing for reform and a Byzantium that refuses to think like a dying state. He is the co-architect, alongside Constantine, of Ieros Skopos: a weaponised text meant to ignite identity, resistance, and purpose far beyond the Empire's borders.",
  wiki:"https://en.wikipedia.org/wiki/Gemistos_Plethon"},

 {id:"bessarion",name:"Bessarion",faction:"court",img:"Bessarion.png",
  role:"Bridge to the West",
  teaser:"An insightful monk and philosopher, a protégé of Plethon, who becomes the Empire's cultural ambassador and quiet intelligence-gatherer.",
  full:"Moving through Rome, Naples, and Florence with monastic restraint and a mind that never stops calculating, he is a monk turned merchant who can sell books, read men as well as manuscripts, and translate Hellenic prestige into gold, alliances, and influence. He comes to treat Church union as a necessary bridge, using the printing press as soft power and identifying useful patrons like Cosimo de' Medici.",
  wiki:"https://en.wikipedia.org/wiki/Bessarion"},

 {id:"niketas",name:"Niketas",faction:"court",crest:"Byzantine.png",
  role:"Master of thunder",
  teaser:"A wiry Greek gunpowder artisan and engineer who defects from Ottoman service and turns his former craft against the Sultan.",
  full:"Once a maker of Murad's siege powders, he breaks with the empire that employed him after a brutal personal injustice and places his life at Constantine's feet in exchange for protection and revenge. He becomes the technical backbone of Constantine's artillery advantage — refining stronger powder, sighting the Drakos field cannons, and pushing for local production. His rise from hunted fugitive to director of imperial production embodies the regime's ruthless meritocracy: skill over lineage.",
  wiki:null},

 {id:"andreas",name:"Captain Andreas",faction:"court",img:"Andrea.png",
  role:"The battle-worn loyalist",
  teaser:"A blunt, battle-worn officer who fought at the Echinades (1427) and helped secure Glarentza as it passed under Constantine's control.",
  full:"Experienced and unsentimental, he is initially sceptical of Constantine's unconventional ideas — but as those ideas prove themselves in drill, discipline, and war, Andreas rises from wary professional to one of Constantine's most trusted commanders, valued for steadiness, hard judgment, and loyalty earned on campaign.",
  wiki:null},

 {id:"aristos",name:"Captain Aristos",faction:"court",img:"ARISTOS.png",
  role:"Commander in Albania",
  teaser:"A disciplined officer entrusted with a high-risk mission into Albania — to fan the revolt and bleed the Ottomans far from the Morea.",
  full:"Commander and instructor both, he carries Constantine's modern doctrine — Drakos cannons, organised drill, hard logistics — into the brutal world of mountain chieftains. He takes Gjirokastër through patient artillery work rather than reckless assault, then makes the cold professional choice to abandon the city when Turahan's relief force closes in, executing a scorched-earth withdrawal so the Ottomans retake only rubble.",
  wiki:null},

 {id:"murad",name:"Sultan Murad II",faction:"ottoman",img:"Murad.png",
  role:"The Ottoman Sultan",
  teaser:"The shadow that falls across Constantine's resurgence — a seasoned warrior-ruler who treats Byzantium's defiance as an imperial insult.",
  full:"Stocky and hard-featured, Murad is defined by calculated fury: patient enough to avoid traps, ruthless enough to crush resistance when the moment is right. He values order and the prestige of his empire as much as conquest, listening to cautious counsel even as pride pushes him toward decisive punishment — especially after Constantine's victories force him to restore the Ottoman aura of inevitability.",
  wiki:"https://en.wikipedia.org/wiki/Murad_II"},

 {id:"eugene",name:"Pope Eugene IV",faction:"west",img:"Eugene.png",
  role:"The Renaissance pontiff",
  teaser:"A Renaissance pope who learns quickly that doctrine is never just doctrine — it's also cities, factions, and money.",
  full:"Historically his reign is dominated by a bruising struggle with the Council of Basel over papal authority. In our story, when Constantine reaches Rome, Eugene's eye fixes on a new lever of power: printed Bibles. Constantine offers mass-produced Papacy Edition volumes — faith packaged at scale — and Eugene's side of the bargain is bluntly transactional: gold and endorsement. The arrangement leaves him better financed and harder for Basel to treat as a pope on probation.",
  wiki:"https://en.wikipedia.org/wiki/Pope_Eugene_IV"},

 {id:"sforza",name:"Francesco Sforza",faction:"west",img:"Sforza.png",
  role:"Architect of victories",
  teaser:"The most formidable condottiero of Italy — imposing, cold-eyed, and relentlessly pragmatic, hired at staggering cost.",
  full:"He treats loyalty as a contract and war as a craft, yet he's one of the few commanders who immediately grasps that Constantine's pikes, muskets, and Drakos cannons are the future of battle. He holds the Hexamilion in brutal close combat while his engineers turn defences into a killing system — and for all his cynicism, he leaves the Morea inspired, determined to carry these methods back to Italy and quietly probing for whatever secrets he can buy, steal, or learn.",
  wiki:"https://en.wikipedia.org/wiki/Francesco_I_Sforza"},

 {id:"iskander",name:"Iskander",faction:"rebels",crest:"ottoman.png",
  role:"The rebel-preacher",
  teaser:"A Tatar scholar, philosopher, and revolutionary — a man with the bearing of a learned preacher even in chains.",
  full:"Once a follower of Sheikh Bedreddin, he survived the crushed dream of Karaburun and spent years as a hunted seeker of knowledge. Constantine finds him among prisoners near Corinth and recognises his true value — not a captive, but a weapon. Iskander drives a revolution of ideas, crafting manifestos to unite the oppressed across faiths and fracture Ottoman stability from within, building secret networks from Antalya to Dobruja as a whispered rebel-preacher promising a world without masters.",
  wiki:null},
];

function portraitHTML(c){
  const fc=FACTIONS[c.faction].color;
  if(c.img) return '<div class="px-portrait" style="--fc:'+fc+'"><img src="'+IMG+c.img+'" alt="'+c.name+'" loading="lazy"></div>';
  return '<div class="px-portrait crest" style="--fc:'+fc+'"><img src="'+IMG+c.crest+'" alt="" loading="lazy"></div>';
}

const grid=document.getElementById('grid');
const filters=document.getElementById('filters');

function renderGrid(filter){
  grid.innerHTML='';
  C.filter(c=>filter==='all'||c.faction===filter).forEach(c=>{
    const fc=FACTIONS[c.faction];
    const el=document.createElement('div');
    el.className='px-card'; el.style.setProperty('--fc',fc.color);
    el.innerHTML=portraitHTML(c)+
      '<div class="px-name">'+c.name+'</div><div class="px-role">'+c.role+'</div>'+
      '<span class="px-ftag" style="--fc:'+fc.color+'">'+fc.label+'</span>';
    el.onclick=()=>openModal(c);
    grid.appendChild(el);
  });
}

(function(){
  const counts={}; C.forEach(c=>counts[c.faction]=(counts[c.faction]||0)+1);
  const all=document.createElement('button'); all.className='px-chip on'; all.dataset.f='all';
  all.innerHTML='<span class="dot"></span>All <span class="ct">'+C.length+'</span>';
  filters.appendChild(all);
  Object.entries(FACTIONS).forEach(([k,v])=>{
    const b=document.createElement('button'); b.className='px-chip'; b.dataset.f=k; b.style.setProperty('--fc',v.color);
    b.innerHTML='<span class="dot"></span>'+v.label+' <span class="ct">'+(counts[k]||0)+'</span>';
    filters.appendChild(b);
  });
  filters.onclick=e=>{
    const btn=e.target.closest('.px-chip'); if(!btn) return;
    [...filters.children].forEach(c=>c.classList.remove('on')); btn.classList.add('on');
    renderGrid(btn.dataset.f);
  };
})();

const modal=document.getElementById('modal'), dialog=document.getElementById('dialog');
function openModal(c){
  const fc=FACTIONS[c.faction];
  dialog.style.setProperty('--fc',fc.color);
  document.getElementById('m-portrait-slot').innerHTML=portraitHTML(c);
  document.getElementById('m-tag').textContent=fc.label;
  document.getElementById('m-name').textContent=c.name;
  document.getElementById('m-role').textContent=c.role;
  document.getElementById('m-teaser').textContent=c.teaser;
  const full=document.getElementById('m-full'); full.className='px-full';
  full.innerHTML=c.full+(c.wiki?'<br><a class="px-wiki" href="'+c.wiki+'" target="_blank" rel="noopener">Historical reference ↗</a>':'');
  document.getElementById('reveal').style.display='block';
  modal.classList.add('open'); document.body.style.overflow='hidden';
}
function closeModal(){modal.classList.remove('open');document.body.style.overflow='';}
document.getElementById('close').onclick=closeModal;
modal.onclick=e=>{if(e.target===modal)closeModal();};
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});
document.getElementById('reveal').onclick=function(){
  document.getElementById('m-full').classList.add('show'); this.style.display='none';
};

renderGrid('all');
