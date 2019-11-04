import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
   selector: 'app-template',
   templateUrl: './template.component.html',
   styles: [``]
})
export class TemplateComponent implements OnInit {

   public usuario:Object = {
      nombre:null,
      apellido:null,
      email: null
   }

  constructor() { }

  ngOnInit() {
  }

   guardar(forma:NgForm){
     console.log("forma",forma);
     console.log("value",forma.value);
   }

}
