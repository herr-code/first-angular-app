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
        <!-- Update the HomeComponent template to include a template variable in the input element called #filter. -->
        <input type="text" placeholder="Filter by city" #filter/>
        <!-- The argument to the function is the value property of the filter template variable. Specifically, the .value property from the input HTML element. -->
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
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
        *ngFor="let housingLocation of filteredLocationList"
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
  // The filteredLocationList hold the values that match the search criteria entered by the user.
  filteredLocationList: HousingLocation[] = [];

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  // This function uses the String filter function to compare the value of the text parameter against the housingLocation.city property. You can update this function 
  // to match against any property or multiple properties for a fun exercise.
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
