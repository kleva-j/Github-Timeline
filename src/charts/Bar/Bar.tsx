import { ResponsiveBar } from '@nivo/bar';

import { IBarProps } from './Bar.interface';

export const Bar = ({ data }: IBarProps) => {
  return (
    <ResponsiveBar
      data={data}
      keys={['pull request', 'commits', 'issues', 'code reviews', 'projects', 'branches']}
      indexBy="year"
      margin={{ top: 30, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={["#588B8B", "#ffffff", "#FFD5C2", "#F28F3B", "teal", "#C8553D"]}
      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Years',
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Contributions',
        legendPosition: 'middle',
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 15,
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#fff',
              },
            },
          ],
        },
      ]}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      theme={{
        textColor: '#9CA3AF',
        fontSize: 10.5,
      }}
    />
  );
};
