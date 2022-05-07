import React from 'react'; 

class Toggle extends React.Component {
  state = {
    show: false,
  }

  toggle = () => this.setState((currentState) => ({show: !currentState.show}));

  render() {
    return (
      <div>
         <p onClick={this.toggle} className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="400">
        <button className="button" > Qui sommes-nous?</button>
        </p>  
        {this.state.show && <div> <p>
          <br></br> GBIO est une société de conseil en développement des affaires, stratégie, transformation, organisationnelle, évaluation et renforcement de capacités...

Nous accompagnons les entreprises de se développer et d’innover par des approches pragmatiques et audacieuses dans le respect des personnes et des besoins de l’organisation.


Mais concrètement, quel est notre champ d’action ? En fonction du briefing de base, GBIO peut mener de nombreuses missions différentes : 
Individuel, stratégique, de développement, d’équipe ou encore de transition.
</p></div>}
         
        
      </div>
     );
  }
}

export {Toggle};