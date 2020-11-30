import React from 'react';
import languageContext from './contexts/LanguageContext'
import stringsModule from './helpers/Strings'
import successContext from './contexts/successContext'



const Congrats = () => {

  const [success] = successContext.useSuccess(); // for the time being
  const language = React.useContext(languageContext); 


  if (success) {
    return (
      <div data-test="component-congrats" className="alert alert-success">
        <span data-test="congrats-message">
         {stringsModule.getStringByLanguage(language, 'congrats')}
        </span>
      </div>
    );
  } else {
    return (
      <div data-test="component-congrats" />
    );
  }
};



const mapStateToProps = ({success}) => {
  return {success};
};

export default Congrats;
