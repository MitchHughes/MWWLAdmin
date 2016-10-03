﻿namespace MWWLAdmin.MwwlDB {
    export class PaintingsForm extends Serenity.PrefixedContext {
        static formKey = 'MwwlDB.Paintings';

    }

    export interface PaintingsForm {
        Title: Serenity.StringEditor;
        OriginalFileName: Serenity.StringEditor;
        Dimension: Serenity.StringEditor;
        Workshop: Serenity.BooleanEditor;
        OriginalAvailable: Serenity.BooleanEditor;
        OriginalPrice: Serenity.DecimalEditor;
        Framed: Serenity.BooleanEditor;
        CategoryList: Serenity.LookupEditor;
    }

    [['Title', () => Serenity.StringEditor], ['OriginalFileName', () => Serenity.StringEditor], ['Dimension', () => Serenity.StringEditor], ['Workshop', () => Serenity.BooleanEditor], ['OriginalAvailable', () => Serenity.BooleanEditor], ['OriginalPrice', () => Serenity.DecimalEditor], ['Framed', () => Serenity.BooleanEditor], ['CategoryList', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(PaintingsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

