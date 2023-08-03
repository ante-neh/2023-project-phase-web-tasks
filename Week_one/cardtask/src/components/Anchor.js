import './styles.css'

export const Anchor = (props)=>{
    return  (
    <>
        {
            props.website === !""&&<a className="anchor" href={props.website}>you tube</a>
        }
    </>
    ) 
}