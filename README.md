
Before you begin, you need to install the following tools:

Node (v18 LTS)
Yarn (v1 or v2+)
Git
Then download the challenge to your computer and install dependencies by running:

git clone https://github.com/rodoqui17/CarbonTrade.git
cd carbontrade
git checkout carbontrade
yarn install
in the same terminal, start your local network (a blockchain emulator in your computer):

yarn chain
in a second terminal window, 🛰 deploy your contract (locally):

cd carbontrade
yarn deploy
in a third terminal window, start your 📱 frontend:

cd carbontrade
yarn start
📱 Open http://localhost:3000 to see the app.

Checkpoint 1: ⛽️ Gas & Wallets 👛
⛽️ You'll need to get some funds from the faucet for gas.

gas&wallet

🦊 At first, don't connect MetaMask. If you are already connected, click Disconnect:

 

🔥 We'll use burner wallets on localhost.

👛 Explore how burner wallets work in 🏗 Scaffold-ETH 2 by opening a new incognito window and navigate to http://localhost:3000. You'll notice it has a new wallet address in the top right. Copy the incognito browser's address and send localhost test funds to it from your first browser (using the Faucet button in the bottom left):

icognito&webBrowser

👨🏻‍🚒 When you close the incognito window, the account is gone forever. Burner wallets are great for local development but you'll move to more permanent wallets when you interact with public networks.

Checkpoint 2: 🖨 Minting
✏️ Mint some NFTs! Click the MINT NFT button in the My NFTs tab.

image

👀 You should see your NFTs start to show up:

image

👛 Open an incognito window and navigate to http://localhost:3000

🎟 Transfer an NFT to the incognito window address using the UI:

image

👛 Try to mint an NFT from the incognito window.

Can you mint an NFT with no funds in this address? You might need to grab funds from the faucet to pay for the gas!

🕵🏻‍♂️ Inspect the Debug Contracts tab to figure out what address is the owner of YourCollectible?

🔏 You can also check out your smart contract YourCollectible.sol in packages/hardhat/contracts.

💼 Take a quick look at your deploy script 00_deploy_your_contract.js in packages/hardhat/deploy.

📝 If you want to edit the frontend, navigate to packages/nextjs/pages and open the specific page you want to modify. For instance: myNFTs.tsx.

Checkpoint 3: 💾 Deploy your contract! 🛰
🛰 Ready to deploy to a public testnet?!?

Change the defaultNetwork in packages/hardhat/hardhat.config.ts to sepolia.

chall-0-hardhat-config

🔐 Generate a deployer address with yarn generate. This creates a unique deployer address and saves the mnemonic locally.

This local account will deploy your contracts, allowing you to avoid entering a personal private key.

chall-0-yarn-generate

👩‍🚀 Use yarn account to view your deployer account balances.

chall-0-yarn-account

⛽️ You will need to send ETH to your deployer address with your wallet, or get it from a public faucet of your chosen network.

Some popular faucets are https://sepoliafaucet.com/ and https://www.infura.io/faucet/sepolia

⚔️ Side Quest: Keep a 🧑‍🎤 punkwallet.io on your phone's home screen and keep it loaded with testnet eth. 🧙‍♂️ You'll look like a wizard when you can fund your deployer address from your phone in seconds.

🚀 Deploy your NFT smart contract with yarn deploy.

💬 Hint: You can set the defaultNetwork in hardhat.config.ts to sepolia OR you can yarn deploy --network sepolia.

Checkpoint 4: 🚢 Ship your frontend! 🚁
✏️ Edit your frontend config in packages/nextjs/scaffold.config.ts to change the targetNetwork to chains.sepolia :

chall-0-scaffold-config

You should see the correct network in the frontend (http://localhost:3000):

image

🦊 Since we have deployed to a public testnet, you will now need to connect using a wallet you own or use a burner wallet. By default 🔥 burner wallets are only available on hardhat . You can enable them on every chain by setting onlyLocalBurnerWallet: false in your frontend config (scaffold.config.ts in packages/nextjs/)

image

💬 Hint: For faster loading of your transfer page, consider updating the fromBlock passed to useScaffoldEventHistory in packages/nextjs/pages/transfers.tsx to blocknumber - 10 at which your contract was deployed. Example: fromBlock: 3750241n (where n represents its a BigInt). To find this blocknumber, search your contract's address on Etherscan and find the Contract Creation transaction line.

🚀 Deploy your NextJS App

yarn vercel
Follow the steps to deploy to Vercel. Once you log in (email, github, etc), the default options should work. It'll give you a public URL.

If you want to redeploy to the same production URL you can run yarn vercel --prod. If you omit the --prod flag it will deploy it to a preview/test URL.

⚠️ Run the automated testing function to make sure your app passes

yarn test
Configuration of Third-Party Services for Production-Grade Apps.
By default, 🏗 Scaffold-ETH 2 provides predefined API keys for popular services such as Alchemy and Etherscan. This allows you to begin developing and testing your applications more easily, avoiding the need to register for these services.
This is great to complete your SpeedRunEthereum.

For production-grade applications, it's recommended to obtain your own API keys (to prevent rate limiting issues). You can configure these at:

🔷ALCHEMY_API_KEY variable in packages/hardhat/.env and packages/nextjs/.env.local. You can create API keys from the Alchemy dashboard.

📃ETHERSCAN_API_KEY variable in packages/hardhat/.env with your generated API key. You can get your key here.

💬 Hint: It's recommended to store env's for nextjs in Vercel/system env config for live apps and use .env.local for local testing.

Checkpoint 5: 📜 Contract Verification
You can verify your smart contract on Etherscan by running (yarn verify --network network_name) :

yarn verify --network sepolia
It is okay if it says your contract is already verified. Copy the address of YourCollectable.sol and search it on sepolia Etherscan to find the correct URL you need to submit this challenge.

Checkpoint 6: 💪 Flex!
👩‍❤️‍👨 Share your public url with a friend and ask them for their address to send them a collectible :)

gif

⚔️ Side Quests
🐟 Open Sea
🐃 Want to see your new NFTs on Opensea? Head to Testnets Opensea

🎫 Make sure you have minted some NFTs on your Vercel page, then connect to Opensea using that same wallet.

image

You can see your collection of shiny new NFTs on a testnet!

(It can take a while before they show up, but here is an example:) https://testnets.opensea.io/assets/sepolia/0x17ed03686653917efa2194a5252c5f0a4f3dc49c/2

🏃 Head to your next challenge here.

💬 Problems, questions, comments on the stack? Post them to the 🏗 scaffold-eth developers chat

