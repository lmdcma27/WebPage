import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReloadService {

  shouldReload = false;

  setReloadFlag() {
    this.shouldReload = true;
  }
}
