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
import { AnonymizeResponse } from '../models';
// @ts-ignore
import { BallotBoxStuffingPreventionBehavior } from '../models';
// @ts-ignore
import { CollectGeoLocation } from '../models';
// @ts-ignore
import { CustomLanguagesValue } from '../models';
// @ts-ignore
import { EmailThankYou } from '../models';
// @ts-ignore
import { ForbiddenRequestErrorResponse } from '../models';
// @ts-ignore
import { GetSurveyOptionsResponse } from '../models';
// @ts-ignore
import { InactiveSurvey } from '../models';
// @ts-ignore
import { InternalServerErrorResponse } from '../models';
// @ts-ignore
import { InvalidRequestErrorResponse } from '../models';
// @ts-ignore
import { LanguageCode } from '../models';
// @ts-ignore
import { NoIndex } from '../models';
// @ts-ignore
import { PageTransition } from '../models';
// @ts-ignore
import { PartialData } from '../models';
// @ts-ignore
import { PartialDataCloseAfter } from '../models';
// @ts-ignore
import { PasswordProtection } from '../models';
// @ts-ignore
import { ProgressBarDisplay } from '../models';
// @ts-ignore
import { RecaptchaV3 } from '../models';
// @ts-ignore
import { RefererCheck } from '../models';
// @ts-ignore
import { RequestSuccessfulResponse } from '../models';
// @ts-ignore
import { ResponseSummary } from '../models';
// @ts-ignore
import { SecureResponseFiles } from '../models';
// @ts-ignore
import { Skin } from '../models';
// @ts-ignore
import { SurveyExpiration } from '../models';
// @ts-ignore
import { SurveyOptions } from '../models';
// @ts-ignore
import { SurveyProtection } from '../models';
// @ts-ignore
import { SurveyTermination } from '../models';
// @ts-ignore
import { UnauthorizedRequestErrorResponse } from '../models';
// @ts-ignore
import { ValidateMessage } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * SurveyOptionsApi - axios parameter creator
 * @export
 */
export const SurveyOptionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieve [survey options](https://www.qualtrics.com/support/survey-platform/survey-module/survey-options/survey-options-overview/) for a survey with the `surveyId`.
         * @summary Get Options
         * @param {string} surveyId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOptions: async (surveyId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'surveyId' is not null or undefined
            assertParamExists('getOptions', 'surveyId', surveyId)
            const localVarPath = `/survey-definitions/{surveyId}/options`
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
                pathTemplate: '/survey-definitions/{surveyId}/options',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update [survey options](https://www.qualtrics.com/support/survey-platform/survey-module/survey-options/survey-options-overview/) for a survey with the `surveyId`.
         * @summary Update Options
         * @param {string} surveyId 
         * @param {{ [key: string]: any; }} [requestBody] Survey Options
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOptions: async (surveyId: string, requestBody?: { [key: string]: any; }, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'surveyId' is not null or undefined
            assertParamExists('updateOptions', 'surveyId', surveyId)
            const localVarPath = `/survey-definitions/{surveyId}/options`
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
                pathTemplate: '/survey-definitions/{surveyId}/options',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(requestBody, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SurveyOptionsApi - functional programming interface
 * @export
 */
export const SurveyOptionsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SurveyOptionsApiAxiosParamCreator(configuration)
    return {
        /**
         * Retrieve [survey options](https://www.qualtrics.com/support/survey-platform/survey-module/survey-options/survey-options-overview/) for a survey with the `surveyId`.
         * @summary Get Options
         * @param {SurveyOptionsApiGetOptionsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOptions(requestParameters: SurveyOptionsApiGetOptionsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetSurveyOptionsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOptions(requestParameters.surveyId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update [survey options](https://www.qualtrics.com/support/survey-platform/survey-module/survey-options/survey-options-overview/) for a survey with the `surveyId`.
         * @summary Update Options
         * @param {SurveyOptionsApiUpdateOptionsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateOptions(requestParameters: SurveyOptionsApiUpdateOptionsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RequestSuccessfulResponse>> {
            const requestBody: { [key: string]: any; } = {
                AnonymizeResponse: requestParameters.AnonymizeResponse,
                Autofocus: requestParameters.Autofocus,
                Autoadvance: requestParameters.Autoadvance,
                AutoadvancePages: requestParameters.AutoadvancePages,
                AvailableLanguages: requestParameters.AvailableLanguages,
                BackButton: requestParameters.BackButton,
                BallotBoxStuffingPrevention: requestParameters.BallotBoxStuffingPrevention,
                BallotBoxStuffingPreventionBehavior: requestParameters.BallotBoxStuffingPreventionBehavior,
                BallotBoxStuffingPreventionMessage: requestParameters.BallotBoxStuffingPreventionMessage,
                BallotBoxStuffingPreventionMessageLibrary: requestParameters.BallotBoxStuffingPreventionMessageLibrary,
                BallotBoxStuffingPreventionURL: requestParameters.BallotBoxStuffingPreventionURL,
                CollectGeoLocation: requestParameters.CollectGeoLocation,
                CustomStyles: requestParameters.CustomStyles,
                CustomLanguages: requestParameters.CustomLanguages,
                EmailThankYou: requestParameters.EmailThankYou,
                EOSMessage: requestParameters.EOSMessage,
                EOSRedirectURL: requestParameters.EOSRedirectURL,
                ExternalCSS: requestParameters.ExternalCSS,
                headerMid: requestParameters.headerMid,
                Header: requestParameters.Header,
                footerMid: requestParameters.footerMid,
                Footer: requestParameters.Footer,
                InactiveSurvey: requestParameters.InactiveSurvey,
                InactiveMessage: requestParameters.InactiveMessage,
                InactiveMessageLibrary: requestParameters.InactiveMessageLibrary,
                NoIndex: requestParameters.NoIndex,
                nextButtonMid: requestParameters.nextButtonMid,
                NextButton: requestParameters.NextButton,
                PageTransition: requestParameters.PageTransition,
                PartialData: requestParameters.PartialData,
                PartialDataCloseAfter: requestParameters.PartialDataCloseAfter,
                Password: requestParameters.Password,
                PasswordProtection: requestParameters.PasswordProtection,
                previousButtonMid: requestParameters.previousButtonMid,
                PreviousButton: requestParameters.PreviousButton,
                ProgressBarDisplay: requestParameters.ProgressBarDisplay,
                QuestionsPerPage: requestParameters.QuestionsPerPage,
                RecaptchaV3: requestParameters.RecaptchaV3,
                RefererCheck: requestParameters.RefererCheck,
                RefererURL: requestParameters.RefererURL,
                ResponseSummary: requestParameters.ResponseSummary,
                SaveAndContinue: requestParameters.SaveAndContinue,
                SecureResponseFiles: requestParameters.SecureResponseFiles,
                Skin: requestParameters.Skin,
                SurveyExpiration: requestParameters.SurveyExpiration,
                SurveyExpirationDate: requestParameters.SurveyExpirationDate,
                SurveyMetaDescription: requestParameters.SurveyMetaDescription,
                SurveyLanguage: requestParameters.SurveyLanguage,
                SurveyName: requestParameters.SurveyName,
                SurveyProtection: requestParameters.SurveyProtection,
                SurveyStartDate: requestParameters.SurveyStartDate,
                SurveyTermination: requestParameters.SurveyTermination,
                SurveyTitle: requestParameters.SurveyTitle,
                ThankYouEmailMessage: requestParameters.ThankYouEmailMessage,
                ThankYouEmailMessageLibrary: requestParameters.ThankYouEmailMessageLibrary,
                ValidateMessage: requestParameters.ValidateMessage,
                ValidationMessage: requestParameters.ValidationMessage,
                ValidationMessageLibrary: requestParameters.ValidationMessageLibrary
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOptions(requestParameters.surveyId, requestBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SurveyOptionsApi - factory interface
 * @export
 */
export const SurveyOptionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SurveyOptionsApiFp(configuration)
    return {
        /**
         * Retrieve [survey options](https://www.qualtrics.com/support/survey-platform/survey-module/survey-options/survey-options-overview/) for a survey with the `surveyId`.
         * @summary Get Options
         * @param {SurveyOptionsApiGetOptionsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOptions(requestParameters: SurveyOptionsApiGetOptionsRequest, options?: AxiosRequestConfig): AxiosPromise<GetSurveyOptionsResponse> {
            return localVarFp.getOptions(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Update [survey options](https://www.qualtrics.com/support/survey-platform/survey-module/survey-options/survey-options-overview/) for a survey with the `surveyId`.
         * @summary Update Options
         * @param {SurveyOptionsApiUpdateOptionsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOptions(requestParameters: SurveyOptionsApiUpdateOptionsRequest, options?: AxiosRequestConfig): AxiosPromise<RequestSuccessfulResponse> {
            return localVarFp.updateOptions(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getOptions operation in SurveyOptionsApi.
 * @export
 * @interface SurveyOptionsApiGetOptionsRequest
 */
export type SurveyOptionsApiGetOptionsRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof SurveyOptionsApiGetOptions
    */
    readonly surveyId: string
    
}

/**
 * Request parameters for updateOptions operation in SurveyOptionsApi.
 * @export
 * @interface SurveyOptionsApiUpdateOptionsRequest
 */
export type SurveyOptionsApiUpdateOptionsRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof SurveyOptionsApiUpdateOptions
    */
    readonly surveyId: string
    
} & { [key: string]: any; }

/**
 * SurveyOptionsApiGenerated - object-oriented interface
 * @export
 * @class SurveyOptionsApiGenerated
 * @extends {BaseAPI}
 */
export class SurveyOptionsApiGenerated extends BaseAPI {
    /**
     * Retrieve [survey options](https://www.qualtrics.com/support/survey-platform/survey-module/survey-options/survey-options-overview/) for a survey with the `surveyId`.
     * @summary Get Options
     * @param {SurveyOptionsApiGetOptionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SurveyOptionsApiGenerated
     */
    public getOptions(requestParameters: SurveyOptionsApiGetOptionsRequest, options?: AxiosRequestConfig) {
        return SurveyOptionsApiFp(this.configuration).getOptions(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update [survey options](https://www.qualtrics.com/support/survey-platform/survey-module/survey-options/survey-options-overview/) for a survey with the `surveyId`.
     * @summary Update Options
     * @param {SurveyOptionsApiUpdateOptionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SurveyOptionsApiGenerated
     */
    public updateOptions(requestParameters: SurveyOptionsApiUpdateOptionsRequest, options?: AxiosRequestConfig) {
        return SurveyOptionsApiFp(this.configuration).updateOptions(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
