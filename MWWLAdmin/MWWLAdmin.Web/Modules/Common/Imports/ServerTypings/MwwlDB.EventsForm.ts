namespace MWWLAdmin.MwwlDB {
    export class EventsForm extends Serenity.PrefixedContext {
        static formKey = 'MwwlDB.Events';

    }

    export interface EventsForm {
        EventName: Serenity.StringEditor;
        EventLocation: Serenity.StringEditor;
        EventLink: Serenity.StringEditor;
        EventStartDate: Serenity.DateEditor;
        EventEndDate: Serenity.DateEditor;
        EventActive: Serenity.BooleanEditor;
    }

    [['EventName', () => Serenity.StringEditor], ['EventLocation', () => Serenity.StringEditor], ['EventLink', () => Serenity.StringEditor], ['EventStartDate', () => Serenity.DateEditor], ['EventEndDate', () => Serenity.DateEditor], ['EventActive', () => Serenity.BooleanEditor]].forEach(x => Object.defineProperty(EventsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

