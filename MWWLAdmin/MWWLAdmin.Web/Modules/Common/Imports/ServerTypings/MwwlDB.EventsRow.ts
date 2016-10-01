namespace MWWLAdmin.MwwlDB {
    export interface EventsRow {
        EventId?: number;
        EventName?: string;
        EventLocation?: string;
        EventLink?: string;
        EventStartDate?: string;
        EventEndDate?: string;
        EventActive?: boolean;
    }

    export namespace EventsRow {
        export const idProperty = 'EventId';
        export const nameProperty = 'EventName';
        export const localTextPrefix = 'MwwlDB.Events';

        export namespace Fields {
            export declare const EventId: string;
            export declare const EventName: string;
            export declare const EventLocation: string;
            export declare const EventLink: string;
            export declare const EventStartDate: string;
            export declare const EventEndDate: string;
            export declare const EventActive: string;
        }

        ['EventId', 'EventName', 'EventLocation', 'EventLink', 'EventStartDate', 'EventEndDate', 'EventActive'].forEach(x => (<any>Fields)[x] = x);
    }
}

