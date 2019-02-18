import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';


@Injectable()
export class viewInventoryService {
 
   private _producturl='app/products.json';
  handleError: any;
  headers: any;
   constructor(private http: HttpClient){
    //this.uid= this.loginservice.getIndex();
   
   }

   baseUrl = 'http://apps.dinkhoo.com/ravi/';
   emergency=[];
   
 
  viewInventory() {
    var headers= new Headers();
    headers.append('Content-Type','application/X-www-form=urlencoded');
    //let body = JSON.stringify({name:name});
    debugger;
    return this.http.get('http://apps.dinkhoo.com/ravi/view_inventory.php');
     
  }
  deleteModels(mid :string,q:Number) {
    debugger;
    var headers= new Headers();
    headers.append('Content-Type','application/X-www-form=urlencoded');
    let body = JSON.stringify({ mid: mid,q:q});
    debugger;
    return this.http.post('http://apps.dinkhoo.com/ravi/delete_models.php',body);
      
  }
  
}