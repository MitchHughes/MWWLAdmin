﻿namespace MWWLAdmin.MwwlDB {
    export class CategoriesForm extends Serenity.PrefixedContext {
        static formKey = 'MwwlDB.Categories';

    }

    export interface CategoriesForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Active: Serenity.BooleanEditor;
    }

    [['Name', () => Serenity.StringEditor], ['Description', () => Serenity.StringEditor], ['Active', () => Serenity.BooleanEditor]].forEach(x => Object.defineProperty(CategoriesForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

