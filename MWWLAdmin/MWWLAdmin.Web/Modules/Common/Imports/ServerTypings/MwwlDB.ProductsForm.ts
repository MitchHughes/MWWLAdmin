namespace MWWLAdmin.MwwlDB {
    export class ProductsForm extends Serenity.PrefixedContext {
        static formKey = 'MwwlDB.Products';

    }

    export interface ProductsForm {
        Title: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Available: Serenity.BooleanEditor;
        Sequence: Serenity.IntegerEditor;
    }

    [['Title', () => Serenity.StringEditor], ['Description', () => Serenity.StringEditor], ['Available', () => Serenity.BooleanEditor], ['Sequence', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(ProductsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

