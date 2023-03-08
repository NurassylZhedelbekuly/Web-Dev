export interface Product {
  id?: number;
  name?: string;
  description?: string;
  link?: string;
  img?: string;
  price?: number;
  categories?:string;
  like:number;
  Delete?:boolean;
}

export const products = [
  {
    id: 1,
    name: `Монитор Samsung Odyssey G3 LS24AG300NIXCI черный`,
    rating: '5.0 / 5.0',
    price: '104 990 ₸',
    description: "диагональ: 24 дюйм\n" +
        "разрешение: 1920x1080\n" +
        "тип ЖК-матрицы: TFT *VA\n" +
        "яркость: 250 кд/м2\n" +
        "время отклика: 1 мс\n" +
        "макс. частота обновления кадров: 144 Гц\n" +
        "входы: HDMI, ,DisplayPort",
    link: `https://kaspi.kz/shop/p/samsung-odyssey-g3-ls24ag300nixci-chernyi-104946920/?c=750000000#!/item`,
    img: `Samsung monitor.jpg`,
    categories:'For PC',
    like:0,
    delete:true,
  },
  {
    id: 2,
    name: 'Клавиатура Logitech G PRO черный',
    rating: '5.0 / 5.0',
    price: '56 980 ₸',
    description: 'тип: механическая\n' +
        'дизайн: игровая\n' +
        'назначение: для настольного компьютера\n' +
        'тип подключения: проводная',
    link: 'https://kaspi.kz/shop/p/logitech-g-pro-chernyi-9200451/?c=750000000#!/item',
    img: 'Logitech keyboard.jpg',
    categories:'For PC',
    like:0,
    delete:true,
  },
  {
    id: 3,
    name: 'Смарт-часы Apple Watch Series 8 45 мм Aluminum черный',
    rating: '5.0 / 5.0',
    price: '231 500 ₸',
    description: 'поддержка платформ: iOS\n' +
        'материал корпуса: алюминий\n' +
        'цвет корпуса: черный\n' +
        'технология экрана: OLED\n' +
        'объем встроенной памяти: 32 Гб\n' +
        'интерфейсы: Bluetooth, ,Wi-Fi, ,NFC\n' +
        'время работы: в обычном режиме: 18 часов, в режиме энергосбережения: 36 часов',
    link: 'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000#!/item',
    img: 'Apple watch.jpg',
    categories:'Apple',
    like:0,
    delete:true,
  },
  {
    id: 4,
    name: 'Мышь Logitech G305 LightSpeed 910-005282 черный',
    rating: '5.0 / 5.0',
    price: '22 990 ₸',
    description: 'тип подключения: беспроводная\n' +
        'тип сенсора: оптическая светодиодная\n' +
        'интерфейс: USB\n' +
        'дизайн: для правой руки\n' +
        'игровая: Нет\n' +
        'разрешение оптического сенсора: 12000 dpi',
    link: 'https://kaspi.kz/shop/p/logitech-g305-lightspeed-910-005282-chernyi-9101345/?c=750000000#!/item',
    img: 'Logitech mouse.jpg',
    categories:'Mouse',
    like:0,
    delete:true,
  },
  {
    id: 5,
    name: 'Микрофон HyperX QuadCast Standalon Microphone 4P5P6AA',
    rating: '5.0 / 5.0',
    price: '69 889 ₸',
    description: 'тип: конденсаторный\n' +
        'конструкция: настольный\n' +
        'назначение: для компьютера\n' +
        'тип подключения: проводной\n' +
        'радиосистема: Нет\n' +
        'разъемы: UЅВ\n' +
        'цвет: черный',
    link: 'https://kaspi.kz/shop/p/hyperx-quadcast-standalon-microphone-4p5p6aa-104266179/?c=750000000#!/item',
    img: 'hyperx mic.jpg',
    categories:'Audio',
    like:0,
    delete:true,
  },
  {
    id: 6,
    name: 'Веб-камера Logitech StreamCam\n',
    rating: '5.0 / 5.0',
    price: '63 200 ₸',
    description: 'разрешение видео: 1920x1080\n' +
        'микрофон: встроенный\n' +
        'конструкция: крепление на мониторе',
    link: 'https://kaspi.kz/shop/p/logitech-streamcam-100549048/?c=750000000#!/item',
    img: 'web cam.jpg',
    categories:'For PC',
    like:0,
    delete:true,
  },
  {
    id: 7,
    name: 'Наушники Apple AirPods with Charging Case белый',
    rating: '5.0 / 5.0',
    price: '67 810 ₸',
    description: 'тип: гарнитура\n' +
        'вид: внутриканальные\n' +
        'подключение: беспроводное\n' +
        'тип акустического оформления: открытые\n' +
        'тип крепления: без крепления\n' +
        'система активного шумоподавления: Нет\n' +
        'микрофон: Да',
    link: 'https://kaspi.kz/shop/p/apple-airpods-with-charging-case-belyi-4804056/?c=750000000#!/item',
    img: 'air pods.jpg',
    categories:'Apple',
    like:0,
    delete:true,
  },
  {
    id: 8,
    name: 'Наушники Marshall Major IV черный',
    rating: '5.0 / 5.0',
    price: '113 470 ₸',
    description: 'тип: гарнитура\n' +
        'вид: накладные\n' +
        'подключение: беспроводное\n' +
        'тип акустического оформления: закрытые\n' +
        'тип крепления: оголовье\n' +
        'система активного шумоподавления: Нет\n' +
        'микрофон: Да',
    link: 'https://kaspi.kz/shop/p/marshall-major-iv-chernyi-102138144/?c=750000000#!/item',
    img: 'marshal.jpg',
    categories:'Audio',
    like:0,
    delete:true,
  },
  {
    id: 9,
    name: `Коврик для мыши ILAN RGB800`,
    rating: '5.0 / 5.0',
    price: '6 000 ₸',
    description: 'игровой: Да\n' +
        'материал покрытия: ткань\n' +
        'материал основания: резина\n' +
        'особенности: RGB-подсветка, ,прошитые края',
    link: 'https://kaspi.kz/shop/p/ilan-rgb800-106111650/?c=750000000#!/item',
    img: 'mouse pad.jpg',
    categories:'Mouse',
    like:0,
    delete:true,
  },
  {
    id: 10,
    name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
    rating: '5.0 / 5.0',
    price: '480 550 ₸',
    description: 'диагональ экрана: 13.3 дюйм\n' +
        'процессор: Apple M1\n' +
        'видеокарта: Apple M1 7 core\n' +
        'размер оперативной памяти: 8 ГБ\n' +
        'тип жесткого диска: SSD\n' +
        'общий объем накопителей: 256 ГБ',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item',
    img: 'Macbook.jpg',
    categories:'Apple',
    like:0,
    delete:true,
  },
  {
    id: 11,
    name: 'Планшет Apple iPad 2021 10.2 64Gb Wi-Fi серебристый',
    rating: '5.0 / 5.0',
    price: '169 990 ₸',
    description: 'диагональ: 10.2 дюйм\n' +
        'разрешение экрана: 2160x1620\n' +
        'технология изготовления экрана: TFT IPS\n' +
        'размер оперативной памяти: 4 Гб\n' +
        'размер встроенной памяти: 64 ГБ\n' +
        'емкость аккумулятора: 3240 мАч\n' +
        'цвет: серебристый',
    link: 'https://kaspi.kz/shop/p/apple-ipad-2021-10-2-64gb-wi-fi-serebristyi-102301731/?c=750000000#!/item  ',
    img: 'Apple iPad.jpg',
    categories:'Apple',
    like:0,
    delete:true,
  },
  {
    id: 12,
    name: 'Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый',
    rating: '5.0 / 5.0',
    price: '687 877 ₸',
    description: 'технология NFC: Да\n' +
        'цвет: фиолетовый\n' +
        'тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы\n' +
        'диагональ: 6.7 дюйм\n' +
        'размер оперативной памяти: 6 ГБ\n' +
        'процессор: 6-ядерный Apple A16 Bionic\n' +
        'объем встроенной памяти: 256 ГБ\n' +
        'емкость аккумулятора: 3095 мАч',
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item ',
    img: 'iPhone 14.jpg',
    categories:'Apple',
    like:0,
    delete:true,
  },
  {
    id: 13,
    name: 'Мышь Logitech G102 Lightsync L910-005801 синий',
    rating: '5.0 / 5.0',
    price: '11 940 ₸',
    description: 'тип подключения: проводная\n' +
        'тип сенсора: оптическая светодиодная\n' +
        'интерфейс: USB\n' +
        'дизайн: для правой руки\n' +
        'игровая: Да\n' +
        'разрешение оптического сенсора: 8000 dpi\n' +
        'количество программируемых клавиш: 6',
    link: 'https://kaspi.kz/shop/p/logitech-g102-lightsync-l910-005801-sinii-102171346/?c=750000000#!/item',
    img: 'G102.jpg',
    categories:'Mouse',
    like:0,
    delete:true,
  },
  {
    id: 14,
    name: 'Мышь A4Tech Bloody W70 Max Punk желтый',
    rating: '5.0 / 5.0',
    price: '15 390 ₸',
    description: 'тип подключения: проводная\n' +
        'тип сенсора: оптическая лазерная\n' +
        'интерфейс: USB\n' +
        'дизайн: для правой руки\n' +
        'игровая: Да\n' +
        'разрешение оптического сенсора: 10000 dpi',
    link: 'https://kaspi.kz/shop/p/a4tech-bloody-w70-max-punk-zheltyi-105518325/?c=750000000#!/item',
    img: 'A4tech.jpg',
    categories:'Mouse',
    like:0,
    delete:true,
  },
  {
    id: 15,
    name: 'Мышь Razer DeathAdder Essential RZ01-03850200-R3M1 белый',
    rating: '5.0 / 5.0',
    price: '13 828 ₸',
    description: 'тип подключения: проводная\n' +
        'тип сенсора: оптическая светодиодная\n' +
        'интерфейс: USB\n' +
        'дизайн: для правой руки\n' +
        'игровая: Да\n' +
        'разрешение оптического сенсора: 6400 dpi\n' +
        'количество программируемых клавиш: 5 ',
    link: 'https://kaspi.kz/shop/p/razer-deathadder-essential-rz01-03850200-r3m1-belyi-102016622/?c=750000000#!/item',
    img: 'Razer.jpg',
    categories:'Mouse',
    like:0,
    delete:true,
  },
  {
    id: 16,
    name: 'Процессор Intel Core i5-12600KF OEM',
    rating: '5.0 / 5.0',
    price: '127 579 ₸',
    description: 'тип процессора: Core i5\n' +
        'сокет: LGA1700\n' +
        'базовая частота процессора: 3700 МГц\n' +
        'максимальная частота процессора: 4900 МГц\n' +
        'тип поставки: OEM\n' +
        'количество ядер: 10',
    link: 'https://kaspi.kz/shop/p/intel-core-i5-12600kf-oem-102908373/?c=750000000#!/item',
    img: 'Intel i5.jpg',
    categories:'For PC',
    like:0,
    delete:true,
  },
  {
    id: 17,
    name: 'Видеокарта PNY Quadro RTX A5000 OEM 24 ГБ',
    rating: '0.0 / 5.0',
    price: '1 446 300 ₸',
    description: 'серия: RTX A5000\n' +
        'частота графического процессора: 1170 МГц\n' +
        'объем видеопамяти: 24 ГБ\n' +
        'тип видеопамяти: GDDR6\n' +
        'длина видеокарты: 268 мм\n' +
        'рекомендуемая мощность блока питания: 550 Вт',
    link: 'https://kaspi.kz/shop/p/pny-quadro-rtx-a5000-oem-24-gb-106576188/?c=750000000#!/item',
    img: 'PNY.jpg',
    categories:'For PC',
    like:0,
    delete:true,
  },
  {
    id: 18,
    name: 'Умная колонка Яндекс Станция 2 черный\n',
    rating: '5.0 / 5.0',
    price: '97 246 ₸',
    description: 'суммарная мощность: 30 Вт\n' +
        'управление умным домом: Да\n' +
        'голосовой помощник: Алиса\n' +
        'поддерживаемый язык: русский\n' +
        'поддержка Wi-Fi: Да\n' +
        'поддержка Bluetooth: Да',
    link: 'https://kaspi.kz/shop/p/jandeks-stantsija-2-chernyi-104991250/?c=750000000#!/item',
    img: 'Alisa.jpg',
    categories:'Audio',
    like:0,
    delete:true,
  },
  {
    id: 19,
    name: 'Музыкальный центр LG CJ44',
    rating: '5.0 / 5.0',
    price: '109 990 ₸',
    description: 'тип: минисистема\n' +
        'основной блок: одноблочная система\n' +
        'поддержка iPod/iPhone: Да\n' +
        'полная выходная мощность (RMS): 480 Вт\n' +
        'цвет: черный',
    link: 'https://kaspi.kz/shop/p/lg-cj44-9300035/?c=750000000#!/item',
    img: 'LG.jpg',
    categories:'Audio',
    like:0,
    delete:true,
  },
  {
    id: 20,
    name: 'Виниловый проигрыватель Верный Deluxe',
    rating: '5.0 / 5.0',
    price: '47 000 ₸',
    description: 'тип привода: пассиковый\n' +
        'автомат: автостоп\n' +
        'переключение скоростей: ручное\n' +
        'материал стола: пластмасса\n' +
        'материал опорного диска: пластмасса',
    link: 'https://kaspi.kz/shop/p/vernyi-deluxe-101399173/?c=750000000#!/item',
    img: 'Deluxe.jpg',
    categories:'Audio',
    like:0,
    delete:true,
  },
];