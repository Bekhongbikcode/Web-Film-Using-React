import React, {useState} from "react";
import { Button, Card, Container, Icon, Select, Textarea, TextInput } from "react-materialize";
import { json } from "react-router-dom";

function Contacts() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [checking, setChecking] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = { name, phone, email, checking, content};
        console.log(obj);
    };

    return (
        <Container>
            <Card>
                <h3>Contact Us</h3>
                <form onSubmit={handleSubmit}>
                    <TextInput id="TextInput-38" label="Your Name"  onChange={e => setName(e.target.value)}/>
                    <TextInput id="TextInput-39" label="Your Phone" onChange={e => setPhone(e.target.value)}/>
                    <TextInput email id="TextInput-41" label="Email" onChange={e => setEmail(e.target.value)} validate />
                    <Select id="Select-46" multiple={false} onChange={e => setChecking(e.target.value)} value="">
                        <option disabled value="">
                            Choose Your Favorite Type of Movie
                        </option>
                        <option value="1">
                            Horor
                        </option>
                        <option value="2">
                            Comedian
                        </option>
                        <option value="3">
                            Long Movie
                        </option>
                    </Select>
                    <Textarea icon={<Icon>mode_edit</Icon>} id="Textarea-28" label="Your content" onChange={e => setContent(e.target.value)}/>
                    <Button style={{ marginBottom: "10px" }}>Submit</Button>
                </form>
            </Card>
        </Container>
    )
}

export default Contacts;