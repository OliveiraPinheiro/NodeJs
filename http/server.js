const http = require('http')
const path = require('path')
const fs = require('fs')


http.createServer((req, res) => {

	const file = req.url === '/' ? 'index.html' : req.url
	const filePath = path.join(__dirname, file)

	fs.readFile(
		filePath,
		(err, content) => {
			if(err) throw err

			res.end(content)
		}

	)
	
}).listen(3000, ()=> console.log('Servidor rodando'))