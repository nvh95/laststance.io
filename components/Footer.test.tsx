import { render } from '@testing-library/react'
import React from 'react'

import { Footer } from './Footer'

test('Footer', () => {
  const { container } = render(<Footer />)
  expect(container).toHaveTextContent(
    'Copyright © 2021 Laststance.io All rights reserved.'
  )
})
