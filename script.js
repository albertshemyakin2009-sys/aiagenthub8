// Core mock data for agents
const AGENTS = [
  {
    id: "nova-support",
    name: "Nova Support AI",
    short: "AI-саппорт для SaaS: ответы, triage тикетов, база знаний.",
    category: "Support",
    tags: ["Helpdesk", "SaaS", "24/7"],
    featured: true
  },
  {
    id: "salespulse",
    name: "SalesPulse AI",
    short: "Скоринг лидов, авто-ответы в почте и CRM-инсайты.",
    category: "Sales",
    tags: ["Outbound", "CRM", "Email"],
    featured: true
  },
  {
    id: "content-aura",
    name: "Content Aura",
    short: "Лонгриды, блоги, рассылки, соцсети под голос бренда.",
    category: "Marketing",
    tags: ["Content", "SEO", "Brand"],
    featured: true
  },
  {
    id: "visionflow",
    name: "VisionFlow UX Reviewer",
    short: "Анализ интерфейсов по скриншотам и гипотезы по улучшению.",
    category: "DevTools",
    tags: ["UX", "Design Review"],
    featured: false
  },
  {
    id: "opsmind",
    name: "OpsMind Automator",
    short: "Автоматизация процессов в Notion, Slack, Jira.",
    category: "Ops",
    tags: ["Automation", "Workflows"],
    featured: true
  },
  {
    id: "brandvoice",
    name: "BrandVoice Guardian",
    short: "Контроль тона и стиля бренда при генерации текстов.",
    category: "Marketing",
    tags: ["Brand", "Policy"],
    featured: false
  },
  {
    id: "scriptforge",
    name: "ScriptForge Studio",
    short: "Генерация скриптов, кода и CI-конфигов.",
    category: "DevTools",
    tags: ["Dev", "CI/CD"],
    featured: false
  }
];

// Simple i18n dictionary
const I18N = {
  ru: {
    lang_label: "RU",
    auth_demo: "Демо-доступ",
    hero_kicker: "Маркетплейс готовых AI-агентов",
    hero_title: "Находи и подключай <span>умных AI-агентов</span> за минуты",
    hero_subtitle: "AIAGENTHUB помогает бизнесу, студиям и создателям быстро тестировать и внедрять готовых AI-ассистентов без боли с инфраструктурой.",
    hero_cta_primary: "Смотреть каталог",
    hero_cta_secondary: "Добавить своего агента",
    hero_panel_title: "Live-панель агентов",
    hero_panel_badge: "curated / verified*",
    hero_panel_stats: "40+ демо-агентов • категории: Support, Sales, Marketing, DevTools",
    hero_panel_note: "*Верификация и рейтинги — ключевой фокус развития платформы.",
    section_popular_title: "Популярные направления",
    section_popular_subtitle: "Подборка агентов, которые чаще всего тестируют SaaS-проекты, агентства и продакты.",
    nav_home: "Главная",
    nav_catalog: "Каталог",
    nav_about: "О нас",
    nav_support: "Поддержка",
    nav_settings: "Настройки",
    nav_admin: "Админ",
    footer_product: "Продукт",
    footer_catalog: "Каталог агентов",
    footer_how_it_works: "Как это работает",
    footer_company: "Компания",
    footer_about: "О платформе",
    footer_contact: "Контакты",
    footer_support: "Поддержка",
    footer_faq: "FAQ",
    footer_support_center: "Центр помощи",
    footer_tagline: "Каталог умных AI-агентов для бизнеса и создателей.",
    catalog_title: "Каталог AI-агентов",
    catalog_subtitle: "Исследуй готовых ассистентов для поддержки клиентов, продаж, маркетинга, разработки и внутренних операций.",
    filter_all: "Все категории",
    about_title: "О платформе AIAGENTHUB",
    about_subtitle: "Мы строим каталог проверенных AI-агентов, который связывает бизнес, студии и создателей с готовыми решениями — прозрачно, быстро и без лишнего шума.",
    about_mission_title: "Миссия",
    about_mission_text: "Упростить путь от идеи до рабочей AI-автоматизации. Один хаб вместо десятков разрозненных ботов и порядков.",
    about_for_whom_title: "Для кого",
    about_quality_title: "Качество и развитие",
    about_next_title: "Куда идём дальше",
    support_title: "Поддержка & заявки агентов",
    support_subtitle: "Задай вопрос по платформе или отправь карточку своего агента на модерацию. Сейчас всё работает в демо-режиме.",
    support_form_title: "Написать в поддержку",
    support_name_label: "Имя / команда",
    support_topic_label: "Тема",
    support_message_label: "Сообщение",
    support_submit: "Отправить (демо)",
    support_faq_title: "FAQ по запуску агента",
    settings_title: "Настройки аккаунта (демо)",
    settings_subtitle: "В реальном запуске здесь будут авторизация, биллинг и управление интеграциями. Сейчас — прототип базовых контролов.",
    settings_profile_title: "Профиль",
    settings_name_label: "Имя / команда",
    settings_language_title: "Язык интерфейса",
    settings_currency_title: "Валюта",
    settings_save: "Сохранить (демо)",
    settings_integrations_title: "Интеграции & уведомления",
    settings_hint: "Все переключатели работают как прототип и не отправляют реальные данные.",
    admin_title: "Админ-панель (демо)",
    admin_subtitle: "Прототип внутреннего интерфейса модерации. Показывает, как может выглядеть управление агентами и фичерингом.",
    admin_metrics_title: "Сводка за сегодня",
    admin_actions_title: "Действия модератора",
    admin_table_title: "Агенты (демо-таблица)"
  },
  en: {
    lang_label: "EN",
    auth_demo: "Demo access",
    hero_kicker: "Marketplace of AI agents",
    hero_title: "Discover and deploy <span>smart AI agents</span> in minutes",
    hero_subtitle: "AIAGENTHUB helps teams and creators test and ship AI assistants without wrestling with infrastructure.",
    hero_cta_primary: "Explore catalog",
    hero_cta_secondary: "List your agent",
    hero_panel_title: "Live agents panel",
    hero_panel_badge: "curated / verified*",
    hero_panel_stats: "40+ demo agents • Support, Sales, Marketing, DevTools",
    hero_panel_note: "*Verification & ratings are our core product focus.",
    section_popular_title: "Popular tracks",
    section_popular_subtitle: "A curated set of agents most tested by SaaS, agencies and product teams.",
    nav_home: "Home",
    nav_catalog: "Catalog",
    nav_about: "About",
    nav_support: "Support",
    nav_settings: "Settings",
    nav_admin: "Admin",
    footer_product: "Product",
    footer_catalog: "Agents catalog",
    footer_how_it_works: "How it works",
    footer_company: "Company",
    footer_about: "About",
    footer_contact: "Contacts",
    footer_support: "Support",
    footer_faq: "FAQ",
    footer_support_center: "Help center",
    footer_tagline: "A curated directory of AI agents for teams and creators.",
    catalog_title: "AI Agents Catalog",
    catalog_subtitle: "Explore ready-to-use assistants for support, sales, marketing, engineering and ops.",
    filter_all: "All categories",
    about_title: "About AIAGENTHUB",
    about_subtitle: "We are building a curated AI agents hub that connects teams and creators with real, working solutions.",
    about_mission_title: "Mission",
    about_mission_text: "Make AI automation adoption fast and practical. One hub instead of dozens of scattered bots.",
    about_for_whom_title: "Who it's for",
    about_quality_title: "Quality & roadmap",
    about_next_title: "What's next",
    support_title: "Support & agent submissions",
    support_subtitle: "Ask anything about the platform or submit your agent. All flows are demo for now.",
    support_form_title: "Contact support",
    support_name_label: "Name / team",
    support_topic_label: "Topic",
    support_message_label: "Message",
    support_submit: "Send (demo)",
    support_faq_title: "Agent launch FAQ",
    settings_title: "Settings (demo)",
    settings_subtitle: "In production this will include auth, billing and integrations. For now it's a prototype.",
    settings_profile_title: "Profile",
    settings_name_label: "Name / team",
    settings_language_title: "Interface language",
    settings_currency_title: "Currency",
    settings_save: "Save (demo)",
    settings_integrations_title: "Integrations & notifications",
    settings_hint: "All controls are demo-only and do not send any data.",
    admin_title: "Admin panel (demo)",
    admin_subtitle: "A prototype of the moderation dashboard for agents and featuring.",
    admin_metrics_title: "Today overview",
    admin_actions_title: "Moderator actions",
    admin_table_title: "Agents table (demo)"
  }
};

function getCurrentLang() {
  if (typeof localStorage === "undefined") return "ru";
  return localStorage.getItem("aiagenthub_lang") || "ru";
}

function setCurrentLang(lang) {
  try {
    localStorage.setItem("aiagenthub_lang", lang);
  } catch (e) {}
}

function applyTranslations() {
  const lang = getCurrentLang();
  const dict = I18N[lang] || I18N.ru;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = dict[key];
      } else {
        el.innerHTML = dict[key];
      }
    }
  });
  const langBtn = document.querySelector("#langBtn span");
  if (langBtn && dict.lang_label) {
    langBtn.textContent = dict.lang_label;
  }
  const languageSelect = document.getElementById("languageSelect");
  if (languageSelect) {
    languageSelect.value = lang;
  }
}

// Basic UI wiring
document.addEventListener("DOMContentLoaded", () => {
  // Burger / mobile nav
  const burger = document.getElementById("burger");
  const mobileNav = document.getElementById("mobileNav");
  if (burger && mobileNav) {
    burger.addEventListener("click", () => {
      const visible = mobileNav.style.display === "flex";
      mobileNav.style.display = visible ? "none" : "flex";
    });
  }

  // Language toggle
  const langBtn = document.getElementById("langBtn");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      const next = getCurrentLang() === "ru" ? "en" : "ru";
      setCurrentLang(next);
      applyTranslations();
    });
  }

  // Settings page language select
  const languageSelect = document.getElementById("languageSelect");
  if (languageSelect) {
    languageSelect.addEventListener("change", (e) => {
      setCurrentLang(e.target.value);
      applyTranslations();
    });
  }

  // Settings save (demo)
  const settingsBtn = document.getElementById("settingsSaveBtn");
  if (settingsBtn) {
    settingsBtn.addEventListener("click", () => {
      alert("Настройки сохранены (демо).");
    });
  }

  // Support form submit (demo)
  const supportForm = document.getElementById("supportForm");
  if (supportForm) {
    supportForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Заявка отправлена (демо). В проде здесь будет интеграция с вашим inbox / CRM.");
      supportForm.reset();
    });
  }

  // Render hero agents
  const heroAgentsContainer = document.getElementById("heroAgents");
  if (heroAgentsContainer) {
    const featured = AGENTS.filter((a) => a.featured).slice(0, 4);
    heroAgentsContainer.innerHTML = featured
      .map(
        (a) => `
      <div class="hero-agent-card">
        <strong>${a.name}</strong>
        <div class="agent-desc">${a.short}</div>
        <div class="hero-agent-meta">
          <span>${a.category}</span>
          <div style="font-size:8px;color:#22c55e;">↑ live</div>
        </div>
      </div>`
      )
      .join("");
  }

  // Render featured agents on index
  const featuredGrid = document.getElementById("featuredAgents");
  if (featuredGrid) {
    const featured = AGENTS.filter((a) => a.featured);
    featuredGrid.innerHTML = featured.map(agentCardHTML).join("");
  }

  // Catalog page rendering
  const catalogGrid = document.getElementById("catalogAgents");
  const searchInput = document.getElementById("searchInput");
  const filterChips = document.querySelectorAll("#filterChips .filter-chip");

  function renderCatalog() {
    if (!catalogGrid) return;
    const query = (searchInput?.value || "").toLowerCase();
    const activeChip = document.querySelector("#filterChips .filter-chip.active");
    const category = activeChip ? activeChip.getAttribute("data-category") : "all";

    const filtered = AGENTS.filter((a) => {
      const matchesCategory = category === "all" || a.category === category;
      const text = (a.name + " " + a.short + " " + a.tags.join(" ")).toLowerCase();
      const matchesQuery = !query || text.includes(query);
      return matchesCategory && matchesQuery;
    });

    catalogGrid.innerHTML = filtered.map(agentCardHTML).join("") ||
      `<div style="font-size:11px;color:#6b7280;">Ничего не найдено под ваш запрос. Попробуйте изменить фильтры.</div>`;
  }

  if (filterChips.length && catalogGrid) {
    filterChips.forEach((chip) => {
      chip.addEventListener("click", () => {
        filterChips.forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        renderCatalog();
      });
    });
  }

  if (searchInput && catalogGrid) {
    searchInput.addEventListener("input", renderCatalog);
  }

  if (catalogGrid) {
    renderCatalog();
  }

  // Admin table rendering
  const adminTableBody = document.querySelector("#adminAgentsTable tbody");
  if (adminTableBody) {
    adminTableBody.innerHTML = AGENTS.map((a, index) => {
      const status =
        index % 3 === 0
          ? '<span class="status-pill status-live"><span class="dot"></span>live</span>'
          : index % 3 === 1
          ? '<span class="status-pill status-review"><span class="dot"></span>review</span>'
          : '<span class="status-pill status-draft"><span class="dot"></span>draft</span>';
      return `
        <tr>
          <td>${a.name}</td>
          <td>${a.category}</td>
          <td>${status}</td>
          <td>
            <button style="padding:2px 6px;font-size:8px;border-radius:8px;border:1px solid rgba(75,85,99,0.9);background:rgba(5,10,25,1);color:#9ca3af;cursor:pointer;">
              open
            </button>
          </td>
        </tr>
      `;
    }).join("");
  }

  // Scroll fade-in
  const fadeEls = document.querySelectorAll(".fade-in");
  if (fadeEls.length) {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    fadeEls.forEach((el) => obs.observe(el));
  }

  // Apply language at the end so dynamic content also respects dictionary
  applyTranslations();
});

// Helper to render agent card
function agentCardHTML(a) {
  return `
    <article class="agent-card">
      <div class="agent-card-header">
        <div>
          <div class="agent-name">${a.name}</div>
          <div class="agent-desc">${a.short}</div>
        </div>
        <div class="agent-category">${a.category}</div>
      </div>
      <div class="agent-tags">
        ${a.tags.map((t) => `<span class="agent-tag">${t}</span>`).join("")}
      </div>
      <div class="agent-actions">
        <button class="primary" type="button">
          <span>Подключить</span>
        </button>
        <button type="button">
          <span>Подробнее</span>
        </button>
      </div>
    </article>
  `;
}
