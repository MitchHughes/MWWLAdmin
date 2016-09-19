
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace MWWLAdmin.MwwlDB {
    
    @Serenity.Decorators.registerClass()
    export class CategoriesEditor extends Common.GridEditorBase<CategoriesRow> {
        protected getColumnsKey() { return 'MwwlDB.Categories'; }
        protected getDialogType() { return CategoriesEditorDialog; }
                protected getLocalTextPrefix() { return CategoriesRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}