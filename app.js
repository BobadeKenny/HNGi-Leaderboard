const express = require('express')
const fs = require('fs')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/views'))

app.get('/', (req, res) => {
	
	fs.readFile('./samples.json', 'utf8',  (err, jsonString) => {
		if (err){
			console.log("Error loading file")
			return
		}
		const data = JSON.parse(jsonString)
		res.render('index', {data : data})
	})
})

app.listen(port, () => {
	console.log('Server is running at port ' +port)
})
