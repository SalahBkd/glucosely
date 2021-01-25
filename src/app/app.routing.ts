import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./layout/home/home.component";
import {DashboardContainerComponent} from "./dashboard/dashboard-container/dashboard-container.component";
import {StatsContainerComponent} from "./stats/stats-container/stats-container.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {SignInComponent} from "./auth/sign-in/sign-in.component";
import {VerifyEmailComponent} from "./auth/verify-email/verify-email.component";
import {SignUpComponent} from "./auth/sign-up/sign-up.component";
import {AuthGuard} from "./auth/guard/auth.guard";
import {UserProfileComponent} from "./layout/user-profile/user-profile.component";


const appRoutes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardContainerComponent, canActivate: [AuthGuard]},
  {path: 'stats', component: StatsContainerComponent, canActivate: [AuthGuard]},
  {path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard]},
  {path: 'not-found', component: NotFoundComponent},
  { path: '', redirectTo: 'home', pathMatch: "full"},
  {path: '**', redirectTo: 'not-found'},
];

export const routing = RouterModule.forRoot(appRoutes);
