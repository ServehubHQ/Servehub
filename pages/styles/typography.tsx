import { Card, CardContent, Divider, Typography } from '@material-ui/core'
import { Page } from '../../components/Page'

const typographyVariants: (
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'button'
  | 'overline'
)[] = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'caption',
  'button',
  'overline',
]

export default function StylesTypographyPage() {
  return (
    <Page title='Typography'>
      <Card>
        {typographyVariants.map((variant) => (
          <>
            <CardContent>
              <Typography variant={variant}>
                {variant} - The quick brown fox jumps over the lazy dog
              </Typography>
            </CardContent>
            <Divider />
          </>
        ))}
      </Card>
    </Page>
  )
}
