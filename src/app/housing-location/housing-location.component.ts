import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  imports: [],
  template: `
    <p>
      housing-location works!
    </p>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  // You have to add the ! because the input is expecting the value to be passed. In this case, there is no default value.
  // In our example application case we know that the value will be passed in - this is by design. 
  // The exclamation point is called the non-null assertion operator and it tells the TypeScript compiler that the value of this property won't be null or undefined.
  @Input() housingLocation!: HousingLocation;
}
