import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./layout/home/home.component";
import {DashboardContainerComponent} from "./dashboard/dashboard-container/dashboard-container.component";
import {StatsContainerComponent} from "./stats/stats-container/stats-container.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AboutComponent} from "./layout/about/about.component";


const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardContainerComponent},
  {path: 'stats', component: StatsContainerComponent},
  {path: 'about', component: AboutComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'not-found'}
];

export const routing = RouterModule.forRoot(appRoutes);
