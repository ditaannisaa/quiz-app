import {
  View,
  Text,
  Button,
  Box,
  HStack,
  VStack,
  Link,
  LinkText,
  Image,
  Avatar,
  AvatarFallbackText,
} from '@gluestack-ui/themed';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function HomePage({ navigation }) {
  const { logout } = useContext(AuthContext);

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
        bgColor="$secondaryBg"
        alignItems="center"
        gap={'$2'}
        width={'90%'}
        pb={'$4'}
        py={'$4'}
      >
        <HStack space="4xl">
          <VStack
            width={'50%'}
            padding={5}
          >
            <Text
              fontSize="$xl"
              fontWeight="bold"
              color="white"
            >
              Hello,
            </Text>
            <HStack>
              <Link alignSelf="center">
                <LinkText
                  fontSize="$xl"
                  fontWeight="bold"
                  color="white"
                  mt={2}
                >
                  JhonDoe
                </LinkText>
              </Link>
              <Button
                onPress={() => {
                  logout();
                }}
                padding={5}
                bgColor="none"
              >
                <Ionicons
                  name="log-out-outline"
                  size={25}
                  color="white"
                  fontWeight="bold"
                  alignSelf="flex-start"
                />
              </Button>
            </HStack>
          </VStack>
          <Box
            rounded={'$3xl'}
            bgColor="$primaryBg"
            width={'28%'}
            height={'$9'}
            alignItems="center"
            justifyContent="center"
          >
            <HStack
              mt={13}
              padding={3}
            >
              <Button
                bgColor="none"
                onPress={() => {
                  navigation.navigate('Shop');
                }}
              >
                <Ionicons
                  name="add-circle-outline"
                  size={25}
                  color="white"
                  fontWeight="bold"
                  alignSelf="flex-start"
                />
              </Button>
              <HStack mr={20}>
                <Image
                  source={require('../../../assets/diamonds/diamond-icon.png')}
                  alt="Diamond icon"
                  size="2xs"
                />
                <Text
                  fontSize="$xl"
                  fontWeight="semibold"
                  color="white"
                  pt={4}
                  pl={4}
                >
                  1
                </Text>
              </HStack>
            </HStack>
          </Box>
        </HStack>
        <Box>
          <Image
            source={require('../../../assets/adaptive-icon.png')}
            alt="Logo"
            size="xl"
            role="img"
          />
        </Box>
        <Box
          rounded={'$2xl'}
          justifyContent="center"
          alignItems="center"
          gap={'$2'}
          bgColor="$tertiaryBg"
          width={'90%'}
          padding={8}
          py={'$6'}
        >
          <VStack
            space={'md'}
            justifyContent="center"
          >
            <Box
              justifyContent="center"
              alignItems="center"
            >
              <Button
                rounded={'$2xl'}
                backgroundColor="$greenButton"
                width={'80%'}
                onPress={() => {
                  navigation.navigate('Quiz');
                }}
              >
                <Text
                  color="white"
                  fontWeight="bold"
                  fontSize="$xl"
                >
                  Start Game
                </Text>
              </Button>
            </Box>

            <Box
              justifyContent="center"
              alignItems="center"
              mt={'$4'}
              mb={'$2'}
            >
              <Image
                source={require('../../../assets/crown.png')}
                alt="Logo"
                size="xs"
                role="img"
                mb={'$2'}
              />
              <Text
                fontSize="$xl"
                fontWeight="bold"
                color="white"
              >
                LeaderBoard
              </Text>
            </Box>

            <HStack>
              <Box alignSelf="flex-end">
                <Avatar
                  alignSelf="center"
                  mb={'$4'}
                >
                  <AvatarFallbackText>User Name</AvatarFallbackText>
                </Avatar>
                <Text
                  mb={'$4'}
                  color="white"
                >
                  Username
                </Text>
                <Image
                  source={require('../../../assets/leaderboard/leaderboard-2.png')}
                  alt="Leaderboard-2"
                  width={70}
                  height={35}
                  role="img"
                />
              </Box>

              <Box alignSelf="flex-end">
                <Avatar
                  alignSelf="center"
                  mb={'$6'}
                >
                  <AvatarFallbackText>User Name</AvatarFallbackText>
                </Avatar>
                <Text
                  mb={'$5'}
                  color="white"
                >
                  Username
                </Text>
                <Image
                  source={require('../../../assets/leaderboard/leaderboard-1.png')}
                  alt="Leaderboard-1"
                  width={70}
                  height={45}
                />
              </Box>
              <Box alignSelf="flex-end">
                <Avatar
                  alignSelf="center"
                  mb={'$4'}
                >
                  <AvatarFallbackText>User Name</AvatarFallbackText>
                </Avatar>
                <Text
                  mb={'$5'}
                  color="white"
                >
                  Username
                </Text>
                <Image
                  source={require('../../../assets/leaderboard/leaderboard-3.png')}
                  alt="Leaderboard-3"
                  width={70}
                  height={28}
                />
              </Box>
            </HStack>
          </VStack>
        </Box>
      </Box>
      {/* <Text
                fontSize="$xl"
                fontWeight="bold"
                color='white'
            >Home</Text>
            <Button
                onPress={() => { navigation.navigate('Quiz') }}
            >
                <ButtonText>Quiz</ButtonText>
            </Button>
            <Button
                onPress={() => { navigation.navigate('Shop') }}
            >
                <ButtonText>Shop</ButtonText>
            </Button>
            <Button
                onPress={() => { logout() }}
            >
                <ButtonText>LogOut</ButtonText>
            </Button> */}
    </View>
  );
}
