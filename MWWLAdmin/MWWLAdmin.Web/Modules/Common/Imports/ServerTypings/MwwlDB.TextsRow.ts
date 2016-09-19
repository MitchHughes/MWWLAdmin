﻿namespace MWWLAdmin.MwwlDB {
    export interface TextsRow {
        Id?: string;
        Text?: string;
        Note?: string;
    }

    export namespace TextsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Id';
        export const localTextPrefix = 'MwwlDB.Texts';

        export namespace Fields {
            export declare const Id: string;
            export declare const Text: string;
            export declare const Note: string;
        }

        ['Id', 'Text', 'Note'].forEach(x => (<any>Fields)[x] = x);
    }
}

