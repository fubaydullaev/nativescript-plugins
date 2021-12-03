import { DemoSharedBase } from '../utils';
import { EpubFolio } from '@fubaydullaev/nativescript-epub-folio';
import { Application } from '@nativescript/core';

export class DemoSharedNativescriptEpubFolio extends DemoSharedBase {

  testIt() {
    console.log('test nativescript-epub-folio!');

    let ePubReader = new EpubFolio();
    if (Application.android) {
        ePubReader.open('/storage/emulated/0/Download/Metamorphosis-jackson.epub');
    }else{
        ePubReader.open('book');
    }

  }
}