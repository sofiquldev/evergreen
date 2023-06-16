import Link from 'next/link'
import listStyle from './list.module.scss'


export default function List(props) {
  return(
    <ul className={ `${listStyle.list} ${ props.className }` }>
      {props.items.map((item, index) => <li key={ index }>
        { 
          props.type === 'link' 
            ? <Link className={ listStyle.list__item } href={ item.url } target={ item.target ? item.target : '_self'}>{ item.label }</Link>
            : <span className={ listStyle.list__item }>{ item }</span> 
        }
      </li>)}
    </ul>
  )
}


export const IconList = props => {
  return(
    <ul className={ `${listStyle.iconList} ${ props.className }` }>
      {props.items.map((item, index) => <li key={ index } className={ listStyle.iconList__item }>
        <span className={ `material-symbols-outlined ${ listStyle.iconList__icon }` }>check</span> 
        { item }
      </li>)}
    </ul>
  )
}