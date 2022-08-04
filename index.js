const express = require('express')
const app = express()
const path = require('path')

const PORT = process.env.PORT || 3500

app.use('/robots.txt', express.static(path.join(__dirname+`/robots.txt`)))
app.get('/disallow', (req, res)=>{
    res.status(200).send('Disallow')
})

app.get('/redirect', (req, res)=>{
    res.redirect('/redirected_page')
})

app.get('/redirected_page', (req, res)=>{
    res.send('Redirected successfully')
})

app.get('/get_html', (req, res)=>{
    res.sendFile(path.join(__dirname+'/index.html'))
})

app.get('/200', (req, res)=>{
    res.status(200).send('200')
})

app.get('/403', (req, res)=>{
    res.status(403).send('403')
})

app.get('/404', (req, res)=>{
    res.status(404).send('404')
})

app.get('/503', (req, res)=>{
    res.status(503).send('503')
})

app.listen(PORT, ()=>{
    console.log(`Server is up on port ${PORT}`)
})