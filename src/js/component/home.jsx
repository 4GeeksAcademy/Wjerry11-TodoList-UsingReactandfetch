import React, { useEffect, useState } from "react";



const Home = () => {
	const [name, setName] = useState("");
	const [age, setAge] = useState(0);
	const [result, setResult] = useState(false)
	function validateSubmission() {
		if (name == "") {
			alert("Name is needed to predict age!")
		}
		else {
			setResult(true);
			fetchAge();
		}
	}

	function fetchAge() {
		fetch("https://api.agify.io/?name=" + name)
			.then(response => response.json())
			.then(data => {
				console.log(data)
				setName(data.name)
				setAge(data.age)
			})
	}

	useEffect(() => {
		fetchAge();
	}, [])

	return (
		<>
			<div className="container">

				<h1 className="title"> Age Predictor </h1>
				<h2> Enter your name and i will predict your age. </h2>
				<div className="row">
					<div className="col">
						<div className="input">
							<input
								className="form-control"
								type="text"
								onChange={event => setName(event.target.value)}
								value={name}
							/>
						</div>
					</div>
					<div className="col mt-5">
						<button className="btn btn-primary mx-3" onClick={validateSubmission}> Predict Age</button>
						<button className="btn btn-secondary" onClick={() => setResult(false)}> Clear </button>
					</div>
				</div>

				<h2 className={result ? "predicted-age-visible" : "predicted-age-hidden"}>{name} you are {age} years old. </h2>

			</div>
		</>
	);
};
export default Home;  
