import React, { useEffect, useState } from "react";
const Home = () => {
	 const [ catFact, setCatFact]= useState("");
	 const [FactsLenght, setFactLenght] = useState(0)
	 const loadCatFact=() => {
		fetch ("https://catfact.ninja/fact")
		.then(response=> response.json())
		.then(data => {
			setCatFact(data.fact)
			setFactLenght(data.lenght)
		 })
		 .catch(error => console.log("uh oh. There was a problem: /n", error));
		}
	    useEffect(() => {
			loadCatFact();
		}, []) 
     return (
		<>
				<h1> Cat App </h1>
				<p className="cat-fact">{catFact}</p>
				<button onClick={loadCatFact}>Click for fact</button>
	    </>
	);
};
export default Home; 