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
import { InvoiceLineItemActionRequestPayload } from './invoiceLineItemActionRequestPayload';

export class InvoiceLineItemActionRequest {
    'payload': InvoiceLineItemActionRequestPayload;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "payload",
            "baseName": "payload",
            "type": "InvoiceLineItemActionRequestPayload"
        }    ];

    static getAttributeTypeMap() {
        return InvoiceLineItemActionRequest.attributeTypeMap;
    }
}

