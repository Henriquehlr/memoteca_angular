import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  
  listaPensamentos = [
    {
      conteudo: 'Passe informações para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo3',
    },
    {
      conteudo: 'Minha propriedade é decorada com o @input',
      autoria: 'Angular',
      modelo: 'modelo2',
    },
    {
      conteudo: 'Minha propriedade é decorada com o @inputMinha propriedade é decorada com o @inputMinha propriedade é decorada com o @inputMinha propriedade é decorada com o @inputMinha propriedade é decorada com o @inputMinha propriedade é decorada com o @inputMinha propriedade é decorada com o @inputMinha propriedade é decorada com o @inputMinha propriedade é decorada com o @inputMinha propriedade é decorada com o @inputMinha propriedade é decorada com o @inputMinha propriedade é decorada com o @inputMinha propriedade é decorada com o @inputMinha propriedade é decorada com o @inputMinha propriedade é decorada com o @inputMinha propriedade é decorada com o @inputMinha propriedade é decorada com o @inputMinha propriedade é decorada com o @inputMinha propriedade é decorada com o @inputMinha propriedade é decorada com o @inputMinha propriedade é decorada com o @inputMinha propriedade é decorada com o @inputMinha propriedade é decorada com o @input',
      autoria: 'Angular',
      modelo: 'modelo1',
    },
  ];
  
  constructor() {}

  ngOnInit(): void {}
}
