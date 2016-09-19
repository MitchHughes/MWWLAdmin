
namespace MWWLAdmin.MwwlDB {
    
    @Serenity.Decorators.registerClass()
    export class PaintingsGrid extends Serenity.EntityGrid<PaintingsRow, any> {
        protected getColumnsKey() { return 'MwwlDB.Paintings'; }
        protected getDialogType() { return PaintingsDialog; }
        protected getIdProperty() { return PaintingsRow.idProperty; }
        protected getLocalTextPrefix() { return PaintingsRow.localTextPrefix; }
        protected getService() { return PaintingsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}