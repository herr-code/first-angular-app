import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [RouterModule],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
      <!-- In src/app/housing-location/housing-location.component.ts, add an anchor tag to the section element and include the routerLink directive: -->
      <!-- The routerLink directive enables Angular's router to create dynamic links in the application. The value assigned to the routerLink is an array 
      with two entries: the static portion of the path and the dynamic data. -->
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  // You have to add the ! because the input is expecting the value to be passed. In this case, there is no default value.
  // In our example application case we know that the value will be passed in - this is by design. 
  // The exclamation point is called the non-null assertion operator and it tells the TypeScript compiler that the value of this property won't be null or undefined.
  @Input() housingLocation!: HousingLocation;
}

// Each housing location has specific details that should be displayed when a user navigates to the details page for that item. To accomplish this goal, 
// you will need to use route parameters.
// Route parameters enable you to include dynamic information as a part of your route URL. To identify which housing location a user has clicked on you will 
// use the id property of the HousingLocation type.