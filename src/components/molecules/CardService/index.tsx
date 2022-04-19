import { ServiceMock } from 'src/__mocks__/service'
import { Card } from './style'

const CardService = () => {
  return (
    <>
      {ServiceMock.map(item => (
        <Card>
          <img src={item.img} alt="*" />
          <h5>{item.title}</h5>
          <p>{item.describe}</p>
        </Card>
      ))}
    </>
  )
}

export default CardService
