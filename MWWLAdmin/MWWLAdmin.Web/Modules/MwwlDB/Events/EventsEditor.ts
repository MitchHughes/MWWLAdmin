
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace MWWLAdmin.MwwlDB {
    
    @Serenity.Decorators.registerClass()
    export class EventsEditor extends Common.GridEditorBase<EventsRow> {
        protected getColumnsKey() { return 'MwwlDB.Events'; }
        protected getDialogType() { return EventsEditorDialog; }
                protected getLocalTextPrefix() { return EventsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}