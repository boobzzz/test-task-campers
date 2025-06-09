import { IntlProvider, FormattedNumber } from 'react-intl';

export default function FormatedPrice({ value }) {
    const formats = {
        number: {
            customCurrency: {
                style: 'currency',
                currency: 'EUR',
                maximumFractionDigits: 2,
                useGrouping: false
            }
        }
    };

    return (
        <IntlProvider locale="en" formats={formats}>
            <FormattedNumber value={value} format="customCurrency" />
        </IntlProvider>
    )
}
