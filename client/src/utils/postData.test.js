import { postData} from './postData'
test('postData test1', async ()=>{
    const res  = await postData("haha")
    console.log("res----",res.data)
    expect(res.data).toBeDefined(); //pass - return a non-undefined value
})
test('postData test2', ()=>{
    expect.assertions(1) 
    return postData("").catch((err)=>{
      console.log("err******"+err.toString())
      expect(err.toString().indexOf('Network Error')> -1).toBe(true) //pass - cross origin is not allowed to sent empty value

    })
})