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
import { FeeDetails } from './feeDetails';

export class AddFee {
    'feeDetails': FeeDetails;
    /**
    * Action to add fee
    */
    'action': AddFee.ActionEnum = AddFee.ActionEnum.AddFee;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "feeDetails",
            "baseName": "feeDetails",
            "type": "FeeDetails"
        },
        {
            "name": "action",
            "baseName": "action",
            "type": "AddFee.ActionEnum"
        }    ];

    static getAttributeTypeMap() {
        return AddFee.attributeTypeMap;
    }
}

export namespace AddFee {
    export enum ActionEnum {
        WaiveFee = <any> 'WAIVE_FEE',
        AddFee = <any> 'ADD_FEE',
        ApplyCredit = <any> 'APPLY_CREDIT'
    }
}
