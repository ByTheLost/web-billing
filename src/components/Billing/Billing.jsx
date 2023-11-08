import { Input, Box, FormControl, Text, Divider, SimpleGrid, FormLabel } from '@chakra-ui/react'

function Billing() {
  return (
    <>
      <Box m='2em' boxShadow='md' p='6' rounded='md' bg='white'>
        <Text fontWeight='bold' fontSize='4xl'>Factura</Text>
        <Box m='2em' boxShadow='lg' p='6' rounded='md'>
          <Text fontSize='2xl'>Datos del Documento</Text>
          <Divider mb='2em'/>
          <SimpleGrid columns={3} spacing={5}>
            <FormControl>
              <FormLabel color='gray'>Nombre</FormLabel>
              <Input label='test'></Input>
            </FormControl>
            <FormControl>
              <FormLabel color='gray'>Email</FormLabel>
              <Input></Input>
            </FormControl>
            <FormControl>
              <FormLabel color='gray'>Contra</FormLabel>
              <Input></Input>
            </FormControl>
          </SimpleGrid>
        </Box>
        <Box m='2em' boxShadow='lg' p='6' rounded='md'>
          <Text fontSize='2xl'>Datos del Documento</Text>
          <Divider mb='2em'/>
          <SimpleGrid columns={3} spacing={5}>
            <FormControl>
              <FormLabel color='gray'>Nombre</FormLabel>
              <Input label='test'></Input>
            </FormControl>
            <FormControl>
              <FormLabel color='gray'>Email</FormLabel>
              <Input></Input>
            </FormControl>
            <FormControl>
              <FormLabel color='gray'>Contra</FormLabel>
              <Input></Input>
            </FormControl>
          </SimpleGrid>
        </Box>
        <Box m='2em' boxShadow='lg' p='6' rounded='md'>
          <Text fontSize='2xl'>Datos del Documento</Text>
          <Divider mb='2em'/>
          <SimpleGrid columns={3} spacing={5}>
            <FormControl>
              <FormLabel color='gray'>Nombre</FormLabel>
              <Input label='test'></Input>
            </FormControl>
            <FormControl>
              <FormLabel color='gray'>Email</FormLabel>
              <Input></Input>
            </FormControl>
            <FormControl>
              <FormLabel color='gray'>Contra</FormLabel>
              <Input></Input>
            </FormControl>
          </SimpleGrid>
        </Box>
        <Box m='2em' boxShadow='lg' p='6' rounded='md'>
          <Text fontSize='2xl'>Datos del Documento</Text>
          <Divider mb='2em'/>
          <SimpleGrid columns={3} spacing={5}>
            <FormControl>
              <FormLabel color='gray'>Nombre</FormLabel>
              <Input label='test'></Input>
            </FormControl>
            <FormControl>
              <FormLabel color='gray'>Email</FormLabel>
              <Input></Input>
            </FormControl>
            <FormControl>
              <FormLabel color='gray'>Contra</FormLabel>
              <Input></Input>
            </FormControl>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  )
}

export default Billing
