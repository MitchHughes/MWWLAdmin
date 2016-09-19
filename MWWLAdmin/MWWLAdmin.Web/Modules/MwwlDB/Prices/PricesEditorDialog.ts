
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace MWWLAdmin.MwwlDB {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PricesEditorDialog extends Common.GridEditorDialog<PricesRow> {
        protected getFormKey() { return PricesForm.formKey; }
                protected getLocalTextPrefix() { return PricesRow.localTextPrefix; }
        protected getNameProperty() { return PricesRow.nameProperty; }
        protected form = new PricesForm(this.idPrefix);
    }
}