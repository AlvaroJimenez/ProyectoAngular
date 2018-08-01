import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})
export class FrutaComponent
{
    public nombre_componente = 'Componente de fruta';
    public listado_frutas = 'Naranja, Manzana, Pera y Sandia';
    public trabajos:Array<any> = ['Carpintero', 'Mecánico', 'Médico']
    public nombre:string;
    public edad:number;
    public mayorDeEdad:boolean;
    comodin:any;


    constructor()
    {
       this.nombre = 'Alaro Jimenez';
       this.edad = 27;
       this.mayorDeEdad = true;
       this.comodin = "SI"; 
    }
    ngOnInit()
    {
        this.holaMundo();
    }

    holaMundo(){
        alert('Hola Mundo!!');

    }

}