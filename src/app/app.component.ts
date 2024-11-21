// 2. Add the new component to your app's layout
import { Component } from '@angular/core';
// In app.component.ts, import HomeComponent by adding this line to the file level imports.
import { HomeComponent } from './home/home.component';
// In src/app/app.component.ts, update the component to use routing:
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  // In app.component.ts, in @Component, update the imports array property and add HomeComponent.
  // Add RouterModule to the @Component metadata imports
  imports: [HomeComponent, RouterModule],
  template: `
    <!-- In app.component.ts, in @Component, update the template property to include the following HTML code. -->
     <!-- In the template property, replace the <app-home></app-home> tag with the <router-outlet> directive and add a link back to the home page. -->
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
        </header>
      </a>
      <section class="content">
        <!-- <app-home></app-home> -->
         <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // In app.component.ts, in the AppComponent class definition, replace the title line with this code to change the component title.
  title = 'homes';
}
