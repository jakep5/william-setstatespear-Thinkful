import React from 'react'
import POEMS from './poems'

export default function PoemPage(props) {
  const poem = POEMS.find(p => /* Searches POEMS array for the poem with props.match.params.poemId */
    p.id === props.match.params.poemId
  )
  return (
    <article className='Poem'>
      <h2>{poem.title}</h2>
      {poem.content.map((p, i) =>
        (p === '')
          ? <br key={i} />
          : <p key={i}>{p}</p>
      )}
    </article>
  )
}
