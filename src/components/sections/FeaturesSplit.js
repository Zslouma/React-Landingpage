import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Pourquoi faire appel à GBIO ?',
    paragraph: 'Une prise de recul nécessaire et un levier de performance pour votre entreprise'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Des compétences boostées 
                  </div>
                <h3 className="mt-0 mb-12">
                 Une vie professionnelle épanouissante pour vos employés
                  </h3>
                <p className="m-0">
                GBIO Consulting Agency vous aide à utiliser le plein potentiel de vos collaborateurs en mettant en valeur leurs talents et leurs compétences.
En aidant vos employés à se développer et à grandir au sein de votre entreprise, vous leur permettez de s’épanouir au travail et donc d’atteindre les résultats attendus.

                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-01.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                GBIO Consulting Agency SUARL
                  </div>
                <h3 className="mt-0 mb-12">
                un cabinet de conseil stratégique basé à Lausanne et Genève, en Suisse.
                  </h3>
                <p className="m-0">
                Des renforts pour votre direction, des ressources pour vos ambitions.
                Faites grandir vos ambitions grâce aux conseils de dirigeants expérimentés devenus consultants.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-02.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
              
                <h3 className="mt-0 mb-12">
                Nous aidons les dirigeants                  </h3>
                <p className="m-0">
                Ce que vous avez construit doit perdurer. Comme tous les dirigeants, vous mobilisez toute votre énergie, vos ressources et vos compétences dans ce seul but. Mais comment s’assurer de faire les bons choix, de prendre les bonnes décisions ? Le monde est devenu si complexe que disposer des informations adéquates et rassembler les compétences nécessaires à l'interne est souvent trop long, trop coûteux.                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-03.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
              
                <h3 className="mt-0 mb-12">
                Des experts pointus dans différents domaines                 </h3>
                <p className="m-0">
                Notre équipe rassemble des experts qui vous comprennent car ils ont occupé des postes à la Direction d'entreprises d’envergure dans divers secteurs d’activités, en Suisse et à l’étranger. Vous avez une décision difficile à prendre ? Il y a fort à parier que quelqu’un chez nous ait déjà dû prendre la même. Bénéficiez de son expérience. Laissez nos spécialistes vous conseiller et vous accompagner.                 </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-03.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;