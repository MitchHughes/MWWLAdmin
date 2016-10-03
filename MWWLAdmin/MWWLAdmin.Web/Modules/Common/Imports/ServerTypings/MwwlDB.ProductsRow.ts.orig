namespace MWWLAdmin.MwwlDB {
    export interface ProductsRow {
        Id?: number;
        Title?: string;
        Description?: string;
        Available?: boolean;
        Sequence?: number;
    }

    export namespace ProductsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Title';
        export const localTextPrefix = 'MwwlDB.Products';
        export const lookupKey = 'MwwlDB.Products';

        export function getLookup(): Q.Lookup<ProductsRow> {
            return Q.getLookup<ProductsRow>('MwwlDB.Products');
        }

        export namespace Fields {
            export declare const Id: string;
            export declare const Title: string;
            export declare const Description: string;
            export declare const Available: string;
            export declare const Sequence: string;
        }

        ['Id', 'Title', 'Description', 'Available', 'Sequence'].forEach(x => (<any>Fields)[x] = x);
    }
}

