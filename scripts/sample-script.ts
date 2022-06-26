// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
import { BigNumber, constants, utils } from 'ethers'
import { SimpleTiers } from '../typechain-types'

const getImage = async (
	amount: BigNumber,
	contract: SimpleTiers
): Promise<string> =>
	contract.image(
		constants.Zero,
		constants.AddressZero,
		{
			amount,
			property: constants.AddressZero,
			price: constants.Zero,
			cumulativeReward: constants.Zero,
			pendingReward: constants.Zero,
		},
		{
			entireReward: constants.Zero,
			cumulativeReward: constants.Zero,
			withdrawableReward: constants.Zero,
		}
	)

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const SimpleTiers = await hre.ethers.getContractFactory("SimpleTiers");
  // Const greeter = await Greeter.deploy("Hello, Hardhat!");
  const simpleTiers: SimpleTiers = await SimpleTiers.deploy();

  await simpleTiers.deployed();

  console.log("deployed to:", simpleTiers.address);

  const res1 = await simpleTiers.setTier(utils.parseUnits('5'), 'https://avatars.githubusercontent.com/u/24754710?v=4') //　You can set image URI and threshold　 val as you like.
  // console.log({res1});
  
  const res2 = await  simpleTiers.setTier(utils.parseUnits('50'), 'https://qiita-image-store.s3.amazonaws.com/0/114040/profile-images/1515285262') //　You can set image URI and threshold　 val as you like.
  // console.log({res2})

  const image1 = await getImage(utils.parseUnits('10'), simpleTiers);
  console.log({image1});
  
  const image2 = await getImage(utils.parseUnits('50'), simpleTiers);
  console.log({image2});
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
