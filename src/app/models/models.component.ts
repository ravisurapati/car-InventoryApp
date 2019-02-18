import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute,NavigationExtras } from '@angular/router';
import {ModelService}  from '../services/model.service';


@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {
  getManuList:any;
  modelno:any;
  modelname:any;
  description:any;
  color:any;
  mid:string;
  serialnumber:any;
  registrationno:any;
  year:any;
  manfacture:any;
  fileid:string;
  details:any;

  errorMessage:string="";
  error:boolean=false;
  successMessage:string="";
  success:boolean=false;
  constructor(private router:Router, private model:ModelService,private activatedRoute: ActivatedRoute, private elem:ElementRef) { }

  ngOnInit() {
    this.getManufactureList();
    this.getmodels();
  }

  getManufactureList(){
    this.model.getManfacturer().subscribe(
      res=>{
        this.getManuList = res
        console.log(this.getManuList);
        //alert(this.getManuList);
      }
    );

    
  }
  selectName(){
    alert(this.mid)
  } 
  public saveModel(){
    let files= this.elem.nativeElement.querySelector('#fileToUpload').files;
   debugger;
  
    let formdata = new FormData();
    let file = files[0];
    let filename= file.name;
   // let filename= this.getfilename(this.uid);
    debugger;
    formdata.append('fileToUpload',file,filename);
    this.model.uploadImage(formdata).subscribe
    (res => this.modelSave(res));
   
  }
  getmodels(){
  this.manfacture.getDetails(this.mid).subscribe(data=>{
    this.details = data;
    alert(data)
  });
}
  public modelSave(data:any):void{
    //let filename =this.files.filename;
   //this.model = data;
    let photo = data.filename;
   
    debugger;
    this.model.modelUpdate(this.mid, this.modelname,this.color,
      this.registrationno,this.year,this.description,photo
     
      ).subscribe(success=>{
      this.success=!this.success;
      this.error=false;
      this.successMessage="model Updated";
      alert(this.successMessage);
    },
    error=>{
      this.error=!this.error;
      this.errorMessage="Unexpected Error Occured";
    });
    
    }
    
  }

