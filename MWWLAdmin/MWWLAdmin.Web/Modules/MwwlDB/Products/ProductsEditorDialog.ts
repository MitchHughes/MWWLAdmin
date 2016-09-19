
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace MWWLAdmin.MwwlDB {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ProductsEditorDialog extends Common.GridEditorDialog<ProductsRow> {
        protected getFormKey() { return ProductsForm.formKey; }
                protected getLocalTextPrefix() { return ProductsRow.localTextPrefix; }
        protected getNameProperty() { return ProductsRow.nameProperty; }
        protected form = new ProductsForm(this.idPrefix);
    }
}