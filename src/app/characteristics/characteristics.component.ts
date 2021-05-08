import { Component, Input, OnInit } from '@angular/core';
import { ClaroService } from '../services/claro.service';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.css'],
})
export class CharacteristicsComponent implements OnInit {
  listaCaracteristicas: any;
  _idOffer: string;
  listaCaracteristicasFiltrada: Array<any>;
  p: number;
  get idOffer(): string {
    return this._idOffer;
  }
  @Input() set idOffer(value: string) {
    this._idOffer = value;
    this.obtenerCaracteristicas();
  }
  constructor(private readonly claroService: ClaroService) {
    this.listaCaracteristicasFiltrada = new Array<any>();
    this.p = 1;
  }
  ngOnInit(): void {}
  obtenerCaracteristicas() {
    this.claroService.getInformation().subscribe((rs: any) => {
      this.listaCaracteristicas = rs.filter((x) => x.id === this.idOffer);
      this.listaCaracteristicas.forEach((elemento) => {
        elemento.versions.forEach((item) => {
          item.characteristics.forEach((caractericticas) => {
            caractericticas.versions.forEach((versions) => {
              this.listaCaracteristicasFiltrada.push(versions);
            });
          });
        });
      });
    });
  }
}
