import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Resonate from './resonate/index';
import ResonateRecords from './resonate/records';
import TVidIndex from './tvid/index';
import TVidHome from './tvid/home';
import TVidIco from './tvid/ico';
import TVidDetail from './tvid/detail';
import TVidCreate from './tvid/create';
import './tvid/index.less';

import intl from 'react-intl-universal';
import zh from './locales/zh';
import en from './locales/en';

console.log(zh);

function Index() {
  return <h2>Home</h2>;
}

const locales = {
  en,
  zh,
};

class App extends Component {

  state = {
    initDone: false,
  };

  componentDidMount() {
    this.loadLocales();
  }

  loadLocales() {
    const urlLang = window.location.href.indexOf('lang=en') > -1 ?
        'en' : window.location.href.indexOf('lang=zh') > -1 ? 'zh' : '';

    const storageLang = localStorage.getItem('lang');

    const lang = urlLang || storageLang || 'en';

    localStorage.setItem('lang', lang);
    // init method will load CLDR locale data according to currentLocale
    // react-intl-universal is singleton, so you should init it only once in your app
    intl
        .init({
          currentLocale: lang,
          locales: locales
        })
        .then(() => {
          // After loading CLDR locale data, start to render
          this.setState({ initDone: true });
        });
  }

  render() {
    if (!this.state.initDone) return null;

    return (
        <Router>
          <div>
            <Route path="/" exact component={Index} />
            <Route path="/resonate" component={Resonate} />
            <Route path="/resonate_records" component={ResonateRecords} />
            <Route path="/t_vid_index" component={TVidIndex} />
            <Route path="/t_vid_home" component={TVidHome} />
            <Route path="/t_vid_ico" component={TVidIco} />
            <Route path="/t_vid_detail" component={TVidDetail} />
            <Route path="/t_vid_create" component={TVidCreate} />
          </div>
        </Router>
    );
  }
}

export default App;
