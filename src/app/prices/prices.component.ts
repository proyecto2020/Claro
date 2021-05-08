import { Component, Input, OnInit } from '@angular/core';
import { ClaroService } from '../services/claro.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css'],
})
export class PricesComponent implements OnInit {
  listaPrecios: Array<any>;
  _idOffer: string;
  lstPreciosFiltrada: Array<any>;
  p: number;
  get idOffer(): string {
    return this._idOffer;
  }
  @Input() set idOffer(value: string) {
    this._idOffer = value;
    this.obtenerPrecios();
  }
  constructor(private readonly claroService: ClaroService) {
    this.lstPreciosFiltrada = new Array<any>();
    this.p = 1;
  }

  ngOnInit(): void {}
  obtenerPrecios() {
    this.claroService.getInformation().subscribe((rs: any) => {
      this.listaPrecios = rs.filter((x) => x.id === this.idOffer);
      this.listaPrecios.forEach((elemento) => {
        elemento.versions.forEach((item) => {
          item.productOfferingPrices.forEach((precios) => {
            precios.versions.forEach((versions) => {
              this.lstPreciosFiltrada.push(versions);
            });
          });
        });
      });
    });
  }
}
