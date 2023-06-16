import Link from "next/link";

export default function Button(props) {
  return(
    <div className="btn">
      {
      props.href 
        ? <Link href={props.href ?? '#'} className={`btn-default ${props.className ? props.className: 'btn-primary'}` } >
          {props.children}
          <span className="ml-2.5 icon">
            <span className="material-symbols-outlined">arrow_forward arrow_forward</span>
          </span>
          </Link>
        : <button className={`btn-default ${props.className ? props.className: 'btn-primary'}` } {...props}>{props.children}</button>
    }
  </div>
  )
}