import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ModelService {
 
   private _producturl='app/products.json';
  handleError: any;
  headers: any;
   constructor(private http: HttpClient){
    //this.uid= this.loginservice.getIndex();
   
   }

   baseUrl = 'http://apps.dinkhoo.com/ravi/';
   emergency=[];
   
  AddModel() {
    var headers= new Headers();
    headers.append('Content-Type','application/X-www-form=urlencoded');
    let body = JSON.stringify({});
    debugger;
    return this.http.post('http://apps.dinkhoo.com/ravi/add_model.php',body);
     
  }
  getManfacturer() {
    var headers= new Headers();
    headers.append('Content-Type','application/X-www-form=urlencoded');
    //let body = JSON.stringify({name:name});
    debugger;
    return this.http.get('http://apps.dinkhoo.com/ravi/get_manfacture.php');
     
  }
  uploadImage(formdata:any){
        var headers= new Headers();
        headers.append('enctype', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        //let options = new RequestOptions({ headers: this.headers });
        debugger;
        return this.http.post('http://apps.dinkhoo.com/ravi/uploadfile.php',formdata);
      
  }
  modelUpdate( modelno:string, modelname:string, color:string,registrationno:string,
   year:string, description:string,photo:string ){
    var headers= new Headers();
    headers.append('Content-Type','application/X-www-form=urlencoded');
    debugger;
    //let options = new RequestOptions({ header: headers });
    let body = JSON.stringify({modelno:modelno,modelname:modelname,color:color,registrationno:registrationno,
      year:year,description:description,photo:photo});
    return this.http.post('http://apps.dinkhoo.com/ravi/add_model.php',body);
  }
  
}