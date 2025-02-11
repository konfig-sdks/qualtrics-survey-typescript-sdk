/*
Qualtrics Survey API

The Qualtrics Survey endpoints give you access to the structure of the surveys you create. 

Surveys have a complex structure, and you are encouraged to become familiar with the structure using your brand's Qualtrics page to build surveys at first. Then you can query those surveys using these endpoints. 

Once you are familiar, you can use this API to create surveys on the fly, or modify existing surveys in your library. 

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SurveyStatusPutMetadata } from './survey-status-put-metadata';

/**
 * 
 * @export
 * @interface UpdateMetadataRequest
 */
export interface UpdateMetadataRequest {
    /**
     * The name of the survey.
     * @type {string}
     * @memberof UpdateMetadataRequest
     */
    'SurveyName'?: string;
    /**
     * A user-provided description of the survey.
     * @type {string}
     * @memberof UpdateMetadataRequest
     */
    'SurveyDescription'?: string | null;
    /**
     * The distribution status of the survey Active or Inactive
     * @type {SurveyStatusPutMetadata}
     * @memberof UpdateMetadataRequest
     */
    'SurveyStatus'?: SurveyStatusPutMetadata;
    /**
     * The start date of the survey expressed as a [MySQL datetime](https://dev.mysql.com/doc/refman/8.0/en/datetime.html) value.
     * @type {string}
     * @memberof UpdateMetadataRequest
     */
    'SurveyStartDate'?: string;
    /**
     * The expiration date of the survey expressed as a [MySQL datetime](https://dev.mysql.com/doc/refman/8.0/en/datetime.html) value.
     * @type {string}
     * @memberof UpdateMetadataRequest
     */
    'SurveyExpirationDate'?: string;
}

