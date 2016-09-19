
namespace MWWLAdmin.MwwlDB {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class TextsDialog extends Serenity.EntityDialog<TextsRow, any> {
        protected getFormKey() { return TextsForm.formKey; }
        protected getIdProperty() { return TextsRow.idProperty; }
        protected getLocalTextPrefix() { return TextsRow.localTextPrefix; }
        protected getNameProperty() { return TextsRow.nameProperty; }
        protected getService() { return TextsService.baseUrl; }

        protected form = new TextsForm(this.idPrefix);

    }
}