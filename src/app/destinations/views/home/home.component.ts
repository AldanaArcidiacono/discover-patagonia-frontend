import { Component } from '@angular/core';
import { DestinationsListComponent } from '../../components/destinations-list/destinations-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DestinationsListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
