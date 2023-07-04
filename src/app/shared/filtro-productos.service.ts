import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltroProductosService {
  categoriaSeleccionada: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor() { }
}
