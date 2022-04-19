import { ServiceMock } from 'src/__mocks__/service'

const CardService = () => {
  return (
    <>
      {ServiceMock.map(item => (
        <div>
          <img src={item.img} alt="*" />
          <h5>{item.title}</h5>
          <p>{item.describe}</p>
        </div>
      ))}
    </>
  )
}

export default CardService
