import AnchorLink from 'react-anchor-link-smooth-scroll'
import { NavMock } from 'src/__mocks__/nav'
import { NavigationModal } from './style'

const NavModal = ({ setVisible }: any) => {
  return (
    <NavigationModal>
      {NavMock.map(item => (
        <li
          onClick={() => {
            setVisible(false)
          }}
        >
          <AnchorLink offset={item.offset} href={item.href}>
            {item.name}
          </AnchorLink>
        </li>
      ))}
    </NavigationModal>
  )
}

export default NavModal
