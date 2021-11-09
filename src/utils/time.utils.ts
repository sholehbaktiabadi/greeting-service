import * as momentTz from 'moment-timezone';
import * as moment from 'moment';

export function isGreater(dateStart: Date) {
  return moment(dateStart).fromNow();
}

export function getFormatTimezone(tz: string): number {
  const parseDate = new Date();
  let year = parseDate.getFullYear();
  let month = parseDate.getMonth();
  let date = parseDate.getDate();
  const format = year + '-' + ++month + '-' + date;
  const dynamicDateZone = momentTz
    .tz(`${format} 09:00`, 'YYYY-MM-DD HH:mm', tz)
    .format();
  const dateNow = moment();
  const result = dateNow.diff(dynamicDateZone, 'minutes');
  console.log(result);
  return result;
}
