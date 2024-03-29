import express from "express"
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: 'my api key' });

const app = express()

app.get("/", (req, res) => {
    res.send("Hello World, Server is Running")
})

app.get("/ask", (req, res) => {

    async function main() {
        const completion = await openai.chat.completions.create({
          messages: [{ role: "system", content: req.query.question }],
          model: "gpt-3.5-turbo",
        });
        console.log(completion.choices[0]);

        res.json(completion.choices[0])
      }
    
    main()
})



app.listen(3000, () => {
    console.log("server is running")
})