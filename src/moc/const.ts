/* eslint-disable */
/* Вопросы с ответами и изменение счета */
import { TResults, TQuestion } from 'components/models';

export const Questions: TQuestion[] = [
    [
        "Ваша любимая планета в мире StarCraft",
        ["Слейн", "Айур", "Чар", "Мар-Сара", "Зерус"],
        [
            "taldarim++",
            "protoss++",
            "zerg++",
            "terran++",
            "primal++"
        ]
    ],
    [
        "Я река…",
        ["А я звёздный охотник", "Враги плывущие обломки", "Ты моё море"],
        [
            "protoss++; terran--",
            "primal++; protoss--; terran--",
            "terran++; protoss--"
        ]
    ],
    [
        "С кем вы поговорите на копье Адуна?",
        ["С Абатуром", "Со Свонном", "С Караксом"],
        [
            "protoss--",
            "protoss--",
            "protoss++"
        ]
    ],

    [
        "Перед вами хорошо укреплённый терранский бункер",
        ["Я ассимилирую эссенцию тиранозора, который обитает в этих местах и эволюционирую", "Запрошу орбитальный удар если они первые проявят агрессию", "Подойду поговорить с морпехами"],
        [
            "primal++; protoss--; terran--",
            "protoss++; terran--",
            "terran++; protoss--"
        ]
    ],
    [
        "Как насчёт свалить со мной, ковбой?",
        ["Чёрт, давно пора"],
        [
            "terran++"
        ]
    ],
    [
        "На вас напали",
        ["Нам нужны роевики, споровики и плёточники", "Нужно вызвать кайдариновые монолиты и фотонные пушки", "Возвести планетарную крепость, бункеры и подвести осадные танки"],
        [
            "zerg++; protoss--; terran--",
            "protoss++; terran--; zerg--",
            "terran++; protoss--; zerg--"
        ]
    ],
    [
        "Королева приказывает вам обрушить свой гнев на миры доминиона",
        ["Должен подчиниться", "Пока она собирает, я следую", "Её псионная сила на меня не действует"],
        [
            "zerg++; protoss--",
            "primal++; protoss--",
            "protoss++; zerg--"
        ]
    ],
    [
        "Перед вами высший тамплиер",
        ["Сильная эссенция, но я не могу её собрать", "Уничтожить протоссов", "Стать архонтом", "Спросить как дела у Артаниса"],
        [
            "primal++; protoss--; terran--",
            "zerg++; protoss--; terran--",
            "protoss++; terran--; zerg--",
            "terran++; protoss--; zerg--"
        ]
    ],
    [
        "Вы заметили морпеха который не подчиняется вашему приказу",
        ["Уничтожить мимикрида", "Сделать ему выговор"],
        [
            "terran++",
            "terran--"
        ]
    ],
    [
        "На вас движется стая саранчидов",
        ["Много эссенции, можно собрать", "Приказать им лететь дальше", "Попытаться уничтожить фениксами пока они в воздухе"],
        [
            "primal++; protoss--",
            "zerg++; protoss--",
            "protoss++; zerg--"
        ]
    ],
    [
        "Вы видите изначальный омут рождения, что вы сделаете?",
        ["Соберу много эссенции", "Моё тело не выдержит такую мощь", "Попытаюсь уничтожить это место"],
        [
            "primal++; protoss--",
            "zerg++; protoss--",
            "protoss++; zerg--"
        ]
    ],
    [
        "Вы сильно устали сегодня",
        ["Пойду в бар у Джорея", "Рой не знает усталости", "Слабые, падут первыми"],
        [
            "terran++; zerg--",
            "zerg++; terran--",
            "taldarim++; terran--; zerg--"
        ]
    ],
    [
        "Перед вами иерарх протоссов",
        ["Вызвать на Рак-шир", "Поприветствовать фразой «Эн Таро Тассадар»", "Отправить рой в атаку"],
        [
            "taldarim++; zerg--",
            "protoss++; zerg--",
            "zerg++; protoss--"
        ]
    ],
    [
        "Зератул и Воразун",
        ["Связаны Кхалой", "Муж и жена", "Тёмные тамплиеры", "Новый вид зергов"],
        [
            "protoss--",
            "protoss--",
            "protoss++",
            "protoss--"
        ]
    ],
    [
        "В этих местах много источников терразин",
        ["Защищать месторождения от инопланетных захватчиков", "Добыть как можно больше, пока эти Талдаримские живчики не успели ничего понять"],
        [
            "taldarim++; terran--",
            "terran++"
        ]
    ],
    [
        "В лаборатории ставят опыты над бруталиском",
        ["Бруталиск – вершина эволюции, нужен рою", "Поинтересоваться у парней, что интересного они узнали", "Бруталиск очень опасен лучше уничтожить его вместе с терранской лабораторией"],
        [
            "zerg++; protoss--; terran--",
            "terran++; protoss--; zerg--",
            "protoss++; terran--; zerg--"
        ]
    ],
    [
        "Как зовут Свонна?",
        ["Габриэль", "Джеймс", "Рори"],
        [
            "terran--",
            "terran--",
            "terran++"
        ]
    ],
    [
        "Феникс - ",
        ["Тамплиер", "Неразим", "Чистильщик", "Талдарим"],
        [
            "protoss--",
            "protoss--",
            "protoss++",
            "protoss--"
        ]
    ],
    [
        "Вам необходимо догнать материнский корабль протоссов",
        ["Использую гиперпрыжок", "Перехвачу его, внедрив паразит", "Отправлю челнок с посланием"],
        [
            "terran++; zerg--; protoss--",
            "zerg++; protoss--; terran--",
            "protoss++; terran--; zerg--"
        ]
    ],
    [
        "Зерги заразили командные центры Вирофагами",
        ["Нужно уничтожить всех, чтобы эпидемия не распространилась", "Сжечь только зараженные строения и спасти как можно больше людей"],
        [
            "protoss++; terran--",
            "terran++; protoss--"
        ]
    ],
    [
        "Пустота…",
        ["Лучший друг человека", "Холодна"],
        [
            "protoss--",
            "protoss++"
        ]
    ],
    [
        "Как вы поприветствуете Джеймса Рейнора",
        ["Друг Рейнор", "Привет, ковбой", "Мне нужна твоя эссенция"],
        [
            "protoss++; terran--",
            "terran++; protoss--",
            "primal++; protoss--; terran--"
        ]
    ],
    [
        "Вы собрали много кредитов на продаже терразина",
        ["Нанять лучших головорезов доминиона", "Усовершенствовать технологии", "Отправить их в фонд Мёбиуса для изучения гибридов"],
        [
            "terran++",
            "terran++",
            "terran--"
        ]
    ],
    [
        "Амун собирается уничтожить Айур",
        ["Помочь протоссам в битве", "Послать челноки на Шакурас и запросить помощь Золотой Армады", "Вызвать Флот Смерти и дать Амуну бой"],
        [
            "terran++; protoss--",
            "protoss++; zerg--",
            "taldarim++; zerg--"
        ]
    ],
    [
        "Зачем вы прилетели на Чар?",
        ["Выследить и убить королеву клинков", "Найти Керриган и убедить вернуться на Мар-Сару", "Искупаться в слизи"],
        [
            "protoss++; terran--; zerg--",
            "terran++; protoss--; zerg--",
            "zerg++; protoss--; terran--"
        ]
    ]
];
export const Results: TResults = {
    'zerg': {
        name: "Зерг",
        description: "Вы истинный зерг, чистота эссенции и служение во славу роя это ваше предназначение. Ваша стая захватила множество миров и теперь рой стал ещё сильней. Королева Клинков довольна вами, продолжайте и дальше служить ей. Вы уважаете протоссов, но не считаете что у них есть шанс сохраниться как вид. Ведь они не могут эволюционировать и в масштабах вселенной их раса обречена на вымирание. Тераны это биомасса, их эссенция может быть ассимилирована и использована во благо роя.",
        quote1: "-Понятие совершенства растяжимо. Можно стремиться, невозможно достичь. Совершенство, как цель, лишено смысла.",
        quote2: "-Смерть не имеет значения, важна только эссенция.",
        author: "(Абатур)",
        points: "100"
    },
    'primal': {
        name: "Изначальный зерг",
        description: "Всё что вас интересует – это Эссенция, чем её больше тем лучше для вас. Вы эволюционируете, адаптируетесь и подстраиваетесь под окружающую среду. Нет таких проблем, которые вы не решите. Благодаря постоянному сбору эссенции вы можете в любой момент измениться. Эссенция это ваш образ жизни. Так много видов эссенции. Сотни видов. И с каждым годом всё больше. Нужно её всю собрать.",
        quote1: "-Мне нужна эссенция. Эссенция это жизнь. Я жить без неё не могу.",
        quote2: "",
        author: "(Дехака)",
        points: "120"
    },
    'terran': {
        name: "Терран",
        description: "Вас не интересуют проблемы протоссов и зергов, вечная вражда и опустошение миров. Кровавый след, который тянется с незапамятных времён за этими враждующими расами затрагивает и терранов, как бы сильно вы не старались не вмешиваться. Избежать контакта с протоссами не получилось, но с ними можно договориться в отличии от зергов. Простые человеческие радости украшают вашу жизнь. Общение с друзьями, поход в бар с хорошей музыкой, отдых на природе. Что еще нужно человеку.",
        quote1: "-Не связывайтесь с ребятами с Мар-Сары.",
        quote2: "",
        author: "(Рейнор)",
        points: "90"
    },
    'infested': {
        name: "Заражённый терран",
        description: "Судя по всему вас заразили зерги, теперь вы служите рою. Но это не мешает вам мечтать о мести зергам.",
        quote1: "-Зараженные всегда поднимаются вновь.",
        quote2: "-Когда ОЗД вернется в сектор, от вас ничего не останется.",
        author: "(Стуков)",
        points: "160"
    },
    'protoss': {
        name: "Протосс",
        description: "Вы горды и безупречны. Честь ведёт вас сквозь пучину неприятностей, которые подстерегают ваш народ со времён войны со Сверхразумом. За Айур вы готовы сражаться до смерти. Все протоссы стремятся быть похожими на вас. У вашего народа вечная вражда с зергами, очищать миры от их скверны и уничтожать улей за ульем вот что является вашей первостепенной целью. Пока зерги не будут уничтожены, протоссы не смогут спать спокойно.",
        quote1: "-Сила в единстве.",
        quote2: "",
        author: "(Артанис)",
        points: "80"
    },
    'taldarim': {
        name: "Талдарим",
        description: "В былые времена вы служили Амуну, падшему Зел-Нага, сейчас же ваш народ обрёл свободу. После того как Аларак стал владыкой талдаримов победив Малаша в поединке Рак-Шир, он не просто изменил свой статус в цепи вознесения, но и привел талдаримов к мирному сосуществованию с другими народами протоссов. Теперь можно восстанавливать свои миры как один единый сильный народ. И ваши навыки будут очень полезны в этой непростой задаче.",
        quote1: "-Ты разговариваешь с владыкой.",
        quote2: "-Как ты можешь мне послужить?",
        author: "(Аларак)",
        points: "140"
    },
    'hybrid': {
        name: "Гибрид",
        description: "Чистота формы и чистота эссенции присутствует в вашем организме. Вы одно из немногих существ, которых стремились создать Зел-Нага. Доктор Наруд сумел воплотить все планы Зел-Нага в жизнь и теперь вы идеальное орудие. Не смотря на то что вы гибрид зерга и протосса вы не чувствуете симпатии к этим расам, а считаете высшей расой Гибридов.",
        quote1: "-Всё только начинается. Амун шептал об этом с далёких звёзд.",
        quote2: "",
        author: "(Наруд)",
        points: "200"
    }
}