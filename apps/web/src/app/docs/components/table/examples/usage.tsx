import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableFooter,
  TableHeader,
  TableRow,
} from "@jamsrui/react";

export const TableUsage = () => {
  return (
    <Table aria-label="Example static collection table" variant="solid">
      <TableHeader>
        <TableRow>
          <TableColumn>Name</TableColumn>
          <TableColumn>Role</TableColumn>
          <TableColumn>Status</TableColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Tony Reichert</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Zoey Lang</TableCell>
          <TableCell>Technical Lead</TableCell>
          <TableCell>Paused</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Fisher</TableCell>
          <TableCell>Senior Developer</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>William Howard</TableCell>
          <TableCell>Community Manager</TableCell>
          <TableCell>Vacation</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>
            <div className="flex justify-between items-center">
              <span className="text-sm text-foreground-secondary">
                Showing 4 of 4 employees
              </span>
              <Button color="primary" size="xs">
                View All
              </Button>
            </div>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};
