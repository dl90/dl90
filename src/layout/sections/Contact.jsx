import React, { useState, useEffect } from 'react'
import s from './Contact.module.css'

export default function Contact (props) {
  const [subject, setSubject] = useState('')
  const [replyEmail, setReplyEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const [submitDisable, setSubmitDisable] = useState(true)

  const submit = async (e) => {
    e.preventDefault()
    setSubmitDisable(true)

    const payload = {
      access_token: 'hndopqhgsa8at0himqiyjd92',
      subject,
      reply_to: replyEmail,
      text: message
    }
    setStatus('Sending')

    const res = await window.fetch('https://postmail.invotes.com/send', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(payload)
    })
    res.status === 200
      ? setStatus('Message sent')
      : setStatus('An error occurred')

    setSubject('')
    setReplyEmail('')
    setMessage('')
  }

  const validate = (email) => /^[a-zA-Z0-9._-]{2,}@[a-zA-Z0-9-]{2,}\.[a-zA-Z]{2,}/.test(email)

  useEffect(() => {
    setSubmitDisable(!(subject.trim().length > 2 && validate(replyEmail.trim()) && message.trim().length > 10))
  }, [subject, replyEmail, message])

  return (
    <section ref={props.refProps.Contact}>
      <h1 className='sectionTitle'>Contact</h1>
      <div className='content'>
        <form onSubmit={submit} className={s.contactForm}>
          <input
            className={s.input}
            type='text'
            name='subject'
            placeholder='Subject'
            required
            value={subject}
            onChange={e => setSubject(e.target.value)}
          />

          <input
            className={s.input}
            type='email'
            name='reply_to'
            placeholder='Return Email'
            required
            multiple={false}
            value={replyEmail}
            onChange={e => setReplyEmail(e.target.value)}
          />

          <textarea
            className={s.textarea}
            name='text'
            placeholder='Message'
            required
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <span>{status}</span>
          <button type='submit' disabled={submitDisable} className={s.submitBtn}>Send</button>
          <span>Powered by <a href='https://postmail.invotes.com' target='_blank' rel='noreferrer'>PostMail</a></span>
        </form>
      </div>
    </section>
  )
}
