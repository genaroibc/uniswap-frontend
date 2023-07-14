import { TradeType, Percent, CurrencyAmount } from "@uniswap/sdk-core"
import { AlphaRouter } from "@uniswap/smart-order-router"
import { BigNumber, ethers } from "ethers"
import JSBI from "jsbi"
import ERC20ABI from "../abi/ERC20.json"
import {
  INFURA_URL_TESTNET,
  ROPSTEN_CHAIN_ID,
  UNI,
  V3_SWAP_ROUTER_ADDRESS,
  WETH,
  address0,
  address1,
  decimals0
} from "../constants"

const web3Provider = new ethers.providers.JsonRpcProvider(INFURA_URL_TESTNET)
const router = new AlphaRouter({
  chainId: ROPSTEN_CHAIN_ID,
  provider: web3Provider
})

export function getWethContract() {
  return new ethers.Contract(address0, ERC20ABI, web3Provider)
}

export function getUniContract() {
  return new ethers.Contract(address1, ERC20ABI, web3Provider)
}

type Params = {
  inputAmount: string
  slippage: number
  address: string
  deadline: number
}

export async function getPrice({
  inputAmount,
  slippage,
  address,
  deadline
}: Params) {
  const percentSlippage = new Percent(slippage, 100)
  const wei = ethers.utils.parseUnits(inputAmount, decimals0)
  const currencyAmount = CurrencyAmount.fromRawAmount(WETH, JSBI.BigInt(wei))

  const route = await router.route(currencyAmount, UNI, TradeType.EXACT_INPUT, {
    recipient: address,
    slippageTolerance: percentSlippage,
    deadline
  })

  const tx: Partial<ethers.Transaction> = {
    data: route?.methodParameters?.calldata ?? "",
    to: V3_SWAP_ROUTER_ADDRESS,
    value: BigNumber.from(route?.methodParameters?.value),
    from: address,
    gasPrice: BigNumber.from(route?.gasPriceWei),
    gasLimit: BigNumber.from("100000000000000000")
  }

  const quoteAmountOut = Number(route?.quote.toFixed(6))
  const ratio = (quoteAmountOut / Number(inputAmount)).toFixed(3)

  return { tx, quoteAmountOut, ratio }
}
