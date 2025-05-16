import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DatabindingComponent} from './databinding/databinding.component';
import {ProductTableComponent} from './primeng/table/product-table.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatabindingComponent, ProductTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-learning';
}
