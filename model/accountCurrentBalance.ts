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

export class AccountCurrentBalance {
    /**
    * Organization ID.
    */
    'orgId': string;
    /**
    * Site ID.
    */
    'siteId': string;
    /**
    * Account ID.
    */
    'accountId': string;
    /**
    * Last updated at.
    */
    'lastUpdatedAt': Date | null;
    /**
    * Balance
    */
    'balance': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "orgId",
            "baseName": "orgId",
            "type": "string"
        },
        {
            "name": "siteId",
            "baseName": "siteId",
            "type": "string"
        },
        {
            "name": "accountId",
            "baseName": "accountId",
            "type": "string"
        },
        {
            "name": "lastUpdatedAt",
            "baseName": "lastUpdatedAt",
            "type": "Date"
        },
        {
            "name": "balance",
            "baseName": "balance",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return AccountCurrentBalance.attributeTypeMap;
    }
}

