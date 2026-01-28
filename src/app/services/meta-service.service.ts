import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Meta } from '../models/meta.model';

@Injectable({
  providedIn: 'root'
})
export class MetaServiceService {

  private metas$: Observable<Meta[]>;

  constructor(private firestore: Firestore) {
    //inicializar dentro del constructor
    const metasRef = collection(this.firestore, 'metas');
    this.metas$ = collectionData(metasRef, { idField: 'id' }) as Observable<Meta[]>;
  }

  // leer
  getMetas(): Observable<Meta[]> {
    return this.metas$;
  }

  // escribir
  addMeta(meta: Meta) {
    const metasRef = collection(this.firestore, 'metas');
    return addDoc(metasRef, meta);
  }

  // eliminar
  deleteMeta(id: string) {
    const metaDocRef = doc(this.firestore, `metas/${id}`);
    return deleteDoc(metaDocRef);
  }
}