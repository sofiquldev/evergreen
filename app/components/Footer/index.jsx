import { Content, Button, Widget, List } from '@/app/components'

import footerStyle from './footer.module.scss'

export default function Footer() {
  let Links1 = [
    {url:'#', label: 'Home'},
    {url:'#', label: 'Services'},
    {url:'#', label: 'Solar'},
    {url:'#', label: 'Home improvment'},
    {url:'#', label: 'Contact us'},
  ]
  let Links2 = [
    {url:'#', label: 'Facebook'},
    {url:'#', label: 'Instagram'},
  ]
  let Links3 = [{url:'tel:23232323', label: '(915) 271 22 74'},]
  return(
    <footer className={ footerStyle.main }>
      <div className="container">
        <div className={ footerStyle.inner }>
          <Content className="text-white text-start">
            <h4>Evergreen</h4>
            <h1>Come on join <br />Us <strong>Now!</strong></h1> 
            <Button href="#" className="btn-primary mt-6 inline-flex" >Lets Talk</Button>
          </Content>
          <div className={ footerStyle.widgets }>
            <Widget title="Navigate">
              <List type="link" items={ Links1 } />
            </Widget>

            <Widget title="Follow">
              <List type="link" items={ Links2 } />
            </Widget>

            <Widget title="Call us">
              <List type="link" items={ Links3 } />
            </Widget>
          </div>
        </div>

        <div className={ footerStyle.copyright }>
          <p className="text-white">© Copyright 2023 Evergreen - All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}



