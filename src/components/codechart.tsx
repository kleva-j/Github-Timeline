import React from 'react';

export default class CodeChart extends React.Component<any, any> {
  public render() {
    const { userdata } = this.props;
    return (
      <div className="code-chart">
        <pre>
          <code>
            {JSON.stringify(userdata, null, 2)}
          </code>
        </pre>
      </div>
    );
  }
}
