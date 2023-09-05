import SideBar from "@/components/common/SideBar.component"
import AppView from "@/components/common/AppView.component"

export default function ApplicationView() {
  
  return (
    
<div className="grid grid-cols-12 h-full w-full bg-white">
      <div className="col-span-4 sm:col-span-4 md:col-span-3 lg:col-span-3">
        <SideBar />
      </div>
      <div className="col-span-8 sm:col-span-8 md:col-span-9 lg:col-span-9 pt-12">
        <AppView isHacker={true} _id={'64b6d91925b2e927ebfc4012'}/>
    </div>
    </div>
  )
}
