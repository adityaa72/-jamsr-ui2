"use client";

import { faker } from "@faker-js/faker";
import { Avatar, Text } from "@jamsrui/react";
import type { ColumnDef } from "@tanstack/react-table";

type User = {
  userId: string;
  username: string;
  email: string;
  avatar: string;
  country: string;
  registeredAt: Date;
};

export function createRandomUser(): User {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    country: faker.location.country(),
    registeredAt: faker.date.past(),
  };
}

export const USERS: User[] = faker.helpers.multiple(createRandomUser, {
  count: 100,
});

export async function fetchData(options: {
  pageIndex: number;
  pageSize: number;
}) {
  // Simulate some network latency
  await new Promise((r) => setTimeout(r, 500));

  const data = USERS;
  return {
    rows: data.slice(
      options.pageIndex * options.pageSize,
      (options.pageIndex + 1) * options.pageSize
    ),
    pageCount: Math.ceil(data.length / options.pageSize),
    rowCount: data.length,
  };
}

export const COLUMNS = [
  {
    accessorKey: "userId",
    header: "ID",
    cell({ row: { original } }) {
      return (
        <div className="flex gap-2 items-center">
          <Avatar src={original.avatar} />
          <div className="flex flex-col gap-1">
            <Text>{original.username}</Text>
            <Text variant="caption" className="text-foreground-secondary">
              {original.email}
            </Text>
          </div>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "country",
    header: "Country",
    accessorFn: (row) => row.country,
  },
  {
    accessorKey: "registeredAt",
    header: "Registered At",
    accessorFn: (row) => row.registeredAt.toLocaleDateString(),
  },
] satisfies ColumnDef<User>[];
