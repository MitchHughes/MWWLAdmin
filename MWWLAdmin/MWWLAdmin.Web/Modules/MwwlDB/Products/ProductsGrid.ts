
namespace MWWLAdmin.MwwlDB {
    
    @Serenity.Decorators.registerClass()
    export class ProductsGrid extends Serenity.EntityGrid<ProductsRow, any> {
        protected getColumnsKey() { return 'MwwlDB.Products'; }
        protected getDialogType() { return ProductsDialog; }
        protected getIdProperty() { return ProductsRow.idProperty; }
        protected getLocalTextPrefix() { return ProductsRow.localTextPrefix; }
        protected getService() { return ProductsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}