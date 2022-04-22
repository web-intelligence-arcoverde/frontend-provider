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
          <a href={item.href}>{item.name}</a>
        </li>
      ))}
    </NavigationModal>
  )
}

export default NavModal
