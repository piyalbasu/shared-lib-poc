import { Networks, NETWORK_URLS, NetworkDetails } from "../constants";

export const isTestnet = (networkDetails: NetworkDetails) => {
  const { networkPassphrase, networkUrl } = networkDetails;

  return (
    networkPassphrase === Networks.TESTNET &&
    networkUrl === NETWORK_URLS.TESTNET
  );
};

export const getStellarExpertUrl = (networkDetails: NetworkDetails) =>
  `https://stellar.expert/explorer/${
    isTestnet(networkDetails) ? "testnet" : "public"
  }`;

export const getApiStellarExpertUrl = (networkDetails: NetworkDetails) =>
  `https://api.stellar.expert/explorer/${
    isTestnet(networkDetails) ? "testnet" : "public"
  }`;
