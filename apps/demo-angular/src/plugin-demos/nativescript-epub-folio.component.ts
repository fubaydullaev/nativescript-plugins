import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptEpubFolio } from '@demo/shared';
import { } from '@fubaydullaev/nativescript-epub-folio';

@Component({
	selector: 'demo-nativescript-epub-folio',
	templateUrl: 'nativescript-epub-folio.component.html',
})
export class NativescriptEpubFolioComponent {
  
  demoShared: DemoSharedNativescriptEpubFolio;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptEpubFolio();
  }

}