import { Component } from '@angular/core';
import {Empleado} from './empleado';

@Component({
    selector: 'empleado-tag',
    templateUrl: './empleado.component.html'
})
export class EmpleadoComponent
{
    public titulo = 'Componente Empleados:';   
    public empleado:Empleado;
    public trabajadores:Array<Empleado>;
    public trabajador_externo:boolean;
    public color:string;
    public color_seleccionado:string;

    constructor()
    {
        this.empleado = new Empleado('Alvaro Jimenez',27,'Developer',false);
        this.trabajadores = [
            new Empleado('Manolo Garcia',43,'Administrador',true),
            new Empleado('Alvaro Jimenez',27,'Developer',true),
            new Empleado('Victor Robles',34,'Tester',false)
        ];
        this.trabajador_externo = false;
        this.color = 'blue';
        this.color_seleccionado = '#ccc';
    }
    ngOnInit()
    {

    }

    cambiarExterno(valor)
    {
         this.trabajador_externo = valor;
    }
}