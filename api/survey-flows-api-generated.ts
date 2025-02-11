/* tslint:disable */
/* eslint-disable */
/*
Qualtrics Survey API

The Qualtrics Survey endpoints give you access to the structure of the surveys you create. 

Surveys have a complex structure, and you are encouraged to become familiar with the structure using your brand's Qualtrics page to build surveys at first. Then you can query those surveys using these endpoints. 

Once you are familiar, you can use this API to create surveys on the fly, or modify existing surveys in your library. 

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { setOAuthToObject } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { FlowDefinition } from '../models';
// @ts-ignore
import { FlowInner } from '../models';
// @ts-ignore
import { FlowProperties } from '../models';
// @ts-ignore
import { FlowType } from '../models';
// @ts-ignore
import { ForbiddenRequestErrorResponse } from '../models';
// @ts-ignore
import { GetFlowResponse } from '../models';
// @ts-ignore
import { InternalServerErrorResponse } from '../models';
// @ts-ignore
import { InvalidRequestErrorResponse } from '../models';
// @ts-ignore
import { NotFoundErrorResponse } from '../models';
// @ts-ignore
import { RequestSuccessfulResponse } from '../models';
// @ts-ignore
import { UnauthorizedRequestErrorResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * SurveyFlowsApi - axios parameter creator
 * @export
 */
export const SurveyFlowsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieve a [flow](https://www.qualtrics.com/support/survey-platform/survey-module/survey-flow/survey-flow-overview/) definition.
         * @summary Get Flow
         * @param {string} surveyId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFlowDefinition: async (surveyId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'surveyId' is not null or undefined
            assertParamExists('getFlowDefinition', 'surveyId', surveyId)
            const localVarPath = `/survey-definitions/{surveyId}/flow`
                .replace(`{${"surveyId"}}`, encodeURIComponent(String(surveyId !== undefined ? surveyId : `-surveyId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication public_oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "public_oauth2", ["read:surveys"], configuration)
            // authentication public_oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "public_oauth2", ["read:surveys"], configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/survey-definitions/{surveyId}/flow',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update a [flow](https://www.qualtrics.com/support/survey-platform/survey-module/survey-flow/survey-flow-overview/) definition.
         * @summary Update Flow
         * @param {string} surveyId 
         * @param {{ [key: string]: any; }} [requestBody] Update flow request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateDefinition: async (surveyId: string, requestBody?: { [key: string]: any; }, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'surveyId' is not null or undefined
            assertParamExists('updateDefinition', 'surveyId', surveyId)
            const localVarPath = `/survey-definitions/{surveyId}/flow`
                .replace(`{${"surveyId"}}`, encodeURIComponent(String(surveyId !== undefined ? surveyId : `-surveyId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication public_oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "public_oauth2", ["write:surveys"], configuration)
            // authentication public_oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "public_oauth2", ["write:surveys"], configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: requestBody,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/survey-definitions/{surveyId}/flow',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(requestBody, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update [flow](https://www.qualtrics.com/support/survey-platform/survey-module/survey-flow/survey-flow-overview/) by ID.  If you\'re having trouble capturing single sign-on (SSO) information, make sure you\'ve included all fields within the `Options` object. See this example:  ```JSON \"Options\": {  \"maxAttempts\": 3,  \"authenticationError\": {  \"SystemMessage\": {  \"Section\": \"Message example\",  \"Message\": \"Test System Message\"  }  }   \"failedAuthenticationError\": {  \"SystemMessage\": {  \"Section\": \"Message example\",  \"Message\": \"Test System Message\"  }  }   \"questionText\": \"{  \"SystemMessage\": {  \"Section\": \"Question Text section example\",  \"Message\": \"Question Text message example\"  }  }   \"allowRetake\": \"true\",  \"loadExistingSession\": \"false\" } 
         * @summary Updates Flow Element Definition
         * @param {string} surveyId 
         * @param {string} flowId 
         * @param {Array<FlowInner>} [flowInner] Update flow element request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateFlowElementDefinition: async (surveyId: string, flowId: string, flowInner?: Array<FlowInner>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'surveyId' is not null or undefined
            assertParamExists('updateFlowElementDefinition', 'surveyId', surveyId)
            // verify required parameter 'flowId' is not null or undefined
            assertParamExists('updateFlowElementDefinition', 'flowId', flowId)
            const localVarPath = `/survey-definitions/{surveyId}/flow/{flowId}`
                .replace(`{${"surveyId"}}`, encodeURIComponent(String(surveyId !== undefined ? surveyId : `-surveyId-`)))
                .replace(`{${"flowId"}}`, encodeURIComponent(String(flowId !== undefined ? flowId : `-flowId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication public_oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "public_oauth2", ["write:surveys"], configuration)
            // authentication public_oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "public_oauth2", ["write:surveys"], configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: flowInner,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/survey-definitions/{surveyId}/flow/{flowId}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(flowInner, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SurveyFlowsApi - functional programming interface
 * @export
 */
export const SurveyFlowsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SurveyFlowsApiAxiosParamCreator(configuration)
    return {
        /**
         * Retrieve a [flow](https://www.qualtrics.com/support/survey-platform/survey-module/survey-flow/survey-flow-overview/) definition.
         * @summary Get Flow
         * @param {SurveyFlowsApiGetFlowDefinitionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFlowDefinition(requestParameters: SurveyFlowsApiGetFlowDefinitionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetFlowResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFlowDefinition(requestParameters.surveyId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update a [flow](https://www.qualtrics.com/support/survey-platform/survey-module/survey-flow/survey-flow-overview/) definition.
         * @summary Update Flow
         * @param {SurveyFlowsApiUpdateDefinitionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateDefinition(requestParameters: SurveyFlowsApiUpdateDefinitionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RequestSuccessfulResponse>> {
            const requestBody: { [key: string]: any; } = {
                FlowID: requestParameters.FlowID,
                Type: requestParameters.Type,
                Flow: requestParameters.Flow,
                Properties: requestParameters.Properties
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateDefinition(requestParameters.surveyId, requestBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update [flow](https://www.qualtrics.com/support/survey-platform/survey-module/survey-flow/survey-flow-overview/) by ID.  If you\'re having trouble capturing single sign-on (SSO) information, make sure you\'ve included all fields within the `Options` object. See this example:  ```JSON \"Options\": {  \"maxAttempts\": 3,  \"authenticationError\": {  \"SystemMessage\": {  \"Section\": \"Message example\",  \"Message\": \"Test System Message\"  }  }   \"failedAuthenticationError\": {  \"SystemMessage\": {  \"Section\": \"Message example\",  \"Message\": \"Test System Message\"  }  }   \"questionText\": \"{  \"SystemMessage\": {  \"Section\": \"Question Text section example\",  \"Message\": \"Question Text message example\"  }  }   \"allowRetake\": \"true\",  \"loadExistingSession\": \"false\" } 
         * @summary Updates Flow Element Definition
         * @param {SurveyFlowsApiUpdateFlowElementDefinitionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateFlowElementDefinition(requestParameters: SurveyFlowsApiUpdateFlowElementDefinitionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RequestSuccessfulResponse>> {
            const flowInner: Array<FlowInner> = requestParameters.requestBody;
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateFlowElementDefinition(requestParameters.surveyId, requestParameters.flowId, flowInner, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SurveyFlowsApi - factory interface
 * @export
 */
export const SurveyFlowsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SurveyFlowsApiFp(configuration)
    return {
        /**
         * Retrieve a [flow](https://www.qualtrics.com/support/survey-platform/survey-module/survey-flow/survey-flow-overview/) definition.
         * @summary Get Flow
         * @param {SurveyFlowsApiGetFlowDefinitionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFlowDefinition(requestParameters: SurveyFlowsApiGetFlowDefinitionRequest, options?: AxiosRequestConfig): AxiosPromise<GetFlowResponse> {
            return localVarFp.getFlowDefinition(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a [flow](https://www.qualtrics.com/support/survey-platform/survey-module/survey-flow/survey-flow-overview/) definition.
         * @summary Update Flow
         * @param {SurveyFlowsApiUpdateDefinitionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateDefinition(requestParameters: SurveyFlowsApiUpdateDefinitionRequest, options?: AxiosRequestConfig): AxiosPromise<RequestSuccessfulResponse> {
            return localVarFp.updateDefinition(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Update [flow](https://www.qualtrics.com/support/survey-platform/survey-module/survey-flow/survey-flow-overview/) by ID.  If you\'re having trouble capturing single sign-on (SSO) information, make sure you\'ve included all fields within the `Options` object. See this example:  ```JSON \"Options\": {  \"maxAttempts\": 3,  \"authenticationError\": {  \"SystemMessage\": {  \"Section\": \"Message example\",  \"Message\": \"Test System Message\"  }  }   \"failedAuthenticationError\": {  \"SystemMessage\": {  \"Section\": \"Message example\",  \"Message\": \"Test System Message\"  }  }   \"questionText\": \"{  \"SystemMessage\": {  \"Section\": \"Question Text section example\",  \"Message\": \"Question Text message example\"  }  }   \"allowRetake\": \"true\",  \"loadExistingSession\": \"false\" } 
         * @summary Updates Flow Element Definition
         * @param {SurveyFlowsApiUpdateFlowElementDefinitionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateFlowElementDefinition(requestParameters: SurveyFlowsApiUpdateFlowElementDefinitionRequest, options?: AxiosRequestConfig): AxiosPromise<RequestSuccessfulResponse> {
            return localVarFp.updateFlowElementDefinition(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getFlowDefinition operation in SurveyFlowsApi.
 * @export
 * @interface SurveyFlowsApiGetFlowDefinitionRequest
 */
export type SurveyFlowsApiGetFlowDefinitionRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof SurveyFlowsApiGetFlowDefinition
    */
    readonly surveyId: string
    
}

/**
 * Request parameters for updateDefinition operation in SurveyFlowsApi.
 * @export
 * @interface SurveyFlowsApiUpdateDefinitionRequest
 */
export type SurveyFlowsApiUpdateDefinitionRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof SurveyFlowsApiUpdateDefinition
    */
    readonly surveyId: string
    
} & { [key: string]: any; }

/**
 * Request parameters for updateFlowElementDefinition operation in SurveyFlowsApi.
 * @export
 * @interface SurveyFlowsApiUpdateFlowElementDefinitionRequest
 */
export type SurveyFlowsApiUpdateFlowElementDefinitionRequest = {
    /**
    * 
    * @type {string}
    * @memberof SurveyFlowsApiUpdateFlowElementDefinition
    */
    readonly surveyId: string
    /**
    * 
    * @type {string}
    * @memberof SurveyFlowsApiUpdateFlowElementDefinition
    */
    readonly flowId: string
    /**
    * Update flow element request
    * @type {Array<FlowInner>}
    * @memberof SurveyFlowsApiUpdateFlowElementDefinition
    */
    readonly requestBody?: Array<FlowInner>
}

/**
 * SurveyFlowsApiGenerated - object-oriented interface
 * @export
 * @class SurveyFlowsApiGenerated
 * @extends {BaseAPI}
 */
export class SurveyFlowsApiGenerated extends BaseAPI {
    /**
     * Retrieve a [flow](https://www.qualtrics.com/support/survey-platform/survey-module/survey-flow/survey-flow-overview/) definition.
     * @summary Get Flow
     * @param {SurveyFlowsApiGetFlowDefinitionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SurveyFlowsApiGenerated
     */
    public getFlowDefinition(requestParameters: SurveyFlowsApiGetFlowDefinitionRequest, options?: AxiosRequestConfig) {
        return SurveyFlowsApiFp(this.configuration).getFlowDefinition(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update a [flow](https://www.qualtrics.com/support/survey-platform/survey-module/survey-flow/survey-flow-overview/) definition.
     * @summary Update Flow
     * @param {SurveyFlowsApiUpdateDefinitionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SurveyFlowsApiGenerated
     */
    public updateDefinition(requestParameters: SurveyFlowsApiUpdateDefinitionRequest, options?: AxiosRequestConfig) {
        return SurveyFlowsApiFp(this.configuration).updateDefinition(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update [flow](https://www.qualtrics.com/support/survey-platform/survey-module/survey-flow/survey-flow-overview/) by ID.  If you\'re having trouble capturing single sign-on (SSO) information, make sure you\'ve included all fields within the `Options` object. See this example:  ```JSON \"Options\": {  \"maxAttempts\": 3,  \"authenticationError\": {  \"SystemMessage\": {  \"Section\": \"Message example\",  \"Message\": \"Test System Message\"  }  }   \"failedAuthenticationError\": {  \"SystemMessage\": {  \"Section\": \"Message example\",  \"Message\": \"Test System Message\"  }  }   \"questionText\": \"{  \"SystemMessage\": {  \"Section\": \"Question Text section example\",  \"Message\": \"Question Text message example\"  }  }   \"allowRetake\": \"true\",  \"loadExistingSession\": \"false\" } 
     * @summary Updates Flow Element Definition
     * @param {SurveyFlowsApiUpdateFlowElementDefinitionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SurveyFlowsApiGenerated
     */
    public updateFlowElementDefinition(requestParameters: SurveyFlowsApiUpdateFlowElementDefinitionRequest, options?: AxiosRequestConfig) {
        return SurveyFlowsApiFp(this.configuration).updateFlowElementDefinition(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
