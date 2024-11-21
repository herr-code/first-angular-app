import { Component, inject } from '@angular/core';
// Este modulo es necesario si quieres usar ngFor o ngIf
import {CommonModule} from '@angular/common';
// In home.component.ts, import HousingLocationComponent by adding this line to the file level imports.
import { HousingLocationComponent } from '../housing-location/housing-location.component';
// In src/app/home/home.component.ts, add this import statement after the existing import statements so that HomeComponent can use the new interface.
import { HousingLocation } from '../housinglocation';

// Import the service
import { HousingService } from '../housing.service';

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
  // From HomeComponent, delete the housingLocationList array entries and assign housingLocationList the value of empty array ([]). In a few steps you will 
  // update the code to pull the data from the HousingService.
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
