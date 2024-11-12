import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../../service/vehicle.service';
import { WishlistService } from '../../service/wishlist.service';
import { WishlistComponent } from '../wishlist/wishlist.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  vid:any; vehicle:any;
  constructor(private route:ActivatedRoute,private service:VehicleService,private wish:WishlistService){}
  ngOnInit(){
    this.vid=this.route.snapshot.params['id'];
    console.log(this.vid);
    if(this.vid!=null){
      this.vehicle=this.service.getvehicleById(this.vid);
      console.log(this.vehicle);
    }
    
  }
  addtowishlist(vehicle:any){
    this.wish.addtowishlist(vehicle);
  }

}
