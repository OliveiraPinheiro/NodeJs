const os = require('os')

const {freemem, totalmem} = os

setInterval(()=> {

	const total = parseInt(totalmem() / 1024 / 1024)
	const mem = parseInt(freemem() / 1024 / 1024)
	const parcents = parseInt((mem / total) * 100)

	const stats = {
		free: `${mem} MB`,
		total: `${total} MB`,
		usage: `${parcents}%`
	}
	console.clear()
	console.table(stats)
}, 1000)