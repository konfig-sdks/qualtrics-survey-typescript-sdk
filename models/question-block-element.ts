/*
Qualtrics Survey API

The Qualtrics Survey endpoints give you access to the structure of the surveys you create. 

Surveys have a complex structure, and you are encouraged to become familiar with the structure using your brand's Qualtrics page to build surveys at first. Then you can query those surveys using these endpoints. 

Once you are familiar, you can use this API to create surveys on the fly, or modify existing surveys in your library. 

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SkipLogicInner } from './skip-logic-inner';

/**
 * Question block element
 * @export
 * @interface QuestionBlockElement
 */
export interface QuestionBlockElement {
    [key: string]: any;

    /**
     * 
     * @type {string}
     * @memberof QuestionBlockElement
     */
    'Type': QuestionBlockElementTypeEnum;
    /**
     * The unique identifier for the question.
     * @type {string}
     * @memberof QuestionBlockElement
     */
    'QuestionID': string;
    /**
     * Defines how flow skips to a question, the end of block or end of survey based on logic
     * @type {Array<SkipLogicInner>}
     * @memberof QuestionBlockElement
     */
    'SkipLogic'?: Array<SkipLogicInner>;
}

type QuestionBlockElementTypeEnum = 'Question'


