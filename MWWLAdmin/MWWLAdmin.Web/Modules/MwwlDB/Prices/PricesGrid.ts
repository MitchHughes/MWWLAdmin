
namespace MWWLAdmin.MwwlDB {
    
    @Serenity.Decorators.registerClass()
    export class PricesGrid extends Serenity.EntityGrid<PricesRow, any> {
        protected getColumnsKey() { return 'MwwlDB.Prices'; }
        protected getDialogType() { return PricesDialog; }
        protected getIdProperty() { return PricesRow.idProperty; }
        protected getLocalTextPrefix() { return PricesRow.localTextPrefix; }
        protected getService() { return PricesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}