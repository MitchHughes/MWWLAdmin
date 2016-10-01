
namespace MWWLAdmin.MwwlDB {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PaintingCategoriesDialog extends Serenity.EntityDialog<PaintingCategoriesRow, any> {
        protected getFormKey() { return PaintingCategoriesForm.formKey; }
        protected getIdProperty() { return PaintingCategoriesRow.idProperty; }
        protected getLocalTextPrefix() { return PaintingCategoriesRow.localTextPrefix; }
        protected getService() { return PaintingCategoriesService.baseUrl; }

        protected form = new PaintingCategoriesForm(this.idPrefix);

    }
}