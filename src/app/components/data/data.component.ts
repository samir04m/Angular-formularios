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
            'nombre': new FormControl(this.usuario.nombreCompleto.nombre, [
                                             Validators.required,
                                             Validators.minLength(3)
                                          ]),
            'apellido': new FormControl(this.usuario.nombreCompleto.apellido, [
                                             Validators.required,
                                             Validators.minLength(3)
                                          ])
         }),
         'email': new FormControl(this.usuario.email , [
                                       Validators.required,
                                       Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")
                                    ])
      });
   }

   guardarCambios(){
      console.log(this.forma.value);
      console.log(this.forma);
   }

   ngOnInit() {
   }

}
