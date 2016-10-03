﻿namespace MWWLAdmin.MwwlDB {
    export interface PaintingCategoriesRow {
        PaintingCategoriesId?: number;
        CategoryId?: number;
        PaintingId?: string;
        CategoryName?: string;
        CategoryDescription?: string;
        CategoryActive?: boolean;
        PaintingTitle?: string;
        PaintingOriginalFileName?: string;
        PaintingDimension?: string;
        PaintingWorkshop?: boolean;
        PaintingOriginalAvailable?: boolean;
        PaintingOriginalPrice?: number;
        PaintingFramed?: boolean;
    }

    export namespace PaintingCategoriesRow {
        export const idProperty = 'PaintingCategoriesId';
        export const localTextPrefix = 'MwwlDB.PaintingCategories';

        export namespace Fields {
            export declare const PaintingCategoriesId: string;
            export declare const CategoryId: string;
            export declare const PaintingId: string;
            export declare const CategoryName: string;
            export declare const CategoryDescription: string;
            export declare const CategoryActive: string;
            export declare const PaintingTitle: string;
            export declare const PaintingOriginalFileName: string;
            export declare const PaintingDimension: string;
            export declare const PaintingWorkshop: string;
            export declare const PaintingOriginalAvailable: string;
            export declare const PaintingOriginalPrice: string;
            export declare const PaintingFramed: string;
        }

        ['PaintingCategoriesId', 'CategoryId', 'PaintingId', 'CategoryName', 'CategoryDescription', 'CategoryActive', 'PaintingTitle', 'PaintingOriginalFileName', 'PaintingDimension', 'PaintingWorkshop', 'PaintingOriginalAvailable', 'PaintingOriginalPrice', 'PaintingFramed'].forEach(x => (<any>Fields)[x] = x);
    }
}

