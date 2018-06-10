import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import RootReducer from '../reducers/root_reducer';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
    // must use 'require' (import only allowed at top of file)
    const { logger } = require('redux-logger');
    middlewares.push(logger);
}

const configureStore = (preloadedState = preloaded) => (
    createStore(
        RootReducer,
        preloadedState,
        applyMiddleware(...middlewares)
    )
);

export default configureStore;

const preloaded = {
  "entities" : {
    "profile" : {
      "1" : {
        "id": "1",
        "company": "McDonalds",
        "employeeSize": "1000",
        "city": "San Francisco",
        "country": "USA",
        "salesVolume": "10000000",
        "item": "Power",
        "sustainableOptionName": "Solar",
        "sustainableOptionCostPerItem": "0",
        "sustainablePurchase": "10475",
        "cleaning": "0",
        "installation": "0",
        "kWhOfSystem": "4247",
        "costOfSystemPrerebate": "15875",
        "federalTaxCredit": "4763",
        "cleanCredits": "3000",
        "benefit": "637",
        //Add more variables for sustainable unit costs here:
        "sustainableOptionQuantity": "2000",
        "sustainableOptionUsesPerItemQuantity": "Infinity",
        "sustainableOptionSalesFactor": "1.1",
        "disposableOptionName": "Grid",
        "disposableOptionCostPerItem": "0",
        "disposablePurchase": "3000",
        "disposal": "0",
        "kWhCost": "0.15",
        //Add more variables for disposal unit costs here:
        "disposableOptionquantity": "2000",
        "disposableOptionusesPerItemQuantity": "1",
        "disposableOptionusesPerItemsalesFactor": "1.0"
      },
      "2": {
        "id": "2",
        "company": "McDonalds",
        "employeeSize": "1000",
        "city": "San Francisco",
        "country": "USA",
        "salesVolume": "10000000",
        "item": "Lighting",
        "sustainableOptionName": "LED",
        "sustainableOptionCostPerItem": "0",
        "sustainablePurchase": "1502.25",
        "cleaning": "0",
        "installation": "0",
        "kWhOfSystem": "4247",
        "costOfSystemPrerebate": "15875",
        "federalTaxCredit": "4763",
        "cleanCredits": "3000",
        "benefit": "637",
        //Add more variables for sustainable unit costs here:
        "sustainableOptionQuantity": "100",
        "sustainableOptionUsesPerItemQuantity": "Infinity",
        "sustainableOptionSalesFactor": "1.1",
        "disposableOptionName": "Incandescent",
        "disposableOptionCostPerItem": "0",
        "disposablePurchase": "2812.50",
        "disposal": "0",
        "kWhCost": "0.15",
        //Add more variables for disposal unit costs here:
        "disposableOptionquantity": "100",
        "disposableOptionusesPerItemQuantity": "1",
        "disposableOptionusesPerItemsalesFactor": "1.0"
      },
      "3": {
        "id": "3",
        "company": "McDonalds",
        "employeeSize": "1000",
        "city": "San Francisco",
        "country": "USA",
        "salesVolume": "10000000",
        "item": "Toilet",
        "sustainableOptionName": "Low-Flow",
        "sustainableOptionCostPerItem": "0",
        "sustainablePurchase": "1502.25",
        "cleaning": "0",
        "installation": "0",
        "kWhOfSystem": "4247",
        "costOfSystemPrerebate": "15875",
        "federalTaxCredit": "4763",
        "cleanCredits": "3000",
        "benefit": "637",
        //Add more variables for sustainable unit costs here:
        "sustainableOptionQuantity": "100",
        "sustainableOptionUsesPerItemQuantity": "Infinity",
        "sustainableOptionSalesFactor": "1.1",
        "disposableOptionName": "Old-Style",
        "disposableOptionCostPerItem": "0",
        "disposablePurchase": "2812.50",
        "disposal": "0",
        "kWhCost": "0.15",
        //Add more variables for disposal unit costs here:
        "disposableOptionquantity": "100",
        "disposableOptionusesPerItemQuantity": "1",
        "disposableOptionusesPerItemsalesFactor": "1.0"
      },
      "4": {
        "id": "4",
        "company": "McDonalds",
        "employeeSize": "1000",
        "city": "San Francisco",
        "country": "USA",
        "salesVolume": "10000000",
        "item": "Faucet",
        "sustainableOptionName": "Low-Flow",
        "sustainableOptionCostPerItem": "0",
        "sustainablePurchase": "1502.25",
        "cleaning": "0",
        "installation": "0",
        "kWhOfSystem": "4247",
        "costOfSystemPrerebate": "15875",
        "federalTaxCredit": "4763",
        "cleanCredits": "3000",
        "benefit": "637",
        //Add more variables for sustainable unit costs here:
        "sustainableOptionQuantity": "100",
        "sustainableOptionUsesPerItemQuantity": "Infinity",
        "sustainableOptionSalesFactor": "1.1",
        "disposableOptionName": "Old-Style",
        "disposableOptionCostPerItem": "0",
        "disposablePurchase": "2812.50",
        "disposal": "0",
        "kWhCost": "0.15",
        //Add more variables for disposal unit costs here:
        "disposableOptionquantity": "100",
        "disposableOptionusesPerItemQuantity": "1",
        "disposableOptionusesPerItemsalesFactor": "1.0"
      },
      "5": {
        "id": "5",
        "company": "McDonalds",
        "employeeSize": "1000",
        "city": "San Francisco",
        "country": "USA",
        "salesVolume": "10000000",
        "item": "Silverware",
        "sustainableOptionName": "Metal",
        "sustainableOptionCostPerItem": "0",
        "sustainablePurchase": "1502.25",
        "cleaning": "0",
        "installation": "0",
        "kWhOfSystem": "4247",
        "costOfSystemPrerebate": "15875",
        "federalTaxCredit": "4763",
        "cleanCredits": "3000",
        "benefit": "637",
        //Add more variables for sustainable unit costs here:
        "sustainableOptionQuantity": "100",
        "sustainableOptionUsesPerItemQuantity": "Infinity",
        "sustainableOptionSalesFactor": "1.1",
        "disposableOptionName": "Plastic",
        "disposableOptionCostPerItem": "0",
        "disposablePurchase": "2812.50",
        "disposal": "0",
        "kWhCost": "0.15",
        //Add more variables for disposal unit costs here:
        "disposableOptionquantity": "100",
        "disposableOptionusesPerItemQuantity": "1",
        "disposableOptionusesPerItemsalesFactor": "1.0"
      }
    }
  }
};
