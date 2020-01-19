import React, { useState } from 'react'

 const Form = props => {
   const [ newQA, setNewQA ] = useState({
     question: "",
     answer: ""
   })

   const handleChange = event => {
     setNewQA({
       ...newQA,
       [event.currentTarget.name]: event.currentTarget.value
     })
   }

   const handleSubmit = event => {
     event.preventDefault()
     props.onSubmit(newQA)
     clearForm()
   }

   const clearForm = event => {
     setNewQA({
       question: "",
       answer: ""
     })
   }

   return(
     <div>
       <form onSubmit={handleSubmit}>
         <label htmlFor="question"> New Question:
           <input
             type="text"
             name="question"
             id="question"
             value={newQA.question}
             onChange={handleChange}
           />
         </label>

         <label htmlFor="answer"> New Answer:
           <input
             type="text"
             name="answer"
             id="answer"
             value={newQA.answer}
             onChange={handleChange}
           />
         </label>

         <input
           className="button"
           type="submit"
           value="Add newQA"
          />
       </form>
       <button
         className="button"
         onClick={clearForm}>Clear Form
       </button>
     </div>

   )
 }

 export default Form
