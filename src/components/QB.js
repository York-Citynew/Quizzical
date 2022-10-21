// import { useState } from "react"

import { useState } from "react"


// export default function QB(props) {

//     const [choiceObjs, setChoiceObjs] = useState(
//         [
//             {choice: props.CA,
//              isTrue: true, 
//              isSelected: false
//             },
//             ...props.WAs.map(
//                 element=>({
//                     choice: element, 
//                     isTrue: false, 
//                     isSelected: false
//                 }))
//         ].sort((a, b) => 0.5 - Math.random())
//     )

//     function optionStateChange(event) {
//         if(!props.showAnswer) {
//             setChoiceObjs(
//                 prev=> {
//                     const newArray = []
//                     for (let i =0;i< prev.length;i++) {
//                         if(prev[i].choice === event.target.id) {
//                             newArray.push(
//                                 {...prev[i],
//                                  isSelected: !prev[i].isSelected,
//                             })
//                         }
//                         else {
//                             newArray.push({...prev[i], isSelected: false})
//                         }
//                     }
//                     return newArray
//                 }
//         )
//     }
//     }

//     const choiceEls=
//         choiceObjs.map(
//             element=>
//                 <label
//                     key={element.choice}
                    // className={
                    //     `input--${
                    //         props.showAnswer?
                    //         (element.isTrue?"correct":"wrong"):
                    //         element.isSelected?"select":"normal"
                    //     }`}
//                     htmlFor={element.choice}>
//                     <input
//                         type="radio"
//                         id={element.choice}
//                         name={props.question}
//                         checked={element.isSelected}
                        // onChange={
                        //     (event)=>{
                        //         optionStateChange(event);
                        //         props.handleAnswersTrucy(
                        //             props.question,
                        //             choiceObjs.some(
                        //                 obj=>obj.isTrue && obj.isSelected
                        //                 )
                        //                 )
                        //     }
                        // }
//                         />
//                     {element.choice}
//                 </label>
//             )
//     return (
//         <div>
//             <h3>{props.question}</h3>
//             <div className="options-con display--flex">
//                 {choiceEls}
//             </div>
//             <hr />
//         </div>
//     )
// }

export default function QB(props) {

    const [choiceObjs, setChoiceObjs] = useState(
        [
            props.CA,
            ...props.WAs
        ].map(element=>(
            {
                choice: element,
                isSelected: false
            })).sort((a, b) => 0.5 - Math.random())
    )

    function handleSetChoiceObjs(choice) {
        setChoiceObjs(prev=> {
            const newArr = []
            for (let i =0; i< prev.length; i++) {
                (choice === prev[i].choice)?(newArr.push({...prev[i], isSelected: !prev[i].isSelected})):(newArr.push({...prev[i], isSelected: false}))
            }
            return newArr
        })
    }

    const choiceEls=
        choiceObjs.map(
            choice=>
                <label
                    key={choice.choice}


                    className={
                        `input--${
                            props.showAnswer?
                            (choice.choice === props.CA?"correct":"wrong"):
                            choice.isSelected?"select":"normal"
                        }`}
                    htmlFor={choice.choice}>
                    <input
                        type="radio"
                        id={choice.choice}
                        name={props.question}
                        onChange={
                            (event)=>{
                                if (!props.showAnswer) {
                                handleSetChoiceObjs(choice.choice);
                                props.handleSetAnswersTrucy(
                                    props.question,
                                    event.target.checked && choice.choice === props.CA
                                        )
                                }}
                        }
                        checked={choice.isSelected}
                        />
                    {choice.choice}
                </label>
            )


    return (
        <div>
            <h3>{props.question}</h3>
            <div className="options-con display--flex">
                {choiceEls}
            </div>
            <hr />
        </div>
    )
}