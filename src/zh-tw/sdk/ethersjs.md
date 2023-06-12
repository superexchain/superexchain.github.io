# Ethers.js
## 概覽
Ethers.js是一個JavaScript程式庫，提供多種工具，用於與以太坊節點進行互動，類似於Web3.js。SCS Chain擁有與以太坊相似的API，完全兼容以太坊風格的JSON RPC調用。因此，開發人員可以利用這種兼容性，使用Ethers.js程式庫與SCS Chain節點進行互動，就像在以太坊上操作一樣。您可以在本文中瞭解更多關於Ethers.js的資訊。


## 建立專案
首先，您需要創建一個目錄，用於存儲您在本教程中將要創建的所有文件：
```bash
mkdir project-demo && cd project-demo
```

接下來，您需要安裝Ethers.js程式庫和Solidity編譯器。您可以執行以下命令來安裝這兩個的NPM安裝包：

```bash
npm install ethers solc@0.8.0
```

## 設置Ethers提供者

您將創建具有不同功能的腳本，例如發送交易、部署合約以及與已部署合約進行互動。在大部分腳本中，您需要創建一個Ethers提供者與網絡進行互動。
1. 導入ethers程式庫
2. 定義providerRPC對象，包括您希望在其上發送交易的網絡配置。您需要包含網絡的名稱、RPC和chainId。
3. 使用ethers.JsonRpcProvider函數創建提供者。

```javascript
// 1. 在這裡添加Ethers提供者邏輯：
// {...}

// 2. 定義網絡配置
const providerRPC = {
  scs: {
    name: 'SCS Chain',
    rpc: 'INSERT_RPC_API_ENDPOINT',
    chainId: 1969, // testnet 1969, mainnet 1970
  },
};
// 3. 創建Ethers提供者
const provider = new ethers.JsonRpcProvider(
  providerRPC.scs.rpc, 
  {
    chainId: providerRPC.scs.chainId,
    name: providerRPC.scs.name,
  }
);
```

## 查看餘額
首先，您可以運行以下命令創建一個balances.js文件

```bash
touch balances.js
```
接下來，您將為此文件創建腳本並完成以下步驟：
1. 設置Ethers提供者
2. 定義addressFrom和addressTo變量
3. 創建一個異步的balances函數，其中包含provider.getBalance函數的調用
4. 使用provider.getBalance函數獲取addressFrom和addressTo地址的餘額。您也可以使用ethers.formatEther函數將餘額轉換為以太幣（ETH）單位，以便更容易閱讀
5. 最後，調用balances函數
```javascript
// 1. 在這裡添加Ethers提供者邏輯：
// {...}

// 2. 創建地址變量
const addressFrom = 'ADDRESS-FROM-HERE';
const addressTo = 'ADDRESS-TO-HERE';

// 3. 創建balances函數
const balances = async () => {
  // 4. 獲取餘額
  const balanceFrom = ethers.formatEther(await provider.getBalance(addressFrom));
  const balanceTo = ethers.formatEther(await provider.getBalance(addressTo));

  console.log(`The balance of ${addressFrom} is: ${balanceFrom} SCS`);
  console.log(`The balance of ${addressTo} is: ${balanceTo} SCS`);
};

// 5. 調用balances函數
balances();
```
您可以運行以下命令來執行腳本並獲取帳戶餘額：

```bash
node balances.js
```

## 發送交易
首先，您可以運行以下命令創建一個transaction.js文件

```bash
touch transaction.js
```
接下來，您將為此文件創建腳本並完成以下步驟：
1. 設置Ethers提供者
2. 定義privateKey和addressTo變量。此處需要私鑰以創建一個錢包實例。請注意：此處操作僅用於示範目的，請勿將您的私鑰存儲在JavaScript文件中。
3. 使用先前步驟中的privateKey和provider創建一個錢包。該錢包實例將用於簽署交易。
4. 創建一個異步的send函數，其中包含交易目標和wallet.sendTransaction函數的調用。
5. 創建交易目標，其中只需指定接收方地址和發送的數量。注意，您可以使用ethers.parseEther函數，它可以處理以太幣（Ether）和Wei之間的必要單位轉換，就像使用ethers.parseUnits(value, 'ether')一樣。
6. 使用wallet.sendTransaction函數發送交易，然後使用await等待交易處理完成並返回交易收據。
7. 最後，調用send函數。

```javascript
// 1. 在這裡添加Ethers提供者邏輯：
// {...}

// 2. 創建帳戶變量
const account_from = {
  privateKey: 'YOUR-PRIVATE-KEY-HERE',
};
const addressTo = 'ADDRESS-TO-HERE';

// 3. 創建錢包
let wallet = new ethers.Wallet(account_from.privateKey, provider);

// 4. 創建send函數
const send = async () => {
  console.log(`Attempting to send transaction from ${wallet.address} to ${addressTo}`);

  // 5. 創建交易對象
  const tx = {
    to: addressTo,
    value: ethers.parseEther('1'),
  };

  // 6. 簽署並發送交易 - 等待收據
  const createReceipt = await wallet.sendTransaction(tx);
  await createReceipt.wait();
  console.log(`Transaction successful with hash: ${createReceipt.hash}`);
};

// 7. 調用send函數
send();
```

您可以在終端運行以下命令來執行腳本：
```bash
node transaction.js
```
