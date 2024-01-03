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

export class CreditDistribution {
    /**
    * The invoice line item ID
    */
    'invoiceLineItemId': string;
    /**
    * Credit towards the invoice line item.
    */
    'creditAmount': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "invoiceLineItemId",
            "baseName": "invoiceLineItemId",
            "type": "string"
        },
        {
            "name": "creditAmount",
            "baseName": "creditAmount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return CreditDistribution.attributeTypeMap;
    }
}

