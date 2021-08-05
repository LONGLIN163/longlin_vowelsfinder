import 'antd/dist/antd.css';
import axios from "axios"
import { useState} from 'react';
import { Card, Input, Button } from 'antd';
import { postData } from '../utils/postData';
const { TextArea } = Input;

const Apage = () => {

    const [InputNum,setInputNum] = useState('');
    const [OutputNum,setOutputNum] = useState('');

    const getVowelsNum = () => {
        postData(InputNum).then(
            (res) => {
                console.log("res---",res)
                const NumOfVowels=res.data;
                setOutputNum(NumOfVowels.toString())
            }
        )
    }

    return ( 
        <div className="cardbox">
            <Card bordered={false} style={{ width: 400 }} >
                <Input
                    id="userName"
                    size="large"
                    placeholder="Enter some letters or a string here..."
                    onChange={(e)=>{setInputNum(e.target.value)}}
                /> 
               <Button type="primary" size="large" block onClick={getVowelsNum}> Click Get Number of Vowels </Button>
               <TextArea
                value={OutputNum}
                size="large"
                placeholder="The Vowels number will be here..."
                autoSize={{ minRows: 3, maxRows: 5 }}
               />           
            </Card>
        </div>
     );
}
 
export default Apage;   