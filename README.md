# dynamic-s-tokens-simple-tiers

# Installation

```bash
yarn
```

# Verifying a deployed contracts

## For a contract with no constructor arguments

Run hardhat-etherscan

```bash
yarn hardhat verify --network <NETWORK_NAME> <CONTRACT_ADDRESS>
```

## For a contract with constructor arguments

1. Create an arguments declaration file

```js
// cat ./scripts/arguments.js
module.exports = [
	'arguments 1',
	'arguments 2',
	'arguments 3',
	...
]
```

2. Run hardhat-etherscan

```bash
yarn hardhat verify --network <NETWORK_NAME> <CONTRACT_ADDRESS> --contract <PATH_TO_CONTRACT>:<CONTRACT_NAME> --constructor-args ./scripts/arguments.js
```

# How to Deploy Descriptor contract and apply Dynamic sToken to property token(polygon munbai)

0. prepare account having polygon munbai matic.
also, you register app to https://niwa.xyz/ on polygon munbai, and get property address.

1. set env　vals

```bash
POLYGONSCAN_MUMBAI_KEY='' # register polygonscan and you can get from https://polygonscan.com/myapikey 
PRIVATE_KEY='' # account private key having polygon munbai matic
ALCHEMY_MUNBAI_ENDPOINT='' # get from https://www.alchemy.com/
```

2. run `yarn deploy --network matic`, then Descriptor contract has been deployed to polygon munbai.
you can get contract address on console, you remember that.

p.s.
you can set image URI and threshold　 val as you like on `scripts/sample-script.ts`

3. run below command and verify contract.

```bash
yarn hardhat verify --network matic <CONTRACT_ADDRESS>
```

4. you can set relations between Descriptor contract and your property address.
on [this page](https://mumbai.polygonscan.com/address/0xe0af15141ABd0B31Fb15e250971936Fe8837230a#writeProxyContract), you can see `setTokenURIDescriptor`.
you set Descriptor contract and your property address and run, then has been made relations.

https://docs.devprotocol.xyz/developers/use-cases/staking-bearing-nfts-as-your-collectibles#apply-the-developed-descriptor-to-your-property-tokens

that' all.
already you can see Dynamic sToken changing images reacting to token staking amount. 

(https://docs.devprotocol.xyz/developers/use-cases/staking-bearing-nfts-as-your-collectibles#dev-kit-js
or using https://github.com/dev-protocol/clubs-monorepo)