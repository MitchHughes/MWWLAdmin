namespace MWWLAdmin.MwwlDB {
    export class PricesForm extends Serenity.PrefixedContext {
        static formKey = 'MwwlDB.Prices';

    }

    export interface PricesForm {
        Item: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Price: Serenity.DecimalEditor;
        Active: Serenity.BooleanEditor;
        ProductId: Serenity.LookupEditor;
    }

    [['Item', () => Serenity.StringEditor], ['Description', () => Serenity.TextAreaEditor], ['Price', () => Serenity.DecimalEditor], ['Active', () => Serenity.BooleanEditor], ['ProductId', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(PricesForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

