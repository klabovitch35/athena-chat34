import Form from "@athena/forge/Form";
import Root from "@athena/forge/Root";
import "@athena/forge/dist/forge.css";
import Textarea from "@athena/forge/Textarea";
import FormField from "@athena/forge/FormField"
import { Button } from "@athena/forge";
import { useState } from "react";
import List from "@athena/forge/List";
import ListItem from "@athena/forge/ListItem";

const user = {
  name: "Cory",
  email: "c@h.com"
};

const {name : myName} = user;

export function App() {
  const [message,setMessage] = useState("");
  const [messages,setMessages] = useState<string[]>([]);
  return (
    <Root>
      <h1>Chat</h1>
      <List>
      { messages.map ( (m,index) => (
       <ListItem key={index}> <p>{m}</p> </ListItem>
      ))}
      </List>
      <Form 
        includeSubmitButton = {false} 
          onSubmit={(event) => {
            event.preventDefault();
            setMessages([...messages,message])
            setMessage("");
          }
        }
        >
        <FormField 
          labelAlwaysAbove
          labelText="Message" 
          id = "message" 
          inputAs={Textarea}
            value={message}
            onChange={(event) => setMessage(event.currentTarget.value)}
        />
        <Button type="submit" text="Send" disabled={!message} />
      </Form>
    </Root>
  );
}

export default App;
