import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'

export const OrderTableRow = () => {
  return (
    <TableRow>
      <TableCell>
        <Button variant="outline" size="xs">
          <Search className="h-3 w-3" />
          <span className="sr-only">Order details</span>
        </Button>
      </TableCell>
      <TableCell className="font-mono text-sm font-medium">
        hd89aw7dt8wq7423ugi213
      </TableCell>
      <TableCell className="text-muted-foreground">15min ago</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span className="font-medium text-muted-foreground">Pending</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">João Víctor Arantes</TableCell>
      <TableCell className="font-medium">$ 29.90</TableCell>
      <TableCell>
        <Button variant="outline" size="xs">
          <ArrowRight className="mr-2 h-3 w-3" />
          Approve
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          <X className="mr-2 h-3 w-3" />
          Cancel
        </Button>
      </TableCell>
    </TableRow>
  )
}
