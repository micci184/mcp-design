import React from 'react';
import { Typography } from '@/components/typography/Typography';

const TypographyTestPage = () => {
  return (
    <div className="p-10 space-y-4">
      <Typography variant="h1">This is an H1 Heading</Typography>
      <Typography variant="h2">This is an H2 Heading</Typography>
      <Typography variant="h3">This is an H3 Heading</Typography>
      <Typography variant="p">This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</Typography>
      <Typography variant="a" href="#">This is a link.</Typography>
      <Typography variant="small">This is a small text for footnotes or captions.</Typography>
    </div>
  );
};

export default TypographyTestPage;
