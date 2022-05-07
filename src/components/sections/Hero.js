import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import pic from'../../assets/images/logo2.jpeg';

import { Toggle } from '../loadMoreComponent';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );
  const sectionHeader = {
    title: "Rencontrer l'équipe !",
    paragraph: "Cliquez sur la video suivante pour une petite persentation de l'equipe"
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >

      <div  >
        <div className={innerClasses}  style={{"alignItems":"stretch","display":"flex","backgroundColor":"white"}} >
        <img src={pic} />
          <div className="hero-content"  style={{"alignContent":"end","marginTop":"20%"}}>
        

            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
            <span className="text-color-primary"> GBIO Consulting Agency</span>
            </h1>
            <h6 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="400">
            <span className="text-color-mid"> Des conseils, c’est bien. </span>
            
            </h6>
            <h6 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="400">
            <span className="text-color-mid"> Accompagnés d’action, c’est mieux.</span>
            
            </h6>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400" >
              

Vous cherchez des consultants qui ne se contentent pas de parler mais agissent concrètement ? <br></br> C’est comme ça que nous travaillons.
Diagnostic
Pour prendre les bonnes décisions, il faut savoir où on en est. <br></br>
              
                              </p>
                              <Toggle /> 
                            
              <div className="reveal-from-bottom" data-reveal-delay="600">
              
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;