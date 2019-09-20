import { Component, OnInit } from '@angular/core';
import { compileNgModuleFromRender2 } from '@angular/compiler/src/render3/r3_module_compiler';

@Component({
  selector: 'app-lista-birras',
  templateUrl: './lista-birras.component.html',
  styleUrls: ['./lista-birras.component.scss']
})
export class ListaBirrasComponent implements OnInit {
  public titulo = "Lista de Birras";

  constructor() { }

  ngOnInit() {
  }

}
