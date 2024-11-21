import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = 'http://localhost:3000/locations';

  // The code now uses asynchronous code to make a GET request over HTTP.
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }

  constructor() { }
}

// ng generate service housing --skip-tests => create a service in angular

// Angular services provide a way for you to separate Angular app data and functions that can be used by multiple components in your app. To be used by
// multiple components, a service must be made injectable. Services that are injectable and used by a component become dependencies of that component. 
// The component depends on those services and can't function without them.

// Dependency injection
// Dependency injection is the mechanism that manages the dependencies of an app's components and the services that other components can use.
