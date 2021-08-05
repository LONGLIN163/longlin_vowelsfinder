const Koa = require('koa');
const Router=require("koa-router")
var cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser')

const app=new Koa()
const router=new Router()

app.use(cors());
app.use(bodyParser())

const countVowel=(str)=> { 
    // find the count of vowels
    let count = str.match(/[aeiou]/gi).length;
    // return number of vowels
    return count;
}

router
    .get("/",async (ctx) => {
        ctx.body="Hello"
    })
    .post("/",async (ctx)=>{
      let str=ctx.request.body.input;
      console.log(str)
      const num=countVowel(str)
      console.log(num)
      ctx.body=num
  })

app
  .use(router.routes())
  .use(router.allowedMethods()); 

app.listen(3000,()=>{
  console.log('server is running at port 3000');
});