import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { UserdashboardComponent } from './component/userdashboard/userdashboard.component';
import { CarsComponent } from './component/cars/cars.component';
import { BikesComponent } from './component/bikes/bikes.component';
import { ViewComponent } from './component/view/view.component';
import { ViewordersComponent } from './component/vieworders/vieworders.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { BokkingComponent } from './component/bokking/bokking.component';
import { AdmindashboardComponent } from './component/admindashboard/admindashboard.component';
import { AddvehicleComponent } from './component/addvehicle/addvehicle.component';
import { ManagevehicleComponent } from './component/managevehicle/managevehicle.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'user',component:UserdashboardComponent,
    children:[
      {path:'cars',component:CarsComponent},
      {path:'bikes',component:BikesComponent},
      {path:'view/:id',component:ViewComponent},
      {path:'orders',component:ViewordersComponent},
      {path:'wishlist',component:WishlistComponent},
      {path:'bokking',component:BokkingComponent}
    ]

  },
  {path:'admin',component:AdmindashboardComponent,
    children:[
      {path:'add',component:AddvehicleComponent},
      {path:'manage',component:ManagevehicleComponent},
      {path:'cars',component:CarsComponent},
      {path:'bikes',component:BikesComponent},
      {path:'view',component:ViewordersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
