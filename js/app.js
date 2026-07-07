
/* =====================================================================
   1) PRIX  (modifie librement)
   ===================================================================== */
const PRIX = { seanceBase:290, photosIncluses:5, photoSupp:10,
  duoBase:580, duoPhotosIncluses:10,
  galerie:100, galRetouche:250, galRetoucheDuo:350, album:140, acompteFixe:90 };

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
  { nom:'Prénom N.', note:5, type:'Séance grossesse', texte:'Colle ici ton premier avis Google.' },
  { nom:'Prénom N.', note:5, type:'Séance naissance', texte:'Colle ici ton deuxième avis Google.' },
  { nom:'Prénom N.', note:5, type:'Pack duo', texte:'Colle ici ton troisième avis Google.' }
];
(function renderAvis(){
  const g=document.getElementById('revGrid'); if(!g) return;
  g.innerHTML=AVIS.map(a=>{
    const stars='★★★★★'.slice(0,a.note)+'☆☆☆☆☆'.slice(0,5-a.note);
    const initiale=(a.nom||'?').trim().charAt(0).toUpperCase();
    return '<div class="rev"><div class="stars">'+stars+'</div><p>'+a.texte+'</p>'+
      '<div class="who"><span class="ava">'+initiale+'</span><div><b>'+a.nom+'</b><span>'+(a.type||'')+'</span></div></div></div>';
  }).join('');
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
const heroBento=['images/apres2.jpg','images/apres4.jpg','images/apres.jpg'];
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
const state={type:'grossesse',photos:5,galerie:true,galRetouche:'',album:false};
function euro(n){return n.toLocaleString('fr-FR')+' €';}
function includedPhotos(){return state.type==='duo'?PRIX.duoPhotosIncluses:PRIX.photosIncluses;}
function buildLines(){
  const L=[];const inc=includedPhotos();
  const duo=state.type==='duo';
  if(duo){
    L.push({n:'Séance grossesse + naissance',s:'10 photos retouchées à répartir sur les 2 séances',p:PRIX.duoBase});
  }else{
    const base=state.type==='naissance'?'Séance naissance':'Séance grossesse';
    L.push({n:base,s:inc+' photos retouchées incluses',p:PRIX.seanceBase});
  }
  const ex=Math.max(0,state.photos-inc);
  if(state.galRetouche==='' && ex>0)L.push({n:ex+' photo'+(ex>1?'s':'')+' en plus',s:euro(PRIX.photoSupp)+' la photo',p:ex*PRIX.photoSupp});
  if(duo){
    L.push({n:'Galerie complète au naturel',s:'Photos brutes des deux séances, offertes',p:0});
    if(state.galRetouche==='one')L.push({n:'Galerie complète retouchée (1 séance)',s:'Les photos d\'une séance retouchées',p:PRIX.galRetouche});
    else if(state.galRetouche==='two')L.push({n:'Galerie complète retouchée (2 séances)',s:'Toutes les photos des deux séances retouchées',p:PRIX.galRetoucheDuo});
  }else{
    if(state.galRetouche==='one')L.push({n:'Galerie complète retouchée',s:'Toutes vos photos retouchées, illimité',p:PRIX.galRetouche});
    else if(state.galerie)L.push({n:'Galerie complète au naturel',s:'Toutes les photos',p:PRIX.galerie});
  }
  if(state.album)L.push({n:'Album photo',s:'Imprimé',p:PRIX.album});
  return L;
}
function total(){return buildLines().reduce((s,l)=>s+l.p,0);}
const totalEl=document.getElementById('totalVal');
function render(){
  const inc=includedPhotos();
  if(state.photos<inc)state.photos=inc;
  const isDuo=state.type==='duo';
  const galNat=document.querySelector('.opt[data-opt="galerie"]');
  const natPrice=document.getElementById('natPrice'),natSub=document.getElementById('natSub');
  /* galerie au naturel : toujours offerte et verrouillée en duo, payante en simple */
  if(isDuo){
    galNat.classList.add('active','locked');
    natPrice.textContent='Offert';
    natSub.textContent='Photos brutes des deux séances, toujours offertes';
  }else{
    galNat.classList.remove('locked');
    galNat.classList.toggle('active',state.galerie && state.galRetouche==='');
    natPrice.textContent='+'+PRIX.galerie+' €';
    natSub.textContent='Toutes les photos, livrées le jour même';
  }
  const cOne=document.querySelector('.gal-ret-one'),cTwo=document.querySelector('.gal-ret-two');
  cTwo.style.display=isDuo?'':'none';
  document.getElementById('retOneTitle').textContent=isDuo?'Galerie complète retouchée pour une séance':'Galerie complète retouchée';
  cOne.querySelector('.op').textContent='+'+PRIX.galRetouche+' €';
  cTwo.querySelector('.op').textContent='+'+PRIX.galRetoucheDuo+' €';
  cOne.classList.toggle('active',state.galRetouche==='one');
  cTwo.classList.toggle('active',state.galRetouche==='two');
  document.querySelector('.opt[data-opt="album"]').classList.toggle('active',state.album);
  document.getElementById('photoStepper').classList.toggle('disabled',state.galRetouche!=='');
  const L=buildLines();
  document.getElementById('devisLines').innerHTML=L.map(l=>'<div class="dline"><span class="dn">'+l.n+'<span class="dsub">'+l.s+'</span></span><span class="dp">'+(l.p===0?'Offert':euro(l.p))+'</span></div>').join('');
  const t=total();
  totalEl.textContent=euro(t);
  totalEl.classList.add('pulse');setTimeout(()=>totalEl.classList.remove('pulse'),250);
  document.getElementById('acompteVal').textContent=euro(PRIX.acompteFixe);
  /* économie offre grossesse + naissance : galeries au naturel des 2 séances offertes */
  const ecoStrike=document.getElementById('ecoNormal'),ecoSave=document.getElementById('ecoSave');
  if(isDuo){
    const eco=2*PRIX.galerie;
    ecoStrike.textContent=euro(t+eco);ecoStrike.classList.add('show');
    ecoSave.textContent='Galeries au naturel des 2 séances offertes, vous économisez '+euro(eco);
    ecoSave.classList.add('show');
  }else{
    ecoStrike.classList.remove('show');ecoSave.classList.remove('show');
  }
  document.getElementById('photoVal').textContent=state.photos;
  const ps=euro(PRIX.photoSupp);
  document.getElementById('photoNote').innerHTML=(state.galRetouche!==''
    ?'<strong>Vos photos sont retouchées</strong> selon l\'option choisie. Le compteur ci-dessus n\'a plus d\'effet.'
    :isDuo
      ?'<strong>10 photos retouchées sont incluses</strong>, à répartir librement entre les deux séances. Chaque photo en plus est à '+ps+'.'
      :'<strong>5 photos retouchées sont incluses</strong> dans l\'offre de base. Chaque photo en plus est à '+ps+'.');
  document.getElementById('mctaPrice').innerHTML=euro(t)+'<span>séance sur mesure</span>';
}
document.querySelectorAll('#typeRow .choice').forEach(c=>c.addEventListener('click',()=>{document.querySelectorAll('#typeRow .choice').forEach(x=>x.classList.remove('active'));c.classList.add('active');state.type=c.dataset.type;if(state.type!=='duo'&&state.galRetouche==='two')state.galRetouche='one';state.photos=includedPhotos();render();}));
document.getElementById('photoPlus').addEventListener('click',()=>{if(state.galRetouche!=='')return;state.photos++;render();});
document.getElementById('photoMinus').addEventListener('click',()=>{if(state.galRetouche!=='')return;if(state.photos>includedPhotos()){state.photos--;render();}});
document.querySelectorAll('#optList .opt').forEach(o=>o.addEventListener('click',()=>{
  const isDuo=state.type==='duo';
  if(o.dataset.ret){
    const r=o.dataset.ret;
    state.galRetouche=(state.galRetouche===r)?'':r;
    if(!isDuo && state.galRetouche!=='')state.galerie=false;
  }else{
    const k=o.dataset.opt;
    if(k==='galerie'){
      if(isDuo)return;
      state.galerie=!state.galerie;
      if(state.galerie)state.galRetouche='';
    }else{state[k]=!state[k];}
  }
  render();
}));

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
function bookAcompte(t){return t==='duo'?190:90;}
function hLabel(t){return t.replace(':','h');}

const bookModal=document.getElementById('bookModal');
const bookBody=document.getElementById('bookBody');
let bookState=null;

function openBooking(){
  bookState={type:state.type,total:total(),acompte:bookAcompte(state.type),date:null,time:null,days:null};
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

function renderBookStep1(){
  const days=bookState.days;
  const dateChips=days.map(d=>'<button type="button" class="book-date'+(d.date===bookState.date?' active':'')+'" data-date="'+d.date+'">'+bookDateLabel(d.date)+'</button>').join('');
  const cur=days.find(d=>d.date===bookState.date)||days[0];
  const slotBtns=cur.slots.map(t=>'<button type="button" class="book-slot'+(t===bookState.time?' active':'')+'" data-time="'+t+'">'+hLabel(t)+'</button>').join('');
  bookBody.innerHTML=
    '<div class="book-head"><span class="book-eyebrow">Votre réservation</span><h3>Choisissez votre créneau</h3>'
    +'<p class="book-recap">'+bookTypeLabel(bookState.type)+' <span>Acompte '+bookState.acompte+' €</span></p></div>'
    +'<div class="book-l">Le jour</div><div class="book-dates">'+dateChips+'</div>'
    +'<div class="book-l">L\'heure</div><div class="book-slots">'+slotBtns+'</div>'
    +'<button type="button" class="btn btn-coral book-full" id="bookNext"'+(bookState.time?'':' disabled')+'>Continuer</button>';
  bookBody.querySelectorAll('.book-date').forEach(b=>b.addEventListener('click',()=>{bookState.date=b.dataset.date;bookState.time=null;renderBookStep1();}));
  bookBody.querySelectorAll('.book-slot').forEach(b=>b.addEventListener('click',()=>{bookState.time=b.dataset.time;renderBookStep1();}));
  const nx=document.getElementById('bookNext');
  if(nx)nx.addEventListener('click',()=>{if(bookState.time)renderBookStep2();});
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
document.getElementById('sendOnly').addEventListener('click',e=>{e.preventDefault();const d=collectForm();if(!validForm(d))return;showMsg("Merci, votre message est parti. Matteo revient vers vous très vite.",true);});

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
