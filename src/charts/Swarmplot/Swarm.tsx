import { ResponsiveSwarmPlot } from '@nivo/swarmplot';

import { ISwarmProps } from './Swarm.interface';

export const SwarmPlot = ({ data }: ISwarmProps) => (
  <ResponsiveSwarmPlot
    data={data}
    groups={['group A', 'group B', 'group C']}
    value="price"
    valueFormat="$.2f"
    valueScale={{ type: 'linear', min: 0, max: 500, reverse: false }}
    size={{ key: 'volume', values: [4, 20], sizes: [6, 20] }}
    layout="horizontal"
    forceStrength={4}
    simulationIterations={100}
    colors={['#588B8B', '#ffffff', '#FFD5C2', '#F28F3B', 'teal', '#C8553D']}
    colorBy="id"
    borderColor={{
      from: 'color',
      modifiers: [
        ['darker', 0.6],
        ['opacity', 0.5],
      ],
    }}
    margin={{ top: 80, right: 100, bottom: 80, left: 100 }}
    axisTop={{
      orient: 'top',
      tickSize: 10,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'group if vertical, price if horizontal',
      legendPosition: 'middle',
      legendOffset: -46,
    }}
    axisRight={{
      orient: 'right',
      tickSize: 10,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'price if vertical, group if horizontal',
      legendPosition: 'middle',
      legendOffset: 76,
    }}
    axisBottom={{
      orient: 'bottom',
      tickSize: 10,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'group if vertical, price if horizontal',
      legendPosition: 'middle',
      legendOffset: 46,
    }}
    axisLeft={{
      orient: 'left',
      tickSize: 10,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'price if vertical, group if horizontal',
      legendPosition: 'middle',
      legendOffset: -76,
    }}
    motionStiffness={50}
    motionDamping={10}
    theme={{
      textColor: '#9CA3AF',
      fontSize: 10.5,
    }}
  />
);
