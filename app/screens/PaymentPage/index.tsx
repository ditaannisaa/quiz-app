import React from 'react';
import {
  View,
  Box,
  Text,
  VStack,
  Image,
  Button,
  HStack,
} from '@gluestack-ui/themed';

export default function PaymentPage({ navigation }) {
  return (
    <View
      backgroundColor="$primaryBg"
      flex={1}
      justifyContent="center"
      alignItems="center"
      gap={'$5'}
    >
      <Box
        rounded={'$3xl'}
        justifyContent="center"
        bgColor="white"
        alignItems="center"
        gap={'$4'}
        width={'90%'}
        pb={'$4'}
        py={'$4'}
      >
        <HStack>
          <Box>
            <Text fontWeight={'$bold'}>Total</Text>
          </Box>
          <Box></Box>
        </HStack>
      </Box>
    </View>
  );
}
