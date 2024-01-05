import React from 'react';
import { FaWindows, FaApple, FaXbox, FaLinux, FaAndroid, FaPlaystation } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BiGlobe } from 'react-icons/bi';
import { Platform } from '../hooks/useGames';
import { Text, Icon, HStack } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';

interface PlatfoemIconListProps {
  platforms: Platform[];
}

const PlatfoemIconList: React.FC<PlatfoemIconListProps> = ({ platforms }) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    xbox: FaXbox,
    playstation: FaPlaystation,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BiGlobe,
  };

  return (
    <>
      <HStack marginY={1}>
        {platforms.map((platform) => (
          <Text key={platform.id}>
            <Icon as={iconMap[platform.slug]} color="gray.500" />
          </Text>
        ))}
      </HStack>
    </>
  );
};

export default PlatfoemIconList;
