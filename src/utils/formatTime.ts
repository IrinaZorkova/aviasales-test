import { addMinutes, format } from 'date-fns'

export const convertMinutesToHoursMinutes = (minutes: number) => {
  const hours = Math.floor(minutes / 60)
  const _minutes = minutes % 60

  return `${hours}ч ${_minutes}м`
}

export const getFormattedFlyDuration = (start: string, duration: number) => {
  const startDate = new Date(start)
  const endDate = addMinutes(startDate, duration)

  return `${format(startDate, 'HH:mm')} - ${format(endDate, 'HH:mm')}`
}
