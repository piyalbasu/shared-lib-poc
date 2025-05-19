export interface NetworkDetails {
  network: string;
  networkName: string;
  networkUrl: string;
  // TODO: Should be Networks
  networkPassphrase: string;
  friendbotUrl?: string;
  sorobanRpcUrl?: string;
}

export enum Networks {
  PUBLIC = "Public Global Stellar Network ; September 2015",
  TESTNET = "Test SDF Network ; September 2015",
  FUTURENET = "Test SDF Future Network ; October 2022",
  SANDBOX = "Local Sandbox Stellar Network ; September 2022",
  STANDALONE = "Standalone Network ; February 2017",
}

export enum NETWORK_URLS {
  PUBLIC = "https://horizon.stellar.org",
  TESTNET = "https://horizon-testnet.stellar.org",
  FUTURENET = "https://horizon-futurenet.stellar.org",
}
