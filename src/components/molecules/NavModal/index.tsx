import { NavMock } from 'src/__mocks__/nav'
import { NavigationModal } from './style'

const NavModal = () => {
  return (
    <NavigationModal>
      {NavMock.map(item => (
        <li>
          <a href={item.href}>{item.name}</a>
        </li>
      ))}
    </NavigationModal>
  )
}

export default NavModal
