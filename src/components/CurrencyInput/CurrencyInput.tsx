import { useState } from "react";
import { formatToBRL } from "../../utils/formatToBRL";

export function CurrencyInput({
  onChangeRaw,
  valueRaw,
}: {
  onChangeRaw: (cents: number) => void;
  valueRaw: number;
}) {
  const [displayValue, setDisplayValue] = useState(() => formatToBRL(valueRaw));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    const cents = parseInt(onlyDigits || "0", 10);
    onChangeRaw(cents);
    setDisplayValue(formatToBRL(cents));
  };

  return (
    <input
      id="value"
      type="text"
      value={displayValue}
      onChange={handleChange}
      placeholder="R$ 0,00"
    />
  );
}
