// wesiks — язык,reveal-анимации, шапка. Без зависимостей.

(function () {
  'use strict';

  var ruBtn = document.getElementById('langRu');
  var enBtn = document.getElementById('langEn');
  var translatable = document.querySelectorAll('[data-ru]');
  var html = document.documentElement;

  function applyLang(lang) {
    for (var i = 0; i < translatable.length; i++) {
      var el = translatable[i];
      var value = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-ru');
      if (value === null) continue;
      if (el.tagName === 'META') {
        el.setAttribute('content', value);
      } else {
        el.textContent = value;
      }
    }
    html.setAttribute('lang', lang);
    var isEn = lang === 'en';
    ruBtn.classList.toggle('is-active', !isEn);
    enBtn.classList.toggle('is-active', isEn);
    ruBtn.setAttribute('aria-pressed', String(!isEn));
    enBtn.setAttribute('aria-pressed', String(isEn));
    try { localStorage.setItem('lang', lang); } catch (e) { /* приватный режим */ }
  }

  ruBtn.addEventListener('click', function () { applyLang('ru'); });
  enBtn.addEventListener('click', function () { applyLang('en'); });

  var stored = null;
  try { stored = localStorage.getItem('lang'); } catch (e) { /* ignore */ }
  if (stored === 'en') applyLang('en');

  // тихие проявления при скролле (hero живёт своей анимацией в CSS)
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  // шапка: фон появляется после первого экрана прокрутки
  var header = document.getElementById('siteHeader');
  var onScroll = function () {
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
