import React from 'react';
import Dialog from '../../components/Dialog';
import Form from '../../components/Form';
import ButtonRow from '../../components/ButtonRow';
import Button from '../../components/Button';
import SubmitButton from '../../components/SubmitButton';

const NewCampaignDialog = ({
  onCreate,
  onCancel,
}) => {
  const handleSubmit = () => {
    onCreate({});
  };

  return (
    <Dialog title="Create campaign">
      <Form onSubmit={handleSubmit}>
        <ButtonRow>
          <Button onClick={onCancel}>Cancel</Button>
          <SubmitButton>Create</SubmitButton>
        </ButtonRow>
      </Form>
    </Dialog>
  )
};

export default NewCampaignDialog;
