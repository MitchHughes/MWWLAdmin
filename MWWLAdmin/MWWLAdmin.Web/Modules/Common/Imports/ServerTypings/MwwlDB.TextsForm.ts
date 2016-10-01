﻿namespace MWWLAdmin.MwwlDB {
    export class TextsForm extends Serenity.PrefixedContext {
        static formKey = 'MwwlDB.Texts';

    }

    export interface TextsForm {
        Text: Serenity.TextAreaEditor;
        Note: Serenity.TextAreaEditor;
    }

    [['Text', () => Serenity.TextAreaEditor], ['Note', () => Serenity.TextAreaEditor]].forEach(x => Object.defineProperty(TextsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

