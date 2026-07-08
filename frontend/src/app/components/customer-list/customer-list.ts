import { Component, inject, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CustomerService } from '../../services/customer'
import { error, log } from 'console';
import { CommonModule } from '@angular/common';
import { Customer } from '../../models/customer.model';
@Component({
  selector: 'app-customer-list',
  imports: [
    MatButtonModule,
    RouterModule,
    CommonModule
  ],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.css',
})
export class CustomerList implements OnInit{
 
  //Inject customer service
  private customerService = inject(CustomerService);
  //customer list
  customers: Customer[] = [];
  ngOnInit(): void {
    this.customerService.get().subscribe(
      data =>{
        this.customers = data;
        console.log(this.customers);
        
      },
      error => {
        console.log("error:",error);
      }
    )
  }
}
