
(function(){
  // Simple particle bg if canvas exists
  function initParticles(){
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = 260;
    let particles = [];
    const colors = ['rgba(249,115,22,0.9)','rgba(249,115,22,0.3)','rgba(148,163,253,0.16)'];
    const COUNT = 80;
    function rand(a,b){ return Math.random()*(b-a)+a; }
    function reset(p){
      p.x = Math.random()*w;
      p.y = Math.random()*h;
      p.vx = rand(-0.2,0.2);
      p.vy = rand(0.15,0.5);
      p.r = rand(0.4,2.2);
      p.c = colors[Math.floor(Math.random()*colors.length)];
    }
    for(let i=0;i<COUNT;i++){
      const p = {};
      reset(p);
      p.y = Math.random()*h;
      particles.push(p);
    }
    function draw(){
      ctx.clearRect(0,0,w,h);
      for(const p of particles){
        p.x += p.vx;
        p.y += p.vy;
        if(p.y > h+10 || p.x < -10 || p.x > w+10) reset(p);
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle = p.c;
        ctx.fill();
      }
      requestAnimationFrame(draw);
    }
    window.addEventListener('resize', ()=>{
      w = canvas.width = window.innerWidth;
      h = canvas.height = 260;
    });
    draw();
  }

  // I18N map
  const I18N = {
    ru: {
      nav_home: 'Главная',
      nav_catalog: 'Каталог',
      nav_about: 'О нас',
      nav_support: 'Поддержка',
      nav_settings: 'Настройки',
      nav_admin: 'Админ',
      hero_kicker: 'Каталог продвинутых AI-агентов',
      hero_title: 'AIAGENTHUB — единая точка входа в AI-агенты для бизнеса и создателей',
      hero_subtitle: 'Находите, тестируйте и подключайте проверенных AI-ассистентов для саппорта, продаж, аналитики, контента и автоматизации без сложной интеграции.',
      hero_cta_primary: 'Смотреть каталог',
      hero_cta_secondary: 'Добавить своего агента',
      hero_meta_agents: 'агентов в демо-линией',
      hero_meta_verify: 'ручная модерация и проверка качества',
      hero_meta_connect: 'подключение в пару кликов',
      preview_title: 'Популярные направления',
      preview_subtitle: 'Выборка демо-агентов, показывающая, как может выглядеть живой каталог.',
      preview_more: 'Перейти в каталог',
      foot_tag: 'каталог AI-агентов для бизнеса и создателей',
      catalog_title: 'Каталог AI-агентов (демо)',
      catalog_subtitle: 'Фильтруйте по направлению и use-case, чтобы оценить формат будущего каталога.',
      filter_search: 'Поиск по названию или задаче',
      filter_all: 'Все категории',
      filter_support: 'Поддержка',
      filter_sales: 'Продажи',
      filter_marketing: 'Маркетинг & контент',
      filter_dev: 'Dev & Ops',
      filter_other: 'Другое',
      btn_details: 'Подробнее',
      btn_connect: 'Подключить',
      about_title: 'О платформе AIAGENTHUB',
      about_p1: 'AIAGENTHUB задуман как аккуратный, прозрачный каталог AI-агентов и no-code решений, упрощающий выбор и подключение ассистентов под конкретные задачи.',
      about_p2: 'Наша цель — соединить пользователей и создателей: обеспечить витрину для студий и разработчиков, а бизнесу — быстрый доступ к проверенным решениям без бесконечного поиска в Telegram и твиттере.',
      about_p3: 'На следующих этапах планируется ввести верификацию, рейтинги, отзывы, публичные роадмапы агентов и API для интеграции каталога на другие сайты.',
      about_cards_title: 'Кому полезен AIAGENTHUB',
      about_item_1: 'Бизнесу и стартапам — быстрый обзор готовых AI-агентов под саппорт, продажи, аналитика, контент.',
      about_item_2: 'AI-студиям и соло-разработчикам — витрина для агентов, прозрачные условия и заявки от клиентов.',
      about_item_3: 'Создателям контента — подбор ассистентов для написания текстов, монтажа, ресерча.',
      support_title: 'Поддержка и обратная связь',
      support_p1: 'Если у вас есть вопросы по интеграции, партнёрству или вы хотите добавить своего агента — напишите нам через форму ниже.',
      support_f_name: 'Ваше имя',
      support_f_email: 'Email',
      support_f_topic: 'Тема',
      support_f_message: 'Сообщение',
      support_f_send: 'Отправить',
      support_success: 'Спасибо! Мы получили ваше сообщение.',
      settings_title: 'Настройки аккаунта (демо)',
      settings_p1: 'Здесь будет управление профилем, языком, валютой, уведомлениями и интеграциями.',
      settings_lang_label: 'Язык интерфейса',
      settings_curr_label: 'Базовая валюта',
      settings_notifications: 'Уведомления',
      settings_notify_desc: 'Получать апдейты о новых агентах и важных изменениях.',
      settings_save: 'Сохранить настройки',
      admin_title: 'Админ-панель (демо)',
      admin_p1: 'Здесь отображаются заявки на добавление агентов, модерация витрины и метрики.',
      faq_title: 'FAQ (коротко)',
      faq_q1: 'Как добавить своего агента?',
      faq_a1: 'Заполнить форму, указать стек, цену, кейсы. Мы проверим и вернёмся к вам.',
      faq_q2: 'Будет ли монетизация через платформу?',
      faq_a2: 'Да, в планах встроенные подписки и ревеню-шеринг.',
      faq_q3: 'Когда запуск?',
      faq_a3: 'Сейчас доступен прототип интерфейса, подбираем партнёров для первой версии.'
    },
    en: {
      nav_home: 'Home',
      nav_catalog: 'Catalog',
      nav_about: 'About',
      nav_support: 'Support',
      nav_settings: 'Settings',
      nav_admin: 'Admin',
      hero_kicker: 'Curated AI agent directory',
      hero_title: 'AIAGENTHUB — one entry point to AI agents for teams & creators',
      hero_subtitle: 'Discover, test and connect vetted AI agents for support, sales, analytics, content and automation with minimal friction.',
      hero_cta_primary: 'Browse catalog',
      hero_cta_secondary: 'List your agent',
      hero_meta_agents: 'demo agents showcased',
      hero_meta_verify: 'manual review & quality checks',
      hero_meta_connect: 'connect in a few clicks',
      preview_title: 'Popular directions',
      preview_subtitle: 'A small demo set to illustrate how the live catalog may look.',
      preview_more: 'Open catalog',
      foot_tag: 'AI agent hub for business & creators',
      catalog_title: 'AI Agents Catalog (demo)',
      catalog_subtitle: 'Filter by category and use-case to explore the concept.',
      filter_search: 'Search by name or use-case',
      filter_all: 'All categories',
      filter_support: 'Support',
      filter_sales: 'Sales',
      filter_marketing: 'Marketing & content',
      filter_dev: 'Dev & Ops',
      filter_other: 'Other',
      btn_details: 'Details',
      btn_connect: 'Connect',
      about_title: 'About AIAGENTHUB',
      about_p1: 'AIAGENTHUB is designed as a clean and transparent directory of AI agents and no-code tools.',
      about_p2: 'We connect users and builders: a showcase for studios and indie devs, and a quick entry point for businesses.',
      about_p3: 'Next steps: verification, ratings, reviews, public roadmaps and an API to embed the catalog elsewhere.',
      about_cards_title: 'Who benefits',
      about_item_1: 'Teams & startups — quick overview of agents for support, sales, analytics, content.',
      about_item_2: 'AI studios & indie builders — a curated storefront with clear rules.',
      about_item_3: 'Creators — assistants for research, scripting, editing and distribution.',
      support_title: 'Support & contact',
      support_p1: 'Questions, partnership, listing your agent — ping us via the form below.',
      support_f_name: 'Your name',
      support_f_email: 'Email',
      support_f_topic: 'Subject',
      support_f_message: 'Message',
      support_f_send: 'Send',
      support_success: 'Thanks! Your message has been sent.',
      settings_title: 'Settings (demo)',
      settings_p1: 'Soon: profile, localization, currency, notifications and integrations.',
      settings_lang_label: 'Interface language',
      settings_curr_label: 'Base currency',
      settings_notifications: 'Notifications',
      settings_notify_desc: 'Get updates on new agents & important changes.',
      settings_save: 'Save settings',
      admin_title: 'Admin panel (demo)',
      admin_p1: 'Incoming submissions, moderation and metrics overview.',
      faq_title: 'FAQ',
      faq_q1: 'How to list my agent?',
      faq_a1: 'Submit details, stack, pricing and use-cases. We review and respond.',
      faq_q2: 'Will you support monetization?',
      faq_a2: 'Yes, built-in subscriptions and revenue sharing are planned.',
      faq_q3: 'When is the launch?',
      faq_a3: 'This is a UI prototype; we are collecting partners for v1.'
    }
  };

  // demo agents
  const AGENTS = [
    {
      id:'nova-support-ai',
      name:'Nova Support AI',
      label:'Support · SaaS',
      category:'support',
      desc_ru:'AI-саппорт для SaaS: автоответы, triage тикетов, база знаний.',
      desc_en:'AI support for SaaS: auto-replies, ticket triage, knowledge base.',
      tags:['Support','SaaS','Helpdesk'],
      price:'from $49/mo'
    },
    {
      id:'salespulse-ai',
      name:'SalesPulse AI',
      label:'Sales · Outreach',
      category:'sales',
      desc_ru:'Скоринг лидов, персонализированные письма и follow-up цепочки.',
      desc_en:'Lead scoring, personalized outreach and follow-up sequences.',
      tags:['Sales','CRM','Email'],
      price:'from $59/mo'
    },
    {
      id:'content-aura',
      name:'Content Aura',
      label:'Content · Long-form',
      category:'marketing',
      desc_ru:'Генерация блогов, рассылок и сценариев под голос бренда.',
      desc_en:'Long-form blogs, newsletters & scripts in your brand voice.',
      tags:['Content','Blog','Newsletter'],
      price:'from $39/mo'
    },
    {
      id:'visionflow-ux',
      name:'VisionFlow UX Reviewer',
      label:'UX · Vision',
      category:'other',
      desc_ru:'Анализ интерфейсов по скриншотам с конкретными UX-советами.',
      desc_en:'UI/UX review from screenshots with actionable suggestions.',
      tags:['Design','UX','Vision'],
      price:'beta'
    },
    {
      id:'opsmind-automator',
      name:'OpsMind Automator',
      label:'Ops · Internal',
      category:'dev',
      desc_ru:'Автоматизация внутренних процессов в Notion, Slack, Jira.',
      desc_en:'Automates Notion, Slack & Jira workflows.',
      tags:['Automation','Ops','Notion'],
      price:'from $69/mo'
    },
    {
      id:'brandvoice-guardian',
      name:'BrandVoice Guardian',
      label:'Brand · Tone',
      category:'marketing',
      desc_ru:'Контроль тона и стиля бренда во всех текстах.',
      desc_en:'Brand tone guardian for all your copy.',
      tags:['Brand','Quality'],
      price:'from $29/mo'
    }
  ];

  function getLang(){
    return localStorage.getItem('ai_lang') || 'ru';
  }
  function applyLang(lang){
    localStorage.setItem('ai_lang', lang);
    const dict = I18N[lang] || I18N.ru;
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });
    // placeholders
    const search = document.getElementById('search');
    if (search) search.placeholder = dict.filter_search;
    const filterAll = document.querySelector('[data-filter-label="all"]');
    if (filterAll) filterAll.textContent = dict.filter_all;
    const filterSupport = document.querySelector('[data-filter-label="support"]');
    if (filterSupport) filterSupport.textContent = dict.filter_support;
    const filterSales = document.querySelector('[data-filter-label="sales"]');
    if (filterSales) filterSales.textContent = dict.filter_sales;
    const filterMarketing = document.querySelector('[data-filter-label="marketing"]');
    if (filterMarketing) filterMarketing.textContent = dict.filter_marketing;
    const filterDev = document.querySelector('[data-filter-label="dev"]');
    if (filterDev) filterDev.textContent = dict.filter_dev;
    const filterOther = document.querySelector('[data-filter-label="other"]');
    if (filterOther) filterOther.textContent = dict.filter_other;
    const langBtn = document.getElementById('langBtn');
    if (langBtn) langBtn.textContent = lang === 'ru' ? 'EN' : 'RU';

    // Rerender agents with proper language
    renderAgents('cards-preview', AGENTS.slice(0,3));
    renderAgents('cards', filterAgents(getCurrentFilter(), getCurrentSearch()));
  }

  function setActiveNav(){
    const path = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav a').forEach(a=>{
      const href = a.getAttribute('href');
      if ((path === '' || path === 'index.html') && href === 'index.html') {
        a.classList.add('active');
      } else if (href === path) {
        a.classList.add('active');
      } else {
        a.classList.remove('active');
      }
    });
  }

  function toggleMobileNav(){
    document.querySelectorAll('.nav').forEach(n=> n.classList.toggle('open'));
  }

  // Agents rendering
  function buildAgentCard(agent, lang){
    const desc = lang === 'en' ? agent.desc_en : agent.desc_ru;
    return `
      <article class="agent-card fade-in">
        <div class="agent-label">${agent.label}</div>
        <div class="agent-name">${agent.name}</div>
        <div class="agent-desc">${desc}</div>
        <div class="agent-tags">
          ${agent.tags.map(t=>`<span class="agent-tag">${t}</span>`).join('')}
          <span class="agent-tag">${agent.price}</span>
        </div>
        <div class="agent-actions">
          <button class="btn-xs" data-i18n="btn_details"></button>
          <button class="btn-xs primary" data-i18n="btn_connect"></button>
        </div>
      </article>
    `;
  }

  function renderAgents(containerId, list){
    const wrap = document.getElementById(containerId);
    if (!wrap) return;
    const lang = getLang();
    wrap.innerHTML = list.map(a=>buildAgentCard(a, lang)).join('');
    applyI18nFor(wrap);
    observeFadeIns();
  }

  // Filtering helpers
  let currentFilter = 'all';
  let currentSearch = '';
  function getCurrentFilter(){ return currentFilter; }
  function getCurrentSearch(){ return currentSearch; }
  function filterAgents(cat, query){
    return AGENTS.filter(a=>{
      if (cat !== 'all' && a.category !== cat) return false;
      if (query){
        const q = query.toLowerCase();
        const hay = (a.name + ' ' + a.desc_ru + ' ' + a.desc_en + ' ' + a.tags.join(' ')).toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }

  function applyI18nFor(root){
    const lang = getLang();
    const dict = I18N[lang] || I18N.ru;
    root.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });
  }

  // Fade-in observer
  let fadeObserver;
  function observeFadeIns(){
    if (fadeObserver) {
      document.querySelectorAll('.fade-in').forEach(el=> fadeObserver.observe(el));
      return;
    }
    fadeObserver = new IntersectionObserver((entries)=>{
      entries.forEach(en=>{
        if (en.isIntersecting) {
          en.target.classList.add('visible');
          fadeObserver.unobserve(en.target);
        }
      });
    }, { threshold: 0.14 });
    document.querySelectorAll('.fade-in').forEach(el=> fadeObserver.observe(el));
  }

  document.addEventListener('DOMContentLoaded', function(){
    // hide preloader
    setTimeout(()=>{
      const pl = document.getElementById('preloader');
      if (pl) pl.style.opacity = '0';
      if (pl) pl.style.pointerEvents = 'none';
      if (pl) setTimeout(()=> pl.remove(), 260);
    }, 900);

    initParticles();
    setActiveNav();

    // hamburger
    document.querySelectorAll('.hamburger').forEach(hb=>{
      hb.addEventListener('click', toggleMobileNav);
    });

    // Language toggle
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
      langBtn.addEventListener('click', ()=>{
        const current = getLang();
        const next = current === 'ru' ? 'en' : 'ru';
        applyLang(next);
      });
    }

    // Initialize lang from storage
    applyLang(getLang());

    // catalog filters
    const searchInput = document.getElementById('search');
    if (searchInput) {
      searchInput.addEventListener('input', (e)=>{
        currentSearch = e.target.value || '';
        renderAgents('cards', filterAgents(currentFilter, currentSearch));
      });
    }
    document.querySelectorAll('[data-filter]').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const c = btn.getAttribute('data-filter');
        currentFilter = c;
        document.querySelectorAll('[data-filter]').forEach(b=> b.classList.remove('active'));
        btn.classList.add('active');
        renderAgents('cards', filterAgents(currentFilter, currentSearch));
      });
    });

    // render agents where needed
    if (document.getElementById('cards-preview')) {
      renderAgents('cards-preview', AGENTS.slice(0,3));
    }
    if (document.getElementById('cards')) {
      renderAgents('cards', AGENTS);
    }

    // Support form
    const supportForm = document.getElementById('supportForm');
    if (supportForm){
      supportForm.addEventListener('submit', function(e){
        e.preventDefault();
        const lang = getLang();
        alert((I18N[lang] || I18N.ru).support_success);
        supportForm.reset();
      });
    }

    // Settings form
    const settingsForm = document.getElementById('settingsForm');
    if (settingsForm){
      settingsForm.addEventListener('submit', function(e){
        e.preventDefault();
        const langSelect = document.getElementById('settingsLang');
        const currSelect = document.getElementById('currencySelect');
        if (langSelect) {
          applyLang(langSelect.value || 'ru');
        }
        if (currSelect) {
          localStorage.setItem('ai_curr', currSelect.value || 'USDT');
        }
        alert('Saved locally (demo).');
      });
      const langSelect = document.getElementById('settingsLang');
      if (langSelect) langSelect.value = getLang();
      const currSelect = document.getElementById('currencySelect');
      if (currSelect) currSelect.value = localStorage.getItem('ai_curr') || 'USDT';
    }

    observeFadeIns();
  });
})();
