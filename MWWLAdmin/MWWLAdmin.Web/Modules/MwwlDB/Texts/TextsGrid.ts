
namespace MWWLAdmin.MwwlDB {
    
    @Serenity.Decorators.registerClass()
    export class TextsGrid extends Serenity.EntityGrid<TextsRow, any> {
        protected getColumnsKey() { return 'MwwlDB.Texts'; }
        protected getDialogType() { return TextsDialog; }
        protected getIdProperty() { return TextsRow.idProperty; }
        protected getLocalTextPrefix() { return TextsRow.localTextPrefix; }
        protected getService() { return TextsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}