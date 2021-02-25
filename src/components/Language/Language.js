import React from 'react';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';
import './Language.css';

const languageName = {
  en: 'English',
  fr: 'Français',
};

const Language = () => (
  <div>
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) =>
        languages.map((language) => {
          if (currentLocale !== language) {
            return (
              <a
                key={language}
                onClick={() => changeLocale(language)}
                className="language-selector"
              >
                {languageName[language]}
              </a>
            );
          }
        })
      }
    </IntlContextConsumer>
  </div>
);

export default Language;
