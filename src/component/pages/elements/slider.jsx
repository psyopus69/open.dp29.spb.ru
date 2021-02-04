// autoPlay require HOC withCustomActionTimer
import React, {Fragment, PureComponent} from "react";
import AwesomeSlider from 'react-awesome-slider';
import {PropTypes} from "prop-types";
import AwsSliderStyles from 'react-awesome-slider/src/core/styles.scss';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';

const Slider = (props) => {
  const {slides} = props;
  return <Fragment>
    <div className='sliderMain'>
      <AwesomeSlider animation="foldOutAnimation" cssModule={[AwsSliderStyles, AwesomeSliderStyles]}>
        {slides.map((el, index) => {
          const tim = new Date(`milliseconds`);
          return <div key={`${tim}:slideMainC-${index}`} data-src={el.src} >
            <p>{el.textPar}</p>
          </div>;
        })}
      </AwesomeSlider>
    </div>
  </Fragment>;
};
Slider.propTypes = {
  slides: PropTypes.object.isRequired,
};

// let counter = 0;
class SliderAutoplay extends PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const {slides} = this.props;
    return <Fragment>
      <div className='sliderMain sliderAutoplay'>
        <AwesomeSlider animation="foldOutAnimation" cssModule={[AwsSliderStyles, AwesomeSliderStyles]}>
          {slides.map((el, index) => {
            const tim = new Date(`milliseconds`);
            return <div key={`${tim}:slideMainC-${index}`} data-src={el.src} >
              <p>{el.textPar}</p>
            </div>;
          })}
        </AwesomeSlider>
      </div>
    </Fragment>;
  }
  componentDidMount() {
    const {setTimer, delay} = this.props;
    setTimer(() => {
      const next = document.querySelector(`div.sliderAutoplay > div > div > div > button.B4--NcIYVcq26fPRScy5t`);
      // const next = document.getElementsByClassName(`B4--NcIYVcq26fPRScy5t`)[0];
      if (next !== null) {
        next.click();
      }
      // console.log(`clicked! time : ${new Date().getTime() / 1000}`);
      // console.log(`clicked! time : ${counter++}`);
    }, delay);
  }
}

SliderAutoplay.propTypes = {
  slides: PropTypes.array.isRequired,
  setTimer: PropTypes.func.isRequired,
  clearTimer: PropTypes.func.isRequired,
  delay: PropTypes.number.isRequired,
};

export {
  Slider,
  SliderAutoplay,
};
