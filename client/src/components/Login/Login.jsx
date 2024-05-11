import React, { useState } from 'react';
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react';

const LoginPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
      window.location.href = '/dashboard';
    }, 2000);
  };

  return (
    <Box
      bg="lightblue"
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Container
        p={8}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        borderColor="white"
        textAlign="center"
        bg="white"
        color="black"
        maxW="sm"
      >
        <h1>Welcome Admin !!!</h1>
        <form>
          <FormControl>
            <FormLabel>Admin Email</FormLabel>
            <Input
              type="text"
              placeholder="Enter your username"
              value="admin@gmail.com"
              isDisabled
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value="admin"
              isDisabled
            />
          </FormControl>
          <Button colorScheme="green" mt={6} w="100%" onClick={handleLogin}>
            Login
          </Button>
          {/* AlertDialog */}
          <AlertDialog isOpen={isOpen} leastDestructiveRef={undefined}>
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader>Welcome Admin !!!</AlertDialogHeader>
                <AlertDialogBody>
                  Redirecting to the dashboard page...
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button onClick={() => setIsOpen(false)}>Cancel</Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </form>
      </Container>
    </Box>
  );
};

export default LoginPage;
