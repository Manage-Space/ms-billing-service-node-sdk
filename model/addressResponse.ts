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

export class AddressResponse {
    /**
    * First line of the address.
    */
    'addressLineOne': string;
    /**
    * Second line of the address.
    */
    'addressLineTwo'?: string | null;
    /**
    * City the address is in.
    */
    'city': string;
    /**
    * State/Province the address is in.
    */
    'province': string;
    /**
    * Post code of the address.
    */
    'postalCode': string;
    /**
    * Country the address is in.
    */
    'country': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "addressLineOne",
            "baseName": "addressLineOne",
            "type": "string"
        },
        {
            "name": "addressLineTwo",
            "baseName": "addressLineTwo",
            "type": "string"
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "province",
            "baseName": "province",
            "type": "string"
        },
        {
            "name": "postalCode",
            "baseName": "postalCode",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AddressResponse.attributeTypeMap;
    }
}

