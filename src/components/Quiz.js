import { useEffect, useState } from "react"
import QB from "./QB"
import Dark from "./Dark"

export default function Quiz(props) {
    const [data, setData] = useState([])
            
    const [showAnswer, setShowAnswer] = useState(false)
            
            useEffect(()=>{
                fetch("https://opentdb.com/api.php?amount=5&category=15&type=multiple")
                .then(res=>res.json())
                .then(res=>setData(res.results.map(
                    element=>(
                        {
                            ...element,
                            isAnsweredCorrect: false
                        }
                    )
                )))
            }, [])

            function handleQuiz(question, boolean) {
                setData(
                    function (prev) {
                        const newArray = []
                        for (let i=0; i< prev.length; i++) {
                            if(prev[i].question === question) {
                                newArray.push({...prev[i], isAnsweredCorrect: boolean})
                            }
                            else {
                                newArray.push(prev[i])
                            }
                        }
                        return newArray
                    }
                )
            }

            const QBEls=
            data.map(
                element=>
                <QB 
                key={element.question}
                showAnswer={showAnswer}
                question={element.question}
                CA={element.correct_answer}
                WAs={element.incorrect_answers}
                handleQuiz={handleQuiz}
                />    
                )

        function countTrueAnswers() {
    return data.filter(
                element=>element.isAnsweredCorrect
                ).length
}
                
                
        function finalFunc() {
            if (!showAnswer) {
                setShowAnswer(prev=>!prev)
            }
            else (
                props.startFunc()
            )
            // !showAnswer?(setshowAnswer(prev=>!prev)):props.startFunc()
        }
        
        return (
            <div className="con-quiz width align--center display--flex">
            <Dark 
                isDark={props.isDark}
                handleDark={props.handleDark}
                />
            {QBEls}
            <div className="con-result align--center display--flex">
                {showAnswer && 
                    <p className="result">
                        You scored 
                        {countTrueAnswers()}/{QBEls.length}
                        correct answers
                    </p>
                }
                <button 
                    className="button--normal" 
                    id="that-button" 
                    onClick={finalFunc}>
                        {showAnswer?"New game":"submit answers"}
                </button>
            </div>
            <button>asdsad</button>
        </div>
    )
}
        
