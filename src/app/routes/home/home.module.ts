import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {SearchFilterComponent} from "@app/shared/features/search-filter/search-filter.component";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SearchFilterComponent
  ]
})
export class HomeModule {
}
