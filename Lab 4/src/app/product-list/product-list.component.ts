import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  share(link: string) {
    window.alert('The product has been shared!');
    let text = link;
    let apiToken = '6256022692:AAE-U8kWb2-iX6V8LruKX65xTvs4vZQh1k4';
    let chatId = 938567763;
    let urlString = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${text}`;
    let request = new XMLHttpRequest();
    request.open('POST', urlString);
    request.send();

    let response = request.response;
    if (response == 200) {
    }
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
