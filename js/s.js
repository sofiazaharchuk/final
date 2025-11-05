document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const body = document.body;

    function toggleMenu() {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
        body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    }

    if (burger) {
        burger.addEventListener('click', toggleMenu);

        burger.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMenu();
            }
        });
    }
    
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (nav.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    document.addEventListener('click', function(e) {
        if (nav.classList.contains('active') && 
            !nav.contains(e.target) && 
            !burger.contains(e.target)) {
            toggleMenu();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && nav.classList.contains('active')) {
            toggleMenu();
        }
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
 
    const animatedElements = document.querySelectorAll(
        '.fade-in, .fade-in-delay, .fade-in-delay-2, ' +
        '.reveal, .reveal-delay, .reveal-delay-2'
    );
    
    animatedElements.forEach(el => observer.observe(el));
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const elementsToObserve = document.querySelectorAll('.fade-in, .fade-in-delay, .fade-in-delay-2, .reveal, .reveal-delay, .reveal-delay-2');

if (elementsToObserve.length > 0) {
    try {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        elementsToObserve.forEach(el => {
            observer.observe(el);
        });
    } catch (error) {
        console.error('Observer error:', error);
    }
}

const feedbackForm = document.getElementById('feedbackForm');
const successNotification = document.getElementById('successNotification');

if (feedbackForm && successNotification) {
    try {
        feedbackForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = feedbackForm.querySelector('.submit-btn');

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span>Відправка...</span>';
            }

            setTimeout(() => {
                feedbackForm.style.display = 'none';
                successNotification.classList.add('active');

                setTimeout(() => {
                    feedbackForm.reset();
                    feedbackForm.style.display = 'block';
                    successNotification.classList.remove('active');

                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = '<span>Надіслати</span>';
                    }
                }, 5000);
            }, 1500);
        });
    } catch (error) {
        console.error('Form error:', error);
    }
}

const galleryData = [
    {
        img: '/home/user23se47/Стільниця/будинок слова/img/Slovo3.jpg',
        title: 'Будинок «Слово» з висоти пташиного польоту',
        description: 'Будинок був спроєктований Михайлом Дашкевичем у 1927-1928 роках. Його унікальна форма у вигляді літери "С" символізувала єднання творчих сил українського народу.',
        fact: 'У будинку мешкало понад 60 родин української творчої інтелігенції, серед яких були письменники, поети, актори та художники.'
    },
    {
        img: '/home/user23se47/Стільниця/будинок слова/img/Slovo1.jpg',
        title: 'Меморіальна дошка мешканців',
        description: 'На меморіальній дошці увічнено імена всіх мешканців будинку, більшість з яких стали жертвами сталінських репресій у 1930-х роках.',
        fact: 'З 66 мешканців будинку 36 були репресовані, з них 25 розстріляні.'
    },
    {
        img: '/home/user23se47/Стільниця/будинок слова/img/05-45-house-word-historical-photo-03.jpg',
        title: 'Фасад будинку «Слово»',
        description: 'Будинок побудований у стилі, що поєднує модерн і конструктивізм. Його архітектура відображала прагнення нової України до прогресу.',
        fact: 'Будинок мав усі сучасні зручності того часу: центральне опалення, ванни, електрику та навіть лівт.'
    },
    {
        img: '/home/user23se47/Стільниця/будинок слова/img/остап.jpeg',
        title: 'Остап Вишня (1889-1956)',
        description: 'Класик української гумористики, автор знаменитих "Усмішок" та "Мандрівок в країну електрифікації". Був репресований у 1933 році.',
        fact: 'Остап Вишня провів 16 років у таборах, але вижив і після звільнення продовжив творчу діяльність.'
    },
    {
        img: '/home/user23se47/Стільниця/будинок слова/img/хви.jpeg',
        title: 'Микола Хвильовий (1893-1933)',
        description: 'Український прозаїк, поет та публіцист. Автор знаменитих "Камо грядеші" та памфлетів проти русифікації української культури.',
        fact: 'Хвильовий покінчив життя самогубством 13 травня 1933 року, передбачаючи наближення масових репресій.'
    },
    {
        img: '/home/user23se47/Стільниця/будинок слова/img/ку.jpeg',
        title: 'Микола Куліш (1892-1937)',
        description: 'Видатний український драматург, автор п\'єс "Народний Малахій", "Мина Мазайло", "Патетична соната". Розстріляний у 1937 році.',
        fact: 'П\'єси Куліша ставилися в театрах по всій Україні, але після арешту були заборонені на 50 років.'
    },
    {
        img: '/home/user23se47/Стільниця/будинок слова/img/стус.jpeg',
        title: 'Василь Стус (1938-1985)',
        description: 'Український поет-дисидент, перекладач, літературознавець. Представник покоління шістдесятників, який продовжив справу розстріляного відродження.',
        fact: 'Стус тричі заарештовував КДБ і загинув у таборі за 6 місяців до початку перебудови.'
    },
    {
        img: '/home/user23se47/Стільниця/будинок слова/img/дзюба.jpeg',
        title: 'Іван Дзюба (нар. 1931)',
        description: 'Літературознавець, критик, дисидент. Автор книги "Інтернаціоналізм чи русифікація?", яка стала маніфестом українського національного руху.',
        fact: 'Дзюба був репресований у 1972 році за участь у правозахисному русі, але вижив і після незалежності став міністром культури України.'
    },
    {
        img: '/home/user23se47/Стільниця/будинок слова/img/книга.jpeg',
        title: 'Книга «Слово про будинок "Слово"»',
        description: 'Документальна книга про історію будинку та його мешканців, написана Юрієм Шаповалом. Містить унікальні фотографії та спогади.',
        fact: 'Книга була видана лише у 1988 році, після 55 років замовчування історії будинку.'
    },
    {
        img: '/home/user23se47/Стільниця/будинок слова/img/док.jpeg',
        title: 'Документи репресій 1930-х',
        description: 'Архівні матеріали про арешти мешканців будинку "Слово" та інших представників української інтелігенції.',
        fact: 'Багато документів були розсекречені лише після здобуття Україною незалежності у 1991 році.'
    },
    {
        img: '/home/user23se47/Стільниця/будинок слова/img/мем.jpeg',
        title: 'Меморіал розстріляного відродження',
        description: 'Пам\'ятник жертвам сталінських репресій',
        fact: 'Меморіал був відкритий у 1990 році на честь всіх репресованих митців'
    },
    {
        img: '/home/user23se47/Стільниця/будинок слова/img/могили.jpeg',
        title: 'Могили репресованих письменників',
        description: 'Місця поховань жертв політичних репресій',
        fact: 'Багато могил досі невідомі, родини не отримували інформацію про місця поховань'
    },
    {
        img: '/home/user23se47/Стільниця/будинок слова/img/музей.jpeg',
        title: 'Музей українських письменників',
        description: 'Експозиція присвячена розстріляному відродженню',
        fact: 'Музей містить унікальні експонати, документи та особисті речі письменників'
    }
];

const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

if (filterBtns.length > 0 && galleryItems.length > 0) {
    try {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter;

                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                galleryItems.forEach((item, index) => {
                    setTimeout(() => {
                        if (filter === 'all' || item.dataset.category === filter) {
                            item.classList.remove('hide');
                            item.style.animation = 'itemAppear 0.5s ease forwards';
                        } else {
                            item.classList.add('hide');
                        }
                    }, index * 50);
                });
            });
        });
    } catch (error) {
        console.error('Filter error:', error);
    }
}

let currentImageIndex = 0;
const modal = document.getElementById('galleryModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalFact = document.getElementById('modalFact');

const modalElementsExist = modal && modalImage && modalTitle && modalDescription && modalFact;

function openModal(index) {
    if (modalElementsExist && index >= 0 && index < galleryData.length) {
        try {
            currentImageIndex = index;
            showImage(index);
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        } catch (error) {
            console.error('Modal open error:', error);
        }
    }
}

function closeModal() {
    if (modal) {
        try {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        } catch (error) {
            console.error('Modal close error:', error);
        }
    }
}

function showImage(index) {
    if (modalElementsExist && index >= 0 && index < galleryData.length) {
        try {
            const data = galleryData[index];
            modalImage.src = data.img;
            modalImage.alt = data.title;
            modalTitle.textContent = data.title;
            modalDescription.textContent = data.description;
            modalFact.textContent = data.fact;
        } catch (error) {
            console.error('Show image error:', error);
        }
    }
}

function nextImage() {
    if (galleryData.length > 0) {
        currentImageIndex = (currentImageIndex + 1) % galleryData.length;
        showImage(currentImageIndex);
    }
}

function prevImage() {
    if (galleryData.length > 0) {
        currentImageIndex = (currentImageIndex - 1 + galleryData.length) % galleryData.length;
        showImage(currentImageIndex);
    }
}

if (modal) {
    try {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    } catch (error) {
        console.error('Modal click error:', error);
    }
}

document.addEventListener('keydown', (e) => {
    if (modal && modal.classList.contains('active')) {
        try {
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        } catch (error) {
            console.error('Keyboard navigation error:', error);
        }
    }
});
const quizData = [
    {
        type: 'single',
        question: 'В якому році був побудований будинок "Слово"?',
        options: ['1925-1926', '1927-1928', '1930-1931', '1933-1934'],
        correct: 1,
        fact: 'Будинок "Слово" був побудований у 1927-1928 роках за проектом архітектора Михайла Дашкевича.'
    },
    {
        type: 'single',
        question: 'Яку форму має будинок "Слово" у плані?',
        options: ['Літери "У"', 'Літери "С"', 'Круга', 'Квадрата'],
        correct: 1,
        fact: 'Будинок має форму літери "С" - першої літери слова "Слово", що символізувало єдність української культури.'
    },
    {
        type: 'single',
        question: 'Скільки родин мешкало в будинку "Слово"?',
        options: ['Близько 30', 'Близько 50', 'Більше 60', 'Близько 100'],
        correct: 2,
        fact: 'У будинку мешкало понад 66 родин української творчої інтелігенції.'
    },
    {
        type: 'single',
        question: 'Хто автор гасла "Геть від Москви"?',
        options: ['Павло Тичина', 'Микола Хвильовий', 'Остап Вишня', 'Микола Куліш'],
        correct: 1,
        fact: 'Це гасло висунув Микола Хвильовий у своїх памфлетах, закликаючи українську культуру орієнтуватися на Європу.'
    },
    {
        type: 'single',
        question: 'В якому році почалися масові репресії проти мешканців будинку?',
        options: ['1929', '1933', '1935', '1937'],
        correct: 1,
        fact: 'Перша хвиля репресій розпочалася у травні 1933 року з арешту Михайла Ялового.'
    },
    {
        type: 'single',
        question: 'Як Іван Багряний назвав будинок "Слово"?',
        options: ['Дім терору', 'Крематорій', 'Чорна могила', 'Темниця'],
        correct: 1,
        fact: 'Іван Багряний у своїх творах називав будинок "Крематорієм" через масові репресії його мешканців.'
    },
    {
        type: 'single',
        question: 'Скільки мешканців будинку було репресовано?',
        options: ['Близько 20', '36', 'Близько 50', 'Всі мешканці'],
        correct: 1,
        fact: 'З 66 мешканців будинку 36 були репресовані, з них 25 розстріляні.'
    },
    {
        type: 'single',
        question: 'Коли Микола Хвильовий покінчив життя самогубством?',
        options: ['1932', '13 травня 1933', '1934', '1937'],
        correct: 1,
        fact: 'Хвильовий застрелився 13 травня 1933 року, передбачаючи масові репресії.'
    },
    {
        type: 'single',
        question: 'Яку збірку НЕ написав Павло Тичина?',
        options: ['Сонячні кларнети', 'Камо грядеші', 'Плуг', 'Вітер з України'],
        correct: 1,
        fact: '"Камо грядеші" написав Микола Хвильовий, а не Павло Тичина.'
    },
    {
        type: 'single',
        question: 'Хто був засновником українського футуризму?',
        options: ['Микола Бажан', 'Михайль Семенко', 'Павло Тичина', 'Остап Вишня'],
        correct: 1,
        fact: 'Михайль Семенко заснував український футуризм і створив літературні об\'єднання "Кверофутуризм" та "Аспанфут".'
    },
    {
        type: 'single',
        question: 'Який драматург написав п\'єсу "Мина Мазайло"?',
        options: ['Микола Куліш', 'Іван Кочерга', 'Олександр Корнійчук', 'Володимир Винниченко'],
        correct: 0,
        fact: 'Микола Куліш написав знамениту п\'єсу "Мина Мазайло", яка була заборонена після його арешту.'
    },
    {
        type: 'single',
        question: 'Який архітектурний стиль поєднує будинок "Слово"?',
        options: ['Бароко і класицизм', 'Модерн і конструктивізм', 'Ренесанс і готика', 'Ампір і рококо'],
        correct: 1,
        fact: 'Будинок побудований у стилі, що поєднує модерн і конструктивізм, відображаючи прагнення до прогресу.'
    },
    {
        type: 'single',
        question: 'Скільки років Остап Вишня провів у таборах?',
        options: ['5 років', '10 років', '16 років', '20 років'],
        correct: 2,
        fact: 'Остап Вишня провів 16 років у таборах, але вижив і після звільнення продовжив творчу діяльність.'
    },
    {
        type: 'single',
        question: 'Хто написав книгу "Інтернаціоналізм чи русифікація?"',
        options: ['Василь Стус', 'Іван Дзюба', 'В\'ячеслав Чорновіл', 'Іван Світличний'],
        correct: 1,
        fact: 'Іван Дзюба написав цю книгу у 1965 році, вона стала маніфестом українського національного руху.'
    },
    {
        type: 'single',
        question: 'В якому році був заарештований Василь Стус востаннє?',
        options: ['1965', '1972', '1980', '1985'],
        correct: 2,
        fact: 'Василь Стус був заарештований втретє у 1980 році і загинув у таборі у 1985 році.'
    },
    {
        type: 'matching',
        question: 'Співвіднесіть письменників з їх творами:',
        pairs: [
            { left: 'Микола Хвильовий', right: 'Камо грядеші' },
            { left: 'Остап Вишня', right: 'Усмішки' },
            { left: 'Микола Куліш', right: 'Народний Малахій' },
            { left: 'Павло Тичина', right: 'Сонячні кларнети' }
        ],
        fact: 'Кожен з цих письменників створив унікальні твори, що стали класикою української літератури.'
    },
    {
        type: 'matching',
        question: 'Співвіднесіть шістдесятників з їх діяльністю:',
        pairs: [
            { left: 'Василь Стус', right: 'Поет-дисидент' },
            { left: 'Іван Дзюба', right: 'Літературознавець' },
            { left: 'В\'ячеслав Чорновіл', right: 'Політичний діяч' },
            { left: 'Іван Світличний', right: 'Перекладач' }
        ],
        fact: 'Шістдесятники продовжили справу розстріляного відродження, борючись за права українського народу.'
    },
    {
        type: 'matching',
        question: 'Співвіднесіть письменників з їх роками життя:',
        pairs: [
            { left: 'Микола Хвильовий', right: '1893-1933' },
            { left: 'Остап Вишня', right: '1889-1956' },
            { left: 'Павло Тичина', right: '1891-1967' },
            { left: 'Василь Стус', right: '1938-1985' }
        ],
        fact: 'Ці дати відображають трагічну долю українських митців у XX столітті.'
    },
    {
        type: 'matching',
        question: 'Співвіднесіть терміни з його значенням:',
        pairs: [
            { left: 'Розстріляне відродження', right: 'Покоління 1920-30-х років' },
            { left: 'Шістдесятники', right: 'Покоління 1960-х років' },
            { left: 'Футуризм', right: 'Літературний напрямок' },
            { left: 'Репресії', right: 'Політичні переслідування' }
        ],
        fact: 'Ці терміни є ключовими для розуміння української історії XX століття.'
    },
    {
        type: 'single',
        question: 'Який поет переклав твори Шекспіра українською?',
        options: ['Григорій Епік', 'Павло Тичина', 'Остап Вишня', 'Микола Бажан'],
        correct: 0,
        fact: 'Григорій Епік був визначним перекладачем, який переклав твори Шекспіра та інших класиків.'
    },
    {
        type: 'single',
        question: 'В якому місті знаходиться будинок "Слово"?',
        options: ['Києві', 'Львові', 'Харкові', 'Одесі'],
        correct: 2,
        fact: 'Будинок "Слово" розташований у Харкові, який був столицею України до 1934 року.'
    },
    {
        type: 'single',
        question: 'Коли була видана книга "Слово про будинок \'Слово\'"?',
        options: ['1960', '1972', '1988', '1991'],
        correct: 2,
        fact: 'Книга була видана лише у 1988 році, після 55 років замовчування історії будинку.'
    },
    {
        type: 'single',
        question: 'Яке літературне об\'єднання створив Михайль Семенко?',
        options: ['Пролеткульт', 'Кверофутуризм', 'Плуг', 'Молодняк'],
        correct: 1,
        fact: 'Семенко створив авангардне об\'єднання "Кверофутуризм", яке експериментувало з формою та мовою.'
    },
    {
        type: 'single',
        question: 'Скільки літературних організацій існувало в Україні у 1920-ті роки?',
        options: ['Близько 5', 'Близько 10', 'Понад 20', 'Понад 50'],
        correct: 2,
        fact: 'У 1920-ті роки в Україні існувало понад 20 літературних організацій різних напрямків.'
    },
    {
        type: 'matching',
        question: 'Співвіднесіть п\'єси Миколи Куліша:',
        pairs: [
            { left: 'Народний Малахій', right: 'Сатира на бюрократію' },
            { left: 'Мина Мазайло', right: 'Про національне питання' },
            { left: 'Патетична соната', right: 'Про революцію' },
            { left: '97', right: 'Про репресії' }
        ],
        fact: 'П\'єси Куліша були заборонені після його арешту і не ставилися протягом 50 років.'
    },
    {
        type: 'single',
        question: 'Коли Харків був столицею України?',
        options: ['1917-1934', '1919-1939', '1920-1932', '1922-1934'],
        correct: 0,
        fact: 'Харків був столицею УРСР з 1917 по 1934 рік, коли столицю перенесли до Києва.'
    },
    {
        type: 'single',
        question: 'Який відсоток мешканців будинку "Слово" було репресовано?',
        options: ['Близько 30%', 'Близько 50%', 'Більше 54%', 'Близько 75%'],
        correct: 2,
        fact: 'Більше 54% (36 з 66) мешканців будинку були репресовані, що свідчить про масштаби терору.'
    },
    {
        type: 'single',
        question: 'Що означає термін "розстріляне відродження"?',
        options: ['Відродження після війни', 'Покоління репресованих митців', 'Літературний напрямок', 'Назва організації'],
        correct: 1,
        fact: 'Термін "розстріляне відродження" означає покоління українських митців 1920-30-х років, знищених репресіями.'
    },
    {
        type: 'single',
        question: 'Хто з письменників вижив під час репресій, але змушений був співпрацювати з режимом?',
        options: ['Остап Вишня', 'Павло Тичина', 'Микола Бажан', 'Всі вищеперелічені'],
        correct: 3,
        fact: 'Багато письменників, які вижили, були змушені співпрацювати з радянським режимом для виживання.'
    },
    {
        type: 'matching',
        question: 'Співвіднесіть події з роками:',
        pairs: [
            { left: 'Побудова будинку', right: '1927-1928' },
            { left: 'Початок репресій', right: '1933' },
            { left: 'Смерть Хвильового', right: '1933' },
            { left: 'Видання книги про будинок', right: '1988' }
        ],
        fact: 'Ці події маркують ключові моменти в історії будинку "Слово" та його мешканців.'
    }
];

let currentQuestion = 0;
let userAnswers = [];
let matchingAnswers = {};

const quizIntro = document.getElementById('quizIntro');
const quizSection = document.getElementById('quizSection');
const quizResults = document.getElementById('quizResults');
const answersReview = document.getElementById('answersReview');

function startQuiz() {
    if (quizIntro && quizSection) {
        try {
            quizIntro.style.display = 'none';
            quizSection.style.display = 'block';
            showQuestion(0);
        } catch (error) {
            console.error('Start quiz error:', error);
        }
    }
}

function showQuestion(index) {
    if (index < 0 || index >= quizData.length) {
        return;
    }

    try {
        currentQuestion = index;
        const question = quizData[index];
        const container = document.getElementById('quizContainer');
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const funFact = document.getElementById('funFact');

        if (!container || !progressFill || !progressText || !prevBtn || !nextBtn || !funFact) {
            return;
        }

        const progress = ((index + 1) / quizData.length) * 100;
        progressFill.style.width = progress + '%';
        progressText.textContent = `Питання ${index + 1} з ${quizData.length}`;

        funFact.style.display = 'none';

        let html = `
            <div class="question-number">Питання ${index + 1}</div>
            <div class="question-text">${question.question}</div>
        `;

        if (question.type === 'single') {
            html += '<div class="options-container">';
            question.options.forEach((option, i) => {
                const isSelected = userAnswers[index] === i;
                html += `
                    <div class="option ${isSelected ? 'selected' : ''}" onclick="selectOption(${i})">
                        <span>${option}</span>
                    </div>
                `;
            });
            html += '</div>';
        } else if (question.type === 'matching') {
            html += '<div class="matching-container">';
            html += '<div class="matching-column">';
            html += '<h4>Питання</h4>';
            question.pairs.forEach((pair, i) => {
                const isSelected = matchingAnswers.leftSelected === i;
                html += `
                    <div class="matching-item ${isSelected ? 'selected' : ''}" onclick="selectLeft(${i})">
                        ${pair.left}
                    </div>
                `;
            });
            html += '</div>';

            html += '<div class="matching-column">';
            html += '<h4>Відповіді</h4>';
            const shuffledRights = [...question.pairs].sort(() => Math.random() - 0.5);
            shuffledRights.forEach((pair, i) => {
                const isSelected = matchingAnswers.rightSelected === i;
                html += `
                    <div class="matching-item ${isSelected ? 'selected' : ''}" onclick="selectRight(${i}, '${pair.right.replace(/'/g, "\\'")}')">
                        ${pair.right}
                    </div>
                `;
            });
            html += '</div>';
            html += '</div>';

            if (!userAnswers[index]) {
                userAnswers[index] = [];
            }
        }

        container.innerHTML = html;

        prevBtn.disabled = index === 0;
        nextBtn.textContent = index === quizData.length - 1 ? 'Завершити' : 'Далі';
    } catch (error) {
        console.error('Show question error:', error);
    }
}

function selectOption(optionIndex) {
    try {
        userAnswers[currentQuestion] = optionIndex;
        showQuestion(currentQuestion);

        const question = quizData[currentQuestion];
        const factText = document.getElementById('factText');
        const funFact = document.getElementById('funFact');

        if (factText && funFact) {
            factText.textContent = question.fact;
            funFact.style.display = 'block';
        }
    } catch (error) {
        console.error('Select option error:', error);
    }
}

function selectLeft(index) {
    try {
        if (matchingAnswers.leftSelected === index) {
            matchingAnswers.leftSelected = null;
        } else {
            matchingAnswers.leftSelected = index;

            if (matchingAnswers.rightSelected !== null && matchingAnswers.rightSelected !== undefined) {
                if (!userAnswers[currentQuestion]) {
                    userAnswers[currentQuestion] = [];
                }
                const question = quizData[currentQuestion];
                if (question && question.pairs[index]) {
                    userAnswers[currentQuestion].push({
                        left: question.pairs[index].left,
                        right: matchingAnswers.rightValue
                    });
                }

                matchingAnswers = {};
                showQuestion(currentQuestion);

                if (question && userAnswers[currentQuestion].length === question.pairs.length) {
                    const factText = document.getElementById('factText');
                    const funFact = document.getElementById('funFact');
                    if (factText && funFact) {
                        factText.textContent = question.fact;
                        funFact.style.display = 'block';
                    }
                }
            }
        }
        showQuestion(currentQuestion);
    } catch (error) {
        console.error('Select left error:', error);
    }
}

function selectRight(index, value) {
    try {
        if (matchingAnswers.rightSelected === index) {
            matchingAnswers.rightSelected = null;
            matchingAnswers.rightValue = null;
        } else {
            matchingAnswers.rightSelected = index;
            matchingAnswers.rightValue = value;

            if (matchingAnswers.leftSelected !== null && matchingAnswers.leftSelected !== undefined) {
                if (!userAnswers[currentQuestion]) {
                    userAnswers[currentQuestion] = [];
                }
                const question = quizData[currentQuestion];
                if (question && question.pairs[matchingAnswers.leftSelected]) {
                    userAnswers[currentQuestion].push({
                        left: question.pairs[matchingAnswers.leftSelected].left,
                        right: value
                    });
                }

                matchingAnswers = {};
                showQuestion(currentQuestion);

                if (question && userAnswers[currentQuestion].length === question.pairs.length) {
                    const factText = document.getElementById('factText');
                    const funFact = document.getElementById('funFact');
                    if (factText && funFact) {
                        factText.textContent = question.fact;
                        funFact.style.display = 'block';
                    }
                }
            }
        }
        showQuestion(currentQuestion);
    } catch (error) {
        console.error('Select right error:', error);
    }
}

function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        showQuestion(currentQuestion + 1);
    } else {
        finishQuiz();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        showQuestion(currentQuestion - 1);
    }
}
function finishQuiz() {
    if (!quizSection || !quizResults) {
        return;
    }

    try {
        let correctCount = 0;

        quizData.forEach((question, index) => {
            if (question.type === 'single') {
                if (userAnswers[index] === question.correct) {
                    correctCount++;
                }
            } else if (question.type === 'matching') {
                let allCorrect = true;
                const userPairs = userAnswers[index] || [];

                if (userPairs.length !== question.pairs.length) {
                    allCorrect = false;
                } else {
                    question.pairs.forEach(pair => {
                        const found = userPairs.find(up =>
                            up.left === pair.left && up.right === pair.right
                        );
                        if (!found) allCorrect = false;
                    });
                }

                if (allCorrect) correctCount++;
            }
        });

        const percentage = Math.round((correctCount / quizData.length) * 100);
        const incorrectCount = quizData.length - correctCount;

        let grade;
        if (percentage >= 90) grade = '12';
        else if (percentage >= 82) grade = '11';
        else if (percentage >= 74) grade = '10';
        else if (percentage >= 64) grade = '9';
        else if (percentage >= 54) grade = '8';
        else if (percentage >= 44) grade = '7';
        else if (percentage >= 34) grade = '6';
        else grade = 'Незадовільно';

        quizSection.style.display = 'none';
        quizResults.style.display = 'block';

        const resultsIcon = document.getElementById('resultsIcon');
        const resultsTitle = document.getElementById('resultsTitle');
        const circle = document.getElementById('scoreCircle');
        const scorePercentEl = document.getElementById('scorePercent');
        const correctCountEl = document.getElementById('correctCount');
        const incorrectCountEl = document.getElementById('incorrectCount');
        const gradeValueEl = document.getElementById('gradeValue');
        const resultsMessage = document.getElementById('resultsMessage');

        if (!resultsIcon || !resultsTitle || !circle || !scorePercentEl || !correctCountEl || !incorrectCountEl || !gradeValueEl || !resultsMessage) {
            return;
        }

        if (percentage >= 90) {
            resultsIcon.textContent = '🏆';
        } else if (percentage >= 70) {
            resultsIcon.textContent = '⭐';
        } else if (percentage >= 50) {
            resultsIcon.textContent = '👍';
        } else {
            resultsIcon.textContent = '📚';
        }

        if (percentage >= 90) {
            resultsTitle.textContent = 'Відмінний результат!';
        } else if (percentage >= 70) {
            resultsTitle.textContent = 'Чудова робота!';
        } else if (percentage >= 50) {
            resultsTitle.textContent = 'Гарний результат!';
        } else {
            resultsTitle.textContent = 'Потрібно попрацювати більше';
        }

        const circumference = 2 * Math.PI * 90;
        const offset = circumference - (percentage / 100) * circumference;

        setTimeout(() => {
            circle.style.transition = 'stroke-dashoffset 2s ease';
            circle.style.strokeDashoffset = offset;
        }, 100);

        let currentPercent = 0;
        const interval = setInterval(() => {
            currentPercent++;
            scorePercentEl.textContent = currentPercent + '%';
            if (currentPercent >= percentage) {
                clearInterval(interval);
            }
        }, 20);

        correctCountEl.textContent = correctCount;
        incorrectCountEl.textContent = incorrectCount;
        gradeValueEl.textContent = grade;

        if (percentage >= 90) {
            resultsMessage.textContent = 'Ви чудово знаєте історію розстріляного відродження! Ваші знання вражають.';
        } else if (percentage >= 70) {
            resultsMessage.textContent = 'Ви маєте хороші знання про розстріляне відродження. Продовжуйте вивчати цю важливу тему!';
        } else if (percentage >= 50) {
            resultsMessage.textContent = 'У вас є базові знання про розстріляне відродження. Рекомендуємо поглибити свої знання.';
        } else {
            resultsMessage.textContent = 'Вам потрібно більше дізнатися про розстріляне відродження. Рекомендуємо відвідати нашу галерею та прочитати більше матеріалів.';
        }
    } catch (error) {
        console.error('Finish quiz error:', error);
    }
}

function showAnswers() {
    if (!quizResults || !answersReview) {
        return;
    }

    try {
        quizResults.style.display = 'none';
        answersReview.style.display = 'block';

        const container = document.getElementById('answersContainer');
        if (!container) {
            return;
        }

        let html = '';

        quizData.forEach((question, index) => {
            const isCorrect = checkAnswer(question, userAnswers[index]);

            html += `
                <div class="answer-review-item ${isCorrect ? 'correct' : 'incorrect'}">
                    <div class="review-question">Питання ${index + 1}: ${question.question}</div>
            `;

            if (question.type === 'single') {
                html += `
                    <div class="review-answer">
                        <span class="review-label">Ваша відповідь:</span>
                        <span class="review-value ${isCorrect ? '' : 'user-incorrect'}">
                            ${userAnswers[index] !== undefined && question.options[userAnswers[index]] ? question.options[userAnswers[index]] : 'Не відповіли'}
                        </span>
                    </div>
                `;

                if (!isCorrect) {
                    html += `
                        <div class="review-answer">
                            <span class="review-label">Правильна відповідь:</span>
                            <span class="review-value correct-answer">${question.options[question.correct]}</span>
                        </div>
                    `;
                }
            } else if (question.type === 'matching') {
                html += '<div class="review-answer">';
                html += '<span class="review-label">Ваші відповіді:</span>';
                const userPairs = userAnswers[index] || [];
                userPairs.forEach(pair => {
                    const correct = question.pairs.find(p => p.left === pair.left && p.right === pair.right);
                    html += `<div class="review-value ${correct ? '' : 'user-incorrect'}">${pair.left} → ${pair.right}</div>`;
                });
                html += '</div>';

                if (!isCorrect) {
                    html += '<div class="review-answer">';
                    html += '<span class="review-label">Правильні відповіді:</span>';
                    question.pairs.forEach(pair => {
                        html += `<div class="review-value correct-answer">${pair.left} → ${pair.right}</div>`;
                    });
                    html += '</div>';
                }
            }

            html += `
                    <div class="review-status ${isCorrect ? 'correct' : 'incorrect'}">
                        ${isCorrect ? '✓ Правильно' : '✗ Неправильно'}
                    </div>
                </div>
            `;
        });

        container.innerHTML = html;
        window.scrollTo(0, 0);
    } catch (error) {
        console.error('Show answers error:', error);
    }
}

function checkAnswer(question, userAnswer) {
    if (question.type === 'single') {
        return userAnswer === question.correct;
    } else if (question.type === 'matching') {
        const userPairs = userAnswer || [];

        if (userPairs.length !== question.pairs.length) {
            return false;
        }

        let allCorrect = true;
        question.pairs.forEach(pair => {
            const found = userPairs.find(up =>
                up.left === pair.left && up.right === pair.right
            );
            if (!found) allCorrect = false;
        });

        return allCorrect;
    }
    return false;
}

function backToResults() {
    if (answersReview && quizResults) {
        try {
            answersReview.style.display = 'none';
            quizResults.style.display = 'block';
            window.scrollTo(0, 0);
        } catch (error) {
            console.error('Back to results error:', error);
        }
    }
}

function restartQuiz() {
    if (quizResults && quizIntro) {
        try {
            currentQuestion = 0;
            userAnswers = [];
            matchingAnswers = {};

            quizResults.style.display = 'none';
            quizIntro.style.display = 'block';

            const circle = document.getElementById('scoreCircle');
            if (circle) {
                circle.style.transition = 'none';
                circle.style.strokeDashoffset = '565.48';
            }

            window.scrollTo(0, 0);
        } catch (error) {
            console.error('Restart quiz error:', error);
        }
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    try {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    } catch (error) {
        console.error('Smooth scroll error:', error);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    try {
        setTimeout(() => {
            document.querySelectorAll('.fade-in').forEach(el => {
                el.classList.add('visible');
            });
        }, 100);

        setTimeout(() => {
            document.querySelectorAll('.fade-in-delay').forEach(el => {
                el.classList.add('visible');
            });
        }, 400);

        setTimeout(() => {
            document.querySelectorAll('.fade-in-delay-2').forEach(el => {
                el.classList.add('visible');
            });
        }, 700);
    } catch (error) {
        console.error('Initial animations error:', error);
    }
});

window.addEventListener('scroll', () => {
    try {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-contacts, .hero-gallery, .hero-quiz');

        parallaxElements.forEach(el => {
            if (el) {
                const speed = 0.5;
                el.style.transform = `translateY(${scrolled * speed}px)`;
            }
        });
    } catch (error) {
        console.warn('Parallax error:', error);
    }
});

document.querySelectorAll('.contact-card').forEach(card => {
    try {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.03)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-10px) scale(1)';
        });
    } catch (error) {
        console.error('Contact card animation error:', error);
    }
});

document.querySelectorAll('.social-card').forEach(card => {
    try {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.social-icon svg');
            if (icon) {
                icon.style.transform = 'scale(1.3) rotate(360deg)';
            }
        });

        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.social-icon svg');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    } catch (error) {
        console.error('Social card animation error:', error);
    }
});
