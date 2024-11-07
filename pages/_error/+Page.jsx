export { Page }

// Local import
import { usePageContext } from '../../renderer/usePageContext'
import { childrenPropType } from '../../renderer/PropTypeValues'

function Page() {
  const pageContext = usePageContext()
  let { abortReason } = pageContext

  if (!abortReason) {
    abortReason = pageContext.is404
      ? 'Page not found.'
      : 'Something went wrong.'
  }

  return (
    <Center>
      <p style={{ fontSize: '1.3rem' }}>{abortReason}</p>
    </Center>
  )
}

Center.propTypes = {
  children: childrenPropType,
}

function Center({ children }) {
  return (
    <div
      style={{
        height: 'calc(100vh - 100px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </div>
  )
}
