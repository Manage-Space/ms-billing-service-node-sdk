/**
 * ManageSpace Billing API
 * ManageSpace Billing API Documentation
 *
 * The version of the OpenAPI document: 0.0.11-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { InvoiceV2Response } from './invoiceV2Response';

export class GetInvoiceByIdV2200Response {
    'data'?: Array<InvoiceV2Response>;
    'success'?: boolean;
    'error'?: object;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<InvoiceV2Response>"
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
        return GetInvoiceByIdV2200Response.attributeTypeMap;
    }
}

