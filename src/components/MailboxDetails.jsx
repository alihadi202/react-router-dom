import React from 'react';
import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  const singleMail = mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  if (!singleMail) {
    return <div>Mailbox not found!</div>;
  }

  return (
    <>
      <h2 className="detailsHead">Mailbox Details</h2>
      <div className="details">
        <p>From Email: <span>{singleMail.email}</span></p>
        <p>Subject: {singleMail.subject}</p>
        <p>Message: {singleMail.message}</p>
      </div>
    </>
  );
};

export default MailboxDetails;