import React from 'react'
import Layout from '../components/Layout'

export default function HomePage() {
  return (
    <Layout>
      <div className="columns">
        <div className="column is-one-quarter">
          <div className="title">School Holidays</div>
        </div>
        <div className="column is-three-quarters">
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=dGFnYTRsNWJnbzhsNm9uOWlpZzQ4amVydmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%233F51B5"
            style={{ borderWidth: 0, height: '600px', width: '100%' }}
            width="800"
            height="600"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </Layout>
  )
}
