import { useState, useEffect } from 'react';
import { createConnection } from './Chat';

export default function ChatApp() {
  const [roomId, setRoomId] = useState<string>('general');
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>
        {show ? 'Close chat' : 'Open chat'}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
}

interface ChatRoomProps{
    roomId : string
}

function ChatRoom({ roomId  } : ChatRoomProps) {
    const [serverUrl, setServerUrl] = useState('https://localhost:1234');
  
    useEffect(() => {
      const connection = createConnection(serverUrl, roomId);
      connection.connect();
      return () => {
        connection.disconnect();
      };
    }, [roomId, serverUrl]);
  
    return (
      <>
        <label>
          Server URL:{' '}
          <input
            value={serverUrl}
            onChange={e => setServerUrl(e.target.value)}
          />
        </label>
        <h1>Welcome to the {roomId} room!</h1>
      </>
    );
  }
  
  