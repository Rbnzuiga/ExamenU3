if (typeof Intl === "undefined") {
  require("intl");
  require("intl/locale-data/jsonp/en");
}

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

export default formatter;
