import React, { useState } from 'react';
import './GamePage.css';
import gameDictionary from './data';

function GamePage() {
  const initialCards = gameDictionary.stories[0].cards;
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [renderedQuestions, setRenderedQuestions] = useState([]);
  const [sliderIndex, setSliderIndex] = useState(0);
  const [credibilityCount, setCredibilityCount] = useState(0);
  const [scoreCount, setScoreCount] = useState(0);
  const [variableValues, setVariableValues] = useState({});

  const parseVariables = (variablesString) => {
    const variablesArray = variablesString.split(', ');

    let credibility = 0;
    let score = 0;
    const otherVariables = {};

    variablesArray.forEach((variable) => {
      const [name, value] = variable.split('=');
      if (name === 'credibility') {
        credibility = parseInt(value) || 0;
      } else if (name === 'score') {
        score = parseInt(value) || 0;
      } else {
        otherVariables[name] = value;
      }
    });

    return { credibility, score, otherVariables };
  };

  const replaceVariables = (text) => {
    let replacedText = text;

    Object.keys(variableValues).forEach((variable) => {
      const regex = new RegExp(`{{${variable}}}`, 'g');
      replacedText = replacedText.replace(regex, variableValues[variable]);
    });

    return replacedText;
  };

  const handleAnswerClick = (answer, goToTag) => {
    const currentCard = initialCards[selectedCardIndex];

    if (currentCard) {
      const { credibility, score, otherVariables } = parseVariables(answer.variables);

      setCredibilityCount((prevCount) => prevCount + credibility);
      setScoreCount((prevCount) => prevCount + score);
      setVariableValues((prevValues) => ({ ...prevValues, ...otherVariables }));

      const newIndex = initialCards.findIndex((card) => card.tag === goToTag);
      setSelectedCardIndex(newIndex);

      if (initialCards[newIndex].acf_fc_layout === 'text') {
        setRenderedQuestions((prevQuestions) => [
          ...prevQuestions,
          replaceVariables(currentCard.question.text),
        ]);
      } else if (initialCards[newIndex].acf_fc_layout === 'social-post' || initialCards[newIndex].acf_fc_layout !== 'text') {
        setRenderedQuestions((prevQuestions) => [
          ...prevQuestions,
          replaceVariables(currentCard.question.text),
        ]);
      }
    }
  };

  


    
  const renderMultipleChoiceCard = (card) => {
    const { question, answers } = card;
  
    const handleAnswerClick = (goToTag) => {
      const newIndex = initialCards.findIndex((card) => card.tag === goToTag);
      if (newIndex !== -1) {
        setSelectedCardIndex(newIndex);
  
        // Additional logic for updating variable values, credibility, and score can be added here
      }
    };
  
    return (
      <div className="multiple-choice-card">
        <div>
          <p>{replaceVariables(question.text)}</p>
          {question.image && <img src={question.image[0]} />}
        </div>
        <div>
          {answers.map((answer) => (
            <button
              key={answer.text}
              onClick={() => handleAnswerClick(answer.go_to)}
            >
              {replaceVariables(answer.text)}
            </button>
          ))}
        </div>
      </div>
    );
  };


  const handleSocialAnswerClick = (answer, goToTag, text) => {
    const currentCard = initialCards[selectedCardIndex];

    if (currentCard) {
      const { credibility, score, otherVariables } = parseVariables(answer.variables);

      setCredibilityCount((prevCount) => prevCount + credibility);
      setScoreCount((prevCount) => prevCount + score);
      setVariableValues((prevValues) => ({ ...prevValues, ...otherVariables }));

      const newIndex = initialCards.findIndex((card) => card.tag === goToTag);
      setSelectedCardIndex(newIndex);

      if (initialCards[newIndex].acf_fc_layout === 'text') {
        setRenderedQuestions((prevQuestions) => [
          ...prevQuestions,
          replaceVariables(text),
          replaceVariables(currentCard.question.text),
        ]);
      } else if (initialCards[newIndex].acf_fc_layout === 'social-post') {
        setRenderedQuestions((prevQuestions) => [
          ...prevQuestions,
          replaceVariables(currentCard.question.text),
        ]);
      }
    }
  };

  const handleSlideButtonClick = (index) => {
    setSliderIndex(index);
  };

  const renderDropdownCard = (card) => {
    const { question, answers } = card;
  
    const handleDropdownChange = (selectedValue) => {
      const selectedAnswer = answers.find((answer) => answer.text === selectedValue);
  
      if (selectedAnswer) {
        const goToTag = selectedAnswer.go_to;
        handleGoToTag(question.text, selectedAnswer, goToTag);
      }
    };
  
    const handleGoToTag = (question, answer, goToTag) => {

      console.log(question)

      const newIndex = initialCards.findIndex((card) => card.tag === goToTag);
  
      if (newIndex !== -1) {
        setSelectedCardIndex(newIndex);
        const selectedAnswer = answer
        // Update variable values, credibility, and score as needed
        const { credibility, score, otherVariables } = parseVariables(selectedAnswer.variables);
        setCredibilityCount((prevCount) => prevCount + credibility);
        setScoreCount((prevCount) => prevCount + score);
        setVariableValues((prevValues) => ({ ...prevValues, ...otherVariables }));
        
        // Rendered questions logic can be updated here if needed
        setRenderedQuestions((prevQuestions) => [
          ...prevQuestions,
          replaceVariables(currentCard.question.text),
        ]);
        // Additional logic for specific card types can be added here
      }
    };
      
    return (
      <div className="dropdown-card">
        <p>{replaceVariables(question.text)}</p>
        <select onChange={(e) => handleDropdownChange(e.target.value)}>
          {answers.map((answer) => (
            <option key={answer.text} value={answer.text}>
              {replaceVariables(answer.text)}
            </option>
          ))}
        </select>
        <button onClick={() => handleDropdownChange(document.querySelector('.dropdown-card select').value)}>
          OK
        </button>
      </div>
    );
  };
  

  const currentCard = initialCards[selectedCardIndex];

  return (
    <div className="game-container">

      <div className='counters'>
        <p>Credibility Count: {credibilityCount}</p>
        <p>Score Count: {scoreCount}</p>
      </div>
      
      {renderedQuestions.map((question, index) => (
        <div key={`question-${index}`} className="rendered-question">
          <p>{question}</p>
        </div>
        
      ))}
      {currentCard && currentCard.acf_fc_layout === 'text' && (
        <div className="text-card">
          <p>{replaceVariables(currentCard.question.text)}</p>
          {currentCard.answers.map((answer) => (
            <button className = "answer-button"
              key={answer.text}
              onClick={() => handleAnswerClick(answer, answer.go_to)}
            >
              {replaceVariables(answer.text)}
            </button>
          ))}
        </div>
      )}

      {currentCard && currentCard.acf_fc_layout === 'social-post' && (
        <div className="social-post-card">
          {currentCard.slider && (
            <div className="slider-container">
              <p>{replaceVariables(currentCard.answers[sliderIndex].slide.text)}</p>
              <button onClick={() => {
                handleSocialAnswerClick(currentCard.answers[sliderIndex], currentCard.answers[sliderIndex].go_to, currentCard.answers[sliderIndex].slide.text);
              }}>
                {replaceVariables(currentCard.answers[sliderIndex].text)}
              </button>
              <button className = "answer-button" onClick={() => handleSlideButtonClick((sliderIndex + 1) % currentCard.answers.length)}>
                Not this one
              </button>
            </div>
          )}
          {!currentCard.slider && (
            <div>
              {JSON.stringify(currentCard)}
            </div>
          )}
        </div>
      )}

      {currentCard && currentCard.acf_fc_layout === 'dropdown' && renderDropdownCard(currentCard)}

      {currentCard && currentCard.acf_fc_layout === 'multiplechoice' && renderMultipleChoiceCard(currentCard)}

      
    </div>
  );
}

export default GamePage;
