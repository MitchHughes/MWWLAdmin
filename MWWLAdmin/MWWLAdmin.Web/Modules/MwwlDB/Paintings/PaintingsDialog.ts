
namespace MWWLAdmin.MwwlDB {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PaintingsDialog extends Serenity.EntityDialog<PaintingsRow, any> {
        protected getFormKey() { return PaintingsForm.formKey; }
        protected getIdProperty() { return PaintingsRow.idProperty; }
        protected getLocalTextPrefix() { return PaintingsRow.localTextPrefix; }
        protected getNameProperty() { return PaintingsRow.nameProperty; }
        protected getService() { return PaintingsService.baseUrl; }

        protected form = new PaintingsForm(this.idPrefix);

    }
}