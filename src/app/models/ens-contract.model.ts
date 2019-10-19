export interface EnsContract {
  contractName: string;
  networks: [
    {
      name: string;
      provider: string;
      address: string;
    }
  ];
  abi: [];
}
