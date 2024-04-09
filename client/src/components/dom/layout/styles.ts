import styled from 'styled-components'
import tw from 'twin.macro'
import { MotionModal } from '@/styles/common.styles'

export const Header = styled.div`
  ${tw`
    fixed
    top-0
    w-full
    h-12
    flex
    flex-row
    justify-between
    items-center
    text-2xl
    text-center 
    z-40
  `}
`

export const HeaderLogo = styled.button`
  ${tw`
  flex 
  items-center
  pt-1
  h-full
  px-4
  w-fit 
  active:opacity-50
  md:hover:opacity-50
  `}
`

export const MenuButton = styled.button`
  ${tw`
  flex 
  items-center 
  h-full 
  px-4 
  w-fit
  active:opacity-50
  md:hover:opacity-50
  `}
`
export const MenuModal = styled(MotionModal)`
  ${tw`
  fixed
  z-30 
  w-full 
  h-full 
  flex
  justify-center
  items-center
  backdrop-blur-md
  py-20
  px-10
  `}
`

export const MenuModalContent = styled.div`
  ${tw`
  flex
  flex-col
  w-fit
  h-full
  gap-2
  md:gap-6
  justify-center
  items-center
  md:items-start
    cursor-pointer
  `}
`
export const MenuModalItem = styled.div`
  ${tw`
  flex
  flex-col
  justify-center
  items-start
  w-full
  h-fit
  text-2xl
  active:opacity-50
  md:hover:opacity-50
  `}
`
export const MenuModalItemHidden = styled.p`
  ${tw`
  whitespace-pre
  hidden
  md:flex
  text-lg
  `}
`
