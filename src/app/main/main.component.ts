import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.querySelector("#js-tab-lista-birras").addEventListener("click", function() {
      show(document.querySelector("#js-content-lista-birras"));
    });
    document.querySelector("#js-tab-lista-carrito").addEventListener("click", function() {
      show(document.querySelector("#js-content-lista-carrito"));
    });

    // default
    show(document.querySelector("#js-content-lista-birras"));
  }

  
}

function show(content) {
  document.querySelectorAll(".tab-content").forEach(content => {
    content.classList.remove("visible");
  });
  content.classList.add("visible");
}