import {
  DateField,
  NumberField,
  Show,
  SimpleShowLayout,
  TextField,
} from 'react-admin'

export const PlanShow = (props: any) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source='name' />
      <TextField source='duration' />
      <NumberField source='attempts' />
      <NumberField source='bounty' />
      <NumberField source='fee' />
      <DateField source='updated_at' />
      <TextField source='id' />
    </SimpleShowLayout>
  </Show>
)
