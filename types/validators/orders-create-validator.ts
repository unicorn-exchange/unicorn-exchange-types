import {orderCommonFields, orderWriteFields} from "../enums/forms/order";
import * as yup from "yup";

export const ordersCreateValidationScheme = {
  [orderWriteFields.countryId]: yup
    .number()
    .nullable()
    .required(),
  [orderWriteFields.currencySell]: yup
    .number()
    .nullable()
    .required(),
  [orderCommonFields.currencySellPrice]: yup.string().required(),
  [orderWriteFields.currencyBuy]: yup.number().required(),
  [orderCommonFields.currencyBuyPrice]: yup
    .string()
    .nullable()
    .required(),
  [orderWriteFields.paymentMethodId]: yup
    .number()
    .nullable()
    .required(),
  [orderCommonFields.bankName]: yup
    .string()
    .nullable()
    .required(),
  [orderCommonFields.marginProfit]: yup.string().required(),
  [orderCommonFields.isAutoAdjustTransactionLimit]: yup.boolean().nullable(),
  [orderCommonFields.termsOfTrade]: yup.string().nullable(),
  [orderCommonFields.isVerifiedUsersOnly]: yup.boolean().nullable(),
  [orderCommonFields.isTrustedUsersOnly]: yup.boolean().nullable(),
  [orderCommonFields.isIdentifyUsersBeforeContinueTrade]: yup.boolean().nullable(),
};
