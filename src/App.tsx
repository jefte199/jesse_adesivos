import './App.css'
import {
  Heading,
  Box,
  Text,
  Button,
  Card,
  CardBody,
  Image,
  Stack,
  Divider,
  CardFooter,
  ButtonGroup,
  Center,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'

function App() {

  const handleRedirect = () => {
    const phoneNumber = '+5588999759560';
    const url = `https://wa.me/${phoneNumber}`;
    window.location.href = url;
  };

  return (
    <div className="App">

      <Center paddingBottom={"20px"}>
        <Box maxW='32rem'>
          <Heading mb={4}>Jessé adesivos</Heading>
          <Text fontSize='xl'>
            Profissional em emvelopamento
          </Text>
          <Button size='lg' colorScheme='blue' mt='24px'>
            Quero um orçamento
          </Button>
        </Box>
      </Center>

      <Wrap>
        <WrapItem>
          <Card maxW='sm'>
            <CardBody>
              <Image
                src='src/assets/01.png'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Placas de PIX</Heading>
                <Text>
                  Criamos placas de pagamento PIX para o seu negocio
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                  R$10
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue' onClick={handleRedirect}>
                  Obter orçamento
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </WrapItem>

        <WrapItem>
          <Card maxW='sm'>
            <CardBody>
              <Image
                src='src/assets/02.png'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Envelopamento de motos</Heading>
                <Text>
                  Melhor preço e qualidade no envelopamento da sua motoclicleta.
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                  R$ Peça orçamento
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue' onClick={handleRedirect}>
                  Obter orçamento
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </WrapItem>

        <WrapItem>
          <Card maxW='sm'>
            <CardBody>
              <Image
                src='src/assets/03.png'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Geladeiras e outros</Heading>
                <Text>
                  Envelopamos geladeiras e outros eletrodomesticos da sua casa.
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                  R$ Peça orçamento
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue' onClick={handleRedirect}>
                  Obter orçamento
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </WrapItem>
      </Wrap>
    </div >
  )
}

export default App
