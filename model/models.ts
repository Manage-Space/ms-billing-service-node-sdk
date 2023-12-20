import localVarRequest from 'request';

export * from './accountCurrentBalance';
export * from './accountTransactionResponse';
export * from './accountTransactionType';
export * from './addressResponse';
export * from './badRequestError400Response';
export * from './badRequestError400ResponseError';
export * from './baseError';
export * from './createInvoiceLineItemRequest';
export * from './eBillingCycleTypeEnum';
export * from './eInvoicePeriodType';
export * from './forbiddenError403Response';
export * from './forbiddenError403ResponseError';
export * from './getAccountCurrentBalance200Response';
export * from './getAccountTransactions200Response';
export * from './getInvoiceById200Response';
export * from './getInvoiceByIdV2200Response';
export * from './getInvoiceLineItemsByFilters200Response';
export * from './getLedgers200Response';
export * from './internalServerError500Response';
export * from './internalServerError500ResponseError';
export * from './invoiceLineItemResponse';
export * from './invoiceResponse';
export * from './invoiceResponseAddress';
export * from './invoiceRunRequest';
export * from './invoiceRunResponse';
export * from './invoiceStatus';
export * from './invoiceV2AddressResponse';
export * from './invoiceV2LineItemResponse';
export * from './invoiceV2LineItemResponseInvoice';
export * from './invoiceV2Response';
export * from './invoiceV2ResponseAddress';
export * from './ledgerDetailsResponse';
export * from './reducedInvoiceV2LineItem';
export * from './run200Response';
export * from './transactionSummaryResponse';
export * from './unauthorizedError401Response';
export * from './unauthorizedError401ResponseError';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AccountCurrentBalance } from './accountCurrentBalance';
import { AccountTransactionResponse } from './accountTransactionResponse';
import { AccountTransactionType } from './accountTransactionType';
import { AddressResponse } from './addressResponse';
import { BadRequestError400Response } from './badRequestError400Response';
import { BadRequestError400ResponseError } from './badRequestError400ResponseError';
import { BaseError } from './baseError';
import { CreateInvoiceLineItemRequest } from './createInvoiceLineItemRequest';
import { EBillingCycleTypeEnum } from './eBillingCycleTypeEnum';
import { EInvoicePeriodType } from './eInvoicePeriodType';
import { ForbiddenError403Response } from './forbiddenError403Response';
import { ForbiddenError403ResponseError } from './forbiddenError403ResponseError';
import { GetAccountCurrentBalance200Response } from './getAccountCurrentBalance200Response';
import { GetAccountTransactions200Response } from './getAccountTransactions200Response';
import { GetInvoiceById200Response } from './getInvoiceById200Response';
import { GetInvoiceByIdV2200Response } from './getInvoiceByIdV2200Response';
import { GetInvoiceLineItemsByFilters200Response } from './getInvoiceLineItemsByFilters200Response';
import { GetLedgers200Response } from './getLedgers200Response';
import { InternalServerError500Response } from './internalServerError500Response';
import { InternalServerError500ResponseError } from './internalServerError500ResponseError';
import { InvoiceLineItemResponse } from './invoiceLineItemResponse';
import { InvoiceResponse } from './invoiceResponse';
import { InvoiceResponseAddress } from './invoiceResponseAddress';
import { InvoiceRunRequest } from './invoiceRunRequest';
import { InvoiceRunResponse } from './invoiceRunResponse';
import { InvoiceStatus } from './invoiceStatus';
import { InvoiceV2AddressResponse } from './invoiceV2AddressResponse';
import { InvoiceV2LineItemResponse } from './invoiceV2LineItemResponse';
import { InvoiceV2LineItemResponseInvoice } from './invoiceV2LineItemResponseInvoice';
import { InvoiceV2Response } from './invoiceV2Response';
import { InvoiceV2ResponseAddress } from './invoiceV2ResponseAddress';
import { LedgerDetailsResponse } from './ledgerDetailsResponse';
import { ReducedInvoiceV2LineItem } from './reducedInvoiceV2LineItem';
import { Run200Response } from './run200Response';
import { TransactionSummaryResponse } from './transactionSummaryResponse';
import { UnauthorizedError401Response } from './unauthorizedError401Response';
import { UnauthorizedError401ResponseError } from './unauthorizedError401ResponseError';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AccountTransactionType": AccountTransactionType,
        "EBillingCycleTypeEnum": EBillingCycleTypeEnum,
        "EInvoicePeriodType": EInvoicePeriodType,
        "InvoiceStatus": InvoiceStatus,
        "InvoiceV2LineItemResponseInvoice.InvoiceStatusEnum": InvoiceV2LineItemResponseInvoice.InvoiceStatusEnum,
        "TransactionSummaryResponse.StatusEnum": TransactionSummaryResponse.StatusEnum,
}

let typeMap: {[index: string]: any} = {
    "AccountCurrentBalance": AccountCurrentBalance,
    "AccountTransactionResponse": AccountTransactionResponse,
    "AddressResponse": AddressResponse,
    "BadRequestError400Response": BadRequestError400Response,
    "BadRequestError400ResponseError": BadRequestError400ResponseError,
    "BaseError": BaseError,
    "CreateInvoiceLineItemRequest": CreateInvoiceLineItemRequest,
    "ForbiddenError403Response": ForbiddenError403Response,
    "ForbiddenError403ResponseError": ForbiddenError403ResponseError,
    "GetAccountCurrentBalance200Response": GetAccountCurrentBalance200Response,
    "GetAccountTransactions200Response": GetAccountTransactions200Response,
    "GetInvoiceById200Response": GetInvoiceById200Response,
    "GetInvoiceByIdV2200Response": GetInvoiceByIdV2200Response,
    "GetInvoiceLineItemsByFilters200Response": GetInvoiceLineItemsByFilters200Response,
    "GetLedgers200Response": GetLedgers200Response,
    "InternalServerError500Response": InternalServerError500Response,
    "InternalServerError500ResponseError": InternalServerError500ResponseError,
    "InvoiceLineItemResponse": InvoiceLineItemResponse,
    "InvoiceResponse": InvoiceResponse,
    "InvoiceResponseAddress": InvoiceResponseAddress,
    "InvoiceRunRequest": InvoiceRunRequest,
    "InvoiceRunResponse": InvoiceRunResponse,
    "InvoiceV2AddressResponse": InvoiceV2AddressResponse,
    "InvoiceV2LineItemResponse": InvoiceV2LineItemResponse,
    "InvoiceV2LineItemResponseInvoice": InvoiceV2LineItemResponseInvoice,
    "InvoiceV2Response": InvoiceV2Response,
    "InvoiceV2ResponseAddress": InvoiceV2ResponseAddress,
    "LedgerDetailsResponse": LedgerDetailsResponse,
    "ReducedInvoiceV2LineItem": ReducedInvoiceV2LineItem,
    "Run200Response": Run200Response,
    "TransactionSummaryResponse": TransactionSummaryResponse,
    "UnauthorizedError401Response": UnauthorizedError401Response,
    "UnauthorizedError401ResponseError": UnauthorizedError401ResponseError,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
public accessToken: string | (() => string) = process.env.MS_TOKEN || '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
