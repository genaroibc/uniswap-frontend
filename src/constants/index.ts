import { Token } from "@uniswap/sdk-core"

export const V3_SWAP_ROUTER_ADDRESS =
  "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45"
export const INFURA_URL_TESTNET = ""
export const ROPSTEN_CHAIN_ID = 3
export const name0 = "Wrapped Ether"
export const symbol0 = "WETH"
export const decimals0 = 18
export const address0 = "0xc778417E063141139Fce010982780140Aa0cD5Ab"

export const name1 = "Uniswap Token"
export const symbol1 = "UNI"
export const decimals1 = 18
export const address1 = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"

export const WETH = new Token(
  ROPSTEN_CHAIN_ID,
  address0,
  decimals0,
  symbol0,
  name0
)
export const UNI = new Token(
  ROPSTEN_CHAIN_ID,
  address1,
  decimals1,
  symbol1,
  name1
)
