
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace MWWLAdmin.MwwlDB {
    
    @Serenity.Decorators.registerClass()
    export class TextsEditor extends Common.GridEditorBase<TextsRow> {
        protected getColumnsKey() { return 'MwwlDB.Texts'; }
        protected getDialogType() { return TextsEditorDialog; }
                protected getLocalTextPrefix() { return TextsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}