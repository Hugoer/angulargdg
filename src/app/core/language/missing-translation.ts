import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';

export class WebgisMissingTranslationHandler implements MissingTranslationHandler {

    constructor() { }

    handle(params: MissingTranslationHandlerParams) {
        const key = params.key;
        console.log(`${key} is not translated!`);
        return `translation-not-found[${key}]`;
    }
}
