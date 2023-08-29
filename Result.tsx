import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
type propsType={
    Try: any,
number:number,
}
export default function Result(props:propsType){
let {number,Try} = props
return<>
<FormLabel>Your Scores is {number} </FormLabel>
<br />
<Button onClick={Try}>Try Again</Button>
</>
}