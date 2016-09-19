import '../../spec_helper';
import ReactDOM from 'react-dom';

describe('the theater summary', () => {
  const theater0 = {
          "Name": "Alamo Drafthouse Cinema - New Mission",
          "Info": "stuff n things",
          "Showtimes": {
            "0": [
              "11:30am", 
              "12:30pm", 
              "2:00pm", 
              "3:10pm", 
              "4:40pm", 
              "5:45pm", 
              "7:30pm", 
              "8:25pm", 
              "10:05pm", 
              "11:00pm"
            ]
          }
        };

  const theater1 = {
          "Name": "Century San Francisco Centre 9 and XD",
          "Info": "845 Market Street, San Francisco, CA - (800) 246-3627",
          "Showtimes": {
            "0": [
              "11:15am", 
              "2:10pm", 
              "4:55pm", 
              "7:40pm", 
              "10:30pm"
            ]
          }
        };

  const theater2 = {
          "Name": "Kabuki Theater",
          "Info": "845 Market Street, San Francisco, CA - (800) 246-3627", 
          "Showtimes": {
            "0": [
              "11:15am", 
              "2:10pm", 
              "4:50pm", 
              "7:40pm", 
              "10:30pm"
            ]
          }
        };

  const theater3 = {
          "Name": "Roxie Theater",
          "Info": "3117 16th Street, San Francisco, CA - (415) 863-1087", 
          "Showtimes": {
            "0": [
              "7:00pm"
            ]
          }
        };

  const theater4 = {
          "Name": "AMC Metreon 16",
          "Info": "135 Fourth St Suite 3000, San Francisco, CA - (888) 262-4386", 
          "Showtimes": {
            "0": [
              "11:30am"
            ]
          }
        };

  const theater5 = {
          "Name": "Opera Plaza Cinemas",
          "Info": "601 Van Ness Avenue, San Francisco, CA - (415) 771-0183", 
          "Showtimes": {
            "0": [
              "4:45pm"
            ]
          }
        };

  const theater6 = {
          "Name": "Fake Theater",
          "Info": "This is info. This is really info.", 
          "Showtimes": {
            "0": [
              "9:45am"
            ]
          }
        };

  const theaters = [
        theater0,
        theater1,
        theater2,
        theater3,
        theater4,
        theater5,
        theater6
      ];

  beforeEach(() => {
    const TheaterSummary = require('../../../app/components/theater-summary').default;
    ReactDOM.render(<TheaterSummary theaters={theaters} />, root);
  });

  it('shows the four closest theaters', () => {
    expect('.theater-summary').toContainText(theaters[0].Name);
    expect('.theater-summary').toContainText(theaters[1].Name);
    expect('.theater-summary').toContainText(theaters[2].Name);
    expect('.theater-summary').toContainText(theaters[3].Name);
  });

  it('does not show more than four theaters', () => {
    expect('.theater-summary').not.toContainText(theaters[4].Name);
    expect('.theater-summary').not.toContainText(theaters[5].Name);
    expect('.theater-summary').not.toContainText(theaters[6].Name);
  });

  describe('showtimes', () => {
    it('shows the first five showtimes for the first theater', () => {
      expect('.theater-summary').toContainText(theaters[0].Showtimes['0'][0]);
      expect('.theater-summary').toContainText(theaters[0].Showtimes['0'][1]);
      expect('.theater-summary').toContainText(theaters[0].Showtimes['0'][2]);
      expect('.theater-summary').toContainText(theaters[0].Showtimes['0'][3]);
      expect('.theater-summary').toContainText(theaters[0].Showtimes['0'][4]);
    });

    it('does not show more than five showtimes', () => {
      expect('.theater-summary').not.toContainText(theaters[0].Showtimes['0'][5]);
      expect('.theater-summary').not.toContainText(theaters[0].Showtimes['0'][6]);
      expect('.theater-summary').not.toContainText(theaters[0].Showtimes['0'][7]);
      expect('.theater-summary').not.toContainText(theaters[0].Showtimes['0'][8]);
    });

  });

});