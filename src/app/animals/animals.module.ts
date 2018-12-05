import { AnimalsComponent } from './animals/animals.component';
import { AnimalsRoutingModule } from './animals-routing.module';
import { CatComponent } from './cat/cat.component';
import { CommonModule } from '@angular/common';
import { DogComponent } from './dog/dog.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [DogComponent, CatComponent, AnimalsComponent],
  imports: [CommonModule, AnimalsRoutingModule],
})
export class AnimalsModule {}
