import { ExchangeRatePipe } from "./exchange-rate.pipe";

describe('ExchangeRatePipe', () => {
    it('create an instance', () => {
        const pipe = new ExchangeRatePipe();
        expect(pipe).toBeTruthy();
    });

    it('should compute exchange rate', () => {
        const pipe = new ExchangeRatePipe();
        const expected = 4.00;
        const actual = pipe.transform('2.00', 2);
        expect(expected).toEqual(actual);
    });
});