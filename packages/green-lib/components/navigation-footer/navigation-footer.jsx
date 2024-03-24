import { Segment } from '../segment/segment.jsx'

export const NavigationFooter = props => {
  return (
    <nav className={['navigation-footer', props.className].join(' ')}>
      <Segment
        actions={props.mainActions}
        element="a"
        globals={props.globals}
        pageUrl={props.pageUrl}
      />
      <Segment
        actions={props.socialActions}
        element="a"
        globals={props.globals}
      />
    </nav>
  )
}
