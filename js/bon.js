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

/* data = { formule, seance, montant, code, pour, message, expire } */
function dessiner(canvas, data){
  const c=canvas.getContext('2d');
  canvas.width=W; canvas.height=H;
  const amb=AMBIANCES[data.seance]||AMBIANCES.grossesse;

  c.fillStyle=CREME; c.fillRect(0,0,W,H);

  // halo tres doux en haut a gauche
  const g=c.createRadialGradient(430,300,60,430,300,1500);
  g.addColorStop(0,amb.voile); g.addColorStop(1,'rgba(0,0,0,0)');
  c.fillStyle=g; c.fillRect(0,0,W,H);

  // double filet
  c.strokeStyle=amb.accent; c.lineWidth=5;
  arrondi(c,96,96,W-192,H-192,44); c.stroke();
  c.globalAlpha=.5; c.lineWidth=2;
  arrondi(c,128,128,W-256,H-256,30); c.stroke();
  c.globalAlpha=1;

  motif(c,amb.motif,318,322,190,amb.accent);
  c.save(); c.translate(W-318,H-322); c.rotate(Math.PI);
  motif(c,amb.motif,0,0,190,amb.accent); c.restore();

  c.textAlign='center'; c.textBaseline='alphabetic';

  // entete
  c.fillStyle=DOUX; c.font='700 44px '+CORPS;
  espace(c,'MYBABYSHOOT',W/2,300,22);
  c.strokeStyle=amb.accent; c.lineWidth=3;
  c.beginPath(); c.moveTo(W/2-110,345); c.lineTo(W/2+110,345); c.stroke();

  // titre
  c.fillStyle=ENCRE; c.font='italic 400 176px '+SERIF;
  c.fillText('Bon cadeau',W/2,540);

  // la prestation offerte (le montant n'apparait jamais sur un bon cadeau)
  const seanceTxt=SEANCES[data.seance]||'';
  c.fillStyle=ENCRE;
  c.font=(seanceTxt.length>28?'700 76px ':'700 96px ')+DISPLAY;
  c.fillText(seanceTxt,W/2,706);
  if(data.formule){
    c.fillStyle=DOUX; c.font='400 52px '+CORPS;
    c.fillText('Formule '+data.formule,W/2,784);
  }

  // destinataire et petit mot
  let y=920;
  if(data.pour){
    c.fillStyle=ENCRE; c.font='italic 400 68px '+SERIF;
    c.fillText('Pour '+data.pour,W/2,y); y+=78;
  }
  if(data.message){
    c.fillStyle=DOUX; c.font='italic 400 46px '+SERIF;
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
  c.fillStyle='#ffffff'; arrondi(c,bx,by,bw,bh,26); c.fill();
  c.strokeStyle=CTA; c.lineWidth=5; arrondi(c,bx,by,bw,bh,26); c.stroke();
  c.fillStyle=DOUX; c.font='700 32px '+CORPS;
  espace(c,'CODE À UTILISER',W/2,by+68,10);
  // les codes courts (6 caracteres) meritent d'occuper le cadre
  const court=String(data.code||'').length<=8;
  c.fillStyle=ENCRE; c.font=(court?'800 108px ':'800 76px ')+CORPS;
  espace(c,data.code,W/2,by+164,court?22:12);

  // pied de page
  c.fillStyle=DOUX; c.font='400 40px '+CORPS;
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

global.MBS_BON={ OFFRES_CADEAU, SEANCES, dessiner, pretesPourDessiner, W, H };

})(window);
