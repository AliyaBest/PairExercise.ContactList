import React from 'react';
import ContactRow from './ContactRow';


const ContactList = (props) => {
    // console.log("props: " + props);
    // const contacts = props.contacts;
    return (<table>
        <tbody>
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
            </tr>
            <ContactRow ob={props}/>
        </tbody>
    </table>)
}

export default ContactList;