/*
Qualtrics Survey API

The Qualtrics Survey endpoints give you access to the structure of the surveys you create. 

Surveys have a complex structure, and you are encouraged to become familiar with the structure using your brand's Qualtrics page to build surveys at first. Then you can query those surveys using these endpoints. 

Once you are familiar, you can use this API to create surveys on the fly, or modify existing surveys in your library. 

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EmbeddedDataFlowElementEmbeddedDataInnerDataVisibility } from './embedded-data-flow-element-embedded-data-inner-data-visibility';

/**
 * 
 * @export
 * @interface EmbeddedDataFlowElementEmbeddedDataInner
 */
export interface EmbeddedDataFlowElementEmbeddedDataInner {
    [key: string]: any;

    /**
     * A user-provided description of the embedded data.
     * @type {string}
     * @memberof EmbeddedDataFlowElementEmbeddedDataInner
     */
    'Description': string;
    /**
     * The type of embedded data.
     * @type {string}
     * @memberof EmbeddedDataFlowElementEmbeddedDataInner
     */
    'Type': EmbeddedDataFlowElementEmbeddedDataInnerTypeEnum;
    /**
     * Field for embedded data.
     * @type {string}
     * @memberof EmbeddedDataFlowElementEmbeddedDataInner
     */
    'Field': string;
    /**
     * Variable type.
     * @type {string}
     * @memberof EmbeddedDataFlowElementEmbeddedDataInner
     */
    'VariableType'?: EmbeddedDataFlowElementEmbeddedDataInnerVariableTypeEnum;
    /**
     * 
     * @type {EmbeddedDataFlowElementEmbeddedDataInnerDataVisibility}
     * @memberof EmbeddedDataFlowElementEmbeddedDataInner
     */
    'DataVisibility'?: EmbeddedDataFlowElementEmbeddedDataInnerDataVisibility;
    /**
     * If true, analyze embedded data text.
     * @type {boolean}
     * @memberof EmbeddedDataFlowElementEmbeddedDataInner
     */
    'AnalyzeText'?: boolean;
    /**
     * An attribute associated with `key`.
     * @type {string}
     * @memberof EmbeddedDataFlowElementEmbeddedDataInner
     */
    'Value'?: string;
}

type EmbeddedDataFlowElementEmbeddedDataInnerTypeEnum = 'Recipient' | 'Custom' | 'EmbeddedData'
type EmbeddedDataFlowElementEmbeddedDataInnerVariableTypeEnum = 'Nominal' | 'MultiValueNominal' | 'Ordinal' | 'Scale' | 'String' | 'Date' | 'FilterOnly' | 'Filter Only'


