# AIAGENTHUB (Enhanced Static Demo)

Статический прототип маркетплейса AI-агентов.

## Стек

- Чистый HTML + CSS + JS
- Без сборщиков, без бэкенда
- Готов к деплою на GitHub Pages / Vercel

## Структура

- `index.html` — главная, hero + featured агенты
- `catalog.html` — каталог с поиском и фильтрами (mock data)
- `about.html` — о платформе
- `support.html` — поддержка и форма заявки (demo)
- `settings.html` — настройки, выбор языка/валюты (demo)
- `admin.html` — админ-панель (demo)
- `styles.css` — общий тёмный UI
- `script.js` — логика фильтрации, рендера, i18n (RU/EN)

## Запуск локально

Просто откройте `index.html` в браузере.
Для корректной работы history/nav рекомендуется любой статический сервер:

```bash
npx serve .
# или
python3 -m http.server 4173
```

## Деплой на Vercel

1. Создать репозиторий на GitHub.
2. Залить файлы из этого архива в корень.
3. В Vercel: New Project → Import → Framework: `Other`.
4. Build Command: _нет_, Output Directory: `/`.
5. Deploy.

