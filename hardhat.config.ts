import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-etherscan'
import { HardhatUserConfig } from 'hardhat/config'
import * as dotenv from 'dotenv'

dotenv.config()

const mnemnoc =
	typeof process.env.MNEMONIC === 'undefined' ? '' : process.env.MNEMONIC

const config: HardhatUserConfig = {
	solidity: {
		version: '0.8.9',
		settings: {
			optimizer: {
				enabled: true,
				runs: 1000,
			},
		},
	},
	networks: {
		mainnet: {
			url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY!}`,
			accounts: {
				mnemonic: mnemnoc,
			},
		},
		arbitrumOne: {
			url: `https://arbitrum-mainnet.infura.io/v3/${process.env.INFURA_KEY!}`,
			accounts: {
				mnemonic: mnemnoc,
			},
		},
		arbitrumRinkeby: {
			url: `https://arbitrum-rinkeby.infura.io/v3/${process.env.INFURA_KEY!}`,
			accounts: {
				mnemonic: mnemnoc,
			},
		},
		polygonMainnet: {
			url: `https://polygon-mainnet.infura.io/v3/${process.env.INFURA_KEY!}`,
			accounts: {
				mnemonic: mnemnoc,
			},
		},
		polygonMumbai: {		
			url: `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_KEY!}`,
			accounts: {
				mnemonic: mnemnoc,
			},
		},
		matic: {
			url: process.env.ALCHEMY_MUNBAI_ENDPOINT,
			accounts: [process.env.PRIVATE_KEY!]
		}
	},
	etherscan: {
		apiKey: {
			mainnet: process.env.ETHERSCAN_KEY,
			arbitrumOne: process.env.ARBISCAN_KEY,
			arbitrumTestnet: process.env.ARBISCAN_RINKEBY_KEY,
			polygon: process.env.POLYGONSCAN_KEY,
			polygonMumbai: process.env.POLYGONSCAN_MUMBAI_KEY,
		},
	},
}

export default config
