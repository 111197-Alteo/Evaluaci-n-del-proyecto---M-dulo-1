import { isAndroid } from '@nativescript/core';

export class ProductosComponent {

  mensaje = '';

  constructor() {
    if (isAndroid) {
      this.mensaje = 'Ejecutando en Android';
    }
  }
}
