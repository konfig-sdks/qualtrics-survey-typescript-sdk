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
import { AnswerRandomization } from '../models';
// @ts-ignore
import { CreateQuestionResponse } from '../models';
// @ts-ignore
import { ForbiddenRequestErrorResponse } from '../models';
// @ts-ignore
import { GetQuestionsResponse } from '../models';
// @ts-ignore
import { InternalServerErrorResponse } from '../models';
// @ts-ignore
import { InvalidRequestErrorResponse } from '../models';
// @ts-ignore
import { Language } from '../models';
// @ts-ignore
import { NotFoundErrorResponse } from '../models';
// @ts-ignore
import { QuestionChoicesValue } from '../models';
// @ts-ignore
import { QuestionConfiguration } from '../models';
// @ts-ignore
import { QuestionDefinition } from '../models';
// @ts-ignore
import { QuestionSubSelector } from '../models';
// @ts-ignore
import { Randomization } from '../models';
// @ts-ignore
import { RequestSuccessfulResponse } from '../models';
// @ts-ignore
import { Selection } from '../models';
// @ts-ignore
import { UnauthorizedRequestErrorResponse } from '../models';
// @ts-ignore
import { Validation } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * SurveyQuestionsApi - axios parameter creator
 * @export
 */
export const SurveyQuestionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new question in the specified [block](https://www.qualtrics.com/support/survey-platform/survey-module/block-options/block-options-overview/) or the default block if not specified.
         * @summary Create Question
         * @param {string} surveyId 
         * @param {string} [blockId] 
         * @param {QuestionDefinition} [questionDefinition] Create question request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewQuestion: async (surveyId: string, blockId?: string, questionDefinition?: QuestionDefinition, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'surveyId' is not null or undefined
            assertParamExists('createNewQuestion', 'surveyId', surveyId)
            const localVarPath = `/survey-definitions/{surveyId}/questions`
                .replace(`{${"surveyId"}}`, encodeURIComponent(String(surveyId !== undefined ? surveyId : `-surveyId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication public_oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "public_oauth2", ["write:surveys"], configuration)
            // authentication public_oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "public_oauth2", ["write:surveys"], configuration)
            if (blockId !== undefined) {
                localVarQueryParameter['blockId'] = blockId;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: questionDefinition,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/survey-definitions/{surveyId}/questions',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(questionDefinition, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve a [question](https://api.qualtrics.com/ZG9jOjg3NzY4Mw-example-use-cases-walkthrough#add-question-to-survey) definition.
         * @summary Get Question
         * @param {string} surveyId 
         * @param {string} questionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDefinition: async (surveyId: string, questionId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'surveyId' is not null or undefined
            assertParamExists('getDefinition', 'surveyId', surveyId)
            // verify required parameter 'questionId' is not null or undefined
            assertParamExists('getDefinition', 'questionId', questionId)
            const localVarPath = `/survey-definitions/{surveyId}/questions/{questionId}`
                .replace(`{${"surveyId"}}`, encodeURIComponent(String(surveyId !== undefined ? surveyId : `-surveyId-`)))
                .replace(`{${"questionId"}}`, encodeURIComponent(String(questionId !== undefined ? questionId : `-questionId-`)));
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
                pathTemplate: '/survey-definitions/{surveyId}/questions/{questionId}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Return a list of a [survey questions](https://api.qualtrics.com/ZG9jOjg3NzY4Mw-example-use-cases-walkthrough#add-question-to-survey).
         * @summary Get Questions
         * @param {string} surveyId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getList: async (surveyId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'surveyId' is not null or undefined
            assertParamExists('getList', 'surveyId', surveyId)
            const localVarPath = `/survey-definitions/{surveyId}/questions`
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
                pathTemplate: '/survey-definitions/{surveyId}/questions',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a [question](https://api.qualtrics.com/ZG9jOjg3NzY4Mw-example-use-cases-walkthrough#add-question-to-survey) from a survey.
         * @summary Delete Question
         * @param {string} surveyId 
         * @param {string} questionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeQuestion: async (surveyId: string, questionId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'surveyId' is not null or undefined
            assertParamExists('removeQuestion', 'surveyId', surveyId)
            // verify required parameter 'questionId' is not null or undefined
            assertParamExists('removeQuestion', 'questionId', questionId)
            const localVarPath = `/survey-definitions/{surveyId}/questions/{questionId}`
                .replace(`{${"surveyId"}}`, encodeURIComponent(String(surveyId !== undefined ? surveyId : `-surveyId-`)))
                .replace(`{${"questionId"}}`, encodeURIComponent(String(questionId !== undefined ? questionId : `-questionId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication public_oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "public_oauth2", ["write:surveys"], configuration)
            // authentication public_oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "public_oauth2", ["write:surveys"], configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/survey-definitions/{surveyId}/questions/{questionId}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update a [question](https://api.qualtrics.com/ZG9jOjg3NzY4Mw-example-use-cases-walkthrough#add-question-to-survey) definition.
         * @summary Update Question
         * @param {string} surveyId 
         * @param {string} questionId 
         * @param {QuestionDefinition} [questionDefinition] Update question request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateDefinition: async (surveyId: string, questionId: string, questionDefinition?: QuestionDefinition, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'surveyId' is not null or undefined
            assertParamExists('updateDefinition', 'surveyId', surveyId)
            // verify required parameter 'questionId' is not null or undefined
            assertParamExists('updateDefinition', 'questionId', questionId)
            const localVarPath = `/survey-definitions/{surveyId}/questions/{questionId}`
                .replace(`{${"surveyId"}}`, encodeURIComponent(String(surveyId !== undefined ? surveyId : `-surveyId-`)))
                .replace(`{${"questionId"}}`, encodeURIComponent(String(questionId !== undefined ? questionId : `-questionId-`)));
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
                requestBody: questionDefinition,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/survey-definitions/{surveyId}/questions/{questionId}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(questionDefinition, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SurveyQuestionsApi - functional programming interface
 * @export
 */
export const SurveyQuestionsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SurveyQuestionsApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a new question in the specified [block](https://www.qualtrics.com/support/survey-platform/survey-module/block-options/block-options-overview/) or the default block if not specified.
         * @summary Create Question
         * @param {SurveyQuestionsApiCreateNewQuestionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewQuestion(requestParameters: SurveyQuestionsApiCreateNewQuestionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateQuestionResponse>> {
            const questionDefinition: QuestionDefinition = {
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewQuestion(requestParameters.surveyId, requestParameters.blockId, questionDefinition, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieve a [question](https://api.qualtrics.com/ZG9jOjg3NzY4Mw-example-use-cases-walkthrough#add-question-to-survey) definition.
         * @summary Get Question
         * @param {SurveyQuestionsApiGetDefinitionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDefinition(requestParameters: SurveyQuestionsApiGetDefinitionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<QuestionDefinition>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDefinition(requestParameters.surveyId, requestParameters.questionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Return a list of a [survey questions](https://api.qualtrics.com/ZG9jOjg3NzY4Mw-example-use-cases-walkthrough#add-question-to-survey).
         * @summary Get Questions
         * @param {SurveyQuestionsApiGetListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getList(requestParameters: SurveyQuestionsApiGetListRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetQuestionsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getList(requestParameters.surveyId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete a [question](https://api.qualtrics.com/ZG9jOjg3NzY4Mw-example-use-cases-walkthrough#add-question-to-survey) from a survey.
         * @summary Delete Question
         * @param {SurveyQuestionsApiRemoveQuestionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeQuestion(requestParameters: SurveyQuestionsApiRemoveQuestionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RequestSuccessfulResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeQuestion(requestParameters.surveyId, requestParameters.questionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update a [question](https://api.qualtrics.com/ZG9jOjg3NzY4Mw-example-use-cases-walkthrough#add-question-to-survey) definition.
         * @summary Update Question
         * @param {SurveyQuestionsApiUpdateDefinitionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateDefinition(requestParameters: SurveyQuestionsApiUpdateDefinitionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RequestSuccessfulResponse>> {
            const questionDefinition: QuestionDefinition = {
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateDefinition(requestParameters.surveyId, requestParameters.questionId, questionDefinition, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SurveyQuestionsApi - factory interface
 * @export
 */
export const SurveyQuestionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SurveyQuestionsApiFp(configuration)
    return {
        /**
         * Create a new question in the specified [block](https://www.qualtrics.com/support/survey-platform/survey-module/block-options/block-options-overview/) or the default block if not specified.
         * @summary Create Question
         * @param {SurveyQuestionsApiCreateNewQuestionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewQuestion(requestParameters: SurveyQuestionsApiCreateNewQuestionRequest, options?: AxiosRequestConfig): AxiosPromise<CreateQuestionResponse> {
            return localVarFp.createNewQuestion(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve a [question](https://api.qualtrics.com/ZG9jOjg3NzY4Mw-example-use-cases-walkthrough#add-question-to-survey) definition.
         * @summary Get Question
         * @param {SurveyQuestionsApiGetDefinitionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDefinition(requestParameters: SurveyQuestionsApiGetDefinitionRequest, options?: AxiosRequestConfig): AxiosPromise<QuestionDefinition> {
            return localVarFp.getDefinition(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Return a list of a [survey questions](https://api.qualtrics.com/ZG9jOjg3NzY4Mw-example-use-cases-walkthrough#add-question-to-survey).
         * @summary Get Questions
         * @param {SurveyQuestionsApiGetListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getList(requestParameters: SurveyQuestionsApiGetListRequest, options?: AxiosRequestConfig): AxiosPromise<GetQuestionsResponse> {
            return localVarFp.getList(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a [question](https://api.qualtrics.com/ZG9jOjg3NzY4Mw-example-use-cases-walkthrough#add-question-to-survey) from a survey.
         * @summary Delete Question
         * @param {SurveyQuestionsApiRemoveQuestionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeQuestion(requestParameters: SurveyQuestionsApiRemoveQuestionRequest, options?: AxiosRequestConfig): AxiosPromise<RequestSuccessfulResponse> {
            return localVarFp.removeQuestion(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a [question](https://api.qualtrics.com/ZG9jOjg3NzY4Mw-example-use-cases-walkthrough#add-question-to-survey) definition.
         * @summary Update Question
         * @param {SurveyQuestionsApiUpdateDefinitionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateDefinition(requestParameters: SurveyQuestionsApiUpdateDefinitionRequest, options?: AxiosRequestConfig): AxiosPromise<RequestSuccessfulResponse> {
            return localVarFp.updateDefinition(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNewQuestion operation in SurveyQuestionsApi.
 * @export
 * @interface SurveyQuestionsApiCreateNewQuestionRequest
 */
export type SurveyQuestionsApiCreateNewQuestionRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof SurveyQuestionsApiCreateNewQuestion
    */
    readonly surveyId: string
    
    /**
    * 
    * @type {string}
    * @memberof SurveyQuestionsApiCreateNewQuestion
    */
    readonly blockId?: string
    
} & QuestionDefinition

/**
 * Request parameters for getDefinition operation in SurveyQuestionsApi.
 * @export
 * @interface SurveyQuestionsApiGetDefinitionRequest
 */
export type SurveyQuestionsApiGetDefinitionRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof SurveyQuestionsApiGetDefinition
    */
    readonly surveyId: string
    
    /**
    * 
    * @type {string}
    * @memberof SurveyQuestionsApiGetDefinition
    */
    readonly questionId: string
    
}

/**
 * Request parameters for getList operation in SurveyQuestionsApi.
 * @export
 * @interface SurveyQuestionsApiGetListRequest
 */
export type SurveyQuestionsApiGetListRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof SurveyQuestionsApiGetList
    */
    readonly surveyId: string
    
}

/**
 * Request parameters for removeQuestion operation in SurveyQuestionsApi.
 * @export
 * @interface SurveyQuestionsApiRemoveQuestionRequest
 */
export type SurveyQuestionsApiRemoveQuestionRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof SurveyQuestionsApiRemoveQuestion
    */
    readonly surveyId: string
    
    /**
    * 
    * @type {string}
    * @memberof SurveyQuestionsApiRemoveQuestion
    */
    readonly questionId: string
    
}

/**
 * Request parameters for updateDefinition operation in SurveyQuestionsApi.
 * @export
 * @interface SurveyQuestionsApiUpdateDefinitionRequest
 */
export type SurveyQuestionsApiUpdateDefinitionRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof SurveyQuestionsApiUpdateDefinition
    */
    readonly surveyId: string
    
    /**
    * 
    * @type {string}
    * @memberof SurveyQuestionsApiUpdateDefinition
    */
    readonly questionId: string
    
} & QuestionDefinition

/**
 * SurveyQuestionsApiGenerated - object-oriented interface
 * @export
 * @class SurveyQuestionsApiGenerated
 * @extends {BaseAPI}
 */
export class SurveyQuestionsApiGenerated extends BaseAPI {
    /**
     * Create a new question in the specified [block](https://www.qualtrics.com/support/survey-platform/survey-module/block-options/block-options-overview/) or the default block if not specified.
     * @summary Create Question
     * @param {SurveyQuestionsApiCreateNewQuestionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SurveyQuestionsApiGenerated
     */
    public createNewQuestion(requestParameters: SurveyQuestionsApiCreateNewQuestionRequest, options?: AxiosRequestConfig) {
        return SurveyQuestionsApiFp(this.configuration).createNewQuestion(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve a [question](https://api.qualtrics.com/ZG9jOjg3NzY4Mw-example-use-cases-walkthrough#add-question-to-survey) definition.
     * @summary Get Question
     * @param {SurveyQuestionsApiGetDefinitionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SurveyQuestionsApiGenerated
     */
    public getDefinition(requestParameters: SurveyQuestionsApiGetDefinitionRequest, options?: AxiosRequestConfig) {
        return SurveyQuestionsApiFp(this.configuration).getDefinition(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Return a list of a [survey questions](https://api.qualtrics.com/ZG9jOjg3NzY4Mw-example-use-cases-walkthrough#add-question-to-survey).
     * @summary Get Questions
     * @param {SurveyQuestionsApiGetListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SurveyQuestionsApiGenerated
     */
    public getList(requestParameters: SurveyQuestionsApiGetListRequest, options?: AxiosRequestConfig) {
        return SurveyQuestionsApiFp(this.configuration).getList(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a [question](https://api.qualtrics.com/ZG9jOjg3NzY4Mw-example-use-cases-walkthrough#add-question-to-survey) from a survey.
     * @summary Delete Question
     * @param {SurveyQuestionsApiRemoveQuestionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SurveyQuestionsApiGenerated
     */
    public removeQuestion(requestParameters: SurveyQuestionsApiRemoveQuestionRequest, options?: AxiosRequestConfig) {
        return SurveyQuestionsApiFp(this.configuration).removeQuestion(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update a [question](https://api.qualtrics.com/ZG9jOjg3NzY4Mw-example-use-cases-walkthrough#add-question-to-survey) definition.
     * @summary Update Question
     * @param {SurveyQuestionsApiUpdateDefinitionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SurveyQuestionsApiGenerated
     */
    public updateDefinition(requestParameters: SurveyQuestionsApiUpdateDefinitionRequest, options?: AxiosRequestConfig) {
        return SurveyQuestionsApiFp(this.configuration).updateDefinition(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
