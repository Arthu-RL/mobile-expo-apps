import { View, Text } from 'react-native';
import { useEffect, useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { styles } from './style';
import { TotalView } from '../../components/TotalView';
import { useEventContext } from '../../hooks/useEvents';

export function Totals() {
  const [totals, setTotals] = useState<Record<string, number>>({});
  const { dlist, refreshDList } = useEventContext();

  useFocusEffect(
    useCallback(() => {
      refreshDList();
    }, [])
  );

  useEffect(() => {
    const newTotals: Record<string, number> = {};

    dlist.forEach((item) => {
      const city = item.city.toLowerCase();
      const value = parseFloat(item.value);
      newTotals[city] = (newTotals[city] || 0) + value;
    });

    setTotals(newTotals);
  }, [dlist.length]);

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>Totais por Cidade</Text>
      </View>

      <View style={styles.transactions}>
        {Object.entries(totals).map(([key, value]) => (
          <TotalView key={key} name={key} total={value} />
        ))}
      </View>
    </View>
  );
}
