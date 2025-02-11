/*
Qualtrics Survey API

The Qualtrics Survey endpoints give you access to the structure of the surveys you create. 

Surveys have a complex structure, and you are encouraged to become familiar with the structure using your brand's Qualtrics page to build surveys at first. Then you can query those surveys using these endpoints. 

Once you are familiar, you can use this API to create surveys on the fly, or modify existing surveys in your library. 

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AuthenticatorMessage } from './authenticator-message';

/**
 * SSO options.
 * @export
 * @interface AuthenticatorFlowElementOptions
 */
export interface AuthenticatorFlowElementOptions {
    [key: string]: any;

    /**
     * Maximum number of attempts allowed.
     * @type {number}
     * @memberof AuthenticatorFlowElementOptions
     */
    'maxAttempts'?: number;
    /**
     * 
     * @type {AuthenticatorMessage}
     * @memberof AuthenticatorFlowElementOptions
     */
    'authenticationError'?: AuthenticatorMessage;
    /**
     * 
     * @type {AuthenticatorMessage}
     * @memberof AuthenticatorFlowElementOptions
     */
    'failedAuthenticationError'?: AuthenticatorMessage;
    /**
     * 
     * @type {AuthenticatorMessage}
     * @memberof AuthenticatorFlowElementOptions
     */
    'questionText'?: AuthenticatorMessage;
    /**
     * If true, allow retake.
     * @type {boolean}
     * @memberof AuthenticatorFlowElementOptions
     */
    'allowRetake'?: boolean;
    /**
     * If true, load existing session.
     * @type {boolean}
     * @memberof AuthenticatorFlowElementOptions
     */
    'loadExistingSession'?: boolean;
}

