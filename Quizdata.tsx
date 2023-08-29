import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Result from './Result';
type propsType = {
data: any[]
}
export default function QuizData(props: propsType) {
    let {data} = props
    const [value, setValue] = React.useState('');
    const [render, setRender] = React.useState(false);
    const [scores, setScores] = React.useState(0);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    const [index, setIndex] = useState(0)
const score = ()=>{
    if(value == data[index].correctAnswer){
setScores(scores +1)
    }
}

const next = ()=>{
if(index < data.length -1){
    score()
    setIndex(index +1)
}else{
    setRender(true)
}

}
let TryAgain = ()=>{
setIndex(0)
setScores(0)
setRender(false)
}
return <>
{
    render ?<Result Try={TryAgain} number={scores}/>:
        <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">{index+1} To {data.length}</FormLabel>
            <FormLabel id="demo-controlled-radio-buttons-group">{data[index].question}</FormLabel>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                // value={value}
                onChange={handleChange}
                >
            {
                data[index].options.map((x : string,i: number)=>
                <FormControlLabel key={i} value={x} control={<Radio />} label={x} />
                
                )
            }
            </RadioGroup>
            <Button onClick={next} variant="text">next</Button>
        </FormControl>
            }    
    </>
}


