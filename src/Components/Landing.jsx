import Header from './Header'
import Card from './Card'
import Container from './Container'

function Landing({currentUser}) {
  return (
    <>
      <Header username={currentUser} />
      <Card />
      <Container />
   
    </>
  )
}

export default Landing
