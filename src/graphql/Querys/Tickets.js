import gql from "graphql-tag";

export const GET_TICKETS =
  gql`
  query getDate(
    $date_start: String!
    $hour_start: String!
    $date_end: String!
    $hour_end: String!
  ) {
    GetTicket(
        date_start: $date_start
        hour_start: $hour_start
        date_end: $date_end
        hour_end: $hour_end      
    ) {
        tickets {
            calle
            cantidad
            ciudad
            colonia
            cp
            createdAt
            fecha
            fechaEstimada
            noPedido
            sku
            tipoPago
        }
        statusCode
            error {
                message
                path
            }
        }
    }
`;