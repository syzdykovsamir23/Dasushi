export type MenuItem = {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  weight: string;
  image: string;
  tags: string[];
  signature?: boolean;
};

export const categories = [
  { id: 'all', label: 'Всё меню', jp: '全て' },
  { id: 'signature', label: 'Фирменное', jp: '看板' },
  { id: 'sets', label: 'Сеты', jp: 'セット' },
  { id: 'combo', label: 'Комбо', jp: 'コンボ' },
  { id: 'pizza', label: 'Пицца', jp: 'ピザ' },
  { id: 'cold', label: 'Холодные роллы', jp: '巻物' },
  { id: 'tempura', label: 'Темпура', jp: '天ぷら' },
  { id: 'baked', label: 'Запечённые', jp: '焼き' },
  { id: 'hosomaki', label: 'Хосомаки', jp: '細巻' },
  { id: 'ramen', label: 'Рамен', jp: 'ラーメン' },
  { id: 'snacks', label: 'Закуски', jp: '前菜' },
  { id: 'extra', label: 'Дополнительно', jp: '追加' },
  { id: 'drinks', label: 'Напитки', jp: '飲み物' },
];

const img = {
  sets1: '/images/menu/sets-1.jpg',
  sets2: '/images/menu/sets-2.jpg',
  combo1: '/images/menu/combo-1.jpg',
  pizza1: '/images/menu/pizza-1.jpg',
  pizza2: '/images/menu/pizza-2.jpg',
  pizza3: '/images/menu/pizza-3.jpg',
  pizza4: '/images/menu/pizza-4.jpg',
  pizza5: '/images/menu/pizza-5.jpg',
  pizza6: '/images/menu/pizza-6.jpg',
  cold1: '/images/menu/cold-1.jpg',
  cold2: '/images/menu/cold-2.jpg',
  cold3: '/images/menu/cold-3.jpg',
  cold4: '/images/menu/cold-4.jpg',
  cold5: '/images/menu/cold-5.jpg',
  tempura1: '/images/menu/tempura-1.jpg',
  baked1: '/images/menu/baked-1.jpg',
  hosomaki1: '/images/menu/hosomaki-1.jpg',
  ramen1: '/images/menu/ramen-1.jpg',
  ramen2: '/images/menu/ramen-2.jpg',
  snack1: '/images/menu/snack-1.jpg',
  snack2: '/images/menu/snack-2.jpg',
  snack3: '/images/menu/snack-3.jpg',
  extra1: '/images/menu/extra-1.jpg',
  drinks1: '/images/menu/drinks-1.jpg',
};

export const menu: MenuItem[] = [
  // ════════ СЕТЫ ════════
  { id: 's1', name: 'Сет Филадельфия', category: 'sets', description: 'Фила, Фила Гриль, Грин Фила', price: 7750, weight: '24 шт', image: "/images/филадельфия-сет.png", tags: ['Хит', 'Классика'], signature: true },
  { id: 's2', name: 'Хот Сет', category: 'sets', description: 'Салмон Хот, Ямакаси, Унаги Хот', price: 6650, weight: '24 шт', image: "/images/хот-сет.png", tags: ['Запечённые'] },
  { id: 's3', name: 'Сет Гиран', category: 'sets', description: 'Салмон Хот, Яссай Темпура, 1/2 Фила Канада, 1/2 Эби Ролл, Калифорния', price: 7850, weight: '32 шт', image: "/images/гиран.png", tags: ['Большой'] },
  { id: 's4', name: 'Сет Хейн', category: 'sets', description: 'Банзай, Эби Темпура, 2/1 Фила, 2/1 Канада', price: 7850, weight: '32 шт', image: "/images/хейн.png", tags: ['Авторский'] },
  { id: 's5', name: 'Сет Хасомаки', category: 'sets', description: 'Ролл с креветкой, Ролл с угрём, Ролл с лососем, Шиноби Ролл (краб), Ролл с огурцом, Окинава', price: 6650, weight: '48 шт', image: "/images/хассомаки.png", tags: ['Хосомаки', 'Большой'] },
  { id: 's6', name: 'Сет Астериос', category: 'sets', description: 'Фила Лайт, Лава Ролл, Лосось Темпура, Танго Ролл, Острый ролл с крабом, Ролл с огурцом', price: 7950, weight: '48 шт', image: "/images/астериус.png", tags: ['Премиум', 'Большой'], signature: true },
  { id: 's7', name: 'Сет Аден', category: 'sets', description: 'Лава Ролл, 2/1 Майами, Унаги Хот, Сенсей, Яссай Хот, Салмон Хот', price: 7750, weight: '32 шт', image: "/images/аден.png", tags: ['Микс'] },
  { id: 's8', name: 'Сет Глудио', category: 'sets', description: 'Филадельфия, Ролл с лососем, Калифорния', price: 5950, weight: '24 шт', image: "/images/глудио-.png", tags: ['На двоих'] },
  { id: 's9', name: 'Сет Годарт', category: 'sets', description: 'Цезарь Ролл, Лосось Темпура, Яссай Темпура, Эби Темпура', price: 7250, weight: '32 шт', image: "/images/годарт.png", tags: ['Темпура'] },

  // ════════ КОМБО ════════
  { id: 'c1', name: 'Fog Мини', category: 'combo', description: 'Филадельфия, Канада, 1/2 Ролл с лососем, 1/2 Ролл с угрём, Пицца Пепперони, Картофель Фри', price: 9850, weight: 'комбо', image: "/images/фог-мини.png", tags: ['Премиум', 'Комбо'], signature: true },
  { id: 'c2', name: 'Варка Мини', category: 'combo', description: 'Лосось Темпура, Угорь Темпура, Салмон Хот, Крылышки (8 шт), Пицца Юки Нагато, Подарок от заведения', price: 10850, weight: 'комбо', image: "/images/варка-мини.png", tags: ['Премиум', 'Комбо'], signature: true },
  { id: 'c3', name: 'Мос Мини', category: 'combo', description: 'Цезарь Хот, Яссай Темпура, Лава Ролл, Пицца Ассорти, Пицца Цыпленок Барбекю, Крылышки (8 шт), Картофель Фри', price: 12850, weight: 'комбо', image: "/images/мос-мини.png", tags: ['Топ', 'Комбо'], signature: true },

  // ════════ ПИЦЦА ════════
  { id: 'p1', name: 'Маргарита', category: 'pizza', description: 'Классическая пицца с помидорами', price: 2250, weight: '30 см', image: "/images/маргарита.png", tags: ['Классика', 'Вегетарианская'] },
  { id: 'p2', name: 'Пепперони', category: 'pizza', description: 'Классическая пицца с колбасой', price: 2450, weight: '30 см', image: "/images/пепперони.png", tags: ['Хит'] },
  { id: 'p3', name: 'Сырные борта', category: 'pizza', description: 'Творожный сыр, куриное филе, оливки, болгарский перец', price: 2950, weight: '30 см', image: "/images/сырные-борта.png", tags: ['Сырная'] },
  { id: 'p4', name: 'Торико', category: 'pizza', description: 'Курица, шампиньоны, помидоры черри, оливки', price: 2550, weight: '30 см', image: "/images/торико.png", tags: ['Курица'] },
  { id: 'p5', name: 'Юки Нагато', category: 'pizza', description: 'Тигровые креветки, лосось, творожный сыр', price: 3150, weight: '30 см', image: "/images/юки-нагато.png", tags: ['Премиум', 'Морепродукты'], signature: true },
  { id: 'p6', name: 'Ассорти', category: 'pizza', description: 'Грибы, курица, помидоры, колбаса', price: 2950, weight: '30 см', image: "/images/ассорти.png", tags: ['Микс'] },
  { id: 'p7', name: 'Цезарь', category: 'pizza', description: 'Курица, айсберг, перепелиные яйца, пармезан, помидоры черри, соус Цезарь', price: 2950, weight: '30 см', image: "/images/цезарь.png", tags: ['Курица'] },
  { id: 'p8', name: 'Хатакэ', category: 'pizza', description: 'Курица, шампиньоны, помидоры', price: 2450, weight: '30 см', image: "/images/хатаке.png", tags: ['Грибы'] },
  { id: 'p9', name: 'Цыпленок Барбекю', category: 'pizza', description: 'Куриное филе, репчатый лук, соус барбекю, моцарелла', price: 2450, weight: '30 см', image: "/images/цыпленок-барбекью.png", tags: ['Барбекю'] },
  { id: 'p10', name: '4 Сыра', category: 'pizza', description: 'Моцарелла, творожный сыр, пармезан, гауда', price: 2650, weight: '30 см', image: "/images/4сыра.png", tags: ['Сырная', 'Хит'] },

  // ════════ ХОЛОДНЫЕ РОЛЛЫ ════════
  { id: 'r1', name: 'Фила', category: 'cold', description: 'Лосось, творожный сыр', price: 2750, weight: '8 шт', image: "/images/филадельфия.png", tags: ['Хит', 'Лосось'], signature: true },
  { id: 'r2', name: 'Грин Фила', category: 'cold', description: 'Лосось, творожный сыр, огурец', price: 2850, weight: '8 шт', image: "/images/фила-грин.png", tags: ['Лосось', 'Свежий'] },
  { id: 'r3', name: 'Калифорния', category: 'cold', description: 'Снежный краб, огурец, майонез, тобико', price: 2150, weight: '8 шт', image: "/images/калифорния.png", tags: ['Классика', 'Краб'] },
  { id: 'r4', name: 'Калифорния с угрём', category: 'cold', description: 'Копчёный угорь, огурец, тобико, майонез', price: 2650, weight: '8 шт', image: "/images/калифорния-с-угрем.png", tags: ['Угорь'] },
  { id: 'r5', name: 'Калифорния с лососем', category: 'cold', description: 'Лосось, огурец, тобико, майонез.', price: 2450, weight: '8 шт', image: "/images/калифорния-с-лососем-холодные-роллы.png", tags: ['Лосось', 'Краб'] },
  { id: 'r6', name: 'Калифорния с креветкой', category: 'cold', description: 'Тигровые креветки, огурец, тобико, майонез.', price: 2350, weight: '8 шт', image: "/images/калифорния-с-креветками.png", tags: ['Креветка', 'Краб'] },
  { id: 'r7', name: 'Дракон', category: 'cold', description: 'Спайси соус, угорь, лосось, огурец', price: 2950, weight: '8 шт', image: "/images/дракон.png", tags: ['Угорь', 'Хит'], signature: true },
  { id: 'r8', name: 'Канада', category: 'cold', description: 'Творожный сыр, угорь, лосось, огурец', price: 3150, weight: '8 шт', image: "/images/канада.png", tags: ['Премиум', 'Лосось'], signature: true },
  { id: 'r9', name: 'Хоккайдо', category: 'cold', description: 'Творожный сыр, угорь, огурец, кунжут', price: 2450, weight: '8 шт', image: "/images/хоккайдо.png", tags: ['Угорь'] },
  { id: 'r10', name: 'New York', category: 'cold', description: 'Творожный сыр, угорь, снежный краб, тобико, кунжут', price: 2450, weight: '8 шт', image: "/images/нью-йорк.png", tags: ['Угорь', 'Краб'] },
  { id: 'r11', name: 'Фила Лайт', category: 'cold', description: 'Творожный сыр, снежный краб, лосось.', price: 2250, weight: '8 шт', image: "/images/фила-лайт.png", tags: ['Лосось', 'Лёгкий'] },
  { id: 'r12', name: 'Фила Гриль', category: 'cold', description: 'Лосось гриль, творожный сыр.', price: 2850, weight: '8 шт', image: "/images/филадельфия-гриль.png", tags: ['Лосось', 'Гриль'] },
  { id: 'r13', name: 'Дуэт', category: 'cold', description: 'Творожный сыр, угорь, тобико.', price: 2850, weight: '8 шт', image: "/images/дуэт.png", tags: ['Лосось', 'Тунец'] },
  { id: 'r14', name: 'Кайдо', category: 'cold', description: 'Угорь, креветки, лист салата, творожный сыр, соус унаги, кунжут.', price: 2950, weight: '8 шт', image: "/images/кайдо.png", tags: ['Премиум', 'Гребешок'] },
  { id: 'r15', name: 'Хиросима', category: 'cold', description: 'Творожный сыр, лосось, огурец, кунжут.', price: 2250, weight: '8 шт', image: "/images/хиросима.png", tags: ['Угорь', 'Лосось'] },
  { id: 'r16', name: 'Эби Ролл', category: 'cold', description: 'Творожный сыр, тигровые креветки, лист салата, кунжут.', price: 2250, weight: '8 шт', image: "/images/эби-ролл.jpeg", tags: ['Креветка'] },
  { id: 'r17', name: 'Генезис', category: 'cold', description: 'Творожный сыр, лосось, огурец, тобико, кунжут.', price: 2250, weight: '8 шт', image: "/images/генезис.jpeg", tags: ['Лосось'] },
  { id: 'r18', name: 'Соната', category: 'cold', description: 'Жареный лосось, огурец, творожный сыр, кунжут.', price: 2250, weight: '8 шт', image: "/images/соната.jpeg", tags: ['Угорь'] },
  { id: 'r19', name: 'Юки Ролл', category: 'cold', description: 'Творожный сыр, тобико, огурец, лист салата, лосось, угорь, креветки.', price: 3250, weight: '8 шт', image: "/images/юки-ролл.png", tags: ['Премиум', 'Гребешок'], signature: true },
  { id: 'r20', name: 'Танго Ролл', category: 'cold', description: 'Творожный сыр, лосось, огурец, тобико.', price: 2250, weight: '8 шт', image: "/images/танго-ролл.png", tags: ['Лосось'] },
  { id: 'r21', name: 'Бонито', category: 'cold', description: 'Творожный сыр, жареный лосось, огурец, стружка тунца.', price: 2350, weight: '8 шт', image: "/images/бонито.png", tags: ['Лосось', 'Тунец'] },
  { id: 'r22', name: 'Киото', category: 'cold', description: 'Жареный лосось, майонез, лист салата, тобико.', price: 2350, weight: '8 шт', image: "/images/киото.png", tags: ['Угорь'] },
  { id: 'r23', name: 'Окинава', category: 'cold', description: 'Лосось, копчёный угорь, огурец, тобико, майонез.', price: 1850, weight: '8 шт', image: "/images/окинава.png", tags: ['Краб'] },

  // ════════ ТЕМПУРА РОЛЛЫ ════════
  { id: 't1', name: 'Лосось Темпура', category: 'tempura', description: 'Творожный сыр, жареный лосось.', price: 2580, weight: '8 шт', image: "/images/лосось-темпура.png", tags: ['Лосось', 'Хруст'] },
  { id: 't2', name: 'Ямакаси', category: 'tempura', description: 'Лосось, тобико, творожный сыр, огурец.', price: 2940, weight: '8 шт', image: "/images/ямакаси.png", tags: ['Угорь', 'Лосось'] },
  { id: 't3', name: 'Угорь Темпура', category: 'tempura', description: 'Угорь, творожный сыр, кунжут.', price: 2700, weight: '8 шт', image: "/images/угорь-темпура.png", tags: ['Угорь'] },
  { id: 't4', name: 'Сенсей', category: 'tempura', description: 'Креветки, угорь, огурец, тобико, майонез, соус унаги, кунжут.', price: 3060, weight: '8 шт', image: "/images/сенсей.png", tags: ['Лосось'] },
  { id: 't5', name: 'Америка', category: 'tempura', description: 'Творожный сыр, лосось, угорь, огурец, тобико.', price: 3300, weight: '8 шт', image: "/images/америка.png", tags: ['Краб'], signature: true },
  { id: 't6', name: 'Яссай Темпура', category: 'tempura', description: 'Огурец, помидор, лист салата, такуан, кунжут, майонез.', price: 1980, weight: '8 шт', image: "/images/яссай-темпура.png", tags: ['Вегетарианский', 'Хруст'] },
  { id: 't7', name: 'Эби Темпура', category: 'tempura', description: 'Креветки, лист салата, тобико, майонез.', price: 2700, weight: '8 шт', image: "/images/эби-темпура.png", tags: ['Креветка'] },
  { id: 't8', name: 'Цезарь Ролл', category: 'tempura', description: 'Куриное филе, лист салата, помидор черри, творожный сыр, соус Цезарь.', price: 2580, weight: '8 шт', image: "/images/цезарь-ролл.png", tags: ['Курица', 'Хруст'] },

  // ════════ ЗАПЕЧЁННЫЕ РОЛЛЫ ════════
  { id: 'b1', name: 'Хот Cheese', category: 'baked', description: 'Моцарелла, творожный сыр, креветки, снежный краб, тобико, соус унаги, кунжут.', price: 3540, weight: '8 шт', image: "/images/хот-cheese.png", tags: ['Сыр', 'Лосось'], signature: true },
  { id: 'b2', name: 'Фила Хот', category: 'baked', description: 'Творожный сыр, огурец, лосось, соус унаги, сырная шапка.', price: 3540, weight: '8 шт', image: "/images/фила-хот.png", tags: ['Лосось', 'Сыр'] },
  { id: 'b3', name: 'Цезарь Хот', category: 'baked', description: 'Творожный сыр, огурец, соус унаги, куриное филе, помидор.', price: 2460, weight: '8 шт', image: "/images/цезарь-хот.jpeg", tags: ['Курица'] },
  { id: 'b4', name: 'Яссай Хот', category: 'baked', description: 'Майонез, кунжут, лист салата, огурец, помидор, такуан, сырная шапка.', price: 1980, weight: '8 шт', image: "/images/яссай-хот.png", tags: ['Вегетарианский'] },
  { id: 'b5', name: 'Банзай', category: 'baked', description: 'Угорь, жареный лосось, творожный сыр, огурец, спайси соус.', price: 3780, weight: '8 шт', image: "/images/банзай.png", tags: ['Лосось', 'Угорь'], signature: true },
  { id: 'b6', name: 'Салмон Хот', category: 'baked', description: 'Спайси соус, огурец, жареный лосось, сырная шапка.', price: 2580, weight: '8 шт', image: "/images/салмон-хот.png", tags: ['Лосось'] },
  { id: 'b7', name: 'Унаги Хот', category: 'baked', description: 'Творожный сыр, угорь, огурец, кунжут, сырная шапка.', price: 3060, weight: '8 шт', image: "/images/унаги-хот.png", tags: ['Угорь'] },
  { id: 'b8', name: 'Лава Ролл', category: 'baked', description: 'Спайси соус, снежный краб, огурец, сырная шапка.', price: 2220, weight: '8 шт', image: "/images/лава-ролл.jpeg", tags: ['Лосось', 'Сыр'] },
  { id: 'b9', name: 'Самурай Ролл', category: 'baked', description: 'Лава соус, лосось, творожный сыр, лист салата, тобико, соус унаги, кунжут.', price: 2820, weight: '8 шт', image: "/images/самурай-ролл.png", tags: ['Курица'] },
  { id: 'b10', name: 'Эби Хот', category: 'baked', description: 'Творожный сыр, креветка, лист салата, тобико, сырная шапка.', price: 3060, weight: '8 шт', image: "/images/эби-хот.png", tags: ['Креветка'] },
  { id: 'b11', name: 'Майами Ролл', category: 'baked', description: 'Творожный сыр, огурец, снежный краб, лава соус, соус унаги, сырная шапка.', price: 2580, weight: '8 шт', image: "/images/майами-ролл.png", tags: ['Лосось'] },

  // ════════ ХОСОМАКИ ════════
  { id: 'h1', name: 'Спайси Лосось', category: 'hosomaki', description: 'Спайси соус, лосось, огурец.', price: 1100, weight: '8 шт', image: "/images/спайси-лосось.jpeg", tags: ['Острое', 'Лосось'] },
  { id: 'h2', name: 'Ролл с угрём', category: 'hosomaki', description: 'Угорь, кунжут.', price: 1350, weight: '8 шт', image: "/images/ролл-с-угрем.png", tags: ['Угорь'] },
  { id: 'h3', name: 'Ролл с огурцом', category: 'hosomaki', description: 'Огурец, кунжут, майонез.', price: 850, weight: '8 шт', image: "/images/ролл-с-огурцом.png", tags: ['Вегетарианский', 'Лёгкий'] },
  { id: 'h4', name: 'Острый ролл', category: 'hosomaki', description: 'Лосось / копчёный угорь / краб / креветка (на выбор).', price: 1350, weight: '8 шт', image: "/images/острый-ролл.jpeg", tags: ['Острое', 'Тунец'] },
  { id: 'h5', name: 'Шиноби Ролл', category: 'hosomaki', description: 'Снежный краб.', price: 1150, weight: '8 шт', image: "/images/шиноби-ролл.jpeg", tags: ['Лосось'] },
  { id: 'h6', name: 'Ролл с креветкой', category: 'hosomaki', description: 'Креветки.', price: 1350, weight: '8 шт', image: "/images/ролл-с-креветками.jpeg", tags: ['Креветка'] },
  { id: 'h7', name: 'Ролл с лососем', category: 'hosomaki', description: 'Лосось.', price: 1350, weight: '8 шт', image: "/images/ролл-с-лососем.png", tags: ['Лосось'] },
  { id: 'h8', name: 'Чука Ролл', category: 'hosomaki', description: 'Морские водоросли, кунжут.', price: 1150, weight: '8 шт', image: "/images/чука-ролл.jpeg", tags: ['Вегетарианский'] },
  { id: 'h9', name: 'Сливочный огурец', category: 'hosomaki', description: 'Огурец, творожный сыр, кунжут.', price: 1450, weight: '8 шт', image: "/images/сливочный-огурец.png", tags: ['Вегетарианский'] },

  // ════════ РАМЕН ════════
  { id: 'rm1', name: 'С курицей', category: 'ramen', description: 'Сытный рамен с курицей.', price: 1850, weight: '400 г', image: "/images/рамен.jpeg", tags: ['Курица', 'Сытное'] },
  { id: 'rm2', name: 'С морепродуктами', category: 'ramen', description: 'Рамен с креветками, мидиями и кальмаром.', price: 2350, weight: '400 г', image: "/images/рамен.jpeg", tags: ['Морепродукты', 'Премиум'], signature: true },

  // ════════ ЗАКУСКИ ════════
  { id: 'sn1', name: 'Крылышки 8 шт', category: 'snacks', description: 'Хрустящие куриные крылышки.', price: 1850, weight: '8 шт', image: "/images/крылышки.png", tags: ['Хруст', 'Курица'] },
  { id: 'sn2', name: 'Крылышки 24 шт', category: 'snacks', description: 'Большая порция куриных крылышек.', price: 5150, weight: '24 шт', image: "/images/крылышки.png", tags: ['Большой', 'Курица'] },
  { id: 'sn3', name: 'Сырные палочки', category: 'snacks', description: 'Обжаренная моцарелла в панировке.', price: 1550, weight: '6 шт', image: "/images/сырные-палочки.png", tags: ['Сыр', 'Хруст'] },
  { id: 'sn4', name: 'Картофель фри', category: 'snacks', description: 'Золотистый картофель фри.', price: 750, weight: '200 г', image: "/images/фри.png", tags: ['Хруст', 'Вегетарианское'] },

  // ════════ ДОПОЛНИТЕЛЬНО ════════
  { id: 'e1', name: 'Сырный соус', category: 'extra', description: 'Нежный сырный соус.', price: 250, weight: '50 г', image: "/images/сырный-соус.jpeg", tags: ['Соус'] },
  { id: 'e2', name: 'Кетчуп', category: 'extra', description: 'Классический томатный кетчуп.', price: 250, weight: '50 г', image: "/images/кетчуп.jpeg", tags: ['Соус'] },
  { id: 'e3', name: 'Спайси соус', category: 'extra', description: 'Острый фирменный соус.', price: 250, weight: '50 г', image: "/images/спайси-соус.jpeg", tags: ['Соус', 'Острое'] },
  { id: 'e4', name: 'Сырные бортики', category: 'extra', description: 'Добавка сыра в бортики пиццы.', price: 650, weight: '', image: "/images/сырные-бортики.jpeg", tags: [] },

  // ════════ НАПИТКИ ════════
  { id: 'd1', name: 'Пепси', category: 'drinks', description: 'Освежающий газированный напиток', price: 720, weight: '500 мл', image: "/images/пепси.png", tags: ['Газировка'] },
  { id: 'd2', name: 'Пепси', category: 'drinks', description: 'Освежающий газированный напиток', price: 1200, weight: '1 л', image: "/images/пепси.png", tags: ['Газировка'] },
  { id: 'd3', name: 'Салам Кола', category: 'drinks', description: 'Газированный напиток Салам Кола', price: 720, weight: '500 мл', image: "/images/салам-кола.png", tags: ['Газировка'] },
  { id: 'd4', name: 'Ава', category: 'drinks', description: 'Газированный напиток Ава', price: 720, weight: '500 мл', image: "/images/ава.png", tags: ['Газировка'] },
  { id: 'd5', name: 'Дада', category: 'drinks', description: 'Натуральный сок ДаДа', price: 1140, weight: '1 л', image: "/images/дада.png", tags: ['Сок'] },
  { id: 'd6', name: 'Грацио', category: 'drinks', description: 'Натуральный сок Грацио', price: 1380, weight: '1 л', image: "/images/грацио.png", tags: ['Сок'] },
  { id: 'd7', name: 'Вода Асу', category: 'drinks', description: 'Чистая питьевая вода', price: 550, weight: '500 мл', image: "/images/асу.png", tags: ['Вода'] },
  { id: 'd8', name: 'Вода Асу', category: 'drinks', description: 'Чистая питьевая вода', price: 720, weight: '1 л', image: "/images/асу.png", tags: ['Вода'] },
];

export const reviews = [
  {
    id: 'r1',
    name: 'Айдар Сулейменов',
    role: 'Постоянный гость',
    text: 'Лучший суши-опыт в Астане. Оммакасэ — это не еда, это перформанс. Каждое блюдо подаётся как произведение искусства.',
    rating: 5,
    avatar: 'А',
  },
  {
    id: 'r2',
    name: 'Динара Касымова',
    role: 'Фуд-блогер',
    text: 'Атмосфера, сервис, вкус — всё на уровне мировых столиц. Я была в суши-ресторанах Токио и Нью-Йорка. Dasushi не уступает.',
    rating: 5,
    avatar: 'Д',
  },
  {
    id: 'r3',
    name: 'Тимур Жумабаев',
    role: 'Предприниматель',
    text: 'Прихожу на бизнес-ужины каждую неделю. Приватные комнаты, внимание к деталям, идеальный сервис. Рекомендую всем партнёрам.',
    rating: 5,
    avatar: 'Т',
  },
  {
    id: 'r4',
    name: 'Алия Нурланова',
    role: 'Стилист',
    text: 'Интерьер — отдельное искусство. Красный свет, тёмное дерево, стекло. Здесь хочется задержаться и наслаждаться каждым моментом.',
    rating: 5,
    avatar: 'А',
  },
];

export const faq = [
  {
    q: 'Нужно ли бронировать столик заранее?',
    a: 'Рекомендуем бронировать столик за 1–2 дня, особенно на вечер пятницы и субботы. Бронь доступна через форму на сайте или по телефону.',
  },
  {
    q: 'Доставляете ли вы суши?',
    a: 'Доставка работает ежедневно с 10:30 до 23:00 в пределах Астаны. Заказы оформляются через сайт или приложение. Премиум-сеты доставляются в фирменных термоконтейнерах.',
  },
  {
    q: 'Есть временные акции?',
    a: 'Временами мы проводим акции и скидки. Свяжитесь с нами для получения подробной информации.',
  },
  {
    q: 'Проводите ли вы мероприятия?',
    a: 'Мы организуем корпоративы и дни рождения. Свяжитесь с нами для индивидуального предложения.',
  },
];

export const timeline = [
  { year: '2018', title: 'Основание', text: 'Dasushi открывает двери в центре Астаны. Мечта одного шефа стать реальностью.' },
  { year: '2020', title: 'Оммакасэ', text: 'Запуск легендарного дегустационного меню. Первые очереди на бронь.' },
  { year: '2022', title: 'Премия', text: 'Ресторан признан лучшим суши-рестораном года по версии Gourmet Awards KZ.' },
  { year: '2024', title: 'Новая глава', text: 'Открытие приватных комнат и винного погреба с 200 позициями саке.' },
];


export const stats = [
    { value: '6', label: 'Лет совершенства', suffix: '' },
    { value: '85', label: 'Блюд в меню', suffix: '+' },
    { value: '250', label: 'Положительных отзывов', suffix: '+' },
    { value: '4.9', label: 'Рейтинг гостей', suffix: '/5' },
  ];

export const navLinks = [
  { id: 'menu', label: 'Меню', jp: 'メニュー' },
  { id: 'experience', label: 'Атмосфера', jp: '空間' },
  { id: 'gallery', label: 'Галерея', jp: '写真' },
  { id: 'reviews', label: 'Отзывы', jp: '声' },
  { id: 'faq', label: 'Вопросы', jp: '質問' },
  { id: 'contact', label: 'Контакты', jp: '連絡' },
];

export const openingHours = [
  { day: 'Ежедневно', time: '10:30 — 23:00' },
];

export const contactInfo = {
  address: 'Астана, Проспект Тауелсіздик, 5',
  phone: '+7 700 800 90 94',
  email: 'dognellen@gmail.com',
  instagram: '@dasushi.kz',
  whatsapp: '+7 700 800 90 94',
};

export const formatPrice = (n: number) => new Intl.NumberFormat('ru-RU').format(n) + ' ₸';
