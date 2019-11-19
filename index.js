const http = require('http')
const handles = require('./handless')
const server = http.createServer(handles.serverHandle)
server.listen(8086)