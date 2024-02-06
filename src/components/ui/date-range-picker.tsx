import { differenceInCalendarDays, format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import * as React from 'react'
import { DateRange } from 'react-day-picker'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

interface RangeDatePickerProps extends React.ComponentProps<'div'> {
  date: DateRange | undefined
  onDateChange: (date: DateRange | undefined) => void
}

export function RangeDatePicker({
  className,
  date,
  onDateChange,
}: RangeDatePickerProps) {
  const handleDateChange = (range: DateRange | undefined) => {
    if (range?.from && range.to) {
      const daysDifference = differenceInCalendarDays(range.to, range.from)
      if (daysDifference > 7) {
        // If the selected range exceeds 7 days, adjust the end date to limit the range to 7 days
        const adjustedEndDate = new Date(range.from)
        adjustedEndDate.setDate(adjustedEndDate.getDate() + 7)
        onDateChange({ from: range.from, to: adjustedEndDate })
      } else {
        onDateChange(range)
      }
    } else {
      onDateChange(range)
    }
  }

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={'outline'}
            className={cn(
              'w-[300px] justify-start text-left font-normal',
              !date && 'text-muted-foreground',
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'LLL dd, y')} -{' '}
                  {format(date.to, 'LLL dd, y')}
                </>
              ) : (
                format(date.from, 'LLL dd, y')
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleDateChange}
            numberOfMonths={2}
          />
          <span className="flex w-full justify-end pb-3 pr-3">
            *maximum range of 1 week
          </span>
        </PopoverContent>
      </Popover>
    </div>
  )
}
