import { NativescriptEpubFolioCommon } from './common';
import { Frame } from "@nativescript/core";

export class NativescriptEpubFolio extends NativescriptEpubFolioCommon {
    private _config;

    constructor() {
        super();
        this._config = new FolioReaderConfig();
    }
    get() {
        let version = NSBundle.mainBundle.objectForInfoDictionaryKey("CFBundleShortVersionString");
        return version;
    }
    open(fileName) {
        let bookPath = NSBundle.mainBundle.pathForResourceOfType(fileName, 'epub');
        FolioReader.presentReaderWithParentViewControllerWithEpubPathAndConfigShouldRemoveEpubAnimated(Frame.topmost().currentPage.ios, bookPath, this._config, false, true);
    }
}
