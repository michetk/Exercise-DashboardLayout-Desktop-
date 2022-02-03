import { Menu, ChevronLeft } from '@styled-icons/material'
import { useCallback, useState } from 'react'

export const ToggleHeaderMenu = () => {
  const [isExpanded, setExpanded] = useState(false)

  const toggle = useCallback(() => {
    setExpanded((prev) => !prev)
  }, [])

  return isExpanded ? (
    <ChevronLeft onClick={toggle} />
  ) : (
    <Menu onClick={toggle} />
  )
}
