/*
Qualtrics Survey API

The Qualtrics Survey endpoints give you access to the structure of the surveys you create. 

Surveys have a complex structure, and you are encouraged to become familiar with the structure using your brand's Qualtrics page to build surveys at first. Then you can query those surveys using these endpoints. 

Once you are familiar, you can use this API to create surveys on the fly, or modify existing surveys in your library. 

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Scoring categories.
 * @export
 * @interface ScoringDefinitionScoringCategoriesInner
 */
export interface ScoringDefinitionScoringCategoriesInner {
    [key: string]: any;

    /**
     * A user-provided description of the survey scoring.
     * @type {string}
     * @memberof ScoringDefinitionScoringCategoriesInner
     */
    'Description': string;
    /**
     * The unique identifier for the scoring.
     * @type {string}
     * @memberof ScoringDefinitionScoringCategoriesInner
     */
    'ID': string;
    /**
     * The names of the scoring categories.
     * @type {string}
     * @memberof ScoringDefinitionScoringCategoriesInner
     */
    'Name': string;
}

