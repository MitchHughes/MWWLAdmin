
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace MWWLAdmin.MwwlDB {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CategoriesEditorDialog extends Common.GridEditorDialog<CategoriesRow> {
        protected getFormKey() { return CategoriesForm.formKey; }
                protected getLocalTextPrefix() { return CategoriesRow.localTextPrefix; }
        protected getNameProperty() { return CategoriesRow.nameProperty; }
        protected form = new CategoriesForm(this.idPrefix);
    }
}