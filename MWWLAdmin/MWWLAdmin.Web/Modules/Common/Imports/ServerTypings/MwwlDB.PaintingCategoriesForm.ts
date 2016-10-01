﻿namespace MWWLAdmin.MwwlDB {
    export class PaintingCategoriesForm extends Serenity.PrefixedContext {
        static formKey = 'MwwlDB.PaintingCategories';

    }

    export interface PaintingCategoriesForm {
        PaintingId: Serenity.StringEditor;
    }

    [['PaintingId', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(PaintingCategoriesForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
