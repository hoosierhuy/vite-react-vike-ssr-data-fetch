export { Page }

import { TaylorSwift } from './PrincessOfDarkness'

function Page() {
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Posting data, (from the client side) to an <code>API</code>{' '}
          <TaylorSwift />
        </li>
      </ul>
    </>
  )
}
