module.exports = {
     serverHandle : function (req, res) {
         
        
        const http = require('http')
        const url = require('url')
        const qs = require('querystring')
        const route = url.parse(req.url)
        const path = route.pathname 
        const params = qs.parse(route.query)

        res.writeHead(200, {'Content-Type': 'text/plain'});
        if (path === '/Bonjour' && 'name' in params) {
            
            if ( params['name'] == 'noha' )
            {
                console.log(params['name'])
                res.write('Welcome Noha page')
            }
            else {
                res.writeHead(404, {'Content-Type': 'text/plain'}); 
                res.write('ERROR not found')
            }
            
        }
        else {
             res.write('Bonjour!')
        }

        res.end();
        
    }
}