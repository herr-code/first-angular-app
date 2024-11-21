// Add routing to the application
// In the src/app directory, create a file called routes.ts. This file is where we will define the routes in the application.

// Add a file level imports for the HomeComponent, DetailsComponent and the Routes type that you'll use in the route definitions.
import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";

// Define a variable called routeConfig of type Routes and define two routes for the app:

// The entries in the routeConfig array represent the routes in the application.
//  The first entry navigates to the HomeComponent whenever the url matches ''. The second entry uses some special formatting that will be revisited in a future lesson.
const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page',
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Home details',
    },
  ];
  export default routeConfig;