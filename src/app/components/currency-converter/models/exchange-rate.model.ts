export class ExchangeRate {

    private _fromCurrencyCode: string;
    private _fromCurrencyName: string;
    private _toCurrencyCode: string;
    private _toCurrencyName: string;
    private _exchangeRate: string;
    private _lastRefreshed: string;
    private _timeZone: string;
    private _bidPrice: string;
    private _askPrice: string;

    constructor(private fromCurrencyCode: string, private fromCurrencyName: string,
        private toCurrencyCode: string, private toCurrencyName: string,
        private exchangeRate: string, private lastRefreshed: string,
        private timeZone: string, private bidPrice: string, private askPrice: string) {
        
        this._fromCurrencyCode = this.fromCurrencyCode;
        this._fromCurrencyName = this.fromCurrencyName;
        this._toCurrencyCode = this.toCurrencyCode;
        this._toCurrencyName = this.toCurrencyName;
        this._exchangeRate = this.exchangeRate;
        this._lastRefreshed = this.lastRefreshed;
        this._timeZone = this.timeZone;
        this._bidPrice = this.bidPrice;
        this._askPrice = this.askPrice;
    }

    public getFromCurrencyCode(): string {
        return this._fromCurrencyCode;
    }

    public getFromCurrencyName(): string {
        return this._fromCurrencyName;
    }

    public getToCurrencyCode(): string {
        return this._toCurrencyCode;
    }

    public getToCurrencyName(): string {
        return this._toCurrencyName;
    }

    public getExchangeRate(): string {
        return this._exchangeRate;
    }

    public getLastRefreshed(): string {
        return this._lastRefreshed;
    }

    public getTimeZone(): string {
        return this._timeZone;
    }

    public getBidPrice(): string {
        return this._bidPrice;
    }

    public getAskPrice(): string {
        return this._askPrice;
    }
}