export interface Product {
  id: number;
  name: string;
  rating: string;
  description: string;
  link: string;
  img: string;
  price: string;

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
    img: 'Logitech keyboard.jpg'
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
  },
];