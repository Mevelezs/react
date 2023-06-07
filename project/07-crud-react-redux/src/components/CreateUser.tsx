import { Button, Card, Text, TextInput } from '@tremor/react';
import { useState } from 'react';

export default function CreateUser() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    github: '',
  });

  const handleonChange = (e) => {
    e.preventDefault();
    setUser((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

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
        onSubmit={handleSubmit}
      >
        <TextInput
          name='username'
          value={user.username}
          onChange={handleonChange}
          placeholder='Name...'
        />
        <TextInput
          name='email'
          value={user.email}
          onChange={handleonChange}
          placeholder='mail@mail.com'
        />
        <TextInput
          name='github'
          value={user.github}
          onChange={handleonChange}
          placeholder='github'
        />
        <Button
          type='submit'
          style={{ marginTop: '16px' }}
          onClick={() => {
            handleSubmit;
          }}
        >
          Create
        </Button>
      </form>
    </Card>
  );
}
