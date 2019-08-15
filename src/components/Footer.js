import React from 'react'

import './Footer.css'

export default () => (
  <div>
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://digd.in">ddn</a>.
        </span>
      </div>
    </footer>
  </div>
)
