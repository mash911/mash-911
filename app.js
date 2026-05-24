const references = [
  { label: "الإسلام سؤال وجواب", url: "https://islamqa.info/ar/answers/217496/" },
  { label: "إسلام ويب", url: "https://islamweb.net/ar/fatwa/4514/%D8%A3%D8%B0%D9%83%D8%A7%D8%B1-%D8%A7%D9%84%D9%86%D9%88%D9%85" },
  { label: "الدرر السنية", url: "https://dorar.net/" },
  { label: "ابن باز", url: "https://binbaz.org.sa/fatwas/9949/%D9%88%D9%82%D8%AA-%D8%A7%D8%AF%D8%A7%D8%A1-%D8%A7%D8%B0%D9%83%D8%A7%D8%B1-%D8%A7%D9%84%D8%B5%D8%A8%D8%A7%D8%AD-%D9%88%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%A1" },
  { label: "ابن عثيمين", url: "https://binothaimeen.net/" },
  { label: "مواقع أهل العلم", url: "https://binbaz.org.sa/" }
];

const categories = [
  {
    id: "morning",
    title: "أذكار الصباح",
    subtitle: "ورد الصباح من بعد الفجر وحتى الضحى.",
    kicker: "اعتمادًا على الإسلام سؤال وجواب وابن باز",
    items: [
      {
        title: "سيد الاستغفار",
        text: "اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت، أعوذ بك من شر ما صنعت، أبوء لك بنعمتك علي، وأبوء بذنبي فاغفر لي، فإنه لا يغفر الذنوب إلا أنت.",
        count: 1,
        sourceLabel: "الإسلام سؤال وجواب",
        sourceUrl: "https://islamqa.info/ar/answers/217496/",
        note: "ورد ضمن الأذكار الصحيحة الجامعة لأذكار الصباح والمساء."
      },
      {
        title: "رضيت بالله ربًا",
        text: "رضيت بالله ربًا، وبالإسلام دينًا، وبمحمد صلى الله عليه وسلم نبيًا.",
        count: 3,
        sourceLabel: "الإسلام سؤال وجواب",
        sourceUrl: "https://islamqa.info/ar/answers/217496/",
        note: "يقال ثلاث مرات صباحًا ومساءً."
      },
      {
        title: "بسم الله الذي لا يضر",
        text: "بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء وهو السميع العليم.",
        count: 3,
        sourceLabel: "الإسلام سؤال وجواب",
        sourceUrl: "https://islamqa.info/ar/answers/217496/",
        note: "من الأذكار العظيمة في التحصين."
      },
      {
        title: "حسبي الله",
        text: "حسبي الله لا إله إلا هو، عليه توكلت وهو رب العرش العظيم.",
        count: 7,
        sourceLabel: "الإسلام سؤال وجواب",
        sourceUrl: "https://islamqa.info/ar/answers/217496/",
        note: "يقال سبع مرات كما هو مشهور في كتب الأذكار."
      },
      {
        title: "تسبيح مئة",
        text: "سبحان الله وبحمده.",
        count: 100,
        sourceLabel: "الإسلام سؤال وجواب",
        sourceUrl: "https://islamqa.info/ar/answers/217496/",
        note: "اجعل الضغط على العداد بهدوء حتى تكمل المئة."
      },
      {
        title: "تهليل مئة",
        text: "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير.",
        count: 100,
        sourceLabel: "الإسلام سؤال وجواب",
        sourceUrl: "https://islamqa.info/ar/answers/217496/",
        note: "من الأذكار العظيمة التي جاءت بعدد مئة."
      }
    ]
  },
  {
    id: "evening",
    title: "أذكار المساء",
    subtitle: "لوقت المساء من بعد العصر إلى أول الليل.",
    kicker: "وقت الأداء مذكور في فتوى ابن باز",
    items: [
      {
        title: "دعاء المساء",
        text: "اللهم بك أمسينا وبك أصبحنا وبك نحيا وبك نموت وإليك النشور.",
        count: 1,
        sourceLabel: "الإسلام سؤال وجواب",
        sourceUrl: "https://islamqa.info/ar/answers/217496/",
        note: "يمكنك قراءته مع بقية أذكار المساء الواردة."
      },
      {
        title: "رضيت بالله ربًا",
        text: "رضيت بالله ربًا، وبالإسلام دينًا، وبمحمد صلى الله عليه وسلم نبيًا.",
        count: 3,
        sourceLabel: "الإسلام سؤال وجواب",
        sourceUrl: "https://islamqa.info/ar/answers/217496/",
        note: "ورد تكراره ثلاث مرات."
      },
      {
        title: "أعوذ بكلمات الله التامات",
        text: "أعوذ بكلمات الله التامات من شر ما خلق.",
        count: 3,
        sourceLabel: "الإسلام سؤال وجواب",
        sourceUrl: "https://islamqa.info/ar/answers/217496/",
        note: "ذكر ثابت في التحصين عند المساء."
      },
      {
        title: "حسبي الله",
        text: "حسبي الله لا إله إلا هو، عليه توكلت وهو رب العرش العظيم.",
        count: 7,
        sourceLabel: "الإسلام سؤال وجواب",
        sourceUrl: "https://islamqa.info/ar/answers/217496/",
        note: "عداد السبعة سيتوقف ثم ينقلك للذكر الذي بعده."
      },
      {
        title: "سبحان الله وبحمده",
        text: "سبحان الله وبحمده.",
        count: 100,
        sourceLabel: "الإسلام سؤال وجواب",
        sourceUrl: "https://islamqa.info/ar/answers/217496/",
        note: "يتدرج محيط الدائرة حتى يكتمل عند تمام العدد."
      }
    ]
  },
  {
    id: "sleep",
    title: "أذكار النوم",
    subtitle: "أذكار تقال عند أخذ المضجع والنوم.",
    kicker: "اعتمادًا على إسلام ويب مع تخريج الأحاديث المشهورة",
    items: [
      {
        title: "آية الكرسي",
        text: "اقرأ آية الكرسي قبل النوم: الله لا إله إلا هو الحي القيوم ... إلى آخر الآية.",
        count: 1,
        sourceLabel: "إسلام ويب",
        sourceUrl: "https://islamweb.net/ar/fatwa/4514/%D8%A3%D8%B0%D9%83%D8%A7%D8%B1-%D8%A7%D9%84%D9%86%D9%88%D9%85",
        note: "ذكرت في فتوى أذكار النوم وأنها من أسباب الحفظ بإذن الله."
      },
      {
        title: "سور الإخلاص والمعوذتين",
        text: "اقرأ: قل هو الله أحد، وقل أعوذ برب الفلق، وقل أعوذ برب الناس، ثم امسح بهن ما استطعت من جسدك.",
        count: 3,
        sourceLabel: "إسلام ويب",
        sourceUrl: "https://islamweb.net/ar/fatwa/4514/%D8%A3%D8%B0%D9%83%D8%A7%D8%B1-%D8%A7%D9%84%D9%86%D9%88%D9%85",
        note: "جاء في الصحيحين أن ذلك يكرر ثلاث مرات."
      },
      {
        title: "آخر آيتين من البقرة",
        text: "اقرأ الآيتين من آخر سورة البقرة: آمن الرسول ... إلى آخر السورة.",
        count: 1,
        sourceLabel: "إسلام ويب",
        sourceUrl: "https://islamweb.net/ar/fatwa/4514/%D8%A3%D8%B0%D9%83%D8%A7%D8%B1-%D8%A7%D9%84%D9%86%D9%88%D9%85",
        note: "ثبت في الصحيح أن من قرأ بهما في ليلة كفتاه."
      },
      {
        title: "دعاء النوم",
        text: "اللهم أسلمت نفسي إليك، وفوضت أمري إليك، وألجأت ظهري إليك، رغبة ورهبة إليك، لا ملجأ ولا منجى منك إلا إليك، آمنت بكتابك الذي أنزلت، ونبيك الذي أرسلت.",
        count: 1,
        sourceLabel: "إسلام ويب",
        sourceUrl: "https://islamweb.net/ar/fatwa/4514/%D8%A3%D8%B0%D9%83%D8%A7%D8%B1-%D8%A7%D9%84%D9%86%D9%88%D9%85",
        note: "يقال عند النوم ويستحب أن يكون آخر ما يقال."
      }
    ]
  },
  {
    id: "wake",
    title: "أذكار الاستيقاظ",
    subtitle: "أذكار عند القيام من النوم أو عند التعار من الليل.",
    kicker: "اعتمادًا على إسلام ويب",
    items: [
      {
        title: "الحمد لله الذي أحيانا",
        text: "الحمد لله الذي أحيانا بعد ما أماتنا وإليه النشور.",
        count: 1,
        sourceLabel: "إسلام ويب",
        sourceUrl: "https://islamweb.net/ar/fatwa/365395/%D8%A3%D8%B0%D9%83%D8%A7%D8%B1-%D9%88%D8%A3%D8%AF%D8%B9%D9%8A%D8%A9-%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%8A%D9%82%D8%A7%D8%B8-%D9%85%D9%86-%D8%A7%D9%84%D9%86%D9%88%D9%85",
        note: "من أشهر ما يقال عند الاستيقاظ من النوم."
      },
      {
        title: "ذكر التعار من الليل",
        text: "لا إله إلا الله وحده لا شريك له، له الملك، وله الحمد، وهو على كل شيء قدير، الحمد لله، وسبحان الله، ولا إله إلا الله، والله أكبر، ولا حول ولا قوة إلا بالله، ثم يقول: اللهم اغفر لي.",
        count: 1,
        sourceLabel: "إسلام ويب",
        sourceUrl: "https://islamweb.net/ar/fatwa/365395/%D8%A3%D8%B0%D9%83%D8%A7%D8%B1-%D9%88%D8%A3%D8%AF%D8%B9%D9%8A%D8%A9-%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%8A%D9%82%D8%A7%D8%B8-%D9%85%D9%86-%D8%A7%D9%84%D9%86%D9%88%D9%85",
        note: "ورد في الحديث أن من قاله ثم دعا استجيب له بإذن الله."
      }
    ]
  },
  {
    id: "verified",
    title: "أذكار صحيحة مختارة",
    subtitle: "مختارات مشهورة من الأذكار الثابتة.",
    kicker: "مستفاد من الدرر السنية ومواقع أهل العلم",
    items: [
      {
        title: "دعاء الكرب",
        text: "لا إله إلا الله العظيم الحليم، لا إله إلا الله رب العرش العظيم، لا إله إلا الله رب السماوات ورب الأرض ورب العرش الكريم.",
        count: 1,
        sourceLabel: "الدرر السنية",
        sourceUrl: "https://dorar.net/",
        note: "من الأذكار الجامعة المشهورة في كتب السنة."
      },
      {
        title: "يا حي يا قيوم",
        text: "يا حي يا قيوم برحمتك أستغيث، أصلح لي شأني كله، ولا تكلني إلى نفسي طرفة عين.",
        count: 3,
        sourceLabel: "الإسلام سؤال وجواب",
        sourceUrl: "https://islamqa.info/ar/answers/217496/",
        note: "يناسب الصباح والمساء ويقال كذلك عند الحاجة."
      },
      {
        title: "العافية",
        text: "اللهم إني أسألك العفو والعافية في الدنيا والآخرة.",
        count: 1,
        sourceLabel: "الإسلام سؤال وجواب",
        sourceUrl: "https://islamqa.info/ar/answers/217496/",
        note: "دعاء عظيم في العافية الظاهرة والباطنة."
      }
    ]
  }
];

const splashScreen = document.getElementById("splashScreen");
const app = document.getElementById("app");
const homeScreen = document.getElementById("homeScreen");
const categoryScreen = document.getElementById("categoryScreen");
const aboutScreen = document.getElementById("aboutScreen");
const referencesScreen = document.getElementById("referencesScreen");
const categoriesGrid = document.getElementById("categoriesGrid");
const referenceLinks = document.getElementById("referenceLinks");
const openAboutButton = document.getElementById("openAboutButton");
const openReferencesButton = document.getElementById("openReferencesButton");
const backToHomeButton = document.getElementById("backToHomeButton");
const backFromAboutButton = document.getElementById("backFromAboutButton");
const backFromReferencesButton = document.getElementById("backFromReferencesButton");
const categoryTitle = document.getElementById("categoryTitle");
const categoryKicker = document.getElementById("categoryKicker");
const dhikrIndex = document.getElementById("dhikrIndex");
const dhikrCountLabel = document.getElementById("dhikrCountLabel");
const dhikrHeading = document.getElementById("dhikrHeading");
const dhikrText = document.getElementById("dhikrText");
const dhikrSourceLink = document.getElementById("dhikrSourceLink");
const dhikrNote = document.getElementById("dhikrNote");
const counterProgress = document.getElementById("counterProgress");
const counterButton = document.getElementById("counterButton");
const counterCurrent = document.getElementById("counterCurrent");
const counterTarget = document.getElementById("counterTarget");
const counterStatus = document.getElementById("counterStatus");

const state = {
  category: null,
  dhikrIndex: 0,
  currentCount: 0
};

function renderReferences() {
  referenceLinks.innerHTML = references
    .map(
      (reference) => `
        <a class="reference-link" href="${reference.url}" target="_blank" rel="noreferrer noopener">
          ${reference.label}
        </a>
      `
    )
    .join("");
}

function renderCategories() {
  categoriesGrid.innerHTML = categories
    .map(
      (category) => `
        <button class="category-card" type="button" data-category-id="${category.id}">
          <span class="pill soft">${category.items.length} أذكار</span>
          <h4>${category.title}</h4>
          <p>${category.subtitle}</p>
        </button>
      `
    )
    .join("");
}

function showScreen(screen) {
  [homeScreen, categoryScreen, aboutScreen, referencesScreen].forEach((section) => {
    section.classList.toggle("active", section === screen);
  });
}

function getCurrentDhikr() {
  return state.category.items[state.dhikrIndex];
}

function updateCounter() {
  const currentDhikr = getCurrentDhikr();
  const progress = currentDhikr.count === 0 ? 0 : state.currentCount / currentDhikr.count;
  const angle = Math.min(progress * 360, 360);

  counterProgress.style.setProperty("--progress-angle", `${angle}deg`);
  counterCurrent.textContent = String(state.currentCount);
  counterTarget.textContent = `/ ${currentDhikr.count}`;
  counterStatus.textContent =
    state.currentCount >= currentDhikr.count
      ? "تم هذا الذكر، جارٍ الانتقال للذكر التالي..."
      : `المطلوب ${currentDhikr.count} مرات. اضغط حتى تكمل العدد.`;
  counterProgress.classList.toggle("completed", state.currentCount >= currentDhikr.count);
}

function renderDhikr() {
  const currentDhikr = getCurrentDhikr();

  categoryTitle.textContent = state.category.title;
  categoryKicker.textContent = state.category.kicker;
  dhikrIndex.textContent = `الذكر ${state.dhikrIndex + 1} من ${state.category.items.length}`;
  dhikrCountLabel.textContent = `العدد ${currentDhikr.count}`;
  dhikrHeading.textContent = currentDhikr.title;
  dhikrText.textContent = currentDhikr.text;
  dhikrSourceLink.textContent = currentDhikr.sourceLabel;
  dhikrSourceLink.href = currentDhikr.sourceUrl;
  dhikrNote.textContent = currentDhikr.note;
  state.currentCount = 0;
  updateCounter();
}

function openCategory(categoryId) {
  const category = categories.find((entry) => entry.id === categoryId);
  if (!category) {
    return;
  }

  state.category = category;
  state.dhikrIndex = 0;
  renderDhikr();
  showScreen(categoryScreen);
}

function goHome() {
  state.category = null;
  state.dhikrIndex = 0;
  state.currentCount = 0;
  showScreen(homeScreen);
}

function goNextDhikr() {
  if (!state.category) {
    return;
  }

  if (state.dhikrIndex < state.category.items.length - 1) {
    state.dhikrIndex += 1;
    renderDhikr();
    return;
  }

  counterStatus.textContent = "أحسنت، أنهيت هذا القسم كاملًا.";
}

function incrementCounter() {
  const currentDhikr = getCurrentDhikr();

  if (state.currentCount >= currentDhikr.count) {
    return;
  }

  state.currentCount += 1;
  updateCounter();

  if (state.currentCount === currentDhikr.count) {
    window.setTimeout(goNextDhikr, 850);
  }
}

function setupEvents() {
  categoriesGrid.addEventListener("click", (event) => {
    const categoryButton = event.target.closest("[data-category-id]");
    if (!categoryButton) {
      return;
    }

    openCategory(categoryButton.dataset.categoryId);
  });

  openAboutButton.addEventListener("click", () => showScreen(aboutScreen));
  openReferencesButton.addEventListener("click", () => showScreen(referencesScreen));
  backToHomeButton.addEventListener("click", goHome);
  backFromAboutButton.addEventListener("click", goHome);
  backFromReferencesButton.addEventListener("click", goHome);
  counterButton.addEventListener("click", incrementCounter);
}

function startSplash() {
  window.setTimeout(() => {
    splashScreen.classList.add("fade-out");
    app.classList.remove("hidden");
    showScreen(homeScreen);
  }, 2000);
}

renderReferences();
renderCategories();
setupEvents();
startSplash();
