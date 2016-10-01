
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace MWWLAdmin.MwwlDB {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class EventsEditorDialog extends Common.GridEditorDialog<EventsRow> {
        protected getFormKey() { return EventsForm.formKey; }
                protected getLocalTextPrefix() { return EventsRow.localTextPrefix; }
        protected getNameProperty() { return EventsRow.nameProperty; }
        protected form = new EventsForm(this.idPrefix);
    }
}