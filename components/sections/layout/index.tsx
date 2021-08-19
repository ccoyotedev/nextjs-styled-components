import { Footer, Header } from 'components/sections'
import { Container } from 'components/layout'
import { useGlobal } from 'context/GlobalContext'
import { ErrorModal } from 'components/ui'

interface Props {
  children: React.ReactNode;
}

export const Layout = ({children}: Props) => {
  const { state: {error} , dispatch } = useGlobal();

  const handleCloseErrorModal = () => {
    dispatch({
      type: "SET_ERROR",
      error: undefined,
    })
  }

  return (
    <>
      {error && <ErrorModal error={error} onHandleClose={handleCloseErrorModal} />}
      <Header />
      <Container>
        {children}
      </Container>
      <Footer />
    </>
  )
}
