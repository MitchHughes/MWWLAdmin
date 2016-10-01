namespace MWWLAdmin.MwwlDB {
    export interface CategoriesRow {
        Id?: number;
        Name?: string;
        FolderName?: string;
    }

    export namespace CategoriesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'MwwlDB.Categories';
        export const lookupKey = 'MwwlDB.Categories';

        export function getLookup(): Q.Lookup<CategoriesRow> {
            return Q.getLookup<CategoriesRow>('MwwlDB.Categories');
        }

        export namespace Fields {
            export declare const Id: string;
            export declare const Name: string;
            export declare const FolderName: string;
        }

        ['Id', 'Name', 'FolderName'].forEach(x => (<any>Fields)[x] = x);
    }
}

