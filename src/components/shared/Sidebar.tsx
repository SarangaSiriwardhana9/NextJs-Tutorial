"use client";
import { User, Mail, CreditCard, Bell, Settings, Shield, FileText,LogOut,PackageSearch,CookingPot  } from "lucide-react";
import UserItem from "./UserItem";
import Link from "next/link";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { link } from "fs";

export default function Sidebar() {
  const menuList = [
    {
      group: "General",
      items: [
        {
          link: "/users",
          icon: <User />,
          text: "users",
        },
        {
          link: "/addProduct",
          icon: <PackageSearch />,
          text: "Add Product",
        },
        {
          link: "/allProducts",
          icon: <CookingPot  />,
          text: "All Products",
        },
        {
          link: "/inbox",
          icon: <Mail />,
          text: "Inbox",
        },
        {
          link: "/billing",
          icon: <CreditCard />,
          text: "Billing",
        },
        {
          link: "/notification",
          icon: <Bell />,
          text: "Notifications",
        },
      ],
    },
    {
      group: "Settings",
      items: [
        {
          link: "/general",
          icon: <Settings />,
          text: "General Settings",
        },
        {
          link: "/privacy",
          icon: <Shield />,
          text: "Privacy",
        },
        {
          link: "/logs",
          icon: <FileText />,
          text: "Logs",
        },
      ],
    },
  ];

  return (
    <div className="w-[250px] flex flex-col gap-4 min-w-[300px] border-r bg-gradient-to-t to-[#fbfffe] via-[#cdffee] from-[#b8ffe5]  p-4">
      <div>
        <UserItem />
      </div>
      <div className="grow">
        <Command style={{ overflow: 'visible'  }} className="min-h-[500px] bg-inherit "> 
          <CommandList style={{ overflow: 'visible' }}>
            {menuList.map((menu, key) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option, optionKey) => (
                  <Link href={option.link} key={optionKey}>
                    <CommandItem className="flex gap-2 cursor-pointer hover:border-2 rounded-2xl">
                      {option.icon}
                      <span className="ml-2">{option.text}</span>
                    </CommandItem>
                  </Link>
                ))}
              </CommandGroup>
            ))}
            <CommandSeparator />
          </CommandList>
        </Command>
      </div>
      <div className="flex flex-row gap-2 cursor-pointer"><LogOut />Logout</div>
    </div>
  );
}
