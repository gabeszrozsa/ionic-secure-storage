import { Component } from '@angular/core';
import { SecureStorage } from '@ionic-native/secure-storage/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private secureStorage: SecureStorage,
    private platform: Platform
  ) {}

  async read() {
    await this.platform.ready();

    const secureStorage = await this.secureStorage.create('my_store_name');

    // try {
    //   const result = await secureStorage.set('key', 'value!!!');
    //   alert('Key set' + JSON.stringify(result));
    // } catch (error) {
    //   alert('set error: ' + JSON.stringify(error));
    // }

    try {
      const result = await secureStorage.get('key');
      alert('Key get' + JSON.stringify(result));
    } catch (error) {
      alert('get error: ' + JSON.stringify(error));
    }
  }

  async write(value: string) {
    await this.platform.ready();

    const secureStorage = await this.secureStorage.create('my_store_name');

    try {
      const result = await secureStorage.set('key', value);
      alert('Key set' + JSON.stringify(result));
    } catch (error) {
      alert('set error: ' + JSON.stringify(error));
    }
  }
}
