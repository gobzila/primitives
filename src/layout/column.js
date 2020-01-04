import React from 'react';

import BaseLayout from './base';

const ColumnLayout = (props) => {
  const { children, ...rest } = props;

  return (
    <BaseLayout flexDirection='column' {...rest}>
      {children}
    </BaseLayout>
  );
};

export default ColumnLayout;
