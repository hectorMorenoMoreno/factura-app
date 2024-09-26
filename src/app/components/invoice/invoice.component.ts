import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { ClientViewComponent } from '../client-view/client-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { ListProductsViewComponent } from '../list-products-view/list-products-view.component';
import { RowItemViewComponent } from '../row-item-view/row-item-view.component';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [InvoiceViewComponent, ClientViewComponent, CompanyViewComponent, ListProductsViewComponent],
  templateUrl: './invoice.component.html'
})
export class InvoiceComponent implements OnInit{

  invoice!: Invoice; 

  constructor(private service: InvoiceService){}

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }

}
