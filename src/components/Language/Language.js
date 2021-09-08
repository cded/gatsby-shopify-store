/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';
import './Language.css';

const languageName = {
  en: 'English',
  fr: 'Français',
};

const languageNameShort = {
  en: 'En',
  fr: 'Fr',
};

const languageNameLong = {
  en: 'Switch to English',
  fr: 'Passer au Français',
};

const Language = ({ display }) => (
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
                role="presentation"
              >
                {display === 'short'
                  ? languageNameShort[language]
                  : display === 'long'
                  ? languageNameLong[language]
                  : languageName[language]}
              </a>
            );
          }
        })
      }
    </IntlContextConsumer>
  </div>
);

export default Language;
