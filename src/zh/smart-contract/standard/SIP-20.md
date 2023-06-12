# SIP20-SRC20 代幣標準

## 簡要說明

代幣（Token）的標準介面。

## 摘要

本標準說明了在智能合約中實現代幣的標準API。

該標準提供了代幣的基本功能：如轉移代幣，授權代幣給其他人（如鏈上第三方應用）使用。

## 動機

標準介面允許以太坊上的任何代幣被其他應用程序重用，如錢包、去中心化交易所等。

## API 規範

### 函數

**注意**:
 - API 規範使用 Solidity 0.4.17（或以上版本）的語法
 - 呼叫者必須處理 `returns (bool success)` 返回`false` , 不能假定`false`不會返回。


#### 可選函數: name

函數返回代幣的名稱 - 如 `"MyToken"` 或  `"我的代幣"`

此函數是可選的，但是這個函數可以提高代幣的可用性，不過呼叫者不能假定這個函數存在。

``` solidity
function name() public view returns (string)
```


#### 可選函數: symbol

函數返回代幣的代號(通常為字母縮寫)，如 "HIX"，"UPT"。

此函數是可選的，但是這個函數可以提高代幣的可用性，不過呼叫者不能假定這個函數存在。

``` solidity
function symbol() public view returns (string)
```



#### 可選函數: decimals

返回代幣使用的小數位數 - 例如"8"，意味著將代幣量除以"100000000"以獲取其使用者表示形式。

此函數是可選的，但是這個函數可以提高代幣的可用性，不過呼叫者不能假定這個函數存在。

``` solidity
function decimals() public view returns (uint8)
```


#### 函數: totalSupply

返回總代幣供應量。

``` solidity
function totalSupply() public view returns (uint256)
```



#### 函數: balanceOf
返回帳戶（通過參數"_owner"）的餘額。

``` solidity
function balanceOf(address _owner) public view returns (uint256 balance)
```


#### 函數: transfer

向 `_to` 地址轉移  `_value` 數量的代幣，函數必須觸發事件 `Transfer` 。

如果調用方的帳戶餘額沒有足夠的代幣，則該函數需要拋出異常。

*注意* 轉移0個代幣也是正常轉移動作，同樣需要觸發 `Transfer` 事件。

``` solidity
function transfer(address _to, uint256 _value) public returns (bool success)
```



#### 函數: transferFrom


從 `_from` 向 `_to` 地址轉移  `_value` 數量的代幣，函數必須觸發事件 `Transfer` 。

`transferFrom` 函數，可以允許第三方代表我們轉移代幣。

如果 `_from` 帳號沒有授權調用帳戶轉移代幣，則該函數需要拋出異常。

*注意* 轉移0個代幣也是正常轉移動作，同樣需要觸發 `Transfer` 事件。

``` solidity
function transferFrom(address _from, address _to, uint256 _value) public returns (bool success)
```



#### 函數: approve

授權 `_spender` 可以從我們帳戶最多轉移代幣的數量 `_value`，可以多次轉移，總量不超過 `_value` 。

這個函數可以再次調用，以覆蓋授權額度 `_value` 。

**注意**: 為了阻止向量攻擊，調用者可以在調整授權額度時，先設置為0，然後在設置為一個其他額度。
> 簡單描述下：向量攻擊， 假如 Alice 開始時給Bob授權了 N，現在 Alice 想調整為 M ，於是發起了一筆調整授權的交易，這時Bob觀察到了這筆交易， 迅速通過 transferFrom 交易（用更高的手續費，礦工優先打包）把 N 個幣轉移走，待 Alice 調整授權的交易打包後，Bob 又獲得了 M 個授權。 這就相當於Bob 獲得了 N + M個授權， 而不是 Alice 想要的 M個授權。

``` solidity
function approve(address _spender, uint256 _value) public returns (bool success)
```


#### 函數: allowance

查詢 `_owner` 授權給 `_spender` 的額度。

``` solidity
function allowance(address _owner, address _spender) public view returns (uint256 remaining)
```

### 事件Events

#### 事件：Transfer

當有代幣轉移時（包括轉移0），必須觸發 Transfer 事件。

如果是新產生代幣，觸發 Transfer 事件的 `_from` 應該設置為 `0x0`。

``` solidity
event Transfer(address indexed _from, address indexed _to, uint256 _value)
```

#### 事件：Approval

 `approve(address _spender, uint256 _value)` 函數成功執行時，必須觸發 Approval 事件。

``` solidity
event Approval(address indexed _owner, address indexed _spender, uint256 _value)
```

## 實現
在以太坊網絡上已經有大量符合 ERC20 的代幣。
各個團隊有不同的實現，有些注重安全性，有些關注使用更少的 gas。

### 實現示例
- [OpenZeppelin](https://github.com/OpenZeppelin/openzeppelin-solidity/blob/9b3710465583284b8c4c5d2245749246bb2e0094/contracts/token/ERC20/ERC20.sol)
- [ConsenSys 實現](https://github.com/ConsenSys/Tokens/blob/fdf687c69d998266a95f15216b1955a4965a0a6d/contracts/eip20/EIP20.sol)