
namespace MWWLAdmin.MwwlDB {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PricesDialog extends Serenity.EntityDialog<PricesRow, any> {
        protected getFormKey() { return PricesForm.formKey; }
        protected getIdProperty() { return PricesRow.idProperty; }
        protected getLocalTextPrefix() { return PricesRow.localTextPrefix; }
        protected getNameProperty() { return PricesRow.nameProperty; }
        protected getService() { return PricesService.baseUrl; }

        protected form = new PricesForm(this.idPrefix);

    }
}