// importar los componentes necesarios

import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MetaServiceService } from '../services/meta-service.service';
import { Meta } from '../models/meta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false
})

// exportar la clase
export class HomeComponent implements OnInit {
  misMetas: Meta[] = [];
  nuevaMetaTexto: string = '';

  constructor(
    private metaService: MetaServiceService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.metaService.getMetas().subscribe((res: Meta[]) => {
        this.misMetas = res;
      });
    }
  }

  agregarMeta() {
    if (isPlatformBrowser(this.platformId) && this.nuevaMetaTexto.trim() !== '') {
      this.metaService.addMeta({ meta: this.nuevaMetaTexto });
      this.nuevaMetaTexto = '';
    }
  }

  borrarMeta(id: string | undefined) {
    if (isPlatformBrowser(this.platformId) && id) {
      this.metaService.deleteMeta(id);
    }
  }
}