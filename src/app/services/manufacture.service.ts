import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/do';

import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ManufactureService {
 
   private _producturl='app/products.json';
  handleError: any;
  headers: any;
   constructor(private http: HttpClient){
    //this.uid= this.loginservice.getIndex();
   
   }

   baseUrl = 'http://localhost.com/';
   emergency=[];
   
  addManfacturer(name:string) {
    var headers= new Headers();
    headers.append('Content-Type','application/X-www-form=urlencoded');
    let body = JSON.stringify({name:name});
    debugger;
    return this.http.post('http://apps.dinkhoo.com/ravi/add_manfacturer.php',body);
     
  }
  getManfacturer() {
    var headers= new Headers();
    headers.append('Content-Type','application/X-www-form=urlencoded');
    //let body = JSON.stringify({name:name});
    debugger;
    return this.http.get('http://apps.dinkhoo.com/ravi/get_manfacture.php');
     
  }
  deleteManfacturer(uid :string,q:Number) {
    var headers= new Headers();
    headers.append('Content-Type','application/X-www-form=urlencoded');
    let body = JSON.stringify({ lid: uid,q:q});
    debugger;
    return this.http.post('http://apps.dinkhoo.com/ravi/delete_manfacture.php',body);
      
  }
  
}