﻿namespace MWWLAdmin.MwwlDB {
    export class PaintingsForm extends Serenity.PrefixedContext {
        static formKey = 'MwwlDB.Paintings';

    }

    export interface PaintingsForm {
        Title: Serenity.StringEditor;
        CategoryId: Serenity.LookupEditor;
        OriginalFileName: Serenity.StringEditor;
        Dimension: Serenity.StringEditor;
        Workshop: Serenity.BooleanEditor;
        Large: Serenity.BooleanEditor;
        Small: Serenity.BooleanEditor;
        OriginalAvailable: Serenity.BooleanEditor;
        OriginalPrice: Serenity.DecimalEditor;
        Framed: Serenity.BooleanEditor;
    }

    [['Title', () => Serenity.StringEditor], ['CategoryId', () => Serenity.LookupEditor], ['OriginalFileName', () => Serenity.StringEditor], ['Dimension', () => Serenity.StringEditor], ['Workshop', () => Serenity.BooleanEditor], ['Large', () => Serenity.BooleanEditor], ['Small', () => Serenity.BooleanEditor], ['OriginalAvailable', () => Serenity.BooleanEditor], ['OriginalPrice', () => Serenity.DecimalEditor], ['Framed', () => Serenity.BooleanEditor]].forEach(x => Object.defineProperty(PaintingsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

