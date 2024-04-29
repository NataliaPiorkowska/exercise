import { Component, Input } from '@angular/core';
import { IPerson, countries } from '../../interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})

export class PersonComponent {
  @Input() person!: IPerson;
  @Input() level!: number;

  getCountryName(countryId: number): string {
    const country = countries.find((country: { id: number; }) => country.id === countryId);
    return country ? country.name : 'Poland';
  }

  getPrefixForLevel(level: number): string {
    if (level === 0) {
      return '*';
    } else if (level === 1) {
      return 'o';
    } else {
      return '-';
    }
  }

}
