// قائمة العملات ثابتة
const currencies = [
  "ILS","USD","EUR","GBP","JOD","EGP","SAR","AED","QAR",
  "KWD","TRY","CAD","AUD","JPY","CNY","CHF","SEK","NOK",
  "DKK","INR","RUB","BRL","ZAR","MXN","KRW"
];

const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const resultDiv = document.getElementById("result");

// تعبئة القوائم فوراً
currencies.forEach(cur => {
  fromSelect.innerHTML += `<option value="${cur}">${cur}</option>`;
  toSelect.innerHTML += `<option value="${cur}">${cur}</option>`;
});

fromSelect.value = "ILS";
toSelect.value = "USD";

// دالة التحويل
function convert() {
  const amount = document.getElementById("amount").value;
  const from = fromSelect.value;
  const to = toSelect.value;

  if (!amount) {
    resultDiv.innerText = "أدخل المبلغ أولاً";
    return;
  }

  if (from === to) {
    resultDiv.innerText = `${amount} ${from} = ${amount} ${to}`;
    return;
  }

  // استخدام API فقط للنتيجة، القوائم جاهزة
  fetch(`https://open.er-api.com/v6/latest/${from}`)
    .then(res => res.json())
    .then(data => {
      const rate = data.rates[to];
      const converted = (amount * rate).toFixed(2);
      resultDiv.innerText = `${amount} ${from} = ${converted} ${to}`;
    })
    .catch(() => {
      resultDiv.innerText = "تعذر جلب سعر الصرف (تحقق من الإنترنت)";
    });
}