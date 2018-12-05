import { AnimalsComponent } from './animals/animals.component';
import { CatComponent } from './cat/cat.component';
import { DogComponent } from './dog/dog.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AnimalsComponent,
    children: [
      { path: '', component: DogComponent },
      { path: 'dog', component: DogComponent },
      { path: 'cat', component: CatComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AnimalsRoutingModule {}
