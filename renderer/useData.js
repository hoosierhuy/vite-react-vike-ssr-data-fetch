// https://vike.dev/useData
export { useData }

import { usePageContext } from './usePageContext'

function useData() {
  const { data } = usePageContext()

  return data
}
