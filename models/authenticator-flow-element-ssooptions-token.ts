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
 * Token.
 * @export
 * @interface AuthenticatorFlowElementSSOOptionsToken
 */
export interface AuthenticatorFlowElementSSOOptionsToken {
    [key: string]: any;

    /**
     * Encryption method for the token.
     * @type {string}
     * @memberof AuthenticatorFlowElementSSOOptionsToken
     */
    'EncryptionMethod'?: AuthenticatorFlowElementSSOOptionsTokenEncryptionMethodEnum;
    /**
     * Token key.
     * @type {string}
     * @memberof AuthenticatorFlowElementSSOOptionsToken
     */
    'Key'?: string;
    /**
     * Leeway.
     * @type {number}
     * @memberof AuthenticatorFlowElementSSOOptionsToken
     */
    'Leeway'?: number;
    /**
     * MacMethod.
     * @type {string}
     * @memberof AuthenticatorFlowElementSSOOptionsToken
     */
    'MacMethod'?: AuthenticatorFlowElementSSOOptionsTokenMacMethodEnum;
    /**
     * Block Cipher.
     * @type {string}
     * @memberof AuthenticatorFlowElementSSOOptionsToken
     */
    'BlockCipher'?: AuthenticatorFlowElementSSOOptionsTokenBlockCipherEnum;
}

type AuthenticatorFlowElementSSOOptionsTokenEncryptionMethodEnum = '3DES' | 'AES128' | 'BLOWFISH'
type AuthenticatorFlowElementSSOOptionsTokenMacMethodEnum = 'md5' | 'MD5' | 'sha1' | 'sha256' | 'sha512'
type AuthenticatorFlowElementSSOOptionsTokenBlockCipherEnum = 'CBC' | 'ECB'


