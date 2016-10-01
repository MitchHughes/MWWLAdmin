
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace MWWLAdmin.MwwlDB {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PaintingCategoriesEditorDialog extends Common.GridEditorDialog<PaintingCategoriesRow> {
        protected getFormKey() { return PaintingCategoriesForm.formKey; }
                protected getLocalTextPrefix() { return PaintingCategoriesRow.localTextPrefix; }
        protected form = new PaintingCategoriesForm(this.idPrefix);
    }
}