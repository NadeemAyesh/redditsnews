import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectedIdx: any;

  constructor(private navCtrl: Router) {
    this.selectedIdx = 'python';
  }
}
