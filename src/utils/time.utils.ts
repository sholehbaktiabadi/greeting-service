import * as momentTz from 'moment-timezone';
import * as moment from 'moment';

export function isGreater(dateStart: Date) {
  return moment(dateStart).fromNow();
}

export function getFormatTimezone(tz: string, birtday: Date): number {
  const parseDate = new Date();
  console.log(birtday, 'user birtday');
  let year = parseDate.getFullYear();
  let monthDate = birtday.toString().substring(5);
  const format = year + '-' + monthDate;
  console.log(format, ' format');
  const dynamicDateZone = momentTz
    .tz(`${format} 09:00`, 'YYYY-MM-DD HH:mm', tz)
    .format();
  const dateNow = moment();
  const result = dateNow.diff(dynamicDateZone, 'minutes');
  console.log(result);
  return result;
}
