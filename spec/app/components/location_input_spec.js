import '../../spec_helper';

describe('LocationInput', () => {

  let whenReady;

  beforeEach(() => {
    const LocationInput = require('../../../app/components/location-input').default;
    whenReady = jasmine.createSpy('whenReady');
    ReactDOM.render(<LocationInput  whenReady={whenReady} />, root);
  });

  describe('when the user enters a valid zipcode', () => {
    beforeEach(() => {
      $('.input input').val('11111').simulate('change');
      $('.button').simulate('click');
    });

    it('calls the callback', () => {
      expect(whenReady).toHaveBeenCalled();
    });
  });
});