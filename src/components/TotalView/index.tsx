import { View, Text } from 'react-native';
import { styles } from './style';

type TotalViewProps = {
  name: string;
  total: number;
};

export function TotalView(props: TotalViewProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        Cidade:{' '}
        {props.name
          .split(' ')
          .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(' ')}
      </Text>

      <Text style={styles.amount}>Total: {props.total}</Text>
    </View>
  );
}
