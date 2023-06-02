# Ethers.js

------

## Overview

The Ethers.js code library provides a variety of tools for interacting with Ethereum nodes using JavaScript, similar to Web3.js. SCS Chain offers an API that is similar to Ethereum and fully compatible with Ethereum-style JSON RPC calls. Therefore, developers can leverage this compatibility and use the Ethers.js library to interact with SCS Chain nodes in the same way as with Ethereum. You can learn more about Ethers.js in this article.

## Creating a Project

First, you need to create a directory to store all the files you will create in this tutorial:

```bash
mkdir project-demo && cd project-demo
```

You will need to install the Ethers.js code library and the Solidity compiler. You can install both npm packages by running the following command:

```bash
npm install ethers solc@0.8.0
```

## Setting up Ethers Provider



You will be creating scripts that perform different functions such as sending transactions, deploying contracts, and interacting with a deployed contract. In most of the scripts, you will need to create an Ethers provider to interact with the network.

1. Importing the Ethers Code Library
2. Define the providerRPC object, including the network configuration on which you want to send transactions. You need to include the name, rpc, and chainId of the network.
3. Create a provider using the ethers.JsonRpcProvider function.

```javascript
// 1. Add the Ethers provider logic here:
// {...}

// 2. Define network configurations
const providerRPC = {
  scs: {
    name: 'SCS Chain',
    rpc: 'INSERT_RPC_API_ENDPOINT',
    chainId: 1969, // testnet 1969, mainnet 1970
  },
};
// 3. Create ethers provider
const provider = new ethers.JsonRpcProvider(
  providerRPC.scs.rpc, 
  {
    chainId: providerRPC.scs.chainId,
    name: providerRPC.scs.name,
  }
);
```

------

## Checking Balances

First, you can run the following command to create a balances.js file:

```bash
touch balances.js
```

Next, you will create a script for this file and follow these steps:

1. Set up the Ethers provider.
2. Define the addressFrom and addressTo variables.
3. Create an asynchronous balances function that wraps the provider.getBalance function.
4. Use the provider.getBalance function to retrieve the balances of the addressFrom and addressTo addresses. You can also use the ethers.formatEther function to convert the balances into a readable format in ETH units.
5. Finally, call the balances function.

```javascript
// 1. Add the Ethers provider logic here:
// {...}

// 2. Create address variables
const addressFrom = 'ADDRESS-FROM-HERE';
const addressTo = 'ADDRESS-TO-HERE';

// 3. Create balances function
const balances = async () => {
  // 4. Fetch balances
  const balanceFrom = ethers.formatEther(await provider.getBalance(addressFrom));
  const balanceTo = ethers.formatEther(await provider.getBalance(addressTo));

  console.log(`The balance of ${addressFrom} is: ${balanceFrom} SCS`);
  console.log(`The balance of ${addressTo} is: ${balanceTo} SCS`);
};

// 5. Call the balances function
balances();
```

You can run the following command to execute the script and retrieve the account balances:

```bash
node balances.js
```

------

## Sending Transactions

First, you can run the following command to create a transaction.js file:

```bash
touch transaction.js
```

Next, you will create a script for this file and follow these steps:

1. Set up the Ethers provider.
2. Define the privateKey and addressTo variables. Here, you need the private key to create a wallet instance. Note: This operation is for demonstration purposes only.Do not store your private key in a JavaScript file.
3. Create a wallet using the privateKey and provider from the previous steps. This wallet instance will be used to sign transactions.
4. Create an asynchronous send function that encapsulates the transaction target and the wallet.sendTransaction function.
5. Create a transaction object that only requires the recipient address and the amount to send. Note that you can use ethers.parseEther, which handles the necessary unit conversion from Ether to Wei, just like using ethers.parseUnits(value, 'ether').
6. Use the wallet.sendTransaction function to send the transaction and then await the completion of the transaction and retrieve the transaction receipt.
7. Finally, call the send function.

```javascript
// 1. Add the Ethers provider logic here:
// {...}
// 2. Create account variables
const account_from = {
  privateKey: 'YOUR-PRIVATE-KEY-HERE',
};
const addressTo = 'ADDRESS-TO-HERE';

// 3. Create wallet
let wallet = new ethers.Wallet(account_from.privateKey, provider);

// 4. Create send function
const send = async () => {
  console.log(`Attempting to send transaction from ${wallet.address} to ${addressTo}`);

  // 5. Create tx object
  const tx = {
    to: addressTo,
    value: ethers.parseEther('1'),
  };

  // 6. Sign and send tx - wait for receipt
  const createReceipt = await wallet.sendTransaction(tx);
  await createReceipt.wait();
  console.log(`Transaction successful with hash: ${createReceipt.hash}`);
};

// 7. Call the send function
send();
```

You can run the following command in the terminal to execute the script:

```bash
node transaction.js
```