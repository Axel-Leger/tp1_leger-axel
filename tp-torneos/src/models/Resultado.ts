export class Resultado {
    golesLocal: number;
    golesVisitante: number;

    constructor(golesLocal:number, golesVisitantes: number){
        this.golesLocal = golesLocal;
        this.golesVisitante = golesVisitantes
    }

    toString(): string {
        return `${this.golesLocal} - ${this.golesVisitante} `
    }
}