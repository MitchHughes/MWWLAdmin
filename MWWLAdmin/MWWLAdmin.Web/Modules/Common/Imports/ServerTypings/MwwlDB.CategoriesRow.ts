namespace MWWLAdmin.MwwlDB {
    export interface CategoriesRow {
        Id?: number;
        Name?: string;
        Description?: string;
        Active?: boolean;
    }

    export namespace CategoriesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'MwwlDB.Categories';

        export namespace Fields {
            export declare const Id: string;
            export declare const Name: string;
            export declare const Description: string;
            export declare const Active: string;
        }

        ['Id', 'Name', 'Description', 'Active'].forEach(x => (<any>Fields)[x] = x);
    }
}

