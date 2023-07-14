type Props = {
  handleConnectWallet: () => void
  signerAddress: string
  isConnected: boolean
}

export function ConnectWalletButton({
  handleConnectWallet,
  isConnected,
  signerAddress
}: Props) {
  const displayAddress = `${signerAddress?.slice(0, 6)}...${signerAddress.slice(
    -4
  )}`

  return isConnected ? (
    <button className="py-2 px-4 rounded-md">{displayAddress}</button>
  ) : (
    <button onClick={handleConnectWallet} className="py-2 px-4 rounded-md">
      Connect Wallet
    </button>
  )
}
