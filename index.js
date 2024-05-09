import Freecurrencyapi from "@everapi/freecurrencyapi-js";
const freecurrencyapi = new Freecurrencyapi(
  "fca_live_d9kE1pc3VkWDqoSSzP6ng4AFDhcNlnmZCmGatB3l"
);

// convertCurrency: fromCurrency To toCurrency:
// This is very easy npm package to convert  from one currency to another currency:
//Enjoy the package: made by Sourabh Jaiswal :-

export async function convertCurrency(fromCurrency, toCurrency, units) {
  const res = await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency,
  });
  const multiplier = res.data[toCurrency];
  return multiplier * units;
}
