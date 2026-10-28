const TG = 'https://t.me/Emotioncrypto1';
const X = 'https://x.com/Emotion_web3';
const imageSizes = {'fasol-year.png':[1280,942],'aureum-month.png':[997,950],'spectraview-before.png':[1175,954],'spectraview-after.png':[1231,987],'launch-zero.png':[979,893]};
const arrow = (direction = 'up') => `<svg class="arrow" viewBox="0 0 24 24" aria-hidden="true">${direction === 'up' ? '<path d="M6 18 18 6M6 6h12v12"/>' : '<path d="M4 12h15m-6-6 6 6-6 6"/>'}</svg>`;
const icon = name => `<img src="assets/${name}.svg" width="18" height="18" alt="" aria-hidden="true">`;
const brand = `<span class="brand-icon" aria-hidden="true"><i></i><i></i><i></i></span><span>Viktor <span class="slash">/</span> Emotion</span>`;
const socialIcons = {
  x:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.64 7.584H.47l8.6-9.835L0 1.154h7.594l5.243 6.932 6.064-6.933Zm-1.29 19.49h2.039L6.487 3.24H4.3l13.31 17.403Z"/></svg>',
  telegram:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21.7 3.4 18.3 20c-.2 1.2-.9 1.5-1.9.9l-5.2-3.8-2.5 2.4c-.3.3-.5.5-1 .5l.4-5.3L17.8 6c.4-.4-.1-.6-.6-.3L5.3 13.2.2 11.6c-1.1-.3-1.1-1.1.2-1.6L20.3 2.3c.9-.3 1.7.2 1.4 1.1Z"/></svg>'
};
const content = {
  ru: {
    skip:'К содержимому', nav:['Кейсы','Услуги','Подход'], contact:'Обсудить проект', menu:'Меню', language:'Язык сайта',
    label:'SMM & GROWTH · WEB3', availability:'Открыт к сотрудничеству', intro:'Виктор / Emotion — ваш growth-партнёр',
    title:'Строю систему<br><span>роста в Web3.</span>',
    description:'Помогаю Web3-проектам расти в X: от позиционирования и контента до дистрибуции и аналитики. Системно. Органически. С фокусом на продукт.',
    viewCases:'Смотреть кейсы', heroNote:'Стратегия → контент → внимание → действие',
    graphLabel:'SPECTRAVIEW / X ANALYTICS', graphTitle:'Больше внимания к проекту', before:'Май–июнь', after:'Июль–август', graphPeriod:'Показы · сравнение двух периодов', growth:'рост охватов',
    proof:[['998.7K','показов на личном X-аккаунте','за 8 месяцев'],['2.5×','рост охватов SpectraView','31.1K → 77.8K'],['68.1K','показов с нуля','за первые 2 недели'],['5.5×','вовлечений Aureum','4 недели vs 1 год до работы']],
    clients:'Работал над ростом<br>этих проектов',
    casesLabel:'01 / ИЗБРАННЫЕ КЕЙСЫ', casesTitle:'Меньше обещаний.<br><span class="muted">Больше результатов.</span>', casesDescription:'За каждой цифрой — конкретная работа с контентом и аудиторией. Вот что получилось.',
    caseOpen:'Разобрать кейс', engagement:'вовлечений', case1Kind:'Перезапуск · контент · дистрибуция', case1Title:'За 4 недели — больше вовлечений, чем за прошлый год.', case1Description:'Fasol → Aureum. Переупаковка контента, сильные хуки и органическая дистрибуция.', case1Outcome:'5.5× вовлечений · 18.8× закладок',
    case2Kind:'X / Twitter · органический рост', case2Title:'В 2.5 раза больше охватов. И аудитория, которая реагирует.', case2Description:'SpectraView. Рост не только в показах: больше ответов, обсуждений и сохранений.', case2Outcome:'+149% показов · +210% ответов',
    mini1Title:'Запуск аккаунта с нуля', mini1Text:'показов за 2 недели без рекламы', mini2Title:'Личный аккаунт в X', mini2Text:'показов за 8 месяцев',
    dataNote:'Источник: аналитика X. В кейсе Aureum сравниваются разные периоды: 4 недели после перезапуска и 1 год до него.',
    servicesLabel:'02 / ЧЕМ ПОМОГУ', servicesTitle:'Ваш проект<br>должны <span class="accent">услышать.</span>', servicesDescription:'Подключусь к отдельной задаче или возьму на себя полный цикл развития проекта в X.', servicesLink:'Подобрать формат работы',
    services:[
      ['target','Стратегия и позиционирование','Разберу продукт, аудиторию, конкурентов и текущие метрики. Найду точки роста и соберу гипотезы в понятный план действий.','На выходе: приоритеты, позиционирование и план тестов.'],
      ['layers-1','Контент, который работает','Выстрою темы, рубрики, хуки, треды и визуальную подачу вокруг вашего продукта. Соберу повторяемый процесс, а не случайный набор публикаций.','На выходе: контент-система, рубрикатор и план публикаций.'],
      ['megaphone-2','Органический рост в X','Дистрибуция, содержательные replies, работа с комьюнити и форматами, которые вызывают интерес к проекту и переводят внимание в действие.','На выходе: механики распространения и вовлечения аудитории.'],
      ['graph-arrow-increase','Аналитика и развитие','Сравню периоды, проверю гипотезы и найду, какие темы и механики работают. Учитываю показы, вовлечения, ответы, закладки и переходы в профиль.','На выходе: выводы по данным и приоритеты следующей итерации.'],
      ['compass-navigator','Запуск и перезапуск проекта','Помогу начать с нуля или переупаковать аккаунт под новый этап. Соединю позиционирование, контент и дистрибуцию в единый процесс.','На выходе: подготовленный аккаунт и система запуска контента.']
    ],
    processLabel:'03 / КАК РАБОТАЮ', processTitle:'Понятный процесс.<br><span class="muted">Общая цель.</span>', processDescription:'Вы знаете, что мы делаем, зачем и по каким метрикам оцениваем результат.',
    steps:[['Погружаюсь в проект','Разбираюсь в продукте, аудитории и текущей ситуации. Фиксируем задачу и выбираем метрики, которые имеют смысл для вашего этапа.'],['Собираю и запускаю систему','Формулирую гипотезы, выстраиваю контент и дистрибуцию. Тестирую подачу, темы и форматы в реальной работе.'],['Анализирую и усиливаю','Смотрю на действия аудитории. Оставляю сильные механики, пересматриваю слабые и превращаю удачные тесты в регулярный процесс.']],
    about:'Я внутри Web3 — как автор, участник рынка и growth-специалист. <strong>Проверяю подходы на собственном контенте</strong> и переношу этот опыт в работу с вашим проектом.',
    faqLabel:'ЕЩЁ ПАРА ДЕТАЛЕЙ', faqTitle:'До начала работы.',
    faq:[['С какими проектами вы работаете?','Мой фокус — Web3 и crypto, в первую очередь X / Twitter. Подключаюсь к новым проектам и к командам, которым нужно усилить существующий аккаунт. Начнём с вашей задачи и посмотрим, где мой опыт будет полезен.'],['Можно начать с одной задачи?','Да. Можно разобрать стратегию, собрать контент-систему, запустить аккаунт или подключиться к отдельному направлению. Формат согласуем под текущую точку проекта.'],['Как узнать стоимость и начать?','Напишите в Telegram: поделитесь ссылкой на проект, текущей ситуацией и целью. Обсудим объём, формат работы и стоимость до старта.'] ],
    contactLabel:'СЛЕДУЮЩИЙ ШАГ — ВАШ', contactTitle:'У вашего проекта<br>есть потенциал.<br><span class="accent">Давайте его раскроем.</span>', contactDescription:'Расскажите, что строите и где нужен рост. Обсудим задачу и найдём подходящий формат работы.', tgButton:'Написать в Telegram', xLink:'Или познакомимся в X', footer:'© 2026 Viktor / Emotion. SMM & Growth.', backTop:'Наверх', credit:'Референсы', iconsCredit:'Иконки',
    modalClose:'Закрыть кейс', metric:'Метрика', periodBefore:'До', periodAfter:'После', result:'Изменение', dialogCta:'Похожая задача?', dialogFoot:'Результаты относятся к конкретным проектам и периодам. Для вашего проекта начнём с целей и исходных данных.', imageError:'Не удалось загрузить скриншот.', retry:'Повторить', openImage:'Открыть изображение',
    caseDetails:[
      {title:'Fasol → Aureum',lead:'Перезапуск аккаунта: темы, хуки, визуальная подача и органическая дистрибуция. За 4 недели ключевые метрики превысили показатели предыдущего годового периода. Это сравнение разных по длительности периодов, а не равных месяцев.',heads:['1 год до','4 недели после'],rows:[['Показы','18K','28.1K','+56%'],['Вовлечения','99','547','5.5×'],['Engagement rate','0.5%','1.9%','3.8×'],['Ответы','4','66','16.5×'],['Лайки','38','256','6.7×'],['Закладки','6','113','18.8×']],images:[['fasol-year.png','Fasol · 1 год до работы'],['aureum-month.png','Aureum · 4 недели после перезапуска']]},
      {title:'SpectraView',lead:'После начала работы охваты выросли с 31.1K до 77.8K. Контент стали чаще обсуждать и сохранять. Период до: май–июнь. Период после: июль–август.',heads:['Май–июнь','Июль–август'],rows:[['Показы','31.1K','77.8K','+149%'],['Вовлечения','1.8K','3.3K','+79%'],['Ответы','144','447','+210%'],['Закладки','363','707','+94%']],images:[['spectraview-before.png','До · май–июнь'],['spectraview-after.png','После · июль–август']]},
      {title:'Запуск с нуля',lead:'Новый аккаунт получил 68.1K показов за первые две недели без рекламного бюджета. Данные аналитики X за стартовый период.',heads:['Старт','2 недели'],rows:[['Показы','—','68.1K',''],['Вовлечения','—','1.1K',''],['Лайки','—','658',''],['Закладки','—','255',''],['Ответы','—','90','']],images:[['launch-zero.png','Первые 2 недели · аналитика X']]},
      {title:'Личный аккаунт / Emotion',lead:'Проверяю подход к контенту и органической дистрибуции на собственном X-аккаунте. Результаты за 8 месяцев: 998.7K показов и более 700 органических подписчиков.',heads:['Период','Результат'],rows:[['Показы','8 месяцев','998.7K',''],['Вовлечения','8 месяцев','19.5K',''],['Лайки','8 месяцев','9.1K',''],['Закладки','8 месяцев','4.3K',''],['Подписчики','Органически','700+','']],images:[]}
    ]
  },
  en: {
    skip:'Skip to content',nav:['Work','Services','Process'],contact:'Let’s talk growth',menu:'Menu',language:'Website language',label:'SMM & GROWTH · WEB3',availability:'Open to collaborations',intro:'Viktor / Emotion — your growth partner',title:'Built for<br><span>Web3 growth.</span>',description:'I help Web3 projects grow on X. Positioning, content, distribution and analytics — connected into an organic growth system built around your product.',viewCases:'Explore the work',heroNote:'Strategy → content → attention → action',graphLabel:'SPECTRAVIEW / X ANALYTICS',graphTitle:'More attention for the project',before:'May–June',after:'July–August',graphPeriod:'Impressions · two-period comparison',growth:'growth in reach',
    proof:[['998.7K','impressions on my personal X','over 8 months'],['2.5×','SpectraView reach growth','31.1K → 77.8K'],['68.1K','impressions from zero','in the first 2 weeks'],['5.5×','Aureum engagements','4 weeks vs the prior year']],clients:'Projects I’ve<br>helped grow',casesLabel:'01 / SELECTED WORK',casesTitle:'Less promising.<br><span class="muted">More proving.</span>',casesDescription:'Real content, real audiences, real analytics. Here is what that work delivered.',caseOpen:'Explore case',engagement:'engagements',case1Kind:'Relaunch · content · distribution',case1Title:'Four weeks outperformed a full year of engagement.',case1Description:'Fasol → Aureum. A content reset, stronger hooks and organic distribution.',case1Outcome:'5.5× engagements · 18.8× bookmarks',case2Kind:'X / Twitter · organic growth',case2Title:'2.5× more reach. And an audience that responds.',case2Description:'SpectraView. Beyond impressions: more replies, conversations and saves.',case2Outcome:'+149% impressions · +210% replies',mini1Title:'An account built from zero',mini1Text:'impressions in 2 weeks, without ads',mini2Title:'My personal X account',mini2Text:'impressions over 8 months',dataNote:'Source: X Analytics. Aureum compares periods of different lengths: 4 weeks after relaunch vs 1 year before.',servicesLabel:'02 / HOW I CAN HELP',servicesTitle:'Your project<br>deserves to be <span class="accent">heard.</span>',servicesDescription:'Bring me in for a specific challenge or the complete cycle of your project’s growth on X.',servicesLink:'Find the right way to work',
    services:[['target','Strategy & positioning','I review your product, audience, competition and metrics. Then I turn growth opportunities into a focused plan of action.','You get: priorities, positioning and a test plan.'],['layers-1','Content that does the work','Topics, hooks, threads and visual direction shaped around your product. A repeatable process, rather than a random posting schedule.','You get: a content system, themes and a publishing plan.'],['megaphone-2','Organic growth on X','Distribution, thoughtful replies, community engagement and formats that turn attention into interest in your product.','You get: distribution and audience engagement tactics.'],['graph-arrow-increase','Analytics & iteration','I compare periods and test what works across impressions, engagement, replies, bookmarks and profile visits.','You get: evidence-based findings and priorities for the next iteration.'],['compass-navigator','Launch & relaunch','Start from zero or reposition an existing account for its next chapter. Positioning, content and distribution working together.','You get: a prepared account and a content launch system.']],
    processLabel:'03 / THE PROCESS',processTitle:'A clear process.<br><span class="muted">A shared goal.</span>',processDescription:'You know what we’re doing, why we’re doing it and how we measure the outcome.',steps:[['Understand the project','Get into your product, audience and current situation. Define the challenge and choose metrics that matter for your stage.'],['Build and launch the system','Develop hypotheses, content and distribution. Test topics, messaging and formats with a real audience.'],['Measure and strengthen','Look at audience actions. Keep the strong tactics, rethink the weak ones and turn successful tests into a consistent process.']],about:'I’m part of Web3 as a creator, market participant and growth specialist. <strong>I test my approach on my own content</strong> and bring that experience into your project.',faqLabel:'A FEW MORE DETAILS',faqTitle:'Before we start.',faq:[['What kind of projects do you work with?','My focus is Web3 and crypto, primarily on X / Twitter. I work with new projects and teams that want to improve an existing account. We start with your challenge and see where my experience fits.'],['Can we start with one specific task?','Yes. We can work on strategy, build a content system, launch an account or focus on a single growth area. We’ll agree on the scope based on your project’s stage.'],['How much does it cost and how do we start?','Message me on Telegram with a project link, your current situation and your goal. We’ll discuss scope, working format and pricing before getting started.']],contactLabel:'YOUR NEXT MOVE',contactTitle:'Your project<br>has potential.<br><span class="accent">Let’s unlock it.</span>',contactDescription:'Tell me what you’re building and where you need growth. We’ll discuss the challenge and find the right way to work together.',tgButton:'Message on Telegram',xLink:'Or meet me on X',footer:'© 2026 Viktor / Emotion. SMM & Growth.',backTop:'Back to top',credit:'References',iconsCredit:'Icons',modalClose:'Close case study',metric:'Metric',periodBefore:'Before',periodAfter:'After',result:'Change',dialogCta:'Have a similar challenge?',dialogFoot:'Results apply to specific projects and periods. We’ll start your project with its own goals and baseline.',imageError:'The screenshot could not be loaded.',retry:'Try again',openImage:'Open image',
    caseDetails:[
      {title:'Fasol → Aureum',lead:'Account relaunch: topics, hooks, visual presentation and organic distribution. Four weeks exceeded key metrics from the preceding year. These periods differ in length; this is not a month-over-month comparison.',heads:['1 year before','4 weeks after'],rows:[['Impressions','18K','28.1K','+56%'],['Engagements','99','547','5.5×'],['Engagement rate','0.5%','1.9%','3.8×'],['Replies','4','66','16.5×'],['Likes','38','256','6.7×'],['Bookmarks','6','113','18.8×']],images:[['fasol-year.png','Fasol · 1 year before'],['aureum-month.png','Aureum · 4 weeks after relaunch']]},
      {title:'SpectraView',lead:'After the engagement began, impressions increased from 31.1K to 77.8K. More people replied to and saved the content. Before: May–June. After: July–August.',heads:['May–June','July–August'],rows:[['Impressions','31.1K','77.8K','+149%'],['Engagements','1.8K','3.3K','+79%'],['Replies','144','447','+210%'],['Bookmarks','363','707','+94%']],images:[['spectraview-before.png','Before · May–June'],['spectraview-after.png','After · July–August']]},
      {title:'Launching from zero',lead:'A new account reached 68.1K impressions in its first two weeks without an advertising budget. Source: X Analytics for the launch period.',heads:['Start','2 weeks'],rows:[['Impressions','—','68.1K',''],['Engagements','—','1.1K',''],['Likes','—','658',''],['Bookmarks','—','255',''],['Replies','—','90','']],images:[['launch-zero.png','First 2 weeks · X Analytics']]},
      {title:'Personal account / Emotion',lead:'I test my content and organic distribution approach on my own X account. Over eight months: 998.7K impressions and more than 700 organic followers.',heads:['Period','Result'],rows:[['Impressions','8 months','998.7K',''],['Engagements','8 months','19.5K',''],['Likes','8 months','9.1K',''],['Bookmarks','8 months','4.3K',''],['Followers','Organic','700+','']],images:[]}
    ]
  }
};
let lang = 'ru';
try { lang = localStorage.getItem('emotion-language') === 'en' ? 'en' : 'ru'; } catch {}
let lastCaseTrigger;
let shineObserver;
const accordionAnimations = new WeakMap();

function render() {
  shineObserver?.disconnect();
  const t = content[lang];
  document.documentElement.lang = lang;
  document.title = lang === 'ru' ? 'Viktor / Emotion — ваш проект, следующая точка роста' : 'Viktor / Emotion — your next growth chapter';
  document.querySelector('meta[name="description"]').content = lang === 'ru' ? 'Виктор / Emotion — SMM и органический рост Web3-проектов в X. Стратегия, контент, дистрибуция и аналитика. Кейсы с реальными результатами.' : 'Viktor / Emotion — organic growth for Web3 projects on X. Strategy, content, distribution and analytics. Explore real case studies.';
  document.querySelector('#app').innerHTML = `
    <a class="skip" href="#main">${t.skip}</a>
    <header class="header" id="top"><div class="container header-inner">
      <a class="brand" href="#top" aria-label="Viktor / Emotion">${brand}</a>
      <nav class="nav" id="site-nav" aria-label="${lang === 'ru' ? 'Основная навигация' : 'Main navigation'}">${t.nav.map((n,i)=>`<a href="#${['cases','services','process'][i]}">${n}</a>`).join('')}</nav>
      <div class="header-right"><div class="language" role="group" aria-label="${t.language}"><button type="button" data-lang="ru" aria-label="Русский" aria-pressed="${lang==='ru'}">RU</button><button type="button" data-lang="en" aria-label="English" aria-pressed="${lang==='en'}">EN</button></div><a class="btn btn-secondary" href="${TG}" target="_blank" rel="noopener noreferrer">${t.contact}${arrow()}</a><button type="button" class="menu-toggle" aria-label="${t.menu}" aria-controls="site-nav" aria-expanded="false"><span></span><span></span></button></div>
    </div></header>
    <main id="main">
      <section class="hero container" aria-labelledby="hero-title">
        <div class="hero-topline"><div class="eyebrow accent">${t.label}</div></div>
        <div class="hero-grid"><div class="hero-copy"><h1 id="hero-title">${t.title}</h1><p class="hero-description">${t.description}</p><div class="hero-actions"><a class="btn btn-primary" href="${TG}" target="_blank" rel="noopener noreferrer">${t.contact}${arrow()}</a><a class="text-link" href="#cases">${t.viewCases}${arrow('right')}</a></div><p class="hero-note"><span class="line" aria-hidden="true"></span>${t.heroNote}</p></div>
          <div class="hero-art" aria-hidden="true"><img src="assets/author-purple-king.png" width="1536" height="1024" alt="" fetchpriority="high"><span class="art-coordinate">EMOTION / GROWTH LAB — 2026</span></div>
          <div class="hero-result"><span class="result-cross" aria-hidden="true">↗</span><div><strong>998.7K</strong><p>${t.proof[0][1]}<br><span>${t.proof[0][2]}</span></p></div></div>
        </div>
        <div class="proof-strip">${t.proof.map(p=>`<div class="proof"><strong>${p[0]}</strong><p>${p[1]}</p><small>${p[2]}</small></div>`).join('')}</div>
        <div class="clients"><span>${t.clients}</span><div class="client-wordmark aureum"><span class="client-symbol" aria-hidden="true">△</span>AUREUM</div><div class="client-wordmark"><span class="client-symbol" aria-hidden="true">◈</span>SpectraView</div><div class="client-wordmark fasol">fasol<span class="accent">.</span></div></div>
      </section>
      <section class="section container" id="cases" aria-labelledby="cases-title"><div class="section-heading"><div><p class="eyebrow">${t.casesLabel}</p><h2 id="cases-title">${t.casesTitle}</h2></div><p>${t.casesDescription}</p></div>
        <div class="cases-grid">
          <button type="button" class="case" data-case="0" aria-haspopup="dialog"><div class="case-art aureum-art"><div class="art-top"><span class="project-name">AUREUM</span><span class="case-index">CASE / 01</span></div><div class="art-core"><span class="before-value">99</span>${arrow('right')}<span class="after-value">547<small>${t.engagement}</small></span></div><div class="art-bottom"><span>FASOL → AUREUM</span><span class="art-tag">CONTENT THAT CONNECTS</span></div></div><div class="case-body"><span class="case-kind">${t.case1Kind}</span><h3>${t.case1Title}</h3><p>${t.case1Description}</p><div class="case-bottom"><span class="case-outcome">${t.case1Outcome}</span><span class="case-open">${t.caseOpen}${arrow()}</span></div></div></button>
          <button type="button" class="case" data-case="1" aria-haspopup="dialog"><div class="case-art spectra-art"><div class="art-top"><span class="project-name">SpectraView</span><span class="case-index">CASE / 02</span></div><div class="spectra-chart" aria-hidden="true"><svg viewBox="0 0 440 135" preserveAspectRatio="none"><defs><linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#b993ff" stop-opacity=".22"/><stop offset="1" stop-color="#b993ff" stop-opacity="0"/></linearGradient></defs><path d="M0 120 C70 120 120 120 170 120 S250 4 330 4 S410 4 440 4 L440 135H0Z" fill="url(#chart-fill)"/><path d="M0 120H440M0 80H440M0 40H440" stroke="#493462" stroke-dasharray="3 7" stroke-width=".7"/><path d="M0 120 C70 120 120 120 170 120 S250 4 330 4 S410 4 440 4" fill="none" stroke="#bc96ff" stroke-width="2.5"/><circle cx="330" cy="4" r="5" fill="#bc96ff"/></svg></div><div class="chart-float">2.5×<small>${t.growth}</small></div><div class="art-bottom"><span>31.1K → 77.8K</span><span class="art-tag">ORGANIC REACH</span></div></div><div class="case-body"><span class="case-kind">${t.case2Kind}</span><h3>${t.case2Title}</h3><p>${t.case2Description}</p><div class="case-bottom"><span class="case-outcome">${t.case2Outcome}</span><span class="case-open">${t.caseOpen}${arrow()}</span></div></div></button>
        </div>
        <div class="mini-cases"><button type="button" class="mini-case" data-case="2" aria-haspopup="dialog"><strong>68.1K</strong><p><b>${t.mini1Title}</b>${t.mini1Text}</p>${arrow()}</button><button type="button" class="mini-case" data-case="3" aria-haspopup="dialog"><strong>998.7K</strong><p><b>${t.mini2Title}</b>${t.mini2Text}</p>${arrow()}</button></div>
        ${renderAnalytics()}
      </section>
      <section class="section services-section" id="services" aria-labelledby="services-title"><div class="container services-layout"><div class="services-intro"><p class="eyebrow">${t.servicesLabel}</p><h2 class="section-title" id="services-title">${t.servicesTitle}</h2><p>${t.servicesDescription}</p><div class="service-art"><img src="assets/megaphone-purple.png" width="1536" height="1024" alt="" loading="lazy"></div><a class="text-link" href="${TG}" target="_blank" rel="noopener noreferrer">${t.servicesLink}${arrow()}</a></div><div>${t.services.map((s,i)=>`<details class="service" ${i===0?'open':''}><summary><span class="service-icon">${icon(s[0])}</span><h3>${s[1]}</h3><span class="service-num">0${i+1}</span><span class="plus" aria-hidden="true">+</span></summary><div class="service-content"><p>${s[2]}</p><p class="deliverable">${s[3]}</p></div></details>`).join('')}</div></div></section>
      <section class="section container" id="process" aria-labelledby="process-title"><div class="section-heading"><div><p class="eyebrow">${t.processLabel}</p><h2 id="process-title">${t.processTitle}</h2></div><p>${t.processDescription}</p></div><div class="process-grid">${t.steps.map((s,i)=>`<div class="step"><div class="step-line"><span>0${i+1}</span></div><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join('')}</div><div class="about"><div class="about-person"><div class="avatar" aria-hidden="true">VE</div><div><strong>Viktor / Emotion</strong><span>SMM · Growth · Web3</span></div></div><p>${t.about}</p></div></section>
      <section class="section faq-section container" aria-labelledby="faq-title"><div class="faq-layout"><div><p class="eyebrow">${t.faqLabel}</p><h2 class="section-title" id="faq-title">${t.faqTitle}</h2></div><div>${t.faq.map(f=>`<details class="faq"><summary>${f[0]}<span class="plus" aria-hidden="true">+</span></summary><p>${f[1]}</p></details>`).join('')}</div></div></section>
      <section class="contact container" id="contact" aria-labelledby="contact-title"><div class="contact-box"><div><p class="eyebrow">${t.contactLabel}</p><h2 id="contact-title">${t.contactTitle}</h2><p>${t.contactDescription}</p></div><div class="contact-actions"><a class="btn btn-primary" href="${TG}" target="_blank" rel="noopener noreferrer">${t.tgButton}${arrow()}</a><a class="text-link" href="${X}" target="_blank" rel="noopener noreferrer">${t.xLink}${arrow()}</a></div></div></section>
    </main>
    <footer class="footer container"><div class="footer-main"><span class="brand">${brand}</span><p>${t.footer}</p><div class="footer-socials"><a class="social-link" href="${X}" target="_blank" rel="noopener noreferrer" aria-label="X — @Emotion_web3" title="X — @Emotion_web3">${socialIcons.x}</a><a class="social-link" href="${TG}" target="_blank" rel="noopener noreferrer" aria-label="Telegram — Emotioncrypto1" title="Telegram — Emotioncrypto1">${socialIcons.telegram}</a></div></div><div class="credits"><span>STRATEGY. CONTENT. GROWTH.</span></div></footer>
    <dialog class="dialog" aria-labelledby="dialog-title"><div class="dialog-header"><h2 id="dialog-title"></h2><button type="button" class="dialog-close" aria-label="${t.modalClose}">×</button></div><div class="dialog-body"></div></dialog>`;
  setupAccordions();
  applyShineBorders();
  bindEvents();
}

function renderAnalytics() {
  const ru = lang === 'ru';
  const t = content[lang];
  const shot = (image, index, metric) => {
    const [file, caption] = image;
    const [width,height] = imageSizes[file];
    return `<figure class="analytics-shot"><figcaption><span class="analytics-shot-label">${caption}</span><span class="analytics-period">${index}</span></figcaption><a class="analytics-image-link" href="assets/${file}" target="_blank" rel="noopener noreferrer" aria-label="${ru ? 'Увеличить' : 'Enlarge'}: ${caption}"><span class="analytics-image-frame"><img src="assets/${file}" width="${width}" height="${height}" alt="${caption}. ${metric}" loading="lazy" decoding="async" data-analytics-image><span class="analytics-image-error" hidden>${t.imageError} ${t.openImage} ↗</span></span><span class="analytics-shot-footer"><span>${metric}</span></span></a></figure>`;
  };
  return `<section class="analytics-gallery" id="analytics" aria-labelledby="analytics-title">
    <div class="analytics-heading"><div><h3 id="analytics-title">${ru ? 'Результат — в цифрах,<br><span class="accent">не в обещаниях.</span>' : 'Results you<br><span class="accent">can look into.</span>'}</h3></div></div>
    <div class="analytics-group"><div class="analytics-group-header"><div><span class="analytics-group-index">01 / RELAUNCH</span><h4>Fasol <span class="muted">→</span> Aureum</h4></div></div><p class="analytics-context">${ru ? 'Сравнение разных по длительности периодов: год до работы и четыре недели после перезапуска.' : 'Periods differ in length: one year before the engagement and four weeks after the relaunch.'}</p><div class="analytics-pair">${shot(t.caseDetails[0].images[0],'1Y',ru ? '18K показов · 99 вовлечений' : '18K impressions · 99 engagements')}${shot(t.caseDetails[0].images[1],'4W',ru ? '28.1K показов · 547 вовлечений' : '28.1K impressions · 547 engagements')}</div></div>
    <div class="analytics-group"><div class="analytics-group-header"><div><span class="analytics-group-index">02 / ORGANIC GROWTH</span><h4>SpectraView</h4></div><span class="analytics-result">+149% ${ru ? 'показов' : 'impressions'}</span></div><p class="analytics-context">${ru ? 'Два последовательных периода: май–июнь до начала работы и июль–август после.' : 'Two consecutive periods: May–June before the engagement and July–August after.'}</p><div class="analytics-pair">${shot(t.caseDetails[1].images[0],ru ? 'ДО' : 'BEFORE',ru ? '31.1K показов · 1.8K вовлечений' : '31.1K impressions · 1.8K engagements')}${shot(t.caseDetails[1].images[1],ru ? 'ПОСЛЕ' : 'AFTER',ru ? '77.8K показов · 3.3K вовлечений' : '77.8K impressions · 3.3K engagements')}</div></div>
    <div class="analytics-group analytics-launch"><div class="analytics-launch-copy"><span class="analytics-group-index">03 / FROM ZERO</span><h4>${ru ? 'С нуля.<br>Без рекламного бюджета.' : 'From zero.<br>Without an ad budget.'}</h4><strong class="analytics-launch-number">68.1K</strong><p>${ru ? 'показов за первые две недели' : 'impressions in the first two weeks'}</p><div class="analytics-launch-metrics"><span><b>1.1K</b>${ru ? 'вовлечений' : 'engagements'}</span><span><b>255</b>${ru ? 'закладок' : 'bookmarks'}</span><span><b>90</b>${ru ? 'ответов' : 'replies'}</span></div><a class="text-link accent" href="${TG}" target="_blank" rel="noopener noreferrer">${t.contact}${arrow()}</a></div>${shot(t.caseDetails[2].images[0],'2W',ru ? 'Первые 2 недели · без рекламы' : 'First 2 weeks · without ads')}</div>
  </section>`;
}

function setAccordionOpen(item, open) {
  const start = item.getBoundingClientRect().height;
  const previous = accordionAnimations.get(item);
  if (previous) { previous.onfinish = null; previous.cancel(); }
  item.dataset.state = open ? 'open' : 'closing';
  if (open) item.open = true;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !item.animate) {
    item.open = open;
    item.dataset.state = open ? 'open' : 'closed';
    item.style.removeProperty('overflow');
    accordionAnimations.delete(item);
    return;
  }
  const summary = item.querySelector('summary');
  const end = open ? item.getBoundingClientRect().height : summary.getBoundingClientRect().height + 2;
  item.style.overflow = 'hidden';
  const animation = item.animate([{height:`${start}px`},{height:`${end}px`}], {
    duration:open ? 280 : 180, easing:'cubic-bezier(.22,1,.36,1)'
  });
  accordionAnimations.set(item, animation);
  animation.onfinish = () => {
    item.open = open;
    item.dataset.state = open ? 'open' : 'closed';
    item.style.removeProperty('overflow');
    accordionAnimations.delete(item);
  };
}

function setupAccordions() {
  document.querySelector('.faq-section').id = 'faq';
  const groups = [document.querySelector('.services-layout > div:last-child'),document.querySelector('.faq-layout > div:last-child')];
  groups.forEach((group, groupIndex) => {
    group.classList.add('accordion-list');
    const items = [...group.querySelectorAll('details')];
    const triggers = items.map(item => item.querySelector('summary'));
    items.forEach((item,index) => {
      const summary = triggers[index];
      item.dataset.state = item.open ? 'open' : 'closed';
      summary.id = `accordion-trigger-${groupIndex}-${index}`;
      const oldPlus = summary.querySelector('.plus');
      oldPlus.outerHTML = '<svg class="accordion-chevron" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      if (item.classList.contains('faq')) {
        const title = document.createElement('h3');
        title.className = 'accordion-question';
        [...summary.childNodes].filter(node => node.nodeType === Node.TEXT_NODE).forEach(node => title.append(node));
        summary.prepend(title);
      }
      let panel = item.querySelector('.service-content');
      if (!panel) {
        panel = document.createElement('div');
        panel.append(item.querySelector(':scope > p'));
        item.append(panel);
      }
      panel.classList.add('accordion-panel');
      panel.id = `accordion-panel-${groupIndex}-${index}`;
      panel.setAttribute('role','region');
      panel.setAttribute('aria-labelledby',summary.id);
      summary.setAttribute('aria-controls',panel.id);
      summary.addEventListener('click',event => {
        event.preventDefault();
        const opening = item.dataset.state !== 'open';
        if (opening) items.filter(other => other !== item && other.dataset.state === 'open').forEach(other => setAccordionOpen(other,false));
        setAccordionOpen(item,opening);
      });
      summary.addEventListener('keydown',event => {
        const offsets = {ArrowDown:1,ArrowUp:-1};
        let target;
        if (event.key in offsets) target = (index + offsets[event.key] + triggers.length) % triggers.length;
        else if (event.key === 'Home') target = 0;
        else if (event.key === 'End') target = triggers.length - 1;
        else return;
        event.preventDefault();triggers[target].focus();
      });
    });
  });
  const faqHeader = document.querySelector('.faq-layout > div:first-child');
  const description = document.createElement('p');
  description.className = 'faq-description';
  description.textContent = lang === 'ru' ? 'Коротко о том, с кем я работаю, как подключаюсь к проекту и с чего начнём.' : 'A few details about who I work with, how I get involved and where we start.';
  const footer = document.createElement('p');
  footer.className = 'faq-support';
  footer.innerHTML = lang === 'ru' ? 'Остались вопросы?<br><a href="'+TG+'" target="_blank" rel="noopener noreferrer">Напишите мне в Telegram '+arrow()+'</a>' : 'Still have questions?<br><a href="'+TG+'" target="_blank" rel="noopener noreferrer">Message me on Telegram '+arrow()+'</a>';
  faqHeader.append(description,footer);
}

// CSS equivalent of the supplied ShineBorder: preserve semantic buttons/details
// and keep the decorative mask independent from existing pseudo-elements.
function applyShineBorders(root = document) {
  if (!shineObserver && 'IntersectionObserver' in window) {
    shineObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.target.classList.toggle('shine-offscreen', !entry.isIntersecting));
    });
  }
  const selectors = '.case, .mini-case, .hero-result, .proof, .service, .step, .about, .faq, .contact-box, .dialog, .image-shell, .btn, .language, .analytics-shot';
  root.querySelectorAll(selectors).forEach((element, index) => {
    const host = element.matches('details') ? element.querySelector('summary') : element;
    if (host.querySelector(':scope > .shine-border-layer')) return;
    element.classList.add('shine-card');
    const layer = document.createElement('span');
    layer.className = 'shine-border-layer';
    layer.setAttribute('aria-hidden', 'true');
    layer.style.setProperty('--shine-delay', `${-(index % 7) * 2}s`);
    host.append(layer);
    shineObserver?.observe(element);
  });
}

function closeMenu(returnFocus = false) {
  document.querySelector('.nav').classList.remove('open');
  const toggle = document.querySelector('.menu-toggle');
  toggle.setAttribute('aria-expanded','false');
  if (returnFocus) toggle.focus();
}
function bindEvents() {
  document.querySelector('.header .brand').addEventListener('click',event => {
    event.preventDefault();
    closeMenu();
    history.replaceState(null,'','#top');
    window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  });
  document.querySelectorAll('[data-analytics-image]').forEach(img => {
    img.addEventListener('error',() => { img.hidden = true; img.nextElementSibling.hidden = false; });
  });
  document.querySelectorAll('[data-lang]').forEach(button=>button.addEventListener('click',()=>{
    if (lang === button.dataset.lang) return;
    lang = button.dataset.lang;
    try { localStorage.setItem('emotion-language',lang); } catch {}
    render();
    document.querySelector(`[data-lang="${lang}"]`).focus({preventScroll:true});
  }));
  document.querySelector('.menu-toggle').addEventListener('click',()=>{
    const open = document.querySelector('.nav').classList.toggle('open');
    document.querySelector('.menu-toggle').setAttribute('aria-expanded',String(open));
  });
  document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>closeMenu()));
  document.querySelectorAll('[data-case]').forEach(button=>button.addEventListener('click',()=>openCase(Number(button.dataset.case),button)));
  const dialog = document.querySelector('.dialog');
  document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close',()=>{
    document.body.classList.remove('locked');
    lastCaseTrigger?.focus({preventScroll:true});
  });
}

function openCase(index, trigger) {
  const t = content[lang];
  const c = t.caseDetails[index];
  const dialog = document.querySelector('.dialog');
  lastCaseTrigger = trigger;
  document.querySelector('#dialog-title').textContent = c.title;
  document.querySelector('.dialog-body').innerHTML = `<p class="dialog-lead">${c.lead}</p><table class="metric-table"><thead><tr><th scope="col">${t.metric}</th><th scope="col">${c.heads[0]}</th><th scope="col">${c.heads[1]}</th><th scope="col">${t.result}</th></tr></thead><tbody>${c.rows.map(r=>`<tr>${r.map((v,i)=>i===0?`<th scope="row">${v}</th>`:`<td>${v}</td>`).join('')}</tr>`).join('')}</tbody></table><div class="evidence-grid">${c.images.map((im,i)=>`<figure class="evidence"><figcaption>${im[1]}</figcaption><div class="image-shell"><img src="assets/${im[0]}" alt="${im[1]}" data-evidence="${i}"><div class="image-error" hidden><p>${t.imageError}</p><button class="btn btn-secondary retry-image" type="button">${t.retry}</button> <a href="assets/${im[0]}" target="_blank" rel="noopener noreferrer">${t.openImage}</a></div></div></figure>`).join('')}</div><div class="dialog-foot"><p>${t.dialogFoot}</p><a class="btn btn-primary" href="${TG}" target="_blank" rel="noopener noreferrer">${t.dialogCta}${arrow()}</a></div>`;
  document.querySelectorAll('[data-evidence]').forEach(img=>{
    const size = imageSizes[c.images[Number(img.dataset.evidence)][0]];
    img.width=size[0];img.height=size[1];
    const error = img.nextElementSibling;
    img.addEventListener('error',()=>{img.hidden=true;error.hidden=false;});
    img.addEventListener('load',()=>{img.hidden=false;error.hidden=true;});
    error.querySelector('button').addEventListener('click',()=>{
      error.hidden=true;img.hidden=false;
      img.src=`assets/${c.images[Number(img.dataset.evidence)][0]}?retry=${Date.now()}`;
    });
  });
  applyShineBorders(dialog);
  dialog.showModal();
  dialog.scrollTop=0;
  document.body.classList.add('locked');
  document.querySelector('.dialog-close').focus({preventScroll:true});
}
document.addEventListener('keydown',event=>{
  if(event.key==='Escape' && document.querySelector('.nav.open')) closeMenu(true);
});
document.addEventListener('click',event=>{
  if(!event.target.closest('.header') && document.querySelector('.nav.open')) closeMenu();
});
render();
if (location.hash) {
  const target = document.getElementById(location.hash.slice(1));
  if (location.hash === '#top') requestAnimationFrame(()=>window.scrollTo({top:0,behavior:'instant'}));
  else if (target) requestAnimationFrame(()=>target.scrollIntoView({behavior:'instant'}));
}
