# 使用Remix部署

## 概觀
[Remix](https://remix.ethereum.org)是目前以太坊上最常被使用的智能合約開發環境之一。基於SCS Chain兼容以太坊的特性，Remix 可直接與SCS Chain 網路一起使用。本教程將介紹使用Remix IDE在SCS Chain開發節點上部署和建立基於Solidity的智能合約的過程。

## 檢視先決條件

在開始之前，您將需要準備以下內容：
* 安裝且設定完畢的[MetaMask](https://metamask.io/)以使用您的開發節點


## 開始使用Remix

現在，您可以啟動Remix進行操作。在主頁面的Featured Plugins下選擇 SOLIDITY作為Solidity開發配置Remix，接著導航至File Explorers查看。

![](/zh/images/remix-01.png)

您將需要創建一個新文件以保存Solidity智能合約。點擊File Explorers下方的+按鈕並在彈出窗口中輸入文件名MyToken.sol。

![](/zh/images/remix-02.png)

接著，將以下智能合約貼上至彈窗的編輯框內：
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor() ERC20("MyToken", "MTK") {
        _mint(msg.sender, 100000000 * 10 ** decimals());
    }
}
```

這是一個基於最新OpenZeppelin SRC-20模板編寫的簡易版SRC-20合約。該合約使用MYTOK作為MyToken的符號，並為合約創建者鑄造初始Token。

接著，導向至側邊選項的Compile並點擊Compile MyToken.sol按鈕。

您將會看到Remix下載了所有OpenZeppelin的依賴項並完成合約編譯。

請在MetaMask點擊Next授權Remix使用您所選取的帳戶。

接著返回Remix界面，您會看到您想要用來部署的帳戶已經通過MetaMask授權登入。

確認無誤之後，請點擊Deploy。

![](/zh/images/remix-03.png)

隨後，MetaMask將跳出彈窗要求您確認此次部署合約的交易。

在您點擊Confirm後，部署也隨之完成，您將會在MetaMask上看到您的交易記錄。與此同時，合約也將會在Remix中的Deployed Contracts下出現。

成功部署合約之後，您便可通過Remix與智能合約進行交互。

將頁面下滑，找到MYTOKEN At，如果您複製合約地址並將它粘貼在balanceOf欄位中，您可以看到使用者地址上的帳戶全部餘額。點擊合約名稱和地址旁邊的按鈕可複製合約地址。

![](/zh/images/remix-04.png)

## 通過MetaMask與SRC-20進行交互

現在，打開MetaMask添加剛部署的SRC-20 Token。在操作之前先確認您已在Remix上複製了合約地址。回到MetaMask，如下圖所示，點擊Add Token。請確保您現在所操作的帳戶為已部署合約的帳戶。

![](/zh/images/remix-05.png)

將已複製的合約地址粘貼至Custom Token欄位內，與此同時Token Symbol和Decimals of Precision欄位會自動填充。

![](/zh/images/remix-06.png)