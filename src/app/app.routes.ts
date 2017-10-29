import { RouterModule, Routes } from '@angular/router';

//components

import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';

const app_routers: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'services', component: ServicesComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
    
export const app_routing = RouterModule.forRoot(app_routers);