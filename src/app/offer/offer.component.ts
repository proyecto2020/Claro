import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClaroService } from '../services/claro.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
})
export class OfferComponent implements OnInit {
  listaOfertas: any;
  ofertasForm: FormGroup;
  offerSelected: string = '';
  constructor(
    private readonly claroService: ClaroService,
    private readonly formBuilder: FormBuilder
  ) {
    this.listaOfertas = new Array<any>();
  }

  ngOnInit(): void {
    this.obtenerOfertas();
    this.inicarFormulario();
  }
  inicarFormulario() {
    this.ofertasForm = this.formBuilder.group({
      oferta: [''],
      IdOferta: [''],
      nombre: [''],
    });
  }
  filtrarOferta(event) {
    this.offerSelected = event.target.value;
    this.ofertasForm.controls.IdOferta.reset();
    this.ofertasForm.controls.nombre.reset();
    let items = new Array<any>();
    this.listaOfertas.forEach((elementos) => {
      elementos.versions.forEach((item) => {
        items.push(item);
      });
    });
    const item = items.find((x) => x.id === event.target.value);
    this.setInformation(item);
  }
  setInformation(item) {
    this.ofertasForm.controls.IdOferta.setValue(item.id);
    this.ofertasForm.controls.nombre.setValue(item.name);
  }
  obtenerOfertas() {
    this.claroService.getInformation().subscribe((rs: any) => {
      this.listaOfertas = rs;
    });
  }
}
