
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace MWWLAdmin.MwwlDB {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PaintingsEditorDialog extends Common.GridEditorDialog<PaintingsRow> {
        protected getFormKey() { return PaintingsForm.formKey; }
                protected getLocalTextPrefix() { return PaintingsRow.localTextPrefix; }
        protected getNameProperty() { return PaintingsRow.nameProperty; }
        protected form = new PaintingsForm(this.idPrefix);
    }
}