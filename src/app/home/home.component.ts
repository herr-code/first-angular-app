import { Component } from '@angular/core';
// In home.component.ts, import HousingLocationComponent by adding this line to the file level imports.
import { HousingLocationComponent } from '../housing-location/housing-location.component';
// In src/app/home/home.component.ts, add this import statement after the existing import statements so that HomeComponent can use the new interface.
import { HousingLocation } from '../housinglocation';

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
      <!-- In the template property of the @Component decorator, update the code to match the code below: -->
      <!-- When adding a property binding to a component tag, we use the [attribute] = "value" syntax to notify Angular that the assigned value should be 
      treated as a property from the component class and not a string value. -->
      <!-- The value on the right-hand side is the name of the property from the HomeComponent. -->
      <app-housing-location [housingLocation]="housingLocation"]></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // In src/app/home/home.component.ts, replace the empty export class HomeComponent {} definition with this code to create a single instance of the new interface in the component.
  //  If the data didn't satisfy the description of the interface, the IDE has enough information to give us helpful errors.
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  housingLocation: HousingLocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
