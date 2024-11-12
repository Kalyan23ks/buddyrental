import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor() { }
  wishlist:any=[];
  getvehicles(){
    return of(this.wishlist);
  }
  addtowishlist(newvehicle:any){
    this.wishlist.push(newvehicle);
  }
}
