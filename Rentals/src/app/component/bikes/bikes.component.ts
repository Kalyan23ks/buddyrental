import { Component } from '@angular/core';
import { VehicleService } from '../../service/vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrl: './bikes.component.css'
})
export class BikesComponent {
  bikes:any;
  user:any;
  username:any;
    
  constructor(private route:Router,private service:VehicleService){}

  ngOnInit()
  {
    this.service.getbikes().subscribe((data)=>{this.bikes=data})

    this.user=localStorage.getItem("Logginin");
      this.username=JSON.parse(this.user).username;
  }
  openvehicel(id:any)
    {
      this.route.navigateByUrl('/user/view/'+id);
}

}
