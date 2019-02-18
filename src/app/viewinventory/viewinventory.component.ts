import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const $;
import { Router, ActivatedRoute } from '@angular/router';
import { viewInventoryService } from '../services/viewinventory.service';


@Component({
  selector: 'app-viewinventory',
  templateUrl: './viewinventory.component.html',
  styleUrls: ['./viewinventory.component.css']
})
export class ViewInventoryComponent implements OnInit {

 
  mid:string='';
  name : string;
  emergency: any=[];
  error:any;
  list:any;
  deleteRes:any;
  editedManfacture: any ={};
 constructor(private router:Router, private manfacturer:viewInventoryService) {
   
   }
  
  ngOnInit(){
   
    
   this.viewInventoryList();
  }
  viewInventoryList(){
    this.manfacturer.viewInventory().subscribe(
      res=>{
        this.list = res
        console.log(this.list);
      }
    );
  }
  public refreshList(){
    this.viewInventoryList()
   }
   
 
   sellModel(data:any):void{
    this.list=data;
    var q = 1
    this.manfacturer.deleteModels(this.list.ModelID,q).subscribe(
      res=>{
        this.deleteRes = res
        alert(res)
        this.refreshList();
      }
    );
  }
    
}
