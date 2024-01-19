import React,{useState} from 'react';
import QuestionCard from './components/QuestionCard';
import './App.css';
import { computerJi } from './API';
import { Difficulty } from './API';
function App() {
  const [loading,setloading]=useState(false)
  const [questions,setquestions]=useState([])
  const [number,setnumber]=useState(0)
  const [userAnswers,setuseranswers]=useState([])
  const [score,setscore]=useState(0)
  const [gameover,setgameover]=useState(false)
  const Totalques=10
  console.log(computerJi(Totalques,Difficulty.EASY))

  const shuruKiaJay=async ()=>{

  }
  const LockKardiaJay=(e: React.MouseEvent<HTMLButtonElement>)=>{

  }
  const aglaSawal=()=>{

  }
  return (
    <div className="App">
    <h1>KBC</h1>
    <button className='start' onClick={shuruKiaJay}>Kaun banega crorepati.Lets Play</button>
    <p className='score'>Score:</p>
    <p>Heres the next question..</p>
    <QuestionCard 
    questionNr={number+1}
 totalQuestions={Totalques}
 question={questions[number].question}
 answer={questions[number].answers}
 userAnswer={userAnswers?userAnswers[number]:undefined}
 callback={LockKardiaJay}
 userAnswer={}

    />
    <button className='next' onClick={aglaSawal}>Next question</button>
    <p></p>
    </div>
  );
}

export default App;
