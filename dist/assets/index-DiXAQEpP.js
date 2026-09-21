(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();function S(e){const t=document.getElementById(e);t&&(t.classList.add("active"),document.body.style.overflow="hidden")}function w(e){const t=document.getElementById(e);t&&(t.classList.remove("active"),document.body.style.overflow="")}function E(){if(document.getElementById("modals-container"))return;const e=document.createElement("div");e.id="modals-container",e.innerHTML=`
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
  `,document.body.appendChild(e),e.querySelectorAll("[data-close]").forEach(t=>{t.addEventListener("click",()=>{const a=t.getAttribute("data-close");w(a)})}),e.querySelectorAll(".modal-backdrop").forEach(t=>{t.addEventListener("click",a=>{a.target===t&&w(t.id)})}),document.addEventListener("keydown",t=>{if(t.key==="Escape"){const a=document.querySelector(".modal-backdrop.active");a&&w(a.id)}})}function j(){const e=document.createElement("header");e.className="site-header",e.innerHTML=`
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
      <button type="button" class="btn-nav-link" id="nav-btn-about">
        À propos
      </button>
      <button type="button" class="btn-nav-link" id="nav-btn-contact">
        Nous contacter
      </button>
    </nav>
  `;const t=e.querySelector("#nav-btn-about"),a=e.querySelector("#nav-btn-contact");return t&&t.addEventListener("click",()=>{S("about-modal")}),a&&a.addEventListener("click",()=>{S("contact-modal")}),e}function $(){const e=document.createElement("div");e.className="landing-view";const t=j();e.appendChild(t);const a=document.createElement("main");return a.className="main-content",a.innerHTML=`
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
  `,e.appendChild(a),e}function b(e={}){const{label:t="Retour",onClick:a=null,customClass:s=""}=e,o=document.createElement("div");o.className=`btn-back-3d-wrapper ${s}`.trim();const r=document.createElement("button");return r.type="button",r.className="btn-back-3d",r.setAttribute("aria-label",t),r.innerHTML=`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
    <span>${t}</span>
  `,r.addEventListener("click",n=>{n.preventDefault(),typeof a=="function"?a(n):window.history.length>1?window.history.back():window.location.hash="#/"}),o.appendChild(r),o}function T(){const e=document.createElement("div");e.className="auth-view-container";const t=b({label:"Retour à l'accueil",onClick:()=>{window.location.hash="#/"}});e.appendChild(t);const a=document.createElement("div");a.className="auth-card",a.innerHTML=`
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
  `;const s=a.querySelector("#register-form");return s.addEventListener("submit",o=>{o.preventDefault();const r=s.querySelector("#reg-fullname").value.trim(),n=s.querySelector("#reg-phone").value.trim(),l=s.querySelector("#reg-email").value.trim(),u=s.querySelector("#reg-password").value,d=s.querySelector("#reg-password-confirm").value;let c=!0;const p=s.querySelector("#feedback-fullname");r?p.className="form-feedback":(p.className="form-feedback error",c=!1);const m=s.querySelector("#feedback-phone");!n||n.length<8?(m.className="form-feedback error",c=!1):m.className="form-feedback";const i=s.querySelector("#feedback-password");u.length<6?(i.className="form-feedback error",c=!1):i.className="form-feedback";const v=s.querySelector("#feedback-password-confirm");if(u!==d?(v.className="form-feedback error",c=!1):v.className="form-feedback",c){const k={fullname:r,phone:n,email:l||"contact@client.ci"};sessionStorage.setItem("current_user",JSON.stringify(k)),window.location.hash="#/app"}}),e.appendChild(a),e}function A(){const e=document.createElement("div");e.className="auth-view-container";const t=b({label:"Retour à l'accueil",onClick:()=>{window.location.hash="#/"}});e.appendChild(t);const a=document.createElement("div");a.className="auth-card",a.innerHTML=`
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
  `;const s=a.querySelector("#login-form");return s.addEventListener("submit",o=>{o.preventDefault();const r=s.querySelector("#login-identifier").value.trim(),n=s.querySelector("#login-password").value;let l=!0;const u=s.querySelector("#feedback-login-id");r?u.className="form-feedback":(u.className="form-feedback error",l=!1);const d=s.querySelector("#feedback-login-pwd");if(n?d.className="form-feedback":(d.className="form-feedback error",l=!1),l){const p=JSON.parse(sessionStorage.getItem("current_user")||"null")||{fullname:r.includes("@")?"Voyageur":"Passager Express",phone:r,email:r.includes("@")?r:"voyageur@transport.ci"};sessionStorage.setItem("current_user",JSON.stringify(p)),window.location.hash="#/app"}}),e.appendChild(a),e}const y=["Abidjan","Bondoukou","Bouaké","Yamoussoukro","Korhogo","San-Pédro","Man","Daloa"],L=[{id:"trip-abj-bdk",departureCity:"Abidjan",arrivalCity:"Bondoukou",distanceKm:420,estimatedDuration:"7h 30min",departures:[{id:"dep-abj-bdk-1",rankLabel:"1er Départ",time:"06h30",stationName:"Gare Principale d'Adjamé (Quai Nord)",stationAddress:"Adjamé Liberté, à 100m du grand carrefour",directions:"Emprunter le boulevard principal, quai n°3 réservé aux lignes de l'Est (Bondoukou / Bouna). Présentation recommandée 30 minutes avant le départ.",busType:"Car Grand Confort VIP (Climatisé, Wifi, Prises USB)",company:"Compagnie Express du Zanzan",priceCfa:7500,availableSeats:18},{id:"dep-abj-bdk-2",rankLabel:"2e Départ",time:"10h00",stationName:"Gare Routière d'Adjamé — Pôle Est",stationAddress:"Boulevard Nangui Abrogoua, Face Pharmacie Centrale",directions:"Accès direct par le couloir central des cars interurbains. Guichet d'enregistrement et dépose bagages Quai 2.",busType:"Car Standard 60 places (Climatisation active)",company:"Compagnie Express du Zanzan",priceCfa:7e3,availableSeats:24},{id:"dep-abj-bdk-3",rankLabel:"3e Départ",time:"14h30",stationName:"Gare de Yopougon Siporex",stationAddress:"Carrefour Siporex, Terminus des lignes Est",directions:"Point d'embarquement côté autoroute du Nord avant bifurcation vers l'Est. Parking voyageurs disponible.",busType:"Car VIP Confort Plus (Climatisé, Écrans individuels)",company:"Union des Transporteurs de l'Est",priceCfa:8e3,availableSeats:12}]},{id:"trip-abj-bke",departureCity:"Abidjan",arrivalCity:"Bouaké",distanceKm:350,estimatedDuration:"4h 45min",departures:[{id:"dep-abj-bke-1",rankLabel:"1er Départ",time:"07h00",stationName:"Gare d'Adjamé Renaissance",stationAddress:"Boulevard de la Paix, Adjamé",directions:"Quai réservé aux lignes Centre & Nord. Voie express directe autoroute.",busType:"Car VIP Grand Tourisme",company:"Société Nationale de Transport",priceCfa:6e3,availableSeats:15},{id:"dep-abj-bke-2",rankLabel:"2e Départ",time:"11h30",stationName:"Gare de Yopougon Gesco",stationAddress:"Sortie Autoroute du Nord, Gesco",directions:"Embarquement rapide en bordure d'autoroute, idéal pour les résidents de Yopougon.",busType:"Car Standard Confort",company:"Société Nationale de Transport",priceCfa:5500,availableSeats:28}]},{id:"trip-abj-yakro",departureCity:"Abidjan",arrivalCity:"Yamoussoukro",distanceKm:240,estimatedDuration:"2h 45min",departures:[{id:"dep-abj-yak-1",rankLabel:"1er Départ",time:"08h00",stationName:"Gare Routière Internationale d'Adjamé",stationAddress:"Adjamé Cité Fairmont",directions:"Hall départ direct autoroute de Yamoussoukro. Enregistrement quai A.",busType:"Car Navette Express Directe",company:"Capitale Express Transport",priceCfa:4500,availableSeats:30}]},{id:"trip-bdk-abj",departureCity:"Bondoukou",arrivalCity:"Abidjan",distanceKm:420,estimatedDuration:"7h 30min",departures:[{id:"dep-bdk-abj-1",rankLabel:"1er Départ",time:"06h00",stationName:"Gare Centrale de Bondoukou",stationAddress:"Quartier Zanzan, Face Grand Marché",directions:"Présentation des voyageurs dès 05h30 pour l'étiquetage des bagages et la validation du ticket en ligne.",busType:"Car Grand Confort VIP",company:"Compagnie Express du Zanzan",priceCfa:7500,availableSeats:20}]}];function M(e,t){const a=L.find(s=>s.departureCity.toLowerCase()===e.toLowerCase()&&s.arrivalCity.toLowerCase()===t.toLowerCase());return a||{id:`trip-${e.toLowerCase()}-${t.toLowerCase()}`,departureCity:e,arrivalCity:t,distanceKm:320,estimatedDuration:"5h 00min",departures:[{id:`dep-${e.toLowerCase()}-1`,rankLabel:"1er Départ",time:"07h30",stationName:`Gare Centrale de ${e}`,stationAddress:`Boulevard principal de ${e}`,directions:`Se rendre au hall d'embarquement n°1 de ${e} avec la référence de réservation.`,busType:"Car Confort Interurbain",company:"Réseau National des Transporteurs",priceCfa:6e3,availableSeats:22},{id:`dep-${e.toLowerCase()}-2`,rankLabel:"2e Départ",time:"13h00",stationName:`Gare Routière Sud de ${e}`,stationAddress:`Carrefour de la Paix, ${e}`,directions:"Embarquement direct voie B. Dépose des bagages 20 minutes avant le départ.",busType:"Car Confort Interurbain",company:"Réseau National des Transporteurs",priceCfa:6e3,availableSeats:16}]}}const g="http://localhost:5000/api",P=3e3;async function f(e,t={}){const a=new AbortController,s=setTimeout(()=>a.abort(),P);try{return await fetch(e,{...t,signal:a.signal})}finally{clearTimeout(s)}}const h={async getCities(){try{const e=await f(`${g}/trips/cities`);if(e.ok){const t=await e.json();if(t.success&&Array.isArray(t.data))return t.data}}catch{}return[...y]},async searchTrips(e,t){try{const a=new URLSearchParams({from:e,to:t}),s=await f(`${g}/trips/search?${a.toString()}`);if(s.ok){const o=await s.json();if(o.success&&o.data)return o.data}}catch{}return M(e,t)},async createReservation(e){try{const t=await f(`${g}/trips/reservations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(t.ok){const a=await t.json();if(a.success&&a.data)return a.data}}catch{}return{bookingRef:`GR-${Date.now().toString().slice(-6)}`,createdAt:new Date().toISOString(),...e,status:"CONFIRMED"}},async getTicketByReference(e){try{const a=await f(`${g}/trips/tickets/${encodeURIComponent(e)}`);if(a.ok){const s=await a.json();if(s.success&&s.data)return s.data}}catch{}return JSON.parse(localStorage.getItem("user_tickets_history")||"[]").find(a=>a.bookingRef===e)||null},async getPassengerHistory(e){try{const t=await f(`${g}/trips/passenger/${encodeURIComponent(e)}/history`);if(t.ok){const a=await t.json();if(a.success&&Array.isArray(a.data))return a.data}}catch{}return JSON.parse(localStorage.getItem("user_tickets_history")||"[]")},async getPaymentOperators(){try{const e=await f(`${g}/payments/operators`);if(e.ok){const t=await e.json();if(t.success&&Array.isArray(t.data))return t.data}}catch{}return[{id:"wave",name:"Wave Côte d'Ivoire",feePercentage:1},{id:"orange",name:"Orange Money",feePercentage:1},{id:"mtn",name:"MTN Mobile Money",feePercentage:1},{id:"moov",name:"Moov Money Flooz",feePercentage:1}]},async initiatePayment(e){try{const t=await f(`${g}/payments/initiate`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(t.ok){const a=await t.json();if(a.success&&a.data)return a.data}}catch{}return{success:!0,transaction:{transactionId:`TXN-${(e.operatorId||"LOCAL").toUpperCase()}-${Date.now().toString().slice(-6)}`,bookingRef:e.bookingRef||"GR-LOC",amountCfa:e.amountCfa,completedAt:new Date().toISOString(),status:"COMPLETED"}}},async login(e){return(await f(`${g}/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json()},async register(e){return(await f(`${g}/auth/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json()}};function q(){const e=document.createElement("div");e.className="main-content";const t=JSON.parse(sessionStorage.getItem("current_user")||'{"fullname": "Voyageur", "phone": "" }');let a=[...y],s="Abidjan",o="Bondoukou",r=M(s,o),n=r.departures[1]||r.departures[0];const l=document.createElement("div");l.className="booking-topbar",l.innerHTML=`
    <div class="user-badge-info">
      <div class="user-avatar">${t.fullname.charAt(0).toUpperCase()}</div>
      <div>
        <div style="font-weight: 700; color: var(--color-text-primary); font-size: var(--font-size-base);">${t.fullname}</div>
        <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">Espace Voyageur Certifié</div>
      </div>
    </div>
    <div style="display: flex; gap: var(--spacing-2); align-items: center;">
      <a href="#/history" class="btn-card-white" style="font-size: var(--font-size-xs); padding: var(--spacing-2) var(--spacing-3);">
        🎟️ Mes Billets
      </a>
      <a href="#/" class="btn-primary-blue" style="font-size: var(--font-size-xs); padding: var(--spacing-2) var(--spacing-4);">
        Déconnexion
      </a>
    </div>
  `,e.appendChild(l);const u=b({label:"Retour à l'accueil",onClick:()=>{window.location.hash="#/"}});e.appendChild(u);const d=document.createElement("div");d.id="booking-workspace";function c(){d.innerHTML=`
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
              ${a.map(i=>`<option value="${i}" ${i===s?"selected":""}>${i}</option>`).join("")}
            </select>
          </div>

          <div class="form-group">
            <label class="form-label" for="select-to">Ville d'arrivée (Destination)</label>
            <select id="select-to" class="form-select">
              ${a.map(i=>`<option value="${i}" ${i===o?"selected":""}>${i}</option>`).join("")}
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
          <h3>Départs disponibles : <span style="color: #60a5fa;">${s} → ${o}</span></h3>
          <span style="font-size: var(--font-size-sm); color: var(--color-text-muted);">
            Durée estimée : ~${r.estimatedDuration} (${r.distanceKm} km)
          </span>
        </div>

        <div class="departures-grid">
          ${r.departures.map(i=>`
            <div class="card-blue departure-card ${n&&n.id===i.id?"active":""}" data-dep-id="${i.id}">
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
        ${n?`
          <div class="station-details-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-4);">
              <h4 style="margin-bottom: 0; color: #ffffff;">
                Détails du voyage : ${n.rankLabel} (${n.time})
              </h4>
              <span class="departure-rank" style="background-color: rgba(16, 185, 129, 0.2); color: #34d399;">
                ${n.company}
              </span>
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
              <span>Payer mon ticket (${n.priceCfa.toLocaleString("fr-FR")} FCFA)</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        `:""}
      </section>
    `;const p=d.querySelector("#search-route-form");p.addEventListener("submit",async i=>{i.preventDefault(),s=p.querySelector("#select-from").value,o=p.querySelector("#select-to").value,r=await h.searchTrips(s,o),n=r.departures[0]||null,c()}),d.querySelectorAll(".departure-card").forEach(i=>{i.addEventListener("click",()=>{const v=i.getAttribute("data-dep-id");n=r.departures.find(k=>k.id===v),c()})});const m=d.querySelector("#btn-proceed-payment");m&&m.addEventListener("click",async()=>{m.disabled=!0,m.innerHTML="<span>Préparation du paiement...</span>";const i={passengerName:t.fullname,passengerPhone:t.phone||"Non renseigné",departureCity:s,arrivalCity:o,departureTime:n.time,departureRank:n.rankLabel,stationName:n.stationName,stationAddress:n.stationAddress,directions:n.directions,busType:n.busType,company:n.company,priceCfa:n.priceCfa},v=await h.createReservation(i);sessionStorage.setItem("pending_ticket",JSON.stringify(v)),sessionStorage.setItem("current_ticket",JSON.stringify(v)),window.location.hash="#/payment"})}return h.getCities().then(p=>{p&&p.length>0&&(a=p,c())}),c(),e.appendChild(d),e}const C=[{id:"wave",name:"Wave CI",class:"operator-wave",logoText:"WAVE"},{id:"orange",name:"Orange Money",class:"operator-orange",logoText:"OM"},{id:"mtn",name:"MTN MoMo",class:"operator-mtn",logoText:"MOMO"},{id:"moov",name:"Moov Money",class:"operator-moov",logoText:"MOOV"}];function R(){const e=document.createElement("div");e.className="main-content";const t=JSON.parse(sessionStorage.getItem("pending_ticket")||sessionStorage.getItem("current_ticket")||"null"),a=b({label:"Modifier mon trajet",onClick:()=>{window.location.hash="#/app"}});if(e.appendChild(a),!t){const n=document.createElement("div");return n.className="card-blue",n.style.maxWidth="500px",n.style.margin="var(--spacing-8) auto",n.style.textAlign="center",n.innerHTML=`
      <h2>Aucun trajet en attente de paiement</h2>
      <p>Veuillez d'abord sélectionner un départ.</p>
      <a href="#/app" class="btn-card-white" style="margin-top: var(--spacing-4);">Choisir un départ</a>
    `,e.appendChild(n),e}let s=C[0].id;const o=document.createElement("div");o.className="card-blue auth-card",o.style.maxWidth="560px",o.style.margin="var(--spacing-6) auto";function r(){o.innerHTML=`
      <div class="auth-header">
        <h1 class="auth-title">Règlement du Ticket</h1>
        <p class="auth-subtitle">Sélectionnez votre moyen de paiement Mobile Money en Côte d'Ivoire.</p>
      </div>

      <!-- Récapitulatif du trajet -->
      <div style="background-color: rgba(255, 255, 255, 0.05); padding: var(--spacing-4); border-radius: var(--radius-md); margin-bottom: var(--spacing-4);">
        <div style="display: flex; justify-content: space-between; margin-bottom: var(--spacing-2);">
          <span>Trajet sélectionné :</span>
          <strong style="color: #60a5fa;">${t.departureCity} ➔ ${t.arrivalCity}</strong>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: var(--spacing-2);">
          <span>Départ :</span>
          <strong>${t.departureRank} (${t.departureTime})</strong>
        </div>
        <div style="display: flex; justify-content: space-between; border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: var(--spacing-2);">
          <span style="font-weight: 700;">Montant total :</span>
          <strong style="color: #fbbf24; font-size: var(--font-size-lg);">${t.priceCfa.toLocaleString("fr-FR")} FCFA</strong>
        </div>
      </div>

      <!-- Sélecteur d'opérateur Mobile Money -->
      <label class="form-label">Opérateur Mobile Money :</label>
      <div class="payment-methods-grid">
        ${C.map(l=>`
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
            value="${t.passengerPhone&&t.passengerPhone!=="Non renseigné"?t.passengerPhone:""}" 
            required 
          />
        </div>

        <button type="submit" class="btn-card-white" id="btn-submit-pay" style="width: 100%; margin-top: var(--spacing-4); padding: var(--spacing-4);">
          <span>Payer ${t.priceCfa.toLocaleString("fr-FR")} FCFA</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </button>
      </form>
    `,o.querySelectorAll(".payment-method-card").forEach(l=>{l.addEventListener("click",()=>{s=l.getAttribute("data-op-id"),r()})});const n=o.querySelector("#payment-form");n.addEventListener("submit",async l=>{l.preventDefault();const u=n.querySelector("#btn-submit-pay"),d=n.querySelector("#pay-phone"),c=d?d.value.trim():t.passengerPhone;u.disabled=!0,u.innerHTML="<span>Validation auprès de l'opérateur...</span>";const p=C.find(m=>m.id===s);try{const m=await h.initiatePayment({bookingRef:t.bookingRef,operatorId:s,phone:c,amountCfa:t.priceCfa,passengerName:t.passengerName}),i={...t,passengerPhone:c,paymentMethod:p.name,paymentStatus:"PAID",paymentTransactionId:m.transaction?m.transaction.transactionId:`TXN-${s.toUpperCase()}-${Date.now().toString().slice(-6)}`,paymentDate:new Date().toISOString()},v=JSON.parse(localStorage.getItem("user_tickets_history")||"[]");v.unshift(i),localStorage.setItem("user_tickets_history",JSON.stringify(v)),sessionStorage.setItem("current_ticket",JSON.stringify(i)),window.location.hash="#/confirmation"}catch{u.disabled=!1,u.innerHTML="<span>Réessayer le paiement</span>"}})}return r(),e.appendChild(o),e}function B(){const e=document.createElement("div");e.className="main-content";const t=JSON.parse(sessionStorage.getItem("current_ticket")||"null"),a=b({label:"Retour aux trajets",onClick:()=>{window.location.hash="#/app"}});if(e.appendChild(a),!t){const r=document.createElement("div");return r.className="card-blue",r.style.maxWidth="550px",r.style.margin="var(--spacing-8) auto",r.style.textAlign="center",r.innerHTML=`
      <h2 style="margin-bottom: var(--spacing-4);">Aucune réservation trouvée</h2>
      <p>Veuillez d'abord sélectionner un trajet et valider votre départ.</p>
      <a href="#/app" class="btn-card-white" style="margin-top: var(--spacing-4);">
        Rechercher un départ
      </a>
    `,e.appendChild(r),e}const s=document.createElement("div");s.className="card-blue ticket-container",s.innerHTML=`
    <div class="ticket-header-band">
      <h2 style="color: #ffffff; font-size: var(--font-size-xl); margin-bottom: var(--spacing-1);">
        ✓ Réservation & Paiement Confirmés
      </h2>
      <span style="color: rgba(255, 255, 255, 0.9); font-size: var(--font-size-sm); font-weight: 600;">
        Réf Ticket : ${t.bookingRef}
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
          ${t.departureCity} ➔ ${t.arrivalCity}
        </h3>
        <p style="color: #cbd5e1; font-size: var(--font-size-sm); margin-bottom: 0;">
          ${t.departureRank} • Départ prévu à <strong>${t.departureTime}</strong>
        </p>
      </div>

      <!-- Badge de règlement Mobile Money sécurisé -->
      <div style="background-color: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.35); border-radius: var(--radius-md); padding: var(--spacing-3) var(--spacing-4); margin: var(--spacing-2) 0; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: var(--spacing-2);">
        <div>
          <span style="color: #34d399; font-weight: 700; font-size: var(--font-size-sm); display: block;">
            ✓ Réglé avec succès par ${t.paymentMethod||"Mobile Money"}
          </span>
          <span style="font-size: var(--font-size-xs); color: #94a3b8;">
            Transaction : <strong>${t.paymentTransactionId||"TXN-DIRECT-VAL"}</strong>
          </span>
        </div>
        <div style="text-align: right;">
          <span style="color: #fbbf24; font-weight: 800; font-size: var(--font-size-base);">
            ${(t.priceCfa||7e3).toLocaleString("fr-FR")} FCFA
          </span>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-4); font-size: var(--font-size-sm);">
        <div>
          <span style="color: var(--color-text-muted); display: block;">Passager :</span>
          <strong style="color: #ffffff;">${t.passengerName}</strong>
        </div>
        <div>
          <span style="color: var(--color-text-muted); display: block;">Téléphone débité :</span>
          <strong style="color: #ffffff;">${t.passengerPhone}</strong>
        </div>
        <div>
          <span style="color: var(--color-text-muted); display: block;">Compagnie :</span>
          <strong style="color: #ffffff;">${t.company}</strong>
        </div>
        <div>
          <span style="color: var(--color-text-muted); display: block;">Statut embarquement :</span>
          <strong style="color: #34d399;">VALIDE / EMBARQUEMENT AUTORISÉ</strong>
        </div>
      </div>

      <div class="station-direction-box" style="margin: var(--spacing-2) 0;">
        <strong style="color: #93c5fd; display: block; margin-bottom: var(--spacing-1);">
          📍 Point d'embarquement : ${t.stationName}
        </strong>
        <p style="margin-bottom: var(--spacing-2); font-size: var(--font-size-xs); color: #ffffff;">
          ${t.stationAddress}
        </p>
        <p style="margin-bottom: 0; font-size: var(--font-size-xs); color: #cbd5e1;">
          <em>${t.directions}</em>
        </p>
      </div>

      <div style="display: flex; gap: var(--spacing-4); margin-top: var(--spacing-2);">
        <button type="button" class="btn-card-white" id="btn-print-ticket" style="flex: 1;">
          <span>Imprimer mon billet</span>
        </button>
        <a href="#/history" class="btn-primary-blue" style="flex: 1; text-align: center;">
          <span>Mes Billets (Historique)</span>
        </a>
      </div>
    </div>
  `;const o=s.querySelector("#btn-print-ticket");return o&&o.addEventListener("click",()=>{window.print()}),e.appendChild(s),e}function I(){const e=document.createElement("div");e.className="main-content";const t=JSON.parse(localStorage.getItem("user_tickets_history")||"[]"),a=b({label:"Retour à l'espace réservation",onClick:()=>{window.location.hash="#/app"}});e.appendChild(a);const s=document.createElement("div");if(s.style.margin="var(--spacing-4) 0 var(--spacing-6) 0",s.innerHTML=`
    <h1>Mes Billets & Historique des Voyages</h1>
    <p>Retrouvez l'ensemble de vos réservations, vérifiez l'état de vos départs et réimprimez vos tickets.</p>
  `,e.appendChild(s),t.length===0){const r=document.createElement("div");return r.className="card-blue",r.style.maxWidth="600px",r.style.textAlign="center",r.style.padding="var(--spacing-8)",r.innerHTML=`
      <div style="font-size: 3rem; margin-bottom: var(--spacing-4);">🎟️</div>
      <h2 style="font-size: var(--font-size-2xl); margin-bottom: var(--spacing-2);">Aucun voyage enregistré</h2>
      <p>Vous n'avez pas encore réservé de trajet sur la plateforme.</p>
      <a href="#/app" class="btn-card-white" style="margin-top: var(--spacing-4);">
        Réserver mon premier départ
      </a>
    `,e.appendChild(r),e}const o=document.createElement("div");return o.className="history-list",t.forEach(r=>{const n=document.createElement("div");n.className="card-blue history-item-card",n.innerHTML=`
      <div>
        <div style="display: flex; align-items: center; gap: var(--spacing-3); margin-bottom: var(--spacing-2);">
          <span class="history-badge-status status-paid">✓ Payé (${r.paymentMethod||"Mobile Money"})</span>
          <span style="font-size: var(--font-size-xs); color: var(--color-text-muted);">Réf : ${r.bookingRef}</span>
        </div>
        <h3 style="font-size: var(--font-size-xl); color: #60a5fa; margin-bottom: var(--spacing-1);">
          ${r.departureCity} ➔ ${r.arrivalCity}
        </h3>
        <p style="font-size: var(--font-size-sm); margin-bottom: 0; color: var(--color-text-secondary);">
          📅 Départ : <strong>${r.departureTime}</strong> (${r.departureRank}) • Gare : ${r.stationName}
        </p>
      </div>

      <div style="display: flex; align-items: center; gap: var(--spacing-4);">
        <span style="font-size: var(--font-size-lg); font-weight: 700; color: #fbbf24;">
          ${(r.priceCfa||7e3).toLocaleString("fr-FR")} FCFA
        </span>
        <button type="button" class="btn-card-white" data-ticket-ref="${r.bookingRef}">
          <span>Voir le billet</span>
        </button>
      </div>
    `;const l=n.querySelector(`[data-ticket-ref="${r.bookingRef}"]`);l&&l.addEventListener("click",()=>{sessionStorage.setItem("current_ticket",JSON.stringify(r)),window.location.hash="#/confirmation"}),o.appendChild(n)}),e.appendChild(o),e}function O(){const e=document.createElement("div");e.className="main-content";const t=b({label:"Retour à l'espace voyageur",onClick:()=>{window.location.hash="#/app"}});e.appendChild(t);const a=document.createElement("div");a.style.margin="var(--spacing-4) 0 var(--spacing-6) 0",a.style.display="flex",a.style.justifyContent="space-between",a.style.alignItems="center",a.style.flexWrap="wrap",a.style.gap="var(--spacing-4)",a.innerHTML=`
    <div>
      <h1 style="margin-bottom: var(--spacing-1);">Tableau de Bord Administrateur</h1>
      <p style="margin-bottom: 0;">Supervision en direct des départs, des réservations et des gares.</p>
    </div>
    <a href="#/admin/departures" class="btn-primary-blue">
      <span>+ Programmer un départ</span>
    </a>
  `,e.appendChild(a);const s=document.createElement("div");s.className="admin-kpi-grid",s.innerHTML=`
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
  `,e.appendChild(s);const o=document.createElement("div");return o.className="card-blue",o.innerHTML=`
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
  `,e.appendChild(o),e}function D(){const e=document.createElement("div");e.className="main-content";const t=b({label:"Retour au tableau de bord",onClick:()=>{window.location.hash="#/admin"}});e.appendChild(t);const a=document.createElement("div");a.className="card-blue auth-card",a.style.maxWidth="680px",a.style.margin="var(--spacing-6) auto",a.innerHTML=`
    <div class="auth-header">
      <h1 class="auth-title">Programmer un Nouveau Départ</h1>
      <p class="auth-subtitle">Configurez un horaire, une gare d'embarquement et la capacité du car.</p>
    </div>

    <form id="admin-departure-form" class="auth-form">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-4);">
        <div class="form-group">
          <label class="form-label" for="adm-from">Ville de départ</label>
          <select id="adm-from" class="form-select" required>
            ${y.map(o=>`<option value="${o}">${o}</option>`).join("")}
          </select>
        </div>

        <div class="form-group">
          <label class="form-label" for="adm-to">Ville d'arrivée</label>
          <select id="adm-to" class="form-select" required>
            ${y.map((o,r)=>`<option value="${o}" ${r===1?"selected":""}>${o}</option>`).join("")}
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
  `;const s=a.querySelector("#admin-departure-form");return s.addEventListener("submit",o=>{o.preventDefault();const r=s.querySelector("#btn-save-departure");r.disabled=!0,r.innerHTML="<span>Publication en cours...</span>",setTimeout(()=>{window.location.hash="#/admin"},600)}),e.appendChild(a),e}const x=document.getElementById("app"),N={"/":$,"/register":T,"/login":A,"/app":q,"/payment":R,"/confirmation":B,"/history":I,"/admin":O,"/admin/departures":D};function z(){if(!x)return;const e=window.location.hash.slice(1)||"/",t=e.startsWith("/")?e:`/${e}`,a=N[t]||N["/"];x.innerHTML="";const s=a();x.appendChild(s),window.scrollTo({top:0,behavior:"smooth"})}document.addEventListener("DOMContentLoaded",()=>{E(),window.addEventListener("hashchange",z),z()});
