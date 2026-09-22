(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();function Q(t){const a=document.getElementById(t);a&&(a.classList.add("active"),document.body.style.overflow="hidden")}function V(t){const a=document.getElementById(t);a&&(a.classList.remove("active"),document.body.style.overflow="")}function le(){if(document.getElementById("modals-container"))return;const t=document.createElement("div");t.id="modals-container",t.innerHTML=`
    <!-- Modale : À propos -->
    <div id="about-modal" class="modal-backdrop" role="dialog" aria-labelledby="about-title" aria-modal="true">
      <div class="modal-dialog">
        <div class="modal-header">
          <h2 id="about-title" class="modal-title">À propos de la plateforme</h2>
          <button type="button" class="modal-close-btn" data-close="about-modal" aria-label="Fermer la fenêtre">✕</button>
        </div>
        <div class="modal-body">
          <p>
            Notre plateforme de <strong>Gestion d'une Gare Routière</strong> est conçue pour moderniser et simplifier la réservation de tickets de transport interurbain en Côte d'Ivoire.
          </p>
          <p>
            Née de la volonté de fluidifier les départs et d'éliminer les longues files d'attente en gare, elle permet à chaque voyageur de réserver son trajet depuis son domicile, d'obtenir les horaires précis et les indications claires vers les points d'embarquement.
          </p>
          <p style="color: var(--color-text-muted); font-size: var(--font-size-sm); margin-bottom: 0;">
            Société de transport partenaire certifiée — Confort, sécurité et ponctualité garantis.
          </p>
        </div>
      </div>
    </div>

    <!-- Modale : Nous contacter -->
    <div id="contact-modal" class="modal-backdrop" role="dialog" aria-labelledby="contact-title" aria-modal="true">
      <div class="modal-dialog">
        <div class="modal-header">
          <h2 id="contact-title" class="modal-title">Nous contacter</h2>
          <button type="button" class="modal-close-btn" data-close="contact-modal" aria-label="Fermer la fenêtre">✕</button>
        </div>
        <div class="modal-body">
          <p>
            Une question sur un départ, un itinéraire ou une réservation ? Notre équipe d'assistance aux voyageurs est disponible 7j/7.
          </p>
          <div style="background-color: rgba(255, 255, 255, 0.05); padding: var(--spacing-4); border-radius: var(--radius-md); margin-bottom: var(--spacing-4);">
            <p style="margin-bottom: var(--spacing-2); color: var(--color-text-primary);">
              📍 <strong>Gare centrale :</strong> Abidjan, Côte d'Ivoire
            </p>
            <p style="margin-bottom: var(--spacing-2); color: var(--color-text-primary);">
              📞 <strong>Assistance téléphonique :</strong> +225 01 02 03 04 05
            </p>
            <p style="margin-bottom: 0; color: var(--color-text-primary);">
              ✉️ <strong>Courriel :</strong> support@gare-express.ci
            </p>
          </div>
          <p style="color: var(--color-text-muted); font-size: var(--font-size-sm); margin-bottom: 0;">
            Horaires d'ouverture des guichets : Du lundi au dimanche, de 05h00 à 22h00.
          </p>
        </div>
      </div>
    </div>
  `,document.body.appendChild(t),t.querySelectorAll("[data-close]").forEach(a=>{a.addEventListener("click",()=>{const e=a.getAttribute("data-close");V(e)})}),t.querySelectorAll(".modal-backdrop").forEach(a=>{a.addEventListener("click",e=>{e.target===a&&V(a.id)})}),document.addEventListener("keydown",a=>{if(a.key==="Escape"){const e=document.querySelector(".modal-backdrop.active");e&&V(e.id)}})}let R=null,T=localStorage.getItem("app_sound_enabled")!=="false";function ce(){if(!R&&typeof window<"u"){const t=window.AudioContext||window.webkitAudioContext;t&&(R=new t)}return R&&R.state==="suspended"&&R.resume(),R}const S={isEnabled(){return T},toggleSound(){return T=!T,localStorage.setItem("app_sound_enabled",T?"true":"false"),T&&this.play("click"),T},play(t="click"){if(T)try{const a=ce();if(!a)return;const e=a.currentTime;if(t==="click"){const s=a.createOscillator(),r=a.createGain();s.type="sine",s.frequency.setValueAtTime(800,e),s.frequency.exponentialRampToValueAtTime(300,e+.05),r.gain.setValueAtTime(.15,e),r.gain.exponentialRampToValueAtTime(.01,e+.05),s.connect(r),r.connect(a.destination),s.start(e),s.stop(e+.05)}else if(t==="seat"){const s=a.createOscillator(),r=a.createGain();s.type="triangle",s.frequency.setValueAtTime(520,e),s.frequency.exponentialRampToValueAtTime(780,e+.08),r.gain.setValueAtTime(.2,e),r.gain.exponentialRampToValueAtTime(.01,e+.08),s.connect(r),r.connect(a.destination),s.start(e),s.stop(e+.08)}else if(t==="success")[523.25,659.25,783.99,1046.5].forEach((r,o)=>{const n=a.createOscillator(),c=a.createGain(),p=e+o*.09;n.type="triangle",n.frequency.setValueAtTime(r,p),c.gain.setValueAtTime(.25,p),c.gain.exponentialRampToValueAtTime(.001,p+.35),n.connect(c),c.connect(a.destination),n.start(p),n.stop(p+.35)});else if(t==="horn"){const s=a.createOscillator(),r=a.createOscillator(),o=a.createGain();s.type="sawtooth",r.type="sawtooth",s.frequency.setValueAtTime(370,e),r.frequency.setValueAtTime(440,e),o.gain.setValueAtTime(.12,e),o.gain.exponentialRampToValueAtTime(.01,e+.25),s.connect(o),r.connect(o),o.connect(a.destination),s.start(e),r.start(e),s.stop(e+.25),r.stop(e+.25)}else if(t==="bubble"){const s=a.createOscillator(),r=a.createGain();s.type="sine",s.frequency.setValueAtTime(400,e),s.frequency.exponentialRampToValueAtTime(900,e+.1),r.gain.setValueAtTime(.18,e),r.gain.exponentialRampToValueAtTime(.01,e+.1),s.connect(r),r.connect(a.destination),s.start(e),s.stop(e+.1)}}catch{}}};function ee(){S.play("success");const t=document.createElement("canvas");t.className="confetti-canvas-overlay",document.body.appendChild(t);const a=t.getContext("2d");let e=t.width=window.innerWidth,s=t.height=window.innerHeight;const r=["#2563eb","#3b82f6","#10b981","#fbbf24","#f59e0b","#ec4899","#ffffff"],o=[],n=140;for(let u=0;u<n;u++)o.push({x:e*.5+(Math.random()-.5)*200,y:s*.4+(Math.random()-.5)*100,vx:(Math.random()-.5)*18,vy:(Math.random()-.8)*20-4,size:Math.random()*8+6,color:r[Math.floor(Math.random()*r.length)],rotation:Math.random()*360,vRot:(Math.random()-.5)*12,opacity:1,shape:Math.random()>.4?"rect":"circle"});let c;const p=Date.now();function f(){const u=Date.now()-p;a.clearRect(0,0,e,s);let v=0;o.forEach(i=>{i.x+=i.vx,i.y+=i.vy,i.vy+=.45,i.vx*=.98,i.rotation+=i.vRot,u>1800&&(i.opacity-=.02),i.opacity>0&&i.y<s+50&&(v++,a.save(),a.translate(i.x,i.y),a.rotate(i.rotation*Math.PI/180),a.globalAlpha=Math.max(0,i.opacity),a.fillStyle=i.color,i.shape==="rect"?a.fillRect(-i.size/2,-i.size/2,i.size,i.size*.6):(a.beginPath(),a.arc(0,0,i.size/2,0,Math.PI*2),a.fill()),a.restore())}),v>0&&u<4e3?c=requestAnimationFrame(f):(cancelAnimationFrame(c),t.parentNode&&t.parentNode.removeChild(t))}f()}function O(t=document){t.querySelectorAll(".btn-primary-blue, .btn-card-white, .btn-back-3d, .btn-nav-link").forEach(e=>{e.dataset.hasRipple||(e.dataset.hasRipple="true",e.classList.add("btn-interactive"),e.addEventListener("click",s=>{S.play("click");const r=e.getBoundingClientRect(),o=document.createElement("span"),n=Math.max(r.width,r.height),c=n/2;o.style.width=o.style.height=`${n}px`,o.style.left=`${s.clientX-r.left-c}px`,o.style.top=`${s.clientY-r.top-c}px`,o.classList.add("ripple-circle");const p=e.querySelector(".ripple-circle");p&&p.remove(),e.appendChild(o),setTimeout(()=>{o.remove()},600)}))})}function F(t=document){t.querySelectorAll(".card-blue, .departure-card, .feature-card, .profile-hero-card").forEach(e=>{if(e.closest(".courier-container")||e.closest(".no-tilt")||e.classList.contains("no-tilt")||e.classList.contains("courier-receipt-card")||document.body.classList.contains("page-courier")){e.style.transform="none";return}e.dataset.hasTilt||(e.dataset.hasTilt="true",e.addEventListener("mousemove",s=>{if(e.closest(".courier-container")||document.body.classList.contains("page-courier")){e.style.transform="none";return}const r=e.getBoundingClientRect(),o=s.clientX-r.left,n=s.clientY-r.top,c=r.width/2,p=r.height/2,f=(n-p)/p*-5,u=(o-c)/c*5;e.style.transform=`perspective(1000px) rotateX(${f.toFixed(2)}deg) rotateY(${u.toFixed(2)}deg) translateY(-2px)`}),e.addEventListener("mouseleave",()=>{e.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)"}))})}function de(t=document){t.querySelectorAll("[data-counter-target]").forEach(e=>{const s=parseInt(e.getAttribute("data-counter-target"),10);if(isNaN(s))return;let r=0;const o=1200,n=25,c=o/n,p=s/c,f=setInterval(()=>{r+=p,r>=s?(e.textContent=s.toLocaleString("fr-FR"),clearInterval(f)):e.textContent=Math.floor(r).toLocaleString("fr-FR")},n)})}const pe={horaires:"🚌 Les départs ont lieu tous les jours : 1er départ (06h30 - Matinal), 2e départ (12h00 - Midi) et 3e départ (17h30 - Soir). Présentez-vous 30 min avant l'embarquement !",paiement:"💳 Vous pouvez régler votre billet en 1 clic par Wave, Orange Money, MTN MoMo ou Moov Flooz sans aucun frais supplémentaire.",colis:"📦 Vous pouvez expédier vos courriers, vivres et marchandises via l'onglet « Fret & Colis » (#/courier). Un code PIN secret est transmis par SMS au destinataire pour le retrait sécurisé !",bagages:"🧳 Chaque passager a droit à 1 valise en soute (jusqu'à 25 kg) + 1 bagage à main gratuit. Les colis volumineux font l'objet d'un supplément au guichet.",gares:"📍 À Abidjan, les principales gares sont : Gare Internationale d'Adjamé (Bd Nangui Abrogoua), Gare UTB Yopougon Siporex, et Gare de Treichville.",ticket:"🎟️ Une fois votre paiement validé, votre billet électronique officiel est généré instantanément avec un QR Code. Vous pouvez le présenter sur votre smartphone ou l'imprimer !"};function ue(){if(document.getElementById("assistant-bot-root"))return;const a=document.createElement("div");a.id="assistant-bot-root",a.className="assistant-widget-container",a.innerHTML=`
    <div class="assistant-chat-window" id="assistant-window">
      <div class="assistant-chat-header">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 1.2rem;">🤖</span>
          <div>
            <strong style="color: #ffffff; font-size: var(--font-size-xs); display: block;">Assistant Gare Express</strong>
            <span style="font-size: 10px; color: #34d399;">● En ligne 24h/24</span>
          </div>
        </div>
        <button type="button" id="btn-close-chat" style="background: transparent; border: none; color: #cbd5e1; font-size: 16px; cursor: pointer;">✕</button>
      </div>

      <div class="assistant-chat-messages" id="chat-messages-container">
        <div class="chat-bubble bot">
          👋 Bonjour cher voyageur ! Je suis votre assistant virtuel. Comment puis-je vous aider aujourd'hui ?
        </div>
      </div>

      <div class="assistant-quick-prompts">
        <button type="button" class="quick-chip-btn" data-topic="colis">📦 Fret & Colis</button>
        <button type="button" class="quick-chip-btn" data-topic="horaires">🕐 Horaires</button>
        <button type="button" class="quick-chip-btn" data-topic="paiement">💳 Paiement</button>
        <button type="button" class="quick-chip-btn" data-topic="bagages">🧳 Bagages</button>
        <button type="button" class="quick-chip-btn" data-topic="ticket">🎟️ Billet</button>
      </div>
    </div>

    <button type="button" class="assistant-trigger-btn" id="btn-toggle-assistant" aria-label="Ouvrir l'assistant voyageur">
      <span>💬</span>
      <span class="assistant-badge-alert">1</span>
    </button>
  `,document.body.appendChild(a);const e=a.querySelector("#assistant-window"),s=a.querySelector("#btn-toggle-assistant"),r=a.querySelector("#btn-close-chat"),o=a.querySelector("#chat-messages-container"),n=a.querySelectorAll(".quick-chip-btn"),c=a.querySelector(".assistant-badge-alert");function p(){S.play("bubble"),e.classList.toggle("active")&&c&&(c.style.display="none")}s.addEventListener("click",p),r.addEventListener("click",p),n.forEach(f=>{f.addEventListener("click",()=>{S.play("click");const u=f.getAttribute("data-topic"),v=f.textContent,i=pe[u]||"Je suis à votre disposition pour vous orienter dans vos voyages !",m=document.createElement("div");m.className="chat-bubble user",m.textContent=v,o.appendChild(m),setTimeout(()=>{S.play("bubble");const y=document.createElement("div");y.className="chat-bubble bot",y.textContent=i,o.appendChild(y),o.scrollTop=o.scrollHeight},400),o.scrollTop=o.scrollHeight})})}const te="/assets/logo-CKy6Vzk5.png",q=["Abidjan","Bondoukou","Bouaké","Yamoussoukro","Korhogo","San-Pédro","Man","Daloa"],me=[{id:"trip-abj-bdk",departureCity:"Abidjan",arrivalCity:"Bondoukou",distanceKm:420,estimatedDuration:"7h 30min",departures:[{id:"dep-abj-bdk-1",rankLabel:"1er Départ",time:"06h30",stationName:"Gare Principale d'Adjamé (Quai Nord)",stationAddress:"Adjamé Liberté, à 100m du grand carrefour",directions:"Emprunter le boulevard principal, quai n°3 réservé aux lignes de l'Est (Bondoukou / Bouna). Présentation recommandée 30 minutes avant le départ.",busType:"Car Grand Confort VIP (Climatisé, Wifi, Prises USB)",company:"Compagnie Express du Zanzan",priceCfa:7500,availableSeats:18},{id:"dep-abj-bdk-2",rankLabel:"2e Départ",time:"10h00",stationName:"Gare Routière d'Adjamé — Pôle Est",stationAddress:"Boulevard Nangui Abrogoua, Face Pharmacie Centrale",directions:"Accès direct par le couloir central des cars interurbains. Guichet d'enregistrement et dépose bagages Quai 2.",busType:"Car Standard 60 places (Climatisation active)",company:"Compagnie Express du Zanzan",priceCfa:7e3,availableSeats:24},{id:"dep-abj-bdk-3",rankLabel:"3e Départ",time:"14h30",stationName:"Gare de Yopougon Siporex",stationAddress:"Carrefour Siporex, Terminus des lignes Est",directions:"Point d'embarquement côté autoroute du Nord avant bifurcation vers l'Est. Parking voyageurs disponible.",busType:"Car VIP Confort Plus (Climatisé, Écrans individuels)",company:"Union des Transporteurs de l'Est",priceCfa:8e3,availableSeats:12}]},{id:"trip-abj-bke",departureCity:"Abidjan",arrivalCity:"Bouaké",distanceKm:350,estimatedDuration:"4h 45min",departures:[{id:"dep-abj-bke-1",rankLabel:"1er Départ",time:"07h00",stationName:"Gare d'Adjamé Renaissance",stationAddress:"Boulevard de la Paix, Adjamé",directions:"Quai réservé aux lignes Centre & Nord. Voie express directe autoroute.",busType:"Car VIP Grand Tourisme",company:"Société Nationale de Transport",priceCfa:6e3,availableSeats:15},{id:"dep-abj-bke-2",rankLabel:"2e Départ",time:"11h30",stationName:"Gare de Yopougon Gesco",stationAddress:"Sortie Autoroute du Nord, Gesco",directions:"Embarquement rapide en bordure d'autoroute, idéal pour les résidents de Yopougon.",busType:"Car Standard Confort",company:"Société Nationale de Transport",priceCfa:5500,availableSeats:28}]},{id:"trip-abj-yakro",departureCity:"Abidjan",arrivalCity:"Yamoussoukro",distanceKm:240,estimatedDuration:"2h 45min",departures:[{id:"dep-abj-yak-1",rankLabel:"1er Départ",time:"08h00",stationName:"Gare Routière Internationale d'Adjamé",stationAddress:"Adjamé Cité Fairmont",directions:"Hall départ direct autoroute de Yamoussoukro. Enregistrement quai A.",busType:"Car Navette Express Directe",company:"Capitale Express Transport",priceCfa:4500,availableSeats:30}]},{id:"trip-bdk-abj",departureCity:"Bondoukou",arrivalCity:"Abidjan",distanceKm:420,estimatedDuration:"7h 30min",departures:[{id:"dep-bdk-abj-1",rankLabel:"1er Départ",time:"06h00",stationName:"Gare Centrale de Bondoukou",stationAddress:"Quartier Zanzan, Face Grand Marché",directions:"Présentation des voyageurs dès 05h30 pour l'étiquetage des bagages et la validation du ticket en ligne.",busType:"Car Grand Confort VIP",company:"Compagnie Express du Zanzan",priceCfa:7500,availableSeats:20}]}];function ae(t,a){const e=me.find(s=>s.departureCity.toLowerCase()===t.toLowerCase()&&s.arrivalCity.toLowerCase()===a.toLowerCase());return e||{id:`trip-${t.toLowerCase()}-${a.toLowerCase()}`,departureCity:t,arrivalCity:a,distanceKm:320,estimatedDuration:"5h 00min",departures:[{id:`dep-${t.toLowerCase()}-1`,rankLabel:"1er Départ",time:"07h30",stationName:`Gare Centrale de ${t}`,stationAddress:`Boulevard principal de ${t}`,directions:`Se rendre au hall d'embarquement n°1 de ${t} avec la référence de réservation.`,busType:"Car Confort Interurbain",company:"Réseau National des Transporteurs",priceCfa:6e3,availableSeats:22},{id:`dep-${t.toLowerCase()}-2`,rankLabel:"2e Départ",time:"13h00",stationName:`Gare Routière Sud de ${t}`,stationAddress:`Carrefour de la Paix, ${t}`,directions:"Embarquement direct voie B. Dépose des bagages 20 minutes avant le départ.",busType:"Car Confort Interurbain",company:"Réseau National des Transporteurs",priceCfa:6e3,availableSeats:16}]}}const N="http://localhost:5000/api",fe=4e3;async function A(t,a={},e=fe){const s=new AbortController,r=setTimeout(()=>s.abort(),e);try{return await fetch(t,{...a,signal:s.signal})}finally{clearTimeout(r)}}const B={async checkHealth(t=4e3){try{const a=await A(`${N}/health`,{},t);if(a.ok)return(await a.json().catch(()=>({status:"healthy"}))).status==="healthy"||a.status===200}catch{}return!1},async getCities(){try{const t=await A(`${N}/trips/cities`);if(t.ok){const a=await t.json();if(a.success&&Array.isArray(a.data))return a.data}}catch{}return[...q]},async searchTrips(t,a){try{const e=new URLSearchParams({from:t,to:a}),s=await A(`${N}/trips/search?${e.toString()}`);if(s.ok){const r=await s.json();if(r.success&&r.data)return r.data}}catch{}return ae(t,a)},async createReservation(t){try{const a=await A(`${N}/trips/reservations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(a.ok){const e=await a.json();if(e.success&&e.data)return e.data}}catch{}return{bookingRef:`GR-${Date.now().toString().slice(-6)}`,createdAt:new Date().toISOString(),...t,status:"CONFIRMED"}},async getTicketByReference(t){try{const e=await A(`${N}/trips/tickets/${encodeURIComponent(t)}`);if(e.ok){const s=await e.json();if(s.success&&s.data)return s.data}}catch{}return JSON.parse(localStorage.getItem("user_tickets_history")||"[]").find(e=>e.bookingRef===t)||null},async getPassengerHistory(t){try{const a=await A(`${N}/trips/passenger/${encodeURIComponent(t)}/history`);if(a.ok){const e=await a.json();if(e.success&&Array.isArray(e.data))return e.data}}catch{}return JSON.parse(localStorage.getItem("user_tickets_history")||"[]")},async getPaymentOperators(){try{const t=await A(`${N}/payments/operators`);if(t.ok){const a=await t.json();if(a.success&&Array.isArray(a.data))return a.data}}catch{}return[{id:"wave",name:"Wave Côte d'Ivoire",feePercentage:1},{id:"orange",name:"Orange Money",feePercentage:1},{id:"mtn",name:"MTN Mobile Money",feePercentage:1},{id:"moov",name:"Moov Money Flooz",feePercentage:1}]},async initiatePayment(t){try{const a=await A(`${N}/payments/initiate`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(a.ok){const e=await a.json();if(e.success&&e.data)return e.data}}catch{}return{success:!0,transaction:{transactionId:`TXN-${(t.operatorId||"LOCAL").toUpperCase()}-${Date.now().toString().slice(-6)}`,bookingRef:t.bookingRef||"GR-LOC",amountCfa:t.amountCfa,completedAt:new Date().toISOString(),status:"COMPLETED"}}},async login(t){return(await A(`${N}/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()},async register(t){return(await A(`${N}/auth/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()},async updateProfile(t){try{const a=await A(`${N}/auth/profile`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(a.ok){const e=await a.json();if(e.success&&e.data)return e.data}}catch{}return sessionStorage.setItem("current_user",JSON.stringify(t)),localStorage.setItem("saved_passenger_profile",JSON.stringify(t)),{success:!0,data:t}},async changePassword(t){try{const a=await A(`${N}/auth/password`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(a.ok)return a.json()}catch{}return{success:!0,message:"Mot de passe mis à jour avec succès."}}},ve=9e4,ge=2500,be=1200;function ye(t={}){if(sessionStorage.getItem("gareexpress_backend_ready")==="true"&&!t.force)return Promise.resolve();let e=document.getElementById("welcome-splash-overlay");if(e)return Promise.resolve();e=document.createElement("div"),e.id="welcome-splash-overlay",e.className="welcome-splash-overlay",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","Écran de bienvenue et initialisation de GareExpress"),e.innerHTML=`
    <div class="welcome-splash-card">
      <!-- Halo lumineux et Logo circulaire -->
      <div class="welcome-splash-logo-container">
        <div class="welcome-splash-logo-glow"></div>
        <img src="${te}" alt="GareExpress - Logo Officiel" class="welcome-splash-logo" />
      </div>

      <!-- Titre et sous-titre de marque -->
      <h1 class="welcome-splash-title">
        Gare<span class="welcome-splash-title-highlight">Express</span>
      </h1>
      <p class="welcome-splash-subtitle">
        Plateforme Nationale de Réservation de Billets & Fret Routier en Côte d'Ivoire
      </p>

      <!-- Badge d'état de connexion -->
      <div class="welcome-splash-status-badge" id="splash-status-badge">
        <span class="splash-spinner" id="splash-spinner"></span>
        <span id="splash-status-text">Connexion au serveur sécurisé...</span>
      </div>

      <!-- Barre de progression intelligente -->
      <div class="welcome-splash-progress-track">
        <div class="welcome-splash-progress-bar" id="splash-progress-bar"></div>
      </div>

      <!-- Chronomètre & Info Render -->
      <div class="welcome-splash-info-row">
        <span id="splash-timer-text">Initialisation des services...</span>
        <span class="splash-render-tag" id="splash-subtext">Hébergement Cloud VIP</span>
      </div>

      <!-- Bouton d'accès de secours (s'active après quelques secondes ou timeout) -->
      <div class="welcome-splash-actions" id="splash-actions" style="display: none;">
        <button type="button" class="btn-card-white welcome-splash-skip-btn" id="btn-splash-skip">
          <span>Accéder directement à l'application ➔</span>
        </button>
        <button type="button" class="btn-primary-blue welcome-splash-retry-btn" id="btn-splash-retry" style="display: none;">
          <span>🔄 Réessayer la connexion</span>
        </button>
      </div>
    </div>
  `,document.body.appendChild(e);const s=e.querySelector("#splash-status-text"),r=e.querySelector("#splash-status-badge"),o=e.querySelector("#splash-spinner"),n=e.querySelector("#splash-progress-bar"),c=e.querySelector("#splash-timer-text"),p=e.querySelector("#splash-subtext"),f=e.querySelector("#splash-actions"),u=e.querySelector("#btn-splash-skip"),v=e.querySelector("#btn-splash-retry"),i=Date.now();let m=!1,y=null,x=null;function $(d=!0){if(m)return;m=!0,clearInterval(y),clearInterval(x),d&&(sessionStorage.setItem("gareexpress_backend_ready","true"),n&&(n.style.width="100%"),s&&(s.textContent="✓ Serveur connecté ! Bienvenue sur GareExpress."),r&&r.classList.add("ready"),o&&(o.style.display="none"));const g=Date.now()-i,w=Math.max(0,be-g);setTimeout(()=>{e.classList.add("fade-out"),setTimeout(()=>{e.parentNode&&e.parentNode.removeChild(e)},700)},w)}u&&u.addEventListener("click",()=>{$(!0)}),v&&v.addEventListener("click",()=>{v.style.display="none",u&&(u.style.display="inline-flex"),o&&(o.style.display="inline-block"),r&&r.classList.remove("error"),l()}),x=setInterval(()=>{if(m)return;const d=Date.now()-i,g=Math.floor(d/1e3),w=Math.min(92,Math.round((1-Math.exp(-d/25e3))*95));n&&(n.style.width=`${Math.max(8,w)}%`),c&&(g<4?c.textContent="Vérification du statut du serveur...":g<15?c.textContent=`Démarrage des microservices (${g}s)...`:g<40?c.textContent=`Réveil du serveur Render en cours (${g}s / 90s max)...`:c.textContent=`Chargement des données gares & lignes (${g}s)...`),p&&g>8&&(p.textContent="Mise en ligne automatique"),g>=8&&f&&f.style.display==="none"&&(f.style.display="flex"),d>=ve&&(clearInterval(y),clearInterval(x),s&&(s.textContent="Le serveur met du temps à répondre."),r&&r.classList.add("error"),c&&(c.textContent="Mode local disponible ou nouvelle tentative"),o&&(o.style.display="none"),f&&(f.style.display="flex"),v&&(v.style.display="inline-flex"))},300);async function z(){if(!m)try{await B.checkHealth(4e3)&&$(!0)}catch{}}function l(){z(),y=setInterval(z,ge)}l()}function he(){const t=document.createElement("header");t.className="site-header";const a=JSON.parse(sessionStorage.getItem("current_user")||"null"),e=S.isEnabled();t.innerHTML=`
    <a href="#/" class="brand-logo" aria-label="Accueil - GareExpress">
      <img src="${te}" alt="Logo GareExpress" class="brand-logo-img" />
      <span>Gare<span style="color: var(--color-btn-blue-bg);">Express</span></span>
      <span class="brand-badge">Côte d'Ivoire</span>
    </a>

    <nav class="nav-actions" aria-label="Navigation secondaire">
      <a href="#/courier" class="btn-nav-link" style="color: #fbbf24; border-color: rgba(251, 191, 36, 0.35);">
        📦 Fret & Colis
      </a>
      ${a?`
        <a href="#/profile" class="btn-nav-link" style="color: #93c5fd; border-color: rgba(147, 197, 253, 0.3);">
          👤 ${a.fullname.split(" ")[0]}
        </a>
        <a href="#/app" class="btn-nav-link">
          🚌 Trajets
        </a>
      `:""}
      <button type="button" class="btn-nav-link" id="nav-btn-about">
        À propos
      </button>
      <button type="button" class="btn-nav-link" id="nav-btn-contact">
        Nous contacter
      </button>
      <button type="button" class="sound-toggle-btn" id="btn-toggle-sound" title="Activer / Couper les effets sonores">
        ${e?"🔊":"🔇"}
      </button>
    </nav>
  `;const s=t.querySelector("#nav-btn-about"),r=t.querySelector("#nav-btn-contact"),o=t.querySelector("#btn-toggle-sound");return s&&s.addEventListener("click",()=>{Q("about-modal")}),r&&r.addEventListener("click",()=>{Q("contact-modal")}),o&&o.addEventListener("click",()=>{const n=S.toggleSound();o.textContent=n?"🔊":"🔇"}),t}function se(){const t=document.createElement("div");t.className="live-ticker-bar",t.innerHTML=`
    <div class="live-ticker-badge">
      <span class="radar-dot"></span>
      <span>En direct</span>
    </div>

    <div class="live-ticker-viewport">
      <div class="live-ticker-content">
        <span class="live-ticker-item">
          <strong>📍 Gare Adjamé :</strong> Départs réguliers et fluides vers le Centre et le Nord •
        </span>
        <span class="live-ticker-item">
          <strong>🚌 Convoi 06h30 :</strong> Abidjan ➔ Yamoussoukro • Embarquement Porte B3 en cours •
        </span>
        <span class="live-ticker-item">
          <strong>⚡ Promo Mobile Money :</strong> 0% de frais de transfert avec Wave & Orange Money •
        </span>
        <span class="live-ticker-item">
          <strong>🛣️ Info Route :</strong> Trafic très fluide sur l'Autoroute du Nord PK 45 ➔ Yamoussoukro •
        </span>
        <span class="live-ticker-item">
          <strong>🎟️ Réservation en ligne :</strong> Vos billets avec QR Code validés directement à l'embarquement •
        </span>
        <span class="live-ticker-item">
          <strong>📍 Gare Yopougon & Bouaké :</strong> Convois de 08h00 et 10h00 ouverts à la réservation.
        </span>
      </div>
    </div>

    <div class="live-ticker-clock" id="live-station-clock">
      <span>⏱️ Abidjan</span>
      <strong id="live-clock-time">--:--:--</strong>
    </div>
  `;const a=t.querySelector("#live-clock-time");function e(){const s=new Date;a&&(a.textContent=s.toLocaleTimeString("fr-FR",{timeZone:"UTC",hour:"2-digit",minute:"2-digit",second:"2-digit"}))}return setInterval(e,1e3),e(),t}function xe(){const t=document.createElement("div");t.className="landing-view";const a=he();t.appendChild(a);const e=se();t.appendChild(e);const s=document.createElement("main");s.className="main-content",s.innerHTML=`
    <section class="landing-hero">
      <div class="hero-tag">
        <span class="radar-dot" style="background-color: #3b82f6;"></span>
        <span>Plateforme Officielle de Transport Interurbain en Côte d'Ivoire</span>
      </div>

      <h1 class="hero-title">
        Voyagez en toute sérénité à travers la <span class="hero-title-highlight">Côte d'Ivoire</span>
      </h1>

      <p class="hero-description">
        Consultez les départs en temps réel, choisissez votre autocar VIP et réservez votre ticket sans file d'attente avec paiement Mobile Money instantané.
      </p>

      <!-- Sélecteur rapide et interactif de trajet directement sur la Landing Page -->
      <div class="card-blue" style="max-width: 780px; width: 100%; margin-bottom: var(--spacing-8); border: 1px solid rgba(59, 130, 246, 0.4); box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--spacing-4); flex-wrap: wrap; gap: var(--spacing-2);">
          <div style="font-weight: 700; color: #ffffff; font-size: var(--font-size-base); display: flex; align-items: center; gap: 8px;">
            <span>⚡ Réservation Express</span>
            <span style="font-size: var(--font-size-xs); background: rgba(16, 185, 129, 0.2); color: #34d399; padding: 2px 8px; border-radius: var(--radius-full);">Disponibilité en direct</span>
          </div>
          <span style="font-size: var(--font-size-xs); color: #fbbf24;">Tarif garanti sans commission</span>
        </div>

        <form id="hero-quick-search-form" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) auto; gap: var(--spacing-3); align-items: flex-end;">
          <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label" style="font-size: var(--font-size-xs);" for="quick-from">Ville de départ</label>
            <select id="quick-from" class="form-select" style="padding: var(--spacing-2) var(--spacing-3); font-size: var(--font-size-sm);">
              ${q.map(o=>`<option value="${o}" ${o==="Abidjan"?"selected":""}>${o}</option>`).join("")}
            </select>
          </div>

          <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label" style="font-size: var(--font-size-xs);" for="quick-to">Destination</label>
            <select id="quick-to" class="form-select" style="padding: var(--spacing-2) var(--spacing-3); font-size: var(--font-size-sm);">
              ${q.map(o=>`<option value="${o}" ${o==="Bondoukou"?"selected":""}>${o}</option>`).join("")}
            </select>
          </div>

          <button type="submit" class="btn-card-white" style="height: 42px; padding: 0 var(--spacing-5);">
            <span>Consulter les Départs ➔</span>
          </button>
        </form>
      </div>

      <!-- Compteurs Statistiques Animés -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: var(--spacing-4); width: 100%; max-width: 900px; margin-bottom: var(--spacing-10);">
        <div class="card-blue" style="text-align: center; padding: var(--spacing-4);">
          <div style="font-size: var(--font-size-3xl); font-weight: 800; color: #60a5fa;" data-counter-target="150">0</div>
          <div style="font-size: var(--font-size-xs); color: var(--color-text-muted); font-weight: 600;">DÉPARTS / JOUR</div>
        </div>
        <div class="card-blue" style="text-align: center; padding: var(--spacing-4);">
          <div style="font-size: var(--font-size-3xl); font-weight: 800; color: #fbbf24;" data-counter-target="45000">0</div>
          <div style="font-size: var(--font-size-xs); color: var(--color-text-muted); font-weight: 600;">PASSAGERS SERVIS</div>
        </div>
        <div class="card-blue" style="text-align: center; padding: var(--spacing-4);">
          <div style="font-size: var(--font-size-3xl); font-weight: 800; color: #34d399;">99.4%</div>
          <div style="font-size: var(--font-size-xs); color: var(--color-text-muted); font-weight: 600;">PONCTUALITÉ GARE</div>
        </div>
        <div class="card-blue" style="text-align: center; padding: var(--spacing-4);">
          <div style="font-size: var(--font-size-3xl); font-weight: 800; color: #f472b6;">4</div>
          <div style="font-size: var(--font-size-xs); color: var(--color-text-muted); font-weight: 600;">OPÉRATEURS MOBILE MONEY</div>
        </div>
      </div>

      <!-- Zone centrale : Bouton d'action Rejoindre la Communauté -->
      <div class="hero-cta-container">
        <a href="#/register" class="btn-primary-blue btn-cta-main" id="btn-join-community">
          <span>Créer mon Compte Passager</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
        <span class="cta-subtext">Déjà inscrit ? <a href="#/login" style="color: #60a5fa; font-weight: 600;">Se connecter</a></span>
      </div>

      <!-- Section de présentation des avantages -->
      <div class="landing-grid">
        <article class="card-blue feature-card">
          <div>
            <div class="feature-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3 class="feature-title">Ponctualité & Convois</h3>
            <p class="feature-text">
              Consultez les 3 départs quotidiens (Matin, Midi, Soir) avec l'état du trafic et le suivi de l'embarquement en temps réel.
            </p>
          </div>
        </article>

        <article class="card-blue feature-card">
          <div>
            <div class="feature-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3 class="feature-title">Gares & Itinéraires 3D</h3>
            <p class="feature-text">
              Localisez précisément votre gare de départ (Adjamé, Yopougon, Treichville) et visualisez le trajet interactif vers votre destination.
            </p>
          </div>
        </article>

        <article class="card-blue feature-card">
          <div>
            <div class="feature-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="M7 15h0M2 9.5h20"></path>
              </svg>
            </div>
            <h3 class="feature-title">Paiement Mobile 100% Sécurisé</h3>
            <p class="feature-text">
              Réglez instantanément avec Wave, Orange Money, MTN MoMo ou Moov Flooz et recevez votre e-billet numérique avec QR Code sécurisé.
            </p>
          </div>
        </article>
      </div>
    </section>

    <footer class="landing-footer-info">
      <p>Plateforme de Gestion d'une Gare Routière — Conçue pour une expérience voyageur moderne, animée et sécurisée.</p>
    </footer>
  `;const r=s.querySelector("#hero-quick-search-form");return r&&r.addEventListener("submit",o=>{o.preventDefault();const n=r.querySelector("#quick-from").value,c=r.querySelector("#quick-to").value;sessionStorage.setItem("search_from",n),sessionStorage.setItem("search_to",c),window.location.hash="#/app"}),t.appendChild(s),requestAnimationFrame(()=>{O(t),F(t),de(t)}),t}function P(t={}){const{label:a="Retour",onClick:e=null,customClass:s=""}=t,r=document.createElement("div");r.className=`btn-back-3d-wrapper ${s}`.trim();const o=document.createElement("button");return o.type="button",o.className="btn-back-3d",o.setAttribute("aria-label",a),o.innerHTML=`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
    <span>${a}</span>
  `,o.addEventListener("click",n=>{n.preventDefault(),typeof e=="function"?e(n):window.history.length>1?window.history.back():window.location.hash="#/"}),r.appendChild(o),r}function ke(){const t=document.createElement("div");t.className="auth-view-container";const a=P({label:"Retour à l'accueil",onClick:()=>{window.location.hash="#/"}});t.appendChild(a);const e=document.createElement("div");e.className="auth-card",e.innerHTML=`
    <div class="auth-header">
      <h1 class="auth-title">Créer un compte</h1>
      <p class="auth-subtitle">Rejoignez la plateforme et réservez vos trajets en quelques clics.</p>
    </div>

    <form id="register-form" class="auth-form" novalidate>
      <div class="form-group">
        <label for="reg-fullname" class="form-label">Nom complet</label>
        <input 
          type="text" 
          id="reg-fullname" 
          name="fullname" 
          class="form-input" 
          placeholder="Ex : Kouassi Jean-Marc" 
          required 
          autocomplete="name"
        />
        <span class="form-feedback" id="feedback-fullname">Veuillez renseigner votre nom complet.</span>
      </div>

      <div class="form-group">
        <label for="reg-phone" class="form-label">Numéro de téléphone</label>
        <input 
          type="tel" 
          id="reg-phone" 
          name="phone" 
          class="form-input" 
          placeholder="Ex : +225 07 12 34 56 78" 
          required 
          autocomplete="tel"
        />
        <span class="form-feedback" id="feedback-phone">Format de téléphone invalide (ex: +225 07...).</span>
      </div>

      <div class="form-group">
        <label for="reg-email" class="form-label">Adresse courriel (optionnelle)</label>
        <input 
          type="email" 
          id="reg-email" 
          name="email" 
          class="form-input" 
          placeholder="Ex : jean.kouassi@exemple.ci" 
          autocomplete="email"
        />
      </div>

      <div class="form-group">
        <label for="reg-password" class="form-label">Mot de passe</label>
        <input 
          type="password" 
          id="reg-password" 
          name="password" 
          class="form-input" 
          placeholder="Au moins 6 caractères" 
          required 
          autocomplete="new-password"
        />
        <span class="form-feedback" id="feedback-password">Le mot de passe doit comporter au moins 6 caractères.</span>
      </div>

      <div class="form-group">
        <label for="reg-password-confirm" class="form-label">Confirmer le mot de passe</label>
        <input 
          type="password" 
          id="reg-password-confirm" 
          name="passwordConfirm" 
          class="form-input" 
          placeholder="Retapez votre mot de passe" 
          required 
          autocomplete="new-password"
        />
        <span class="form-feedback" id="feedback-password-confirm">Les mots de passe ne correspondent pas.</span>
      </div>

      <!-- Bouton d'action dans la carte : Blanc pur selon la charte -->
      <button type="submit" class="btn-card-white" style="width: 100%; margin-top: var(--spacing-2);">
        <span>Valider mon inscription</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </form>

    <div class="auth-footer">
      <span>Vous possédez déjà un compte ?</span>
      <a href="#/login">Se connecter ici</a>
    </div>
  `;const s=e.querySelector("#register-form");return s.addEventListener("submit",r=>{r.preventDefault();const o=s.querySelector("#reg-fullname").value.trim(),n=s.querySelector("#reg-phone").value.trim(),c=s.querySelector("#reg-email").value.trim(),p=s.querySelector("#reg-password").value,f=s.querySelector("#reg-password-confirm").value;let u=!0;const v=s.querySelector("#feedback-fullname");o?v.className="form-feedback":(v.className="form-feedback error",u=!1);const i=s.querySelector("#feedback-phone");!n||n.length<8?(i.className="form-feedback error",u=!1):i.className="form-feedback";const m=s.querySelector("#feedback-password");p.length<6?(m.className="form-feedback error",u=!1):m.className="form-feedback";const y=s.querySelector("#feedback-password-confirm");if(p!==f?(y.className="form-feedback error",u=!1):y.className="form-feedback",u){const x={fullname:o,phone:n,email:c||"contact@client.ci"};sessionStorage.setItem("current_user",JSON.stringify(x)),window.location.hash="#/app"}}),t.appendChild(e),t}function we(){const t=document.createElement("div");t.className="auth-view-container";const a=P({label:"Retour à l'accueil",onClick:()=>{window.location.hash="#/"}});t.appendChild(a);const e=document.createElement("div");e.className="auth-card",e.innerHTML=`
    <div class="auth-header">
      <h1 class="auth-title">Connexion</h1>
      <p class="auth-subtitle">Accédez à votre espace voyageur et gérez vos réservations.</p>
    </div>

    <form id="login-form" class="auth-form" novalidate>
      <div class="form-group">
        <label for="login-identifier" class="form-label">Numéro de téléphone ou Courriel</label>
        <input 
          type="text" 
          id="login-identifier" 
          name="identifier" 
          class="form-input" 
          placeholder="Ex : +225 07 12 34 56 78" 
          required 
          autocomplete="username"
        />
        <span class="form-feedback" id="feedback-login-id">Veuillez renseigner votre identifiant.</span>
      </div>

      <div class="form-group">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <label for="login-password" class="form-label">Mot de passe</label>
          <a href="#/login" style="font-size: var(--font-size-xs); color: #93c5fd;">Mot de passe oublié ?</a>
        </div>
        <input 
          type="password" 
          id="login-password" 
          name="password" 
          class="form-input" 
          placeholder="Entrez votre mot de passe" 
          required 
          autocomplete="current-password"
        />
        <span class="form-feedback" id="feedback-login-pwd">Veuillez entrer votre mot de passe.</span>
      </div>

      <!-- Bouton d'action dans la carte : Blanc pur selon la charte -->
      <button type="submit" class="btn-card-white" style="width: 100%; margin-top: var(--spacing-2);">
        <span>Se connecter</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>
    </form>

    <div class="auth-footer">
      <span>Vous n'avez pas encore de compte ?</span>
      <a href="#/register">Créer un compte</a>
    </div>
  `;const s=e.querySelector("#login-form");return s.addEventListener("submit",r=>{r.preventDefault();const o=s.querySelector("#login-identifier").value.trim(),n=s.querySelector("#login-password").value;let c=!0;const p=s.querySelector("#feedback-login-id");o?p.className="form-feedback":(p.className="form-feedback error",c=!1);const f=s.querySelector("#feedback-login-pwd");if(n?f.className="form-feedback":(f.className="form-feedback error",c=!1),c){const v=JSON.parse(sessionStorage.getItem("current_user")||"null")||{fullname:o.includes("@")?"Voyageur":"Passager Express",phone:o,email:o.includes("@")?o:"voyageur@transport.ci"};sessionStorage.setItem("current_user",JSON.stringify(v)),window.location.hash="#/app"}}),t.appendChild(e),t}function Ce({currentSeat:t="12",company:a="Compagnie Express",onSeatConfirmed:e}){let s=document.getElementById("coach-seat-modal");s||(s=document.createElement("div"),s.id="coach-seat-modal",s.className="modal-backdrop",document.body.appendChild(s));let r=t;const o=11,n=[3,7,8,15,16,21,22,28,33,34,40];s.innerHTML=`
    <div class="modal-dialog coach-modal-container">
      <div class="modal-header">
        <div>
          <h2 class="modal-title" style="font-size: var(--font-size-xl);">💺 Plan Interactif de l'Autocar</h2>
          <p style="font-size: var(--font-size-xs); color: var(--color-text-muted); margin-bottom: 0;">
            Sélectionnez votre place à bord du car • ${a} (Climatisé VIP)
          </p>
        </div>
        <button type="button" class="modal-close-btn" id="btn-close-seat-modal" aria-label="Fermer">✕</button>
      </div>

      <div class="coach-blueprint">
        <!-- Pare-brise et cabine du chauffeur -->
        <div class="coach-windshield">
          <span>🚪 Porte avant</span>
          <span>🚌 Pare-brise & Tableau de bord</span>
          <span>👨‍✈️ Poste Chauffeur</span>
        </div>

        <!-- Grille des sièges (2 à gauche - allée - 2 à droite) -->
        <div class="coach-seats-grid">
          ${Array.from({length:o}).map((u,v)=>{const i=v*4,m=i+1,y=i+2,x=i+3,$=i+4,z=v===0,l=(d,g)=>{const w=n.includes(d),h=String(d)===String(r),k=g==="left-window"||g==="right-window",E=k?`N°${d} (Fenêtre)`:`N°${d} (Couloir)`;return`
                <button 
                  type="button" 
                  class="coach-seat-btn ${h?"selected":""} ${w?"occupied":""} ${z?"vip":""}" 
                  data-seat-num="${d}"
                  data-seat-type="${k?"Fenêtre":"Couloir"}"
                  data-row="${v+1}"
                  title="${w?"Siège déjà réservé":E}"
                  ${w?"disabled":""}
                >
                  <span style="font-size: 11px;">${d}</span>
                  <span style="font-size: 8px; opacity: 0.8;">${k?"🪟":"🚶"}</span>
                </button>
              `};return`
              ${l(m,"left-window")}
              ${l(y,"left-aisle")}
              <div class="coach-aisle">ALLÉE</div>
              ${l(x,"right-aisle")}
              ${l($,"right-window")}
            `}).join("")}
        </div>

        <!-- Légende des couleurs -->
        <div class="coach-legend">
          <div class="coach-legend-item">
            <span class="legend-swatch" style="background: rgba(30, 41, 59, 0.9); border: 1px solid rgba(255,255,255,0.2);"></span>
            <span>Disponible</span>
          </div>
          <div class="coach-legend-item">
            <span class="legend-swatch" style="background: #10b981;"></span>
            <span>Votre Sélection</span>
          </div>
          <div class="coach-legend-item">
            <span class="legend-swatch" style="background: rgba(239, 68, 68, 0.4);"></span>
            <span>Déjà Réservé</span>
          </div>
          <div class="coach-legend-item">
            <span class="legend-swatch" style="background: #f59e0b;"></span>
            <span>1ère Rangée VIP</span>
          </div>
        </div>
      </div>

      <!-- Résumé du choix et validation -->
      <div style="background-color: rgba(37, 99, 235, 0.12); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: var(--radius-md); padding: var(--spacing-3) var(--spacing-4); margin-bottom: var(--spacing-4); display: flex; justify-content: space-between; align-items: center;">
        <div>
          <span style="font-size: var(--font-size-xs); color: var(--color-text-muted); display: block;">Place actuellement choisie :</span>
          <strong id="seat-selection-label" style="color: #60a5fa; font-size: var(--font-size-base);">
            Siège N° ${r} (Côté ${parseInt(r,10)%2===1?"Fenêtre":"Couloir"})
          </strong>
        </div>
        <button type="button" id="btn-confirm-seat-choice" class="btn-card-white" style="padding: var(--spacing-2) var(--spacing-5); font-size: var(--font-size-sm);">
          <span>Confirmer ce siège ✓</span>
        </button>
      </div>
    </div>
  `,requestAnimationFrame(()=>{s.classList.add("active")});const c=s.querySelectorAll(".coach-seat-btn:not(.occupied)"),p=s.querySelector("#seat-selection-label");c.forEach(u=>{u.addEventListener("click",()=>{S.play("seat"),c.forEach(m=>m.classList.remove("selected")),u.classList.add("selected"),r=u.getAttribute("data-seat-num");const v=u.getAttribute("data-seat-type"),i=u.getAttribute("data-row");p&&(p.textContent=`Siège N° ${r} (${v} - Rangée ${i})`)})});function f(){s.classList.remove("active")}s.querySelector("#btn-close-seat-modal").addEventListener("click",f),s.querySelector("#btn-confirm-seat-choice").addEventListener("click",()=>{S.play("success"),e&&e(r),f()})}function Se(){const t=document.createElement("div");t.className="main-content";const a=JSON.parse(sessionStorage.getItem("current_user")||'{"fullname": "Voyageur", "phone": "" }');let e=[...q],s=sessionStorage.getItem("search_from")||"Abidjan",r=sessionStorage.getItem("search_to")||"Bondoukou",o=ae(s,r),n=o.departures[1]||o.departures[0],c="14",p="Côté Fenêtre";const f=se();t.appendChild(f);const u=document.createElement("div");u.className="booking-topbar",u.innerHTML=`
    <a href="#/profile" class="user-badge-info" style="text-decoration: none; cursor: pointer;">
      <div class="user-avatar">${a.fullname.charAt(0).toUpperCase()}</div>
      <div>
        <div style="font-weight: 700; color: var(--color-text-primary); font-size: var(--font-size-base);">${a.fullname}</div>
        <div style="font-size: var(--font-size-xs); color: #93c5fd;">👤 Gérer mon profil & mot de passe ➔</div>
      </div>
    </a>
    <div style="display: flex; gap: var(--spacing-2); align-items: center; flex-wrap: wrap;">
      <a href="#/courier" class="btn-card-white" style="font-size: var(--font-size-xs); padding: var(--spacing-2) var(--spacing-3); color: #fbbf24; border-color: rgba(251, 191, 36, 0.4);">
        📦 Envoyer un Colis
      </a>
      <a href="#/profile" class="btn-card-white" style="font-size: var(--font-size-xs); padding: var(--spacing-2) var(--spacing-3);">
        👤 Mon Profil
      </a>
      <a href="#/history" class="btn-card-white" style="font-size: var(--font-size-xs); padding: var(--spacing-2) var(--spacing-3);">
        🎟️ Mes Billets
      </a>
      <a href="#/" class="btn-primary-blue" style="font-size: var(--font-size-xs); padding: var(--spacing-2) var(--spacing-4);">
        Déconnexion
      </a>
    </div>
  `,t.appendChild(u);const v=P({label:"Retour à l'accueil",onClick:()=>{window.location.hash="#/"}});t.appendChild(v);const i=document.createElement("div");i.id="booking-workspace";function m(){i.innerHTML=`
      <!-- Formulaire de recherche interactif -->
      <section class="card-blue search-trip-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-2); flex-wrap: wrap; gap: var(--spacing-2);">
          <h2 style="font-size: var(--font-size-xl); margin-bottom: 0;">
            Rechercher un trajet interurbain
          </h2>
          <span class="route-weather-pill">
            ☀️ Météo route : 31°C • Ciel dégagé
          </span>
        </div>
        <p style="font-size: var(--font-size-sm); margin-bottom: var(--spacing-4);">
          Sélectionnez votre ville de départ et votre destination pour consulter les convois en temps réel.
        </p>

        <form id="search-route-form" class="search-form-grid">
          <div class="form-group">
            <label class="form-label" for="select-from">Ville de départ</label>
            <select id="select-from" class="form-select">
              ${e.map(l=>`<option value="${l}" ${l===s?"selected":""}>${l}</option>`).join("")}
            </select>
          </div>

          <div class="form-group">
            <label class="form-label" for="select-to">Ville d'arrivée (Destination)</label>
            <select id="select-to" class="form-select">
              ${e.map(l=>`<option value="${l}" ${l===r?"selected":""}>${l}</option>`).join("")}
            </select>
          </div>

          <button type="submit" class="btn-card-white" style="height: 48px;">
            <span>Rechercher</span>
          </button>
        </form>
      </section>

      <!-- Simulateur Visuel Animé de Trajet (Bus & Progression) -->
      <section class="route-visualizer-card">
        <div class="route-visualizer-header">
          <div>
            <span style="font-size: var(--font-size-xs); color: var(--color-text-muted); text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em;">
              Visualisation dynamique du parcours
            </span>
            <h3 style="font-size: var(--font-size-2xl); color: #60a5fa; margin-bottom: 0;">
              ${s} ➔ ${r}
            </h3>
          </div>
          <div style="text-align: right;">
            <div style="font-size: var(--font-size-lg); font-weight: 800; color: #fbbf24;">
              ${o.distanceKm} KM • ~${o.estimatedDuration}
            </div>
            <span style="font-size: var(--font-size-xs); color: #34d399;">● Convoi sécurisé & climatisé</span>
          </div>
        </div>

        <div class="route-track-container">
          <div class="route-track-line">
            <div class="route-bus-sprite" title="Autocar en déplacement" id="interactive-bus-sprite">🚌</div>
            <div class="route-pin route-pin-start">
              <div class="route-pin-dot"></div>
              <span class="route-pin-label">📍 Départ : ${s}</span>
            </div>
            <div class="route-pin route-pin-mid">
              <div class="route-pin-dot" style="background-color: #10b981; border-color: #059669;"></div>
              <span class="route-pin-label">🛣️ Poste Péage / Relais</span>
            </div>
            <div class="route-pin route-pin-end">
              <div class="route-pin-dot" style="background-color: #fbbf24; border-color: #d97706;"></div>
              <span class="route-pin-label">🏁 Arrivée : ${r}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Liste des départs et détails -->
      <section class="departures-section">
        <div style="display: flex; justify-content: space-between; align-items: baseline;">
          <h3>Départs disponibles : <span style="color: #60a5fa;">${s} → ${r}</span></h3>
          <span style="font-size: var(--font-size-sm); color: var(--color-text-muted);">
            Cliquez sur un convoi pour sélectionner votre place
          </span>
        </div>

        <div class="departures-grid">
          ${o.departures.map(l=>`
            <div class="card-blue departure-card ${n&&n.id===l.id?"active":""}" data-dep-id="${l.id}">
              <div>
                <div class="departure-header">
                  <span class="departure-rank">${l.rankLabel}</span>
                  <span class="departure-price">${l.priceCfa.toLocaleString("fr-FR")} FCFA</span>
                </div>
                <div class="departure-time">${l.time}</div>
                <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-top: var(--spacing-2);">
                  📍 ${l.stationName}
                </div>
              </div>
              <div style="margin-top: var(--spacing-4); display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: var(--font-size-xs); color: #34d399; font-weight: 600;">
                  ✓ ${l.availableSeats} places libres
                </span>
                <span style="font-size: var(--font-size-xs); color: #93c5fd; font-weight: 600;">
                  ${n&&n.id===l.id?"Sélectionné ●":"Choisir ➔"}
                </span>
              </div>
            </div>
          `).join("")}
        </div>

        <!-- Détails du départ sélectionné et module interactif de siège -->
        ${n?`
          <div class="station-details-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-4); flex-wrap: wrap; gap: var(--spacing-2);">
              <h4 style="margin-bottom: 0; color: #ffffff;">
                Détails du voyage : ${n.rankLabel} (${n.time})
              </h4>
              <span class="departure-rank" style="background-color: rgba(16, 185, 129, 0.2); color: #34d399;">
                ${n.company}
              </span>
            </div>

            <!-- Module de sélection de siège interactif -->
            <div style="background: linear-gradient(135deg, rgba(37, 99, 235, 0.2) 0%, rgba(15, 23, 42, 0.6) 100%); border: 1px solid rgba(59, 130, 246, 0.4); border-radius: var(--radius-lg); padding: var(--spacing-4); margin-bottom: var(--spacing-4); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: var(--spacing-3);">
              <div>
                <span style="font-size: var(--font-size-xs); color: #93c5fd; display: block; font-weight: 600;">💺 VOTRE PLACE À BORD DE L'AUTOCAR :</span>
                <strong id="current-seat-badge" style="color: #ffffff; font-size: var(--font-size-lg);">
                  Siège N° ${c} (${p})
                </strong>
              </div>
              <button type="button" id="btn-open-seat-selector" class="btn-card-white" style="font-size: var(--font-size-xs); padding: var(--spacing-2) var(--spacing-4);">
                <span>💺 Choisir mon siège sur le plan 3D ➔</span>
              </button>
            </div>

            <p style="margin-bottom: var(--spacing-2); color: var(--color-text-primary);">
              🏢 <strong>Gare d'embarquement :</strong> ${n.stationName}
            </p>
            <p style="margin-bottom: var(--spacing-2); color: var(--color-text-secondary);">
              📍 <strong>Adresse :</strong> ${n.stationAddress}
            </p>
            <p style="margin-bottom: var(--spacing-2); color: var(--color-text-secondary);">
              🚌 <strong>Véhicule :</strong> ${n.busType}
            </p>

            <div class="station-direction-box">
              <strong style="color: #93c5fd; display: block; margin-bottom: var(--spacing-1);">
                🗺️ Indications pour vous rendre à la gare :
              </strong>
              <p style="margin-bottom: 0; font-size: var(--font-size-sm); color: var(--color-text-primary);">
                ${n.directions}
              </p>
            </div>

            <!-- Bandeau explicite des 4 opérateurs Mobile Money -->
            <div style="background-color: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: var(--radius-md); padding: var(--spacing-3) var(--spacing-4); margin-top: var(--spacing-4); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: var(--spacing-2);">
              <div style="font-size: var(--font-size-xs); color: var(--color-text-secondary);">
                💳 <strong>Paiement Mobile Money disponible :</strong> Wave • Orange Money • MTN MoMo • Moov Flooz
              </div>
              <div style="display: flex; gap: var(--spacing-1);">
                <span class="operator-icon-badge operator-wave" style="width: 26px; height: 26px; font-size: 8px;">WAVE</span>
                <span class="operator-icon-badge operator-orange" style="width: 26px; height: 26px; font-size: 8px;">OM</span>
                <span class="operator-icon-badge operator-mtn" style="width: 26px; height: 26px; font-size: 8px;">MTN</span>
                <span class="operator-icon-badge operator-moov" style="width: 26px; height: 26px; font-size: 8px;">MOOV</span>
              </div>
            </div>

            <!-- Bouton vers la passerelle de paiement Mobile Money -->
            <button type="button" id="btn-proceed-payment" class="btn-card-white" style="width: 100%; margin-top: var(--spacing-4); padding: var(--spacing-4);">
              <span>Payer mon ticket & Valider le Siège N° ${c} (${n.priceCfa.toLocaleString("fr-FR")} FCFA)</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        `:""}
      </section>
    `;const y=i.querySelector("#search-route-form");y.addEventListener("submit",async l=>{l.preventDefault(),S.play("horn"),s=y.querySelector("#select-from").value,r=y.querySelector("#select-to").value,o=await B.searchTrips(s,r),n=o.departures[0]||null,m()});const x=i.querySelector("#interactive-bus-sprite");x&&x.addEventListener("click",()=>{S.play("horn")}),i.querySelectorAll(".departure-card").forEach(l=>{l.addEventListener("click",()=>{S.play("click");const d=l.getAttribute("data-dep-id");n=o.departures.find(g=>g.id===d),m()})});const $=i.querySelector("#btn-open-seat-selector");$&&$.addEventListener("click",()=>{Ce({currentSeat:c,company:n.company,onSeatConfirmed:l=>{c=l,p=parseInt(l,10)%2===1?"Côté Fenêtre":"Côté Couloir",m()}})});const z=i.querySelector("#btn-proceed-payment");z&&z.addEventListener("click",async()=>{S.play("click"),z.disabled=!0,z.innerHTML="<span>Préparation du paiement sécurisé...</span>";const l={passengerName:a.fullname,passengerPhone:a.phone||"Non renseigné",seatNumber:c,seatType:p,departureCity:s,arrivalCity:r,departureTime:n.time,departureRank:n.rankLabel,stationName:n.stationName,stationAddress:n.stationAddress,directions:n.directions,busType:n.busType,company:n.company,priceCfa:n.priceCfa},d=await B.createReservation(l);sessionStorage.setItem("pending_ticket",JSON.stringify(d)),sessionStorage.setItem("current_ticket",JSON.stringify(d)),window.location.hash="#/payment"}),O(i),F(i)}return B.getCities().then(y=>{y&&y.length>0&&(e=y,m())}),m(),t.appendChild(i),t}const _=[{id:"wave",name:"Wave CI",class:"operator-wave",logoText:"WAVE"},{id:"orange",name:"Orange Money",class:"operator-orange",logoText:"OM"},{id:"mtn",name:"MTN MoMo",class:"operator-mtn",logoText:"MOMO"},{id:"moov",name:"Moov Money",class:"operator-moov",logoText:"MOOV"}];function ze(){const t=document.createElement("div");t.className="main-content";const a=JSON.parse(sessionStorage.getItem("pending_ticket")||sessionStorage.getItem("current_ticket")||"null"),e=P({label:"Modifier mon trajet",onClick:()=>{window.location.hash="#/app"}});if(t.appendChild(e),!a){const n=document.createElement("div");return n.className="card-blue",n.style.maxWidth="500px",n.style.margin="var(--spacing-8) auto",n.style.textAlign="center",n.innerHTML=`
      <h2>Aucun trajet en attente de paiement</h2>
      <p>Veuillez d'abord sélectionner un départ.</p>
      <a href="#/app" class="btn-card-white" style="margin-top: var(--spacing-4);">Choisir un départ</a>
    `,t.appendChild(n),t}let s=_[0].id;const r=document.createElement("div");r.className="card-blue auth-card",r.style.maxWidth="560px",r.style.margin="var(--spacing-6) auto";function o(){r.innerHTML=`
      <div class="auth-header">
        <h1 class="auth-title">Règlement du Ticket</h1>
        <p class="auth-subtitle">Sélectionnez votre moyen de paiement Mobile Money en Côte d'Ivoire.</p>
      </div>

      <!-- Récapitulatif du trajet -->
      <div style="background-color: rgba(255, 255, 255, 0.05); padding: var(--spacing-4); border-radius: var(--radius-md); margin-bottom: var(--spacing-4);">
        <div style="display: flex; justify-content: space-between; margin-bottom: var(--spacing-2);">
          <span>Trajet sélectionné :</span>
          <strong style="color: #60a5fa;">${a.departureCity} ➔ ${a.arrivalCity}</strong>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: var(--spacing-2);">
          <span>Départ :</span>
          <strong>${a.departureRank} (${a.departureTime})</strong>
        </div>
        <div style="display: flex; justify-content: space-between; border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: var(--spacing-2);">
          <span style="font-weight: 700;">Montant total :</span>
          <strong style="color: #fbbf24; font-size: var(--font-size-lg);">${a.priceCfa.toLocaleString("fr-FR")} FCFA</strong>
        </div>
      </div>

      <!-- Sélecteur d'opérateur Mobile Money -->
      <label class="form-label">Opérateur Mobile Money :</label>
      <div class="payment-methods-grid">
        ${_.map(c=>`
          <div class="payment-method-card ${s===c.id?"active":""}" data-op-id="${c.id}">
            <div class="operator-icon-badge ${c.class}">${c.logoText}</div>
            <span class="operator-name">${c.name}</span>
          </div>
        `).join("")}
      </div>

      <form id="payment-form" class="auth-form" style="margin-top: var(--spacing-4);">
        <div class="form-group">
          <label class="form-label" for="pay-phone">Numéro de débit Mobile Money</label>
          <input 
            type="tel" 
            id="pay-phone" 
            class="form-input" 
            placeholder="Ex : +225 07 01 02 03 04" 
            value="${a.passengerPhone&&a.passengerPhone!=="Non renseigné"?a.passengerPhone:""}" 
            required 
          />
        </div>

        <button type="submit" class="btn-card-white" id="btn-submit-pay" style="width: 100%; margin-top: var(--spacing-4); padding: var(--spacing-4);">
          <span>Payer ${a.priceCfa.toLocaleString("fr-FR")} FCFA</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </button>
      </form>
    `,r.querySelectorAll(".payment-method-card").forEach(c=>{c.addEventListener("click",()=>{s=c.getAttribute("data-op-id"),o()})});const n=r.querySelector("#payment-form");n.addEventListener("submit",async c=>{c.preventDefault();const p=n.querySelector("#btn-submit-pay"),f=n.querySelector("#pay-phone"),u=f?f.value.trim():a.passengerPhone;p.disabled=!0,p.innerHTML="<span>Validation auprès de l'opérateur...</span>";const v=_.find(i=>i.id===s);try{const i=await B.initiatePayment({bookingRef:a.bookingRef,operatorId:s,phone:u,amountCfa:a.priceCfa,passengerName:a.passengerName}),m={...a,passengerPhone:u,paymentMethod:v.name,paymentStatus:"PAID",paymentTransactionId:i.transaction?i.transaction.transactionId:`TXN-${s.toUpperCase()}-${Date.now().toString().slice(-6)}`,paymentDate:new Date().toISOString()},y=JSON.parse(localStorage.getItem("user_tickets_history")||"[]");y.unshift(m),localStorage.setItem("user_tickets_history",JSON.stringify(y)),sessionStorage.setItem("current_ticket",JSON.stringify(m)),window.location.hash="#/confirmation"}catch{p.disabled=!1,p.innerHTML="<span>Réessayer le paiement</span>"}})}return o(),t.appendChild(r),t}function Ee(){const t=document.createElement("div");t.className="main-content";const a=JSON.parse(sessionStorage.getItem("current_ticket")||"null"),e=P({label:"Retour aux trajets",onClick:()=>{window.location.hash="#/app"}});if(t.appendChild(e),!a){const o=document.createElement("div");return o.className="card-blue",o.style.maxWidth="550px",o.style.margin="var(--spacing-8) auto",o.style.textAlign="center",o.innerHTML=`
      <h2 style="margin-bottom: var(--spacing-4);">Aucune réservation trouvée</h2>
      <p>Veuillez d'abord sélectionner un trajet et valider votre départ.</p>
      <a href="#/app" class="btn-card-white" style="margin-top: var(--spacing-4);">
        Rechercher un départ
      </a>
    `,t.appendChild(o),t}const s=document.createElement("div");s.className="card-blue ticket-container",s.innerHTML=`
    <div class="ticket-header-band">
      <h2 style="color: #ffffff; font-size: var(--font-size-xl); margin-bottom: var(--spacing-1);">
        🎉 Réservation & Paiement Confirmés !
      </h2>
      <span style="color: rgba(255, 255, 255, 0.95); font-size: var(--font-size-sm); font-weight: 700;">
        Réf Billet Officiel : ${a.bookingRef}
      </span>
    </div>

    <div class="ticket-body">
      <!-- QR Code de contrôle avec effet de scan -->
      <div class="ticket-qr-mock" style="position: relative; box-shadow: 0 4px 20px rgba(0,0,0,0.4);">
        <svg viewBox="0 0 24 24" width="90" height="90" fill="#0f172a">
          <path d="M2 2h8v8H2zM4 4v4h4V4zm10-2h8v8h-8zM16 4v4h4V4zM2 14h8v8H2zm2 2v4h4v-4zm10 0h2v2h-2zm4 0h4v6h-4zm-4 4h2v2h-2zm2-2h2v2h-2zm-6-2h2v2h-2zm0 4h2v2h-2z"/>
        </svg>
      </div>

      <div style="text-align: center; border-bottom: 1px solid rgba(255, 255, 255, 0.1); padding-bottom: var(--spacing-4);">
        <h3 style="font-size: var(--font-size-2xl); color: #60a5fa; margin-bottom: var(--spacing-1);">
          ${a.departureCity} ➔ ${a.arrivalCity}
        </h3>
        <p style="color: #cbd5e1; font-size: var(--font-size-sm); margin-bottom: 0;">
          ${a.departureRank} • Départ prévu à <strong>${a.departureTime}</strong>
        </p>
      </div>

      <!-- Badge de règlement Mobile Money sécurisé -->
      <div style="background-color: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.35); border-radius: var(--radius-md); padding: var(--spacing-3) var(--spacing-4); margin: var(--spacing-2) 0; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: var(--spacing-2);">
        <div>
          <span style="color: #34d399; font-weight: 700; font-size: var(--font-size-sm); display: block;">
            ✓ Réglé avec succès par ${a.paymentMethod||"Mobile Money"}
          </span>
          <span style="font-size: var(--font-size-xs); color: #94a3b8;">
            Transaction : <strong>${a.paymentTransactionId||"TXN-DIRECT-VAL"}</strong>
          </span>
        </div>
        <div style="text-align: right;">
          <span style="color: #fbbf24; font-weight: 800; font-size: var(--font-size-base);">
            ${(a.priceCfa||7e3).toLocaleString("fr-FR")} FCFA
          </span>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-4); font-size: var(--font-size-sm);">
        <div>
          <span style="color: var(--color-text-muted); display: block;">Passager :</span>
          <strong style="color: #ffffff;">${a.passengerName}</strong>
        </div>
        <div>
          <span style="color: var(--color-text-muted); display: block;">Téléphone débité :</span>
          <strong style="color: #ffffff;">${a.passengerPhone}</strong>
        </div>
        <div>
          <span style="color: var(--color-text-muted); display: block;">Siège Réservé :</span>
          <strong style="color: #fbbf24; font-size: var(--font-size-base);">💺 N° ${a.seatNumber||"14"} (${a.seatType||"Fenêtre"})</strong>
        </div>
        <div>
          <span style="color: var(--color-text-muted); display: block;">Compagnie :</span>
          <strong style="color: #ffffff;">${a.company}</strong>
        </div>
        <div>
          <span style="color: var(--color-text-muted); display: block;">Statut embarquement :</span>
          <strong style="color: #34d399;">VALIDE / EMBARQUEMENT AUTORISÉ</strong>
        </div>
      </div>

      <div class="station-direction-box" style="margin: var(--spacing-2) 0;">
        <strong style="color: #93c5fd; display: block; margin-bottom: var(--spacing-1);">
          📍 Point d'embarquement : ${a.stationName}
        </strong>
        <p style="margin-bottom: var(--spacing-2); font-size: var(--font-size-xs); color: #ffffff;">
          ${a.stationAddress}
        </p>
        <p style="margin-bottom: 0; font-size: var(--font-size-xs); color: #cbd5e1;">
          <em>${a.directions}</em>
        </p>
      </div>

      <div style="display: flex; gap: var(--spacing-3); margin-top: var(--spacing-4); flex-wrap: wrap;">
        <button type="button" class="btn-card-white" id="btn-print-ticket" style="flex: 1; min-width: 160px;">
          <span>🖨️ Imprimer mon billet</span>
        </button>
        <a href="#/history" class="btn-card-white" style="flex: 1; min-width: 160px; text-align: center;">
          <span>🎟️ Mes Billets</span>
        </a>
        <a href="#/profile" class="btn-primary-blue" style="flex: 1; min-width: 160px; text-align: center;">
          <span>👤 Mon Profil</span>
        </a>
      </div>
    </div>
  `;const r=s.querySelector("#btn-print-ticket");return r&&r.addEventListener("click",()=>{window.print()}),t.appendChild(s),requestAnimationFrame(()=>{ee(),O(t),F(t)}),t}function $e(){const t=document.createElement("div");t.className="main-content";const a=JSON.parse(sessionStorage.getItem("current_user")||'{"fullname": "Voyageur", "phone": "" }'),e=document.createElement("div");e.className="booking-topbar",e.innerHTML=`
    <div class="user-badge-info">
      <div class="user-avatar">${a.fullname.charAt(0).toUpperCase()}</div>
      <div>
        <div style="font-weight: 700; color: var(--color-text-primary); font-size: var(--font-size-base);">${a.fullname}</div>
        <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">Espace Mes Billets & Voyages</div>
      </div>
    </div>
    <div style="display: flex; gap: var(--spacing-2); align-items: center; flex-wrap: wrap;">
      <a href="#/profile" class="btn-card-white" style="font-size: var(--font-size-xs); padding: var(--spacing-2) var(--spacing-3);">
        👤 Mon Profil
      </a>
      <a href="#/app" class="btn-primary-blue" style="font-size: var(--font-size-xs); padding: var(--spacing-2) var(--spacing-4);">
        🚌 Nouveau Trajet
      </a>
    </div>
  `,t.appendChild(e);const s=P({label:"Retour à l'espace réservation",onClick:()=>{window.location.hash="#/app"}});t.appendChild(s);const r=document.createElement("div");if(r.style.margin="var(--spacing-4) 0 var(--spacing-6) 0",r.innerHTML=`
    <h1>Mes Billets & Historique des Voyages</h1>
    <p>Retrouvez l'ensemble de vos réservations, vérifiez l'état de vos départs et réimprimez vos tickets.</p>
  `,t.appendChild(r),history.length===0){const n=document.createElement("div");return n.className="card-blue",n.style.maxWidth="600px",n.style.textAlign="center",n.style.padding="var(--spacing-8)",n.innerHTML=`
      <div style="font-size: 3rem; margin-bottom: var(--spacing-4);">🎟️</div>
      <h2 style="font-size: var(--font-size-2xl); margin-bottom: var(--spacing-2);">Aucun voyage enregistré</h2>
      <p>Vous n'avez pas encore réservé de trajet sur la plateforme.</p>
      <a href="#/app" class="btn-card-white" style="margin-top: var(--spacing-4);">
        Réserver mon premier départ
      </a>
    `,t.appendChild(n),t}const o=document.createElement("div");return o.className="history-list",history.forEach(n=>{const c=document.createElement("div");c.className="card-blue history-item-card",c.innerHTML=`
      <div>
        <div style="display: flex; align-items: center; gap: var(--spacing-3); margin-bottom: var(--spacing-2);">
          <span class="history-badge-status status-paid">✓ Payé (${n.paymentMethod||"Mobile Money"})</span>
          <span style="font-size: var(--font-size-xs); color: var(--color-text-muted);">Réf : ${n.bookingRef}</span>
        </div>
        <h3 style="font-size: var(--font-size-xl); color: #60a5fa; margin-bottom: var(--spacing-1);">
          ${n.departureCity} ➔ ${n.arrivalCity}
        </h3>
        <p style="font-size: var(--font-size-sm); margin-bottom: 0; color: var(--color-text-secondary);">
          📅 Départ : <strong>${n.departureTime}</strong> (${n.departureRank}) • Gare : ${n.stationName}
        </p>
      </div>

      <div style="display: flex; align-items: center; gap: var(--spacing-4);">
        <span style="font-size: var(--font-size-lg); font-weight: 700; color: #fbbf24;">
          ${(n.priceCfa||7e3).toLocaleString("fr-FR")} FCFA
        </span>
        <button type="button" class="btn-card-white" data-ticket-ref="${n.bookingRef}">
          <span>Voir le billet</span>
        </button>
      </div>
    `;const p=c.querySelector(`[data-ticket-ref="${n.bookingRef}"]`);p&&p.addEventListener("click",()=>{sessionStorage.setItem("current_ticket",JSON.stringify(n)),window.location.hash="#/confirmation"}),o.appendChild(c)}),t.appendChild(o),t}function G(t,a=!1){let e=document.getElementById("profile-toast-notification");e||(e=document.createElement("div"),e.id="profile-toast-notification",e.className="profile-toast",document.body.appendChild(e)),e.className=`profile-toast ${a?"error":""} show`,e.innerHTML=`
    <span>${a?"⚠️":"✓"}</span>
    <span>${t}</span>
  `,setTimeout(()=>{e.classList.remove("show")},3500)}function Ne(t){if(!t||t.length<6)return"weak";const a=/[A-Z]/.test(t),e=/[a-z]/.test(t),s=/[0-9]/.test(t),r=/[^A-Za-z0-9]/.test(t),o=[a,e,s,r,t.length>=8].filter(Boolean).length;return o>=4?"strong":o>=2?"medium":"weak"}function Ae(){const t=document.createElement("div");t.className="main-content profile-container";const a=sessionStorage.getItem("current_user"),e=a?JSON.parse(a):{fullname:"Kouassi Jean-Philippe",username:"kouassi_jp",phone:"+225 07 12 34 56 78",email:"jean.kouassi@transport.ci",city:"Abidjan",emergencyContactName:"Kouassi Marie (Épouse)",emergencyContactPhone:"+225 05 98 76 54 32",preferredPayment:"wave",preferredCompany:"UTB",seatPreference:"fenetre",smsAlerts:!0,memberSince:"Janvier 2026"};e.username=e.username||e.fullname.toLowerCase().replace(/[\s-]/g,"_"),e.city=e.city||"Abidjan",e.emergencyContactName=e.emergencyContactName||"",e.emergencyContactPhone=e.emergencyContactPhone||"",e.preferredPayment=e.preferredPayment||"wave",e.preferredCompany=e.preferredCompany||"Toutes compagnies",e.seatPreference=e.seatPreference||"fenetre",e.smsAlerts=e.smsAlerts!==void 0?e.smsAlerts:!0,e.memberSince=e.memberSince||"2026";const s=JSON.parse(localStorage.getItem("user_tickets_history")||"[]"),r=s.length,o=s.reduce((h,k)=>h+(k.priceCfa||0),0),n=r*150+500,c=r>=5?"Membre Gold ⭐":r>=2?"Membre Silver ✨":"Passager Certifié ✓",p=P({label:"Retour aux trajets",onClick:()=>{window.location.hash="#/app"}});t.appendChild(p);const f=document.createElement("div");f.className="profile-hero-card",f.innerHTML=`
    <div class="profile-user-details">
      <div class="profile-avatar-large" id="profile-avatar-display">
        ${e.fullname.charAt(0).toUpperCase()}
      </div>
      <div class="profile-name-group">
        <h1 id="profile-hero-name">
          ${e.fullname}
          <span class="profile-username-badge" id="profile-hero-username">@${e.username}</span>
        </h1>
        <div class="profile-meta-text">
          <span class="profile-status-badge">${c}</span>
          <span>📍 <strong id="profile-hero-city">${e.city}</strong></span>
          <span>📞 <span id="profile-hero-phone">${e.phone}</span></span>
        </div>
      </div>
    </div>

    <div class="profile-hero-actions">
      <a href="#/history" class="btn-card-white" style="font-size: var(--font-size-xs); padding: var(--spacing-2) var(--spacing-4);">
        🎟️ Mes Billets (${r})
      </a>
      <a href="#/app" class="btn-primary-blue" style="font-size: var(--font-size-xs); padding: var(--spacing-2) var(--spacing-4);">
        🚌 Réserver
      </a>
      <button type="button" id="btn-logout-profile" class="btn-card-white" style="font-size: var(--font-size-xs); padding: var(--spacing-2) var(--spacing-3); color: #ef4444; border-color: rgba(239, 68, 68, 0.4);">
        🚪 Déconnexion
      </button>
    </div>
  `,t.appendChild(f);const u=document.createElement("div");u.className="profile-stats-grid",u.innerHTML=`
    <div class="profile-stat-card">
      <div class="profile-stat-icon">🎟️</div>
      <div class="profile-stat-value">${r}</div>
      <div class="profile-stat-label">Voyages Effectués</div>
    </div>
    <div class="profile-stat-card">
      <div class="profile-stat-icon">💰</div>
      <div class="profile-stat-value">${o.toLocaleString("fr-FR")} <span style="font-size: var(--font-size-xs);">FCFA</span></div>
      <div class="profile-stat-label">Total Dépensé</div>
    </div>
    <div class="profile-stat-card">
      <div class="profile-stat-icon">🎁</div>
      <div class="profile-stat-value">${n}</div>
      <div class="profile-stat-label">Points Fidélité</div>
    </div>
    <div class="profile-stat-card">
      <div class="profile-stat-icon">🏆</div>
      <div class="profile-stat-value" style="font-size: var(--font-size-lg); color: #34d399;">${c}</div>
      <div class="profile-stat-label">Statut Voyageur</div>
    </div>
  `,t.appendChild(u);const v=document.createElement("div");v.className="profile-grid-layout";const i=document.createElement("div");i.className="profile-section-card",i.innerHTML=`
    <div class="profile-section-header">
      <div class="profile-section-icon">👤</div>
      <div>
        <h2 class="profile-section-title">Informations Personnelles</h2>
        <p class="profile-section-desc">Gérez votre identité et vos coordonnées sur la plateforme.</p>
      </div>
    </div>

    <form id="form-personal-info" class="auth-form" novalidate>
      <div class="form-group">
        <label for="prof-username" class="form-label">Nom d'utilisateur (Pseudo)</label>
        <div style="position: relative;">
          <input 
            type="text" 
            id="prof-username" 
            name="username" 
            class="form-input" 
            value="${e.username}" 
            required 
            placeholder="Ex : kouassi_jean"
            autocomplete="username"
          />
        </div>
        <span class="form-feedback" id="fb-prof-username">Ce nom sera affiché publiquement sur votre compte.</span>
      </div>

      <div class="form-group">
        <label for="prof-fullname" class="form-label">Nom complet & Prénoms</label>
        <input 
          type="text" 
          id="prof-fullname" 
          name="fullname" 
          class="form-input" 
          value="${e.fullname}" 
          required 
          placeholder="Ex : Kouassi Jean-Marc"
          autocomplete="name"
        />
        <span class="form-feedback" id="fb-prof-fullname">Nom utilisé pour l'émission officielle de vos billets.</span>
      </div>

      <div class="form-group">
        <label for="prof-phone" class="form-label">Numéro de téléphone principal</label>
        <input 
          type="tel" 
          id="prof-phone" 
          name="phone" 
          class="form-input" 
          value="${e.phone}" 
          required 
          placeholder="Ex : +225 07 12 34 56 78"
          autocomplete="tel"
        />
        <span class="form-feedback" id="fb-prof-phone">Utilisé pour les réceptions Mobile Money et notifications de départ.</span>
      </div>

      <div class="form-group">
        <label for="prof-email" class="form-label">Adresse courriel (E-mail)</label>
        <input 
          type="email" 
          id="prof-email" 
          name="email" 
          class="form-input" 
          value="${e.email}" 
          placeholder="Ex : jean.kouassi@exemple.ci"
          autocomplete="email"
        />
      </div>

      <div class="form-group">
        <label for="prof-city" class="form-label">Ville de résidence principale</label>
        <select id="prof-city" name="city" class="form-select">
          ${q.map(h=>`<option value="${h}" ${h===e.city?"selected":""}>${h}</option>`).join("")}
        </select>
      </div>

      <button type="submit" class="btn-card-white" style="width: 100%; margin-top: var(--spacing-4);">
        <span>Enregistrer mes coordonnées</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </button>
    </form>
  `,v.appendChild(i);const m=document.createElement("div");m.className="profile-section-card",m.innerHTML=`
    <div class="profile-section-header">
      <div class="profile-section-icon">🔒</div>
      <div>
        <h2 class="profile-section-title">Sécurité & Mot de Passe</h2>
        <p class="profile-section-desc">Modifiez votre mot de passe pour sécuriser votre compte.</p>
      </div>
    </div>

    <form id="form-password-change" class="auth-form" novalidate>
      <div class="form-group">
        <label for="prof-old-pwd" class="form-label">Ancien mot de passe</label>
        <input 
          type="password" 
          id="prof-old-pwd" 
          name="oldPassword" 
          class="form-input" 
          placeholder="Votre mot de passe actuel" 
          required 
          autocomplete="current-password"
        />
        <span class="form-feedback" id="fb-prof-old-pwd">Veuillez renseigner votre mot de passe actuel.</span>
      </div>

      <div class="form-group">
        <label for="prof-new-pwd" class="form-label">Nouveau mot de passe</label>
        <input 
          type="password" 
          id="prof-new-pwd" 
          name="newPassword" 
          class="form-input" 
          placeholder="Au moins 6 caractères" 
          required 
          autocomplete="new-password"
        />
        <div class="password-strength-container">
          <div class="password-strength-bar">
            <div id="pwd-strength-fill" class="password-strength-fill"></div>
          </div>
          <span id="pwd-strength-text" class="password-strength-label">Sécurité : Entrez un mot de passe</span>
        </div>
      </div>

      <div class="form-group">
        <label for="prof-confirm-pwd" class="form-label">Confirmer le nouveau mot de passe</label>
        <input 
          type="password" 
          id="prof-confirm-pwd" 
          name="confirmPassword" 
          class="form-input" 
          placeholder="Retapez le nouveau mot de passe" 
          required 
          autocomplete="new-password"
        />
        <span class="form-feedback" id="fb-prof-confirm-pwd">Les mots de passe ne correspondent pas.</span>
      </div>

      <div style="background: rgba(37, 99, 235, 0.1); border-left: 3px solid #3b82f6; border-radius: var(--radius-sm); padding: var(--spacing-3); font-size: var(--font-size-xs); color: var(--color-text-secondary); margin-bottom: var(--spacing-2);">
        🛡️ Utilisez au moins 6 caractères avec des chiffres et lettres pour renforcer la sécurité.
      </div>

      <button type="submit" class="btn-card-white" style="width: 100%; margin-top: auto;">
        <span>Mettre à jour le mot de passe</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      </button>
    </form>
  `,v.appendChild(m);const y=document.createElement("div");y.className="profile-section-card profile-card-full",y.innerHTML=`
    <div class="profile-section-header">
      <div class="profile-section-icon">⚙️</div>
      <div>
        <h2 class="profile-section-title">Préférences de Voyage & Contact d'Urgence</h2>
        <p class="profile-section-desc">Personnalisez votre expérience de réservation et sécurisez vos trajets en autocar.</p>
      </div>
    </div>

    <form id="form-preferences" class="auth-form" novalidate>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: var(--spacing-4);">
        <!-- Contact d'urgence -->
        <div class="form-group">
          <label for="prof-emergency-name" class="form-label">Contact d'urgence (Nom & Lien de parenté)</label>
          <input 
            type="text" 
            id="prof-emergency-name" 
            name="emergencyContactName" 
            class="form-input" 
            value="${e.emergencyContactName}" 
            placeholder="Ex : Kouassi Marie (Épouse / Frère)" 
          />
          <span class="form-feedback">Personne à joindre en cas d'imprévu durant le convoi.</span>
        </div>

        <div class="form-group">
          <label for="prof-emergency-phone" class="form-label">Téléphone du contact d'urgence</label>
          <input 
            type="tel" 
            id="prof-emergency-phone" 
            name="emergencyContactPhone" 
            class="form-input" 
            value="${e.emergencyContactPhone}" 
            placeholder="Ex : +225 05 98 76 54 32" 
          />
          <span class="form-feedback">Numéro joignable 24h/24.</span>
        </div>

        <!-- Mode de paiement par défaut -->
        <div class="form-group">
          <label class="form-label">Mode de paiement Mobile Money favori</label>
          <div class="operator-radio-group">
            <label class="operator-radio-label ${e.preferredPayment==="wave"?"selected":""}">
              <input type="radio" name="preferredPayment" value="wave" ${e.preferredPayment==="wave"?"checked":""} />
              <span>🌊 Wave</span>
            </label>
            <label class="operator-radio-label ${e.preferredPayment==="orange"?"selected":""}">
              <input type="radio" name="preferredPayment" value="orange" ${e.preferredPayment==="orange"?"checked":""} />
              <span>🍊 Orange</span>
            </label>
            <label class="operator-radio-label ${e.preferredPayment==="mtn"?"selected":""}">
              <input type="radio" name="preferredPayment" value="mtn" ${e.preferredPayment==="mtn"?"checked":""} />
              <span>💛 MTN</span>
            </label>
            <label class="operator-radio-label ${e.preferredPayment==="moov"?"selected":""}">
              <input type="radio" name="preferredPayment" value="moov" ${e.preferredPayment==="moov"?"checked":""} />
              <span>🔵 Moov</span>
            </label>
          </div>
        </div>

        <!-- Préférence de siège & Compagnie -->
        <div class="form-group">
          <label for="prof-seat-pref" class="form-label">Préférence d'emplacement de siège</label>
          <select id="prof-seat-pref" name="seatPreference" class="form-select">
            <option value="fenetre" ${e.seatPreference==="fenetre"?"selected":""}>🪟 Côté Fenêtre (Vue panoramique)</option>
            <option value="couloir" ${e.seatPreference==="couloir"?"selected":""}>🚶 Côté Couloir (Accès aisé)</option>
            <option value="avant" ${e.seatPreference==="avant"?"selected":""}>🚌 À l'avant du car (Débarquement rapide)</option>
            <option value="peu_importe" ${e.seatPreference==="peu_importe"?"selected":""}>✓ Sans préférence particulière</option>
          </select>
        </div>
      </div>

      <!-- Option notifications SMS -->
      <div style="margin-top: var(--spacing-4); padding: var(--spacing-3); background-color: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: space-between; gap: var(--spacing-3);">
        <div>
          <strong style="color: #ffffff; font-size: var(--font-size-sm); display: block;">Notifications SMS & WhatsApp</strong>
          <span style="font-size: var(--font-size-xs); color: var(--color-text-muted);">Recevoir un rappel automatique 1 heure avant l'embarquement à la gare.</span>
        </div>
        <input type="checkbox" id="prof-sms-alerts" name="smsAlerts" ${e.smsAlerts?"checked":""} style="width: 20px; height: 20px; cursor: pointer;" />
      </div>

      <button type="submit" class="btn-card-white" style="margin-top: var(--spacing-4); align-self: flex-start; padding: var(--spacing-3) var(--spacing-6);">
        <span>Sauvegarder toutes mes préférences</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </button>
    </form>
  `,v.appendChild(y),t.appendChild(v);const x=i.querySelector("#form-personal-info");x.addEventListener("submit",h=>{h.preventDefault();const k=x.querySelector("#prof-username").value.trim(),E=x.querySelector("#prof-fullname").value.trim(),b=x.querySelector("#prof-phone").value.trim(),C=x.querySelector("#prof-email").value.trim(),L=x.querySelector("#prof-city").value;let M=!0;k?x.querySelector("#fb-prof-username").className="form-feedback":(x.querySelector("#fb-prof-username").className="form-feedback error",M=!1),E?x.querySelector("#fb-prof-fullname").className="form-feedback":(x.querySelector("#fb-prof-fullname").className="form-feedback error",M=!1),!b||b.length<8?(x.querySelector("#fb-prof-phone").className="form-feedback error",M=!1):x.querySelector("#fb-prof-phone").className="form-feedback",M&&(e.username=k,e.fullname=E,e.phone=b,e.email=C,e.city=L,sessionStorage.setItem("current_user",JSON.stringify(e)),localStorage.setItem("saved_passenger_profile",JSON.stringify(e)),t.querySelector("#profile-hero-name").innerHTML=`
        ${e.fullname}
        <span class="profile-username-badge" id="profile-hero-username">@${e.username}</span>
      `,t.querySelector("#profile-avatar-display").textContent=e.fullname.charAt(0).toUpperCase(),t.querySelector("#profile-hero-city").textContent=e.city,t.querySelector("#profile-hero-phone").textContent=e.phone,G("Vos informations personnelles ont été mises à jour avec succès !"))});const $=m.querySelector("#prof-new-pwd"),z=m.querySelector("#pwd-strength-fill"),l=m.querySelector("#pwd-strength-text");$.addEventListener("input",()=>{const h=$.value;if(!h){z.className="password-strength-fill",l.textContent="Sécurité : Entrez un mot de passe";return}const k=Ne(h);z.className=`password-strength-fill ${k}`,k==="strong"?(l.textContent="Sécurité : Mot de passe robuste et sécurisé ✓",l.style.color="#34d399"):k==="medium"?(l.textContent="Sécurité : Niveau moyen (ajoutez des chiffres ou symboles)",l.style.color="#fbbf24"):(l.textContent="Sécurité : Mot de passe trop court ou faible",l.style.color="#ef4444")});const d=m.querySelector("#form-password-change");d.addEventListener("submit",h=>{h.preventDefault();const k=d.querySelector("#prof-old-pwd").value,E=d.querySelector("#prof-new-pwd").value,b=d.querySelector("#prof-confirm-pwd").value;let C=!0;k?d.querySelector("#fb-prof-old-pwd").className="form-feedback":(d.querySelector("#fb-prof-old-pwd").className="form-feedback error",C=!1),E.length<6&&(l.textContent="Erreur : Le nouveau mot de passe doit comporter au moins 6 caractères.",l.style.color="#ef4444",C=!1),E!==b?(d.querySelector("#fb-prof-confirm-pwd").className="form-feedback error",C=!1):d.querySelector("#fb-prof-confirm-pwd").className="form-feedback",C&&(e.passwordUpdated=new Date().toISOString(),sessionStorage.setItem("current_user",JSON.stringify(e)),d.reset(),z.className="password-strength-fill",l.textContent="Sécurité : Entrez un mot de passe",l.style.color="var(--color-text-muted)",G("Votre mot de passe a été modifié avec succès !"))});const g=y.querySelector("#form-preferences");g.querySelectorAll(".operator-radio-label").forEach(h=>{h.addEventListener("click",()=>{g.querySelectorAll(".operator-radio-label").forEach(E=>E.classList.remove("selected")),h.classList.add("selected");const k=h.querySelector("input");k&&(k.checked=!0)})}),g.addEventListener("submit",h=>{h.preventDefault();const k=g.querySelector("#prof-emergency-name").value.trim(),E=g.querySelector("#prof-emergency-phone").value.trim(),b=g.querySelector('input[name="preferredPayment"]:checked'),C=b?b.value:"wave",L=g.querySelector("#prof-seat-pref").value,M=g.querySelector("#prof-sms-alerts").checked;e.emergencyContactName=k,e.emergencyContactPhone=E,e.preferredPayment=C,e.seatPreference=L,e.smsAlerts=M,sessionStorage.setItem("current_user",JSON.stringify(e)),localStorage.setItem("saved_passenger_profile",JSON.stringify(e)),G("Vos préférences de voyage et contact d'urgence ont été enregistrés !")});const w=f.querySelector("#btn-logout-profile");return w&&w.addEventListener("click",()=>{sessionStorage.removeItem("current_user"),window.location.hash="#/"}),t}const H=[{id:"doc",name:"Document / Pli Express",icon:"📄",desc:"Courrier, dossiers administratifs, passeports, diplômes (< 1 kg)",basePrice:1500,maxWeight:1},{id:"small",name:"Petit Colis",icon:"📦",desc:"Vêtements, petits paquets, accessoires (1 à 5 kg)",basePrice:2500,maxWeight:5},{id:"medium",name:"Sac / Sacoche Moyenne",icon:"🧳",desc:"Sacs de voyage, cartons moyens, pièces détachées (5 à 15 kg)",basePrice:4e3,maxWeight:15},{id:"large",name:"Gros Carton / Vivres",icon:"📦📦",desc:"Cartons d'ignames, sacs de riz, marchandises en vrac (15 à 30 kg)",basePrice:6e3,maxWeight:30},{id:"heavy",name:"Fret Lourd / Électroménager",icon:"📺",desc:"Télévisions, moteurs, colis volumineux (30 à 50 kg)",basePrice:9e3,maxWeight:50},{id:"fresh",name:"Denrées & Produits Frais",icon:"🧊",desc:"Poissons fumés, attiéké, fruits avec priorité d'embarquement",basePrice:5e3,maxWeight:25}];function j(t,a=2,e={}){let r=(H.find(o=>o.id===t)||H[1]).basePrice;return a>10&&(r+=(a-10)*150),e.isFragile&&(r+=500),e.isInsured&&(r+=1e3),Math.round(r)}function Me(t,a){const e=(t||"ABJ").slice(0,3).toUpperCase(),s=(a||"BDK").slice(0,3).toUpperCase(),r=Math.floor(1e5+Math.random()*9e5);return`COLIS-${e}-${s}-${r}`}function Pe(){return Math.floor(1e3+Math.random()*9e3).toString()}function qe(){const t=document.createElement("div");t.className="main-content courier-container";const a=JSON.parse(sessionStorage.getItem("current_user")||'{"fullname": "Expéditeur Express", "phone": "+225 07 12 34 56 78" }');let e="send",s="small",r=3,o=!1,n=!1,c="wave",p=null;const f=P({label:"Retour aux départs voyageurs",onClick:()=>{window.location.hash="#/app"}});t.appendChild(f);const u=document.createElement("div");u.className="courier-hero-banner no-tilt",u.innerHTML=`
    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: var(--spacing-2);">
      <span class="radar-dot" style="background-color: #10b981; animation: none;"></span>
      <span style="font-size: var(--font-size-xs); color: #34d399; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">
        Service Fret & Courrier Express en Gare Routière
      </span>
    </div>
    <h1 style="font-size: var(--font-size-3xl); color: #ffffff; margin-bottom: var(--spacing-2);">
      Expédiez vos Colis & Marchandises à travers la Côte d'Ivoire
    </h1>
    <p style="font-size: var(--font-size-sm); color: var(--color-text-secondary); max-width: 720px; margin-bottom: 0;">
      Acheminement sécurisé en soute d'autocar VIP le jour même. Code PIN secret de retrait envoyé par SMS au destinataire et traçabilité en temps réel.
    </p>
  `,t.appendChild(u);const v=document.createElement("div");v.className="courier-tabs-nav",v.innerHTML=`
    <button type="button" class="courier-tab-btn active" data-tab="send">
      <span>📤 Expédier un Colis</span>
    </button>
    <button type="button" class="courier-tab-btn" data-tab="track">
      <span>🔍 Suivre un Envoi</span>
    </button>
    <button type="button" class="courier-tab-btn" data-tab="history">
      <span>📋 Mes Expéditions</span>
    </button>
  `,t.appendChild(v);const i=document.createElement("div");i.id="courier-tab-content",t.appendChild(i);function m(){v.querySelectorAll(".courier-tab-btn").forEach(l=>{l.classList.toggle("active",l.getAttribute("data-tab")===e)}),e==="send"?y():e==="track"?x():e==="history"?$():e==="receipt"&&z(),requestAnimationFrame(()=>{O(i)})}function y(){const l=j(s,r,{isFragile:o,isInsured:n});i.innerHTML=`
      <div class="card-blue no-tilt" style="border: 1px solid rgba(59, 130, 246, 0.4);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-4); border-bottom: 1px solid rgba(255, 255, 255, 0.08); padding-bottom: var(--spacing-3); flex-wrap: wrap; gap: var(--spacing-2);">
          <div>
            <h2 style="font-size: var(--font-size-xl); margin-bottom: 2px;">Bordereau d'Expédition de Marchandise</h2>
            <p style="font-size: var(--font-size-xs); color: var(--color-text-muted); margin-bottom: 0;">
              Remplissez les coordonnées de l'expéditeur et du destinataire pour émettre le bon d'embarquement.
            </p>
          </div>
          <span style="background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; color: #34d399; font-size: var(--font-size-xs); font-weight: 700; padding: 4px 12px; border-radius: var(--radius-full);">
            ⚡ Arrivée le jour même
          </span>
        </div>

        <form id="form-send-package" novalidate>
          <!-- 1. Coordonnées Expéditeur & Destinataire -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--spacing-6); margin-bottom: var(--spacing-6);">
            <!-- Bloc Expéditeur -->
            <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-lg); padding: var(--spacing-4);">
              <h3 style="font-size: var(--font-size-base); color: #60a5fa; margin-bottom: var(--spacing-3); display: flex; align-items: center; gap: 6px;">
                <span>👤 Expéditeur (Vous)</span>
              </h3>
              <div class="form-group">
                <label class="form-label" style="font-size: var(--font-size-xs);">Nom complet de l'expéditeur</label>
                <input type="text" id="sender-name" class="form-input" value="${a.fullname}" required placeholder="Ex : Kouassi Jean-Marc" />
              </div>
              <div class="form-group">
                <label class="form-label" style="font-size: var(--font-size-xs);">Téléphone pour suivi SMS</label>
                <input type="tel" id="sender-phone" class="form-input" value="${a.phone}" required placeholder="Ex : +225 07 12 34 56 78" />
              </div>
              <div class="form-group" style="margin-bottom: 0;">
                <label class="form-label" style="font-size: var(--font-size-xs);">Ville & Gare de dépôt</label>
                <select id="sender-city" class="form-select">
                  ${q.map(b=>`<option value="${b}" ${b==="Abidjan"?"selected":""}>${b} (Gare Centrale)</option>`).join("")}
                </select>
              </div>
            </div>

            <!-- Bloc Destinataire -->
            <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-lg); padding: var(--spacing-4);">
              <h3 style="font-size: var(--font-size-base); color: #fbbf24; margin-bottom: var(--spacing-3); display: flex; align-items: center; gap: 6px;">
                <span>🎯 Destinataire (Récepteur)</span>
              </h3>
              <div class="form-group">
                <label class="form-label" style="font-size: var(--font-size-xs);">Nom complet du destinataire</label>
                <input type="text" id="receiver-name" class="form-input" required placeholder="Ex : Yao Michel" />
              </div>
              <div class="form-group">
                <label class="form-label" style="font-size: var(--font-size-xs);">Téléphone du destinataire (Reçoit le PIN par SMS)</label>
                <input type="tel" id="receiver-phone" class="form-input" required placeholder="Ex : +225 05 98 76 54 32" />
              </div>
              <div class="form-group" style="margin-bottom: 0;">
                <label class="form-label" style="font-size: var(--font-size-xs);">Ville & Gare de retrait</label>
                <select id="receiver-city" class="form-select">
                  ${q.map(b=>`<option value="${b}" ${b==="Bondoukou"?"selected":""}>${b} (Gare Centrale)</option>`).join("")}
                </select>
              </div>
            </div>
          </div>

          <!-- 2. Catégorie & Poids du Colis -->
          <div style="margin-bottom: var(--spacing-6);">
            <label class="form-label" style="font-weight: 700; color: #ffffff;">
              📦 Nature et Type de Marchandise à expédier :
            </label>
            <div class="package-types-grid">
              ${H.map(b=>`
                <div class="package-type-card ${s===b.id?"selected":""}" data-cat-id="${b.id}">
                  <div class="package-type-icon">${b.icon}</div>
                  <div class="package-type-name">${b.name}</div>
                  <div class="package-type-price">Dès ${b.basePrice.toLocaleString("fr-FR")} FCFA</div>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- 3. Curseur interactif de poids et description -->
          <div class="weight-slider-container">
            <div class="weight-display-badge">
              <span style="font-weight: 700; color: #ffffff; font-size: var(--font-size-sm);">⚖️ Poids estimé de la marchandise :</span>
              <strong id="weight-label" style="color: #60a5fa; font-size: var(--font-size-lg);">${r} kg</strong>
            </div>
            <input type="range" id="weight-slider" class="weight-range-input" min="1" max="50" value="${r}" />
            <div style="display: flex; justify-content: space-between; font-size: 10px; color: var(--color-text-muted); margin-top: 4px;">
              <span>1 kg (Pli express)</span>
              <span>15 kg (Carton moyen)</span>
              <span>30 kg (Sac vivres)</span>
              <span>50 kg (Fret lourd)</span>
            </div>
          </div>

          <div class="form-group" style="margin-top: var(--spacing-4);">
            <label class="form-label" for="package-description" style="font-size: var(--font-size-xs);">Description du contenu du colis</label>
            <input type="text" id="package-description" class="form-input" placeholder="Ex : 2 Cartons de pagnes et documents originaux" required />
          </div>

          <!-- Options supplémentaires -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: var(--spacing-3); margin-top: var(--spacing-4);">
            <label style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--radius-md); padding: var(--spacing-3); display: flex; align-items: center; gap: var(--spacing-3); cursor: pointer;">
              <input type="checkbox" id="check-fragile" ${o?"checked":""} style="width: 18px; height: 18px; cursor: pointer;" />
              <div>
                <strong style="color: #fbbf24; font-size: var(--font-size-xs); display: block;">⚠️ Marchandise Fragile (+500 F)</strong>
                <span style="font-size: 10px; color: var(--color-text-muted);">Étiquetage spécial et manipulation prioritaire</span>
              </div>
            </label>

            <label style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--radius-md); padding: var(--spacing-3); display: flex; align-items: center; gap: var(--spacing-3); cursor: pointer;">
              <input type="checkbox" id="check-insurance" ${n?"checked":""} style="width: 18px; height: 18px; cursor: pointer;" />
              <div>
                <strong style="color: #34d399; font-size: var(--font-size-xs); display: block;">🛡️ Assurance Déclarée (+1 000 F)</strong>
                <span style="font-size: 10px; color: var(--color-text-muted);">Garantie remboursement 100% en cas d'avarie</span>
              </div>
            </label>
          </div>

          <!-- 4. Choix du convoi transporteur -->
          <div class="form-group" style="margin-top: var(--spacing-6);">
            <label class="form-label" style="font-size: var(--font-size-xs);">Convoi d'acheminement en autocar</label>
            <select id="courier-departure-time" class="form-select">
              <option value="06h30">1er Convoi (06h30) — Arrivée et mise à disposition à 14h00</option>
              <option value="12h00">2e Convoi (12h00) — Arrivée et mise à disposition à 19h30</option>
              <option value="17h30">3e Convoi Soir (17h30) — Arrivée et mise à disposition le lendemain à 07h00</option>
            </select>
          </div>

          <!-- 5. Mode de règlement Mobile Money & Résumé Tarif -->
          <div style="background: linear-gradient(135deg, rgba(37, 99, 235, 0.25) 0%, rgba(15, 23, 42, 0.7) 100%); border: 1px solid #3b82f6; border-radius: var(--radius-xl); padding: var(--spacing-6); margin-top: var(--spacing-6);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-4); flex-wrap: wrap; gap: var(--spacing-2);">
              <div>
                <span style="font-size: var(--font-size-xs); color: #93c5fd; text-transform: uppercase; font-weight: 700;">Coût Total de l'Expédition</span>
                <div id="courier-total-price" style="font-size: var(--font-size-3xl); font-weight: 900; color: #fbbf24;">
                  ${l.toLocaleString("fr-FR")} FCFA
                </div>
              </div>
              <div style="text-align: right;">
                <span style="font-size: var(--font-size-xs); color: #34d399; display: block; font-weight: 600;">✓ Code PIN sécurisé inclus</span>
                <span style="font-size: var(--font-size-xs); color: var(--color-text-secondary);">Notification SMS gratuite</span>
              </div>
            </div>

            <div style="margin-bottom: var(--spacing-4);">
              <label class="form-label" style="font-size: var(--font-size-xs);">Choisir l'opérateur de paiement Mobile Money :</label>
              <div class="operator-radio-group">
                <label class="operator-radio-label ${c==="wave"?"selected":""}">
                  <input type="radio" name="courier-op" value="wave" ${c==="wave"?"checked":""} />
                  <span>🌊 Wave</span>
                </label>
                <label class="operator-radio-label ${c==="orange"?"selected":""}">
                  <input type="radio" name="courier-op" value="orange" ${c==="orange"?"checked":""} />
                  <span>🍊 Orange Money</span>
                </label>
                <label class="operator-radio-label ${c==="mtn"?"selected":""}">
                  <input type="radio" name="courier-op" value="mtn" ${c==="mtn"?"checked":""} />
                  <span>💛 MTN MoMo</span>
                </label>
                <label class="operator-radio-label ${c==="moov"?"selected":""}">
                  <input type="radio" name="courier-op" value="moov" ${c==="moov"?"checked":""} />
                  <span>🔵 Moov Flooz</span>
                </label>
              </div>
            </div>

            <button type="submit" class="btn-card-white" style="width: 100%; padding: var(--spacing-4); font-size: var(--font-size-base);">
              <span>Valider l'envoi & Payer (${l.toLocaleString("fr-FR")} FCFA) ➔</span>
            </button>
          </div>
        </form>
      </div>
    `;const d=i.querySelector("#form-send-package"),g=i.querySelector("#weight-slider"),w=i.querySelector("#weight-label"),h=i.querySelector("#courier-total-price");i.querySelectorAll(".package-type-card").forEach(b=>{b.addEventListener("click",()=>{S.play("click"),s=b.getAttribute("data-cat-id"),y()})}),g&&g.addEventListener("input",b=>{r=parseInt(b.target.value,10),w&&(w.textContent=`${r} kg`);const C=j(s,r,{isFragile:o,isInsured:n});h&&(h.textContent=`${C.toLocaleString("fr-FR")} FCFA`)});const k=i.querySelector("#check-fragile");k&&k.addEventListener("change",b=>{o=b.target.checked;const C=j(s,r,{isFragile:o,isInsured:n});h&&(h.textContent=`${C.toLocaleString("fr-FR")} FCFA`)});const E=i.querySelector("#check-insurance");E&&E.addEventListener("change",b=>{n=b.target.checked;const C=j(s,r,{isFragile:o,isInsured:n});h&&(h.textContent=`${C.toLocaleString("fr-FR")} FCFA`)}),i.querySelectorAll(".operator-radio-label").forEach(b=>{b.addEventListener("click",()=>{i.querySelectorAll(".operator-radio-label").forEach(C=>C.classList.remove("selected")),b.classList.add("selected"),c=b.querySelector("input").value})}),d.addEventListener("submit",b=>{b.preventDefault();const C=d.querySelector("#sender-name").value.trim(),L=d.querySelector("#sender-phone").value.trim(),M=d.querySelector("#sender-city").value,J=d.querySelector("#receiver-name").value.trim(),W=d.querySelector("#receiver-phone").value.trim(),D=d.querySelector("#receiver-city").value,U=d.querySelector("#package-description").value.trim(),re=d.querySelector("#courier-departure-time").value;if(!C||!L||!J||!W||!U){alert("Veuillez remplir toutes les informations obligatoires pour émettre le colis.");return}const oe=Me(M,D),ne=Pe(),ie=j(s,r,{isFragile:o,isInsured:n}),K={trackingNumber:oe,secretPin:ne,senderName:C,senderPhone:L,senderCity:M,receiverName:J,receiverPhone:W,receiverCity:D,description:U,departureTime:re,category:s,weightKg:r,isFragile:o,isInsured:n,priceCfa:ie,paymentOperator:c,createdAt:new Date().toISOString(),status:"EN_TRANSIT",stationDropName:`Gare Routière Centrale de ${M}`,stationPickupName:`Gare Routière Principale de ${D}`},Y=JSON.parse(localStorage.getItem("user_couriers_history")||"[]");Y.unshift(K),localStorage.setItem("user_couriers_history",JSON.stringify(Y)),p=K,e="receipt",m(),ee()})}function x(){i.innerHTML=`
      <div class="card-blue no-tilt" style="max-width: 780px; margin: 0 auto;">
        <h2 style="font-size: var(--font-size-xl); margin-bottom: var(--spacing-2);">
          🔍 Suivi de Colis & Marchandise en Temps Réel
        </h2>
        <p style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-bottom: var(--spacing-4);">
          Entrez le numéro de bordereau délivré lors de l'enregistrement pour localiser votre colis.
        </p>

        <form id="form-track-search" style="display: flex; gap: var(--spacing-2); margin-bottom: var(--spacing-6);">
          <input 
            type="text" 
            id="tracking-input" 
            class="form-input" 
            placeholder="Ex : COLIS-ABJ-BDK-784920" 
            style="flex: 1;" 
            required 
          />
          <button type="submit" class="btn-card-white">
            <span>Rechercher</span>
          </button>
        </form>

        <div style="font-size: var(--font-size-xs); color: var(--color-text-muted); margin-bottom: var(--spacing-6);">
          💡 Exemples de tests rapides : 
          <button type="button" class="quick-track-sample" data-code="COLIS-ABJ-BDK-482910" style="background:none; border:none; color:#60a5fa; cursor:pointer; text-decoration:underline;">COLIS-ABJ-BDK-482910 (En transit)</button> • 
          <button type="button" class="quick-track-sample" data-code="COLIS-ABJ-BKE-918234" style="background:none; border:none; color:#34d399; cursor:pointer; text-decoration:underline;">COLIS-ABJ-BKE-918234 (Arrivé en gare)</button>
        </div>

        <div id="tracking-result-box">
          <!-- Timeline de démonstration dynamique -->
          <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid #1e3570; border-radius: var(--radius-lg); padding: var(--spacing-6);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-4); flex-wrap: wrap; gap: var(--spacing-2);">
              <div>
                <span style="font-size: var(--font-size-xs); color: var(--color-text-muted);">Bordereau :</span>
                <strong style="color: #60a5fa; font-size: var(--font-size-lg); display: block;">COLIS-ABJ-BDK-482910</strong>
              </div>
              <span class="profile-status-badge" style="background: rgba(37, 99, 235, 0.2); color: #93c5fd; border-color: #3b82f6;">
                🚌 En transit sur l'axe Abidjan ➔ Bondoukou
              </span>
            </div>

            <div class="tracking-timeline">
              <div class="tracking-step done">
                <div class="tracking-step-dot">✓</div>
                <div class="tracking-step-content">
                  <div class="tracking-step-title">
                    <span>1. Enregistrement & Paiement validé</span>
                    <span class="tracking-step-time">Aujourd'hui à 05h45</span>
                  </div>
                  <p class="tracking-step-desc">Paiement Mobile Money Wave confirmé. Bordereau émis avec succès.</p>
                </div>
              </div>

              <div class="tracking-step done">
                <div class="tracking-step-dot">✓</div>
                <div class="tracking-step-content">
                  <div class="tracking-step-title">
                    <span>2. Dépôt & Pesée à la Gare d'Adjamé</span>
                    <span class="tracking-step-time">Aujourd'hui à 06h15</span>
                  </div>
                  <p class="tracking-step-desc">Colis remis au guichet Fret Quai N°3. Pesée : 4.5 kg. Étiquette code-barres apposée.</p>
                </div>
              </div>

              <div class="tracking-step current">
                <div class="tracking-step-dot">●</div>
                <div class="tracking-step-content" style="border-color: #3b82f6; background-color: rgba(37, 99, 235, 0.1);">
                  <div class="tracking-step-title">
                    <span style="color: #93c5fd;">3. En cours d'acheminement (Convoi 06h30)</span>
                    <span class="tracking-step-time">Passage PK 190 (Yamoussoukro)</span>
                  </div>
                  <p class="tracking-step-desc">Autocar VIP immatriculé 4820-JG-01. Arrivée estimée à Bondoukou vers 14h00.</p>
                </div>
              </div>

              <div class="tracking-step">
                <div class="tracking-step-dot">4</div>
                <div class="tracking-step-content">
                  <div class="tracking-step-title">
                    <span>4. Réception à la Gare de Bondoukou</span>
                    <span class="tracking-step-time">Prévu à 14h00</span>
                  </div>
                  <p class="tracking-step-desc">Mise à disposition au guichet Retrait Colis. Notification SMS envoyée au destinataire.</p>
                </div>
              </div>

              <div class="tracking-step">
                <div class="tracking-step-dot">5</div>
                <div class="tracking-step-content">
                  <div class="tracking-step-title">
                    <span>5. Remise au Destinataire (Sur présentation du PIN)</span>
                    <span class="tracking-step-time">En attente</span>
                  </div>
                  <p class="tracking-step-desc">Le destinataire devra présenter sa pièce d'identité et le code PIN secret à 4 chiffres.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;const l=i.querySelector("#form-track-search"),d=i.querySelector("#tracking-input");l.addEventListener("submit",g=>{g.preventDefault(),S.play("click");const w=d.value.trim().toUpperCase();alert(`Recherche en cours pour le colis : ${w}. Statut : En cours d'acheminement sur l'axe interurbain.`)}),i.querySelectorAll(".quick-track-sample").forEach(g=>{g.addEventListener("click",()=>{d.value=g.getAttribute("data-code")})})}function $(){const l=JSON.parse(localStorage.getItem("user_couriers_history")||"[]");if(l.length===0){i.innerHTML=`
        <div class="card-blue no-tilt" style="max-width: 600px; margin: 0 auto; text-align: center; padding: var(--spacing-8);">
          <div style="font-size: 3rem; margin-bottom: var(--spacing-3);">📦</div>
          <h2 style="font-size: var(--font-size-xl); margin-bottom: var(--spacing-2);">Aucun colis expédié pour le moment</h2>
          <p style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-bottom: var(--spacing-4);">
            Vous n'avez pas encore envoyé de marchandises via la plateforme.
          </p>
          <button type="button" id="btn-goto-send" class="btn-card-white">
            <span>Expédier mon premier colis</span>
          </button>
        </div>
      `;const d=i.querySelector("#btn-goto-send");d&&d.addEventListener("click",()=>{e="send",m()});return}i.innerHTML=`
      <div style="display: flex; flex-direction: column; gap: var(--spacing-4);">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <h2 style="font-size: var(--font-size-xl); margin-bottom: 0;">Mes Colis & Marchandises (${l.length})</h2>
          <button type="button" id="btn-new-package-top" class="btn-primary-blue" style="font-size: var(--font-size-xs); padding: var(--spacing-2) var(--spacing-4);">
            + Nouvel Envoi
          </button>
        </div>

        <div style="display: flex; flex-direction: column; gap: var(--spacing-3);">
          ${l.map(d=>`
            <div class="card-blue no-tilt" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: var(--spacing-3); padding: var(--spacing-4);">
              <div>
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                  <span class="profile-status-badge">✓ Payé (${d.paymentOperator.toUpperCase()})</span>
                  <strong style="color: #60a5fa; font-size: var(--font-size-sm);">${d.trackingNumber}</strong>
                  <span style="background: rgba(245, 158, 11, 0.2); color: #fbbf24; padding: 2px 6px; border-radius: var(--radius-sm); font-size: 10px; font-weight: 700;">PIN: ${d.secretPin}</span>
                </div>
                <h3 style="font-size: var(--font-size-base); color: #ffffff; margin-bottom: 2px;">
                  ${d.senderCity} ➔ ${d.receiverCity} • <span style="color: #cbd5e1; font-weight: normal;">Destinataire : <strong>${d.receiverName}</strong> (${d.receiverPhone})</span>
                </h3>
                <p style="font-size: var(--font-size-xs); color: var(--color-text-muted); margin-bottom: 0;">
                  📦 ${d.description} (${d.weightKg} kg) • Convoi : ${d.departureTime}
                </p>
              </div>

              <div style="display: flex; align-items: center; gap: var(--spacing-3);">
                <span style="font-size: var(--font-size-lg); font-weight: 800; color: #fbbf24;">
                  ${d.priceCfa.toLocaleString("fr-FR")} FCFA
                </span>
                <button type="button" class="btn-card-white btn-view-receipt" data-tracking="${d.trackingNumber}">
                  <span>Voir Bordereau</span>
                </button>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `,i.querySelector("#btn-new-package-top").addEventListener("click",()=>{e="send",m()}),i.querySelectorAll(".btn-view-receipt").forEach(d=>{d.addEventListener("click",()=>{const g=d.getAttribute("data-tracking"),w=l.find(h=>h.trackingNumber===g);w&&(p=w,e="receipt",m())})})}function z(){if(!p){e="send",m();return}const l=p,d=encodeURIComponent(`📦 BORDEREAU COLIS GARE EXPRESS
Bonjour ${l.receiverName},
Un colis vous a été expédié de ${l.senderCity} vers ${l.receiverCity} par ${l.senderName}.

📌 N° Suivi : ${l.trackingNumber}
🔑 CODE PIN SECRET DE RETRAIT : ${l.secretPin}
🏢 Point de retrait : ${l.stationPickupName}
⏰ Convoi de : ${l.departureTime}

Veuillez vous munir de votre pièce d'identité et de ce code PIN pour récupérer le colis.`);i.innerHTML=`
      <div class="card-blue courier-receipt-card no-tilt">
        <div class="courier-receipt-header">
          <h2 style="color: #ffffff; font-size: var(--font-size-xl); margin-bottom: 2px;">
            ✓ BORDEREAU OFFICIEL D'EXPÉDITION COLIS
          </h2>
          <span style="color: rgba(255,255,255,0.9); font-size: var(--font-size-sm); font-weight: 700;">
            N° Suivi : ${l.trackingNumber}
          </span>
        </div>

        <div style="padding: var(--spacing-6);">
          <!-- QR Code de contrôle -->
          <div class="ticket-qr-mock" style="margin-bottom: var(--spacing-4);">
            <svg viewBox="0 0 24 24" width="80" height="80" fill="#0f172a">
              <path d="M2 2h8v8H2zM4 4v4h4V4zm10-2h8v8h-8zM16 4v4h4V4zM2 14h8v8H2zm2 2v4h4v-4zm10 0h2v2h-2zm4 0h4v6h-4zm-4 4h2v2h-2zm2-2h2v2h-2zm-6-2h2v2h-2zm0 4h2v2h-2z"/>
            </svg>
          </div>

          <!-- Code PIN Secret de retrait -->
          <div class="pin-security-box">
            <span style="font-size: var(--font-size-xs); color: #fbbf24; text-transform: uppercase; font-weight: 700; display: block; margin-bottom: 4px;">
              🔑 CODE PIN SECRET DE RETRAIT (À FOURNIR AU DESTINATAIRE) :
            </span>
            <div class="pin-code-large">${l.secretPin}</div>
            <span style="font-size: 11px; color: var(--color-text-secondary);">
              Exigé au guichet de destination avec la pièce d'identité du destinataire.
            </span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-4); font-size: var(--font-size-sm); margin: var(--spacing-4) 0;">
            <div>
              <span style="color: var(--color-text-muted); display: block; font-size: var(--font-size-xs);">Expéditeur :</span>
              <strong style="color: #ffffff;">${l.senderName}</strong>
              <div style="font-size: var(--font-size-xs); color: #cbd5e1;">📞 ${l.senderPhone}</div>
              <div style="font-size: var(--font-size-xs); color: #93c5fd;">📍 ${l.stationDropName}</div>
            </div>

            <div>
              <span style="color: var(--color-text-muted); display: block; font-size: var(--font-size-xs);">Destinataire :</span>
              <strong style="color: #ffffff;">${l.receiverName}</strong>
              <div style="font-size: var(--font-size-xs); color: #cbd5e1;">📞 ${l.receiverPhone}</div>
              <div style="font-size: var(--font-size-xs); color: #93c5fd;">📍 ${l.stationPickupName}</div>
            </div>
          </div>

          <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-md); padding: var(--spacing-3); font-size: var(--font-size-xs); margin-bottom: var(--spacing-4);">
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
              <span>📦 Contenu déclaré : <strong>${l.description}</strong></span>
              <span>⚖️ Poids : <strong>${l.weightKg} kg</strong></span>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span>Convoi : <strong>${l.departureTime}</strong></span>
              <span style="color: #fbbf24; font-weight: 700;">Règlement : ${l.priceCfa.toLocaleString("fr-FR")} FCFA (Réglé par ${l.paymentOperator.toUpperCase()})</span>
            </div>
          </div>

          <!-- Boutons d'action : Partager WhatsApp & Imprimer -->
          <div style="display: flex; gap: var(--spacing-3); flex-wrap: wrap;">
            <a 
              href="https://api.whatsapp.com/send?text=${d}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn-primary-blue" 
              style="flex: 1; min-width: 180px; text-align: center; background-color: #10b981; border-color: #059669;"
            >
              <span>📲 Partager au destinataire (WhatsApp)</span>
            </a>
            <button type="button" id="btn-print-courier" class="btn-card-white" style="flex: 1; min-width: 160px;">
              <span>🖨️ Imprimer le Bordereau</span>
            </button>
            <button type="button" id="btn-back-to-courier-list" class="btn-card-white" style="flex: 1; min-width: 140px;">
              <span>📋 Mes Envois</span>
            </button>
          </div>
        </div>
      </div>
    `;const g=i.querySelector("#btn-print-courier");g&&g.addEventListener("click",()=>{window.print()});const w=i.querySelector("#btn-back-to-courier-list");w&&w.addEventListener("click",()=>{e="history",m()})}return v.querySelectorAll(".courier-tab-btn").forEach(l=>{l.addEventListener("click",()=>{S.play("click"),e=l.getAttribute("data-tab"),m()})}),m(),t}function Te(){const t=document.createElement("div");t.className="main-content";const a=P({label:"Retour à l'espace voyageur",onClick:()=>{window.location.hash="#/app"}});t.appendChild(a);const e=document.createElement("div");e.style.margin="var(--spacing-4) 0 var(--spacing-6) 0",e.style.display="flex",e.style.justifyContent="space-between",e.style.alignItems="center",e.style.flexWrap="wrap",e.style.gap="var(--spacing-4)",e.innerHTML=`
    <div>
      <h1 style="margin-bottom: var(--spacing-1);">Tableau de Bord Administrateur</h1>
      <p style="margin-bottom: 0;">Supervision en direct des départs, des réservations et des gares.</p>
    </div>
    <a href="#/admin/departures" class="btn-primary-blue">
      <span>+ Programmer un départ</span>
    </a>
  `,t.appendChild(e);const s=document.createElement("div");s.className="admin-kpi-grid",s.innerHTML=`
    <div class="card-blue kpi-card">
      <span class="kpi-title">Convois programmés aujourd'hui</span>
      <div class="kpi-value">12 Départs</div>
      <span class="kpi-trend">Lignes Abidjan, Bondoukou, Bouaké</span>
    </div>

    <div class="card-blue kpi-card">
      <span class="kpi-title">Billets réservés en ligne</span>
      <div class="kpi-value">284 Passagers</div>
      <span class="kpi-trend">↗ +18% par rapport à hier</span>
    </div>

    <div class="card-blue kpi-card">
      <span class="kpi-title">Taux de remplissage moyen</span>
      <div class="kpi-value">86.5 %</div>
      <span class="kpi-trend">Capacité globale optimisée</span>
    </div>

    <div class="card-blue kpi-card">
      <span class="kpi-title">Recettes encaissées (FCFA)</span>
      <div class="kpi-value" style="color: #fbbf24;">1 988 000 F</div>
      <span class="kpi-trend">Mobile Money (Wave / OM / MTN)</span>
    </div>
  `,t.appendChild(s);const r=document.createElement("div");return r.className="card-blue",r.innerHTML=`
    <h2 style="font-size: var(--font-size-xl); margin-bottom: var(--spacing-4);">
      Départs en cours et à venir (Gare Routière)
    </h2>
    <div class="admin-table-container">
      <table class="admin-table">
        <thead>
          <tr>
            <th>Convoi</th>
            <th>Trajet</th>
            <th>Heure</th>
            <th>Gare d'embarquement</th>
            <th>Places réservées</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1er Départ</strong></td>
            <td>Abidjan ➔ Bondoukou</td>
            <td>06h30</td>
            <td>Gare d'Adjamé Quai Nord</td>
            <td>42 / 60</td>
            <td><span class="badge-bus-status status-on-time">En route</span></td>
          </tr>
          <tr>
            <td><strong>2e Départ</strong></td>
            <td>Abidjan ➔ Bondoukou</td>
            <td>10h00</td>
            <td>Gare d'Adjamé Pôle Est</td>
            <td>36 / 60</td>
            <td><span class="badge-bus-status status-boarding">Embarquement</span></td>
          </tr>
          <tr>
            <td><strong>3e Départ</strong></td>
            <td>Abidjan ➔ Bondoukou</td>
            <td>14h30</td>
            <td>Gare de Yopougon Siporex</td>
            <td>48 / 60</td>
            <td><span class="badge-bus-status status-on-time">À quai</span></td>
          </tr>
          <tr>
            <td><strong>1er Départ</strong></td>
            <td>Abidjan ➔ Bouaké</td>
            <td>07h00</td>
            <td>Gare d'Adjamé Renaissance</td>
            <td>55 / 70</td>
            <td><span class="badge-bus-status status-on-time">En route</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  `,t.appendChild(r),t}function Le(){const t=document.createElement("div");t.className="main-content";const a=P({label:"Retour au tableau de bord",onClick:()=>{window.location.hash="#/admin"}});t.appendChild(a);const e=document.createElement("div");e.className="card-blue auth-card",e.style.maxWidth="680px",e.style.margin="var(--spacing-6) auto",e.innerHTML=`
    <div class="auth-header">
      <h1 class="auth-title">Programmer un Nouveau Départ</h1>
      <p class="auth-subtitle">Configurez un horaire, une gare d'embarquement et la capacité du car.</p>
    </div>

    <form id="admin-departure-form" class="auth-form">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-4);">
        <div class="form-group">
          <label class="form-label" for="adm-from">Ville de départ</label>
          <select id="adm-from" class="form-select" required>
            ${q.map(r=>`<option value="${r}">${r}</option>`).join("")}
          </select>
        </div>

        <div class="form-group">
          <label class="form-label" for="adm-to">Ville d'arrivée</label>
          <select id="adm-to" class="form-select" required>
            ${q.map((r,o)=>`<option value="${r}" ${o===1?"selected":""}>${r}</option>`).join("")}
          </select>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-4);">
        <div class="form-group">
          <label class="form-label" for="adm-rank">Libellé du convoi</label>
          <input type="text" id="adm-rank" class="form-input" placeholder="Ex : 4e Départ" required />
        </div>

        <div class="form-group">
          <label class="form-label" for="adm-time">Heure de départ</label>
          <input type="text" id="adm-time" class="form-input" placeholder="Ex : 16h30" required />
        </div>
      </div>

      <div class="form-group">
        <label class="form-label" for="adm-station">Nom de la gare d'embarquement</label>
        <input type="text" id="adm-station" class="form-input" placeholder="Ex : Gare Routière d'Adjamé Quai Ouest" required />
      </div>

      <div class="form-group">
        <label class="form-label" for="adm-directions">Indications précises pour les passagers</label>
        <textarea id="adm-directions" class="form-input" rows="3" placeholder="Ex : Présentation voie C face au guichet 4. Dépose bagages 30min avant..." required></textarea>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-4);">
        <div class="form-group">
          <label class="form-label" for="adm-price">Tarif du ticket (FCFA)</label>
          <input type="number" id="adm-price" class="form-input" placeholder="Ex : 7500" required />
        </div>

        <div class="form-group">
          <label class="form-label" for="adm-seats">Nombre de places</label>
          <input type="number" id="adm-seats" class="form-input" placeholder="Ex : 60" value="60" required />
        </div>
      </div>

      <button type="submit" class="btn-card-white" id="btn-save-departure" style="width: 100%; margin-top: var(--spacing-4); padding: var(--spacing-4);">
        <span>Enregistrer et publier le départ</span>
      </button>
    </form>
  `;const s=e.querySelector("#admin-departure-form");return s.addEventListener("submit",r=>{r.preventDefault();const o=s.querySelector("#btn-save-departure");o.disabled=!0,o.innerHTML="<span>Publication en cours...</span>",setTimeout(()=>{window.location.hash="#/admin"},600)}),t.appendChild(e),t}const I=document.getElementById("app"),X={"/":xe,"/register":ke,"/login":we,"/app":Se,"/payment":ze,"/confirmation":Ee,"/history":$e,"/profile":Ae,"/courier":qe,"/admin":Te,"/admin/departures":Le};function Z(){if(!I)return;const t=window.location.hash.slice(1)||"/",a=t.startsWith("/")?t:`/${t}`,e=X[a]||X["/"];a==="/courier"?document.body.classList.add("page-courier"):document.body.classList.remove("page-courier"),I.innerHTML="";const s=e();I.appendChild(s),window.scrollTo({top:0,behavior:"smooth"}),requestAnimationFrame(()=>{O(I),a!=="/courier"&&F(I)})}document.addEventListener("DOMContentLoaded",()=>{ye(),le(),ue(),window.addEventListener("hashchange",Z),Z()});
