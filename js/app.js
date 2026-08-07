
/* =====================================================================
   1) PRIX  (modifie librement)
   ===================================================================== */
const PRIX = { photoSupp:20, album:140, seuilAcompte:590, acompteBas:90, acompteHaut:190 };

/* Gammes (formules). Modifie librement noms, prix et inclusions. */
const GAMMES = {
  simple: [
    { id:'essentielle', nom:'Essentielle', prix:290, inclus:['Séance @T en studio','5 photos retouchées'] },
    { id:'confort', nom:'Confort', prix:390, populaire:true, inclus:['Séance @T en studio','10 photos retouchées','Galerie complète au naturel (toutes les photos de la séance, brutes)'] },
    { id:'prestige', nom:'Prestige', prix:490, inclus:['Séance @T en studio','Toutes les plus belles photos retouchées, sans limite'] }
  ],
  duo: [
    { id:'essentiel', nom:'Duo Essentiel', prix:590, inclus:['2 séances : grossesse et naissance','10 photos retouchées, à répartir sur les 2 séances','Galerie complète au naturel (toutes les photos brutes des 2 séances)'] },
    { id:'confort', nom:'Duo Confort', prix:690, populaire:true, inclus:['2 séances : grossesse et naissance','20 photos retouchées, à répartir sur les 2 séances','Galerie complète au naturel (toutes les photos brutes des 2 séances)'] },
    { id:'prestige', nom:'Duo Prestige', prix:890, inclus:['2 séances : grossesse et naissance','Toutes les plus belles photos retouchées sans limite, pour les 2 séances'] }
  ]
};

/* =====================================================================
   2) CHIFFRES MARKETING  (mets tes vrais chiffres ici)
   ===================================================================== */
const CHIFFRES = { note:'5,0', ans:'7 ans', familles:'1 000+' };
document.getElementById('heroRating').textContent=CHIFFRES.note;

/* =====================================================================
   2b) AVIS GOOGLE
   Colle tes vrais avis ici. Tu peux en mettre autant que tu veux,
   ils s'affichent automatiquement (note de 1 à 5).
   ===================================================================== */
const AVIS = [
  { nom:'Marie B.', note:5, type:'Séance grossesse', date:'il y a 3 mois', texte:'Encore merci Mattéo pour ces superbes photos ! Enceinte de notre premier enfant, nous avons fait 1h de route après avoir parcouru son portfolio et nous avons eu raison. Accueillis par un café, nous avons appris à faire connaissance et décrit l’ambiance voulue, ce qui nous a permis de nous détendre. Nous avons reçu toutes les photos le soir même : le travail est déjà extraordinaire !' },
  { nom:'Eva D.', note:5, type:'Séance grossesse', date:'il y a 7 mois', texte:'Super accueil et séance géniale ! C’était notre premier shooting et il a su nous mettre à l’aise et nous guider pour les poses. Il y a un énorme choix de tenues pour les mamans ! En plus, super sympa humainement. On recommande à 100 % et on reviendra pour la naissance !' },
  { nom:'L. F.', note:5, type:'Séance naissance', date:'il y a 5 mois', texte:'Shooting naissance avec notre petite fille de 15 jours et tout s’est très bien passé ! Mattéo est très patient et à l’écoute, ça se voit qu’il a l’habitude des bébés. Les photos sont magnifiques et nous avons passé un super moment en famille.' },
  { nom:'Marine', note:5, type:'Séance grossesse', date:'il y a 7 mois', texte:'J’ai fait un shooting grossesse et je suis très satisfaite du résultat. Matteo est très professionnel et sait mettre à l’aise. Vous avez un large choix de jolies tenues. Les photos sont magnifiques. Vous pouvez y aller les yeux fermés, vous ne serez pas déçus !' },
  { nom:'Aurélie & Kévin', note:5, type:'Séance grossesse', date:'il y a 8 mois', texte:'Nous avons réalisé un shooting grossesse et tout a été parfait du début à la fin. Il nous a guidés pour chaque pose et mis totalement à l’aise ! Ce que j’ai particulièrement apprécié, c’est qu’il ne regarde pas la montre : il prend vraiment le temps, sans stress. On a aussi beaucoup discuté, ce qui a rendu la séance naturelle. Je recommande à 100 % !' },
  { nom:'Camille & Clément', note:5, type:'Séance grossesse', date:'il y a 7 mois', texte:'Nous avons réalisé une séance photo grossesse. Tout s’est très bien passé, c’était une première pour moi et j’avais pas mal d’appréhensions mais le photographe a su me mettre à l’aise. C’était au final très plaisant. Nous reviendrons avec plaisir !' },
  { nom:'Angelique D.', note:5, type:'Pack grossesse + naissance', date:'il y a 9 mois', texte:'Nous avons eu 2 expériences extraordinaires : le shooting grossesse à Lyon et le shooting naissance. Photographe professionnel, à l’écoute, patient et de très bon conseils, même pour les personnes peu photogéniques. Merci encore pour ces moments partagés et ces magnifiques photos !' },
  { nom:'Joanna D.', note:5, type:'Séance naissance', date:'il y a un an', texte:'Nous avons réalisé un shooting de naissance pour notre fille, Matteo est top ! Patient, professionnel. Un décor sur mesure spécialement pour nous. Il avance au rythme de bébé et c’est très appréciable ! Résultat des photos ultra rapide ! Nous recommandons à 100 %.' },
  { nom:'Gautier S.', note:5, type:'Séance grossesse', date:'il y a un an', texte:'Nous avons passé une excellente séance photo de grossesse avec notre fille de 2 ans et demi. Matteo s’est montré très attentionné. Les prises sont naturelles, efficaces, et le résultat est totalement à la hauteur de nos espérances. Nous y retournerons pour les photos de naissance !' },
  { nom:'Laurence', note:5, type:'Pack grossesse + naissance', date:'il y a un an', texte:'Très satisfaits de notre première séance photo grossesse, nous avons renouvelé l’expérience avec une séance naissance ! Matteo a su s’adapter à nos attentes. Disponible, arrangeant, à l’écoute, patient (surtout quand bébé a faim). On s’est senti à l’aise. Merci pour ces souvenirs immortalisés !' }
];
const GLOGO='<svg class="rev-g" viewBox="0 0 48 48" aria-label="Avis Google"><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/><path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34A21.99 21.99 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"/><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/></svg>';
(function renderAvis(){
  const g=document.getElementById('revGrid'); if(!g) return;
  const card=a=>{
    const stars='★★★★★'.slice(0,a.note)+'☆☆☆☆☆'.slice(0,5-a.note);
    const initiale=(a.nom||'?').trim().charAt(0).toUpperCase();
    const meta=[a.type,a.date].filter(Boolean).join(' · ');
    return '<article class="rev"><div class="rev-top"><div class="stars">'+stars+'</div>'+GLOGO+'</div>'+
      '<p>'+a.texte+'</p>'+
      '<div class="who"><span class="ava">'+initiale+'</span><div><b>'+a.nom+'</b><span>'+meta+'</span></div></div></article>';
  };
  // liste dupliquee : permet un defilement en boucle continue et sans coupure
  g.innerHTML=AVIS.map(card).join('')+AVIS.map(card).join('');
})();

/* =====================================================================
   3) PHOTOS
   PHOTOS_BEBE : colle ici les liens de tes photos de BÉBÉ / nouveau-né
   PHOTOS_GROSSESSE : tes photos de grossesse
   (un lien = juste l'identifiant Wix, comme dans les exemples)
   ===================================================================== */
const PHOTOS_BEBE = [
  'images/apres.jpg','images/apres2.jpg','images/apres3.jpg',
  'images/g1.jpg','images/g2.jpg','images/g3.jpg','images/g4.jpg','images/g5.jpg',
  'images/g6.jpg','images/g7.jpg','images/g8.jpg','images/g9.jpg','images/g10.jpg',
];
const PHOTOS_GROSSESSE = [
  'images/apres4.jpg',
  '8d485c_6ffd08ecbafb48e381c432a11ebd8edc~mv2.jpg',
  '8d485c_bb4104800f454b6a8594f7ca5e05cc6c~mv2.jpg',
  '8d485c_014368a00b4141f996337e79562dcbc2~mv2.jpg',
  '8d485c_df72efeb7acf4e429fc9324303b26b68~mv2.jpg',
  '8d485c_3de0b2e2993449d2a5c8394e2bc79d17~mv2.jpg',
  '8d485c_26a1e6068bee4c2d9c772e2d891117a9~mv2.jpg',
  '8d485c_71d9761e2aca4a8faac33d31189f986b~mv2.jpg',
  '8d485c_f9a9dbecf2d242ae9312cd47ba6e0d53~mv2.jpg',
  '8d485c_a95356aa03c244909750053eb81e3f6d~mv2.jpg',
  '8d485c_293442a07e3b49fbbc5c345a9d7c0b4e~mv2.jpg',
  '8d485c_e394bdc002e24e4887cba069a89aca64~mv2.jpg',
  '8d485c_5bb69d8135be4d3e893faf0b3b220d16~mv2.jpg',
  '8d485c_79341a18c95c48e58b08eb4fd4678134~mv2.jpg',
  '8d485c_3995871b7d434ff484a98decc5583e7b~mv2.jpg',
  '8d485c_034ca01e85174c6db8be76ef540737fd~mv2.jpg',
  '8d485c_7c89a610eac84cb8a87b4fbef9b05b40~mv2.jpg',
  '8d485c_6a406b7e5e674f94b247d25e6a7b6fbd~mv2.jpg',
  '8d485c_e21fbb6c638145d394ee61a58d650e5e~mv2.jpg'
];
function imgUrl(id){return 'https://static.wixstatic.com/media/'+id+'/v1/fit/w_600,h_840,q_90,enc_avif,quality_auto/'+id;}
function srcOf(v){return (v.indexOf('/')>=0||v.indexOf('http')===0)?v:imgUrl(v);}

/* Mélange bébé et grossesse en les répartissant uniformément */
function buildGallery(){
  const bebe=[...PHOTOS_BEBE], gross=[...PHOTOS_GROSSESSE];
  const out=[]; let bi=0,gi=0; const total=bebe.length+gross.length;
  for(let k=0;k<total;k++){
    if(gi<gross.length && (bi>=bebe.length || gi/Math.max(1,gross.length) <= bi/Math.max(1,bebe.length))) out.push(gross[gi++]);
    else out.push(bebe[bi++]);
  }
  return out;
}
const ALL=buildGallery();
const galleryEl=document.getElementById('masonry');

/* Galerie justifiée : rangées alignées, hauteur régulière, sans rognage */
const galItems=ALL.map(id=>{
  const im=document.createElement('img');
  im.src=srcOf(id); im.loading='lazy'; im.alt='Photographie grossesse ou naissance, Mybabyshoot';
  im.addEventListener('click',()=>openLightbox(im.src));
  galleryEl.appendChild(im);
  const it={el:im,ar:1};
  const grab=()=>{ if(im.naturalWidth){ it.ar=im.naturalWidth/im.naturalHeight; layoutGallery(); } };
  if(im.complete&&im.naturalWidth) grab(); else im.addEventListener('load',grab);
  return it;
});
function rowH(){ const w=window.innerWidth; return w<560?170:w<980?210:250; }
function layoutGallery(){
  const W=galleryEl.clientWidth, GAP=10, H=rowH();
  let row=[],sum=0;
  function flush(last){
    if(!row.length) return;
    const gaps=(row.length-1)*GAP;
    let h=(W-gaps)/sum;
    if(last && h>H*1.35) h=H;
    row.forEach(it=>{ it.el.style.height=h+'px'; it.el.style.width=(it.ar*h)+'px'; });
    row=[];sum=0;
  }
  galItems.forEach(it=>{
    row.push(it); sum+=it.ar;
    const gaps=(row.length-1)*GAP;
    if(sum*H+gaps>=W) flush(false);
  });
  flush(true);
}
let galTimer; window.addEventListener('resize',()=>{clearTimeout(galTimer);galTimer=setTimeout(layoutGallery,150);});
layoutGallery();

/* Bento du hero : tes vraies photos (naissance, grossesse, bébé) */
const heroBento=['images/apres.jpg','images/apres4.jpg','images/apres2.jpg'];
['bento1','bento2','bento3'].forEach((bid,i)=>{document.getElementById(bid).src=srcOf(heroBento[i]);});

const lightbox=document.getElementById('lightbox');
function openLightbox(src){lightbox.querySelector('img').src=src;lightbox.classList.add('show');}
lightbox.addEventListener('click',()=>lightbox.classList.remove('show'));

/* =====================================================================
   3b) AVANT / APRES
   Liste d'exemples. Pour en ajouter un, mets une nouvelle ligne avec
   le lien de la photo brute (avant) et de la retouchée (apres).
   avantBrut : true si "avant" est une vraie photo non retouchée.
   ===================================================================== */
const COMPAROS = [
  { avant:'images/avant.jpg',  apres:'images/apres.jpg',  avantBrut:true },
  { avant:'images/avant2.jpg', apres:'images/apres2.jpg', avantBrut:true },
  { avant:'images/avant3.jpg', apres:'images/apres3.jpg', avantBrut:true },
  { avant:'images/avant4.jpg', apres:'images/apres4.jpg', avantBrut:true },
];
(function comparo(){
  const wrap=document.getElementById('ba'); if(!wrap||!COMPAROS.length) return;
  const after=document.getElementById('baAfter'),before=document.getElementById('baBefore'),
        clip=document.getElementById('baBeforeLayer'),handle=document.getElementById('baHandle'),
        grip=handle.querySelector('.grip'),tabs=document.getElementById('baTabs');
  tabs.innerHTML=COMPAROS.map((c,i)=>'<button class="ba-tab'+(i===0?' active':'')+'" data-i="'+i+'">Exemple '+(i+1)+'</button>').join('');
  let pct=50,drag=false;
  function set(p){pct=Math.max(0,Math.min(100,p));clip.style.clipPath='inset(0 '+(100-pct)+'% 0 0)';handle.style.left=pct+'%';}
  function fromX(x){const r=wrap.getBoundingClientRect();set((x-r.left)/r.width*100);}
  function load(i){
    const c=COMPAROS[i];
    after.onload=()=>{ if(after.naturalWidth) wrap.style.aspectRatio=after.naturalWidth+'/'+after.naturalHeight; };
    after.src=srcOf(c.apres); before.src=srcOf(c.avant);
    if(after.complete&&after.naturalWidth) wrap.style.aspectRatio=after.naturalWidth+'/'+after.naturalHeight;
    before.style.filter=c.avantBrut?'':'saturate(.8) contrast(.9) brightness(1.05)';
    tabs.querySelectorAll('.ba-tab').forEach(b=>b.classList.toggle('active',+b.dataset.i===i));
    set(50);
  }
  tabs.addEventListener('click',e=>{const b=e.target.closest('.ba-tab');if(b)load(+b.dataset.i);});
  grip.addEventListener('pointerdown',e=>{drag=true;e.preventDefault();});
  wrap.addEventListener('pointerdown',e=>{drag=true;fromX(e.clientX);});
  window.addEventListener('pointermove',e=>{if(drag)fromX(e.clientX);});
  window.addEventListener('pointerup',()=>drag=false);
  load(0);
})();

/* =====================================================================
   4) Configurateur
   ===================================================================== */
const state={section:'simple',type:'grossesse',gamme:'essentielle',photos:0,album:false};
function euro(n){return n.toLocaleString('fr-FR')+' €';}
function currentGamme(){return (GAMMES[state.section]||GAMMES.simple).find(g=>g.id===state.gamme)||GAMMES[state.section][0];}
function bookingType(){return state.section==='duo'?'duo':state.type;}
function resolveInc(i){return i.replace('@T', state.type==='naissance'?'naissance':'grossesse');}
function total(){return currentGamme().prix+state.photos*PRIX.photoSupp+(state.album?PRIX.album:0);}
const totalEl=document.getElementById('totalVal');

function renderGammes(){
  const sec=state.section;
  const box=document.getElementById('gammes');
  box.innerHTML=GAMMES[sec].map(g=>{
    const active=(state.gamme===g.id);
    return '<button type="button" class="gamme'+(sec==='duo'?' gduo':'')+(active?' active':'')+(g.populaire?' pop':'')+'" data-gamme="'+g.id+'">'
      +(g.populaire?'<span class="gamme-tag">Le + choisi</span>':'')
      +'<div class="gamme-top"><span class="gamme-nom">'+g.nom+'</span><span class="gamme-prix">'+euro(g.prix)+'</span></div>'
      +'<ul class="gamme-inc">'+g.inclus.map(i=>'<li>'+resolveInc(i)+'</li>').join('')+'</ul>'
      +'</button>';
  }).join('');
}
function render(){
  renderGammes();
  document.querySelectorAll('#typeSeg .seg-btn').forEach(b=>b.classList.toggle('active',b.dataset.mode===(state.section==='duo'?'duo':state.type)));
  document.getElementById('optAlbum').classList.toggle('active',state.album);
  document.getElementById('photoVal').textContent=state.photos;
  const g=currentGamme();
  const L=[];
  const nomLigne=state.section==='duo'?g.nom:(g.nom+' . '+(state.type==='naissance'?'Naissance':'Grossesse'));
  L.push({n:nomLigne,s:resolveInc(g.inclus[0]),p:g.prix});
  if(state.photos>0)L.push({n:state.photos+' photo'+(state.photos>1?'s':'')+' supplémentaire'+(state.photos>1?'s':''),s:euro(PRIX.photoSupp)+' la photo',p:state.photos*PRIX.photoSupp});
  if(state.album)L.push({n:'Album photo imprimé',s:'Vos plus belles images réunies',p:PRIX.album});
  document.getElementById('devisLines').innerHTML=L.map(l=>'<div class="dline"><span class="dn">'+l.n+'<span class="dsub">'+l.s+'</span></span><span class="dp">'+euro(l.p)+'</span></div>').join('');
  const t=total();
  totalEl.textContent=euro(t);
  totalEl.classList.add('pulse');setTimeout(()=>totalEl.classList.remove('pulse'),250);
  const acompte=t>=PRIX.seuilAcompte?PRIX.acompteHaut:PRIX.acompteBas;
  document.getElementById('acompteVal').textContent=euro(acompte);
  const eN=document.getElementById('ecoNormal'),eS=document.getElementById('ecoSave');
  if(eN)eN.classList.remove('show'); if(eS)eS.classList.remove('show');
  document.getElementById('mctaPrice').innerHTML=euro(t)+'<span>séance sur mesure</span>';
}
document.getElementById('gammes').addEventListener('click',e=>{const b=e.target.closest('.gamme');if(b){state.gamme=b.dataset.gamme;render();}});
document.getElementById('typeSeg').addEventListener('click',e=>{
  const b=e.target.closest('.seg-btn'); if(!b)return;
  const mode=b.dataset.mode;
  if(mode==='duo'){ state.section='duo'; state.gamme='essentiel'; }
  else { state.section='simple'; state.type=mode; if(!GAMMES.simple.some(g=>g.id===state.gamme)) state.gamme='essentielle'; }
  render();
});
document.getElementById('photoPlus').addEventListener('click',()=>{state.photos++;render();});
document.getElementById('photoMinus').addEventListener('click',()=>{if(state.photos>0){state.photos--;render();}});
document.getElementById('optAlbum').addEventListener('click',()=>{state.album=!state.album;render();});

/* =====================================================================
   5) Réservation maison : sélecteur de créneau + acompte
   Interroge le CRM (disponibilités), collecte les infos client,
   puis redirige vers le paiement Stripe de l'acompte.
   ===================================================================== */

/* URL des fonctions du CRM (memes donnees, meme agenda). */
const CRM_API = 'https://matt-crm.netlify.app/.netlify/functions';

const BOOK_MOIS = ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
const BOOK_JOURS = ['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'];
function bookDateLabel(iso){
  const p=iso.split('-').map(Number);
  const wd=new Date(Date.UTC(p[0],p[1]-1,p[2])).getUTCDay();
  return BOOK_JOURS[wd]+' '+p[2]+' '+BOOK_MOIS[p[1]-1];
}
function bookTypeLabel(t){return t==='duo'?'Grossesse + naissance':t==='naissance'?'Séance naissance':'Séance grossesse';}
function bookAcompte(t){return t>=590?190:90;}
function hLabel(t){return t.replace(':','h');}

const bookModal=document.getElementById('bookModal');
const bookBody=document.getElementById('bookBody');
let bookState=null;

function openBooking(){
  bookState={type:bookingType(),total:total(),acompte:bookAcompte(total()),date:null,time:null,days:null};
  bookModal.classList.add('show');
  document.body.style.overflow='hidden';
  bookBody.innerHTML='<div class="book-info">Chargement des disponibilités...</div>';
  loadAvailability();
}
function closeBooking(){bookModal.classList.remove('show');document.body.style.overflow='';}

async function loadAvailability(){
  try{
    const r=await fetch(CRM_API+'/mbs-availability',{method:'GET'});
    const j=await r.json();
    if(!j.ok||!j.days||!j.days.length){
      bookBody.innerHTML='<div class="book-info">Aucun créneau disponible en ligne pour le moment. Appelez-moi au 06 47 76 54 17, on trouve une date ensemble.</div>';
      return;
    }
    bookState.days=j.days;
    if(!bookState.date||!j.days.some(d=>d.date===bookState.date))bookState.date=j.days[0].date;
    bookState.time=null;
    renderBookStep1();
  }catch(e){
    bookBody.innerHTML='<div class="book-info">Impossible de charger les créneaux pour l\'instant. Réessayez, ou appelez-moi au 06 47 76 54 17.</div>';
  }
}

function bookPad(n){return (n<10?'0':'')+n;}
function bookMonthLabel(ym){const p=ym.split('-').map(Number);return BOOK_MOIS[p[1]-1]+' '+p[0];}
function bookAddMonth(ym,delta){let p=ym.split('-').map(Number),y=p[0],m=p[1]+delta;while(m<1){m+=12;y--;}while(m>12){m-=12;y++;}return y+'-'+bookPad(m);}

function renderBookStep1(){
  const days=bookState.days;
  const avail={}; days.forEach(d=>avail[d.date]=d.slots);
  const firstMonth=days[0].date.slice(0,7);
  const lastMonth=days[days.length-1].date.slice(0,7);
  if(!bookState.viewMonth)bookState.viewMonth=(bookState.date?bookState.date.slice(0,7):firstMonth);
  const ym=bookState.viewMonth, p=ym.split('-').map(Number), y=p[0], m=p[1];
  const firstWd=(new Date(Date.UTC(y,m-1,1)).getUTCDay()+6)%7; // Lundi=0
  const nbDays=new Date(Date.UTC(y,m,0)).getUTCDate();

  const dow=['Lu','Ma','Me','Je','Ve','Sa','Di'].map(d=>'<span class="book-dow">'+d+'</span>').join('');
  let cells='';
  for(let i=0;i<firstWd;i++)cells+='<span class="book-cell empty"></span>';
  for(let d=1;d<=nbDays;d++){
    const ds=y+'-'+bookPad(m)+'-'+bookPad(d);
    const ok=!!avail[ds], sel=ds===bookState.date;
    cells+='<button type="button" class="book-cell'+(ok?'':' off')+(sel?' active':'')+'"'+(ok?' data-date="'+ds+'"':' disabled')+'>'+d+'</button>';
  }
  const prevOff=ym<=firstMonth?' disabled':'', nextOff=ym>=lastMonth?' disabled':'';

  let slotsHtml;
  if(bookState.date&&avail[bookState.date]){
    const slotBtns=avail[bookState.date].map(t=>'<button type="button" class="book-slot'+(t===bookState.time?' active':'')+'" data-time="'+t+'">'+hLabel(t)+'</button>').join('');
    slotsHtml='<div class="book-l">Créneaux du '+bookDateLabel(bookState.date)+'</div><div class="book-slots">'+slotBtns+'</div>';
  }else{
    slotsHtml='<div class="book-slot-hint">Choisissez un jour disponible dans le calendrier.</div>';
  }

  bookBody.innerHTML=
    '<div class="book-head"><span class="book-eyebrow">Votre réservation</span><h3>Choisissez votre créneau</h3>'
    +'<p class="book-recap">'+bookTypeLabel(bookState.type)+' <span>Acompte '+bookState.acompte+' €</span></p></div>'
    +'<div class="book-cal"><div class="book-cal-nav">'
    +'<button type="button" class="book-nav" id="bookPrev"'+prevOff+' aria-label="Mois précédent">&lsaquo;</button>'
    +'<span class="book-cal-title">'+bookMonthLabel(ym)+'</span>'
    +'<button type="button" class="book-nav" id="bookNextM"'+nextOff+' aria-label="Mois suivant">&rsaquo;</button></div>'
    +'<div class="book-grid book-dow-row">'+dow+'</div><div class="book-grid">'+cells+'</div></div>'
    +slotsHtml
    +'<button type="button" class="btn btn-coral book-full" id="bookNext"'+(bookState.time?'':' disabled')+'>Continuer</button>';

  bookBody.querySelectorAll('.book-cell[data-date]').forEach(b=>b.addEventListener('click',()=>{bookState.date=b.dataset.date;bookState.time=null;renderBookStep1();}));
  bookBody.querySelectorAll('.book-slot').forEach(b=>b.addEventListener('click',()=>{bookState.time=b.dataset.time;renderBookStep1();}));
  const prev=document.getElementById('bookPrev');if(prev)prev.addEventListener('click',()=>{if(!prev.disabled){bookState.viewMonth=bookAddMonth(ym,-1);renderBookStep1();}});
  const nextM=document.getElementById('bookNextM');if(nextM)nextM.addEventListener('click',()=>{if(!nextM.disabled){bookState.viewMonth=bookAddMonth(ym,1);renderBookStep1();}});
  const nx=document.getElementById('bookNext');if(nx)nx.addEventListener('click',()=>{if(bookState.time)renderBookStep2();});
}

function renderBookStep2(){
  const reste=bookState.total-bookState.acompte;
  bookBody.innerHTML=
    '<div class="book-head"><span class="book-eyebrow">Vos coordonnées</span><h3>Presque terminé</h3>'
    +'<p class="book-recap">'+bookTypeLabel(bookState.type)+' <span>'+bookDateLabel(bookState.date)+' à '+hLabel(bookState.time)+'</span></p></div>'
    +'<div class="frow"><div class="field"><label for="bPrenom">Prénom</label><input id="bPrenom" type="text" autocomplete="given-name"></div>'
    +'<div class="field"><label for="bNom">Nom</label><input id="bNom" type="text" autocomplete="family-name"></div></div>'
    +'<div class="frow"><div class="field"><label for="bEmail">Email</label><input id="bEmail" type="email" autocomplete="email"></div>'
    +'<div class="field"><label for="bTel">Téléphone</label><input id="bTel" type="tel" autocomplete="tel"></div></div>'
    +'<div class="book-sum"><div class="book-sum-l"><span>Total de la séance</span><b>'+euro(bookState.total)+'</b></div>'
    +'<div class="book-sum-l"><span>Acompte à régler maintenant</span><b>'+euro(bookState.acompte)+'</b></div>'
    +'<div class="book-sum-note">Le solde ('+euro(reste)+') se règle le jour de la séance.</div></div>'
    +'<div class="book-err" id="bookErr"></div>'
    +'<div class="book-actions"><button type="button" class="btn btn-ghost" id="bookBack">Retour</button>'
    +'<button type="button" class="btn btn-coral" id="bookPay">Payer l\'acompte de '+bookState.acompte+' €</button></div>';
  document.getElementById('bookBack').addEventListener('click',renderBookStep1);
  document.getElementById('bookPay').addEventListener('click',submitBooking);
}

function bookVal(id){const el=document.getElementById(id);return el?el.value.trim():'';}
function bookErr(msg){const e=document.getElementById('bookErr');if(e){e.textContent=msg;e.classList.add('show');}}
function resetPayBtn(){const b=document.getElementById('bookPay');if(b){b.disabled=false;b.textContent='Payer l\'acompte de '+bookState.acompte+' €';}}

async function submitBooking(){
  const client={prenom:bookVal('bPrenom'),nom:bookVal('bNom'),email:bookVal('bEmail'),tel:bookVal('bTel')};
  if(!client.prenom||!client.email){bookErr('Indiquez au moins votre prénom et votre email.');return;}
  const btn=document.getElementById('bookPay');btn.disabled=true;btn.textContent='Redirection vers le paiement...';
  try{
    const r=await fetch(CRM_API+'/mbs-checkout',{method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({type:bookState.type,total:bookState.total,date:bookState.date,time:bookState.time,client})});
    const j=await r.json();
    if(j.ok&&j.url){window.location.href=j.url;return;}
    if(j.error==='slot_taken'){bookErr('Ce créneau vient d\'être pris. Choisissez-en un autre.');resetPayBtn();loadAvailability();return;}
    bookErr('Le paiement en ligne n\'est pas encore actif. Appelez-moi au 06 47 76 54 17 pour réserver.');resetPayBtn();
  }catch(e){
    bookErr('Une erreur est survenue. Réessayez, ou appelez-moi au 06 47 76 54 17.');resetPayBtn();
  }
}

document.querySelectorAll('.js-reserve').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();openBooking();}));
document.getElementById('bookClose').addEventListener('click',closeBooking);
bookModal.addEventListener('click',e=>{if(e.target.id==='bookModal')closeBooking();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeBooking();});

function showMsg(t,ok){const m=document.getElementById('formMsg');m.textContent=t;m.className='fmsg '+(ok?'ok':'err');}
function collectForm(){return{prenom:prenom.value.trim(),nom:nom.value.trim(),email:email.value.trim(),tel:tel.value.trim(),type:typeSel.value,message:message.value.trim()};}
function validForm(d){if(!d.prenom||!d.email){showMsg("Indiquez au moins votre prénom et votre email.",false);return false;}return true;}
document.getElementById('sendOnly').addEventListener('click',async e=>{
  e.preventDefault();
  const d=collectForm(); if(!validForm(d))return;
  const btn=e.currentTarget; btn.style.pointerEvents='none';
  showMsg("Envoi en cours...",true);
  try{
    const r=await fetch(CRM_API+'/mbs-lead',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(d)});
    const j=await r.json().catch(()=>null);
    if(j&&j.ok){
      showMsg("Merci, votre message est bien parti. Je reviens vers vous très vite.",true);
      prenom.value='';nom.value='';email.value='';tel.value='';message.value='';
    }else{
      showMsg("Une erreur est survenue. Réessayez, ou appelez le 06 47 76 54 17.",false);
    }
  }catch(err){
    showMsg("Une erreur est survenue. Réessayez, ou appelez le 06 47 76 54 17.",false);
  }
  btn.style.pointerEvents='';
});

/* =====================================================================
   6) UI : header, menu, reveals, compteurs
   ===================================================================== */
const header=document.getElementById('header');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>40));
const mobileNav=document.getElementById('mobileNav');
document.getElementById('burger').addEventListener('click',()=>mobileNav.classList.add('open'));
document.getElementById('closeNav').addEventListener('click',()=>mobileNav.classList.remove('open'));
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mobileNav.classList.remove('open')));

const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

/* compteurs animés */
function animateCount(el){
  const target=parseFloat(el.dataset.count),dec=+el.dataset.decimal||0,suf=el.dataset.suffix||'';
  let cur=0;const dur=1300,t0=performance.now();
  function tick(now){const p=Math.min(1,(now-t0)/dur);const e=1-Math.pow(1-p,3);cur=target*e;
    el.textContent=(dec?cur.toFixed(dec).replace('.',','):Math.round(cur).toLocaleString('fr-FR'))+suf;
    if(p<1)requestAnimationFrame(tick);}
  requestAnimationFrame(tick);
}
const cio=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){animateCount(en.target);cio.unobserve(en.target);}}),{threshold:.5});
document.querySelectorAll('.num[data-count]').forEach(el=>cio.observe(el));

render();
