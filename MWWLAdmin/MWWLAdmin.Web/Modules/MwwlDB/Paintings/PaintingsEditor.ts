
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace MWWLAdmin.MwwlDB {
    
    @Serenity.Decorators.registerClass()
    export class PaintingsEditor extends Common.GridEditorBase<PaintingsRow> {
        protected getColumnsKey() { return 'MwwlDB.Paintings'; }
        protected getDialogType() { return PaintingsEditorDialog; }
                protected getLocalTextPrefix() { return PaintingsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}