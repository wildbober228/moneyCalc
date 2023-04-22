import React, {useEffect, useMemo} from 'react';
import {fx} from 'money'
const ExchangeRate = () => {

    function initExchange() { //todo делать запрос онлайн
        fx.base = "USD";
        fx.rates = {
            "EUR" : 0.745101, // eg. 1 USD === 0.745101 EUR
            "GBP" : 0.647710, // etc...
            "HKD" : 7.781919,
            "USD" : 1,        // always include the base rate (1:1)
            /* etc */
        }
    }

    function showRates() {
        fx.settings = { from: "USD", to: "GBP" };
        return fx.convert(1000); // 647.71034
    }

    useMemo(() => {
        initExchange();
    }, [])

    return (
        <div>
            {showRates()}
        </div>
    );
};

export default ExchangeRate;
