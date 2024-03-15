"use client";

type Props = {};

import { useOrganizationList } from "@clerk/nextjs";
import { Item } from "./item";

export default function List({}: Props) {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });
  if (!userMemberships.data?.length) return null;
  return (
    <ul className="space-y-4">
      {userMemberships.data.map((member) => (
        <Item
          imageUrl={member.organization.imageUrl}
          name={member.organization.name}
          id={member.organization.id}
          key={member.organization.id}
        />
      ))}
    </ul>
  );
}
