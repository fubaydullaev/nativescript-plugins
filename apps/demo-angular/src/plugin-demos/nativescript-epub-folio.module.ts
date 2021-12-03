import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptEpubFolioComponent } from './nativescript-epub-folio.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptEpubFolioComponent }])],
  declarations: [NativescriptEpubFolioComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptEpubFolioModule {}
