# Forecasting

> Legion procedure `forecasting` · pack **Data Analysis & Visualisation** (`legion-data-analysis`)

## When to use
Forecast time series (sales, demand, traffic) with baselines, seasonality and uncertainty intervals. Use for planning.

## Procedure
1. Plot the series and inspect trend and seasonality.
2. Build a naive baseline.
3. Fit models (ETS, Prophet, ARIMA, gradient boosting).
4. Backtest on holdout periods.
5. Report forecasts with intervals.

## Quality checklist
- [ ] Beats baseline in backtest
- [ ] intervals shown

## Output
Forecast with method and accuracy.
