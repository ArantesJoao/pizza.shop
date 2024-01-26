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

export const OrderDetails = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Order dnaisd8678ada579da</DialogTitle>
        <DialogDescription>Order details</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                  <span className="font-medium text-muted-foreground">
                    Pending
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Customer</TableCell>
              <TableCell className="flex justify-end">
                João Víctor Arantes
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Phone number
              </TableCell>
              <TableCell className="flex justify-end">202-555-0112</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">E-mail</TableCell>
              <TableCell className="flex justify-end">
                arantesjoaov@gmail.com
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Placed</TableCell>
              <TableCell className="flex justify-end">6min ago</TableCell>
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
            <TableRow>
              <TableCell>Pepperoni Pizza</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">$ 19.90</TableCell>
              <TableCell className="text-right">$ 39.80</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Supreme Pizza</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">$ 24.90</TableCell>
              <TableCell className="text-right">$ 49.80</TableCell>
            </TableRow>
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total value</TableCell>
              <TableCell className="text-right font-medium" colSpan={3}>
                $ 89.60
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  )
}
