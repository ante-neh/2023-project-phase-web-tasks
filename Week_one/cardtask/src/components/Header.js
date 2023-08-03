import './styles.css'
import { Avater } from './Avater'
import { Name } from './Name'

export const Header = (props)=>{
    return(
        <div className="header">
                <Avater image= {props.image}/>
                <Name name = {props.name}/>
            </div>
    )
}