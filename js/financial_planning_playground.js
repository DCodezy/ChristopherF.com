'use strict';

const e = React.createElement;

class FinancialPlanningPlayground extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#financial_planning_playground_container');
ReactDOM.render(e(FinancialPlanningPlayground), domContainer);
