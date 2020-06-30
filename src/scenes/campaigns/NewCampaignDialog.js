import React from 'react';
import Dialog from '../../components/Dialog';
import Form from '../../components/Form';
import Fieldset from '../../components/Fieldset';
import Label from '../../components/Label';
import TextInput from '../../components/TextInput';
import ButtonRow from '../../components/ButtonRow';
import Button from '../../components/Button';
import SubmitButton from '../../components/SubmitButton';
import useAutoFocus from '../../hooks/auto-focus';
import useValidation from '../../hooks/validation';

const formConfig = onCreate => ({
  fields: {
    name: {
      isRequired: { message: 'Please give your campaign a name' },
    },
  },
  onSubmit: ({ values }) => {
    onCreate(values);
  },
});

const NewCampaignDialog = ({
  onCreate,
  onCancel,
}) => {
  const autoFocusRef = useAutoFocus();
  const { getFieldProps, getFormProps, errors } = useValidation(formConfig(onCreate));

  return (
    <Dialog title="Create campaign">
      <Form {...getFormProps()}>
        <Fieldset>
          <Label htmlFor="name">Name</Label>
          <TextInput ref={autoFocusRef} id="name" {...getFieldProps('name')} />
          {errors.name && <div className="error">{errors.name}</div>}
        </Fieldset>
        <ButtonRow>
          <Button onClick={onCancel}>Cancel</Button>
          <SubmitButton>Create</SubmitButton>
        </ButtonRow>
      </Form>
    </Dialog>
  );
};

export default NewCampaignDialog;
