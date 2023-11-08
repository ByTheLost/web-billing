import { useState } from 'react';
import { Input, Box, FormControl, Text, Divider, SimpleGrid, FormLabel } from '@chakra-ui/react';

function Billing() {
  const [formData, setFormData] = useState({
    fechaEmision: '',
    fechaVencimiento: '',
    medioPago: '',
    tipoNegociacion: '',
    tipoEntrega: '',
    nitEmisor: '',
    nombreComercialEmisor: '',
    correoEmisor: '',
    direccionEmisor: '',
    telefonoEmisor: '',
    numeroDocumentoReceptor: '',
    nombreComercialReceptor: '',
    correoReceptor: '',
    direccionReceptor: '',
    telefonoReceptor: '',
    numeroProducto: '',
    descripcionProducto: '',
    cantidadProducto: '',
    precioUnitarioProducto: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  console.log(formData)

  return (
    <>
      <Box m='2em' boxShadow='md' p='6' rounded='md' bg='white'>
        <Text fontWeight='bold' fontSize='4xl'>Factura</Text>
        <Box m='2em' boxShadow='lg' p='6' rounded='md'>
          <Text fontSize='2xl'>Datos del Documento</Text>
          <Divider mb='2em'/>
          <SimpleGrid columns={3} spacing={5}>
            <FormControl>
              <FormLabel color='gray'>Fecha de Emisión</FormLabel>
              <Input
                name="fechaEmision"
                placeholder='2023-11-08'
                value={formData.fechaEmision}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel color='gray'>Fecha de Vencimiento</FormLabel>
              <Input
                name="fechaVencimiento"
                placeholder='2023-12-08'
                value={formData.fechaVencimiento}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel color='gray'>Medio de Pago</FormLabel>
              <Input
                name="medioPago"
                placeholder='Tarjeta de Crédito'
                value={formData.medioPago}
                onChange={handleInputChange}
              />
            </FormControl>
          </SimpleGrid>
        </Box>
        <Box m='2em' boxShadow='lg' p='6' rounded='md'>
          <Text fontSize='2xl'>Datos del Emisor</Text>
          <Divider mb='2em'/>
          <SimpleGrid columns={3} spacing={5}>
            <FormControl>
              <FormLabel color='gray'>NIT Emisor</FormLabel>
              <Input
                name="nitEmisor"
                placeholder='123456789'
                value={formData.nitEmisor}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel color='gray'>Nombre Comercial</FormLabel>
              <Input
                name="nombreComercialEmisor"
                placeholder='Mi Empresa S.A.'
                value={formData.nombreComercialEmisor}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel color='gray'>Correo</FormLabel>
              <Input
                name="correoEmisor"
                placeholder='ejemplo@miempresa.com'
                value={formData.correoEmisor}
                onChange={handleInputChange}
              />
            </FormControl>
          </SimpleGrid>
        </Box>
        <Box m='2em' boxShadow='lg' p='6' rounded='md'>
          <Text fontSize='2xl'>Datos del Receptor</Text>
          <Divider mb='2em'/>
          <SimpleGrid columns={3} spacing={5}>
            <FormControl>
              <FormLabel color='gray'>Número de Documento</FormLabel>
              <Input
                name="numeroDocumentoReceptor"
                placeholder='987654321'
                value={formData.numeroDocumentoReceptor}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel color='gray'>Nombre Comercial</FormLabel>
              <Input
                name="nombreComercialReceptor"
                placeholder='Cliente VIP'
                value={formData.nombreComercialReceptor}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel color='gray'>Correo para Distribución</FormLabel>
              <Input
                name="correoReceptor"
                placeholder='cliente@correo.com'
                value={formData.correoReceptor}
                onChange={handleInputChange}
              />
            </FormControl>
          </SimpleGrid>
        </Box>
        <Box m='2em' boxShadow='lg' p='6' rounded='md'>
          <Text fontSize='2xl'>Detalles Del Producto</Text>
          <Divider mb='2em'/>
          <SimpleGrid columns={3} spacing={5}>
            <FormControl>
              <FormLabel color='gray'>Nro</FormLabel>
              <Input
                name="numeroProducto"
                placeholder='001'
                value={formData.numeroProducto}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel color='gray'>Descripción</FormLabel>
              <Input
                name="descripcionProducto"
                placeholder='Producto de alta calidad'
                value={formData.descripcionProducto}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel color='gray'>Cantidad</FormLabel>
              <Input
                name="cantidadProducto"
                placeholder='10'
                value={formData.cantidadProducto}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel color='gray'>Precio unitario</FormLabel>
              <Input
                name="precioUnitarioProducto"
                placeholder='25.00'
                value={formData.precioUnitarioProducto}
                onChange={handleInputChange}
              />
            </FormControl>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}

export default Billing;
