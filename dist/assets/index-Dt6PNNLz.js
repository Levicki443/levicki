(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();function G(t){const a=document.getElementById(t);a&&(a.classList.add("active"),document.body.style.overflow="hidden")}function V(t){const a=document.getElementById(t);a&&(a.classList.remove("active"),document.body.style.overflow="")}function W(){if(document.getElementById("modals-container"))return;const t=document.createElement("div");t.id="modals-container",t.innerHTML=`
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
  `,document.body.appendChild(t),t.querySelectorAll("[data-close]").forEach(a=>{a.addEventListener("click",()=>{const e=a.getAttribute("data-close");V(e)})}),t.querySelectorAll(".modal-backdrop").forEach(a=>{a.addEventListener("click",e=>{e.target===a&&V(a.id)})}),document.addEventListener("keydown",a=>{if(a.key==="Escape"){const e=document.querySelector(".modal-backdrop.active");e&&V(e.id)}})}let L=null,E=localStorage.getItem("app_sound_enabled")!=="false";function Y(){if(!L&&typeof window<"u"){const t=window.AudioContext||window.webkitAudioContext;t&&(L=new t)}return L&&L.state==="suspended"&&L.resume(),L}const k={isEnabled(){return E},toggleSound(){return E=!E,localStorage.setItem("app_sound_enabled",E?"true":"false"),E&&this.play("click"),E},play(t="click"){if(E)try{const a=Y();if(!a)return;const e=a.currentTime;if(t==="click"){const s=a.createOscillator(),r=a.createGain();s.type="sine",s.frequency.setValueAtTime(800,e),s.frequency.exponentialRampToValueAtTime(300,e+.05),r.gain.setValueAtTime(.15,e),r.gain.exponentialRampToValueAtTime(.01,e+.05),s.connect(r),r.connect(a.destination),s.start(e),s.stop(e+.05)}else if(t==="seat"){const s=a.createOscillator(),r=a.createGain();s.type="triangle",s.frequency.setValueAtTime(520,e),s.frequency.exponentialRampToValueAtTime(780,e+.08),r.gain.setValueAtTime(.2,e),r.gain.exponentialRampToValueAtTime(.01,e+.08),s.connect(r),r.connect(a.destination),s.start(e),s.stop(e+.08)}else if(t==="success")[523.25,659.25,783.99,1046.5].forEach((r,o)=>{const n=a.createOscillator(),l=a.createGain(),d=e+o*.09;n.type="triangle",n.frequency.setValueAtTime(r,d),l.gain.setValueAtTime(.25,d),l.gain.exponentialRampToValueAtTime(.001,d+.35),n.connect(l),l.connect(a.destination),n.start(d),n.stop(d+.35)});else if(t==="horn"){const s=a.createOscillator(),r=a.createOscillator(),o=a.createGain();s.type="sawtooth",r.type="sawtooth",s.frequency.setValueAtTime(370,e),r.frequency.setValueAtTime(440,e),o.gain.setValueAtTime(.12,e),o.gain.exponentialRampToValueAtTime(.01,e+.25),s.connect(o),r.connect(o),o.connect(a.destination),s.start(e),r.start(e),s.stop(e+.25),r.stop(e+.25)}else if(t==="bubble"){const s=a.createOscillator(),r=a.createGain();s.type="sine",s.frequency.setValueAtTime(400,e),s.frequency.exponentialRampToValueAtTime(900,e+.1),r.gain.setValueAtTime(.18,e),r.gain.exponentialRampToValueAtTime(.01,e+.1),s.connect(r),r.connect(a.destination),s.start(e),s.stop(e+.1)}}catch{}}};function K(){k.play("success");const t=document.createElement("canvas");t.className="confetti-canvas-overlay",document.body.appendChild(t);const a=t.getContext("2d");let e=t.width=window.innerWidth,s=t.height=window.innerHeight;const r=["#2563eb","#3b82f6","#10b981","#fbbf24","#f59e0b","#ec4899","#ffffff"],o=[],n=140;for(let p=0;p<n;p++)o.push({x:e*.5+(Math.random()-.5)*200,y:s*.4+(Math.random()-.5)*100,vx:(Math.random()-.5)*18,vy:(Math.random()-.8)*20-4,size:Math.random()*8+6,color:r[Math.floor(Math.random()*r.length)],rotation:Math.random()*360,vRot:(Math.random()-.5)*12,opacity:1,shape:Math.random()>.4?"rect":"circle"});let l;const d=Date.now();function u(){const p=Date.now()-d;a.clearRect(0,0,e,s);let f=0;o.forEach(i=>{i.x+=i.vx,i.y+=i.vy,i.vy+=.45,i.vx*=.98,i.rotation+=i.vRot,p>1800&&(i.opacity-=.02),i.opacity>0&&i.y<s+50&&(f++,a.save(),a.translate(i.x,i.y),a.rotate(i.rotation*Math.PI/180),a.globalAlpha=Math.max(0,i.opacity),a.fillStyle=i.color,i.shape==="rect"?a.fillRect(-i.size/2,-i.size/2,i.size,i.size*.6):(a.beginPath(),a.arc(0,0,i.size/2,0,Math.PI*2),a.fill()),a.restore())}),f>0&&p<4e3?l=requestAnimationFrame(u):(cancelAnimationFrame(l),t.parentNode&&t.parentNode.removeChild(t))}u()}function I(t=document){t.querySelectorAll(".btn-primary-blue, .btn-card-white, .btn-back-3d, .btn-nav-link").forEach(e=>{e.dataset.hasRipple||(e.dataset.hasRipple="true",e.classList.add("btn-interactive"),e.addEventListener("click",s=>{k.play("click");const r=e.getBoundingClientRect(),o=document.createElement("span"),n=Math.max(r.width,r.height),l=n/2;o.style.width=o.style.height=`${n}px`,o.style.left=`${s.clientX-r.left-l}px`,o.style.top=`${s.clientY-r.top-l}px`,o.classList.add("ripple-circle");const d=e.querySelector(".ripple-circle");d&&d.remove(),e.appendChild(o),setTimeout(()=>{o.remove()},600)}))})}function B(t=document){t.querySelectorAll(".card-blue, .departure-card, .feature-card, .profile-hero-card").forEach(e=>{e.dataset.hasTilt||(e.dataset.hasTilt="true",e.addEventListener("mousemove",s=>{const r=e.getBoundingClientRect(),o=s.clientX-r.left,n=s.clientY-r.top,l=r.width/2,d=r.height/2,u=(n-d)/d*-5,p=(o-l)/l*5;e.style.transform=`perspective(1000px) rotateX(${u.toFixed(2)}deg) rotateY(${p.toFixed(2)}deg) translateY(-2px)`}),e.addEventListener("mouseleave",()=>{e.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)"}))})}function Q(t=document){t.querySelectorAll("[data-counter-target]").forEach(e=>{const s=parseInt(e.getAttribute("data-counter-target"),10);if(isNaN(s))return;let r=0;const o=1200,n=25,l=o/n,d=s/l,u=setInterval(()=>{r+=d,r>=s?(e.textContent=s.toLocaleString("fr-FR"),clearInterval(u)):e.textContent=Math.floor(r).toLocaleString("fr-FR")},n)})}const X={horaires:"🚌 Les départs ont lieu tous les jours : 1er départ (06h30 - Matinal), 2e départ (12h00 - Midi) et 3e départ (17h30 - Soir). Présentez-vous 30 min avant l'embarquement !",paiement:"💳 Vous pouvez régler votre billet en 1 clic par Wave, Orange Money, MTN MoMo ou Moov Flooz sans aucun frais supplémentaire.",bagages:"🧳 Chaque passager a droit à 1 valise en soute (jusqu'à 25 kg) + 1 bagage à main gratuit. Les colis volumineux font l'objet d'un supplément au guichet.",gares:"📍 À Abidjan, les principales gares sont : Gare Internationale d'Adjamé (Bd Nangui Abrogoua), Gare UTB Yopougon Siporex, et Gare de Treichville.",ticket:"🎟️ Une fois votre paiement validé, votre billet électronique officiel est généré instantanément avec un QR Code. Vous pouvez le présenter sur votre smartphone ou l'imprimer !"};function Z(){if(document.getElementById("assistant-bot-root"))return;const a=document.createElement("div");a.id="assistant-bot-root",a.className="assistant-widget-container",a.innerHTML=`
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
        <button type="button" class="quick-chip-btn" data-topic="horaires">🕐 Horaires</button>
        <button type="button" class="quick-chip-btn" data-topic="paiement">💳 Paiement Wave/OM</button>
        <button type="button" class="quick-chip-btn" data-topic="bagages">🧳 Bagages</button>
        <button type="button" class="quick-chip-btn" data-topic="gares">📍 Gares</button>
        <button type="button" class="quick-chip-btn" data-topic="ticket">🎟️ Mon Billet</button>
      </div>
    </div>

    <button type="button" class="assistant-trigger-btn" id="btn-toggle-assistant" aria-label="Ouvrir l'assistant voyageur">
      <span>💬</span>
      <span class="assistant-badge-alert">1</span>
    </button>
  `,document.body.appendChild(a);const e=a.querySelector("#assistant-window"),s=a.querySelector("#btn-toggle-assistant"),r=a.querySelector("#btn-close-chat"),o=a.querySelector("#chat-messages-container"),n=a.querySelectorAll(".quick-chip-btn"),l=a.querySelector(".assistant-badge-alert");function d(){k.play("bubble"),e.classList.toggle("active")&&l&&(l.style.display="none")}s.addEventListener("click",d),r.addEventListener("click",d),n.forEach(u=>{u.addEventListener("click",()=>{k.play("click");const p=u.getAttribute("data-topic"),f=u.textContent,i=X[p]||"Je suis à votre disposition pour vous orienter dans vos voyages !",m=document.createElement("div");m.className="chat-bubble user",m.textContent=f,o.appendChild(m),setTimeout(()=>{k.play("bubble");const v=document.createElement("div");v.className="chat-bubble bot",v.textContent=i,o.appendChild(v),o.scrollTop=o.scrollHeight},400),o.scrollTop=o.scrollHeight})})}function ee(){const t=document.createElement("header");t.className="site-header";const a=JSON.parse(sessionStorage.getItem("current_user")||"null"),e=k.isEnabled();t.innerHTML=`
    <a href="#/" class="brand-logo" aria-label="Accueil - Gare Routière">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="4"></rect>
        <path d="M7 10h10"></path>
        <path d="M7 14h10"></path>
        <circle cx="8" cy="18" r="1"></circle>
        <circle cx="16" cy="18" r="1"></circle>
      </svg>
      <span>Gare<span style="color: var(--color-btn-blue-bg);">Express</span></span>
      <span class="brand-badge">Côte d'Ivoire</span>
    </a>

    <nav class="nav-actions" aria-label="Navigation secondaire">
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
  `;const s=t.querySelector("#nav-btn-about"),r=t.querySelector("#nav-btn-contact"),o=t.querySelector("#btn-toggle-sound");return s&&s.addEventListener("click",()=>{G("about-modal")}),r&&r.addEventListener("click",()=>{G("contact-modal")}),o&&o.addEventListener("click",()=>{const n=k.toggleSound();o.textContent=n?"🔊":"🔇"}),t}function J(){const t=document.createElement("div");t.className="live-ticker-bar",t.innerHTML=`
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
  `;const a=t.querySelector("#live-clock-time");function e(){const s=new Date;a&&(a.textContent=s.toLocaleTimeString("fr-FR",{timeZone:"UTC",hour:"2-digit",minute:"2-digit",second:"2-digit"}))}return setInterval(e,1e3),e(),t}const T=["Abidjan","Bondoukou","Bouaké","Yamoussoukro","Korhogo","San-Pédro","Man","Daloa"],te=[{id:"trip-abj-bdk",departureCity:"Abidjan",arrivalCity:"Bondoukou",distanceKm:420,estimatedDuration:"7h 30min",departures:[{id:"dep-abj-bdk-1",rankLabel:"1er Départ",time:"06h30",stationName:"Gare Principale d'Adjamé (Quai Nord)",stationAddress:"Adjamé Liberté, à 100m du grand carrefour",directions:"Emprunter le boulevard principal, quai n°3 réservé aux lignes de l'Est (Bondoukou / Bouna). Présentation recommandée 30 minutes avant le départ.",busType:"Car Grand Confort VIP (Climatisé, Wifi, Prises USB)",company:"Compagnie Express du Zanzan",priceCfa:7500,availableSeats:18},{id:"dep-abj-bdk-2",rankLabel:"2e Départ",time:"10h00",stationName:"Gare Routière d'Adjamé — Pôle Est",stationAddress:"Boulevard Nangui Abrogoua, Face Pharmacie Centrale",directions:"Accès direct par le couloir central des cars interurbains. Guichet d'enregistrement et dépose bagages Quai 2.",busType:"Car Standard 60 places (Climatisation active)",company:"Compagnie Express du Zanzan",priceCfa:7e3,availableSeats:24},{id:"dep-abj-bdk-3",rankLabel:"3e Départ",time:"14h30",stationName:"Gare de Yopougon Siporex",stationAddress:"Carrefour Siporex, Terminus des lignes Est",directions:"Point d'embarquement côté autoroute du Nord avant bifurcation vers l'Est. Parking voyageurs disponible.",busType:"Car VIP Confort Plus (Climatisé, Écrans individuels)",company:"Union des Transporteurs de l'Est",priceCfa:8e3,availableSeats:12}]},{id:"trip-abj-bke",departureCity:"Abidjan",arrivalCity:"Bouaké",distanceKm:350,estimatedDuration:"4h 45min",departures:[{id:"dep-abj-bke-1",rankLabel:"1er Départ",time:"07h00",stationName:"Gare d'Adjamé Renaissance",stationAddress:"Boulevard de la Paix, Adjamé",directions:"Quai réservé aux lignes Centre & Nord. Voie express directe autoroute.",busType:"Car VIP Grand Tourisme",company:"Société Nationale de Transport",priceCfa:6e3,availableSeats:15},{id:"dep-abj-bke-2",rankLabel:"2e Départ",time:"11h30",stationName:"Gare de Yopougon Gesco",stationAddress:"Sortie Autoroute du Nord, Gesco",directions:"Embarquement rapide en bordure d'autoroute, idéal pour les résidents de Yopougon.",busType:"Car Standard Confort",company:"Société Nationale de Transport",priceCfa:5500,availableSeats:28}]},{id:"trip-abj-yakro",departureCity:"Abidjan",arrivalCity:"Yamoussoukro",distanceKm:240,estimatedDuration:"2h 45min",departures:[{id:"dep-abj-yak-1",rankLabel:"1er Départ",time:"08h00",stationName:"Gare Routière Internationale d'Adjamé",stationAddress:"Adjamé Cité Fairmont",directions:"Hall départ direct autoroute de Yamoussoukro. Enregistrement quai A.",busType:"Car Navette Express Directe",company:"Capitale Express Transport",priceCfa:4500,availableSeats:30}]},{id:"trip-bdk-abj",departureCity:"Bondoukou",arrivalCity:"Abidjan",distanceKm:420,estimatedDuration:"7h 30min",departures:[{id:"dep-bdk-abj-1",rankLabel:"1er Départ",time:"06h00",stationName:"Gare Centrale de Bondoukou",stationAddress:"Quartier Zanzan, Face Grand Marché",directions:"Présentation des voyageurs dès 05h30 pour l'étiquetage des bagages et la validation du ticket en ligne.",busType:"Car Grand Confort VIP",company:"Compagnie Express du Zanzan",priceCfa:7500,availableSeats:20}]}];function U(t,a){const e=te.find(s=>s.departureCity.toLowerCase()===t.toLowerCase()&&s.arrivalCity.toLowerCase()===a.toLowerCase());return e||{id:`trip-${t.toLowerCase()}-${a.toLowerCase()}`,departureCity:t,arrivalCity:a,distanceKm:320,estimatedDuration:"5h 00min",departures:[{id:`dep-${t.toLowerCase()}-1`,rankLabel:"1er Départ",time:"07h30",stationName:`Gare Centrale de ${t}`,stationAddress:`Boulevard principal de ${t}`,directions:`Se rendre au hall d'embarquement n°1 de ${t} avec la référence de réservation.`,busType:"Car Confort Interurbain",company:"Réseau National des Transporteurs",priceCfa:6e3,availableSeats:22},{id:`dep-${t.toLowerCase()}-2`,rankLabel:"2e Départ",time:"13h00",stationName:`Gare Routière Sud de ${t}`,stationAddress:`Carrefour de la Paix, ${t}`,directions:"Embarquement direct voie B. Dépose des bagages 20 minutes avant le départ.",busType:"Car Confort Interurbain",company:"Réseau National des Transporteurs",priceCfa:6e3,availableSeats:16}]}}function ae(){const t=document.createElement("div");t.className="landing-view";const a=ee();t.appendChild(a);const e=J();t.appendChild(e);const s=document.createElement("main");s.className="main-content",s.innerHTML=`
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
              ${T.map(o=>`<option value="${o}" ${o==="Abidjan"?"selected":""}>${o}</option>`).join("")}
            </select>
          </div>

          <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label" style="font-size: var(--font-size-xs);" for="quick-to">Destination</label>
            <select id="quick-to" class="form-select" style="padding: var(--spacing-2) var(--spacing-3); font-size: var(--font-size-sm);">
              ${T.map(o=>`<option value="${o}" ${o==="Bondoukou"?"selected":""}>${o}</option>`).join("")}
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
  `;const r=s.querySelector("#hero-quick-search-form");return r&&r.addEventListener("submit",o=>{o.preventDefault();const n=r.querySelector("#quick-from").value,l=r.querySelector("#quick-to").value;sessionStorage.setItem("search_from",n),sessionStorage.setItem("search_to",l),window.location.hash="#/app"}),t.appendChild(s),requestAnimationFrame(()=>{I(t),B(t),Q(t)}),t}function N(t={}){const{label:a="Retour",onClick:e=null,customClass:s=""}=t,r=document.createElement("div");r.className=`btn-back-3d-wrapper ${s}`.trim();const o=document.createElement("button");return o.type="button",o.className="btn-back-3d",o.setAttribute("aria-label",a),o.innerHTML=`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
    <span>${a}</span>
  `,o.addEventListener("click",n=>{n.preventDefault(),typeof e=="function"?e(n):window.history.length>1?window.history.back():window.location.hash="#/"}),r.appendChild(o),r}function se(){const t=document.createElement("div");t.className="auth-view-container";const a=N({label:"Retour à l'accueil",onClick:()=>{window.location.hash="#/"}});t.appendChild(a);const e=document.createElement("div");e.className="auth-card",e.innerHTML=`
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
  `;const s=e.querySelector("#register-form");return s.addEventListener("submit",r=>{r.preventDefault();const o=s.querySelector("#reg-fullname").value.trim(),n=s.querySelector("#reg-phone").value.trim(),l=s.querySelector("#reg-email").value.trim(),d=s.querySelector("#reg-password").value,u=s.querySelector("#reg-password-confirm").value;let p=!0;const f=s.querySelector("#feedback-fullname");o?f.className="form-feedback":(f.className="form-feedback error",p=!1);const i=s.querySelector("#feedback-phone");!n||n.length<8?(i.className="form-feedback error",p=!1):i.className="form-feedback";const m=s.querySelector("#feedback-password");d.length<6?(m.className="form-feedback error",p=!1):m.className="form-feedback";const v=s.querySelector("#feedback-password-confirm");if(d!==u?(v.className="form-feedback error",p=!1):v.className="form-feedback",p){const y={fullname:o,phone:n,email:l||"contact@client.ci"};sessionStorage.setItem("current_user",JSON.stringify(y)),window.location.hash="#/app"}}),t.appendChild(e),t}function re(){const t=document.createElement("div");t.className="auth-view-container";const a=N({label:"Retour à l'accueil",onClick:()=>{window.location.hash="#/"}});t.appendChild(a);const e=document.createElement("div");e.className="auth-card",e.innerHTML=`
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
  `;const s=e.querySelector("#login-form");return s.addEventListener("submit",r=>{r.preventDefault();const o=s.querySelector("#login-identifier").value.trim(),n=s.querySelector("#login-password").value;let l=!0;const d=s.querySelector("#feedback-login-id");o?d.className="form-feedback":(d.className="form-feedback error",l=!1);const u=s.querySelector("#feedback-login-pwd");if(n?u.className="form-feedback":(u.className="form-feedback error",l=!1),l){const f=JSON.parse(sessionStorage.getItem("current_user")||"null")||{fullname:o.includes("@")?"Voyageur":"Passager Express",phone:o,email:o.includes("@")?o:"voyageur@transport.ci"};sessionStorage.setItem("current_user",JSON.stringify(f)),window.location.hash="#/app"}}),t.appendChild(e),t}function oe({currentSeat:t="12",company:a="Compagnie Express",onSeatConfirmed:e}){let s=document.getElementById("coach-seat-modal");s||(s=document.createElement("div"),s.id="coach-seat-modal",s.className="modal-backdrop",document.body.appendChild(s));let r=t;const o=11,n=[3,7,8,15,16,21,22,28,33,34,40];s.innerHTML=`
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
          ${Array.from({length:o}).map((p,f)=>{const i=f*4,m=i+1,v=i+2,y=i+3,A=i+4,z=f===0,c=(g,w)=>{const q=n.includes(g),b=String(g)===String(r),h=w==="left-window"||w==="right-window",x=h?`N°${g} (Fenêtre)`:`N°${g} (Couloir)`;return`
                <button 
                  type="button" 
                  class="coach-seat-btn ${b?"selected":""} ${q?"occupied":""} ${z?"vip":""}" 
                  data-seat-num="${g}"
                  data-seat-type="${h?"Fenêtre":"Couloir"}"
                  data-row="${f+1}"
                  title="${q?"Siège déjà réservé":x}"
                  ${q?"disabled":""}
                >
                  <span style="font-size: 11px;">${g}</span>
                  <span style="font-size: 8px; opacity: 0.8;">${h?"🪟":"🚶"}</span>
                </button>
              `};return`
              ${c(m,"left-window")}
              ${c(v,"left-aisle")}
              <div class="coach-aisle">ALLÉE</div>
              ${c(y,"right-aisle")}
              ${c(A,"right-window")}
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
  `,requestAnimationFrame(()=>{s.classList.add("active")});const l=s.querySelectorAll(".coach-seat-btn:not(.occupied)"),d=s.querySelector("#seat-selection-label");l.forEach(p=>{p.addEventListener("click",()=>{k.play("seat"),l.forEach(m=>m.classList.remove("selected")),p.classList.add("selected"),r=p.getAttribute("data-seat-num");const f=p.getAttribute("data-seat-type"),i=p.getAttribute("data-row");d&&(d.textContent=`Siège N° ${r} (${f} - Rangée ${i})`)})});function u(){s.classList.remove("active")}s.querySelector("#btn-close-seat-modal").addEventListener("click",u),s.querySelector("#btn-confirm-seat-choice").addEventListener("click",()=>{k.play("success"),e&&e(r),u()})}const C="http://localhost:5000/api",ne=3e3;async function S(t,a={}){const e=new AbortController,s=setTimeout(()=>e.abort(),ne);try{return await fetch(t,{...a,signal:e.signal})}finally{clearTimeout(s)}}const R={async getCities(){try{const t=await S(`${C}/trips/cities`);if(t.ok){const a=await t.json();if(a.success&&Array.isArray(a.data))return a.data}}catch{}return[...T]},async searchTrips(t,a){try{const e=new URLSearchParams({from:t,to:a}),s=await S(`${C}/trips/search?${e.toString()}`);if(s.ok){const r=await s.json();if(r.success&&r.data)return r.data}}catch{}return U(t,a)},async createReservation(t){try{const a=await S(`${C}/trips/reservations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(a.ok){const e=await a.json();if(e.success&&e.data)return e.data}}catch{}return{bookingRef:`GR-${Date.now().toString().slice(-6)}`,createdAt:new Date().toISOString(),...t,status:"CONFIRMED"}},async getTicketByReference(t){try{const e=await S(`${C}/trips/tickets/${encodeURIComponent(t)}`);if(e.ok){const s=await e.json();if(s.success&&s.data)return s.data}}catch{}return JSON.parse(localStorage.getItem("user_tickets_history")||"[]").find(e=>e.bookingRef===t)||null},async getPassengerHistory(t){try{const a=await S(`${C}/trips/passenger/${encodeURIComponent(t)}/history`);if(a.ok){const e=await a.json();if(e.success&&Array.isArray(e.data))return e.data}}catch{}return JSON.parse(localStorage.getItem("user_tickets_history")||"[]")},async getPaymentOperators(){try{const t=await S(`${C}/payments/operators`);if(t.ok){const a=await t.json();if(a.success&&Array.isArray(a.data))return a.data}}catch{}return[{id:"wave",name:"Wave Côte d'Ivoire",feePercentage:1},{id:"orange",name:"Orange Money",feePercentage:1},{id:"mtn",name:"MTN Mobile Money",feePercentage:1},{id:"moov",name:"Moov Money Flooz",feePercentage:1}]},async initiatePayment(t){try{const a=await S(`${C}/payments/initiate`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(a.ok){const e=await a.json();if(e.success&&e.data)return e.data}}catch{}return{success:!0,transaction:{transactionId:`TXN-${(t.operatorId||"LOCAL").toUpperCase()}-${Date.now().toString().slice(-6)}`,bookingRef:t.bookingRef||"GR-LOC",amountCfa:t.amountCfa,completedAt:new Date().toISOString(),status:"COMPLETED"}}},async login(t){return(await S(`${C}/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()},async register(t){return(await S(`${C}/auth/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()},async updateProfile(t){try{const a=await S(`${C}/auth/profile`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(a.ok){const e=await a.json();if(e.success&&e.data)return e.data}}catch{}return sessionStorage.setItem("current_user",JSON.stringify(t)),localStorage.setItem("saved_passenger_profile",JSON.stringify(t)),{success:!0,data:t}},async changePassword(t){try{const a=await S(`${C}/auth/password`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(a.ok)return a.json()}catch{}return{success:!0,message:"Mot de passe mis à jour avec succès."}}};function ie(){const t=document.createElement("div");t.className="main-content";const a=JSON.parse(sessionStorage.getItem("current_user")||'{"fullname": "Voyageur", "phone": "" }');let e=[...T],s=sessionStorage.getItem("search_from")||"Abidjan",r=sessionStorage.getItem("search_to")||"Bondoukou",o=U(s,r),n=o.departures[1]||o.departures[0],l="14",d="Côté Fenêtre";const u=J();t.appendChild(u);const p=document.createElement("div");p.className="booking-topbar",p.innerHTML=`
    <a href="#/profile" class="user-badge-info" style="text-decoration: none; cursor: pointer;">
      <div class="user-avatar">${a.fullname.charAt(0).toUpperCase()}</div>
      <div>
        <div style="font-weight: 700; color: var(--color-text-primary); font-size: var(--font-size-base);">${a.fullname}</div>
        <div style="font-size: var(--font-size-xs); color: #93c5fd;">👤 Gérer mon profil & mot de passe ➔</div>
      </div>
    </a>
    <div style="display: flex; gap: var(--spacing-2); align-items: center; flex-wrap: wrap;">
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
  `,t.appendChild(p);const f=N({label:"Retour à l'accueil",onClick:()=>{window.location.hash="#/"}});t.appendChild(f);const i=document.createElement("div");i.id="booking-workspace";function m(){i.innerHTML=`
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
              ${e.map(c=>`<option value="${c}" ${c===s?"selected":""}>${c}</option>`).join("")}
            </select>
          </div>

          <div class="form-group">
            <label class="form-label" for="select-to">Ville d'arrivée (Destination)</label>
            <select id="select-to" class="form-select">
              ${e.map(c=>`<option value="${c}" ${c===r?"selected":""}>${c}</option>`).join("")}
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
          ${o.departures.map(c=>`
            <div class="card-blue departure-card ${n&&n.id===c.id?"active":""}" data-dep-id="${c.id}">
              <div>
                <div class="departure-header">
                  <span class="departure-rank">${c.rankLabel}</span>
                  <span class="departure-price">${c.priceCfa.toLocaleString("fr-FR")} FCFA</span>
                </div>
                <div class="departure-time">${c.time}</div>
                <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-top: var(--spacing-2);">
                  📍 ${c.stationName}
                </div>
              </div>
              <div style="margin-top: var(--spacing-4); display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: var(--font-size-xs); color: #34d399; font-weight: 600;">
                  ✓ ${c.availableSeats} places libres
                </span>
                <span style="font-size: var(--font-size-xs); color: #93c5fd; font-weight: 600;">
                  ${n&&n.id===c.id?"Sélectionné ●":"Choisir ➔"}
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
                  Siège N° ${l} (${d})
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
              <span>Payer mon ticket & Valider le Siège N° ${l} (${n.priceCfa.toLocaleString("fr-FR")} FCFA)</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        `:""}
      </section>
    `;const v=i.querySelector("#search-route-form");v.addEventListener("submit",async c=>{c.preventDefault(),k.play("horn"),s=v.querySelector("#select-from").value,r=v.querySelector("#select-to").value,o=await R.searchTrips(s,r),n=o.departures[0]||null,m()});const y=i.querySelector("#interactive-bus-sprite");y&&y.addEventListener("click",()=>{k.play("horn")}),i.querySelectorAll(".departure-card").forEach(c=>{c.addEventListener("click",()=>{k.play("click");const g=c.getAttribute("data-dep-id");n=o.departures.find(w=>w.id===g),m()})});const A=i.querySelector("#btn-open-seat-selector");A&&A.addEventListener("click",()=>{oe({currentSeat:l,company:n.company,onSeatConfirmed:c=>{l=c,d=parseInt(c,10)%2===1?"Côté Fenêtre":"Côté Couloir",m()}})});const z=i.querySelector("#btn-proceed-payment");z&&z.addEventListener("click",async()=>{k.play("click"),z.disabled=!0,z.innerHTML="<span>Préparation du paiement sécurisé...</span>";const c={passengerName:a.fullname,passengerPhone:a.phone||"Non renseigné",seatNumber:l,seatType:d,departureCity:s,arrivalCity:r,departureTime:n.time,departureRank:n.rankLabel,stationName:n.stationName,stationAddress:n.stationAddress,directions:n.directions,busType:n.busType,company:n.company,priceCfa:n.priceCfa},g=await R.createReservation(c);sessionStorage.setItem("pending_ticket",JSON.stringify(g)),sessionStorage.setItem("current_ticket",JSON.stringify(g)),window.location.hash="#/payment"}),I(i),B(i)}return R.getCities().then(v=>{v&&v.length>0&&(e=v,m())}),m(),t.appendChild(i),t}const D=[{id:"wave",name:"Wave CI",class:"operator-wave",logoText:"WAVE"},{id:"orange",name:"Orange Money",class:"operator-orange",logoText:"OM"},{id:"mtn",name:"MTN MoMo",class:"operator-mtn",logoText:"MOMO"},{id:"moov",name:"Moov Money",class:"operator-moov",logoText:"MOOV"}];function le(){const t=document.createElement("div");t.className="main-content";const a=JSON.parse(sessionStorage.getItem("pending_ticket")||sessionStorage.getItem("current_ticket")||"null"),e=N({label:"Modifier mon trajet",onClick:()=>{window.location.hash="#/app"}});if(t.appendChild(e),!a){const n=document.createElement("div");return n.className="card-blue",n.style.maxWidth="500px",n.style.margin="var(--spacing-8) auto",n.style.textAlign="center",n.innerHTML=`
      <h2>Aucun trajet en attente de paiement</h2>
      <p>Veuillez d'abord sélectionner un départ.</p>
      <a href="#/app" class="btn-card-white" style="margin-top: var(--spacing-4);">Choisir un départ</a>
    `,t.appendChild(n),t}let s=D[0].id;const r=document.createElement("div");r.className="card-blue auth-card",r.style.maxWidth="560px",r.style.margin="var(--spacing-6) auto";function o(){r.innerHTML=`
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
        ${D.map(l=>`
          <div class="payment-method-card ${s===l.id?"active":""}" data-op-id="${l.id}">
            <div class="operator-icon-badge ${l.class}">${l.logoText}</div>
            <span class="operator-name">${l.name}</span>
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
    `,r.querySelectorAll(".payment-method-card").forEach(l=>{l.addEventListener("click",()=>{s=l.getAttribute("data-op-id"),o()})});const n=r.querySelector("#payment-form");n.addEventListener("submit",async l=>{l.preventDefault();const d=n.querySelector("#btn-submit-pay"),u=n.querySelector("#pay-phone"),p=u?u.value.trim():a.passengerPhone;d.disabled=!0,d.innerHTML="<span>Validation auprès de l'opérateur...</span>";const f=D.find(i=>i.id===s);try{const i=await R.initiatePayment({bookingRef:a.bookingRef,operatorId:s,phone:p,amountCfa:a.priceCfa,passengerName:a.passengerName}),m={...a,passengerPhone:p,paymentMethod:f.name,paymentStatus:"PAID",paymentTransactionId:i.transaction?i.transaction.transactionId:`TXN-${s.toUpperCase()}-${Date.now().toString().slice(-6)}`,paymentDate:new Date().toISOString()},v=JSON.parse(localStorage.getItem("user_tickets_history")||"[]");v.unshift(m),localStorage.setItem("user_tickets_history",JSON.stringify(v)),sessionStorage.setItem("current_ticket",JSON.stringify(m)),window.location.hash="#/confirmation"}catch{d.disabled=!1,d.innerHTML="<span>Réessayer le paiement</span>"}})}return o(),t.appendChild(r),t}function ce(){const t=document.createElement("div");t.className="main-content";const a=JSON.parse(sessionStorage.getItem("current_ticket")||"null"),e=N({label:"Retour aux trajets",onClick:()=>{window.location.hash="#/app"}});if(t.appendChild(e),!a){const o=document.createElement("div");return o.className="card-blue",o.style.maxWidth="550px",o.style.margin="var(--spacing-8) auto",o.style.textAlign="center",o.innerHTML=`
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
  `;const r=s.querySelector("#btn-print-ticket");return r&&r.addEventListener("click",()=>{window.print()}),t.appendChild(s),requestAnimationFrame(()=>{K(),I(t),B(t)}),t}function de(){const t=document.createElement("div");t.className="main-content";const a=JSON.parse(sessionStorage.getItem("current_user")||'{"fullname": "Voyageur", "phone": "" }'),e=document.createElement("div");e.className="booking-topbar",e.innerHTML=`
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
  `,t.appendChild(e);const s=N({label:"Retour à l'espace réservation",onClick:()=>{window.location.hash="#/app"}});t.appendChild(s);const r=document.createElement("div");if(r.style.margin="var(--spacing-4) 0 var(--spacing-6) 0",r.innerHTML=`
    <h1>Mes Billets & Historique des Voyages</h1>
    <p>Retrouvez l'ensemble de vos réservations, vérifiez l'état de vos départs et réimprimez vos tickets.</p>
  `,t.appendChild(r),history.length===0){const n=document.createElement("div");return n.className="card-blue",n.style.maxWidth="600px",n.style.textAlign="center",n.style.padding="var(--spacing-8)",n.innerHTML=`
      <div style="font-size: 3rem; margin-bottom: var(--spacing-4);">🎟️</div>
      <h2 style="font-size: var(--font-size-2xl); margin-bottom: var(--spacing-2);">Aucun voyage enregistré</h2>
      <p>Vous n'avez pas encore réservé de trajet sur la plateforme.</p>
      <a href="#/app" class="btn-card-white" style="margin-top: var(--spacing-4);">
        Réserver mon premier départ
      </a>
    `,t.appendChild(n),t}const o=document.createElement("div");return o.className="history-list",history.forEach(n=>{const l=document.createElement("div");l.className="card-blue history-item-card",l.innerHTML=`
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
    `;const d=l.querySelector(`[data-ticket-ref="${n.bookingRef}"]`);d&&d.addEventListener("click",()=>{sessionStorage.setItem("current_ticket",JSON.stringify(n)),window.location.hash="#/confirmation"}),o.appendChild(l)}),t.appendChild(o),t}function F(t,a=!1){let e=document.getElementById("profile-toast-notification");e||(e=document.createElement("div"),e.id="profile-toast-notification",e.className="profile-toast",document.body.appendChild(e)),e.className=`profile-toast ${a?"error":""} show`,e.innerHTML=`
    <span>${a?"⚠️":"✓"}</span>
    <span>${t}</span>
  `,setTimeout(()=>{e.classList.remove("show")},3500)}function pe(t){if(!t||t.length<6)return"weak";const a=/[A-Z]/.test(t),e=/[a-z]/.test(t),s=/[0-9]/.test(t),r=/[^A-Za-z0-9]/.test(t),o=[a,e,s,r,t.length>=8].filter(Boolean).length;return o>=4?"strong":o>=2?"medium":"weak"}function ue(){const t=document.createElement("div");t.className="main-content profile-container";const a=sessionStorage.getItem("current_user"),e=a?JSON.parse(a):{fullname:"Kouassi Jean-Philippe",username:"kouassi_jp",phone:"+225 07 12 34 56 78",email:"jean.kouassi@transport.ci",city:"Abidjan",emergencyContactName:"Kouassi Marie (Épouse)",emergencyContactPhone:"+225 05 98 76 54 32",preferredPayment:"wave",preferredCompany:"UTB",seatPreference:"fenetre",smsAlerts:!0,memberSince:"Janvier 2026"};e.username=e.username||e.fullname.toLowerCase().replace(/[\s-]/g,"_"),e.city=e.city||"Abidjan",e.emergencyContactName=e.emergencyContactName||"",e.emergencyContactPhone=e.emergencyContactPhone||"",e.preferredPayment=e.preferredPayment||"wave",e.preferredCompany=e.preferredCompany||"Toutes compagnies",e.seatPreference=e.seatPreference||"fenetre",e.smsAlerts=e.smsAlerts!==void 0?e.smsAlerts:!0,e.memberSince=e.memberSince||"2026";const s=JSON.parse(localStorage.getItem("user_tickets_history")||"[]"),r=s.length,o=s.reduce((b,h)=>b+(h.priceCfa||0),0),n=r*150+500,l=r>=5?"Membre Gold ⭐":r>=2?"Membre Silver ✨":"Passager Certifié ✓",d=N({label:"Retour aux trajets",onClick:()=>{window.location.hash="#/app"}});t.appendChild(d);const u=document.createElement("div");u.className="profile-hero-card",u.innerHTML=`
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
          <span class="profile-status-badge">${l}</span>
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
  `,t.appendChild(u);const p=document.createElement("div");p.className="profile-stats-grid",p.innerHTML=`
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
      <div class="profile-stat-value" style="font-size: var(--font-size-lg); color: #34d399;">${l}</div>
      <div class="profile-stat-label">Statut Voyageur</div>
    </div>
  `,t.appendChild(p);const f=document.createElement("div");f.className="profile-grid-layout";const i=document.createElement("div");i.className="profile-section-card",i.innerHTML=`
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
          ${T.map(b=>`<option value="${b}" ${b===e.city?"selected":""}>${b}</option>`).join("")}
        </select>
      </div>

      <button type="submit" class="btn-card-white" style="width: 100%; margin-top: var(--spacing-4);">
        <span>Enregistrer mes coordonnées</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </button>
    </form>
  `,f.appendChild(i);const m=document.createElement("div");m.className="profile-section-card",m.innerHTML=`
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
  `,f.appendChild(m);const v=document.createElement("div");v.className="profile-section-card profile-card-full",v.innerHTML=`
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
  `,f.appendChild(v),t.appendChild(f);const y=i.querySelector("#form-personal-info");y.addEventListener("submit",b=>{b.preventDefault();const h=y.querySelector("#prof-username").value.trim(),x=y.querySelector("#prof-fullname").value.trim(),$=y.querySelector("#prof-phone").value.trim(),M=y.querySelector("#prof-email").value.trim(),O=y.querySelector("#prof-city").value;let P=!0;h?y.querySelector("#fb-prof-username").className="form-feedback":(y.querySelector("#fb-prof-username").className="form-feedback error",P=!1),x?y.querySelector("#fb-prof-fullname").className="form-feedback":(y.querySelector("#fb-prof-fullname").className="form-feedback error",P=!1),!$||$.length<8?(y.querySelector("#fb-prof-phone").className="form-feedback error",P=!1):y.querySelector("#fb-prof-phone").className="form-feedback",P&&(e.username=h,e.fullname=x,e.phone=$,e.email=M,e.city=O,sessionStorage.setItem("current_user",JSON.stringify(e)),localStorage.setItem("saved_passenger_profile",JSON.stringify(e)),t.querySelector("#profile-hero-name").innerHTML=`
        ${e.fullname}
        <span class="profile-username-badge" id="profile-hero-username">@${e.username}</span>
      `,t.querySelector("#profile-avatar-display").textContent=e.fullname.charAt(0).toUpperCase(),t.querySelector("#profile-hero-city").textContent=e.city,t.querySelector("#profile-hero-phone").textContent=e.phone,F("Vos informations personnelles ont été mises à jour avec succès !"))});const A=m.querySelector("#prof-new-pwd"),z=m.querySelector("#pwd-strength-fill"),c=m.querySelector("#pwd-strength-text");A.addEventListener("input",()=>{const b=A.value;if(!b){z.className="password-strength-fill",c.textContent="Sécurité : Entrez un mot de passe";return}const h=pe(b);z.className=`password-strength-fill ${h}`,h==="strong"?(c.textContent="Sécurité : Mot de passe robuste et sécurisé ✓",c.style.color="#34d399"):h==="medium"?(c.textContent="Sécurité : Niveau moyen (ajoutez des chiffres ou symboles)",c.style.color="#fbbf24"):(c.textContent="Sécurité : Mot de passe trop court ou faible",c.style.color="#ef4444")});const g=m.querySelector("#form-password-change");g.addEventListener("submit",b=>{b.preventDefault();const h=g.querySelector("#prof-old-pwd").value,x=g.querySelector("#prof-new-pwd").value,$=g.querySelector("#prof-confirm-pwd").value;let M=!0;h?g.querySelector("#fb-prof-old-pwd").className="form-feedback":(g.querySelector("#fb-prof-old-pwd").className="form-feedback error",M=!1),x.length<6&&(c.textContent="Erreur : Le nouveau mot de passe doit comporter au moins 6 caractères.",c.style.color="#ef4444",M=!1),x!==$?(g.querySelector("#fb-prof-confirm-pwd").className="form-feedback error",M=!1):g.querySelector("#fb-prof-confirm-pwd").className="form-feedback",M&&(e.passwordUpdated=new Date().toISOString(),sessionStorage.setItem("current_user",JSON.stringify(e)),g.reset(),z.className="password-strength-fill",c.textContent="Sécurité : Entrez un mot de passe",c.style.color="var(--color-text-muted)",F("Votre mot de passe a été modifié avec succès !"))});const w=v.querySelector("#form-preferences");w.querySelectorAll(".operator-radio-label").forEach(b=>{b.addEventListener("click",()=>{w.querySelectorAll(".operator-radio-label").forEach(x=>x.classList.remove("selected")),b.classList.add("selected");const h=b.querySelector("input");h&&(h.checked=!0)})}),w.addEventListener("submit",b=>{b.preventDefault();const h=w.querySelector("#prof-emergency-name").value.trim(),x=w.querySelector("#prof-emergency-phone").value.trim(),$=w.querySelector('input[name="preferredPayment"]:checked'),M=$?$.value:"wave",O=w.querySelector("#prof-seat-pref").value,P=w.querySelector("#prof-sms-alerts").checked;e.emergencyContactName=h,e.emergencyContactPhone=x,e.preferredPayment=M,e.seatPreference=O,e.smsAlerts=P,sessionStorage.setItem("current_user",JSON.stringify(e)),localStorage.setItem("saved_passenger_profile",JSON.stringify(e)),F("Vos préférences de voyage et contact d'urgence ont été enregistrés !")});const q=u.querySelector("#btn-logout-profile");return q&&q.addEventListener("click",()=>{sessionStorage.removeItem("current_user"),window.location.hash="#/"}),t}function me(){const t=document.createElement("div");t.className="main-content";const a=N({label:"Retour à l'espace voyageur",onClick:()=>{window.location.hash="#/app"}});t.appendChild(a);const e=document.createElement("div");e.style.margin="var(--spacing-4) 0 var(--spacing-6) 0",e.style.display="flex",e.style.justifyContent="space-between",e.style.alignItems="center",e.style.flexWrap="wrap",e.style.gap="var(--spacing-4)",e.innerHTML=`
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
  `,t.appendChild(r),t}function fe(){const t=document.createElement("div");t.className="main-content";const a=N({label:"Retour au tableau de bord",onClick:()=>{window.location.hash="#/admin"}});t.appendChild(a);const e=document.createElement("div");e.className="card-blue auth-card",e.style.maxWidth="680px",e.style.margin="var(--spacing-6) auto",e.innerHTML=`
    <div class="auth-header">
      <h1 class="auth-title">Programmer un Nouveau Départ</h1>
      <p class="auth-subtitle">Configurez un horaire, une gare d'embarquement et la capacité du car.</p>
    </div>

    <form id="admin-departure-form" class="auth-form">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-4);">
        <div class="form-group">
          <label class="form-label" for="adm-from">Ville de départ</label>
          <select id="adm-from" class="form-select" required>
            ${T.map(r=>`<option value="${r}">${r}</option>`).join("")}
          </select>
        </div>

        <div class="form-group">
          <label class="form-label" for="adm-to">Ville d'arrivée</label>
          <select id="adm-to" class="form-select" required>
            ${T.map((r,o)=>`<option value="${r}" ${o===1?"selected":""}>${r}</option>`).join("")}
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
  `;const s=e.querySelector("#admin-departure-form");return s.addEventListener("submit",r=>{r.preventDefault();const o=s.querySelector("#btn-save-departure");o.disabled=!0,o.innerHTML="<span>Publication en cours...</span>",setTimeout(()=>{window.location.hash="#/admin"},600)}),t.appendChild(e),t}const j=document.getElementById("app"),_={"/":ae,"/register":se,"/login":re,"/app":ie,"/payment":le,"/confirmation":ce,"/history":de,"/profile":ue,"/admin":me,"/admin/departures":fe};function H(){if(!j)return;const t=window.location.hash.slice(1)||"/",a=t.startsWith("/")?t:`/${t}`,e=_[a]||_["/"];j.innerHTML="";const s=e();j.appendChild(s),window.scrollTo({top:0,behavior:"smooth"}),requestAnimationFrame(()=>{I(j),B(j)})}document.addEventListener("DOMContentLoaded",()=>{W(),Z(),window.addEventListener("hashchange",H),H()});
