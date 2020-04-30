interface MoneyProps {
  cents: number
  className?: string
}

export function formatMoney(cents: number): string {
  const dollars = cents / 100
  if (dollars % 1 > 0) {
    return `$${dollars.toFixed(2)}`
  } else {
    return `$${dollars}`
  }
}

export function Money({ cents, className }: MoneyProps) {
  return <span className={className}>{formatMoney(cents)}</span>
}
