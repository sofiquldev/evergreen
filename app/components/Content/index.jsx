import content from './content.module.scss'

export default function Content(props){
  
  return(
    <div className={`text-center sm:text-left ${content.main} ${props.className && props.className}`} style={props.style && props.style}>
      { props.children }
    </div>
  )
}