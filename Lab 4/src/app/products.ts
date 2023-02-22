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
    name: `Смартфон Apple iPhone 14 Pro Max 1Tb Dual Sim`,
    rating: '4.5 / 5.0',
    price: '700',
    description: "технология NFC: Да цвет: черный тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы диагональ: 6.7 дюйм размер оперативной памяти: 6 ГБ процессор: 6-ядерный Apple A16 Bionic объем встроенной памяти: 1024 ГБ емкость аккумулятора: 3095 мАч",
    link: `https://kaspi.kz/shop/p/apple-iphone-14-pro-max-1tb-dual-sim-chernyi-107116389/?c=750000000#!/item`,
    img: `iphone14.jpg`,
  },
  {
    id: 2,
    name: 'Смартфон Samsung Galaxy Z Fold4 12 ГБ/512 ГБ ',
    rating: '4.7 / 5.0',
    price: '700',
    description: 'технология NFC: Да цвет: черныйтип экрана: Dynamic AMOLED 2X диагональ: 7.6 дюйм размер оперативной памяти: 12 ГБпроцессор: 8-ядерный Qualcomm Snapdragon 8 Gen 1 объем встроенной памяти: 512 ГБ емкость аккумулятора: 4400 мАч',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-z-fold4-12-gb-512-gb-chernyi-podarok-106036420/?c=750000000#!/item',
    img: 'zfold.jpg'
  },
  {
    id: 3,
    name: 'Смартфон Huawei Mate XS 2 PAL-LX9 8 ГБ/512 ГБ',
    rating: '4.8 / 5.0',
    price: '700',
    description: 'технология NFC: Да цвет: белый тип экрана: OLED, сенсорный, мультитач диагональ: 7.8 дюйм размер оперативной памяти: 8 ГБ процессор: 8-ядерный Qualcomm Snapdragon 888 объем встроенной памяти: 512 ГБ емкость аккумулятора: 4600 мАчBig tablet',
    link: 'https://kaspi.kz/shop/p/huawei-mate-xs-2-pal-lx9-8-gb-512-gb-belyi-106299672/?c=750000000#!/item',
    img: 'huaweimate.jpg',
  },
  {
    id: 4,
    name: 'Планшет Apple iPad Pro 2020 11 1Tb ',
    rating: '3.9 / 5.0',
    price: '700',
    description: 'диагональ: 11 дюйм разрешение экрана: 2388x1668 технология изготовления экрана: TFT IPS размер оперативной памяти: 6 Гб размер встроенной памяти: 1024 ГБ емкость аккумулятора: 2800 мАч цвет: серый',
    link: 'https://kaspi.kz/shop/p/apple-ipad-pro-2020-11-1tb-wi-fi-cellular-seryi-100277111/?c=750000000#!/item',
    img: 'ipad.jpg',
  },
  {
    id: 5,
    name: 'Планшет Samsung Galaxy Tab S8 Ultra SM-X906 14.6 дюймов 12 Гб/256 Гб серый',
    rating: '4.7 / 5.0',
    price: '700',
    description: 'диагональ: 14.6 дюйм разрешение экрана: 1848x2960 технология изготовления экрана: Super AMOLED размер оперативной памяти: 12 Гб размер встроенной памяти: 256 ГБ емкость аккумулятора: 11200 мАч цвет: серый',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s8-ultra-sm-x906-14-6-djuimov-12-gb-256-gb-seryi-103700021/?c=750000000#!/item',
    img: 'samsungtab8.jpg',
  },
  {
    id: 6,
    name: 'Наушники Apple AirPods Max синий',
    rating: '3.7 / 5.0',
    price: '700',
    description: 'тип: гарнитура вид: накладные подключение: беспроводное тип акустического оформления: закрытые тип крепления: оголовье система активного шумоподавления: Да микрофон: Да',
    link: 'https://kaspi.kz/shop/p/apple-airpods-max-sinii-101180956/?c=750000000#!/item',
    img: 'airpodsmax.jpg',
  },
  {
    id: 7,
    name: 'Ноутбук Apple MacBook Pro 16 2023 MNWA3 серый',
    rating: '4.1 / 5.0',
    price: '700',
    description: 'диагональ экрана: 16.2 дюйм процессор: Apple M2 Max видеокарта: Apple M2 Max 38-Core размер оперативной памяти: 32 ГБ  тип жесткого диска: SSD общий объем накопителей: 1024 ГБ',
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2023-mnwa3-seryi-108645812/?c=750000000#!/item',
    img: 'macbook.jpg',
  },
  {
    id: 8,
    name: 'Ноутбук ASUS ROG Zephyrus Duo 16 GX650RX-LO218X 90NR0921-M00EJ0 черный',
    rating: '4.9 / 5.0',
    price: '700',
    description: 'диагональ экрана: 16 дюйм процессор: AMD Ryzen 9 6900HX  видеокарта: NVIDIA GeForce RTX 3080 Ti  размер оперативной памяти: 64 ГБтип жесткого диска: SSD  общий объем накопителей: 4000 ГБ',
    link: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-duo-16-gx650rx-lo218x-90nr0921-m00ej0-chernyi-108303725/?c=750000000#!/item',
    img: 'asus.jpg',
  },
  {
    id: 9,
    name: `Видеокарта PNY GeForce RTX 3090 Ti XLR8 Gaming UPR EPIC-X RGB OC 24 ГБ`,
    rating: '4.0 / 5.0',
    price: '700',
    description: 'серия: GeForce RTX 30 Series частота графического процессора: 1560 МГц объем видеопамяти: 24 ГБ тип видеопамяти: GDDR6X длина видеокарты: 327 мм рекомендуемая мощность блока питания: 850 Вт',
    link: 'https://kaspi.kz/shop/p/pny-geforce-rtx-3090-ti-xlr8-gaming-upr-epic-x-rgb-oc-24-gb-106512519/?c=750000000#!/item',
    img: 'rtx.jpg',
  },
  {
    id: 10,
    name: 'Мышь Logitech G Pro X Superlight розовый',
    rating: '4.9 / 5.0',
    price: '700',
    description: 'тип подключения: беспроводная тип сенсора: оптическая лазерная  интерфейс: USB, ,радиоканал  дизайн: для правой и левой руки  игровая: Да разрешение оптического сенсора: 25600 dpi',
    link: 'https://kaspi.kz/shop/p/logitech-g-pro-x-superlight-rozovyi-105681243/?c=750000000#!/item',
    img: 'log.jpg',
  },
];