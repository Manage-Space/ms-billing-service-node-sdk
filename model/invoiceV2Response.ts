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
import { InvoiceStatus } from './invoiceStatus';
import { InvoiceV2ResponseAddress } from './invoiceV2ResponseAddress';
import { ReducedInvoiceV2LineItem } from './reducedInvoiceV2LineItem';
import { UnpaidWithBalance } from './unpaidWithBalance';

export class InvoiceV2Response {
    /**
    * Invoice ID.
    */
    'invoiceId': string;
    /**
    * Sequential Invoice Number.
    */
    'invoiceNumber': number;
    /**
    * Account id.
    */
    'accountId': string;
    /**
    * Email
    */
    'email': string;
    /**
    * Mobile phone number
    */
    'mobileNumber': string;
    /**
    * Org id.
    */
    'orgId': string;
    /**
    * Account id.
    */
    'siteId': string;
    /**
    * Account Name.
    */
    'accountName': string;
    /**
    * Total amount for all line items in smallest currency unit (e.g. cents for USD).
    */
    'totalAmount': number;
    'address': InvoiceV2ResponseAddress | null;
    /**
    * Invoice line items.
    */
    'invoiceLineItems': Array<ReducedInvoiceV2LineItem>;
    'invoiceStatus': InvoiceStatus;
    /**
    * Created at.
    */
    'createdAt': Date;
    /**
    * Updated at.
    */
    'updatedAt': Date;
    /**
    * Invoice period start date.
    */
    'invoicePeriodStartDate': Date | null;
    /**
    * Invoice period end date.
    */
    'invoicePeriodEndDate': Date | null;
    /**
    * Unpaid invoice line items
    */
    'unpaid': Array<string> | null;
    /**
    * Unpaid invoice line items
    */
    'unpaidWithBalance': Array<UnpaidWithBalance> | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "invoiceId",
            "baseName": "invoiceId",
            "type": "string"
        },
        {
            "name": "invoiceNumber",
            "baseName": "invoiceNumber",
            "type": "number"
        },
        {
            "name": "accountId",
            "baseName": "accountId",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "mobileNumber",
            "baseName": "mobileNumber",
            "type": "string"
        },
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
            "name": "accountName",
            "baseName": "accountName",
            "type": "string"
        },
        {
            "name": "totalAmount",
            "baseName": "totalAmount",
            "type": "number"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "InvoiceV2ResponseAddress"
        },
        {
            "name": "invoiceLineItems",
            "baseName": "invoiceLineItems",
            "type": "Array<ReducedInvoiceV2LineItem>"
        },
        {
            "name": "invoiceStatus",
            "baseName": "invoiceStatus",
            "type": "InvoiceStatus"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        },
        {
            "name": "invoicePeriodStartDate",
            "baseName": "invoicePeriodStartDate",
            "type": "Date"
        },
        {
            "name": "invoicePeriodEndDate",
            "baseName": "invoicePeriodEndDate",
            "type": "Date"
        },
        {
            "name": "unpaid",
            "baseName": "unpaid",
            "type": "Array<string>"
        },
        {
            "name": "unpaidWithBalance",
            "baseName": "unpaidWithBalance",
            "type": "Array<UnpaidWithBalance>"
        }    ];

    static getAttributeTypeMap() {
        return InvoiceV2Response.attributeTypeMap;
    }
}

export namespace InvoiceV2Response {
}
