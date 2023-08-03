import './styles.css'
import { Name } from './Name'
import { Content } from './Content'
import { Anchor } from './Anchor'

export const Body = (props)=>{
    return(
        <div className="body">
                <div className="bio">
                    <Name name={"Bio"}/>
                    <Content content = {props.content} />
                </div>
                
                <div clasName="linkes">
                        <Name name = {"Website"}/>
                        <Anchor website={props.website}/>               
                </div>
            </div>
    )
}