data_damage_types = [
    {
       title: "Сопротивление",
       icon: "armor-upgrade",
       subtitle: "Снижение урона",
       bullets: [
           "Если у существа или предмета есть сопротивление виду урона, то урон этого вида, причиняемый ему, уменьшается вдвое. Сопротивление применяется к урону после всех остальных модификаторов.",
       ]
   },
   {
      title: "Уязвимость",
      subtitle: "Повышение урона",
      icon: "armor-downgrade",
      bullets: [
          "Если у существа или предмета есть уязвимость виду урона, урон этого вида для него удваивается. Уязвимость применяется к урону после всех остальных модификаторов.",
      ]
  },
     {
        title: "Кислотный",
        icon: "acid",
        bullets: [
            "Едкое дыхание чёрного дракона и растворяющая слизь чёрного пудинга причиняют урон кислотой.",
        ]
    },
    {
       title: "Дробящий",
       icon: "mace-head",
       bullets: [
           "Тяжёлые силовые атаки — молотом, падением, сдавливанием и т. п. — причиняют дробящий урон.",
       ]
   },
   {
      title: "Холодный",
      icon: "ice-cube",
      bullets: [
          "Лютый холод от копья ледяного дьявола и морозное дыхание белого дракона причиняют урон холодом.",
      ]
   },
   {
      title: "Падение",
      icon: "falling",
      subtitle: "1к6 за 10 футов",
      description: "Урон от падения",
      reference: "КИ, стр. 183",
      bullets: [
          "В конце падения существо получает дробящий урон 1к6 за каждые 10 футов падения, с максимумом 20к6. Существо падает ничком, если только каким-то образом не избежит урона от падения.",
      ]
   },
   {
      title: "Огненный",
      icon: "flame",
      bullets: [
          "Красный дракон, выдыхающий пламя, и многие заклинания, создающие жар, причиняют урон огнём.",
      ]
   },
   {
      title: "Силовой",
      icon: "magic-swirl",
      bullets: [
          "Силовое поле это чистая магия, сфокусированная в разрушительную силу. Чаще всего силовым полем причиняют урон заклинания, такие как волшебная стрела и божественное оружие.",
      ]
   },
   {
      title: "Электрический",
      icon: "lightning-storm",
      bullets: [
          "Заклинание молния и дыхание синего дракона причиняют урон электричеством.",
      ]
   },
   {
      title: "Некротический",
      icon: "death-skull",
      bullets: [
          "Некротическая энергия, излучаемая некоторой нежитью и такими заклинаниями как леденящее прикосновение, иссушают плоть и даже душу.",
      ]
   },
   {
      title: "Колющий",
      icon: "ice-spear",
      bullets: [
          "Колющие и пронзающие атаки, включая удары копьём и укусы чудовищ, причиняют колющий урон.",
      ]
   },
   {
      title: "Ядовитый",
      icon: "poison-gas",
      bullets: [
          "Ядовитые укусы и токсичное дыхание зелёного дракона причиняют урон ядом.",
      ]
   },
   {
      title: "Психический",
      icon: "psychic-waves",
      bullets: [
          "Атаки силой разума, такие как у иллитидов, причиняют урон психической энергией.",
      ]
   },
   {
      title: "Излучение",
      icon: "holy-symbol",
      bullets: [
          "Урон излучением, причиняемый заклинанием небесный огонь жреца и карающим оружием ангела, опаляют плоть как огонь и переполняют дух силой.",
      ]
   },
   {
      title: "Рубящий",
      icon: "shining-sword",
      bullets: [
          "Мечи, топоры и когти чудовищ причиняют рубящий урон.",
      ]
   },
   {
      title: "Звуковой",
      icon: "ultrasound",
      bullets: [
          "Оглушительные звуковые волны, такие как от заклинания волна грома, причиняют урон звуком.",
      ]
   }
]

data_damage_health = [
     {
        title: "Исцеление",
        icon: "health-normal",
        subtitle: "Восстановление здоровья",
        description: "Восстановление здоровья",
        reference: "КИ, стр. 197",
        bullets: [
             "Если урон не вызвал смерть, он не постоянен. И даже смерть можно обратить мощной магией. Хиты существа восстанавливаются отдыхом, а магия, такая как заклинание лечение ран или зелье лечения устраняют урон мгновенно.",
             "Если существо получает какое-либо лечение, восстановленные хиты добавляются к его текущим хитам. Хиты существа не могут превышать его максимум хитов, поэтому лишние хиты теряются. Например, друид восстанавливает следопыту 8 хитов. Если у следопыта сейчас 14 хитов, а максимум хитов 20, следопыт восстанавливает 6 хитов, а не 8.",
             "Умершее существо не может восстанавливать хиты, пока такая магия как возрождение не вернёт его к жизни."
        ]
    },
]

data_damage_death = [
     {
        title: "Мгновенная смерть",
        icon: "decapitation",
        subtitle: "Смерть от огромного урона",
        description: "Смерть от огромного урона",
        reference: "КИ, стр. 197",
        bullets: [
            "Большой урон может убить вас мгновенно. Если урон опускает ваши хиты до 0, и ещё остаются излишки, вы умираете, если излишки равны максимуму ваших хитов или превышают его.",
            "Например, у жрицы с максимумом хитов 12 сейчас 6 хитов. Если она получает от атаки урон 18, хиты опускаются до 0, но остаётся ещё 12 урона. Так как этот урон равен максимуму хитов, жрица умирает."
        ]
    },
    {
       title: "Потеря сознания",
       icon: "sleepy",
       reference: "КИ, стр. 197",
       bullets: [
           "Если урон опускает ваши хиты до 0, но не убивает вас, вы теряете сознание. Вы приходите в сознание, если восстанавливаете хиты."
       ]
   },
]

data_damage_resting = [
     {
        title: "Короткий отдых",
        icon: "campfire",
        subtitle: "Отдых длиной как мин. 1 час",
        description: "Отдых длиной как минимум 1 час",
        reference: "КИ, стр. 186",
        bullets: [
             "Короткий отдых это период длиной как минимум 1 час, во время которого персонаж не делает ничего напряжённого кроме поглощения пищи, питья, чтения и обработки ран.",
             "В конце короткого отдыха персонаж может потратить одну или несколько Костей Хитов. Каждая потраченная кость позволяет совершить бросок соответствующей кости, добавить к ней модификатор Телосложения и восстановить получившееся количество хитов. После каждого броска можно решить, что будет потрачена ещё одна Кость Хитов. Потраченные Кости Хитов восстанавливаются в конце продолжительного отдыха, как описано ниже."
        ]
    },
    {
        title: "Продолжительный отдых",
        icon: "bed",
        subtitle: "Отдых длиной как мин. 8 часов",
        description: "Отдых длиной как минимум 1 час",
        reference: "КИ, стр. 186",
        bullets: [
             "Продолжительный отдых это долгий период длительностью как минимум 8 часов, во время которого персонаж как минимум 6 спит, и не более 2 часов занимается лёгкой деятельностью: читает, разговаривает, ест и стоит на страже. Если отдых прерывается напряжённой активностью (как минимум 1 час ходьбы, сражение, накладывание заклинаний или другая подобная деятельность), персонажи должны начать отдых с начала, чтобы получить от него преимущества.",
             "В конце продолжительного отдыха персонаж восстанавливает все потраченные хиты, а также половину от максимума Костей Хитов (минимум 1). Например, если у персонажа восемь Костей Хитов, в конце продолжительного отдыха он может восстановить четыре из них.",
             "Персонаж не может получить преимущества от второго продолжительного отдыха за 24-часовой период, и у персонажа должен быть хотя бы 1 хит в начале отдыха, чтобы получить от него преимущества."
        ]
   },
]
