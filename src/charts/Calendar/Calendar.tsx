import { ResponsiveCalendar } from '@nivo/calendar';

import { CalendarSampleData } from './Calendar.sample';

export const Calendar = () => {
  const to = new Date().toLocaleDateString().split('/').reverse().join('-');
  const from = new Date(new Date().setFullYear(new Date().getFullYear() - 1))
    .toLocaleDateString()
    .split('/')
    .reverse()
    .join('-');

  return (
    <ResponsiveCalendar
      data={CalendarSampleData}
      from={from}
      to={to}
      emptyColor="#eeeeee"
      colors={['#61cdbb', '#4da495', '#3a7b70', '#26524a']}
      margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
      yearSpacing={40}
      monthBorderColor="#ffffff"
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
      theme={{
        textColor: '#9CA3AF',
        fontSize: 10.5,
      }}
    />
  );
};
