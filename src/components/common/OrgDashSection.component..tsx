"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import React, { FC } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { gql, useQuery } from "@apollo/client";

// interface User {
//     firstName: string,
//     lastName: string,
//     year?: string, 
//     website?: string, 
//     github?: string,
//     linkedin?: string,
//     resume?: File
// }

const HACKER_QUERY = gql`
  query Users {
    users {
      _id
      email
      role
      firstName
      lastName
      school
      year
      website
      github
      linkedin
      resume
    }
  }
`;

const OrgDashSection: FC = () => {
  const { data, loading } = useQuery(HACKER_QUERY);

  console.log(data?.users);

  return (
    <main className="flex  min-h-screen flex-col px-auto bg-white ">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>School</TableHead>
            <TableHead>Year</TableHead>
            <TableHead>Website</TableHead>
            <TableHead>Git</TableHead>
            <TableHead>LinkedIn</TableHead>
            <TableHead>Resume</TableHead>
            <TableHead>Completion</TableHead>
          </TableRow>
        </TableHeader>
  
         { !loading && data.users.map( (items: { _id: string; firstName: string; lastName: string; email: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; role: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.PromiseLikeOfReactNode | null | undefined; website: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.PromiseLikeOfReactNode | null | undefined; github: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.PromiseLikeOfReactNode | null | undefined; linkedin: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.PromiseLikeOfReactNode | null | undefined; resume: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.PromiseLikeOfReactNode | null | undefined; }) =>
        <TableBody key={items._id} onClick={() => console.log(items._id)}>
          <TableRow>
            <TableCell>{items.firstName + " "+ items.lastName}</TableCell>
            <TableCell>{items.email}</TableCell>
            <TableCell>{items.role == null ? <IoMdCheckmarkCircle></IoMdCheckmarkCircle>: items.role}</TableCell>

            <TableCell>{items.website === null ? <IoMdCheckmarkCircle className="h-6 w-6"/>: items.website}</TableCell>
            <TableCell>{items.github !== null ? <IoMdCheckmarkCircle className="h-6 w-6"/>: items.github}</TableCell>
            <TableCell>{items.linkedin !== null ? <IoMdCheckmarkCircle className="h-6 w-6"/>: items.linkedin}</TableCell>
            <TableCell>{items.resume !== null ? <IoMdCheckmarkCircle className="h-6 w-6"/>: items.resume}</TableCell>
          </TableRow>
        </TableBody>
      )} 

      </Table>
    </main>
  );
};

export default OrgDashSection;
