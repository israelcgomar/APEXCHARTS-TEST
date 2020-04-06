import React from 'react'
import MaterialTable from 'material-table'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 740,
  },
});


export default function  Table(tickets) {
    
    const classes = useStyles();

    let Tickets = [];
    const dataTickets = tickets.data.GetTicket.tickets

    dataTickets.map((ticket) => {
      const objectTicket = {
        sku: ticket.sku, 
        createdAt: ticket.createdAt, 
        suburb: ticket.noPedido, 
        zipCode: ticket.cp, 
        delegation: ticket.ciudad, 
        typeOfPay: ticket.tipoPago, 
        edd: ticket.fechaEstimada
      }

      return Tickets.push(objectTicket)

    })

    const rows = Tickets;

      
    return (
        <MaterialTable className={classes.container}
          title="Ordenes FEE"
          
          columns={[
            { title: 'Sku', field: 'sku' },
            { title: 'Fecha de Creación', field: 'createdAt' },
            { title: 'Colonia', field: 'suburb' },
            { title: 'Código Postal', field: 'zipCode' },
            { title: 'Delegación', field: 'delegation' },
            { title: 'Tipo de Pago', field: 'typeOfPay' },
            { title: 'Fecha Estimada', field: 'edd' }
          ]}

          data={rows} 
          localization={{
            body: {
              emptyDataSourceMessage: 'No hay información'
            },
            pagination: {
              labelRowsSelect: 'filas',
              labelDisplayedRows: '{count} de {from}-{to}',
              firstTooltip: 'Primera pagina',
              previousTooltip: 'pagina anterior',
              nextTooltip: 'pagina siguiente',
              lastTooltip: 'Ultima pagina'
            },
            header: {
              actions: 'Opciones'
            },
            toolbar: {
              searchPlaceholder: 'Buscar'
            }
          }}       
          options={{
            search: true
          }}
      />
    )
}