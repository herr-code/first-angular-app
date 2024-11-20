import { Component } from '@angular/core';
// In home.component.ts, import HousingLocationComponent by adding this line to the file level imports.
import {HousingLocationComponent} from '../housing-location/housing-location.component';

@Component({
  selector: 'app-home',
  // Next update the imports property of the @Component metadata by adding HousingLocationComponent to the array.
  imports: [HousingLocationComponent],
  template: `
    <!-- In home.component.ts, in @Component, update the template property with this code. -->
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

}
