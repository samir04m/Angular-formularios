import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

   forma:FormGroup;

   usuario:Object = {

      nombreCompleto: {
         nombre: "Samir",
         apellido: "Mejia"
      },
      email: "samir@gmail.com"
   };

   constructor() {
      this.forma = new FormGroup({

         'nombreCompleto': new FormGroup ({
            'nombre': new FormControl('', [
                                             Validators.required,
                                             Validators.minLength(3)
                                          ]),
            'apellido': new FormControl('', [
                                             Validators.required,
                                             Validators.minLength(3)
                                          ])
         }),
         'email': new FormControl('', [
                                       Validators.required,
                                       Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")
                                    ])
      });

      this.forma.setValue(this.usuario);

   }

   guardarCambios(){
      console.log(this.forma.value);
      console.log(this.forma);

      this.forma.reset ({
         nombreCompleto: {
            nombre: "",
            apellido: ""
         },
         email:""
      });
   }

   ngOnInit() {
   }

}
