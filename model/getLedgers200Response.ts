/**
 * ManageSpace Billing API
 * ManageSpace Billing API Documentation
 *
 * The version of the OpenAPI document: 0.0.12-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { LedgerResponseDto } from './ledgerResponseDto';

export class GetLedgers200Response {
    'data'?: Array<LedgerResponseDto>;
    'success'?: boolean;
    'error'?: object;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<LedgerResponseDto>"
        },
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return GetLedgers200Response.attributeTypeMap;
    }
}

