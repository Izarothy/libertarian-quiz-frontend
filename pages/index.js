import Head from 'next/head'
import Question from '../components/Question'
import React, {useState, useEffect} from 'react';

export default function Home() {
  let dummyData = 
  [
    {
    question: 'Question1',
    answers: ['a', 'b', 'c', 'd']
   },
    {
      question: 'Question2',
      answers: ['a', 'b', 'c', 'd']
    }
    
  ]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [question, setQuestion] = useState(dummyData[currentIndex].question)
  let max = dummyData.length;

  const servePreviousQuestion = () => {

    // To not go below index 0
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      // This -1 is because the index updates after component re-renders
      setQuestion(dummyData[currentIndex - 1].question) }
    
  }
  const serveNextQuestion = () => {
    // To not exceed questions limit (+1 is to prevent overflowing indexes)
      if (currentIndex + 1 < max) {
        setCurrentIndex(currentIndex + 1);
        // This +1 is because the index updates after component re-renders
        setQuestion(dummyData[currentIndex + 1].question) }

  }

  return (
    <div className="flex flex-col font-montserrat ">
      <Head>
        <title>Libertarian Quiz</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;900&display=swap" rel="stylesheet"/>
      </Head>

      <header className="bg-yellow-400 p-12">
        <h1 className="text-3xl text-black font-extrabold text-center">Take a quiz</h1>
      </header>
      
      {/* Main question box */}
      <main className="flex flex-col bg-gray-900 min-h-screen justify-center items-center text-gray-100">
        <div className="p-4">
        <h2 className="border-dotted border-b-2 border-gray-400 py-3"><strong className="text-gray-400">Question {currentIndex + 1} </strong> / {max}</h2>
        <h1 className="text-center font-semibold mt-1">{question}</h1>
          {/* Answers box */}
          <div className="flex flex-col">
            {dummyData[currentIndex].answers ? dummyData[currentIndex].answers.map((answ, idx) => <Question answer={answ} onClick={serveNextQuestion} key={idx}/>) : <h1 className="text-red-600"> No options were found.</h1>}
          </div>
          {/* Buttons to cycle between questions */}
          <div className="flex justify-between mt-1">
            <button onClick={servePreviousQuestion} className="bg-inherit border-2 border-blue-700 text-gray-200 py-2 px-5 rounded-xl hover:bg-red-600 hover:border-red-600 transition duration-500 ">Back</button>
            <button onFocus={e => console.log(e)} onClick={serveNextQuestion} className="border-2 border-blue-700 text-gray-200 py-2 px-5 rounded-xl bg-blue-700">Next </button>
          </div>
        </div>
      </main>
    </div>
  )
}
