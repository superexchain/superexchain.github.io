# Ethers.js
## 概览
Ethers.js代码库提供用户使用JavaScript与以太坊节点交互的多样工具，类似于Web3.js。SCS Chain拥有与以太坊相似的API供用户使用，其与以太坊风格的JSON RPC调用完全兼容。因此，开发者可以利用此兼容特性并使用Ethers.js库与SCS Chain节点交互，与在以太坊操作相同。您可以在此文章了解更多关于Ethers.js的信息。


## 创建项目
首先，您需要创建一个目录，以存储您在本教程中将要创建的所有文件：
```bash
mkdir project-demo && cd project-demo
```

您将需要安装Ethers.js代码库和Solidity编译器。您可以通过运行以下命令来安装两者的NPM安装包：

```bash
npm install ethers solc@0.8.0
```

## 设置Ehters提供商

您将会创建提供不同功能的脚本，如发送交易、部署合约以及与一个已部署合约交互。在大部分的脚本中，您需要创建一个Ethers提供者与网络交互。
1. 导入ethers代码库
2. 定义providerRPC标的，包括您希望在其上发送交易的网络配置。您将会需要包含网络的name、rpc和chainId
3. 使用ethers.JsonRpcProvider函数创建provider

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

## 查看余额
首先，您可以运行以下命令创建一个balances.js文件
```bash
touch balances.js
```
接下来，您将为此文件创建脚本并完成以下步骤：
1. 设置Ethers提供者
2. 定义addressFrom和addressTo变量
3. 创建打包了provider.getBalance函数的异步balances函数
4. 使用provider.getBalance函数获取addressFrom和addressTo地址的余额。您也可以使用ethers.formatEther函数将余额转换成以ETH为单位的数字便于阅读
5. 最后，运行balances函数
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

您可以运行以下命令以运行脚本并获取账户余额：
```bash
node balances.js
```

## 发送交易
首先，您可以运行以下命令创建一个transaction.js文件
```bash
touch transaction.js
```
接下来，您将为此文件创建脚本并完成以下步骤：
1. 设置Ethers提供者
2. 定义privateKey和addressTo变量。此处需要私钥以创建一个钱包实例。请注意：此处操作仅用于演示目的，请勿将您的私钥存储在JavaScript文件中
3. 使用先前步骤中的privateKey和provider创建一个钱包。此钱包实例将会被用于签署交易
4. 创建打包了交易标的以及wallet.sendTransaction函数的异步send函数
5. 创建仅需要接受者地址以及发送数量的交易标的。注意，您可以使用ethers.parseEther，其能够处理Ether至Wei的必要单位换算，如同使用ethers.parseUnits(value, 'ether')
6. 使用wallet.sendTransaction函数发送交易，然后使用await等待交易处理完毕并返回交易回执
7. 最后，运行send函数

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

您可以在终端运行以下命令以运行脚本：
```bash
node transaction.js
```
