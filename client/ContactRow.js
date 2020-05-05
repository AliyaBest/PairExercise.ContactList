import React from 'react';


const ContactRow = (props) => {
    console.log(Object.keys(props.ob));
    const contacts = props.ob.contacts;
    console.log(contacts);
    return (
        contacts.map(x => {
            return (
                <tr key={x.id}>
                    <td >{x.name}</td>
                    <td >{x.phone}</td>
                    <td >{x.email}</td>
                </tr>
            )
        })
    )
}

export default ContactRow;