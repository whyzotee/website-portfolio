import "@/styles/globals.css";
import { useState } from "react";
import { IntlProvider } from "react-intl";
import type { AppProps } from "next/app";

import English from "../../lang/en-US.json";
import Thailand from "../../lang/th-TH.json";

type LocaleMessages = {
  [locale: string]: Record<string, string>;
};

export default function App({ Component, pageProps }: AppProps) {
  const [selectedLocale, setSelectedLocale] = useState<string>("en-US");
  const messages: LocaleMessages = {
    "en-US": English,
    "th-TH": Thailand,
  };

  const handleLocaleChange = (newLocale: string) => {
    setSelectedLocale(newLocale);
  };

  return (
    <IntlProvider
      locale={selectedLocale}
      messages={messages[selectedLocale]}
      onError={(e) => console.log(e)}
    >
      <Component
        {...pageProps}
        onLocaleChange={handleLocaleChange}
        currentLocale={selectedLocale}
      />
    </IntlProvider>
  );
}
