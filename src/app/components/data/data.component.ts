import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

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
      email: "samir@gmail.com",
      pasatiempos: ["Correr","Dormir","Comer"]
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
         ]),
         'pasatiempos': new FormArray ([
            new FormControl('Correr', Validators.required)
         ]),
         'username': new FormControl('', Validators.required, this.existeUsuario),
         'password1': new FormControl('', Validators.required),
         'password2': new FormControl()
      });

      // this.forma.setValue(this.usuario);

      this.forma.controls['password2'].setValidators([
         Validators.required,
         this.noIgual.bind(this.forma)
      ]);
   }

   noIgual(control: FormControl): { [s:string]:boolean } {

      let forma:any = this;

      if (control.value !== forma.controls['password1'].value){
         return {
            noiguales:true
         }
      }
      return null;
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


   agregarPasatiempo(){
      (<FormArray>this.forma.controls['pasatiempos']).push(
         new FormControl('Dormir', Validators.required)
      )
   }

   existeUsuario( control : FormControl ) : Promise<any> | Observable <any> {
       let promesa = new Promise(
           (resolve, reject)=>{

               setTimeout(()=>{
                   if (control.value === "samir"){
                       resolve( { existe:true } )
                   }else{
                       resolve( null )
                   }
               }, 1000)

           }
       )

       return promesa;

   }


   ngOnInit() {
   }

}
