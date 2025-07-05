import { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { EventProps } from '../../shared/types/EventProps';
import { valueMsg } from '../../utils/message';

type ItemProps = {
  item: EventProps;
  removeItemCallback: (id: number) => void;
};

export function ItemView({ item, removeItemCallback }: ItemProps) {
  const event_value = parseFloat(item.value.replace(',', '.'));
  const msg = valueMsg(event_value, item.estate);

  return (
    <View style={styles.spendCard}>
      <View style={styles.cardHeader}>
        <Text style={styles.descriptionText}>{item.name}</Text>
        <TouchableOpacity
          style={styles.delButton}
          onPress={() => removeItemCallback(item.id)}
        >
          <Text style={[styles.detailLabel, { color: 'white' }]}>X</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardContentWrapper}>
        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Cidade/Estado:</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailText}>
              {item.city} - {item.estate}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Local/Data:</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailText}>
              {item.place} • {item.date}
            </Text>
          </View>
        </View>

        <View style={styles.cardSalary}>
          <Text style={styles.valueText}>Valor: R$ {event_value}</Text>
          {msg === '' ? null : <Text style={styles.alertValueText}>{msg}</Text>}
        </View>
      </View>
    </View>
  );
}
