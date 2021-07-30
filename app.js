const 
   axios   = require("axios"),
   cherio  = require("cherio"),
   express = require("express"),
   PORT    = process.env.PORT || 2222,
   app     = express()


const getResults = html => {
   const $ = cherio.load(html)
   const results = []

   $("#b_results .b_algo").each(function(a, b){ 

      results.push($(b).text())
   })
   return results
}


app.get("/", (req, res)=>{
   
   axios.get(`https://www.bing.com/search?q=${req.query.b}`)
   .then(e => res.send(getResults(e.data)))
   .catch(console.log)

})

app.listen(PORT, ()=> console.log(`App listen in the port ${PORT}`))