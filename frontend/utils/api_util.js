export const createProfile = (profile = data) => {
  // console.log(profile);
  return fetch('https://ibm-watson-ml.mybluemix.net/v3/wml_instances/c19e38ae-5b23-4cbf-92f5-5183232a333b/published_models/92ae2dbf-98eb-4b2a-8cb3-0d57e625b6f8/deployments/974e895f-a6c6-4914-b4a2-153b584c8718/online', {
    method: 'POST',
    body: JSON.stringify(profile),
    headers: { "Authorization": "Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRJZCI6ImMxOWUzOGFlLTViMjMtNGNiZi05MmY1LTUxODMyMzJhMzMzYiIsImluc3RhbmNlSWQiOiJjMTllMzhhZS01YjIzLTRjYmYtOTJmNS01MTgzMjMyYTMzM2IiLCJwbGFuSWQiOiIzZjZhY2Y0My1lZGU4LTQxM2EtYWM2OS1mOGFmM2JiMGNiZmUiLCJyZWdpb24iOiJ1cy1zb3V0aCIsInVzZXJJZCI6Ijg2MmE3Njg4LWQ1YjgtNDE2OS04NDhkLTU5ZTM5ZDI5OTc1ZCIsImlzcyI6Imh0dHBzOi8vaWJtLXdhdHNvbi1tbC5teWJsdWVtaXgubmV0L3YzL2lkZW50aXR5IiwiaWF0IjoxNTI4NjQ1NjgzLCJleHAiOjE1Mjg2NzQ0ODN9.fA0WIDlXJB9-YlfuQ6_n_tv7gnba6r-BclJkgC7sclGuCdPHhBIzI_7zyiOBs7lzpP5hjE9nPKlUJmX02-A3G5l52ESURRxYHlYca_NE814rG3JLnPNwwJ8fz8ojjrN18UeUtYAxOckfOvnmAkZ60LADHaphbPdcDhOZb2OgRXluySuXxqcz9TczNAKRFLOZ6bVit9bFll6dZoWoHLc3NgnJz2dLInGtWorfzjXYmxoyjd_SJTOS-h9KpfYukpQn7Yg9GpWftPafw_br3eboXermZo6i3SzbpD3LZ18I026q-hsql92Pebjqov5gnvo_6C3IKvZ1H3mjYoVJslK07Q",
    "Content-Type": "application/json",
    "Accept": "application/json" }
  });
};

export const fetchProfile = id => (
  $.ajax({
    method: 'GET',
    url: '',
    data: id
  })
);

export const fetchAllProfiles = () => (
  $.ajax({
    method: 'GET',
    url: '',
  })
);

const data = {"body": {
  "fields": [
    "company",
    "employeeSize",
    "country",
    "city",
    "salesVolume",
    "item",
    "sustainableOptionName",
    "sustainableOptionCostPerItem",
    "sustainablePurchase",
    "cleaning",
    "installation",
    "kWhOfSystem",
    "costOfSystemPrerebate",
    "federalTaxCredit",
    "cleanCredits",
    "Benefit",
    "kWhCost",
    "sustainableOptionQuantity",
    "sustainableOptionUsesPerItemQuantity",
    "sustainableOptionSalesFactor",
    "disposableOptionName",
    "disposableOptionCostPerItem",
    "disposablePurchase",
    "disposableOptionquantity",
    "disposableOptionusesPerItemQuantity",
    "disposableOptionusesPerItemsalesFactor"
  ],
  "values": [
    [
      "Genentech",
      1120.210238707584,
      "USA",
      "LAX",
      4885431.746806665,
      "Lighting",
      "",
      73.4869924685343,
      4735.65555842196,
      94.99368403536018,
      17.377988751666294,
      86.50342807157494,
      45.066437444330695,
      3.6807704810932096,
      72.36746376867596,
      40.098004599512606,
      42.23213940783263,
      90.82730416140319,
      38.97142150864534,
      0.46915888492687174,
      "",
      32.22623783702052,
      43.21095534249124,
      "0",
      58.523769781183944,
      0.061432983622211834
    ]
  ]
  }
};
