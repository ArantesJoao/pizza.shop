import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '01/01/2024', receipt: 2134 },
    { date: '02/01/2024', receipt: 574 },
    { date: '03/01/2024', receipt: 457 },
    { date: '04/01/2024', receipt: 3463 },
    { date: '05/01/2024', receipt: 5784 },
    { date: '06/01/2024', receipt: 4345 },
    { date: '07/01/2024', receipt: 5345 },
  ])
})
