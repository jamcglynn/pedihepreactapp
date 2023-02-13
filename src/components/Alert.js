import { useState } from 'react';
import { Alert } from 'reactstrap';

const HomepageAlert = () => {
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);

  return (
    <Alert color="info" isOpen={visible} toggle={onDismiss} style={{textAlign: 'center'}}>
      This site is intended for use by pediatric physical therapists for exercise prescription. Please close out of this alert to continue.
    </Alert>
  );
}

export default HomepageAlert;