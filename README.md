# html-FundMe

## Frontend Fundraising Smart Contract

This repository contains the frontend code for a smart contract fundraising project that interacts with a previously built backend smart contract project. This frontend application allows users to connect their wallets, fund the smart contract with Ethereum, check the contract balance, and withdraw funds when needed.

This is a minimalistic example what you can find in the [metamask docs](https://docs.metamask.io/guide/create-dapp.html#basic-action-part-1).

## Requirements

Before getting started with this project, ensure you have the following prerequisites installed on your system:

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

  - You can verify the installation by running: `git --version`

- [Metamask](https://metamask.io/)

  - Metamask is a browser extension that enables interaction with the blockchain.

- [Node.js](https://nodejs.org/en/)

  - Verify Node.js installation by running: `node --version`. You should see an output like: `vx.x.x`.

- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) (instead of `npm`)
  - Confirm Yarn installation by running: `yarn --version`. You should see an output like: `x.x.x`.
  - If needed, you can install Yarn with npm.

If you prefer working with Node.js, you can switch to the `nodejs-edition` branch for a version of this project that uses Node.js.

## Quickstart

Follow these steps to run the project locally:

1. Clone the repository:

```bash
git clone https://github.com/Mr-Saade/html-FundMe
cd html-FundMe
```

2. Run the file.
   You can typically double-click the file to "run it in the browser," or you can right-click the file in your VSCode and choose "open with live server."

3. Connect
   Click the "Connect" button, and the Metamask extension should pop up.

## Execute a Transaction

To execute a transaction, follow these steps:

1. Deploy the smart contract and start a local blockchain:
2. Open a second terminal and run the following commands:

```bash
git clone https://github.com/Mr-Saade/html-FundMe
cd Hardhat-FundMe
yarn
yarn hardhat node
```

This will deploy a sample contract and start a local hardhat blockchain.

3. Update constants.js with the new contract address:
   In the constants.js file, update the variable contractAddress with the address of the deployed "FundMe" contract. You'll find the address near the top of the hardhat output.

4. Connect Metamask to your local hardhat blockchain:
   Ensure that you are using a Metamask account that is not associated with real money. In the output of the previous command, take one of the private key accounts and import it into your Metamask.

Additionally, add your localhost with chainid 31337 to your Metamask.

## Thank you!

Thank you for checking out this project! If you have any questions or need further assistance, please don't hesitate to reach out. Happy fundraising on the blockchain!
