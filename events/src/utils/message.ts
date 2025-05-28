export function valueMsg(value: number, estate: string) {
  return estate === "RJ" && value > 300.0
    ? "Valor muito alto"
    : estate === "SP" && value > 500.0
    ? "Valor muito alto"
    : "";
}
