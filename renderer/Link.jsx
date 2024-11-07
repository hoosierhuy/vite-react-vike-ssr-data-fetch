export { Link }

// Library imports
import PropTypes from 'prop-types'

// Local imports
import { usePageContext } from './usePageContext'

Link.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
}

function Link(props) {
  const pageContext = usePageContext()
  const { urlPathname } = pageContext
  const { href } = props

  const isActive =
    href === '/' ? urlPathname === href : urlPathname.startsWith(href)

  const className = [props.className, isActive && 'is-active']
    .filter(Boolean)
    .join(' ')

  return <a {...props} className={className} />
}
