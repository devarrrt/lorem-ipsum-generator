import React, { useState } from 'react'
import data from './data'



const App = () => {
const [count, setCount] = useState(0)
const [text, setText] = useState([])

	const handleSubmit = ( e )=> {
		e.preventDefault()
		let amount = parseInt( count )
		if ( amount <= 0 ){
			amount = 1
		}
		setText( data.slice( 0, amount ))
	}

	return (
		<div>
			<section className="section-center">  
			<h3> вам сколько?  </h3>
			<form className="lorem-form" onSubmit={ handleSubmit } >
			<label htmlFor="amount"> 
				столько: 
			 </label>
			 <input name="amount" 
			 id="amount" type="number"
			 value={ count }
			 onChange={ ( e )=> setCount( e.target.value )}
			 />
			 <button type="submit" className="btn"> сгенерировать </button>
			</form>
			<article className="lorem-text">
		{ text.map( (item, index) => (
			<p key={ index }> { item } </p>
		)) }
			 </article>
			</section>
		</div>
	)
}

export default App
