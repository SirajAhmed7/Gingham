import { useState } from 'react';

export default function CtaButton(props) {
  const [cta, setCta] = useState({});

  const ctaHover = function (e) {
    setCta({
      backgroundColor: 'transparent',
      transform: 'translatey(-100%)',
      color: 'white',
    });
  };

  const ctaHoverOut = function () {
    setCta({
      backgroundColor: 'white',
      transform: 'translatey(0)',
      color: '#000a04',
      transition: 'all 0.2s 0.2s ease, transform 0.2s ease',
    });
  };

  const handleMouseDown = function () {
    setCta({
      backgroundColor: 'rgb(255,255,255, .3)',
      transform: 'translatey(-100%)',
      color: 'white',
    });
  };

  const handleMouseUp = function () {
    setCta({
      backgroundColor: 'transparent',
      transform: 'translatey(-100%)',
      color: 'white',
    });
  };

  return (
    <div className={`cta-box  ${props.anLeft ? 'an-left' : 'an-up'}`}>
      <a
        onMouseEnter={ctaHover}
        onMouseOut={ctaHoverOut}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        href="#"
        className={`cta-button ${
          props.text === 'See full collection' && 'col'
        }`}
        style={cta}
      >
        {props.text}
      </a>
    </div>
  );
}
