import * as _ from 'lodash';
import * as React from 'react';
import CurrencyApi from '../../apis/CurrencyApi';
import './CurrencyConverter.css';

interface Options {
  key: string;
  value: string;
}

interface Props {}

interface State {
  amount: string;
  currencies: Options[];
  from: string;    
  result: string;
  to: string;
}

class CurrencyConverter extends React.Component<Props, State> {
  private service: CurrencyApi;

  constructor(props: Props) {
    super(props);

    this.state = {
      amount: '',
      currencies: [],
      from: '',
      result: '',
      to: ''
    }
    this.service = new CurrencyApi();

    this.onSelectFrom = this.onSelectFrom.bind(this);
    this.onSelectTo = this.onSelectTo.bind(this);
    this.onClickConvert = this.onClickConvert.bind(this);
  }

  public componentDidMount() {
    const currencies: any = [];

    this.service.getSupportedCurrencies().then((response: any) => {
      _.transform(_.get(response, 'currencies'), 
        (result, value, key) => {
          result.push({
            key: key,
            value: key + ' - ' + value
          });
        },
        currencies);

      this.setState({
        currencies: currencies,
        from: (_.find(currencies, { 'key': 'BOB'}) as Options).key,
        to: (_.find(currencies, { 'key': 'USD'}) as Options).key,
      });
    });
  }

  public render() {
    if (_.isEmpty(this.state.currencies)) {
      return null;
    }
    
    return (
      <div>
        <input type="text" name="amount" />
        <select value={this.state.from} onChange={this.onSelectFrom}>
          {
            this.state.currencies.map((c) => <option key={c.key} value={c.key} >{c.value}</option>)
          }
        </select>
        <select value={this.state.to} onChange={this.onSelectTo}>
          {
            this.state.currencies.map((c) => <option key={c.key} value={c.key} >{c.value}</option>)
          }
        </select>
        <button onClick={this.onClickConvert}>
          =>
        </button>
      </div>
    )
  }

  public onSelectFrom(event: any) {
    this.setState({
      from: event.target.value
    });
  }

  public onSelectTo(event: any) {
    this.setState({
      to: event.target.value
    });
  }

  public onClickConvert(event: any) {
    console.log(event);
  }
}

export default CurrencyConverter;
