'use client'
import {
    Card,
    CardBody,
    Typography,
    Avatar
} from "@material-tailwind/react";
import authorsTableData from "@/components/common/authorsTableData";
import bug from '@/public/images/LinkedIn.png';
import {FaCheck, FaCheckCircle} from "react-icons/fa";
import {color} from "framer-motion";

export function Dashboard() {

    return (
        <div className="mt-12 mb-8 flex flex-col gap-12">
            <Card>
                <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                    <table className="w-full min-w-[640px] table-auto">
                        <thead>
                        <tr>
                            {["Name", "School", "Year", "Website", "Git","Linkedin","Resume","Comletion"].map((el) => (
                                <th
                                    key={el}
                                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                                >
                                    <Typography
                                        variant="small"
                                        className="text-[11px] font-bold text-blue-gray-400"
                                    >
                                        {el}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {authorsTableData.map(
                            ({  name, school, date, website, git,linkedin,resume,completion }, key) => {
                                const className = `py-3 px-5 ${
                                    key === authorsTableData.length - 1
                                        ? ""
                                        : "border-b border-blue-gray-50 hover: bg-blue"
                                }`;

                                return (
                                    <tr key={name}>
                                        <td className={className}>
                                            <div className="flex items-center gap-4">
                                                <div>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-semibold"
                                                    >
                                                        {name}
                                                    </Typography>
                                                    {/*<Typography className="text-xs font-normal text-blue-gray-500">*/}
                                                    {/*    {school}*/}
                                                    {/*</Typography>*/}
                                                </div>
                                            </div>
                                        </td>
                                        <td className={className}>
                                            <Typography className="text-xs font-semibold text-blue-gray-600">
                                                {school}
                                            </Typography>
                                        </td>
                                        <td className={className}>
                                            <Typography className="text-xs font-semibold text-blue-gray-600">
                                                {date}
                                            </Typography>
                                        </td>
                                        <td className={className}>

                                                <div>
                                                    {website ?<FaCheckCircle style={{color:"green"}}/>:<div></div>}
                                                </div>
                                        </td>
                                        <td className={className}>
                                            <div>
                                                {git ?<FaCheckCircle style={{color:"green"}}/>:<div></div>}
                                            </div>
                                        </td>
                                        <td className={className}>
                                            <div>
                                                {linkedin ?<FaCheckCircle style={{color:"green"}}/>:<div></div>}
                                            </div>
                                        </td>
                                        <td className={className}>
                                            <div>
                                                {resume ?<FaCheckCircle style={{color:"green"}}/>:<div></div>}
                                            </div>
                                        </td>
                                        <td className={className}>
                                            <Typography className=" text-xs font-semibold text-blue-gray-600">
                                                {completion}
                                            </Typography>
                                        </td>
                                    </tr>
                                );
                            }
                        )}
                        </tbody>
                    </table>
                </CardBody>
            </Card>
        </div>
    );
}

export default Dashboard;
