// Contact form endpoint (FormSubmit.co: free, no account. The first message asks you to confirm your email once).
var FORM_ENDPOINT = 'https://formsubmit.co/ajax/aonyadel1@gmail.com';

(function () {
  // ----- Icons (24x24 stroke icons, inserted into <svg data-icon="name">) -----
  var I = {
    mail: '<path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><polyline points="22,6 12,13 2,6"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    pin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    school: '<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
    facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
    code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    server: '<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
    chart: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
    award: '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>',
    folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
    sun: '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>',
    moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
    menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
    close: '<path d="M18 6L6 18M6 6l12 12"/>',
    globe: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
    message: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    refresh: '<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>',
    trend: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    check: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',
    grid: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',
    monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
    layout: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
    zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    smartphone: '<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>'
  };
  function icon(el, name) {
    el.dataset.icon = name;
    el.setAttribute('viewBox', '0 0 24 24');
    el.setAttribute('fill', 'none');
    el.setAttribute('stroke', 'currentColor');
    el.setAttribute('stroke-width', '2');
    el.setAttribute('stroke-linecap', 'round');
    el.setAttribute('stroke-linejoin', 'round');
    el.setAttribute('aria-hidden', 'true');
    el.innerHTML = I[name] || '';
  }
  document.querySelectorAll('svg[data-icon]').forEach(function (el) { icon(el, el.dataset.icon); });

  // ----- Theme (system preference on first visit, then saved choice) -----
  var root = document.documentElement;
  var themeBtn = document.getElementById('theme');
  function setTheme(t, save) {
    root.dataset.theme = t;
    if (save) { try { localStorage.setItem('theme', t); } catch (e) {} }
    icon(themeBtn.querySelector('svg'), t === 'dark' ? 'sun' : 'moon');
    themeBtn.setAttribute('aria-label', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }
  setTheme(root.dataset.theme || 'dark', false);
  themeBtn.addEventListener('click', function () {
    setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark', true);
  });

  // ----- Mobile menu -----
  var menuBtn = document.getElementById('menu');
  var nav = document.getElementById('nav');
  function toggleMenu(open) {
    nav.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', open);
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    icon(menuBtn.querySelector('svg'), open ? 'close' : 'menu');
  }
  menuBtn.addEventListener('click', function () { toggleMenu(!nav.classList.contains('open')); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') toggleMenu(false); });

  // ----- Contact form (FormSubmit; falls back to the email app when opened from a local file) -----
  var form = document.getElementById('contact-form');
  if (form) {
    var status = document.getElementById('form-status');
    var btn = form.querySelector('button[type=submit]');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = new FormData(form);
      if (location.protocol === 'file:') {
        location.href = 'mailto:aonyadel1@gmail.com?subject=' + encodeURIComponent('Portfolio message from ' + d.get('name')) +
          '&body=' + encodeURIComponent('Name: ' + d.get('name') + '\nEmail: ' + d.get('email') + '\n\n' + d.get('message'));
        status.textContent = 'جارٍ فتح تطبيق البريد. يعمل النموذج مباشرة بعد نشر الموقع.';
        return;
      }
      btn.disabled = true;
      status.textContent = 'جارٍ إرسال رسالتك...';
      fetch(FORM_ENDPOINT, { method: 'POST', body: d, headers: { Accept: 'application/json' } })
        .then(function (r) {
          return r.json().catch(function () { return {}; }).then(function (res) {
            if (!r.ok || res.success === 'false' || res.success === false) throw new Error('failed');
          });
        })
        .then(function () {
          form.reset();
          status.textContent = 'شكراً لك! تم إرسال رسالتك بنجاح، وسأرد عليك في أقرب وقت.';
        })
        .catch(function () {
          status.textContent = 'تعذّر إرسال الرسالة. من فضلك راسلني مباشرة على aonyadel1@gmail.com.';
        })
        .then(function () { btn.disabled = false; });
    });
  }

  // ----- Typewriter effect (letter by letter; also runs on phones) -----
  function typeIn(el, speed, delay) {
    if (!el) return;
    var text = el.textContent.trim(), n = 0;
    el.textContent = '';
    el.classList.add('typing');
    setTimeout(function next() {
      el.textContent = text.slice(0, ++n);
      if (n < text.length) setTimeout(next, speed);
      else setTimeout(function () { el.classList.remove('typing'); }, 3000);
    }, delay);
  }
  typeIn(document.querySelector('.profile .full'), 70, 500); // name under the photo

  // ----- Project filter -----
  var fbtns = document.querySelectorAll('.filter');
  if (fbtns.length) {
    var cards = document.querySelectorAll('.project');
    var none = document.getElementById('no-match');
    fbtns.forEach(function (b) {
      b.addEventListener('click', function () {
        var f = b.dataset.filter, shown = 0;
        fbtns.forEach(function (x) {
          x.classList.toggle('active', x === b);
          x.setAttribute('aria-pressed', x === b);
        });
        cards.forEach(function (c) {
          var ok = f === 'all' || c.dataset.category.split(' ').indexOf(f) > -1;
          c.hidden = !ok;
          if (ok) shown++;
        });
        none.hidden = shown > 0;
      });
    });
  }

  // ----- Scroll reveal -----
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en, i) {
        if (!en.isIntersecting) return;
        var el = en.target;
        el.style.transitionDelay = (i % 4) * 80 + 'ms';
        el.classList.add('in');
        io.unobserve(el);
        setTimeout(function () { el.classList.remove('reveal', 'in'); el.style.transitionDelay = ''; }, 900);
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.card,.skill,.soft-card,.project,.filters,.section>h2').forEach(function (el) {
      el.classList.add('reveal'); io.observe(el);
    });
  }

  // ----- Intro splash (first page of each visit, about 5 seconds; click to skip) -----
  if (root.classList.contains('intro')) {
    var pct = document.getElementById('pct'), bar = document.getElementById('bar');
    var sub = document.querySelector('.splash-sub'), splash = document.querySelector('.splash');
    var words = ['Business Information Systems Student', 'Front-End & Back-End', 'Full Stack Developer'];
    var cur = 0, t0 = null, DUR = 4400, done = false;
    var finish = function () {
      if (done) return;
      done = true;
      root.classList.add('intro-out');
      try { sessionStorage.setItem('intro', '1'); } catch (e) {}
      setTimeout(function () { root.classList.remove('intro', 'intro-out'); }, 1100);
    };
    requestAnimationFrame(function tick(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / DUR, 1);
      pct.textContent = Math.round(p * 100);
      bar.style.transform = 'translateX(' + (p * 100 - 100) + '%)';
      var i = p < 0.34 ? 0 : p < 0.67 ? 1 : 2;
      if (i !== cur) {
        cur = i;
        sub.textContent = words[i];
        sub.style.animation = 'none';
        void sub.offsetWidth;
        sub.style.animation = 'swapin .5s both';
      }
      if (p < 1) requestAnimationFrame(tick); else setTimeout(finish, 400);
    });
    setTimeout(finish, DUR + 2500);
    splash.addEventListener('click', finish);
  }

  // ----- Count-up numbers -----
  document.querySelectorAll('[data-count]').forEach(function (el) {
    if (!('IntersectionObserver' in window)) return;
    var end = +el.dataset.count;
    var o = new IntersectionObserver(function (en) {
      if (!en[0].isIntersecting) return;
      o.disconnect();
      var t0 = null;
      el.textContent = '0';
      requestAnimationFrame(function step(t) {
        if (!t0) t0 = t;
        var p = Math.min((t - t0) / 1200, 1);
        el.textContent = Math.round(end * p);
        if (p < 1) requestAnimationFrame(step);
      });
    });
    o.observe(el);
  });

  // ----- Scroll progress bar -----
  var pbar = document.createElement('div');
  pbar.className = 'progress';
  document.body.appendChild(pbar);
  function prog() {
    var h = document.documentElement.scrollHeight - innerHeight;
    pbar.style.transform = 'scaleX(' + (h > 0 ? Math.min(scrollY / h, 1) : 0) + ')';
  }
  addEventListener('scroll', prog, { passive: true });
  prog();

  // ----- Skill cards: light follows the pointer -----
  document.querySelectorAll('.skill').forEach(function (card) {
    card.addEventListener('pointermove', function (e) {
      var r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });
})();
