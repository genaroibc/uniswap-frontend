type Props = {
  handleCloseModal: () => void
  onSlippageChange: (value: number) => void
  onDeadlineChange: (value: number) => void
  slippage: number
  deadline: number
}

export function SwapConfig({
  deadline,
  handleCloseModal,
  onDeadlineChange,
  onSlippageChange,
  slippage
}: Props) {
  return (
    <section>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Swap</h2>
        <button onClick={handleCloseModal}>
          <svg
            className="w-6 h-6 text-slate-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Slippage tolerance</label>
          <input
            className="w-full bg-slate-900 rounded-md px-4 py-2"
            type="number"
            value={slippage}
            onChange={e => onSlippageChange(Number(e.target.value))}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Deadline</label>
          <input
            className="w-full bg-slate-900 rounded-md px-4 py-2"
            type="number"
            value={deadline}
            onChange={e => onDeadlineChange(Number(e.target.value))}
          />{" "}
        </div>
      </div>
    </section>
  )
}
