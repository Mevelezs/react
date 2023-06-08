import { Button, Card, Text, TextInput } from '@tremor/react';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { User } from '../../store/users/slice';
import { useUserActions } from '../hooks/useUserActions';

export default function CreateUser() {
  const [newUser, setNewUser] = useState<User>({
    name: '',
    email: '',
    github: '',
  });

  const { addNewUser } = useUserActions();

  const handleonChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNewUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    addNewUser(newUser);
    setNewUser({
      name: '',
      email: '',
      github: '',
    });
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
          name='name'
          value={newUser.name}
          onChange={handleonChange}
          placeholder='Name...'
        />
        <TextInput
          name='email'
          value={newUser.email}
          onChange={handleonChange}
          placeholder='mail@mail.com'
        />
        <TextInput
          name='github'
          value={newUser.github}
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
