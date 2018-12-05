import { AboutComponent } from './about/about.component';
import { AnimalsComponent } from './animals/animals/animals.component';
import { AuthenticationGuard } from './authentication.guard';
import { CatComponent } from './animals/cat/cat.component';
import { DogComponent } from './animals/dog/dog.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home/:id', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'animals', loadChildren: './animals/animals.module#AnimalsModule' },
  { path: 'about', component: AboutComponent, canActivate: [AuthenticationGuard] },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
