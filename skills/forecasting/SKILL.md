---
name: forecasting
description: "Forecast time series (sales, demand, traffic) with baselines, seasonality and uncertainty intervals. Use for planning."
---
# Forecasting

> Legion skill · category **Data Analysis & Visualisation**

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

## Works well with
Legion agents: `data-analyst`, `data-visualizer`, `analytics-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
