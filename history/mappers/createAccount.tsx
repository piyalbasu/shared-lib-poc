import BigNumber from "bignumber.js";
import {
  TransactionDetails,
  TransactionType,
  TransactionStatus,
  HistoryItemData,
} from "../types";
import { createOperationString, getIconString, formatAmount } from "../helpers";

interface CreateAccountHistoryItemData {
  operation: any;
  stellarExpertUrl: string;
  date: string;
  fee: string;
  isCreateExternalAccount: boolean;
}

/**
 * Maps create account operation data to history item data
 */
export const mapCreateAccountHistoryItem = ({
  operation,
  stellarExpertUrl,
  date,
  fee,
  isCreateExternalAccount,
}: CreateAccountHistoryItemData): HistoryItemData => {
  const { account, starting_balance: startingBalance } = operation;
  const isRecipient = !isCreateExternalAccount;
  const paymentDifference = isRecipient ? "+" : "-";
  const formattedAmount = `${paymentDifference}${formatAmount(
    new BigNumber(startingBalance).toString()
  )} XLM`;

  const iconString = getIconString();
  const actionIconString = isRecipient ? "PlusCircle" : "ArrowCircleUp";

  const transactionDetails: TransactionDetails = {
    operation,
    transactionTitle: "Create account",
    transactionType: TransactionType.CREATE_ACCOUNT,
    fee,
    status: TransactionStatus.SUCCESS,
    iconString,
    actionIconString,
    externalUrl: `${stellarExpertUrl}/op/${operation.id}`,
    createAccountDetails: {
      isCreatingExternalAccount: isCreateExternalAccount,
      accountPublicKey: account,
      startingBalance,
    },
  };

  return {
    transactionDetails,
    rowText: "Create account",
    dateText: date,
    amountText: formattedAmount,
    actionText: isRecipient ? "Received" : "Sent",
    iconString,
    actionIconString,
    transactionStatus: TransactionStatus.SUCCESS,
    isAddingFunds: isRecipient,
    operationString: createOperationString(
      TransactionType.CREATE_ACCOUNT,
      operation
    ),
  };
};
