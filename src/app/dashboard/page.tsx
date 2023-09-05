import SideBar from "@/components/common/SideBar.component"
import OrgDashSection from "@/components/common/OrgDashSection.component."

export default function dashboard() {
  
  return (
    
<div className="grid grid-cols-12 h-full w-full bg-white">
      <div className="col-span-4 sm:col-span-4 md:col-span-3 lg:col-span-3">
        <SideBar />
      </div>
      <div className="col-span-8 sm:col-span-8 md:col-span-9 lg:col-span-9 pt-12">
        <OrgDashSection/>
    </div>
    </div>
  )
}
