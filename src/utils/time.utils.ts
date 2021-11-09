import * as momentTz from 'moment-timezone';
import * as moment from 'moment';

export function isGreater(dateStart: Date) {
  return moment(dateStart).fromNow();
}

export function getFormatTimezone(tz: string, birtday: Date, name: string): number {
  const parseDate = new Date();
  let year = parseDate.getFullYear();
  let monthDate = birtday.toString().substring(5);
  const format = year + '-' + monthDate;
  const dynamicDateZone = momentTz
    .tz(`${format} 09:00`, 'YYYY-MM-DD HH:mm', tz)
    .format();
  const dateNow = moment();
  const result = dateNow.diff(dynamicDateZone, 'minutes');
  console.log(`${name} ${result} minute left to birthday greeting`);
  return result;
}
