import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-customer-list',
  imports: [
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.css',
})
export class CustomerList {}
