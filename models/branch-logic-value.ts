/*
Qualtrics Survey API

The Qualtrics Survey endpoints give you access to the structure of the surveys you create. 

Surveys have a complex structure, and you are encouraged to become familiar with the structure using your brand's Qualtrics page to build surveys at first. Then you can query those surveys using these endpoints. 

Once you are familiar, you can use this API to create surveys on the fly, or modify existing surveys in your library. 

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DeviceTypeExpression } from './device-type-expression';
import { EmbeddedDataExpression } from './embedded-data-expression';
import { EvaluatorMetadataExpression } from './evaluator-metadata-expression';
import { GeoIPExpression } from './geo-ipexpression';
import { Locator } from './locator';
import { LoopAndMergeExpression } from './loop-and-merge-expression';
import { OrgHierarchyMetadataExpression } from './org-hierarchy-metadata-expression';
import { OrgHierarchyUnitsExpression } from './org-hierarchy-units-expression';
import { PanelDataExpression } from './panel-data-expression';
import { QuestionExpression } from './question-expression';
import { QuotaExpression } from './quota-expression';
import { RelationshipExpression } from './relationship-expression';
import { SubjectMetadataExpression } from './subject-metadata-expression';

/**
 * @type BranchLogicValue
 * @export
 */
export type BranchLogicValue = DeviceTypeExpression | EmbeddedDataExpression | EvaluatorMetadataExpression | GeoIPExpression | LoopAndMergeExpression | OrgHierarchyMetadataExpression | OrgHierarchyUnitsExpression | PanelDataExpression | QuestionExpression | QuotaExpression | RelationshipExpression | SubjectMetadataExpression;


