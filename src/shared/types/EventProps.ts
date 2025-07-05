import { z } from 'zod';
import { parseBRDate } from '../../utils/date';

export const eventSchema = z.object({
  id: z.number().int(),
  place: z
    .string()
    .min(4, 'O local do evento deve ter no mínimo 4 caracteres.'),
  name: z.string().min(6, 'O nome do evento deve ter no mínimo 6 caracteres.'),
  city: z
    .string()
    .min(6, 'A cidade do evento deve ter no mínimo 6 caracteres.'),
  estate: z
    .string()
    .length(2, 'O estado deve conter exatamente 2 caracteres.')
    .transform((val) => val.toUpperCase()),
  date: z
    .string()
    .refine((val) => parseBRDate(val) !== null, {
      message: 'A data deve estar no formato DD/MM/AAAA e ser válida.',
    })
    .transform((val) => parseBRDate(val)),
  value: z
    .string()
    .refine((val) => !isNaN(parseFloat(val.replace(',', '.'))), {
      message: 'Por favor, informe um valor numérico válido.',
    })
    .refine((val) => parseFloat(val.replace(',', '.')) > 0, {
      message: 'O valor deve ser maior que zero.',
    })
    .transform((val) => parseFloat(val.replace(',', '.')).toFixed(2)),
});

export type EventProps = z.infer<typeof eventSchema>;
