import { ethers } from "ethers"
import { getWethContract } from "./AlphaRouterService"
import { V3_SWAP_ROUTER_ADDRESS } from "../constants"

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function executeSwap({ signer, transaction }) {
  const approvalAmount = ethers.utils.parseEther("0.1").toString()

  const wethContract = getWethContract()

  await wethContract
    .connect(signer)
    .approve(V3_SWAP_ROUTER_ADDRESS, approvalAmount)

  signer.sendTransaction(transaction)
}
