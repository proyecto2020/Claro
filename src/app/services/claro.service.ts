import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as data from 'src/ofertas.json';
@Injectable({
  providedIn: 'root',
})
export class ClaroService {
  lstInformation: any[];
  constructor() {}
  getInformation() {
    return of ((data as any).default)
  }
}
