import React, {useState} from 'react';
import Form, { Field } from 'rc-field-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { sendEmail } from '../../lib/api';

const Page = () => {
  const [display, setDisplay] = useState('');

  const postForm = ({ email }) => {
    sendEmail(email)
      .then(({ data }) => {
        console.log(data);
        setDisplay(`Successfully sent email to ${email}`);
      })
      .catch(err => {
        console.log(err);
        setDisplay(`Error while sending email : ${JSON.stringify(err, null, 2)}`);
      });
  }

  return (
    <Form
      onFinish={postForm}
      initialValues={{
        email: '',
      }}
    >
      <h2>Test login</h2>
      <Field name="email">
        <TextField id="outlined-basic" label="Email" variant="outlined" required />
      </Field>
      <Button type="submit" size="small" variant="outlined" sx={{ width: '15ch' }} startIcon={<CheckCircleOutlineIcon />}>Send Email</Button>
      <p>{display}</p>
    </Form>
  );
}

export default Page;
