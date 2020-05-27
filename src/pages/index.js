import React from "react";
import Link from 'gatsby-link';

export default function Home() {
  return(
    <div>
      <h1>Bonjour!</h1>
      <Link to='/counter/'>Counter</Link>
    </div>
  )
}
