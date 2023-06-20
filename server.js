import app from './app.js'
import dotenv from 'dotenv'

dotenv.config()


const PORT = process.env.PORT || 8000

app.listen(PORT, function(){
    console.log(`Server running on PORT: ${PORT}`)
})