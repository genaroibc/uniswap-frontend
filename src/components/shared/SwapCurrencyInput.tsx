type Props = {
  value: string
  onChange: (value: string) => void
  getSwapPrice: (value: string) => void
  loading: boolean
}

export function SwapCurrencyInput({
  getSwapPrice,
  loading,
  onChange,
  value
}: Props) {
  return (
    <section>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold">Amount</label>
        <input
          className="w-full bg-slate-900 rounded-md px-4 py-2"
          type="number"
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder="0.00"
        />
      </div>

      <div className="flex justify-between items-center">
        <button
          className="text-sm font-semibold text-slate-500"
          onClick={() => onChange("")}
        >
          Max
        </button>
        <button
          className="px-4 py-2 bg-slate-500 rounded-md text-white font-semibold"
          onClick={() => getSwapPrice(value)}
        >
          {loading ? "Loading..." : "Get Price"}
        </button>
      </div>
    </section>
  )
}
