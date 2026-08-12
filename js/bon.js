/* =====================================================================
   BON CADEAU IMPRIMABLE
   Dessine le bon sur un canvas au format A5 paysage, 300 dpi, pour que
   le client puisse le telecharger en JPG et l'imprimer chez lui.
   Utilise par la page bon.html et par l'apercu du site.
   ===================================================================== */
(function(global){

/* Les offres achetables en bon cadeau = les formules du site. Doit rester
   identique cote serveur (GIFT_OFFRES dans netlify/mbs-coupons.mjs) :
   le prix n'est jamais lu depuis le navigateur. */
const OFFRES_CADEAU = [
  { id:'essentielle',   nom:'Essentielle',   prix:290, duo:false },
  { id:'confort',       nom:'Confort',       prix:390, duo:false },
  { id:'prestige',      nom:'Prestige',      prix:490, duo:false },
  { id:'duo-essentiel', nom:'Duo Essentiel', prix:590, duo:true  },
  { id:'duo-confort',   nom:'Duo Confort',   prix:690, duo:true  },
  { id:'duo-prestige',  nom:'Duo Prestige',  prix:890, duo:true  }
];

const SEANCES = {
  grossesse: 'Séance photo grossesse',
  naissance: 'Séance photo naissance',
  duo:       'Séances photo grossesse et naissance'
};

/* Une ambiance par type de seance : la couleur d'accent et le motif changent,
   pour que les bons ne se ressemblent pas tous. */
const AMBIANCES = {
  grossesse: { accent:'#C2A06B', voile:'rgba(194,160,107,.13)', motif:'ventre'  },
  naissance: { accent:'#B0824F', voile:'rgba(176,130,79,.13)',  motif:'lune'    },
  duo:       { accent:'#8C6239', voile:'rgba(140,98,57,.12)',   motif:'anneaux' }
};

/* Quinze habillages au choix de l'acheteuse. Chacun definit son fond, ses
   encres, sa couleur d'accent (filets et motif), l'aspect du cadre du code
   et une texture de fond.
   clair:true sert au rendu : sur un fond sombre, le cadre du code et les
   filets doivent s'eclaircir au lieu de s'assombrir.
   Toute modification ici doit etre repercutee dans STYLES_BON du fichier
   netlify/mbs-coupons.mjs, qui valide le choix recu. */
const STYLES = [
  { id:'creme',        nom:'Crème',            fond:'#FAF4EA', encre:'#322619', doux:'#80705C', accent:'#C2A06B', texture:'aucune' },
  { id:'blanc',        nom:'Blanc pur',        fond:'#FFFFFF', encre:'#2B2B2B', doux:'#7A7A7A', accent:'#C2A06B', texture:'aucune' },
  { id:'blanc-lin',    nom:'Blanc lin',        fond:'#F7F4EF', encre:'#33302B', doux:'#857E73', accent:'#B9A88E', texture:'lin' },
  { id:'ivoire',       nom:'Ivoire pointillé', fond:'#FBF7F0', encre:'#3A322A', doux:'#8A7F70', accent:'#CBB08A', texture:'points' },
  { id:'sable',        nom:'Sable',            fond:'#EFE3D0', encre:'#3B2E1F', doux:'#836F57', accent:'#A5763E', texture:'grain' },
  { id:'rose-poudre',  nom:'Rose poudré',      fond:'#F6EAE6', encre:'#40302C', doux:'#8C7671', accent:'#C08C82', texture:'grain' },
  { id:'terracotta',   nom:'Terracotta',       fond:'#E9D5C6', encre:'#3E2A20', doux:'#876654', accent:'#B4613C', texture:'lin' },
  { id:'vert-sauge',   nom:'Vert sauge',       fond:'#E4E9DE', encre:'#2C332A', doux:'#71785F', accent:'#7C8F63', texture:'points' },
  { id:'vert-anglais', nom:'Vert anglais',     fond:'#1F3D33', encre:'#F2EDE2', doux:'#A9BCAF', accent:'#C9A961', texture:'grain', clair:true },
  { id:'kaki',         nom:'Vert kaki',        fond:'#4A4F3C', encre:'#F3F0E4', doux:'#BFC2AA', accent:'#D0B87E', texture:'lin',   clair:true },
  { id:'kaki-clair',   nom:'Kaki clair',       fond:'#D8D8C4', encre:'#33352A', doux:'#787A62', accent:'#8A8C5F', texture:'rayures' },
  { id:'bleu-canard',  nom:'Bleu canard',      fond:'#14505A', encre:'#EFF4F3', doux:'#A3C2C4', accent:'#D9B26A', texture:'grain', clair:true },
  { id:'bleu-orage',   nom:'Bleu orage',       fond:'#DCE4E7', encre:'#25333A', doux:'#6E828C', accent:'#3E6C7E', texture:'points' },
  { id:'bleu-nuit',    nom:'Bleu nuit',        fond:'#161E33', encre:'#EDEFF6', doux:'#A2A9C0', accent:'#C4A55F', texture:'rayures', clair:true },
  { id:'sombre',       nom:'Sombre',           fond:'#1C1B19', encre:'#F2EFE9', doux:'#A39C90', accent:'#C9A961', texture:'grain', clair:true }
];
const STYLE_DEFAUT = 'creme';
function styleDe(id){ return STYLES.find(function(x){ return x.id===id; }) || STYLES[0]; }

const CREME='#FAF4EA', ENCRE='#322619', DOUX='#80705C', CTA='#5E4430';
const W=2480, H=1748;           // A5 paysage a 300 dpi
const DISPLAY="'Bricolage Grotesque', system-ui, sans-serif";
const SERIF="'Fraunces', Georgia, serif";
const CORPS="'Mulish', system-ui, sans-serif";

function arrondi(c,x,y,w,h,r){
  c.beginPath();
  c.moveTo(x+r,y); c.arcTo(x+w,y,x+w,y+h,r); c.arcTo(x+w,y+h,x,y+h,r);
  c.arcTo(x,y+h,x,y,r); c.arcTo(x,y,x+w,y,r); c.closePath();
}

/* Texte centre avec interlettrage (canvas ne le gere pas partout). */
function espace(c,txt,cx,y,px){
  const l=[...txt];
  const total=l.reduce((s,ch)=>s+c.measureText(ch).width,0)+px*(l.length-1);
  let x=cx-total/2;
  for(const ch of l){ c.fillText(ch,x,y); x+=c.measureText(ch).width+px; }
}

/* Motifs au trait, dans les angles. Un par type de seance. */
function feuille(c,lg,lr){            // une feuille posee sur la tige
  c.beginPath();
  c.moveTo(0,0);
  c.quadraticCurveTo(lg*0.45,-lr, lg,0);
  c.quadraticCurveTo(lg*0.45, lr, 0,0);
  c.stroke();
}
function motif(c,kind,x,y,taille,couleur){
  c.save();
  c.translate(x,y); c.scale(taille/100,taille/100);
  c.strokeStyle=couleur; c.lineWidth=3.2; c.lineCap='round'; c.lineJoin='round';

  if(kind==='ventre'){
    // brindille : une tige courbe et trois paires de feuilles bien ecartees
    c.beginPath();
    c.moveTo(-64,62); c.quadraticCurveTo(-4,4, 62,-66);
    c.stroke();
    const pts=[[-40,36],[-4,4],[32,-34]];
    pts.forEach(([px,py],i)=>{
      const lg=52-i*7;
      c.save(); c.translate(px,py); c.rotate(-Math.PI*0.42); feuille(c,lg,17); c.restore();
      c.save(); c.translate(px,py); c.rotate(Math.PI*0.86); feuille(c,lg,17); c.restore();
    });
    // bourgeon au bout de la tige
    c.save(); c.translate(62,-66); c.rotate(-Math.PI*0.25); feuille(c,30,12); c.restore();
  }else if(kind==='lune'){
    // croissant de lune (deux arcs) et trois petites etoiles
    c.beginPath(); c.arc(0,0,46,Math.PI*0.40,Math.PI*1.60); c.stroke();
    c.beginPath(); c.arc(-22,0,44,Math.PI*1.62,Math.PI*0.38,true); c.stroke();
    [[54,-44,12],[70,2,8],[36,-70,7]].forEach(([sx,sy,r])=>{
      c.beginPath();
      c.moveTo(sx,sy-r);      c.quadraticCurveTo(sx,sy,sx+r,sy);
      c.quadraticCurveTo(sx,sy,sx,sy+r); c.quadraticCurveTo(sx,sy,sx-r,sy);
      c.quadraticCurveTo(sx,sy,sx,sy-r); c.stroke();
    });
  }else{
    // deux anneaux entrelaces
    c.beginPath(); c.arc(-24,0,40,0,Math.PI*2); c.stroke();
    c.beginPath(); c.arc(24,0,40,0,Math.PI*2); c.stroke();
  }
  c.restore();
}

/* Textures de fond, tres discretes : elles doivent se sentir a l'impression
   sans jamais gener la lecture. Le motif est deterministe, pour qu'un meme
   bon redessine donne exactement la meme image. */
function texture(c, st){
  if(!st.texture || st.texture==='aucune') return;
  c.save();
  c.strokeStyle = st.encre; c.fillStyle = st.encre;

  if(st.texture==='grain'){
    // semis regulier mais decale, plus organique qu'une grille
    c.globalAlpha = st.clair ? .055 : .045;
    for(let y=0; y<H; y+=13){
      for(let x=((y/13)%2)*7; x<W; x+=14){
        const r = ((x*7 + y*13) % 5) / 5;
        if(r > .55) continue;
        c.beginPath(); c.arc(x, y, 1.5 + r, 0, Math.PI*2); c.fill();
      }
    }
  } else if(st.texture==='lin'){
    c.globalAlpha = st.clair ? .07 : .05;
    c.lineWidth = 1.4;
    for(let x=0; x<W; x+=9){ c.beginPath(); c.moveTo(x,0); c.lineTo(x,H); c.stroke(); }
    c.globalAlpha = st.clair ? .05 : .035;
    for(let y=0; y<H; y+=9){ c.beginPath(); c.moveTo(0,y); c.lineTo(W,y); c.stroke(); }
  } else if(st.texture==='points'){
    c.globalAlpha = st.clair ? .09 : .07;
    for(let y=22; y<H; y+=44){
      for(let x=22; x<W; x+=44){ c.beginPath(); c.arc(x,y,2.6,0,Math.PI*2); c.fill(); }
    }
  } else if(st.texture==='rayures'){
    c.globalAlpha = st.clair ? .06 : .045;
    c.lineWidth = 2;
    for(let x=-H; x<W; x+=26){
      c.beginPath(); c.moveTo(x,0); c.lineTo(x+H,H); c.stroke();
    }
  }
  c.restore();
}

/* data = { formule, seance, style, code, pour, message, expire } */
function dessiner(canvas, data){
  const c=canvas.getContext('2d');
  canvas.width=W; canvas.height=H;
  const amb=AMBIANCES[data.seance]||AMBIANCES.grossesse;
  const st=styleDe(data.style);

  c.fillStyle=st.fond; c.fillRect(0,0,W,H);
  texture(c,st);

  // halo tres doux en haut a gauche, dans la couleur d'accent du style
  const g=c.createRadialGradient(430,300,60,430,300,1500);
  g.addColorStop(0,st.accent+(st.clair?'26':'20')); g.addColorStop(1,'rgba(0,0,0,0)');
  c.fillStyle=g; c.fillRect(0,0,W,H);

  // double filet
  c.strokeStyle=st.accent; c.lineWidth=5;
  arrondi(c,96,96,W-192,H-192,44); c.stroke();
  c.globalAlpha=.5; c.lineWidth=2;
  arrondi(c,128,128,W-256,H-256,30); c.stroke();
  c.globalAlpha=1;

  // le motif reste lie au type de seance, seule sa couleur suit le style
  motif(c,amb.motif,318,322,190,st.accent);
  c.save(); c.translate(W-318,H-322); c.rotate(Math.PI);
  motif(c,amb.motif,0,0,190,st.accent); c.restore();

  c.textAlign='center'; c.textBaseline='alphabetic';

  // entete
  c.fillStyle=st.doux; c.font='700 44px '+CORPS;
  espace(c,'MYBABYSHOOT',W/2,300,22);
  c.strokeStyle=st.accent; c.lineWidth=3;
  c.beginPath(); c.moveTo(W/2-110,345); c.lineTo(W/2+110,345); c.stroke();

  // titre
  c.fillStyle=st.encre; c.font='italic 400 176px '+SERIF;
  c.fillText('Bon cadeau',W/2,540);

  // la prestation offerte (le montant n'apparait jamais sur un bon cadeau)
  const seanceTxt=SEANCES[data.seance]||'';
  c.fillStyle=st.encre;
  c.font=(seanceTxt.length>28?'700 76px ':'700 96px ')+DISPLAY;
  c.fillText(seanceTxt,W/2,706);
  if(data.formule){
    c.fillStyle=st.doux; c.font='400 52px '+CORPS;
    c.fillText('Formule '+data.formule,W/2,784);
  }

  // destinataire et petit mot
  let y=920;
  if(data.pour){
    c.fillStyle=st.encre; c.font='italic 400 68px '+SERIF;
    c.fillText('Pour '+data.pour,W/2,y); y+=78;
  }
  if(data.message){
    c.fillStyle=st.doux; c.font='italic 400 46px '+SERIF;
    const mots=String(data.message).split(/\s+/); let ligne='', lignes=[];
    for(const m of mots){
      const essai=ligne?ligne+' '+m:m;
      if(c.measureText(essai).width>1500){ lignes.push(ligne); ligne=m; } else ligne=essai;
    }
    if(ligne) lignes.push(ligne);
    for(const l of lignes.slice(0,2)){ c.fillText(l,W/2,y); y+=60; }
  }

  // code
  const bw=1150, bh=206, bx=(W-bw)/2, by=1180;
  // le code doit rester le plus lisible de la page, y compris photocopie :
  // fond clair sur style clair, cadre translucide sur style sombre
  c.fillStyle = st.clair ? 'rgba(255,255,255,.09)' : '#ffffff';
  arrondi(c,bx,by,bw,bh,26); c.fill();
  c.strokeStyle=st.accent; c.lineWidth=5; arrondi(c,bx,by,bw,bh,26); c.stroke();
  c.fillStyle=st.doux; c.font='700 32px '+CORPS;
  espace(c,'CODE À UTILISER',W/2,by+68,10);
  // les codes courts (6 caracteres) meritent d'occuper le cadre
  const court=String(data.code||'').length<=8;
  c.fillStyle=st.encre; c.font=(court?'800 108px ':'800 76px ')+CORPS;
  espace(c,data.code,W/2,by+164,court?22:12);

  // pied de page
  c.fillStyle=st.doux; c.font='400 40px '+CORPS;
  c.fillText('Valable jusqu’au '+data.expire+'  ·  à utiliser sur mybabyshoot.fr',W/2,1512);
  c.font='400 36px '+CORPS;
  c.fillText('Studio à La Mulatière (Lyon)  ·  06 47 76 54 17',W/2,1572);
}

/* Attend que les polices soient pretes, sinon le canvas dessine en Times. */
async function pretesPourDessiner(){
  if(!document.fonts) return;
  try{
    await Promise.all([
      document.fonts.load("italic 400 176px 'Fraunces'"),
      document.fonts.load("700 96px 'Bricolage Grotesque'"),
      document.fonts.load("800 120px 'Bricolage Grotesque'"),
      document.fonts.load("800 78px 'Mulish'"),
      document.fonts.load("400 40px 'Mulish'")
    ]);
    await document.fonts.ready;
  }catch(e){}
}

global.MBS_BON={ OFFRES_CADEAU, SEANCES, STYLES, STYLE_DEFAUT, styleDe, dessiner, pretesPourDessiner, W, H };

})(window);
