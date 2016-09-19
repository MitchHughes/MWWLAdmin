
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace MWWLAdmin.MwwlDB {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class TextsEditorDialog extends Common.GridEditorDialog<TextsRow> {
        protected getFormKey() { return TextsForm.formKey; }
                protected getLocalTextPrefix() { return TextsRow.localTextPrefix; }
        protected getNameProperty() { return TextsRow.nameProperty; }
        protected form = new TextsForm(this.idPrefix);
    }
}