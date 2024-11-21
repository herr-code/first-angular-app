import { Component } from '@angular/core';
// Este modulo es necesario si quieres usar ngFor o ngIf
import {CommonModule} from '@angular/common';
// In home.component.ts, import HousingLocationComponent by adding this line to the file level imports.
import { HousingLocationComponent } from '../housing-location/housing-location.component';
// In src/app/home/home.component.ts, add this import statement after the existing import statements so that HomeComponent can use the new interface.
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  // Next update the imports property of the @Component metadata by adding HousingLocationComponent to the array.
  imports: [CommonModule, HousingLocationComponent],
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
      
      <!-- In Angular, ngFor is a specific type of directive used to dynamically repeat data in a template. In plain JavaScript you would use a for loop - ngFor 
      provides similar functionality for Angular templates. -->
      <!-- You can utilize ngFor to iterate over arrays and even asynchronous values. In this lesson, you'll add a new array of data to iterate over. -->
      <!-- Note, in the code [housingLocation] = "housingLocation" the housingLocation value now refers to the variable used in the ngFor directive. Before this change, 
      it referred to the property on the HomeComponent class. -->
      <app-housing-location 
        *ngFor="let housingLocation of housingLocationList"
        [housingLocation]="housingLocation"
      >
      </app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // In src/app/home/home.component.ts, replace the empty export class HomeComponent {} definition with this code to create a single instance of the new interface in the component.
  //  If the data didn't satisfy the description of the interface, the IDE has enough information to give us helpful errors.
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
      availableUnits: 5,
      wifi: true,
      laundry: true,
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/r-architecture-GGupkreKwxA-unsplash.jpg`,
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/saru-robert-9rP3mxf8qWI-unsplash.jpg`,
      availableUnits: 10,
      wifi: false,
      laundry: false,
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
      photo: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      availableUnits: 6,
      wifi: true,
      laundry: true,
    },
  ];
}
