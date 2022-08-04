function letterPercentages(string) {
	return {
    lowercase: (((string.match(/[a-z]/g) || []).length) / string.length * 
			100).toFixed(2), 
		uppercase: (((string.match(/[A-Z]/g) || []).length / string.length *
			100).toFixed(2)),
		neither: (((string.match(/[^a-z]/gi) || []).length / string.length *
			100).toFixed(2))
	};
}
	

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }