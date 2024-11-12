import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { UserdashboardComponent } from './component/userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './component/admindashboard/admindashboard.component';
import { CarsComponent } from './component/cars/cars.component';
import { BikesComponent } from './component/bikes/bikes.component';
import { ViewordersComponent } from './component/vieworders/vieworders.component';
import { AddvehicleComponent } from './component/addvehicle/addvehicle.component';
import { ManagevehicleComponent } from './component/managevehicle/managevehicle.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { ViewComponent } from './component/view/view.component';
import { BokkingComponent } from './component/bokking/bokking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserdashboardComponent,
    AdmindashboardComponent,
    CarsComponent,
    BikesComponent,
    ViewordersComponent,
    AddvehicleComponent,
    ManagevehicleComponent,
    WishlistComponent,
    ViewComponent,
    BokkingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
