# 使用Remix部署

## 概览
[Remix](https://remix.ethereum.org)是目前以太坊上最常被使用的智能合约开发环境之一。基于SCS Chain兼容以太坊的特性，Remix可直接与SCS Chain网络一起使用。
本教程将介绍使用Remix IDE在SCS Chain开发节点上部署和创建基于Solidity的智能合约的过程。

## 查看先决条件

在开始之前，您将需要准备以下内容：
* 安装且配置完毕的[MetaMask](https://metamask.io/)以使用您的开发节点


## 开始使用Remix

现在，您可以启动Remix进行操作。在主页面的Featured Plugins下选择 SOLIDITY为Solidity开发配置Remix，接着导航至File Explorers查看。

![](/zh/images/remix-01.png)

您将会需要创建一个新文件以保存Solidity智能合约。点击File Explorers下方的+按钮并在弹窗中输入文件名称MyToken.sol。

![](/zh/images/remix-02.png)

接着，将以下智能合约粘贴至弹窗的编辑框内：
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

这是一个基于最新OpenZeppelin SRC-20模板编写的简易版SRC-20合约。该合约使用MYTOK作为MyToken的符号，并为合约创建者铸造初始Token。

接着，导向至侧边选项的Compile并点击Compile MyToken.sol按钮。

您将会看到Remix下载了所有OpenZeppelin的依赖项并完成合约编译。

请在MetaMask点击Next授权Remix使用您所选取的账户。

接着返回Remix界面，您会看到您想要用来部署的账户已经通过MetaMask授权登入。

确认无误之后，请点击Deploy。

![](/zh/images/remix-03.png)

随后，MetaMask将跳出弹窗要求您确认此次部署合约的交易。

在您点击Confirm后部署也随之完成，您将会在MetaMask上看到您的交易记录。与此同时，合约也将会在Remix中的Deployed Contracts下出现。

成功部署合约之后，您便可通过Remix与智能合约进行交互。

将页面下滑，找到MYTOKEN At，如果您复制合约地址并将它粘贴在balanceOf字段中，您可以看到用户地址上的账户全部余额。点击合约名称和地址旁边的按钮可复制合约地址。

![](/zh/images/remix-04.png)

## 通过MetaMask与SRC-20进行交互

现在，打开MetaMask添加刚部署的SRC-20 Token。在操作之前先确认您已在Remix上复制了合约地址。回到MetaMask，如下图所示，点击Add Token。请确保您现在所操作的账户为已部署合约的账户。

![](/zh/images/remix-05.png)

将已复制的合约地址粘贴至Custom Token字段内，与此同时Token Symbol和Decimals of Precision字段会自动填充。

![](/zh/images/remix-06.png)