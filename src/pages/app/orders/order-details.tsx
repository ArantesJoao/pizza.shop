import { useQuery } from '@tanstack/react-query'
import { formatDistanceToNow } from 'date-fns'
import { enUS } from 'date-fns/locale'

import { getOrderDetails } from '@/api/get-order-details'
import { OrderStatus } from '@/components/order-status'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export interface OrderDetailsProps {
  orderId: string
  open: boolean
}

export const OrderDetails = ({ orderId, open }: OrderDetailsProps) => {
  const { data: order } = useQuery({
    queryKey: ['order', orderId],
    queryFn: () => getOrderDetails({ orderId }),
    enabled: open, // only runs this query when the modal is open
  })

  if (!order) {
    return null
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Order {orderId}</DialogTitle>
        <DialogDescription>Order details</DialogDescription>
      </DialogHeader>

      {order && (
        <div className="space-y-6">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="text-muted-foreground">Status</TableCell>
                <TableCell className="flex justify-end">
                  <OrderStatus status={order.status} />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">
                  Customer
                </TableCell>
                <TableCell className="flex justify-end">
                  {order.customer.name}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">
                  {order.customer.phone ?? 'Not informed'}
                </TableCell>
                <TableCell className="flex justify-end">202-555-0112</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">E-mail</TableCell>
                <TableCell className="flex justify-end">
                  {order.customer.email}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">Placed</TableCell>
                <TableCell className="flex justify-end">
                  {formatDistanceToNow(order.createdAt, {
                    locale: enUS,
                    addSuffix: true,
                  })}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead className="text-right">Subtotal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {order.orderItems.map((item) => {
                return (
                  <TableRow key={item.id}>
                    <TableCell>{item.product.name}</TableCell>
                    <TableCell className="text-right">
                      {item.quantity}
                    </TableCell>
                    <TableCell className="text-right">
                      {(item.priceInCents / 100).toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      })}
                    </TableCell>
                    <TableCell className="text-right">
                      {(
                        (item.priceInCents * item.quantity) /
                        100
                      ).toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      })}
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total value</TableCell>
                <TableCell className="text-right font-medium" colSpan={3}>
                  {(order.totalInCents / 100).toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      )}
    </DialogContent>
  )
}
