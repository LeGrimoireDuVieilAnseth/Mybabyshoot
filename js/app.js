
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
  { nom:'Julie Maure', note:5, type:'Pack grossesse + naissance', date:'il y a 2 jours', texte:'Nous avons pris un pack grossesse + naissance et sommes ravis des photos réalisées par Matteo. Il a été très à l’écoute de nos demandes, patient avec notre grande de 2 ans et demi. Nous n’hésiterons pas à le solliciter de nouveau pour d’autres événements.' },
  { nom:'Audrey', note:5, type:'Séance grossesse', date:'il y a une semaine', texte:'Je suis arrivée très peu à l’aise avec mon corps et Matt a su tout faire pour me mettre à l’aise ! Les photos sont superbes, nous sommes absolument ravis du résultat. Un grand merci à Matt pour ce superbe shooting ! Je recommande les yeux fermés, nous allons faire les photos de naissance de notre fils avec lui.' },
  { nom:'Jeremy', note:5, type:'Pack grossesse + naissance', date:'il y a une semaine', texte:'Merci à toi pour ton professionnalisme et tes sublimes photos de grossesse et de naissance. Je recommande vraiment ce photographe. Merci pour tout.' },
  { nom:'Marie B.', note:5, type:'Séance grossesse', date:'il y a 3 mois', texte:'Encore merci Mattéo pour ces superbes photos ! Enceinte de notre premier enfant, nous avons fait 1h de route après avoir parcouru son portfolio et nous avons eu raison. Accueillis par un café, nous avons appris à faire connaissance et décrit l’ambiance voulue, ce qui nous a permis de nous détendre. Nous avons reçu toutes les photos le soir même : le travail est déjà extraordinaire !' },
  { nom:'L. F.', note:5, type:'Séance naissance', date:'il y a 5 mois', texte:'Shooting naissance avec notre petite fille de 15 jours et tout s’est très bien passé ! Mattéo est très patient et à l’écoute, ça se voit qu’il a l’habitude des bébés. Les photos sont magnifiques et nous avons passé un super moment en famille.' },
  { nom:'Manon B.', note:5, type:'Séance naissance', date:'il y a 6 mois', texte:'Très bonne expérience pour un shooting naissance, Matteo a été au top. Je recommande !' },
  { nom:'Eva D.', note:5, type:'Séance grossesse', date:'il y a 7 mois', texte:'Super accueil et séance géniale ! C’était notre premier shooting et il a su nous mettre à l’aise et nous guider pour les poses. Il y a un énorme choix de tenues pour les mamans ! En plus, super sympa humainement. On recommande à 100 % et on reviendra pour la naissance !' },
  { nom:'Marine', note:5, type:'Séance grossesse', date:'il y a 7 mois', texte:'J’ai fait un shooting grossesse et je suis très satisfaite du résultat. Matteo est très professionnel et sait mettre à l’aise. Vous avez un large choix de jolies tenues. Les photos sont magnifiques. Vous pouvez y aller les yeux fermés, vous ne serez pas déçus !' },
  { nom:'Camille & Clément', note:5, type:'Séance grossesse', date:'il y a 7 mois', texte:'Nous avons réalisé une séance photo grossesse. Tout s’est très bien passé, c’était une première pour moi et j’avais pas mal d’appréhensions mais le photographe a su me mettre à l’aise. C’était au final très plaisant. Nous reviendrons avec plaisir !' },
  { nom:'Petite Lune', note:5, type:'Séance naissance', date:'il y a 7 mois', texte:'On a fait une séance shooting naissance au studio avec un bain de lait pour mon bébé de 13 jours et c’était un bon moment. Le résultat des photos est à la hauteur et ne met pas des semaines à arriver. Je recommande.' },
  { nom:'Aurélie & Kévin', note:5, type:'Séance grossesse', date:'il y a 8 mois', texte:'Nous avons réalisé un shooting grossesse et tout a été parfait du début à la fin. Il nous a guidés pour chaque pose et mis totalement à l’aise ! Ce que j’ai apprécié, c’est qu’il ne regarde pas la montre : il prend vraiment le temps, sans stress. On a aussi beaucoup discuté, ce qui a rendu la séance naturelle. Je recommande à 100 % !' },
  { nom:'Angelique D.', note:5, type:'Pack grossesse + naissance', date:'il y a 9 mois', texte:'Nous avons eu 2 expériences extraordinaires : le shooting grossesse à Lyon et le shooting naissance. Photographe professionnel, à l’écoute, patient et de très bon conseils, même pour les personnes peu photogéniques. Merci encore pour ces moments partagés et ces magnifiques photos !' },
  { nom:'Emmanuelle B.', note:5, type:'Séance grossesse', date:'il y a un an', texte:'Nous avons réalisé une séance de shooting grossesse chez Matteo et nous sommes très satisfaits du résultat. Il a su nous mettre à l’aise, faire preuve de patience avec notre fils de 5 ans pour tirer le meilleur de nous-mêmes. Les photos sont de très belle qualité. Merci Matteo !' },
  { nom:'Mylène S.', note:5, type:'Pack grossesse + naissance', date:'il y a un an', texte:'Nous avons fait un shooting grossesse avec Matteo. Merci à lui d’avoir si bien capté ce moment de notre vie si cher à nos yeux ! Il a été à l’écoute de nos demandes et nous a mis en confiance. Il a aussi su nous proposer des idées qui nous ressemblent. Nous avons pris le pack grossesse et bébé et avons hâte de faire le second shooting. Nous le recommandons.' },
  { nom:'Nicolas C.', note:5, type:'Séance naissance', date:'il y a un an', texte:'Shooting pour notre petit garçon nouveau-né. Matteo a été professionnel, patient et à l’écoute de notre bébé. Nous avons adoré faire la séance avec lui et les photos sont magnifiques. Encore merci à lui !' },
  { nom:'Manon C.', note:5, type:'Séance photo', date:'il y a un an', texte:'Le studio est super sympa, Matteo met très à l’aise. Les photos sont magnifiques, merci encore pour ta patience et ton professionnalisme.' },
  { nom:'Marine', note:5, type:'Séance photo', date:'il y a un an', texte:'Nous avons passé un super moment ! Aucun stress niveau timing, Matteo est très patient ce qui permet de profiter vraiment de l’instant. Il nous a guidés tout au long de la séance, en prenant en compte nos envies. Les photos sont de très belle qualité, nous sommes très heureux d’avoir ces beaux souvenirs. Nous vous recommandons !' },
  { nom:'Joanna D.', note:5, type:'Séance naissance', date:'il y a un an', texte:'Nous avons réalisé un shooting de naissance pour notre fille, Matteo est top ! Patient, professionnel. Un décor sur mesure spécialement pour nous. Il avance au rythme de bébé et c’est très appréciable ! Résultat des photos ultra rapide ! Nous recommandons à 100 %.' },
  { nom:'Joséphine G.', note:5, type:'Pack grossesse + naissance', date:'il y a un an', texte:'Nos deux séances photos, grossesse puis naissance, se sont très bien déroulées. Matteo s’adapte au rythme du bébé. Il a su prendre en compte nos souhaits et nous avons désormais de très beaux souvenirs !' },
  { nom:'Giulia D.', note:5, type:'Séance grossesse', date:'il y a un an', texte:'Excellent photographe ! Mon époux et moi avons eu un shooting grossesse comme cadeau de mariage, les photos sont très belles. Matteo est très à l’écoute et sait très bien mettre en valeur les modèles. Nous reviendrons pour un shooting naissance car nous sommes très satisfaits !' },
  { nom:'Virginie V.', note:5, type:'Pack grossesse + naissance', date:'il y a un an', texte:'Pour des photos authentiques, très naturelles, et une séance sereine, c’est par ici. Nous avons fait une séance grossesse avec notre petite de 2 ans et une séance naissance, les photos sont sublimes. Avec Matteo, on est complètement serein, jamais bousculé : il prend le temps de décontracter tout le monde, petits et grands, avec une redoutable patience. Cadre joli et cocooning, retouches justes ce qu’il faut pour garder l’authenticité. Merci pour ces magnifiques souvenirs.' },
  { nom:'Sophie D.', note:5, type:'Séance naissance', date:'il y a un an', texte:'Photographe d’une patience inégalable ! Notre toute petite pleurait beaucoup, difficilement consolable, et pourtant on a de très belles photos ! Un cadre vraiment cocooning, tout est fait pour le bien-être du bébé. Nous recommandons sans hésiter.' },
  { nom:'Maxime A.', note:5, type:'Séance photo', date:'il y a un an', texte:'Nous avons passé un excellent moment avec Matteo. Les photos et décors sont tops. Nous avons été guidés tout le long de la séance pour réaliser toutes les photos que nous souhaitions faire.' },
  { nom:'Alexandra J.', note:5, type:'Séance photo', date:'il y a un an', texte:'Super séance photo ! Matteo est un photographe très pro qui guide parfaitement tout le long du shooting et qui met en confiance. Je ne peux que recommander !' },
  { nom:'Dorine N.', note:5, type:'Séance grossesse', date:'il y a un an', texte:'Shooting grossesse réalisé en famille avec notre fille de 2 ans ! Matteo a réussi à nous mettre à l’aise face à l’objectif et a fait preuve de patience avec notre fille. On recommande !' },
  { nom:'Gautier S.', note:5, type:'Séance grossesse', date:'il y a un an', texte:'Nous avons passé une excellente séance photo de grossesse avec notre fille de 2 ans et demi. Matteo s’est montré très attentionné. Les prises sont naturelles, efficaces, et le résultat est totalement à la hauteur de nos espérances. Nous y retournerons pour les photos de naissance !' },
  { nom:'Laurence', note:5, type:'Pack grossesse + naissance', date:'il y a un an', texte:'Très satisfaits de notre première séance photo grossesse, nous avons renouvelé l’expérience avec une séance naissance ! Matteo a su s’adapter à nos attentes. Disponible, arrangeant, à l’écoute, patient (surtout quand bébé a faim). On s’est senti à l’aise. Merci pour ces souvenirs immortalisés !' },
  { nom:'Jessica C.', note:5, type:'Séance naissance', date:'il y a un an', texte:'Endroit très cosy avec une décoration vraiment soignée. Mattéo nous a mis à l’aise et a vraiment œuvré pour que bébé se sente apaisé et profite, tout comme ses parents, de la séance photo. Encore merci !' },
  { nom:'Mathilde A.', note:5, type:'Séance naissance', date:'il y a un an', texte:'Très agréable séance photo avec Mattéo, dans un cadre apaisant, cocooning et propice à la mise en confiance. Mattéo propose en douceur, au rythme de bébé, différents décors, tenues et accessoires adorables. Les photos sont chaleureuses et vraiment superbes, je recommande vivement !' },
  { nom:'Démétrio F.', note:5, type:'Séance naissance', date:'il y a un an', texte:'Shooting naissance au top ! Merci pour cet agréable moment, photographe très professionnel, pragmatique, patient et à l’écoute, avec tout le matériel nécessaire. Merci pour le chaleureux accueil et la gentillesse.' }
];
const GLOGO='<svg class="rev-g" viewBox="0 0 48 48" aria-label="Avis Google"><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/><path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34A21.99 21.99 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"/><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/></svg>';
(function renderAvis(){
  const g=document.getElementById('revGrid'); if(!g) return;
  const card=a=>{
    const stars='★★★★★'.slice(0,a.note)+'☆☆☆☆☆'.slice(0,5-a.note);
    const initiale=(a.nom||'?').trim().charAt(0).toUpperCase();
    const meta=[a.type,a.date].filter(Boolean).join(' · ');
    const long=(a.texte||'').length>190;
    return '<article class="rev">'+
      '<div class="rev-head"><span class="ava">'+initiale+'</span>'+
        '<div class="who"><b>'+a.nom+'</b><span>'+meta+'</span></div>'+GLOGO+'</div>'+
      '<div class="stars">'+stars+'<span class="rate5">'+a.note+' sur 5</span></div>'+
      '<p'+(long?' class="clamp"':'')+'>'+a.texte+'</p>'+
      (long?'<button type="button" class="rev-more">Voir plus</button>':'')+
      '</article>';
  };
  // liste dupliquee : permet un defilement en boucle continue et sans coupure
  g.innerHTML=AVIS.map(card).join('')+AVIS.map(card).join('');
  // "Voir plus" : deplie ou replie le texte de l'avis
  g.addEventListener('click',e=>{
    const b=e.target.closest('.rev-more'); if(!b)return;
    const p=b.parentNode.querySelector('p');
    const replie=p.classList.toggle('clamp');
    b.textContent=replie?'Voir plus':'Voir moins';
  });
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

/* Galerie justifiée : rangées alignées, hauteur régulière, sans rognage.
   On n'affiche d'abord qu'un aperçu (mélange grossesse + naissance),
   le bouton "Voir plus de photos" charge le reste. */
const GAL_APERCU=10;
const galItems=[];
function addGalPhoto(id){
  const im=document.createElement('img');
  im.src=srcOf(id); im.loading='lazy'; im.alt='Photographie grossesse ou naissance, Mybabyshoot';
  im.addEventListener('click',()=>openLightbox(im.src));
  galleryEl.appendChild(im);
  const it={el:im,ar:1};
  const grab=()=>{ if(im.naturalWidth){ it.ar=im.naturalWidth/im.naturalHeight; layoutGallery(); } };
  // image deja en cache : on differe, sinon layoutGallery lit galItems avant sa creation (plantage du script)
  if(im.complete&&im.naturalWidth) setTimeout(grab,0); else im.addEventListener('load',grab);
  galItems.push(it);
}
ALL.slice(0,GAL_APERCU).forEach(addGalPhoto);
const galMore=document.getElementById('galMore');
if(galMore){
  if(ALL.length<=GAL_APERCU) galMore.parentNode.style.display='none';
  galMore.addEventListener('click',()=>{
    ALL.slice(GAL_APERCU).forEach(addGalPhoto);
    galMore.parentNode.style.display='none';
    layoutGallery();
  });
}
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

/* ---------------------------------------------------------------
   Disponibilite reelle : prochaine date libre, et alerte de rareté
   UNIQUEMENT quand elle est vraie (jamais de faux compte a rebours).
   --------------------------------------------------------------- */
const MOIS_FR=['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
const JOURS_FR=['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'];
const SEUIL_RARETE=12; // en dessous, on signale qu'il reste peu de place ce mois-la

function dateLongue(iso){
  const p=String(iso).split('-').map(Number);
  const d=new Date(Date.UTC(p[0],p[1]-1,p[2]));
  return JOURS_FR[d.getUTCDay()]+' '+p[2]+' '+MOIS_FR[p[1]-1];
}
async function chargerDispoNote(){
  const box=document.getElementById('dispoNote');
  if(!box) return;
  try{
    const r=await fetch(CRM_API+'/mbs-availability',{cache:'no-store'});
    const j=await r.json();
    const days=(j&&j.days)||[];
    if(!days.length){
      box.innerHTML='<span class="dispo-ic">•</span> Plus de créneau en ligne pour le moment. Appelez-moi au 06 47 76 54 17.';
      box.className='dispo-note show';
      return;
    }
    const prochaine=days[0];
    // nombre de creneaux restants sur le mois de la prochaine date
    const mois=prochaine.date.slice(0,7);
    const restants=days.filter(d=>d.date.slice(0,7)===mois).reduce((n,d)=>n+d.slots.length,0);
    const nomMois=MOIS_FR[Number(mois.slice(5,7))-1];
    let txt='<b>Prochaine disponibilité : '+dateLongue(prochaine.date)+'</b>';
    if(restants<=SEUIL_RARETE){
      txt+=' <span class="dispo-rare">Plus que '+restants+' créneau'+(restants>1?'x':'')+' en '+nomMois+'.</span>';
    }
    box.innerHTML='<span class="dispo-ic">•</span> '+txt;
    box.className='dispo-note show';
  }catch(e){ /* silencieux : on n'affiche rien plutot qu'une info fausse */ }
}

/* Equivalent duo d'une formule simple, pour proposer le pack au bon moment.
   L'economie affichee est TOUJOURS calculee, jamais inventee. */
const DUO_EQUIV={essentielle:'essentiel',confort:'confort',prestige:'prestige'};
function renderDuoNudge(){
  const box=document.getElementById('duoNudge');
  if(!box) return;
  if(state.section==='duo'){ box.innerHTML=''; box.classList.remove('show'); return; }
  const g=currentGamme();
  const duo=(GAMMES.duo||[]).find(d=>d.id===DUO_EQUIV[g.id]);
  if(!duo){ box.innerHTML=''; box.classList.remove('show'); return; }
  const deuxSeances=g.prix*2;
  const eco=deuxSeances-duo.prix;
  const autre=state.type==='naissance'?'grossesse':'naissance';
  box.innerHTML='<div class="duo-in">'
    +'<div class="duo-txt"><b>Vous pensez aussi faire la '+autre+' ?</b>'
    +'<span>'+duo.nom+' : les 2 séances pour '+euro(duo.prix)
    +(eco>0?', soit <b class="duo-eco">'+euro(eco)+' d\'économie</b> par rapport à 2 séances séparées.'
           :'. Les galeries complètes au naturel des 2 séances sont offertes.')+'</span></div>'
    +'<button type="button" class="btn btn-ghost" id="duoGo">Voir le pack duo</button></div>';
  box.classList.add('show');
  const b=document.getElementById('duoGo');
  if(b) b.addEventListener('click',()=>{
    state.section='duo'; state.gamme=DUO_EQUIV[g.id]||'confort'; render();
    document.getElementById('gammes').scrollIntoView({behavior:'smooth',block:'center'});
  });
}

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
  renderDuoNudge();
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
  const mp=document.getElementById('mctaPrice');
  if(mp)mp.innerHTML=euro(t)+'<span>séance sur mesure</span>';
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
/* echappement : ces valeurs (code saisi, messages) partent dans du innerHTML */
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
let bookState=null;
/* mode consultation : on montre les creneaux libres, sans permettre de reserver */
let bookViewOnly=false;

function openBooking(viewOnly){
  bookViewOnly=!!viewOnly;
  bookState={type:bookingType(),total:total(),acompte:bookAcompte(total()),date:null,time:null,days:null,remise:0,coupon:'',kind:'',giftOnly:false,giftFormule:''};
  bookModal.classList.add('show');
  document.body.style.overflow='hidden';
  bookBody.innerHTML='<div class="book-info">Chargement des disponibilités...</div>';
  loadAvailability();
}
function closeBooking(){bookModal.classList.remove('show');document.body.style.overflow='';}

/* ---------- Reservation avec un bon cadeau deja paye ----------
   La formule est fixee par le bon : la personne ne choisit que sa date. */
function openBookingBon(){
  bookViewOnly=false;
  bookState={type:'grossesse',total:0,acompte:0,date:null,time:null,days:null,remise:0,coupon:'',kind:'cadeau',giftOnly:true,giftFormule:''};
  bookModal.classList.add('show');
  document.body.style.overflow='hidden';
  renderBonCode();
}

function renderBonCode(msg,err){
  bookBody.innerHTML=
    '<div class="book-head"><span class="book-eyebrow">Bon cadeau</span><h3>On vous offre une séance photo</h3>'
    +'<p class="book-recap">Tout est déjà réglé <span>Il ne reste qu\'à choisir votre date</span></p></div>'

    +'<div class="bon-intro">'
    +'<p>Quelqu\'un vous offre une séance au studio Mybabyshoot, à La Mulatière, tout près de Lyon. '
    +'Des séances douces, guidées du début à la fin, dans une ambiance détendue.</p>'
    +'<ul class="bon-quoi">'
    +'<li><b>Séance grossesse</b> : idéalement entre 7 et 8 mois, quand le ventre est bien rond. '
    +'Robes et accessoires sont prêtés sur place, vous n\'avez rien à prévoir.</li>'
    +'<li><b>Séance naissance</b> : idéalement dans les 5 à 15 premiers jours de bébé, tant qu\'il dort beaucoup. '
    +'Les créneaux sont espacés de 4 heures, la séance suit son rythme.</li>'
    +'</ul>'
    +'<p class="bon-comment"><b>Comment ça se passe :</b> vous entrez votre code ci-dessous, vous choisissez le jour '
    +'et l\'heure qui vous arrangent, vous laissez vos coordonnées, et c\'est réservé. '
    +'Vous n\'avez rien à payer, ni maintenant ni le jour de la séance.</p>'
    +'</div>'

    +'<div class="field"><label for="bonCode">Le code inscrit sur votre bon</label>'
    +'<input id="bonCode" type="text" autocomplete="off" placeholder="Ex : K7M4PQ" maxlength="20" value="'+esc(bookState.coupon||'')+'"></div>'
    +'<div class="book-err'+(err?' show':'')+'" id="bonErr">'+(err?esc(err):'')+'</div>'
    +(msg?'<div class="book-info">'+esc(msg)+'</div>':'')
    +'<div class="book-actions"><button type="button" class="btn btn-ghost" id="bonCancel">Annuler</button>'
    +'<button type="button" class="btn btn-coral" id="bonGo">Voir les dates disponibles</button></div>';
  const go=document.getElementById('bonGo');
  go.addEventListener('click',validerBon);
  document.getElementById('bonCancel').addEventListener('click',closeBooking);
  document.getElementById('bonCode').addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();validerBon();}});
}

async function validerBon(){
  const inp=document.getElementById('bonCode');
  const btn=document.getElementById('bonGo');
  const code=(inp.value||'').trim();
  if(!code){ renderBonCode('', 'Entrez le code inscrit sur votre bon.'); return; }
  btn.disabled=true; btn.textContent='Vérification...';
  try{
    const r=await fetch(CRM_API+'/mbs-gift-view?code='+encodeURIComponent(code),{cache:'no-store'});
    const j=await r.json();
    if(!j||!j.ok){ bookState.coupon=code; renderBonCode('', "Ce code n'existe pas. Vérifiez la saisie, ou appelez le 06 47 76 54 17."); return; }
    const b=j.bon;
    if(b.utilise){ bookState.coupon=code; renderBonCode('', 'Ce bon a déjà été utilisé pour une réservation.'); return; }
    if(b.desactive){ bookState.coupon=code; renderBonCode('', "Ce bon n'est plus valable. Appelez le 06 47 76 54 17."); return; }
    bookState.coupon=b.code;
    bookState.giftFormule=b.formule||'';
    bookState.type=(b.seance==='duo'||b.seance==='naissance')?b.seance:'grossesse';
    bookBody.innerHTML='<div class="book-info">Chargement des disponibilités...</div>';
    loadAvailability();
  }catch(e){
    bookState.coupon=code;
    renderBonCode('', 'Vérification impossible pour le moment. Réessayez, ou appelez le 06 47 76 54 17.');
  }
}

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
    const slotBtns=bookViewOnly
      ? avail[bookState.date].map(t=>'<span class="book-slot ro">'+hLabel(t)+'</span>').join('')
      : avail[bookState.date].map(t=>'<button type="button" class="book-slot'+(t===bookState.time?' active':'')+'" data-time="'+t+'">'+hLabel(t)+'</button>').join('');
    slotsHtml='<div class="book-l">Créneaux du '+bookDateLabel(bookState.date)+'</div><div class="book-slots">'+slotBtns+'</div>';
  }else{
    slotsHtml='<div class="book-slot-hint">Choisissez un jour disponible dans le calendrier.</div>';
  }

  const head=bookViewOnly
    ? '<div class="book-head"><span class="book-eyebrow">Mes disponibilités</span><h3>Les créneaux encore libres</h3>'
      +'<p class="book-recap">Repérez la date qui vous convient, puis choisissez votre formule pour réserver.</p></div>'
    : bookState.giftOnly
    ? '<div class="book-head"><span class="book-eyebrow">Votre bon cadeau</span><h3>Choisissez votre créneau</h3>'
      +'<p class="book-recap">'+bookTypeLabel(bookState.type)
      +(bookState.giftFormule?' · formule '+bookState.giftFormule:'')
      +' <span>Séance déjà réglée</span></p></div>'
    : '<div class="book-head"><span class="book-eyebrow">Votre réservation</span><h3>Choisissez votre créneau</h3>'
      +'<p class="book-recap">'+bookTypeLabel(bookState.type)+' <span>Acompte '+bookState.acompte+' €</span></p></div>';

  const foot=bookViewOnly
    ? '<button type="button" class="btn btn-coral book-full" id="bookPick">Choisir une formule</button>'
    : '<button type="button" class="btn btn-coral book-full" id="bookNext"'+(bookState.time?'':' disabled')+'>Continuer</button>';

  bookBody.innerHTML=head
    +'<div class="book-cal"><div class="book-cal-nav">'
    +'<button type="button" class="book-nav" id="bookPrev"'+prevOff+' aria-label="Mois précédent">&lsaquo;</button>'
    +'<span class="book-cal-title">'+bookMonthLabel(ym)+'</span>'
    +'<button type="button" class="book-nav" id="bookNextM"'+nextOff+' aria-label="Mois suivant">&rsaquo;</button></div>'
    +'<div class="book-grid book-dow-row">'+dow+'</div><div class="book-grid">'+cells+'</div></div>'
    +slotsHtml
    +foot;

  bookBody.querySelectorAll('.book-cell[data-date]').forEach(b=>b.addEventListener('click',()=>{bookState.date=b.dataset.date;bookState.time=null;renderBookStep1();}));
  bookBody.querySelectorAll('.book-slot[data-time]').forEach(b=>b.addEventListener('click',()=>{bookState.time=b.dataset.time;renderBookStep1();}));
  const prev=document.getElementById('bookPrev');if(prev)prev.addEventListener('click',()=>{if(!prev.disabled){bookState.viewMonth=bookAddMonth(ym,-1);renderBookStep1();}});
  const nextM=document.getElementById('bookNextM');if(nextM)nextM.addEventListener('click',()=>{if(!nextM.disabled){bookState.viewMonth=bookAddMonth(ym,1);renderBookStep1();}});
  const nx=document.getElementById('bookNext');if(nx)nx.addEventListener('click',()=>{if(bookState.time)renderBookStep2();});
  const pick=document.getElementById('bookPick');if(pick)pick.addEventListener('click',()=>{closeBooking();gotoComposer();});
}

function renderBookStep2(){
  const remise=bookState.remise||0;
  const totalNet=bookState.total-remise;
  // un bon cadeau peut couvrir toute la seance : il ne reste alors rien a payer
  const aPayer=Math.max(0,Math.min(bookState.acompte,totalNet));
  const reste=totalNet-aPayer;
  const cadeau=bookState.kind==='cadeau';
  const libRemise=cadeau?'Bon cadeau':'Code de réduction';
  // venu avec un bon cadeau : le code est deja validé, on ne remontre pas le champ
  const champCode=bookState.giftOnly
    ? '<div class="promo-fixe">Bon cadeau <b>'+esc(bookState.coupon)+'</b> appliqué'
      +(bookState.giftFormule?' · formule '+esc(bookState.giftFormule):'')+'</div>'
    : '<div class="field promo-field"><label for="bPromo">Code de réduction ou bon cadeau <span class="opt">(facultatif)</span></label>'
      +'<div class="promo-row"><input id="bPromo" type="text" autocomplete="off" placeholder="Ex : ABCD-1234" value="'+(bookState.coupon||'')+'">'
      +'<button type="button" class="btn btn-ghost" id="bPromoBtn">'+(remise?'Retirer':'Appliquer')+'</button></div>'
      +'<div class="promo-msg'+(remise?' ok':'')+'" id="bPromoMsg">'+(remise?libRemise+' appliqué : '+euro(remise)+' déduits.':'')+'</div></div>';
  bookBody.innerHTML=
    '<div class="book-head"><span class="book-eyebrow">Vos coordonnées</span><h3>Presque terminé</h3>'
    +'<p class="book-recap">'+bookTypeLabel(bookState.type)+' <span>'+bookDateLabel(bookState.date)+' à '+hLabel(bookState.time)+'</span></p></div>'
    +'<div class="frow"><div class="field"><label for="bPrenom">Prénom</label><input id="bPrenom" type="text" autocomplete="given-name"></div>'
    +'<div class="field"><label for="bNom">Nom</label><input id="bNom" type="text" autocomplete="family-name"></div></div>'
    +'<div class="frow"><div class="field"><label for="bEmail">Email</label><input id="bEmail" type="email" autocomplete="email"></div>'
    +'<div class="field"><label for="bTel">Téléphone</label><input id="bTel" type="tel" autocomplete="tel"></div></div>'
    +champCode
    // sur un bon cadeau on n'affiche aucun montant : la personne qui l'a recu
    // n'a pas a decouvrir le prix de son cadeau
    +(bookState.giftOnly
      ?'<div class="book-sum"><div class="book-sum-l"><span>À régler maintenant</span><b>0 €</b></div>'
       +'<div class="book-sum-note">Votre séance est déjà réglée par le bon cadeau. Rien à payer, ni maintenant, ni le jour J.</div></div>'
      :'<div class="book-sum"><div class="book-sum-l"><span>Total de la séance</span><b>'+euro(bookState.total)+'</b></div>'
       +(remise?'<div class="book-sum-l promo"><span>'+libRemise+'</span><b>- '+euro(remise)+'</b></div>'
               +'<div class="book-sum-l"><span>Nouveau total</span><b>'+euro(totalNet)+'</b></div>':'')
       +(aPayer>0
           ?'<div class="book-sum-l"><span>Acompte à régler maintenant</span><b>'+euro(aPayer)+'</b></div>'
            +'<div class="book-sum-note">Le solde ('+euro(reste)+') se règle le jour de la séance.</div>'
           :'<div class="book-sum-l"><span>À régler maintenant</span><b>0 €</b></div>'
            +'<div class="book-sum-note">Votre bon cadeau couvre la totalité de la séance : il n\'y a rien à payer, ni maintenant, ni le jour J.</div>')
       +'</div>')
    +'<div class="book-err" id="bookErr"></div>'
    +'<div class="book-actions"><button type="button" class="btn btn-ghost" id="bookBack">Retour</button>'
    +'<button type="button" class="btn btn-coral" id="bookPay">'+(aPayer>0?'Payer l\'acompte de '+aPayer+' €':'Confirmer ma réservation')+'</button></div>';
  document.getElementById('bookBack').addEventListener('click',renderBookStep1);
  document.getElementById('bookPay').addEventListener('click',submitBooking);
  const pb=document.getElementById('bPromoBtn');
  if(pb) pb.addEventListener('click',togglePromo);
  const pi=document.getElementById('bPromo');
  if(pi) pi.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();togglePromo();}});
}

/* Applique ou retire un code de reduction (la remise est revalidee au paiement). */
async function togglePromo(){
  const inp=document.getElementById('bPromo');
  const msg=document.getElementById('bPromoMsg');
  const btn=document.getElementById('bPromoBtn');
  if(bookState.remise){ bookState.remise=0; bookState.coupon=''; bookState.kind=''; renderBookStep2(); return; }
  const code=(inp.value||'').trim();
  if(!code){ msg.className='promo-msg err'; msg.textContent='Entrez votre code.'; return; }
  btn.disabled=true; msg.className='promo-msg'; msg.textContent='Vérification...';
  try{
    const r=await fetch(CRM_API+'/mbs-coupon',{method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({code,total:bookState.total})});
    const j=await r.json();
    if(j&&j.valide){ bookState.remise=j.remise; bookState.coupon=code; bookState.kind=j.kind||'promo'; renderBookStep2(); }
    else { msg.className='promo-msg err'; msg.textContent=(j&&j.message)||"Ce code n'est pas valable."; btn.disabled=false; }
  }catch(e){
    msg.className='promo-msg err'; msg.textContent='Vérification impossible, réessayez.'; btn.disabled=false;
  }
}

function bookVal(id){const el=document.getElementById(id);return el?el.value.trim():'';}
function bookErr(msg){const e=document.getElementById('bookErr');if(e){e.textContent=msg;e.classList.add('show');}}
function bookAPayer(){
  if(bookState.giftOnly) return 0;
  return Math.max(0,Math.min(bookState.acompte,bookState.total-(bookState.remise||0)));
}
function resetPayBtn(){const b=document.getElementById('bookPay');if(b){const p=bookAPayer();b.disabled=false;b.textContent=p>0?'Payer l\'acompte de '+p+' €':'Confirmer ma réservation';}}

async function submitBooking(){
  const client={prenom:bookVal('bPrenom'),nom:bookVal('bNom'),email:bookVal('bEmail'),tel:bookVal('bTel')};
  if(!client.prenom||!client.email){bookErr('Indiquez au moins votre prénom et votre email.');return;}
  const gratuit=bookAPayer()===0;
  const btn=document.getElementById('bookPay');btn.disabled=true;
  btn.textContent=gratuit?'Confirmation en cours...':'Redirection vers le paiement...';
  try{
    const r=await fetch(CRM_API+'/mbs-checkout',{method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({type:bookState.type,total:bookState.total,date:bookState.date,time:bookState.time,client,
        coupon:bookState.coupon||'',giftOnly:!!bookState.giftOnly})});
    const j=await r.json();
    if(j.ok&&j.url){window.location.href=j.url;return;}
    // bon cadeau couvrant tout : pas de passage par Stripe, c'est deja confirme
    if(j.ok&&j.gratuit){renderBookGratuit(client);return;}
    if(j.error==='slot_taken'){bookErr('Ce créneau vient d\'être pris. Choisissez-en un autre.');resetPayBtn();loadAvailability();return;}
    if(j.error==='coupon'){
      if(bookState.giftOnly){ renderBonCode('', j.message||"Ce bon n'est plus utilisable."); return; }
      bookErr(j.message||"Ce code n'est pas valable.");bookState.remise=0;bookState.coupon='';bookState.kind='';renderBookStep2();return;
    }
    bookErr('Le paiement en ligne n\'est pas encore actif. Appelez-moi au 06 47 76 54 17 pour réserver.');resetPayBtn();
  }catch(e){
    bookErr('Une erreur est survenue. Réessayez, ou appelez-moi au 06 47 76 54 17.');resetPayBtn();
  }
}

/* Ecran de confirmation quand le bon cadeau couvre tout (aucun passage par Stripe). */
function renderBookGratuit(client){
  bookBody.innerHTML=
    '<div class="book-head"><span class="book-eyebrow">C\'est confirmé</span><h3>Votre séance est réservée</h3>'
    +'<p class="book-recap">'+bookTypeLabel(bookState.type)+' <span>'+bookDateLabel(bookState.date)+' à '+hLabel(bookState.time)+'</span></p></div>'
    +'<div class="book-sum"><div class="book-sum-l"><span>Réglé par bon cadeau</span><b>Oui</b></div>'
    +'<div class="book-sum-l"><span>Reste à payer</span><b>0 €</b></div>'
    +'<div class="book-sum-note">Un email de confirmation part vers '+esc(client.email||'votre adresse')+'. À très vite au studio.</div></div>'
    +'<div class="book-actions"><button type="button" class="btn btn-coral" id="bookDone">Parfait</button></div>';
  const d=document.getElementById('bookDone');
  if(d)d.addEventListener('click',()=>{closeBooking();loadAvailability();});
}

document.querySelectorAll('.js-reserve').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();openBooking();}));
['giftUse','heroBon'].forEach(id=>{
  const b=document.getElementById(id);
  if(b) b.addEventListener('click',openBookingBon);
});

/* "Disponibilites" : on descend vers les formules, puis on ouvre le planning en consultation.
   On attend la FIN du defilement avant d'ouvrir (la modale bloque le scroll du fond). */
function gotoComposer(done){
  const el=document.getElementById('composer');
  if(!el){ if(done)done(); return; }
  const dejaLa=Math.abs(el.getBoundingClientRect().top)<40;
  el.scrollIntoView({behavior:'smooth',block:'start'});
  if(!done) return;
  if(dejaLa){done();return;}
  let last=-1, stable=0, tries=0, bouge=false, fini=false;
  const timer=setInterval(()=>{
    const y=Math.round(window.scrollY);
    if(y!==last){bouge=true;stable=0;last=y;}else{stable++;}
    // on ouvre quand le defilement a demarre PUIS s'est arrete (ou apres 3 s au pire)
    if((bouge&&stable>=3)||++tries>60){
      if(fini)return; fini=true; clearInterval(timer); done();
    }
  },50);
}
document.querySelectorAll('.js-availability').forEach(b=>b.addEventListener('click',e=>{
  e.preventDefault();
  gotoComposer(()=>openBooking(true));
}));
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
chargerDispoNote();

/* =====================================================================
   ASSISTANT DE CHAT (IA)
   Repond aux questions des visiteurs via la fonction mbs-chat du CRM.
   L'historique est conserve sur l'appareil du visiteur (localStorage,
   30 jours) : il retrouve sa conversation meme apres avoir ferme le site.
   ===================================================================== */
(function(){
  const fab=document.getElementById('chatFab');
  const panel=document.getElementById('chatPanel');
  const msgsEl=document.getElementById('chatMsgs');
  const input=document.getElementById('chatInput');
  const sendBtn=document.getElementById('chatSend');
  if(!fab||!panel) return;

  const HELLO="Bonjour ! Je suis l'assistant du studio. Comment vous appelez-vous ? Ensuite, posez-moi toutes vos questions : tarifs, déroulement des séances, conseils grossesse ou naissance.";
  const MAX_AGE=30*24*3600*1000; // on oublie la conversation au bout de 30 jours
  let hist=[], convId=null;
  try{
    const saved=JSON.parse(localStorage.getItem('mbsChat')||'null');
    if(saved&&saved.t&&(Date.now()-saved.t)<MAX_AGE){
      hist=Array.isArray(saved.hist)?saved.hist:[];
      convId=saved.convId||null;
    }else{
      localStorage.removeItem('mbsChat');
    }
  }catch(e){ hist=[]; convId=null; }
  let busy=false, poll=null;

  function save(){
    try{
      localStorage.setItem('mbsChat',JSON.stringify({t:Date.now(),convId,hist:hist.slice(-30)}));
    }catch(e){}
  }
  function reset(){
    hist=[]; convId=null; stopPoll();
    try{ localStorage.removeItem('mbsChat'); }catch(e){}
    paint();
  }
  const QUI={user:'Vous',assistant:'Assistant Mybabyshoot',matt:'Matt de Mybabyshoot'};
  function bubble(role,text,wait){
    const cls=role==='user'?'moi':(role==='matt'?'matt':'ia');
    const d=document.createElement('div');
    d.className='chat-b '+cls+(wait?' wait':'');
    const w=document.createElement('div');
    w.className='chat-who';
    w.textContent=QUI[role]||QUI.assistant;
    const p=document.createElement('div');
    p.textContent=text;
    d.appendChild(w); d.appendChild(p);
    msgsEl.appendChild(d);
    msgsEl.scrollTop=msgsEl.scrollHeight;
    return d;
  }
  function paint(){
    msgsEl.innerHTML='';
    bubble('assistant',HELLO);
    hist.forEach(m=>bubble(m.role,m.content));
  }
  function openChat(){ panel.classList.add('open'); panel.setAttribute('aria-hidden','false'); paint(); startPoll(); setTimeout(()=>input.focus(),120); }
  function closeChat(){ panel.classList.remove('open'); panel.setAttribute('aria-hidden','true'); stopPoll(); }

  /* Matt peut reprendre la main depuis son CRM : on va chercher ses reponses */
  function startPoll(){
    stopPoll();
    if(!convId) return;
    poll=setInterval(async ()=>{
      if(busy||!convId) return;
      try{
        const r=await fetch(CRM_API+'/mbs-chat?conv='+encodeURIComponent(convId)+'&after='+hist.length,{cache:'no-store'});
        if(!r.ok) return;
        const j=await r.json();
        if(j&&j.ok&&j.messages&&j.messages.length){
          j.messages.forEach(m=>{
            // on garde le role "matt" pour afficher que c'est bien lui qui repond
            const role=(m.role==='user'||m.role==='matt')?m.role:'assistant';
            hist.push({role,content:m.content});
            if(panel.classList.contains('open')) bubble(role,m.content);
          });
          save();
        }
      }catch(e){}
    },7000);
  }
  function stopPoll(){ if(poll){ clearInterval(poll); poll=null; } }

  fab.addEventListener('click',()=>{ panel.classList.contains('open')?closeChat():openChat(); });
  document.getElementById('chatClose').addEventListener('click',closeChat);
  const newBtn=document.getElementById('chatNew');
  if(newBtn) newBtn.addEventListener('click',()=>{
    if(!hist.length||confirm('Effacer cette conversation et repartir de zéro ?')) reset();
  });

  async function send(){
    const text=input.value.trim();
    if(!text||busy) return;
    input.value='';
    hist.push({role:'user',content:text}); save();
    bubble('user',text);
    busy=true; sendBtn.disabled=true;
    const waitB=bubble('assistant','L\'assistant écrit...',true);
    try{
      const r=await fetch(CRM_API+'/mbs-chat',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({convId,message:text,
          history:hist.slice(0,-1).slice(-12).map(m=>({role:m.role==='user'?'user':'assistant',content:m.content}))})
      });
      const j=await r.json();
      waitB.remove();
      if(j&&j.convId){ convId=j.convId; save(); startPoll(); }
      if(j&&j.manual){
        // Matt a repris la main : pas de reponse automatique
        bubble('assistant',"Message transmis à Matt. Restez sur cette fenêtre, il vous répond ici même.",true);
      }else{
        const reply=(j&&j.reply)?j.reply:"Je n'arrive pas à répondre pour le moment. Appelez Matt au 06 47 76 54 17 !";
        hist.push({role:'assistant',content:reply}); save();
        bubble('assistant',reply);
      }
    }catch(e){
      waitB.remove();
      bubble('assistant',"Petit souci de connexion. Réessayez, ou appelez Matt au 06 47 76 54 17.");
    }
    busy=false; sendBtn.disabled=false; input.focus();
  }
  sendBtn.addEventListener('click',send);
  input.addEventListener('keydown',e=>{ if(e.key==='Enter') send(); });
})();

/* =====================================================================
   9) BON CADEAU (achat)
   La formule est deja choisie dans le configurateur : le bouton "Offrir un
   bon cadeau" ouvre directement le formulaire de personnalisation.
   L'acheteur paie la totalite et recoit un bon imprimable (bon.html).
   ===================================================================== */
(function(){
  const modal=document.getElementById('giftModal');
  const body=document.getElementById('giftBody');
  const openBtn=document.getElementById('giftOpen');
  const closeBtn=document.getElementById('giftClose');
  if(!modal||!body||!openBtn) return;

  const OFFRES=(window.MBS_BON&&MBS_BON.OFFRES_CADEAU)||[];

  /* La formule choisie dans le configurateur -> l'offre correspondante.
     Les duos portent le prefixe "duo-" (l'id de gamme seul est ambigu :
     "confort" existe des deux cotes). */
  function offreCourante(){
    const id=state.section==='duo' ? 'duo-'+state.gamme : state.gamme;
    return OFFRES.find(o=>o.id===id)||null;
  }

  function err(t){ const e=document.getElementById('giftErr'); if(e){ e.textContent=t; e.classList.add('show'); } }

  function render(){
    const offre=offreCourante();
    if(!offre){
      body.innerHTML='<div class="book-info">Choisissez d\'abord une formule ci-contre, puis revenez ici.'
        +'<br><br>Une question ? Appelez Matt au 06 47 76 54 17.</div>';
      return;
    }
    const duo=offre.duo;
    const quoi=duo?'Séances grossesse et naissance':(state.type==='naissance'?'Séance naissance':'Séance grossesse');
    body.innerHTML=
      '<div class="book-head"><span class="book-eyebrow">Bon cadeau</span><h3>Offrir cette séance</h3>'
      +'<p class="book-recap">Formule '+offre.nom+' <span>'+quoi+' · '+euro(offre.prix)+'</span></p></div>'
      +'<div class="frow"><div class="field"><label for="gPrenom">Votre prénom</label><input id="gPrenom" type="text" autocomplete="given-name"></div>'
      +'<div class="field"><label for="gNom">Votre nom</label><input id="gNom" type="text" autocomplete="family-name"></div></div>'
      +'<div class="frow"><div class="field"><label for="gEmail">Votre email</label><input id="gEmail" type="email" autocomplete="email"></div>'
      +'<div class="field"><label for="gTel">Votre téléphone</label><input id="gTel" type="tel" autocomplete="tel"></div></div>'
      +'<div class="frow"><div class="field"><label for="gPour">Pour qui ?</label><input id="gPour" type="text" placeholder="Son prénom"></div>'
      +'<div class="field"><label for="gMot">Petit mot sur le bon</label><input id="gMot" type="text" maxlength="120" placeholder="Ex : Félicitations !"></div></div>'
      +'<p class="gift-note">Ces deux champs sont facultatifs ; ils seront imprimés sur le bon.</p>'
      +'<div class="book-sum"><div class="book-sum-l"><span>Formule '+offre.nom+'</span><b>'+euro(offre.prix)+'</b></div>'
      +'<div class="book-sum-note">Le bon couvre la formule ; les options éventuelles restent au choix de la personne. '
      +'Après le paiement vous recevez le bon à imprimer, avec son code unique. Elle choisira sa date elle-même. Le bon s\'utilise en une seule fois.</div></div>'
      +'<div class="book-err" id="giftErr"></div>'
      +'<div class="book-actions"><button type="button" class="btn btn-ghost" id="gCancel">Annuler</button>'
      +'<button type="button" class="btn btn-coral" id="gPay">Payer '+euro(offre.prix)+'</button></div>';
    document.getElementById('gCancel').addEventListener('click',close);
    document.getElementById('gPay').addEventListener('click',payer);
  }

  async function payer(){
    const offre=offreCourante();
    if(!offre) return;
    const val=id=>{const el=document.getElementById(id);return el?el.value.trim():'';};
    const prenom=val('gPrenom'), email=val('gEmail');
    if(!prenom||!email){ err('Indiquez au moins votre prénom et votre email.'); return; }
    const btn=document.getElementById('gPay');
    btn.disabled=true; btn.textContent='Redirection vers le paiement...';
    try{
      const r=await fetch(CRM_API+'/mbs-gift',{method:'POST',headers:{'Content-Type':'application/json'},
        body:JSON.stringify({offre:offre.id,seance:offre.duo?'duo':state.type,prenom,nom:val('gNom'),email,tel:val('gTel'),
          pour:val('gPour'),message:val('gMot')})});
      const j=await r.json();
      if(j&&j.ok&&j.url){ window.location.href=j.url; return; }
      err("Le paiement en ligne n'est pas disponible pour le moment. Appelez Matt au 06 47 76 54 17.");
    }catch(e){ err('Une erreur est survenue. Réessayez, ou appelez le 06 47 76 54 17.'); }
    btn.disabled=false; btn.textContent='Payer '+euro(offre.prix);
  }

  function open(){ modal.classList.add('show'); document.body.style.overflow='hidden'; render(); }
  function close(){ modal.classList.remove('show'); document.body.style.overflow=''; }

  openBtn.addEventListener('click',open);
  if(closeBtn) closeBtn.addEventListener('click',close);
  modal.addEventListener('click',e=>{ if(e.target===modal) close(); });

  // retour de Stripe apres l'achat : on renvoie vers la page du bon imprimable
  if(/[?&]cadeau=ok(&|$)/.test(location.search)){
    const sid=(location.search.match(/[?&]session_id=([^&]+)/)||[])[1]||'';
    modal.classList.add('show'); document.body.style.overflow='hidden';
    body.innerHTML='<div class="book-head"><span class="book-eyebrow">Merci</span><h3>Votre bon cadeau est prêt</h3>'
      +'<p class="book-recap">Il part aussi par email <span>Pensez à vérifier vos spams</span></p></div>'
      +'<div class="book-sum"><div class="book-sum-note">Vous pouvez le télécharger en image pour l\'imprimer et l\'offrir en main propre, '
      +'ou simplement transmettre le code. Le bénéficiaire choisira sa date sur ce site.</div></div>'
      +'<div class="book-actions"><button type="button" class="btn btn-ghost" id="gDone">Fermer</button>'
      +'<a class="btn btn-coral" href="bon.html?session='+encodeURIComponent(sid)+'">Voir et imprimer le bon</a></div>';
    const d=document.getElementById('gDone');
    if(d)d.addEventListener('click',()=>{ close(); history.replaceState(null,'',location.pathname); });
  }
})();
