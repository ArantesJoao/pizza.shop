import { Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { TableCell, TableRow } from '@/components/ui/table'

export function OrderTableSkeleton() {
  return Array.from({ length: 10 }).map((_, i) => {
    return (
      <TableRow key={i}>
        <TableCell>
          <Button disabled variant="outline" size="xs">
            <Search className="h-3 w-3" />
            <span className="sr-only">Order details</span>
          </Button>
        </TableCell>
        <TableCell>
          {/* OrderID */}
          <Skeleton className="h-4 w-[185px]" />
        </TableCell>
        <TableCell>
          {/* Placed */}
          <Skeleton className="h-4 w-[120px]" />
        </TableCell>
        <TableCell>
          {/* Status */}
          <div className="flex items-center gap-2">
            <Skeleton className="h-2 w-2 rounded-full" />
            <Skeleton className="h-4 w-[100px]" />
          </div>
        </TableCell>
        <TableCell>
          {/* Customer name */}
          <Skeleton className="h-4 w-[180px]" />
        </TableCell>
        <TableCell>
          {/* Total */}
          <Skeleton className="h-4 w-[64px]" />
        </TableCell>
        <TableCell>
          {/* Action button */}
          <Skeleton className="h-4 w-[92px]" />
        </TableCell>
        <TableCell>
          {/* Cancel */}
          <Skeleton className="h-4 w-[92px]" />
        </TableCell>
      </TableRow>
    )
  })
}
