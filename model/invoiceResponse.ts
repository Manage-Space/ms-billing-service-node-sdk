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
import { InvoiceLineItemResponse } from './invoiceLineItemResponse';
import { InvoiceResponseAddress } from './invoiceResponseAddress';

export class InvoiceResponse {
    /**
    * Invoice ID.
    */
    'invoiceId': string;
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
    * Account Name.
    */
    'accountName': string;
    /**
    * Transaction id.
    */
    'transactionId': string;
    /**
    * The transaction date.
    */
    'transactionDate': Date;
    /**
    * Transaction status.
    */
    'transactionStatus': string;
    /**
    * Payment provider invoice id.
    */
    'paymentProviderInvoiceId': string;
    /**
    * Payment provider invoice status.
    */
    'paymentProviderStatus': string;
    /**
    * Account id.
    */
    'siteId': string;
    /**
    * The currency.
    */
    'currency': string;
    /**
    * Total amount for all line items in smallest currency unit (e.g. cents for USD).
    */
    'totalAmount': number;
    'address': InvoiceResponseAddress | null;
    /**
    * Created at.
    */
    'createdAt': string;
    /**
    * Updated at.
    */
    'updatedAt': string;
    /**
    * Invoice line items.
    */
    'invoiceLineItems': Array<InvoiceLineItemResponse>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "invoiceId",
            "baseName": "invoiceId",
            "type": "string"
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
            "name": "accountName",
            "baseName": "accountName",
            "type": "string"
        },
        {
            "name": "transactionId",
            "baseName": "transactionId",
            "type": "string"
        },
        {
            "name": "transactionDate",
            "baseName": "transactionDate",
            "type": "Date"
        },
        {
            "name": "transactionStatus",
            "baseName": "transactionStatus",
            "type": "string"
        },
        {
            "name": "paymentProviderInvoiceId",
            "baseName": "paymentProviderInvoiceId",
            "type": "string"
        },
        {
            "name": "paymentProviderStatus",
            "baseName": "paymentProviderStatus",
            "type": "string"
        },
        {
            "name": "siteId",
            "baseName": "siteId",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "currency",
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
            "type": "InvoiceResponseAddress"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "string"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "string"
        },
        {
            "name": "invoiceLineItems",
            "baseName": "invoiceLineItems",
            "type": "Array<InvoiceLineItemResponse>"
        }    ];

    static getAttributeTypeMap() {
        return InvoiceResponse.attributeTypeMap;
    }
}

