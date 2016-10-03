namespace MWWLAdmin.MwwlDB {
    export interface PaintingsRow {
        Id?: string;
        Title?: string;
        OriginalFileName?: string;
        Dimension?: string;
        Workshop?: boolean;
        OriginalAvailable?: boolean;
        OriginalPrice?: number;
        Framed?: boolean;
        CategoryList?: number[];
    }

    export namespace PaintingsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Title';
        export const localTextPrefix = 'MwwlDB.Paintings';

        export namespace Fields {
            export declare const Id: string;
            export declare const Title: string;
            export declare const OriginalFileName: string;
            export declare const Dimension: string;
            export declare const Workshop: string;
            export declare const OriginalAvailable: string;
            export declare const OriginalPrice: string;
            export declare const Framed: string;
            export declare const CategoryList: string;
        }

        ['Id', 'Title', 'OriginalFileName', 'Dimension', 'Workshop', 'OriginalAvailable', 'OriginalPrice', 'Framed', 'CategoryList'].forEach(x => (<any>Fields)[x] = x);
    }
}

