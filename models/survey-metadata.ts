/*
Qualtrics Survey API

The Qualtrics Survey endpoints give you access to the structure of the surveys you create. 

Surveys have a complex structure, and you are encouraged to become familiar with the structure using your brand's Qualtrics page to build surveys at first. Then you can query those surveys using these endpoints. 

Once you are familiar, you can use this API to create surveys on the fly, or modify existing surveys in your library. 

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SurveyStatus } from './survey-status';

/**
 * 
 * @export
 * @interface SurveyMetadata
 */
export interface SurveyMetadata {
    /**
     * The [unique identifier](https://api.qualtrics.com/ZG9jOjg3NjYzNQ-finding-your-qualtrics-i-ds) for this survey.
     * @type {string}
     * @memberof SurveyMetadata
     */
    'SurveyID': string;
    /**
     * The name of the survey. 
     * @type {string}
     * @memberof SurveyMetadata
     */
    'SurveyName': string;
    /**
     * The description of the survey. 
     * @type {string}
     * @memberof SurveyMetadata
     */
    'SurveyDescription': string | null;
    /**
     * The unique identifier for a specific user.
     * @type {string}
     * @memberof SurveyMetadata
     */
    'SurveyOwnerID': string;
    /**
     * The brand ID associated with the survey. 
     * @type {string}
     * @memberof SurveyMetadata
     */
    'SurveyBrandID': string;
    /**
     * 
     * @type {string}
     * @memberof SurveyMetadata
     */
    'DivisionID': string | null;
    /**
     * The default language of the survey. 
     * @type {string}
     * @memberof SurveyMetadata
     */
    'SurveyLanguage': string;
    /**
     * A unique identifier for the response set.
     * @type {string}
     * @memberof SurveyMetadata
     */
    'SurveyActiveResponseSet': string;
    /**
     * The distribution status of the survey, or a flag indicating that it\'s a library block
     * @type {SurveyStatus}
     * @memberof SurveyMetadata
     */
    'SurveyStatus': SurveyStatus;
    /**
     * The date and time the survey starts. 
     * @type {string}
     * @memberof SurveyMetadata
     */
    'SurveyStartDate': string | null;
    /**
     * The date and time the survey ex 
     * @type {string}
     * @memberof SurveyMetadata
     */
    'SurveyExpirationDate': string | null;
    /**
     * The date and time the survey was created. 
     * @type {string}
     * @memberof SurveyMetadata
     */
    'SurveyCreationDate': string | null;
    /**
     * The unique identifier for a specific user.
     * @type {string}
     * @memberof SurveyMetadata
     */
    'CreatorID': string;
    /**
     * The date and time of the last survey modification.
     * @type {string}
     * @memberof SurveyMetadata
     */
    'LastModified': string;
    /**
     * The date and time the survey was last accessed. 
     * @type {string}
     * @memberof SurveyMetadata
     */
    'LastAccessed': string | null;
    /**
     * 
     * @type {string}
     * @memberof SurveyMetadata
     */
    'LastActivated': string | null;
    /**
     * 
     * @type {string}
     * @memberof SurveyMetadata
     */
    'Deleted': string | null;
}

