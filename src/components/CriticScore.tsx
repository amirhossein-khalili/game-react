import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let badgeColor = '';

  switch (true) {
    case score < 30:
      badgeColor = 'red.300';
      break;
    case score < 70:
      badgeColor = 'yellow.300';
      break;
    default:
      badgeColor = 'green.300';
  }

  return (
    <Badge fontSize="14px" color={badgeColor} paddingX="5px" borderRadius={2}>
      {score}
    </Badge>
  );
};

export default CriticScore;
