
namespace MWWLAdmin.MwwlDB {
    
    @Serenity.Decorators.registerClass()
    export class PaintingCategoriesGrid extends Serenity.EntityGrid<PaintingCategoriesRow, any> {
        protected getColumnsKey() { return 'MwwlDB.PaintingCategories'; }
        protected getDialogType() { return PaintingCategoriesDialog; }
        protected getIdProperty() { return PaintingCategoriesRow.idProperty; }
        protected getLocalTextPrefix() { return PaintingCategoriesRow.localTextPrefix; }
        protected getService() { return PaintingCategoriesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}