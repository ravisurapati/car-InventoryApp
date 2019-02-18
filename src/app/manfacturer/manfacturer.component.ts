import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const $;
import { Router, ActivatedRoute } from '@angular/router';
import { ManufactureService } from '../services/manufacture.service';


@Component({
  selector: 'app-manfacturer',
  templateUrl: './manfacturer.component.html',
  styleUrls: ['./manfacturer.component.css']
})
export class ManfacturerComponent implements OnInit {


  uid:string='';
  name : string;
  emergency: any=[];
  error:any;
  getmanfucture:any;
  deleteRes:any;
  editedManfacture: any ={};
 constructor(private router:Router, private manfacturer:ManufactureService) {
   
   }
  
  ngOnInit(){
   
    
   this.getManfacturer();
  }
  getManfacturer(){
    this.manfacturer.getManfacturer().subscribe(
      res=>{
        this.getmanfucture = res
        console.log(this.getmanfucture);
      }
    );
  }
  public refreshList(){
    this.getManfacturer();
  } 
   
  save() {
   debugger;
    this.manfacturer.addManfacturer(this.name).subscribe(
      res => {
        this.emergency = res;
       window.alert('Added Succefully....');
      this. refreshList()
      },
      (err) => {
        this.error = err;
        window.alert('Invalida data');
      }
    );
   
  }
  
    
}
