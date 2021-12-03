import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptEpubFolio } from '@demo/shared';
import { } from '@fubaydullaev/nativescript-epub-folio';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptEpubFolio {
	
}
