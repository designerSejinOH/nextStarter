import * as S from './styles'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'
import { CiMenuBurger, CiCircleRemove } from 'react-icons/ci'

interface HeaderProps {
  title: string
}

export function Header(props: HeaderProps) {
  const { title } = props
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false)

  return (
    <>
      <S.Header>
        <S.HeaderLogo
          onClick={() => {
            router.pathname === '/' ? router.reload() : router.push('/')
          }}>
          {title}
        </S.HeaderLogo>
        <S.MenuButton>
          <div
            onClick={() => {
              setIsMenuOpen(!isMenuOpen)
            }}>
            {!isMenuOpen ? <CiMenuBurger /> : <CiCircleRemove />}
          </div>
        </S.MenuButton>
      </S.Header>
      <AnimatePresence>
        {isMenuOpen && (
          <MenuModal
            onHandleMenu={(isMenuOpen: boolean) => {
              setIsMenuOpen(isMenuOpen)
            }}
          />
        )}
      </AnimatePresence>
    </>
  )
}

interface MenuModalProps {
  onHandleMenu: (isMenuOpen: boolean) => void
}

export function MenuModal(props: MenuModalProps) {
  const { onHandleMenu } = props
  const router = useRouter()
  const onClickEvent = (path: string) => () => {
    router.push(`/${path}`)
    onHandleMenu(false)
  }

  return (
    <S.MenuModal>
      <S.MenuModalContent>
        <S.MenuModalItem onClick={onClickEvent('#')}>
          <span>submenu-1</span>
          <S.MenuModalItemHidden>description </S.MenuModalItemHidden>
        </S.MenuModalItem>
        <S.MenuModalItem onClick={onClickEvent('#')}>
          <span>submenu-2</span>
          <S.MenuModalItemHidden>description </S.MenuModalItemHidden>
        </S.MenuModalItem>
        <S.MenuModalItem onClick={onClickEvent('#')}>
          <span>submenu-3</span>
          <S.MenuModalItemHidden>description</S.MenuModalItemHidden>
        </S.MenuModalItem>
      </S.MenuModalContent>
    </S.MenuModal>
  )
}
