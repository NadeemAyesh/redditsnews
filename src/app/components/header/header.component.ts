import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() name: string;

  constructor(private navCtrl: Router) { }

  ngOnInit() {
  }

  openSearch() {
    this.navCtrl.navigateByUrl('/search');
  }

}
