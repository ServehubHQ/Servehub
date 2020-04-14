import WorkIcon from '@material-ui/icons/Work'
import React from 'react'
import {
  BooleanInput,
  Datagrid,
  DateField,
  Edit,
  BooleanField,
  List,
  SimpleForm,
  TextField,
  TextInput,
  ReferenceField,
} from 'react-admin'

export const JobIcon = WorkIcon

export const JobList = (props: any) => (
  <List {...props}>
    <Datagrid>
      <ReferenceField source='target_id' reference='targets' link='show'>
        <TextField source='name' />
      </ReferenceField>
      <ReferenceField
        source='lawyer_user_id'
        reference='users'
        label='Lawyer'
        link='show'
      >
        <TextField source='name' />
      </ReferenceField>
      <ReferenceField
        source='server_user_id'
        reference='users'
        label='Server'
        link='show'
      >
        <TextField source='name' />
      </ReferenceField>
      <BooleanField source='pickup_required' />
      <DateField source='created_at' />
      <TextField source='id' />
    </Datagrid>
  </List>
)

export const JobEdit = (props: any) => (
  <Edit title='Edit Togo' {...props}>
    <SimpleForm>
      <TextInput disabled source='id' />
      <TextInput source='name' />
      <BooleanInput source='done' />
    </SimpleForm>
  </Edit>
)
