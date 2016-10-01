
namespace MWWLAdmin.MwwlDB {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class EventsDialog extends Serenity.EntityDialog<EventsRow, any> {
        protected getFormKey() { return EventsForm.formKey; }
        protected getIdProperty() { return EventsRow.idProperty; }
        protected getLocalTextPrefix() { return EventsRow.localTextPrefix; }
        protected getNameProperty() { return EventsRow.nameProperty; }
        protected getService() { return EventsService.baseUrl; }

        protected form = new EventsForm(this.idPrefix);

    }
}