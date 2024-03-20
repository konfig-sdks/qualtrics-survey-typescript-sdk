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
 * 
 * @export
 * @interface CreateBlockResultProperty
 */
export interface CreateBlockResultProperty {
    /**
     * The ID of the survey\'s default block.
     * @type {string}
     * @memberof CreateBlockResultProperty
     */
    'BlockID': string;
    /**
     * Unique identifier. Should be of form `FL_1`
     * @type {string}
     * @memberof CreateBlockResultProperty
     */
    'FlowID': string;
}

