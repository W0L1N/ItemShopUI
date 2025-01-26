import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Menubar} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-navbar',
  imports: [
    Menubar,
    Button
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Oferty',
        route: '/'
      },
      {
        label: 'Produkty',
        route: '/products'
      },
      {
        label: 'Konto',
        route: '/account'
      }
    ];

  }

  logout() {

  }
}
