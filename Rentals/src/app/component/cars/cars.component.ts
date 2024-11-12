import { Component } from '@angular/core';
import { VehicleService } from '../../service/vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  cars:any;
  user:any;
  username:any;
    
  constructor(private service:VehicleService,private route:Router){}

  ngOnInit()
  {
    this.service.getcars().subscribe((data)=>{this.cars=data})

    this.user=localStorage.getItem("Logginin");
      this.username=JSON.parse(this.user).username;
  }
  openvehicel(id:any)
    {
      this.route.navigateByUrl('/user/view/'+id);
}

}
