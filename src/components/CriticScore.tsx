import { Badge } from '@chakra-ui/react';
import { color } from 'framer-motion';

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let badgeColor = '';

  switch (true) {
    case score < 30:
      badgeColor = 'red.400';
      break;
    case score < 70:
      badgeColor = 'yellow.400';
      break;
    default:
      badgeColor = 'green.400';
  }

  return (
    <Badge fontSize="14px" color={badgeColor} paddingX="5px" borderRadius={2}>
      {score}
    </Badge>
  );
};

export default CriticScore;
