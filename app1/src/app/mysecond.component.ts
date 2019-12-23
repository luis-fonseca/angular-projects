import { Component } from "@angular/core";

@Component({
    selector: "mysecond",
    templateUrl: "./mysecond.component.html",
    // um das formas de se usar estilos CSS
    // também válida somente para o componente
    // styles: [`
    //     .box-01 {
    //         width: 200px;
    //         height: 200px;
    //         background-color: brown;
    //         box-shadow: 5px 10px #CCC;
    //     }
    // `, 
    // `.box-02 {
    //     width: 200px;
    //     height: 200px;
    //     background-color: green;
    //     box-shadow: 5px 10px #CCC;
    // }`]
    // Especifica um ou mais folhas de estilo para um determinado
    // componente. A vantagem deste método é o reaproveitamento
    // dos estilos em outros componentes.
    styleUrls: ["./mysecond.component.css"],
})
export class MySecondComponent {
    constructor() {
    }
}