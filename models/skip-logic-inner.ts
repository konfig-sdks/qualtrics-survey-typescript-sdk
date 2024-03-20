/*
Qualtrics Survey API

The Qualtrics Survey endpoints give you access to the structure of the surveys you create. 

Surveys have a complex structure, and you are encouraged to become familiar with the structure using your brand's Qualtrics page to build surveys at first. Then you can query those surveys using these endpoints. 

Once you are familiar, you can use this API to create surveys on the fly, or modify existing surveys in your library. 

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Locator } from './locator';
import { SkipLogicInnerSkipToDestination } from './skip-logic-inner-skip-to-destination';

/**
 * 
 * @export
 * @interface SkipLogicInner
 */
export interface SkipLogicInner {
    [key: string]: any;

    /**
     * The ID of the logic.
     * @type {string}
     * @memberof SkipLogicInner
     */
    'SkipLogicID'?: string;
    /**
     * The ID of the choice.
     * @type {string}
     * @memberof SkipLogicInner
     */
    'ChoiceID'?: string;
    /**
     * 
     * @type {Locator}
     * @memberof SkipLogicInner
     */
    'ChoiceLocator': Locator;
    /**
     * All the possible skip logic conditions
     * @type {string}
     * @memberof SkipLogicInner
     */
    'Condition': SkipLogicInnerConditionEnum;
    /**
     * a user-provided description field.
     * @type {string}
     * @memberof SkipLogicInner
     */
    'Description'?: string;
    /**
     * 
     * @type {Locator}
     * @memberof SkipLogicInner
     */
    'Locator'?: Locator;
    /**
     * The unique identifier for the question.
     * @type {string}
     * @memberof SkipLogicInner
     */
    'QuestionID': string;
    /**
     * The text description of the skip condition
     * @type {string}
     * @memberof SkipLogicInner
     */
    'SkipToDescription'?: string;
    /**
     * 
     * @type {SkipLogicInnerSkipToDestination}
     * @memberof SkipLogicInner
     */
    'SkipToDestination'?: SkipLogicInnerSkipToDestination;
}

type SkipLogicInnerConditionEnum = 'Selected' | 'NotSelected' | 'Displayed' | 'NotDisplayed' | 'GreaterThan' | 'LessThan' | 'GreaterThanOrEqual' | 'LessThanOrEqual' | 'EqualTo' | 'NotEqualTo' | 'Empty' | 'NotEmpty' | 'ClickedIn' | 'NotClickedIn' | 'Uploaded' | 'NotUploaded' | 'Contains' | 'DoesNotContain' | 'MatchesRegex'


