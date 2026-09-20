import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productos = [
    { nombre: 'Laptop', precio: 15000 },
    { nombre: 'Teléfono', precio: 8000 },
    { nombre: 'Tablet', precio: 6000 }
  ];

  obtenerProductos() {
    return this.productos;
  }
}
