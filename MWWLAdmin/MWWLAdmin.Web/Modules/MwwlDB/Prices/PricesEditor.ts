
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace MWWLAdmin.MwwlDB {
    
    @Serenity.Decorators.registerClass()
    export class PricesEditor extends Common.GridEditorBase<PricesRow> {
        protected getColumnsKey() { return 'MwwlDB.Prices'; }
        protected getDialogType() { return PricesEditorDialog; }
                protected getLocalTextPrefix() { return PricesRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}