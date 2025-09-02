import type { Equipo } from "./Equipo.js";
import type { Deporte } from "./Deporte.js";
import type { Resultado } from "./Resultado.js";

export class Partido {
    readonly id: string;
    local: Equipo;
    visitante: Equipo;
    deporte: Deporte;
    resulatdo? : Resultado;

    constructor(
        id: string, 
        local: Equipo, 
        visitante: Equipo, 
        deporte: Deporte,
        resultado? : Resultado 
    )
    {
        if(local.id === visitante.id){
            throw new Error(`El equipo local y visitante no pueden ser el mismo `);
        }

        this.id = id;
        this.local = local;
        this.visitante = visitante;
        this.deporte = deporte;
        this.resulatdo = resultado
    }

    jugar(resultado : Resultado):void{
        if(
            !this.deporte.validar(this.local) ||
            !this.deporte.validar(this.visitante)          
        ){
            throw new Error("Uno de los dos equipos no cumple con los requisitos")
        }
        this.resulatdo = resultado
    }

    toString():string {
        return(
            `${this.deporte.nombre}`+
            `${this.local.nombre} vs ${this.visitante.nombre}` +
            (this.resulatdo ? `Resultado: ${this.resulatdo.toString()}`: "Pendiente")
        )
    }
}