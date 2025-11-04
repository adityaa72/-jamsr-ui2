import { FileIcon, RefreshIcon } from "@jamsrui/icons";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Text,
} from "@jamsrui/react";

const CustomTableEmptyState = () => {
  return (
    <TableRow>
      <TableCell colSpan={3}>
        <div className="py-12 text-center flex flex-col gap-2 items-center">
          <div className="bg-default p-2 rounded-lg">
            <FileIcon className="size-6" />
          </div>
          <Text>No data found</Text>
          <Text className="text-foreground-secondary max-w-md text-center">
            Any assets used in projects will live here. Start creating by
            uploading your files.
          </Text>
          <Button size="xs" startContent={<RefreshIcon className="size-4" />}>
            Refresh Page
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export const TableCustomEmptyState = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableColumn>Name</TableColumn>
          <TableColumn>Role</TableColumn>
          <TableColumn>Status</TableColumn>
        </TableRow>
      </TableHeader>
      <TableBody emptySlot={<CustomTableEmptyState />} />
    </Table>
  );
};
