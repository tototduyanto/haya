import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import DeliveryRow from './DeliveryRow';
import { getNodesFromConnection } from '../../utils/graphql';
import { WebHookSettings_info } from './__generated__/WebHookSettings_info.graphql';

interface Props {
  deliveries: WebHookSettings_info['webhookDeliveries'];
}

export default (props: Props) => {
  const deliveries = props.deliveries ? getNodesFromConnection(props.deliveries) : [];
  return (
    <Table style={{ tableLayout: 'auto' }}>
      <TableBody>
        {deliveries.map((delivery: any) => (
          <DeliveryRow key={delivery.__id} delivery={delivery} />
        ))}
      </TableBody>
    </Table>
  );
};
