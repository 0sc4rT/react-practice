class CurrencyApi {
  public getSupportedCurrencies() {
    const method = 'GET';
    const url = 'http://www.apilayer.net/api/list?access_key=14a563f1dd171f8471b2f8b6a992c1b8'

    return new Promise((resolve, reject) => {
      const xmlhttp = new XMLHttpRequest();
      xmlhttp.open(method, url, true);
      xmlhttp.onload = () => {
        resolve(JSON.parse(xmlhttp.response));
      }
      xmlhttp.send(null);
    });
  }
}

export default CurrencyApi;