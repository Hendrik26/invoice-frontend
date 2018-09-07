import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  public invoice: Invoice = {
    id: 1,
    name: 'Invoice001'
  };

  constructor() { }

  ngOnInit() {
  }

}
