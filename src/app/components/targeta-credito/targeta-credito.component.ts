import { ForwardRefHandling } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-targeta-credito',
  templateUrl: './targeta-credito.component.html',
  styleUrls: ['./targeta-credito.component.css']
})
export class TargetaCreditoComponent implements OnInit {
  listTarjetas: any[] = [
    { titular: 'Juan Gallego', numeroTarjeta: '2643133', fechaExpiracion: '11/23', cvv: '512' },
    { titular: 'Cristian Gallego', numeroTarjeta: '265553133', fechaExpiracion: '11/26', cvv: '513' }
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder,
    private toastr: ToastrService) {
    this.form = this.fb.group({
      titular: ['', Validators.required],
      numeroTarjeta: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      fechaExpiracion: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]]
    })
  }

  ngOnInit(): void {

  }

  agregarTarjeta() {
    console.log(this.form);
    const targeta: any = {
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value,
    }
    this.listTarjetas.push(targeta)
    this.toastr.success('Exito', 'Tarjeta Registrada');
    this.form.reset();
  }
  eliminarTarjeta(index: number) {
    this.listTarjetas.splice(index, 1);
    this.toastr.error('La tarjeta se elimino', 'tarjeta Eliminada')
  }
}
