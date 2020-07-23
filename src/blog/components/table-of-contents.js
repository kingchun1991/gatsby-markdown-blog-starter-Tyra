import React from 'react'
import { Link } from 'gatsby'


export default ({ headings }) => (
    <ul>
      {headings.items
        .map(item => (
            <li key={item.title}>
              <Link to={item.url}>{item.title}</Link>
            </li>
          ))}
    </ul>
  )

// export default ({headings}) => <pre>{JSON.stringify(headings.items, null, 2)}</pre>