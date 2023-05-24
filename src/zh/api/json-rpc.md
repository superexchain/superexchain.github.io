# JSON-RPC

## 查询最新区块编号

### 请求

参数：

无
### 示例

```bash
curl -X POST {RPC_URL} -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'
```

### 响应

```json
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": "0x4b7"
}
```

## 查询账户余额

### 请求
参数

- DATA - 20 字节，要检查余额的地址
- QUANTITY|TAG - 整数块编号，或者字符串"latest", "earliest" 或 "pending"

### 示例

```bash
curl -X POST {RPC_URL} -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_getBalance","params":["0x407d73d8a49eeb85d32cf465507dd71d507100c1", "latest"],"id":1}'
```

### 响应

```json
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0x0234c8a3397aab58"
}
```

## 查询交易
参数

- DATA, 32 字节 - 交易哈希

### 示例

```bash
curl -X POST {RPC_URL} -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_getTransactionByHash","params":["0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238"],"id":1}'
```

### 响应

```json
{
"id":1,
"jsonrpc":"2.0",
"result": {
    "hash":"0xc6ef2fc5426d6ad6fd9e2a26abeab0aa2411b7ab17f30a99d3cb96aed1d1055b",
    "nonce":"0x",
    "blockHash": "0xbeab0aa2411b7ab17f30a99d3cb9c6ef2fc5426d6ad6fd9e2a26a6aed1d1055b",
    "blockNumber": "0x15df",
    "transactionIndex":  "0x1",
    "from":"0x407d73d8a49eeb85d32cf465507dd71d507100c1",
    "to":"0x85h43d8a49eeb85d32cf465507dd71d507100c1",
    "value":"0x7f110",
    "gas": "0x7f110",
    "gasPrice":"0x09184e72a000",
    "input":"0x603880600c6000396000f300603880600c6000396000f3603880600c6000396000f360",
  }
}
```

## 查询交易收据
参数

- DATA, 32 字节 - 交易哈希

### 示例

```bash
curl -X POST {RPC_URL} -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_getTransactionReceipt","params":["0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238"],"id":1}'
```

### 响应

```json
{
"id":1,
"jsonrpc":"2.0",
"result": {
     "transactionHash": "0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238",
     "transactionIndex":  "x1",
     "blockNumber": "0xb",
     "blockHash": "0xc6ef2fc5426d6ad6fd9e2a26abeab0aa2411b7ab17f30a99d3cb96aed1d1055b",
     "cumulativeGasUsed": "0x33bc",
     "gasUsed": "0x4dc",
     "contractAddress": "0xb60e8dd61c5d32be8058bb8eb970870f07233155", 
     "logs": [{
      ...
     }, ...],
     "logsBloom": "0x00...0",
     "status": "0x1"
  }
}
```