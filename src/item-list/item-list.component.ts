import {Component} from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';
import {DataView} from 'primeng/dataview';
import {Tag} from 'primeng/tag';
import {Button} from 'primeng/button';
import {Router} from '@angular/router';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {CreateOfferFormComponent} from '../modules/create-offer-form/create-offer-form.component';

interface Product {
  name: string;
  description: string;
  image: string;
  price: number;
  status: string;
  user: string;
}

@Component({
  selector: 'item-list',
  imports: [
    NgForOf,
    DataView,
    NgClass,
    Tag,
    Button
  ],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css',
  providers: [DialogService]
})
export class ItemListComponent {

  ref: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService) {
  }

  openCreateOfferForm() {
    this.ref = this.dialogService.open(CreateOfferFormComponent, {
      header: 'Dodaj ofertę',
      width: '50vw',
      modal:true,
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw'
      },
    });
  }

  products: Product[] = [
    {
      name: 'Product 1',
      description: 'Description of product 1.',
      image: 'blue-t-shirt.jpg',
      price: 199.99,
      status: 'CLOSE',
      user: 'John Doe'
    },
    {
      name: 'Product 2',
      description: 'Description of product 2.',
      image: 'bamboo-watch.jpg',
      price: 299.99,
      status: 'OPEN',
      user: 'Jane Smith'
    },
    {
      name: 'Product 3',
      description: 'Description of product 3.',
      image: 'blue-band.jpg',
      price: 149.99,
      status: 'CLOSE',
      user: 'Alice Johnson'
    }
  ];

  getSeverity(product: Product) {
    switch (product.status) {
      case 'OPEN':
        return 'success';

      case 'CLOSE':
        return 'danger';

      default:
        return undefined;
    }
  };
}
