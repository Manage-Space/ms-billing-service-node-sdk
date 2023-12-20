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
import { EBillingCycleTypeEnum } from './eBillingCycleTypeEnum';

export class InvoiceRunRequest {
    'billingCycleType': EBillingCycleTypeEnum;
    /**
    * Valid IANA specific zone; UTC is also supported as a value.
    */
    'timezone': string;
    /**
    * Overrides current date.
    */
    'currentDateOverride'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "billingCycleType",
            "baseName": "billingCycleType",
            "type": "EBillingCycleTypeEnum"
        },
        {
            "name": "timezone",
            "baseName": "timezone",
            "type": "string"
        },
        {
            "name": "currentDateOverride",
            "baseName": "currentDateOverride",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return InvoiceRunRequest.attributeTypeMap;
    }
}

export namespace InvoiceRunRequest {
}