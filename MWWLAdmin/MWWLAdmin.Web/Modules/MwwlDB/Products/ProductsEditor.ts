
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace MWWLAdmin.MwwlDB {
    
    @Serenity.Decorators.registerClass()
    export class ProductsEditor extends Common.GridEditorBase<ProductsRow> {
        protected getColumnsKey() { return 'MwwlDB.Products'; }
        protected getDialogType() { return ProductsEditorDialog; }
                protected getLocalTextPrefix() { return ProductsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}