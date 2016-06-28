import '../../spec_helper';

describe('Application', () => {

  beforeEach(() => {
    const Application = require('../../../app/components/application').default;
    ReactDOM.render(<Application />, root);
  });

  it('shows the movie titles', () => {
    expect(root).toContainText('Mulholland Drive');
    expect(root).toContainText('The Birds');
  });
});