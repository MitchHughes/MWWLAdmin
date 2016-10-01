
namespace MWWLAdmin.MwwlDB {
    
    @Serenity.Decorators.registerClass()
    export class EventsGrid extends Serenity.EntityGrid<EventsRow, any> {
        protected getColumnsKey() { return 'MwwlDB.Events'; }
        protected getDialogType() { return EventsDialog; }
        protected getIdProperty() { return EventsRow.idProperty; }
        protected getLocalTextPrefix() { return EventsRow.localTextPrefix; }
        protected getService() { return EventsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}