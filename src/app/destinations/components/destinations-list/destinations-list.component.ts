import { Component } from '@angular/core';

@Component({
  selector: 'app-destinations-list',
  standalone: true,
  imports: [],
  templateUrl: './destinations-list.component.html',
  styleUrl: './destinations-list.component.scss',
})
export class DestinationsListComponent {
  destinations = [
    {
      city: 'Puerto Madryn',
      region: 'Chubut',
      landscapes: 'Beach',
      activity: 'Whale watching',
    },
    {
      city: 'Esquel',
      region: 'Chubut',
      landscapes: 'Mountain',
      activity: 'A trip on the Trochita train',
    },
    {
      city: 'Villa La Angostura',
      region: 'Neuquen',
      landscapes: 'Lake',
      activity: 'A boat trip on the lake',
    },
    {
      city: 'Trevelin',
      region: 'Chubut',
      landscapes: 'Mountain',
      activity: 'Tulip field',
    },
  ];
}
