import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamemto',
  templateUrl: './criar-pensamemto.component.html',
  styleUrls: ['./criar-pensamemto.component.css']
})
export class CriarPensamemtoComponent implements OnInit {

  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'Modelo 1'
  }

  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento() {
    alert("teste")
  }

  cancelarPensamento() {
    alert("Cancelado")
  }

}
