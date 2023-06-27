const convertButton = document.querySelector(".convert-button");
const currencySelectFrom = document.getElementById("currency-select-from");
const currencySelect = document.querySelector(".currency-select");

async function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  ); // valor em real
  const currencyValueConverted = document.querySelector(".currency-value"); // outras moedas

  const data = await fetch(
    "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"
  ).then((response) => response.json());

  //const libra = await fetch('url da api').then(response => response.json())

  //console.log(data);
  const dolarToday = data.USDBRL.high;
  const euroToday = data.EURBRL.high;
  const bitcoinToday = data.BTCBRL.high;
  const libraToday = 6.13;
  const bitcoinToRealRate = data.BTCBRL.high;

  if (currencySelectFrom.value === "real" && currencySelect.value === "real") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue);
  }

  if (currencySelectFrom.value === "dolar" && currencySelect.value === "real") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue);

    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue * dolarToday);
  }

  if (currencySelectFrom.value === "dolar" && currencySelect.value === "euro") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue);

    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue * euroToday);
  }

  if (
    currencySelectFrom.value === "dolar" &&
    currencySelect.value === "libra"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue);

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue * libraToday);
  }

  if (
    currencySelectFrom.value === "dolar" &&
    currencySelect.value === "bitcoin"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue);

    const bitcoinValue = inputCurrencyValue / bitcoinToday;
    const satoshiValue = bitcoinValue * 100000000;

    const formattedSatoshiValue = new Intl.NumberFormat("en-GB", {
      style: "decimal",
      maximumFractionDigits: 0,
    }).format(satoshiValue);

    currencyValueConverted.innerHTML = `₿ ${formattedSatoshiValue}`;
  }

  if (currencySelectFrom.value === "real" && currencySelect.value === "dolar") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue);

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelectFrom.value === "real" && currencySelect.value === "euro") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue);

    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }

  if (currencySelectFrom.value === "real" && currencySelect.value === "libra") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue);

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToday);
  }

  if (
    currencySelectFrom.value === "real" &&
    currencySelect.value === "bitcoin"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue);

    const bitcoinValue = inputCurrencyValue / bitcoinToday;
    const satoshiValue = bitcoinValue * 100000000;

    const formattedSatoshiValue = new Intl.NumberFormat("en-GB", {
      style: "decimal",
      maximumFractionDigits: 0,
    }).format(satoshiValue);

    currencyValueConverted.innerHTML = `₿ ${formattedSatoshiValue}`;
  }

  if (currencySelectFrom.value === "euro" && currencySelect.value === "real") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue);

    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue * euroToday);
  }

  if (currencySelectFrom.value === "euro" && currencySelect.value === "dolar") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue);

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format((inputCurrencyValue * euroToday) / dolarToday);
  }

  if (currencySelectFrom.value === "euro" && currencySelect.value === "libra") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue);

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format((inputCurrencyValue * euroToday) / libraToday);
  }

  if (
    currencySelectFrom.value === "euro" &&
    currencySelect.value === "bitcoin"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue);

    const bitcoinValue = (inputCurrencyValue * euroToday) / bitcoinToday;
    const satoshiValue = bitcoinValue * 100000000;

    const formattedSatoshiValue = new Intl.NumberFormat("en-GB", {
      style: "decimal",
      maximumFractionDigits: 0,
    }).format(satoshiValue);

    currencyValueConverted.innerHTML = `₿ ${formattedSatoshiValue}`;
  }

  if (currencySelectFrom.value === "libra" && currencySelect.value === "real") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue);

    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue * libraToday);
  }

  if (
    currencySelectFrom.value === "libra" &&
    currencySelect.value === "dolar"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue);

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format((inputCurrencyValue * libraToday) / dolarToday);
  }

  if (currencySelectFrom.value === "libra" && currencySelect.value === "euro") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue);

    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format((inputCurrencyValue * libraToday) / euroToday);
  }

  if (
    currencySelectFrom.value === "libra" &&
    currencySelect.value === "bitcoin"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue);

    const bitcoinValue = (inputCurrencyValue * libraToday) / bitcoinToday;
    const satoshiValue = bitcoinValue * 100000000;

    const formattedSatoshiValue = new Intl.NumberFormat("en-GB", {
      style: "decimal",
      maximumFractionDigits: 0,
    }).format(satoshiValue);

    currencyValueConverted.innerHTML = `₿ ${formattedSatoshiValue}`;
  }

  if (currencySelectFrom.value === "bitcoin" && currencySelect.value === "real") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "decimal",
      maximumFractionDigits: 8,
    }).format(inputCurrencyValue);
  
    const bitcoinValue = inputCurrencyValue / 100000000; // Converter de satoshis para BTC
    const realValue = bitcoinValue * bitcoinToRealRate;
  
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(realValue);
  }
  

  if (
    currencySelectFrom.value === "bitcoin" &&
    currencySelect.value === "dolar"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "decimal",
      maximumFractionDigits: 8,
    }).format(inputCurrencyValue);

    const bitcoinValue = inputCurrencyValue * bitcoinToday;
    const dollarValue = bitcoinValue * dolarToday;

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(dollarValue);
  }

  if (
    currencySelectFrom.value === "bitcoin" &&
    currencySelect.value === "euro"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "decimal",
      maximumFractionDigits: 8,
    }).format(inputCurrencyValue);

    const bitcoinValue = inputCurrencyValue * bitcoinToday;
    const euroValue = bitcoinValue * euroToday;

    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(euroValue);
  }

  if (
    currencySelectFrom.value === "bitcoin" &&
    currencySelect.value === "libra"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "decimal",
      maximumFractionDigits: 8,
    }).format(inputCurrencyValue);

    const bitcoinValue = inputCurrencyValue * bitcoinToday;
    const poundValue = bitcoinValue * libraToday;

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(poundValue);
  }
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImage = document.querySelector(".currency-img");

  if (currencySelect.value == "real") {
    currencyName.innerHTML = "Real Brasileiro";
    currencyImage.src = "./assets/real.png";
  }

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar americano";
    currencyImage.src = "./assets/dolar.png";
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "./assets/euro.png";
  }

  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra";
    currencyImage.src = "./assets/libra.png";
  }

  if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "BitCoin";
    currencyImage.src = "./assets/bitcoin.png";
  }

  convertValues();
}

function changeCurrency1() {
  const realText = document.getElementById("real-text");
  const image = document.getElementById("image");

  if (currencySelectFrom.value == "real") {
    realText.innerHTML = "Real Brasileiro";
    image.src = "./assets/real.png";
  }

  if (currencySelectFrom.value == "dolar") {
    realText.innerHTML = "Dólar americano";
    image.src = "./assets/dolar.png";
  }

  if (currencySelectFrom.value == "euro") {
    realText.innerHTML = "Euro";
    image.src = "./assets/euro.png";
  }

  if (currencySelectFrom.value == "libra") {
    realText.innerHTML = "Libra";
    image.src = "./assets/libra.png";
  }

  if (currencySelectFrom.value == "bitcoin") {
    realText.innerHTML = "BitCoin";
    image.src = "./assets/bitcoin.png";
  }

  if (currencySelectFrom.value == "bitcoin") {
    realText.innerHTML = "BitCoin";
    image.src = "./assets/bitcoin.png";
  }

  convertValues();
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
currencySelectFrom.addEventListener("change", changeCurrency1);
