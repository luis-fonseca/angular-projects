import { Component } from "@angular/core";

// Um componente precisa de dois arquivos, por exemplo,
// myfirst.component.ts e myfirst.component.html. O arquivo
// myfirst.component.css é opcional e define uma folha de estilos

// O nome de arquivo de um componente é composto da forma:
// nome-do-arquivo.categoria.extensão ou myfirst.component.ts
// Todo componente tem um decorator @Component que define
// o seletor e um template (via template ou templateUrl quando for
// arquivo externo).
// Também é possível definir uma folha de estilo com o atributo
// styles ou stylesUrls quando for um arquivo externo.

// Um componente para ser usado precisa ser exportado com
// a palavra chave export

@Component({
    // um seletor deve ser único e pode ser referenciado
    // por uma classe, um atributo (nome entre colchetes) ou
    // o nome de um componente
    // classe: <div class="my-component"></div>
    // tag: <my-component></my-component>
    // atributo: <div my-component></div>
    // selector: 'myfirst', // seletor do componente
    // selector: ".my-first" // seletor por classe,
    selector: "[my-first]",
    // template: `<h1>My First Component</h1>`, // código html para ser renderizado. Usado dessa forma quando houver pequenas linhas de código
    templateUrl: "./myfirst.component.html"
    
})
export class MyFirstComponent {
    constructor() {
    }
}
