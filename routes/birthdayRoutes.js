const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  let typeNumber = parseInt(req.body.typeNumber);
  if (typeNumber > -1 && typeNumber < 32) {
		let typeString = String(typeNumber);
		let stringArr = typeString.split("");
		const[digit1, digit2] = stringArr;
		 typeNumber = parseInt(digit1) + parseInt(digit2);
    res.redirect(`https://www.enneagraminstitute.com/type-${typeNumber}`);
  } else {
		// res.send('Please enter a number between 0 and 31');
		res.redirect('/yourname');
	}
});

module.exports = router;
