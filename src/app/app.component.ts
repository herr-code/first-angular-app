// 2. Add the new component to your app's layout
import { Component } from '@angular/core';
// In app.component.ts, import HomeComponent by adding this line to the file level imports.
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  // In app.component.ts, in @Component, update the imports array property and add HomeComponent.
  imports: [HomeComponent],
  template: `
    <!-- In app.component.ts, in @Component, update the template property to include the following HTML code. -->
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // In app.component.ts, in the AppComponent class definition, replace the title line with this code to change the component title.
  title = 'homes';
}
