/*
Qualtrics Survey API

The Qualtrics Survey endpoints give you access to the structure of the surveys you create. 

Surveys have a complex structure, and you are encouraged to become familiar with the structure using your brand's Qualtrics page to build surveys at first. Then you can query those surveys using these endpoints. 

Once you are familiar, you can use this API to create surveys on the fly, or modify existing surveys in your library. 

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Language } from './language';
import { QuestionChoicesValue } from './question-choices-value';
import { QuestionConfiguration } from './question-configuration';
import { QuestionSubSelector } from './question-sub-selector';
import { Selection } from './selection';
import { Validation } from './validation';

/**
 * 
 * @export
 * @interface SliderQuestionDefinition
 */
export interface SliderQuestionDefinition {
    /**
     * The order the choices are to be displayed in.
     * @type {Array<string>}
     * @memberof SliderQuestionDefinition
     */
    'ChoiceOrder': Array<string>;
    /**
     * Selections for a question
     * @type {{ [key: string]: QuestionChoicesValue; }}
     * @memberof SliderQuestionDefinition
     */
    'Choices': { [key: string]: QuestionChoicesValue; };
    /**
     * 
     * @type {QuestionConfiguration}
     * @memberof SliderQuestionDefinition
     */
    'Configuration': QuestionConfiguration;
    /**
     * The tag to identify the question in exported data.
     * @type {string}
     * @memberof SliderQuestionDefinition
     */
    'DataExportTag': string;
    /**
     * 
     * @type {Selection}
     * @memberof SliderQuestionDefinition
     */
    'Labels': Selection;
    /**
     * 
     * @type {Language}
     * @memberof SliderQuestionDefinition
     */
    'Language': Language;
    /**
     * 
     * @type {number}
     * @memberof SliderQuestionDefinition
     */
    'NextAnswerId': number;
    /**
     * 
     * @type {number}
     * @memberof SliderQuestionDefinition
     */
    'NextChoiceId': number;
    /**
     * 
     * @type {string}
     * @memberof SliderQuestionDefinition
     */
    'QuestionDescription': string;
    /**
     * The unique identifier for the question.
     * @type {string}
     * @memberof SliderQuestionDefinition
     */
    'QuestionID'?: string;
    /**
     * Text for the question.
     * @type {string}
     * @memberof SliderQuestionDefinition
     */
    'QuestionText': string;
    /**
     * 
     * @type {string}
     * @memberof SliderQuestionDefinition
     */
    'QuestionType': SliderQuestionDefinitionQuestionTypeEnum;
    /**
     * Numeric mapping of question choices.
     * @type {{ [key: string]: string; }}
     * @memberof SliderQuestionDefinition
     */
    'RecodeValues'?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof SliderQuestionDefinition
     */
    'Selector': SliderQuestionDefinitionSelectorEnum;
    /**
     * Question SubSelector.
     * @type {QuestionSubSelector}
     * @memberof SliderQuestionDefinition
     */
    'SubSelector': QuestionSubSelector;
    /**
     * 
     * @type {Validation}
     * @memberof SliderQuestionDefinition
     */
    'Validation': Validation;
}

type SliderQuestionDefinitionQuestionTypeEnum = 'Slider'
type SliderQuestionDefinitionSelectorEnum = 'HBAR' | 'HSLIDER' | 'STAR'


