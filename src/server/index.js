import 'source-map-support/register'

import path from 'path'
import express from 'express'

import index from '../public/index.html'

express()
    .use('/public', express.static(path.join(__dirname, '..', 'public')))
    // .use((req, res) => res.sendFile(path.join(__dirname, '../public/index.html')))
    .use((req, res) => {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(index)
    })
    .listen(process.env.PORT || 8080)
