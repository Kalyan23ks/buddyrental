import { Injectable } from '@angular/core';
import { vehicle } from './vehicle';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  vehicles:vehicle[]=[
    //cars
    {
      vehicleId:1,
    vehicleName:"swift",
    vehicleCompany:"maruthi suzuki",
    vehiclePrice:"Rs:1200/-",
    avalibilityTime:"9:00AM-6:00PM",
    fuelType:"pertol",
    seatingCapacity:5,
    vehicleType:"car",
    vehicleImage:"https://www.financialexpress.com/wp-content/uploads/2024/04/Maruti-Swift.jpg?w=1024",
    vehicleRating:4.5,
  },
  {
    vehicleId:2,
    vehicleName:"Thar",
    vehicleCompany:"Mahindra",
    vehiclePrice:"Rs:2500/-",
    avalibilityTime:"9:00AM-6:00PM",
    fuelType:"pertol",
    seatingCapacity:5,
    vehicleType:"car",
    vehicleImage:"https://images.livemint.com/img/2022/09/24/1600x900/Mahindrathar_1664005874494_1664005874760_1664005874760.jpg",
    vehicleRating:4,
  },
  {
    vehicleId:3,
    vehicleName:"Sonet",
    vehicleCompany:"KIA",
    vehiclePrice:"Rs:1600/-",
    avalibilityTime:"9:00AM-6:00PM",
    fuelType:"pertol",
    seatingCapacity:5,
    vehicleType:"car",
    vehicleImage:"https://d1hv7ee95zft1i.cloudfront.net/custom/blog-post-photo/gallery/why-not-take-the-new-kia-sonet-for-a-test-drive-this-weekend-665ff71aec1a2.jpg",
    vehicleRating:3.9,
  },
  {
    vehicleId:4,
    vehicleName:"Baleno",
    vehicleCompany:"martuthi suzuki",
    vehiclePrice:"Rs:1200/-",
    avalibilityTime:"9:00AM-6:00PM",
    fuelType:"pertol",
    seatingCapacity:5,
    vehicleType:"car",
    vehicleImage:"https://catalog-management.s3.ap-south-1.amazonaws.com/htmobile1/marutisuzuki_baleno/images/exterior_marutisuzuki-baleno-facelift_front-right-view_600x398.jpg",
    vehicleRating:4.6,
  },
  {
    vehicleId:5,
    vehicleName:"Haarier",
    vehicleCompany:"Tata",
    vehiclePrice:"Rs:1600/-",
    avalibilityTime:"9:00AM-6:00PM",
    fuelType:"pertol",
    seatingCapacity:5,
    vehicleType:"car",
    vehicleImage:"https://e1.pxfuel.com/desktop-wallpaper/39/809/desktop-wallpaper-tata-harrier-automatic-version-with-sunroof-underdevelopment-expect-a-launch-soon-tata-car-thumbnail.jpg",
    vehicleRating:5,
  },
  {
    vehicleId:6,
    vehicleName:"BRV",
    vehicleCompany:"Honda",
    vehiclePrice:"Rs:3000/-",
    avalibilityTime:"9:00AM-6:00PM",
    fuelType:"Disel",
    seatingCapacity:5,
    vehicleType:"car",
    vehicleImage:"https://vivahonda.in/images/cars/BR-V/gallery/full/gallery-4.jpg",
    vehicleRating:4.4,
  },
  //bikes
  {
    vehicleId:7,
    vehicleName:"Mt-15",
    vehicleCompany:"Yamaha",
    vehiclePrice:"RS:900/-",
    avalibilityTime:"9:00AM-6:00PM",
    fuelType:"pertol",
    seatingCapacity:1,
    vehicleType:"bike",
    vehicleImage:"https://imgd.aeplcdn.com/664x374/n/cw/ec/115871/mt-15-v2-right-front-three-quarter-3.jpeg?isig=0&q=80",
    vehicleRating:4.7,
  },
  {
    vehicleId:8,
    vehicleName:"R15",
    vehicleCompany:"yamaha",
    vehiclePrice:"Rs:600/-",
    avalibilityTime:"9:00AM-6:00PM",
    fuelType:"pertol",
    seatingCapacity:1,
    vehicleType:"bike",
    vehicleImage:"https://imgd.aeplcdn.com/664x374/n/cw/ec/103795/yzf-r15-left-rear-three-quarter.jpeg?isig=0&q=80",
    vehicleRating:3.7,
  },
  {
    vehicleId:9,
    vehicleName:"Duke390",
    vehicleCompany:"ktm",
    vehiclePrice:"Rs:800/-",
    avalibilityTime:"9:00AM-6:00PM",
    fuelType:"pertol",
    seatingCapacity:1,
    vehicleType:"bike",
    vehicleImage:"https://bd.gaadicdn.com/processedimages/ktm/ktm-duke-390/source/v_duke-390-std1528454016.jpg",
    vehicleRating:4.4,
  },
  {
    vehicleId:9,
    vehicleName:"Rc150",
    vehicleCompany:"ktm",
    vehiclePrice:"Rs:700/-",
    avalibilityTime:"9:00AM-6:00PM",
    fuelType:"pertol",
    seatingCapacity:1,
    vehicleType:"bike",
    vehicleImage:"https://compare.pricesofindia.com/src/wallpapers/ktm/ktm-rc-150/KTM-RC-150-HD-Wallpapers-PricesOfIndia-2.jpg",
    vehicleRating:4.6,
  },
  {
    vehicleId:10,
    vehicleName:"Destine 125",
    vehicleCompany:"Hero",
    vehiclePrice:"Rs:300/-",
    avalibilityTime:"9:00AM-6:00PM",
    fuelType:"pertol",
    seatingCapacity:1,
    vehicleType:"bike",
    vehicleImage:"https://bd.gaadicdn.com/processedimages/hero/destini/494X300/destini66dea4d222e39.jpg",
    vehicleRating:4.2,
  },
  {
    vehicleId:10,
    vehicleName:"Acess 125",
    vehicleCompany:"suzuki",
    vehiclePrice:"Rs:400/-",
    avalibilityTime:"9:00AM-6:00PM",
    fuelType:"pertol",
    seatingCapacity:1,
    vehicleType:"bike",
    vehicleImage:"https://i.pinimg.com/736x/c9/43/24/c94324f7a65d67537ea3fb0f165ad0c9.jpg",
    vehicleRating:4.6,
  },



  
  ];

  getallvehicles(){
    return of(this.getallvehicles);
  }
  addvehicle(newvehicle:any){
    this.vehicles.push(newvehicle);
    return "added";
  }
  getvehicleById(id:any){
    console.log("service "+id)
    return this.vehicles.find(vehicle=>vehicle.vehicleId==id);
  }
  deletevehicleById(id:any){
    let index=this.vehicles.findIndex(vehicle=>vehicle.vehicleId==id);
  }
  getbikes(){
    return of(this.vehicles.filter(vehicle=>vehicle.vehicleType=="bike"));
  }
  getcars(){
    return of(this.vehicles.filter(vehicle=>vehicle.vehicleType=="car"));
  }
  updatevehicle(id:any,newvehicle:any){
    let index=this.vehicles.findIndex(vehicle=>vehicle.vehicleId==id);
    this.vehicles.splice(index,1,newvehicle);
    return "updated"
  }
}
