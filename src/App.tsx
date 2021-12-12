import {
  Button, CenteredFlexBox, Heading,
  Icon,
  Spinner,
  Text,
  Theme,
  ThemeProviderInjector
} from '@8sistemas/design-system'
import React from 'react'

export function App() {
  return (
    <ThemeProviderInjector theme={Theme}>
      <CenteredFlexBox flexDirection={'column'} padding={'sm'}>
        <Heading>H1</Heading>
        <Heading fontFace={'secondary'} elementLevel='h3'>
          H3 with Secondary
        </Heading>
        <Heading elementLevel='h5'>H5 Heading</Heading>
        <Button>Hello</Button>
        <Icon
          familyName={'FontAwesome'}
          icon={'fa-facebook'}
          color={'tertiary'}
          size={'display'}
        ></Icon>
        <Spinner size={'display'} color={'secondary'} />
        <Text fontFace={'primary'} fontWeight="bold">
          Primary Bold text
        </Text>
        <Text fontFace={'secondary'} fontWeight="bold">
          Secondary Bold text
        </Text>
      </CenteredFlexBox>
    </ThemeProviderInjector>
  )
}
