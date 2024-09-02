import React from 'react';
import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => (
  <>
    <h2>Mailboxes</h2>
    <ul>
      {mailboxes.map((currentMailbox) => (
        <li key={currentMailbox._id}>
          <Link to={`/mailboxes/${currentMailbox._id}`}>Box #{currentMailbox._id}</Link>
        </li>
      ))}
    </ul>
  </>
);

export default MailboxList;