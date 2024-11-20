import { Injectable } from '@nestjs/common';

@Injectable()
export class DataService {
  getData() {
    const data = fetch('https://gushitong.baidu.com/index.html').then((res) =>
      res.text(),
    );
    console.log(data);

    return data;
  }
}
