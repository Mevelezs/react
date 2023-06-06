import { Button, Card, Text, TextInput } from '@tremor/react';

export default function CreateUser() {
  return (
    <Card
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: '20px', color: 'red', fontWeight: 'bold' }}>
        Create User
      </Text>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '8px',
        }}
      >
        <TextInput name='username' placeholder='Name...' />
        <TextInput name='email' placeholder='mail@mail.com' />
        <TextInput name='github' placeholder='github' />
        <Button type='submit' style={{ marginTop: '16px' }}>
          Create
        </Button>
      </form>
    </Card>
  );
}
