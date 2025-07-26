import { Card } from "@/components/ui/card"

export default function BentoGrid() {
  return (
    <div className="min-h-screen bg-gray-950 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 h-[800px]">
          {/* Insights */}
          <Card className="bg-gray-900/50 border-gray-800 p-6 flex flex-col justify-between lg:col-span-1 xl:col-span-1 row-span-1">
            <div>
              <h3 className="text-white text-lg font-medium mb-4">Insights</h3>
            </div>
          </Card>

          {/* Overview */}
          <Card className="bg-gray-900/50 border-gray-800 p-6 flex flex-col justify-between lg:col-span-1 xl:col-span-1 row-span-1">
            <div>
              <h3 className="text-white text-lg font-medium mb-4">Overview</h3>
            </div>
          </Card>

          {/* Teamwork - Large card spanning multiple columns */}
          <Card className="bg-gray-900/50 border-gray-800 p-6 flex flex-col justify-between lg:col-span-2 xl:col-span-4 row-span-2">
            <div>
              <h3 className="text-white text-lg font-medium mb-4">Teamwork</h3>
            </div>
          </Card>

          {/* Analytics */}
          <Card className="bg-gray-900/50 border-gray-800 p-6 flex flex-col justify-between lg:col-span-1 xl:col-span-1 row-span-1">
            <div>
              <h3 className="text-white text-lg font-medium mb-2">Analytics</h3>
              <p className="text-gray-400 text-sm">Track user behavior</p>
            </div>
          </Card>

          {/* Dashboard */}
          <Card className="bg-gray-900/50 border-gray-800 p-6 flex flex-col justify-between lg:col-span-1 xl:col-span-1 row-span-1">
            <div>
              <h3 className="text-white text-lg font-medium mb-2">Dashboard</h3>
              <p className="text-gray-400 text-sm">Centralized data view</p>
            </div>
          </Card>

          {/* Efficiency - Large card */}
          <Card className="bg-gray-900/50 border-gray-800 p-6 flex flex-col justify-between lg:col-span-2 xl:col-span-2 row-span-2">
            <div>
              <h3 className="text-white text-lg font-medium mb-4">Efficiency</h3>
            </div>
          </Card>

          {/* Collaboration */}
          <Card className="bg-gray-900/50 border-gray-800 p-6 flex flex-col justify-between lg:col-span-2 xl:col-span-2 row-span-1">
            <div>
              <h3 className="text-white text-lg font-medium mb-2">Collaboration</h3>
              <p className="text-gray-400 text-sm">Work together seamlessly</p>
            </div>
          </Card>

          {/* Automation */}
          <Card className="bg-gray-900/50 border-gray-800 p-6 flex flex-col justify-between lg:col-span-1 xl:col-span-2 row-span-1">
            <div>
              <h3 className="text-white text-lg font-medium mb-2">Automation</h3>
              <p className="text-gray-400 text-sm">Streamline workflows</p>
            </div>
          </Card>

          {/* Connectivity */}
          <Card className="bg-gray-900/50 border-gray-800 p-6 flex flex-col justify-between lg:col-span-1 xl:col-span-1 row-span-1">
            <div>
              <h3 className="text-white text-lg font-medium mb-4">Connectivity</h3>
            </div>
          </Card>

          {/* Protection */}
          <Card className="bg-gray-900/50 border-gray-800 p-6 flex flex-col justify-between lg:col-span-1 xl:col-span-1 row-span-1">
            <div>
              <h3 className="text-white text-lg font-medium mb-4">Protection</h3>
            </div>
          </Card>

          {/* Integration */}
          <Card className="bg-gray-900/50 border-gray-800 p-6 flex flex-col justify-between lg:col-span-1 xl:col-span-1 row-span-1">
            <div>
              <h3 className="text-white text-lg font-medium mb-2">Integration</h3>
              <p className="text-gray-400 text-sm">Connect favorite tools</p>
            </div>
          </Card>

          {/* Security */}
          <Card className="bg-gray-900/50 border-gray-800 p-6 flex flex-col justify-between lg:col-span-1 xl:col-span-1 row-span-1">
            <div>
              <h3 className="text-white text-lg font-medium mb-2">Security</h3>
              <p className="text-gray-400 text-sm">Enterprise-grade protection</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
