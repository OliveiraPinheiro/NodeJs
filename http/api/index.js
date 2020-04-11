const http = require('http')
const data = require('./url.json')
const URL = require('url')
const path = require('path')

function writeFile(cb){
	fs.writeFile(
	    path.join(__dirname, 'url.json'),
	    JSON.stringify(data, null, 2),

	    err =>{
	        if(err) throw err

	        res.end(JSON.stringify({message:'ok'}))
	     }
	)
}



http.createServer((req, res) => {
	const {name, url, del } = URL.parse(req.url, true).query

	res.writeHead(200,{
		'Acess-control-Allow-Origin': '*'
	})

	if(!name || !url)
		return res.end(JSON.stringify(data))

	if(del){

		data.urls = data.urls.filter(item => String(item.url) !== String(url))
		return writeFile((message) =>{
			res.end(message)
		})
	}

	data.urls.push({name, url})

	return writeFile((message)=> res.end(message))
	
}).listen(5000, ()=> console.log('Api rodando'))