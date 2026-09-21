(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();function B(t){const a=document.getElementById(t);a&&(a.classList.add("active"),document.body.style.overflow="hidden")}function q(t){const a=document.getElementById(t);a&&(a.classList.remove("active"),document.body.style.overflow="")}function V(){if(document.getElementById("modals-container"))return;const t=document.createElement("div");t.id="modals-container",t.innerHTML=`
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
  `,document.body.appendChild(t),t.querySelectorAll("[data-close]").forEach(a=>{a.addEventListener("click",()=>{const e=a.getAttribute("data-close");q(e)})}),t.querySelectorAll(".modal-backdrop").forEach(a=>{a.addEventListener("click",e=>{e.target===a&&q(a.id)})}),document.addEventListener("keydown",a=>{if(a.key==="Escape"){const e=document.querySelector(".modal-backdrop.active");e&&q(e.id)}})}function H(){const t=document.createElement("header");t.className="site-header";const a=JSON.parse(sessionStorage.getItem("current_user")||"null");t.innerHTML=`
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
    </nav>
  `;const e=t.querySelector("#nav-btn-about"),r=t.querySelector("#nav-btn-contact");return e&&e.addEventListener("click",()=>{B("about-modal")}),r&&r.addEventListener("click",()=>{B("contact-modal")}),t}function _(){const t=document.createElement("div");t.className="landing-view";const a=H();t.appendChild(a);const e=document.createElement("main");return e.className="main-content",e.innerHTML=`
    <section class="landing-hero">
      <div class="hero-tag">
        <span>🚀 Plateforme Officielle de Transport Interurbain</span>
      </div>

      <h1 class="hero-title">
        Voyagez en toute sérénité à travers la <span class="hero-title-highlight">Côte d'Ivoire</span>
      </h1>

      <p class="hero-description">
        Consultez les départs en temps réel, choisissez votre gare d'embarquement et réservez votre ticket sans vous déplacer. Une expérience fluide conçue pour tous vos trajets.
      </p>

      <!-- Zone centrale : Bouton d'action Rejoindre la Communauté -->
      <div class="hero-cta-container">
        <a href="#/register" class="btn-primary-blue btn-cta-main" id="btn-join-community">
          <span>Rejoindre la Communauté</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
        <span class="cta-subtext">Déjà inscrit ? <a href="#/login" style="color: #60a5fa; font-weight: 600;">Se connecter</a></span>
      </div>

      <!-- Section de présentation : Genèse et raison d'être du projet -->
      <div class="landing-grid">
        <article class="card-blue feature-card">
          <div>
            <div class="feature-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3 class="feature-title">Ponctualité & Horaires</h3>
            <p class="feature-text">
              Accédez aux heures de départ précises pour chaque convoi (1er, 2e, 3e départ) et organisez vos déplacements en toute quiétude.
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
            <h3 class="feature-title">Gares & Embarquement</h3>
            <p class="feature-text">
              Obtenez des indications claires et détaillées pour vous rendre au point d'embarquement exact de votre compagnie de transport.
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
            <h3 class="feature-title">Réservation à Domicile</h3>
            <p class="feature-text">
              Fini les longues attentes au guichet. Sélectionnez votre trajet d'Abidjan à Bondoukou ou toute autre ville, et validez votre ticket en ligne.
            </p>
          </div>
        </article>
      </div>
    </section>

    <footer class="landing-footer-info">
      <p>Plateforme de Gestion d'une Gare Routière — Conçue pour une expérience voyageur moderne et sécurisée.</p>
    </footer>
  `,t.appendChild(e),t}function x(t={}){const{label:a="Retour",onClick:e=null,customClass:r=""}=t,s=document.createElement("div");s.className=`btn-back-3d-wrapper ${r}`.trim();const n=document.createElement("button");return n.type="button",n.className="btn-back-3d",n.setAttribute("aria-label",a),n.innerHTML=`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
    <span>${a}</span>
  `,n.addEventListener("click",o=>{o.preventDefault(),typeof e=="function"?e(o):window.history.length>1?window.history.back():window.location.hash="#/"}),s.appendChild(n),s}function G(){const t=document.createElement("div");t.className="auth-view-container";const a=x({label:"Retour à l'accueil",onClick:()=>{window.location.hash="#/"}});t.appendChild(a);const e=document.createElement("div");e.className="auth-card",e.innerHTML=`
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
  `;const r=e.querySelector("#register-form");return r.addEventListener("submit",s=>{s.preventDefault();const n=r.querySelector("#reg-fullname").value.trim(),o=r.querySelector("#reg-phone").value.trim(),l=r.querySelector("#reg-email").value.trim(),m=r.querySelector("#reg-password").value,d=r.querySelector("#reg-password-confirm").value;let p=!0;const c=r.querySelector("#feedback-fullname");n?c.className="form-feedback":(c.className="form-feedback error",p=!1);const f=r.querySelector("#feedback-phone");!o||o.length<8?(f.className="form-feedback error",p=!1):f.className="form-feedback";const i=r.querySelector("#feedback-password");m.length<6?(i.className="form-feedback error",p=!1):i.className="form-feedback";const g=r.querySelector("#feedback-password-confirm");if(m!==d?(g.className="form-feedback error",p=!1):g.className="form-feedback",p){const v={fullname:n,phone:o,email:l||"contact@client.ci"};sessionStorage.setItem("current_user",JSON.stringify(v)),window.location.hash="#/app"}}),t.appendChild(e),t}function J(){const t=document.createElement("div");t.className="auth-view-container";const a=x({label:"Retour à l'accueil",onClick:()=>{window.location.hash="#/"}});t.appendChild(a);const e=document.createElement("div");e.className="auth-card",e.innerHTML=`
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
  `;const r=e.querySelector("#login-form");return r.addEventListener("submit",s=>{s.preventDefault();const n=r.querySelector("#login-identifier").value.trim(),o=r.querySelector("#login-password").value;let l=!0;const m=r.querySelector("#feedback-login-id");n?m.className="form-feedback":(m.className="form-feedback error",l=!1);const d=r.querySelector("#feedback-login-pwd");if(o?d.className="form-feedback":(d.className="form-feedback error",l=!1),l){const c=JSON.parse(sessionStorage.getItem("current_user")||"null")||{fullname:n.includes("@")?"Voyageur":"Passager Express",phone:n,email:n.includes("@")?n:"voyageur@transport.ci"};sessionStorage.setItem("current_user",JSON.stringify(c)),window.location.hash="#/app"}}),t.appendChild(e),t}const P=["Abidjan","Bondoukou","Bouaké","Yamoussoukro","Korhogo","San-Pédro","Man","Daloa"],U=[{id:"trip-abj-bdk",departureCity:"Abidjan",arrivalCity:"Bondoukou",distanceKm:420,estimatedDuration:"7h 30min",departures:[{id:"dep-abj-bdk-1",rankLabel:"1er Départ",time:"06h30",stationName:"Gare Principale d'Adjamé (Quai Nord)",stationAddress:"Adjamé Liberté, à 100m du grand carrefour",directions:"Emprunter le boulevard principal, quai n°3 réservé aux lignes de l'Est (Bondoukou / Bouna). Présentation recommandée 30 minutes avant le départ.",busType:"Car Grand Confort VIP (Climatisé, Wifi, Prises USB)",company:"Compagnie Express du Zanzan",priceCfa:7500,availableSeats:18},{id:"dep-abj-bdk-2",rankLabel:"2e Départ",time:"10h00",stationName:"Gare Routière d'Adjamé — Pôle Est",stationAddress:"Boulevard Nangui Abrogoua, Face Pharmacie Centrale",directions:"Accès direct par le couloir central des cars interurbains. Guichet d'enregistrement et dépose bagages Quai 2.",busType:"Car Standard 60 places (Climatisation active)",company:"Compagnie Express du Zanzan",priceCfa:7e3,availableSeats:24},{id:"dep-abj-bdk-3",rankLabel:"3e Départ",time:"14h30",stationName:"Gare de Yopougon Siporex",stationAddress:"Carrefour Siporex, Terminus des lignes Est",directions:"Point d'embarquement côté autoroute du Nord avant bifurcation vers l'Est. Parking voyageurs disponible.",busType:"Car VIP Confort Plus (Climatisé, Écrans individuels)",company:"Union des Transporteurs de l'Est",priceCfa:8e3,availableSeats:12}]},{id:"trip-abj-bke",departureCity:"Abidjan",arrivalCity:"Bouaké",distanceKm:350,estimatedDuration:"4h 45min",departures:[{id:"dep-abj-bke-1",rankLabel:"1er Départ",time:"07h00",stationName:"Gare d'Adjamé Renaissance",stationAddress:"Boulevard de la Paix, Adjamé",directions:"Quai réservé aux lignes Centre & Nord. Voie express directe autoroute.",busType:"Car VIP Grand Tourisme",company:"Société Nationale de Transport",priceCfa:6e3,availableSeats:15},{id:"dep-abj-bke-2",rankLabel:"2e Départ",time:"11h30",stationName:"Gare de Yopougon Gesco",stationAddress:"Sortie Autoroute du Nord, Gesco",directions:"Embarquement rapide en bordure d'autoroute, idéal pour les résidents de Yopougon.",busType:"Car Standard Confort",company:"Société Nationale de Transport",priceCfa:5500,availableSeats:28}]},{id:"trip-abj-yakro",departureCity:"Abidjan",arrivalCity:"Yamoussoukro",distanceKm:240,estimatedDuration:"2h 45min",departures:[{id:"dep-abj-yak-1",rankLabel:"1er Départ",time:"08h00",stationName:"Gare Routière Internationale d'Adjamé",stationAddress:"Adjamé Cité Fairmont",directions:"Hall départ direct autoroute de Yamoussoukro. Enregistrement quai A.",busType:"Car Navette Express Directe",company:"Capitale Express Transport",priceCfa:4500,availableSeats:30}]},{id:"trip-bdk-abj",departureCity:"Bondoukou",arrivalCity:"Abidjan",distanceKm:420,estimatedDuration:"7h 30min",departures:[{id:"dep-bdk-abj-1",rankLabel:"1er Départ",time:"06h00",stationName:"Gare Centrale de Bondoukou",stationAddress:"Quartier Zanzan, Face Grand Marché",directions:"Présentation des voyageurs dès 05h30 pour l'étiquetage des bagages et la validation du ticket en ligne.",busType:"Car Grand Confort VIP",company:"Compagnie Express du Zanzan",priceCfa:7500,availableSeats:20}]}];function F(t,a){const e=U.find(r=>r.departureCity.toLowerCase()===t.toLowerCase()&&r.arrivalCity.toLowerCase()===a.toLowerCase());return e||{id:`trip-${t.toLowerCase()}-${a.toLowerCase()}`,departureCity:t,arrivalCity:a,distanceKm:320,estimatedDuration:"5h 00min",departures:[{id:`dep-${t.toLowerCase()}-1`,rankLabel:"1er Départ",time:"07h30",stationName:`Gare Centrale de ${t}`,stationAddress:`Boulevard principal de ${t}`,directions:`Se rendre au hall d'embarquement n°1 de ${t} avec la référence de réservation.`,busType:"Car Confort Interurbain",company:"Réseau National des Transporteurs",priceCfa:6e3,availableSeats:22},{id:`dep-${t.toLowerCase()}-2`,rankLabel:"2e Départ",time:"13h00",stationName:`Gare Routière Sud de ${t}`,stationAddress:`Carrefour de la Paix, ${t}`,directions:"Embarquement direct voie B. Dépose des bagages 20 minutes avant le départ.",busType:"Car Confort Interurbain",company:"Réseau National des Transporteurs",priceCfa:6e3,availableSeats:16}]}}const y="http://localhost:5000/api",W=3e3;async function w(t,a={}){const e=new AbortController,r=setTimeout(()=>e.abort(),W);try{return await fetch(t,{...a,signal:e.signal})}finally{clearTimeout(r)}}const M={async getCities(){try{const t=await w(`${y}/trips/cities`);if(t.ok){const a=await t.json();if(a.success&&Array.isArray(a.data))return a.data}}catch{}return[...P]},async searchTrips(t,a){try{const e=new URLSearchParams({from:t,to:a}),r=await w(`${y}/trips/search?${e.toString()}`);if(r.ok){const s=await r.json();if(s.success&&s.data)return s.data}}catch{}return F(t,a)},async createReservation(t){try{const a=await w(`${y}/trips/reservations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(a.ok){const e=await a.json();if(e.success&&e.data)return e.data}}catch{}return{bookingRef:`GR-${Date.now().toString().slice(-6)}`,createdAt:new Date().toISOString(),...t,status:"CONFIRMED"}},async getTicketByReference(t){try{const e=await w(`${y}/trips/tickets/${encodeURIComponent(t)}`);if(e.ok){const r=await e.json();if(r.success&&r.data)return r.data}}catch{}return JSON.parse(localStorage.getItem("user_tickets_history")||"[]").find(e=>e.bookingRef===t)||null},async getPassengerHistory(t){try{const a=await w(`${y}/trips/passenger/${encodeURIComponent(t)}/history`);if(a.ok){const e=await a.json();if(e.success&&Array.isArray(e.data))return e.data}}catch{}return JSON.parse(localStorage.getItem("user_tickets_history")||"[]")},async getPaymentOperators(){try{const t=await w(`${y}/payments/operators`);if(t.ok){const a=await t.json();if(a.success&&Array.isArray(a.data))return a.data}}catch{}return[{id:"wave",name:"Wave Côte d'Ivoire",feePercentage:1},{id:"orange",name:"Orange Money",feePercentage:1},{id:"mtn",name:"MTN Mobile Money",feePercentage:1},{id:"moov",name:"Moov Money Flooz",feePercentage:1}]},async initiatePayment(t){try{const a=await w(`${y}/payments/initiate`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(a.ok){const e=await a.json();if(e.success&&e.data)return e.data}}catch{}return{success:!0,transaction:{transactionId:`TXN-${(t.operatorId||"LOCAL").toUpperCase()}-${Date.now().toString().slice(-6)}`,bookingRef:t.bookingRef||"GR-LOC",amountCfa:t.amountCfa,completedAt:new Date().toISOString(),status:"COMPLETED"}}},async login(t){return(await w(`${y}/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()},async register(t){return(await w(`${y}/auth/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()},async updateProfile(t){try{const a=await w(`${y}/auth/profile`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(a.ok){const e=await a.json();if(e.success&&e.data)return e.data}}catch{}return sessionStorage.setItem("current_user",JSON.stringify(t)),localStorage.setItem("saved_passenger_profile",JSON.stringify(t)),{success:!0,data:t}},async changePassword(t){try{const a=await w(`${y}/auth/password`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(a.ok)return a.json()}catch{}return{success:!0,message:"Mot de passe mis à jour avec succès."}}};function K(){const t=document.createElement("div");t.className="main-content";const a=JSON.parse(sessionStorage.getItem("current_user")||'{"fullname": "Voyageur", "phone": "" }');let e=[...P],r="Abidjan",s="Bondoukou",n=F(r,s),o=n.departures[1]||n.departures[0];const l=document.createElement("div");l.className="booking-topbar",l.innerHTML=`
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
  `,t.appendChild(l);const m=x({label:"Retour à l'accueil",onClick:()=>{window.location.hash="#/"}});t.appendChild(m);const d=document.createElement("div");d.id="booking-workspace";function p(){d.innerHTML=`
      <!-- Formulaire de recherche -->
      <section class="card-blue search-trip-card">
        <h2 style="font-size: var(--font-size-xl); margin-bottom: var(--spacing-2);">
          Rechercher un trajet interurbain
        </h2>
        <p style="font-size: var(--font-size-sm); margin-bottom: var(--spacing-4);">
          Sélectionnez votre ville de départ et votre destination pour consulter les convois disponibles.
        </p>

        <form id="search-route-form" class="search-form-grid">
          <div class="form-group">
            <label class="form-label" for="select-from">Ville de départ</label>
            <select id="select-from" class="form-select">
              ${e.map(i=>`<option value="${i}" ${i===r?"selected":""}>${i}</option>`).join("")}
            </select>
          </div>

          <div class="form-group">
            <label class="form-label" for="select-to">Ville d'arrivée (Destination)</label>
            <select id="select-to" class="form-select">
              ${e.map(i=>`<option value="${i}" ${i===s?"selected":""}>${i}</option>`).join("")}
            </select>
          </div>

          <button type="submit" class="btn-card-white" style="height: 48px;">
            <span>Rechercher</span>
          </button>
        </form>
      </section>

      <!-- Liste des départs et détails -->
      <section class="departures-section">
        <div style="display: flex; justify-content: space-between; align-items: baseline;">
          <h3>Départs disponibles : <span style="color: #60a5fa;">${r} → ${s}</span></h3>
          <span style="font-size: var(--font-size-sm); color: var(--color-text-muted);">
            Durée estimée : ~${n.estimatedDuration} (${n.distanceKm} km)
          </span>
        </div>

        <div class="departures-grid">
          ${n.departures.map(i=>`
            <div class="card-blue departure-card ${o&&o.id===i.id?"active":""}" data-dep-id="${i.id}">
              <div>
                <div class="departure-header">
                  <span class="departure-rank">${i.rankLabel}</span>
                  <span class="departure-price">${i.priceCfa.toLocaleString("fr-FR")} FCFA</span>
                </div>
                <div class="departure-time">${i.time}</div>
                <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-top: var(--spacing-2);">
                  📍 ${i.stationName}
                </div>
              </div>
              <div style="margin-top: var(--spacing-4); font-size: var(--font-size-xs); color: #34d399; font-weight: 600;">
                ✓ ${i.availableSeats} places disponibles
              </div>
            </div>
          `).join("")}
        </div>

        <!-- Détails du départ sélectionné et indications vers la gare -->
        ${o?`
          <div class="station-details-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-4);">
              <h4 style="margin-bottom: 0; color: #ffffff;">
                Détails du voyage : ${o.rankLabel} (${o.time})
              </h4>
              <span class="departure-rank" style="background-color: rgba(16, 185, 129, 0.2); color: #34d399;">
                ${o.company}
              </span>
            </div>

            <p style="margin-bottom: var(--spacing-2); color: var(--color-text-primary);">
              🏢 <strong>Gare d'embarquement :</strong> ${o.stationName}
            </p>
            <p style="margin-bottom: var(--spacing-2); color: var(--color-text-secondary);">
              📍 <strong>Adresse :</strong> ${o.stationAddress}
            </p>
            <p style="margin-bottom: var(--spacing-2); color: var(--color-text-secondary);">
              🚌 <strong>Véhicule :</strong> ${o.busType}
            </p>

            <div class="station-direction-box">
              <strong style="color: #93c5fd; display: block; margin-bottom: var(--spacing-1);">
                🗺️ Indications pour vous rendre à la gare :
              </strong>
              <p style="margin-bottom: 0; font-size: var(--font-size-sm); color: var(--color-text-primary);">
                ${o.directions}
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
              <span>Payer mon ticket (${o.priceCfa.toLocaleString("fr-FR")} FCFA)</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        `:""}
      </section>
    `;const c=d.querySelector("#search-route-form");c.addEventListener("submit",async i=>{i.preventDefault(),r=c.querySelector("#select-from").value,s=c.querySelector("#select-to").value,n=await M.searchTrips(r,s),o=n.departures[0]||null,p()}),d.querySelectorAll(".departure-card").forEach(i=>{i.addEventListener("click",()=>{const g=i.getAttribute("data-dep-id");o=n.departures.find(v=>v.id===g),p()})});const f=d.querySelector("#btn-proceed-payment");f&&f.addEventListener("click",async()=>{f.disabled=!0,f.innerHTML="<span>Préparation du paiement...</span>";const i={passengerName:a.fullname,passengerPhone:a.phone||"Non renseigné",departureCity:r,arrivalCity:s,departureTime:o.time,departureRank:o.rankLabel,stationName:o.stationName,stationAddress:o.stationAddress,directions:o.directions,busType:o.busType,company:o.company,priceCfa:o.priceCfa},g=await M.createReservation(i);sessionStorage.setItem("pending_ticket",JSON.stringify(g)),sessionStorage.setItem("current_ticket",JSON.stringify(g)),window.location.hash="#/payment"})}return M.getCities().then(c=>{c&&c.length>0&&(e=c,p())}),p(),t.appendChild(d),t}const T=[{id:"wave",name:"Wave CI",class:"operator-wave",logoText:"WAVE"},{id:"orange",name:"Orange Money",class:"operator-orange",logoText:"OM"},{id:"mtn",name:"MTN MoMo",class:"operator-mtn",logoText:"MOMO"},{id:"moov",name:"Moov Money",class:"operator-moov",logoText:"MOOV"}];function Q(){const t=document.createElement("div");t.className="main-content";const a=JSON.parse(sessionStorage.getItem("pending_ticket")||sessionStorage.getItem("current_ticket")||"null"),e=x({label:"Modifier mon trajet",onClick:()=>{window.location.hash="#/app"}});if(t.appendChild(e),!a){const o=document.createElement("div");return o.className="card-blue",o.style.maxWidth="500px",o.style.margin="var(--spacing-8) auto",o.style.textAlign="center",o.innerHTML=`
      <h2>Aucun trajet en attente de paiement</h2>
      <p>Veuillez d'abord sélectionner un départ.</p>
      <a href="#/app" class="btn-card-white" style="margin-top: var(--spacing-4);">Choisir un départ</a>
    `,t.appendChild(o),t}let r=T[0].id;const s=document.createElement("div");s.className="card-blue auth-card",s.style.maxWidth="560px",s.style.margin="var(--spacing-6) auto";function n(){s.innerHTML=`
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
        ${T.map(l=>`
          <div class="payment-method-card ${r===l.id?"active":""}" data-op-id="${l.id}">
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
    `,s.querySelectorAll(".payment-method-card").forEach(l=>{l.addEventListener("click",()=>{r=l.getAttribute("data-op-id"),n()})});const o=s.querySelector("#payment-form");o.addEventListener("submit",async l=>{l.preventDefault();const m=o.querySelector("#btn-submit-pay"),d=o.querySelector("#pay-phone"),p=d?d.value.trim():a.passengerPhone;m.disabled=!0,m.innerHTML="<span>Validation auprès de l'opérateur...</span>";const c=T.find(f=>f.id===r);try{const f=await M.initiatePayment({bookingRef:a.bookingRef,operatorId:r,phone:p,amountCfa:a.priceCfa,passengerName:a.passengerName}),i={...a,passengerPhone:p,paymentMethod:c.name,paymentStatus:"PAID",paymentTransactionId:f.transaction?f.transaction.transactionId:`TXN-${r.toUpperCase()}-${Date.now().toString().slice(-6)}`,paymentDate:new Date().toISOString()},g=JSON.parse(localStorage.getItem("user_tickets_history")||"[]");g.unshift(i),localStorage.setItem("user_tickets_history",JSON.stringify(g)),sessionStorage.setItem("current_ticket",JSON.stringify(i)),window.location.hash="#/confirmation"}catch{m.disabled=!1,m.innerHTML="<span>Réessayer le paiement</span>"}})}return n(),t.appendChild(s),t}function Y(){const t=document.createElement("div");t.className="main-content";const a=JSON.parse(sessionStorage.getItem("current_ticket")||"null"),e=x({label:"Retour aux trajets",onClick:()=>{window.location.hash="#/app"}});if(t.appendChild(e),!a){const n=document.createElement("div");return n.className="card-blue",n.style.maxWidth="550px",n.style.margin="var(--spacing-8) auto",n.style.textAlign="center",n.innerHTML=`
      <h2 style="margin-bottom: var(--spacing-4);">Aucune réservation trouvée</h2>
      <p>Veuillez d'abord sélectionner un trajet et valider votre départ.</p>
      <a href="#/app" class="btn-card-white" style="margin-top: var(--spacing-4);">
        Rechercher un départ
      </a>
    `,t.appendChild(n),t}const r=document.createElement("div");r.className="card-blue ticket-container",r.innerHTML=`
    <div class="ticket-header-band">
      <h2 style="color: #ffffff; font-size: var(--font-size-xl); margin-bottom: var(--spacing-1);">
        ✓ Réservation & Paiement Confirmés
      </h2>
      <span style="color: rgba(255, 255, 255, 0.9); font-size: var(--font-size-sm); font-weight: 600;">
        Réf Ticket : ${a.bookingRef}
      </span>
    </div>

    <div class="ticket-body">
      <!-- QR Code de contrôle -->
      <div class="ticket-qr-mock">
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
          <span>Imprimer mon billet</span>
        </button>
        <a href="#/history" class="btn-card-white" style="flex: 1; min-width: 160px; text-align: center;">
          <span>🎟️ Mes Billets</span>
        </a>
        <a href="#/profile" class="btn-primary-blue" style="flex: 1; min-width: 160px; text-align: center;">
          <span>👤 Mon Profil</span>
        </a>
      </div>
    </div>
  `;const s=r.querySelector("#btn-print-ticket");return s&&s.addEventListener("click",()=>{window.print()}),t.appendChild(r),t}function Z(){const t=document.createElement("div");t.className="main-content";const a=JSON.parse(sessionStorage.getItem("current_user")||'{"fullname": "Voyageur", "phone": "" }'),e=document.createElement("div");e.className="booking-topbar",e.innerHTML=`
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
  `,t.appendChild(e);const r=x({label:"Retour à l'espace réservation",onClick:()=>{window.location.hash="#/app"}});t.appendChild(r);const s=document.createElement("div");if(s.style.margin="var(--spacing-4) 0 var(--spacing-6) 0",s.innerHTML=`
    <h1>Mes Billets & Historique des Voyages</h1>
    <p>Retrouvez l'ensemble de vos réservations, vérifiez l'état de vos départs et réimprimez vos tickets.</p>
  `,t.appendChild(s),history.length===0){const o=document.createElement("div");return o.className="card-blue",o.style.maxWidth="600px",o.style.textAlign="center",o.style.padding="var(--spacing-8)",o.innerHTML=`
      <div style="font-size: 3rem; margin-bottom: var(--spacing-4);">🎟️</div>
      <h2 style="font-size: var(--font-size-2xl); margin-bottom: var(--spacing-2);">Aucun voyage enregistré</h2>
      <p>Vous n'avez pas encore réservé de trajet sur la plateforme.</p>
      <a href="#/app" class="btn-card-white" style="margin-top: var(--spacing-4);">
        Réserver mon premier départ
      </a>
    `,t.appendChild(o),t}const n=document.createElement("div");return n.className="history-list",history.forEach(o=>{const l=document.createElement("div");l.className="card-blue history-item-card",l.innerHTML=`
      <div>
        <div style="display: flex; align-items: center; gap: var(--spacing-3); margin-bottom: var(--spacing-2);">
          <span class="history-badge-status status-paid">✓ Payé (${o.paymentMethod||"Mobile Money"})</span>
          <span style="font-size: var(--font-size-xs); color: var(--color-text-muted);">Réf : ${o.bookingRef}</span>
        </div>
        <h3 style="font-size: var(--font-size-xl); color: #60a5fa; margin-bottom: var(--spacing-1);">
          ${o.departureCity} ➔ ${o.arrivalCity}
        </h3>
        <p style="font-size: var(--font-size-sm); margin-bottom: 0; color: var(--color-text-secondary);">
          📅 Départ : <strong>${o.departureTime}</strong> (${o.departureRank}) • Gare : ${o.stationName}
        </p>
      </div>

      <div style="display: flex; align-items: center; gap: var(--spacing-4);">
        <span style="font-size: var(--font-size-lg); font-weight: 700; color: #fbbf24;">
          ${(o.priceCfa||7e3).toLocaleString("fr-FR")} FCFA
        </span>
        <button type="button" class="btn-card-white" data-ticket-ref="${o.bookingRef}">
          <span>Voir le billet</span>
        </button>
      </div>
    `;const m=l.querySelector(`[data-ticket-ref="${o.bookingRef}"]`);m&&m.addEventListener("click",()=>{sessionStorage.setItem("current_ticket",JSON.stringify(o)),window.location.hash="#/confirmation"}),n.appendChild(l)}),t.appendChild(n),t}function A(t,a=!1){let e=document.getElementById("profile-toast-notification");e||(e=document.createElement("div"),e.id="profile-toast-notification",e.className="profile-toast",document.body.appendChild(e)),e.className=`profile-toast ${a?"error":""} show`,e.innerHTML=`
    <span>${a?"⚠️":"✓"}</span>
    <span>${t}</span>
  `,setTimeout(()=>{e.classList.remove("show")},3500)}function X(t){if(!t||t.length<6)return"weak";const a=/[A-Z]/.test(t),e=/[a-z]/.test(t),r=/[0-9]/.test(t),s=/[^A-Za-z0-9]/.test(t),n=[a,e,r,s,t.length>=8].filter(Boolean).length;return n>=4?"strong":n>=2?"medium":"weak"}function ee(){const t=document.createElement("div");t.className="main-content profile-container";const a=sessionStorage.getItem("current_user"),e=a?JSON.parse(a):{fullname:"Kouassi Jean-Philippe",username:"kouassi_jp",phone:"+225 07 12 34 56 78",email:"jean.kouassi@transport.ci",city:"Abidjan",emergencyContactName:"Kouassi Marie (Épouse)",emergencyContactPhone:"+225 05 98 76 54 32",preferredPayment:"wave",preferredCompany:"UTB",seatPreference:"fenetre",smsAlerts:!0,memberSince:"Janvier 2026"};e.username=e.username||e.fullname.toLowerCase().replace(/[\s-]/g,"_"),e.city=e.city||"Abidjan",e.emergencyContactName=e.emergencyContactName||"",e.emergencyContactPhone=e.emergencyContactPhone||"",e.preferredPayment=e.preferredPayment||"wave",e.preferredCompany=e.preferredCompany||"Toutes compagnies",e.seatPreference=e.seatPreference||"fenetre",e.smsAlerts=e.smsAlerts!==void 0?e.smsAlerts:!0,e.memberSince=e.memberSince||"2026";const r=JSON.parse(localStorage.getItem("user_tickets_history")||"[]"),s=r.length,n=r.reduce((u,b)=>u+(b.priceCfa||0),0),o=s*150+500,l=s>=5?"Membre Gold ⭐":s>=2?"Membre Silver ✨":"Passager Certifié ✓",m=x({label:"Retour aux trajets",onClick:()=>{window.location.hash="#/app"}});t.appendChild(m);const d=document.createElement("div");d.className="profile-hero-card",d.innerHTML=`
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
        🎟️ Mes Billets (${s})
      </a>
      <a href="#/app" class="btn-primary-blue" style="font-size: var(--font-size-xs); padding: var(--spacing-2) var(--spacing-4);">
        🚌 Réserver
      </a>
      <button type="button" id="btn-logout-profile" class="btn-card-white" style="font-size: var(--font-size-xs); padding: var(--spacing-2) var(--spacing-3); color: #ef4444; border-color: rgba(239, 68, 68, 0.4);">
        🚪 Déconnexion
      </button>
    </div>
  `,t.appendChild(d);const p=document.createElement("div");p.className="profile-stats-grid",p.innerHTML=`
    <div class="profile-stat-card">
      <div class="profile-stat-icon">🎟️</div>
      <div class="profile-stat-value">${s}</div>
      <div class="profile-stat-label">Voyages Effectués</div>
    </div>
    <div class="profile-stat-card">
      <div class="profile-stat-icon">💰</div>
      <div class="profile-stat-value">${n.toLocaleString("fr-FR")} <span style="font-size: var(--font-size-xs);">FCFA</span></div>
      <div class="profile-stat-label">Total Dépensé</div>
    </div>
    <div class="profile-stat-card">
      <div class="profile-stat-icon">🎁</div>
      <div class="profile-stat-value">${o}</div>
      <div class="profile-stat-label">Points Fidélité</div>
    </div>
    <div class="profile-stat-card">
      <div class="profile-stat-icon">🏆</div>
      <div class="profile-stat-value" style="font-size: var(--font-size-lg); color: #34d399;">${l}</div>
      <div class="profile-stat-label">Statut Voyageur</div>
    </div>
  `,t.appendChild(p);const c=document.createElement("div");c.className="profile-grid-layout";const f=document.createElement("div");f.className="profile-section-card",f.innerHTML=`
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
          ${P.map(u=>`<option value="${u}" ${u===e.city?"selected":""}>${u}</option>`).join("")}
        </select>
      </div>

      <button type="submit" class="btn-card-white" style="width: 100%; margin-top: var(--spacing-4);">
        <span>Enregistrer mes coordonnées</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </button>
    </form>
  `,c.appendChild(f);const i=document.createElement("div");i.className="profile-section-card",i.innerHTML=`
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
  `,c.appendChild(i);const g=document.createElement("div");g.className="profile-section-card profile-card-full",g.innerHTML=`
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
  `,c.appendChild(g),t.appendChild(c);const v=f.querySelector("#form-personal-info");v.addEventListener("submit",u=>{u.preventDefault();const b=v.querySelector("#prof-username").value.trim(),C=v.querySelector("#prof-fullname").value.trim(),N=v.querySelector("#prof-phone").value.trim(),z=v.querySelector("#prof-email").value.trim(),j=v.querySelector("#prof-city").value;let $=!0;b?v.querySelector("#fb-prof-username").className="form-feedback":(v.querySelector("#fb-prof-username").className="form-feedback error",$=!1),C?v.querySelector("#fb-prof-fullname").className="form-feedback":(v.querySelector("#fb-prof-fullname").className="form-feedback error",$=!1),!N||N.length<8?(v.querySelector("#fb-prof-phone").className="form-feedback error",$=!1):v.querySelector("#fb-prof-phone").className="form-feedback",$&&(e.username=b,e.fullname=C,e.phone=N,e.email=z,e.city=j,sessionStorage.setItem("current_user",JSON.stringify(e)),localStorage.setItem("saved_passenger_profile",JSON.stringify(e)),t.querySelector("#profile-hero-name").innerHTML=`
        ${e.fullname}
        <span class="profile-username-badge" id="profile-hero-username">@${e.username}</span>
      `,t.querySelector("#profile-avatar-display").textContent=e.fullname.charAt(0).toUpperCase(),t.querySelector("#profile-hero-city").textContent=e.city,t.querySelector("#profile-hero-phone").textContent=e.phone,A("Vos informations personnelles ont été mises à jour avec succès !"))});const R=i.querySelector("#prof-new-pwd"),E=i.querySelector("#pwd-strength-fill"),h=i.querySelector("#pwd-strength-text");R.addEventListener("input",()=>{const u=R.value;if(!u){E.className="password-strength-fill",h.textContent="Sécurité : Entrez un mot de passe";return}const b=X(u);E.className=`password-strength-fill ${b}`,b==="strong"?(h.textContent="Sécurité : Mot de passe robuste et sécurisé ✓",h.style.color="#34d399"):b==="medium"?(h.textContent="Sécurité : Niveau moyen (ajoutez des chiffres ou symboles)",h.style.color="#fbbf24"):(h.textContent="Sécurité : Mot de passe trop court ou faible",h.style.color="#ef4444")});const k=i.querySelector("#form-password-change");k.addEventListener("submit",u=>{u.preventDefault();const b=k.querySelector("#prof-old-pwd").value,C=k.querySelector("#prof-new-pwd").value,N=k.querySelector("#prof-confirm-pwd").value;let z=!0;b?k.querySelector("#fb-prof-old-pwd").className="form-feedback":(k.querySelector("#fb-prof-old-pwd").className="form-feedback error",z=!1),C.length<6&&(h.textContent="Erreur : Le nouveau mot de passe doit comporter au moins 6 caractères.",h.style.color="#ef4444",z=!1),C!==N?(k.querySelector("#fb-prof-confirm-pwd").className="form-feedback error",z=!1):k.querySelector("#fb-prof-confirm-pwd").className="form-feedback",z&&(e.passwordUpdated=new Date().toISOString(),sessionStorage.setItem("current_user",JSON.stringify(e)),k.reset(),E.className="password-strength-fill",h.textContent="Sécurité : Entrez un mot de passe",h.style.color="var(--color-text-muted)",A("Votre mot de passe a été modifié avec succès !"))});const S=g.querySelector("#form-preferences");S.querySelectorAll(".operator-radio-label").forEach(u=>{u.addEventListener("click",()=>{S.querySelectorAll(".operator-radio-label").forEach(C=>C.classList.remove("selected")),u.classList.add("selected");const b=u.querySelector("input");b&&(b.checked=!0)})}),S.addEventListener("submit",u=>{u.preventDefault();const b=S.querySelector("#prof-emergency-name").value.trim(),C=S.querySelector("#prof-emergency-phone").value.trim(),N=S.querySelector('input[name="preferredPayment"]:checked'),z=N?N.value:"wave",j=S.querySelector("#prof-seat-pref").value,$=S.querySelector("#prof-sms-alerts").checked;e.emergencyContactName=b,e.emergencyContactPhone=C,e.preferredPayment=z,e.seatPreference=j,e.smsAlerts=$,sessionStorage.setItem("current_user",JSON.stringify(e)),localStorage.setItem("saved_passenger_profile",JSON.stringify(e)),A("Vos préférences de voyage et contact d'urgence ont été enregistrés !")});const I=d.querySelector("#btn-logout-profile");return I&&I.addEventListener("click",()=>{sessionStorage.removeItem("current_user"),window.location.hash="#/"}),t}function te(){const t=document.createElement("div");t.className="main-content";const a=x({label:"Retour à l'espace voyageur",onClick:()=>{window.location.hash="#/app"}});t.appendChild(a);const e=document.createElement("div");e.style.margin="var(--spacing-4) 0 var(--spacing-6) 0",e.style.display="flex",e.style.justifyContent="space-between",e.style.alignItems="center",e.style.flexWrap="wrap",e.style.gap="var(--spacing-4)",e.innerHTML=`
    <div>
      <h1 style="margin-bottom: var(--spacing-1);">Tableau de Bord Administrateur</h1>
      <p style="margin-bottom: 0;">Supervision en direct des départs, des réservations et des gares.</p>
    </div>
    <a href="#/admin/departures" class="btn-primary-blue">
      <span>+ Programmer un départ</span>
    </a>
  `,t.appendChild(e);const r=document.createElement("div");r.className="admin-kpi-grid",r.innerHTML=`
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
  `,t.appendChild(r);const s=document.createElement("div");return s.className="card-blue",s.innerHTML=`
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
  `,t.appendChild(s),t}function ae(){const t=document.createElement("div");t.className="main-content";const a=x({label:"Retour au tableau de bord",onClick:()=>{window.location.hash="#/admin"}});t.appendChild(a);const e=document.createElement("div");e.className="card-blue auth-card",e.style.maxWidth="680px",e.style.margin="var(--spacing-6) auto",e.innerHTML=`
    <div class="auth-header">
      <h1 class="auth-title">Programmer un Nouveau Départ</h1>
      <p class="auth-subtitle">Configurez un horaire, une gare d'embarquement et la capacité du car.</p>
    </div>

    <form id="admin-departure-form" class="auth-form">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-4);">
        <div class="form-group">
          <label class="form-label" for="adm-from">Ville de départ</label>
          <select id="adm-from" class="form-select" required>
            ${P.map(s=>`<option value="${s}">${s}</option>`).join("")}
          </select>
        </div>

        <div class="form-group">
          <label class="form-label" for="adm-to">Ville d'arrivée</label>
          <select id="adm-to" class="form-select" required>
            ${P.map((s,n)=>`<option value="${s}" ${n===1?"selected":""}>${s}</option>`).join("")}
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
  `;const r=e.querySelector("#admin-departure-form");return r.addEventListener("submit",s=>{s.preventDefault();const n=r.querySelector("#btn-save-departure");n.disabled=!0,n.innerHTML="<span>Publication en cours...</span>",setTimeout(()=>{window.location.hash="#/admin"},600)}),t.appendChild(e),t}const L=document.getElementById("app"),O={"/":_,"/register":G,"/login":J,"/app":K,"/payment":Q,"/confirmation":Y,"/history":Z,"/profile":ee,"/admin":te,"/admin/departures":ae};function D(){if(!L)return;const t=window.location.hash.slice(1)||"/",a=t.startsWith("/")?t:`/${t}`,e=O[a]||O["/"];L.innerHTML="";const r=e();L.appendChild(r),window.scrollTo({top:0,behavior:"smooth"})}document.addEventListener("DOMContentLoaded",()=>{V(),window.addEventListener("hashchange",D),D()});
