/**
 * @file interactiveEffects.js
 * @description Moteur d'effets interactifs : Synthèse audio Web Audio API, particules confettis, ripple, 3D tilt et compteurs.
 */

// ==========================================================================
// 1. MOTEUR AUDIO SYNTHÉTISÉ (WEB AUDIO API SANS DÉPENDANCES)
// ==========================================================================

let audioCtx = null;
let soundEnabled = localStorage.getItem('app_sound_enabled') !== 'false';

function getAudioContext() {
  if (!audioCtx && typeof window !== 'undefined') {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export const SoundEngine = {
  isEnabled() {
    return soundEnabled;
  },

  toggleSound() {
    soundEnabled = !soundEnabled;
    localStorage.setItem('app_sound_enabled', soundEnabled ? 'true' : 'false');
    if (soundEnabled) {
      this.play('click');
    }
    return soundEnabled;
  },

  play(type = 'click') {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;

      if (type === 'click') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(300, now + 0.05);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.05);
      } else if (type === 'seat') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(520, now);
        osc.frequency.exponentialRampToValueAtTime(780, now + 0.08);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === 'success') {
        const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const noteTime = now + idx * 0.09;
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, noteTime);
          gain.gain.setValueAtTime(0.25, noteTime);
          gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.35);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(noteTime);
          osc.stop(noteTime + 0.35);
        });
      } else if (type === 'horn') {
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();
        osc1.type = 'sawtooth';
        osc2.type = 'sawtooth';
        osc1.frequency.setValueAtTime(370, now);
        osc2.frequency.setValueAtTime(440, now);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(ctx.destination);
        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 0.25);
        osc2.stop(now + 0.25);
      } else if (type === 'bubble') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.exponentialRampToValueAtTime(900, now + 0.1);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.1);
      }
    } catch {
      // Ignorer si audio non autorisé
    }
  }
};

// ==========================================================================
// 2. MOTEUR DE PARTICULES CONFETTIS (CANVAS HAUTE PERFORMANCE)
// ==========================================================================

export function triggerConfetti() {
  SoundEngine.play('success');

  const canvas = document.createElement('canvas');
  canvas.className = 'confetti-canvas-overlay';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const colors = ['#2563eb', '#3b82f6', '#10b981', '#fbbf24', '#f59e0b', '#ec4899', '#ffffff'];
  const particles = [];
  const particleCount = 140;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: width * 0.5 + (Math.random() - 0.5) * 200,
      y: height * 0.4 + (Math.random() - 0.5) * 100,
      vx: (Math.random() - 0.5) * 18,
      vy: (Math.random() - 0.8) * 20 - 4,
      size: Math.random() * 8 + 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 12,
      opacity: 1,
      shape: Math.random() > 0.4 ? 'rect' : 'circle'
    });
  }

  let animationFrameId;
  const startTime = Date.now();

  function render() {
    const elapsed = Date.now() - startTime;
    ctx.clearRect(0, 0, width, height);

    let aliveCount = 0;

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.45; // Gravité
      p.vx *= 0.98; // Frottement
      p.rotation += p.vRot;

      if (elapsed > 1800) {
        p.opacity -= 0.02;
      }

      if (p.opacity > 0 && p.y < height + 50) {
        aliveCount++;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillStyle = p.color;

        if (p.shape === 'rect') {
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }
    });

    if (aliveCount > 0 && elapsed < 4000) {
      animationFrameId = requestAnimationFrame(render);
    } else {
      cancelAnimationFrame(animationFrameId);
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    }
  }

  render();
}

// ==========================================================================
// 3. EFFET RIPPLE ET MICRO-INTERACTIONS CLIC
// ==========================================================================

export function initInteractiveRipples(root = document) {
  const buttons = root.querySelectorAll('.btn-primary-blue, .btn-card-white, .btn-back-3d, .btn-nav-link');

  buttons.forEach((btn) => {
    if (btn.dataset.hasRipple) return;
    btn.dataset.hasRipple = 'true';
    btn.classList.add('btn-interactive');

    btn.addEventListener('click', (e) => {
      SoundEngine.play('click');

      const rect = btn.getBoundingClientRect();
      const circle = document.createElement('span');
      const diameter = Math.max(rect.width, rect.height);
      const radius = diameter / 2;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - rect.left - radius}px`;
      circle.style.top = `${e.clientY - rect.top - radius}px`;
      circle.classList.add('ripple-circle');

      const existingRipple = btn.querySelector('.ripple-circle');
      if (existingRipple) {
        existingRipple.remove();
      }

      btn.appendChild(circle);
      setTimeout(() => {
        circle.remove();
      }, 600);
    });
  });
}

// ==========================================================================
// 4. EFFET 3D PARALLAX TILT SUR LES CARTES
// ==========================================================================

export function init3DTiltCards(root = document) {
  const cards = root.querySelectorAll('.card-blue, .departure-card, .feature-card, .profile-hero-card');

  cards.forEach((card) => {
    // Ne jamais appliquer de tilt 3D sur le service courrier ou sur les conteneurs de formulaires
    if (
      card.closest('.courier-container') ||
      card.closest('.no-tilt') ||
      card.classList.contains('no-tilt') ||
      card.classList.contains('courier-receipt-card') ||
      document.body.classList.contains('page-courier')
    ) {
      card.style.transform = 'none';
      return;
    }

    if (card.dataset.hasTilt) return;
    card.dataset.hasTilt = 'true';

    card.addEventListener('mousemove', (e) => {
      if (card.closest('.courier-container') || document.body.classList.contains('page-courier')) {
        card.style.transform = 'none';
        return;
      }

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-2px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}

// ==========================================================================
// 5. ANIMATEUR DE COMPTEURS NUMÉRIQUES
// ==========================================================================

export function animateNumbers(root = document) {
  const elements = root.querySelectorAll('[data-counter-target]');

  elements.forEach((el) => {
    const target = parseInt(el.getAttribute('data-counter-target'), 10);
    if (isNaN(target)) return;

    let current = 0;
    const duration = 1200;
    const stepTime = 25;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.textContent = target.toLocaleString('fr-FR');
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current).toLocaleString('fr-FR');
      }
    }, stepTime);
  });
}
