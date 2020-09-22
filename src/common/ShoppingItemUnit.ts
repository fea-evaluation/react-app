export enum ShoppingItemUnit {
  g = "g",
  kg = "kg",
  l = "l",
  ml = "ml",
  pcs = "pcs",
}

function toLabel(unit: ShoppingItemUnit) {
  switch (unit) {
    case ShoppingItemUnit.pcs:
      return "";
    default:
      return unit.toString();
  }
}

function fromLabel(label: string) {
  switch (label) {
    case "g":
      return ShoppingItemUnit.g;
    case "kg":
      return ShoppingItemUnit.kg;
    case "l":
      return ShoppingItemUnit.l;
    case "ml":
      return ShoppingItemUnit.ml;
    case "":
      return ShoppingItemUnit.pcs;
    default:
      return undefined;
  }
}

export const ShoppingItemUnitUtil = {
  fromLabel,
  toLabel,
};

export default ShoppingItemUnit;
