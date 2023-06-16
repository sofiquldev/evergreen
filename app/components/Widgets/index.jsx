import widgetStyle from './widget.module.scss'

export default function Widget(props) {
  return (
    <div className={ widgetStyle.main }>
      <h4 className={ widgetStyle.title }>{ props.title }</h4>
      { props.children }
    </div>
  )
} 