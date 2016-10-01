
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace MWWLAdmin.MwwlDB {
    
    @Serenity.Decorators.registerClass()
    export class PaintingCategoriesEditor extends Common.GridEditorBase<PaintingCategoriesRow> {
        protected getColumnsKey() { return 'MwwlDB.PaintingCategories'; }
        protected getDialogType() { return PaintingCategoriesEditorDialog; }
                protected getLocalTextPrefix() { return PaintingCategoriesRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}