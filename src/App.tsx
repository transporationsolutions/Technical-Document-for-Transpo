import { useState } from 'react';
import { Bus, Users, Map, Smartphone, Database, Cloud, Bell, ChevronRight, CheckCircle, Server, Wifi } from 'lucide-react';

const TranspoDispatchSystem = () => {
  const [activeTab, setActiveTab] = useState('architecture');
  const [selectedSeat, setSelectedSeat] = useState<number | null>(null);

  const tabs = [
    { id: 'architecture', name: 'System Architecture', icon: Database },
    { id: 'wireframes', name: 'App Wireframes', icon: Smartphone },
    { id: 'booking-flow', name: 'Booking Flow', icon: Users },
    { id: 'driver-interface', name: 'Driver Interface', icon: Bus },
    { id: 'coordinator-interface', name: 'Coordinator Interface', icon: Users },
    { id: 'dispatch-algorithm', name: 'Dispatch Logic', icon: Map }
  ];

  // Seat layout for 14-seater taxi
  const taxiSeatLayout = [
    [1, 2], // Front row
    [3, 4, 5], // Second row
    [6, 7, 8], // Third row
    [9, 10, 11], // Fourth row
    [12, 13, 14] // Back row
  ];

  // Seat layout for 64-seater bus (simplified view)
  const busSeatLayout = [
    [1, 2, null, 3, 4], // Row 1
    [5, 6, null, 7, 8], // Row 2
    [9, 10, null, 11, 12], // Row 3
    [13, 14, null, 15, 16], // Row 4
    [17, 18, null, 19, 20], // Row 5
    [21, 22, null, 23, 24], // Row 6
    [25, 26, null, 27, 28], // Row 7
    [29, 30, null, 31, 32], // Row 8
    [33, 34, null, 35, 36], // Row 9
    [37, 38, null, 39, 40], // Row 10
    [41, 42, null, 43, 44], // Row 11
    [45, 46, null, 47, 48], // Row 12
    [49, 50, 51, 52, 53], // Back row (5 seats)
  ];

  const [vehicleType, setVehicleType] = useState('taxi');
  const seatLayout = vehicleType === 'taxi' ? taxiSeatLayout : busSeatLayout;

  const bookedSeats = [1, 4, 7, 10]; // Example booked seats

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-yellow-500 text-white p-6 shadow-lg">
        <h1 className="text-3xl font-bold mb-2">🚐 Transpo Dispatch System</h1>
        <p className="text-white/90">Complete Technical Documentation & Design</p>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex overflow-x-auto">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 border-b-2 transition-colors whitespace-nowrap ${activeTab === tab.id
                    ? 'border-green-600 text-green-600 bg-green-50'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto p-6">

        {/* SYSTEM ARCHITECTURE */}
        {activeTab === 'architecture' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Technical Architecture</h2>

            {/* Architecture Diagram */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">System Components</h3>

              {/* Client Layer */}
              <div className="mb-6">
                <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
                  <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <Smartphone size={20} /> Client Layer
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-white p-3 rounded border border-blue-200">
                      <p className="font-semibold text-sm">Passenger Mobile App</p>
                      <p className="text-xs text-gray-600">React Native / Flutter</p>
                      <p className="text-xs text-gray-500 mt-1">Book taxis & buses</p>
                    </div>
                    <div className="bg-white p-3 rounded border border-blue-200">
                      <p className="font-semibold text-sm">Driver Mobile App</p>
                      <p className="text-xs text-gray-600">React Native / Flutter</p>
                      <p className="text-xs text-gray-500 mt-1">Manage trips & verify tickets</p>
                    </div>
                    <div className="bg-white p-3 rounded border border-blue-200">
                      <p className="font-semibold text-sm">Coordinator App</p>
                      <p className="text-xs text-gray-600">React Native / Flutter</p>
                      <p className="text-xs text-gray-500 mt-1">Fleet management for bus companies</p>
                    </div>
                    <div className="bg-white p-3 rounded border border-blue-200">
                      <p className="font-semibold text-sm">Web Portal</p>
                      <p className="text-xs text-gray-600">React.js / Next.js</p>
                      <p className="text-xs text-gray-500 mt-1">Admin & booking interface</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* API Gateway */}
              <div className="mb-6 flex justify-center">
                <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-4 w-full md:w-2/3">
                  <h4 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
                    <Wifi size={20} /> API Gateway & Load Balancer
                  </h4>
                  <p className="text-sm text-gray-700">REST API | WebSocket for real-time updates</p>
                </div>
              </div>

              {/* Backend Services */}
              <div className="mb-6">
                <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4">
                  <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                    <Server size={20} /> Backend Services
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="font-semibold text-sm">Booking Service</p>
                      <p className="text-xs text-gray-600">Handles reservations, seat selection</p>
                    </div>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="font-semibold text-sm">Dispatch Service</p>
                      <p className="text-xs text-gray-600">Vehicle assignment algorithm</p>
                    </div>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="font-semibold text-sm">Payment Service</p>
                      <p className="text-xs text-gray-600">Mobile Money integration</p>
                    </div>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="font-semibold text-sm">Notification Service</p>
                      <p className="text-xs text-gray-600">SMS, Push, In-app alerts</p>
                    </div>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="font-semibold text-sm">Location Service</p>
                      <p className="text-xs text-gray-600">GPS tracking, route mapping</p>
                    </div>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="font-semibold text-sm">User Management</p>
                      <p className="text-xs text-gray-600">Auth, profiles, ratings</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Layer */}
              <div className="mb-6">
                <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-4">
                  <h4 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
                    <Database size={20} /> Data Layer
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-white p-3 rounded border border-orange-200">
                      <p className="font-semibold text-sm">PostgreSQL</p>
                      <p className="text-xs text-gray-600">Main database for bookings, users, vehicles</p>
                    </div>
                    <div className="bg-white p-3 rounded border border-orange-200">
                      <p className="font-semibold text-sm">Redis Cache</p>
                      <p className="text-xs text-gray-600">Session, real-time seat availability</p>
                    </div>
                    <div className="bg-white p-3 rounded border border-orange-200">
                      <p className="font-semibold text-sm">MongoDB</p>
                      <p className="text-xs text-gray-600">Location logs, analytics</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* External Services */}
              <div>
                <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Cloud size={20} /> Third-Party Integrations
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <p className="font-semibold text-sm">Flutterwave</p>
                      <p className="text-xs text-gray-600">MTN/Airtel Money</p>
                    </div>
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <p className="font-semibold text-sm">Google Maps</p>
                      <p className="text-xs text-gray-600">Mapping & Routes</p>
                    </div>
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <p className="font-semibold text-sm">Africa's Talking</p>
                      <p className="text-xs text-gray-600">SMS Gateway</p>
                    </div>
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <p className="font-semibold text-sm">Firebase</p>
                      <p className="text-xs text-gray-600">Push Notifications</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack Details */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Recommended Tech Stack</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Frontend</h4>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Mobile: React Native or Flutter</li>
                    <li>• Web: React.js with Next.js</li>
                    <li>• Maps: Google Maps API / Mapbox</li>
                    <li>• State Management: Redux or Zustand</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Backend</h4>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• API: Node.js (Express) or Python (Django)</li>
                    <li>• Real-time: Socket.io or WebSockets</li>
                    <li>• Queue: Redis/Bull for job processing</li>
                    <li>• Auth: JWT tokens</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Database</h4>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Primary: PostgreSQL</li>
                    <li>• Cache: Redis</li>
                    <li>• Analytics: MongoDB (optional)</li>
                    <li>• File Storage: AWS S3 or Cloudinary</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Infrastructure</h4>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Hosting: AWS, DigitalOcean, or Heroku</li>
                    <li>• CDN: CloudFlare</li>
                    <li>• Monitoring: Sentry, LogRocket</li>
                    <li>• CI/CD: GitHub Actions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* WIREFRAMES */}
        {activeTab === 'wireframes' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">App Wireframes</h2>

            {/* Passenger App Screens */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Passenger Mobile App</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Home Screen */}
                <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
                  <div className="bg-green-600 text-white p-3 font-semibold">Home Screen</div>
                  <div className="p-4 space-y-3">
                    <div className="bg-gray-100 p-3 rounded">
                      <p className="text-xs text-gray-500">Search Bar</p>
                      <p className="font-medium">Where are you going?</p>
                    </div>

                    <div className="bg-blue-50 p-3 rounded">
                      <p className="text-xs font-semibold mb-2">Popular Routes</p>
                      <div className="space-y-2">
                        <div className="bg-white p-2 rounded shadow-sm flex justify-between items-center">
                          <span className="text-sm">Kampala → Mbale</span>
                          <ChevronRight size={16} />
                        </div>
                        <div className="bg-white p-2 rounded shadow-sm flex justify-between items-center">
                          <span className="text-sm">Kampala → Jinja</span>
                          <ChevronRight size={16} />
                        </div>
                        <div className="bg-white p-2 rounded shadow-sm flex justify-between items-center">
                          <span className="text-sm">Kampala → Mbarara</span>
                          <ChevronRight size={16} />
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-3 rounded">
                      <p className="text-xs font-semibold mb-1">Your Recent Trips</p>
                      <p className="text-xs text-gray-600">Mbale - Dec 15</p>
                    </div>
                  </div>
                </div>

                {/* Route Selection */}
                <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
                  <div className="bg-green-600 text-white p-3 font-semibold">Available Vehicles</div>
                  <div className="p-4 space-y-3">
                    <div className="bg-gray-100 p-2 rounded text-sm">
                      <p className="font-medium">Kampala → Mbale</p>
                      <p className="text-xs text-gray-600">Tuesday, Jan 20, 2026</p>
                    </div>

                    {/* Vehicle Type Filter */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => setVehicleType('taxi')}
                        className={`flex-1 py-2 rounded text-xs font-semibold ${vehicleType === 'taxi' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
                      >
                        🚐 Taxis (14-seater)
                      </button>
                      <button
                        onClick={() => setVehicleType('bus')}
                        className={`flex-1 py-2 rounded text-xs font-semibold ${vehicleType === 'bus' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                      >
                        🚌 Buses (64-seater)
                      </button>
                    </div>

                    {/* Vehicle Cards */}
                    <div className="space-y-2">
                      {vehicleType === 'taxi' ? (
                        <>
                          <div className="border-2 border-green-500 bg-green-50 p-3 rounded">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <p className="font-semibold text-sm">🚐 Taxi #1</p>
                                <p className="text-xs text-gray-600">New Taxi Park - Bay 12</p>
                              </div>
                              <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">12/14 Full</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-lg font-bold text-green-700">25,000 UGX</span>
                              <span className="text-xs text-green-700">Leaving in 10 min</span>
                            </div>
                            <button className="w-full bg-green-600 text-white py-2 rounded mt-2 text-sm font-semibold">
                              Select Seats
                            </button>
                          </div>

                          <div className="border border-gray-300 bg-white p-3 rounded">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <p className="font-semibold text-sm">🚐 Taxi #2</p>
                                <p className="text-xs text-gray-600">New Taxi Park - Bay 14</p>
                              </div>
                              <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded">5/14 Full</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-lg font-bold">25,000 UGX</span>
                              <span className="text-xs text-gray-600">~45 min wait</span>
                            </div>
                            <button className="w-full bg-gray-200 text-gray-700 py-2 rounded mt-2 text-sm font-semibold">
                              Select Seats
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="border-2 border-blue-500 bg-blue-50 p-3 rounded">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <p className="font-semibold text-sm">🚌 Post Bus</p>
                                <p className="text-xs text-gray-600">Central Bus Station</p>
                                <p className="text-xs text-blue-700">Gateway Bus Services</p>
                              </div>
                              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">58/64 Full</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-lg font-bold text-blue-700">35,000 UGX</span>
                              <span className="text-xs text-blue-700">Leaving in 15 min</span>
                            </div>
                            <button className="w-full bg-blue-600 text-white py-2 rounded mt-2 text-sm font-semibold">
                              Select Seats
                            </button>
                          </div>

                          <div className="border border-gray-300 bg-white p-3 rounded">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <p className="font-semibold text-sm">🚌 Swift Safaris</p>
                                <p className="text-xs text-gray-600">Central Bus Station</p>
                                <p className="text-xs text-gray-600">Modern Coach Services</p>
                              </div>
                              <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded">23/64 Full</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-lg font-bold">40,000 UGX</span>
                              <span className="text-xs text-gray-600">~2 hrs wait</span>
                            </div>
                            <button className="w-full bg-gray-200 text-gray-700 py-2 rounded mt-2 text-sm font-semibold">
                              Select Seats
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Seat Selection */}
                <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
                  <div className="bg-green-600 text-white p-3 font-semibold">Select Your Seat</div>
                  <div className="p-4 space-y-3">
                    <div className="bg-gray-100 p-2 rounded text-center">
                      <p className="text-xs text-gray-600">{vehicleType === 'taxi' ? '14-Seater Taxi' : '64-Seater Bus'} Layout</p>
                    </div>

                    {/* Seat Map */}
                    <div className="bg-gray-50 p-4 rounded overflow-x-auto">
                      <div className="space-y-1 min-w-max">
                        {vehicleType === 'taxi' && <p className="text-xs text-center text-gray-500 mb-2">🚗 Driver</p>}
                        {vehicleType === 'bus' && <p className="text-xs text-center text-gray-500 mb-2">🚗 Driver | 🚪 Door</p>}
                        {seatLayout.map((row, rowIndex) => (
                          <div key={rowIndex} className="flex justify-center gap-1">
                            {row.map((seatNum, idx) => {
                              if (seatNum === null) {
                                return <div key={`aisle-${idx}`} className="w-8 h-8"></div>;
                              }
                              const isBooked = bookedSeats.includes(seatNum);
                              const isSelected = selectedSeat === seatNum;
                              return (
                                <button
                                  key={seatNum}
                                  onClick={() => !isBooked && setSelectedSeat(seatNum)}
                                  disabled={isBooked}
                                  className={`${vehicleType === 'taxi' ? 'w-12 h-12' : 'w-8 h-8'} rounded text-xs font-semibold transition-all ${isBooked
                                    ? 'bg-gray-400 text-white cursor-not-allowed'
                                    : isSelected
                                      ? vehicleType === 'taxi' ? 'bg-green-600 text-white ring-2 ring-green-400' : 'bg-blue-600 text-white ring-2 ring-blue-400'
                                      : 'bg-white border-2 border-gray-300 hover:border-green-500'
                                    }`}
                                >
                                  {seatNum}
                                </button>
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Legend */}
                    <div className="flex justify-around text-xs">
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-4 bg-white border-2 border-gray-300 rounded"></div>
                        <span>Available</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className={`w-4 h-4 rounded ${vehicleType === 'taxi' ? 'bg-green-600' : 'bg-blue-600'}`}></div>
                        <span>Selected</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-4 bg-gray-400 rounded"></div>
                        <span>Booked</span>
                      </div>
                    </div>

                    {selectedSeat && (
                      <div className="bg-green-50 border border-green-300 p-2 rounded">
                        <p className="text-sm font-semibold">Selected: Seat #{selectedSeat}</p>
                        <p className="text-xs text-gray-600">
                          {vehicleType === 'taxi' ? '25,000 UGX' : '35,000 UGX'}
                        </p>
                      </div>
                    )}

                    {selectedSeat && (
                      <button className={`w-full py-3 rounded font-semibold text-white ${vehicleType === 'taxi' ? 'bg-green-600' : 'bg-blue-600'}`}>
                        Continue to Payment
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Payment & Confirmation Screens */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Payment & Confirmation</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Payment Screen */}
                <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
                  <div className="bg-green-600 text-white p-3 font-semibold">Payment</div>
                  <div className="p-4 space-y-3">
                    <div className="bg-gray-100 p-3 rounded">
                      <p className="text-xs text-gray-600">Booking Summary</p>
                      <p className="font-semibold">Kampala → Mbale</p>
                      <p className="text-sm">Seat #8 | Vehicle #1</p>
                    </div>

                    <div className="border-t border-gray-300 pt-3">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Ticket Price:</span>
                        <span className="font-semibold">25,000 UGX</span>
                      </div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Service Fee:</span>
                        <span className="font-semibold">1,000 UGX</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-gray-300">
                        <span className="font-bold">Total:</span>
                        <span className="font-bold text-green-700">26,000 UGX</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold">Payment Method:</p>
                      <button className="w-full bg-yellow-400 p-3 rounded flex items-center justify-between">
                        <span className="font-semibold">MTN Mobile Money</span>
                        <ChevronRight size={20} />
                      </button>
                      <button className="w-full bg-red-600 text-white p-3 rounded flex items-center justify-between">
                        <span className="font-semibold">Airtel Money</span>
                        <ChevronRight size={20} />
                      </button>
                    </div>

                    <button className="w-full bg-green-600 text-white py-3 rounded font-semibold">
                      Confirm & Pay
                    </button>
                  </div>
                </div>

                {/* Ticket/Confirmation Screen */}
                <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
                  <div className="bg-green-600 text-white p-3 font-semibold">Your Ticket</div>
                  <div className="p-4 space-y-4">
                    <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 text-center">
                      <div className="bg-white p-4 rounded mb-3">
                        <div className="text-6xl">📱</div>
                        <p className="text-xs text-gray-600 mt-2">QR Code</p>
                        <p className="text-xs font-mono bg-gray-100 p-1 rounded mt-1">TKT-2026-001234</p>
                      </div>

                      <div className="text-left space-y-2">
                        <div>
                          <p className="text-xs text-gray-600">Route</p>
                          <p className="font-bold">Kampala → Mbale</p>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <p className="text-xs text-gray-600">Seat</p>
                            <p className="font-bold text-green-700">#8</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600">Vehicle</p>
                            <p className="font-bold">#1</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600">Departure</p>
                          <p className="font-semibold">New Taxi Park - Bay 12</p>
                          <p className="text-sm">Estimated: 2:30 PM</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-300 rounded p-3">
                      <p className="text-xs font-semibold mb-1 flex items-center gap-1">
                        <Bell size={14} /> Notifications Enabled
                      </p>
                      <p className="text-xs text-gray-700">You'll receive departure alerts via SMS and app notification</p>
                    </div>

                    <button className="w-full bg-gray-200 text-gray-700 py-2 rounded text-sm font-semibold">
                      Download Ticket
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* BOOKING FLOW */}
        {activeTab === 'booking-flow' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Complete Booking Flow</h2>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">User Opens App / Website</h3>
                    <div className="bg-gray-50 p-4 rounded border border-gray-200">
                      <p className="text-sm mb-2"><strong>User Actions:</strong></p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Opens app or visits website</li>
                        <li>• Views home screen with popular routes</li>
                        <li>• Can search for destination or select from list</li>
                      </ul>
                      <p className="text-sm mt-3 mb-2"><strong>System Actions:</strong></p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Loads user location (if permissions granted)</li>
                        <li>• Displays popular routes from nearby taxi parks</li>
                        <li>• Shows recent trips if returning user</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <ChevronRight size={24} className="text-gray-400 rotate-90" />
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">Select Destination Route</h3>
                    <div className="bg-gray-50 p-4 rounded border border-gray-200">
                      <p className="text-sm mb-2"><strong>User Actions:</strong></p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Selects destination (e.g., "Mbale")</li>
                        <li>• Can optionally select departure date/time</li>
                        <li>• Can filter by taxi park location</li>
                      </ul>
                      <p className="text-sm mt-3 mb-2"><strong>System Actions:</strong></p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Queries database for available vehicles on this route</li>
                        <li>• Retrieves real-time seat availability from Redis cache</li>
                        <li>• Calculates estimated departure times based on fill rate</li>
                        <li>• Returns list of available vehicles sorted by departure time</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ChevronRight size={24} className="text-gray-400 rotate-90" />
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">View Available Vehicles</h3>
                    <div className="bg-gray-50 p-4 rounded border border-gray-200">
                      <p className="text-sm mb-2"><strong>User Sees:</strong></p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• List of vehicles headed to selected destination</li>
                        <li>• Fill status (e.g., "12/14 seats filled")</li>
                        <li>• Estimated departure time</li>
                        <li>• Price per seat</li>
                        <li>• Taxi park location and bay number</li>
                        <li>• Driver ratings (if available)</li>
                      </ul>
                      <p className="text-sm mt-3 mb-2"><strong>System Logic:</strong></p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Prioritize vehicles closest to full capacity</li>
                        <li>• Real-time WebSocket updates if seats get booked</li>
                        <li>• Color coding: Green (filling fast), Yellow (moderate), Gray (slow)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ChevronRight size={24} className="text-gray-400 rotate-90" />
                </div>

                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">Select Vehicle & Seat</h3>
                    <div className="bg-gray-50 p-4 rounded border border-gray-200">
                      <p className="text-sm mb-2"><strong>User Actions:</strong></p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Taps on preferred vehicle</li>
                        <li>• Views interactive 14-seater layout</li>
                        <li>• Selects available seat (front, middle, back preference)</li>
                        <li>• Can see which seats are already booked (grayed out)</li>
                      </ul>
                      <p className="text-sm mt-3 mb-2"><strong>System Actions:</strong></p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Places temporary 5-minute hold on selected seat</li>
                        <li>• Updates seat availability in Redis</li>
                        <li>• Broadcasts update to all users viewing this vehicle</li>
                        <li>• Starts countdown timer for user to complete booking</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ChevronRight size={24} className="text-gray-400 rotate-90" />
                </div>

                {/* Step 5 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">5</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">Payment Processing</h3>
                    <div className="bg-gray-50 p-4 rounded border border-gray-200">
                      <p className="text-sm mb-2"><strong>User Actions:</strong></p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Reviews booking summary (route, seat, price)</li>
                        <li>• Selects payment method (MTN Mobile Money / Airtel Money)</li>
                        <li>• Enters phone number for mobile money</li>
                        <li>• Confirms payment on their phone</li>
                      </ul>
                      <p className="text-sm mt-3 mb-2"><strong>System Actions:</strong></p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Initiates payment request via Flutterwave API</li>
                        <li>• Sends STK push to user's phone</li>
                        <li>• Waits for payment confirmation (polling)</li>
                        <li>• If successful: Confirms booking, releases hold, generates ticket</li>
                        <li>• If failed/timeout: Releases seat hold, notifies user</li>
                        <li>• Records transaction in database</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ChevronRight size={24} className="text-gray-400 rotate-90" />
                </div>

                {/* Step 6 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">6</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">Booking Confirmation & Ticket Generation</h3>
                    <div className="bg-gray-50 p-4 rounded border border-gray-200">
                      <p className="text-sm mb-2"><strong>User Receives:</strong></p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Digital ticket with QR code</li>
                        <li>• Booking reference number</li>
                        <li>• Seat number and vehicle details</li>
                        <li>• Taxi park location and bay number</li>
                        <li>• Estimated departure time</li>
                        <li>• Driver contact info (optional)</li>
                      </ul>
                      <p className="text-sm mt-3 mb-2"><strong>System Actions:</strong></p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Creates booking record in database</li>
                        <li>• Generates unique QR code for ticket verification</li>
                        <li>• Sends SMS confirmation with booking details</li>
                        <li>• Sends push notification to user's app</li>
                        <li>• Notifies driver app of new passenger</li>
                        <li>• Updates vehicle fill status (13/14 filled)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ChevronRight size={24} className="text-gray-400 rotate-90" />
                </div>

                {/* Step 7 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">7</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">Pre-Departure Notifications</h3>
                    <div className="bg-gray-50 p-4 rounded border border-gray-200">
                      <p className="text-sm mb-2"><strong>Automated Notifications:</strong></p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• When vehicle reaches 10/14 seats: "Vehicle filling up"</li>
                        <li>• When vehicle is full (14/14): "Vehicle full - departing in 15 minutes"</li>
                        <li>• 30 minutes before departure: "Please head to taxi park"</li>
                        <li>• 10 minutes before: "Final boarding call"</li>
                        <li>• If delayed: "Departure delayed by X minutes"</li>
                      </ul>
                      <p className="text-sm mt-3 mb-2"><strong>System Monitoring:</strong></p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Tracks fill rate and predicts departure time</li>
                        <li>• Adjusts estimates based on historical data</li>
                        <li>• Sends notifications via SMS + Push</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ChevronRight size={24} className="text-gray-400 rotate-90" />
                </div>

                {/* Step 8 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">8</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">Boarding & Departure</h3>
                    <div className="bg-gray-50 p-4 rounded border border-gray-200">
                      <p className="text-sm mb-2"><strong>At The Taxi Park:</strong></p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Passenger arrives at taxi park</li>
                        <li>• Shows QR code or booking reference to driver</li>
                        <li>• Driver scans QR code in driver app to verify</li>
                        <li>• System confirms valid ticket and seat assignment</li>
                        <li>• Passenger boards assigned seat</li>
                      </ul>
                      <p className="text-sm mt-3 mb-2"><strong>System Actions:</strong></p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Driver marks passenger as "boarded" in app</li>
                        <li>• Tracks which passengers have checked in</li>
                        <li>• When all passengers boarded, driver clicks "Depart"</li>
                        <li>• Trip status changes to "In Transit"</li>
                        <li>• GPS tracking activated</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ChevronRight size={24} className="text-gray-400 rotate-90" />
                </div>

                {/* Step 9 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">9</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">Journey & Arrival</h3>
                    <div className="bg-gray-50 p-4 rounded border border-gray-200">
                      <p className="text-sm mb-2"><strong>During Trip:</strong></p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Passengers can track vehicle location in real-time</li>
                        <li>• Estimated arrival time displayed</li>
                        <li>• Can share trip status with family/friends</li>
                      </ul>
                      <p className="text-sm mt-3 mb-2"><strong>Upon Arrival:</strong></p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Driver marks trip as "Completed"</li>
                        <li>• System sends "Trip completed" notification</li>
                        <li>• Prompts passenger to rate the experience</li>
                        <li>• Updates driver ratings and statistics</li>
                        <li>• Booking status set to "Completed"</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ChevronRight size={24} className="text-gray-400 rotate-90" />
                </div>

                {/* Step 10 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">10</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">Post-Trip & Feedback</h3>
                    <div className="bg-gray-50 p-4 rounded border border-gray-200">
                      <p className="text-sm mb-2"><strong>User Actions:</strong></p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Rates driver (1-5 stars)</li>
                        <li>• Can leave optional written review</li>
                        <li>• Report any issues if needed</li>
                        <li>• Receives receipt via email/SMS</li>
                      </ul>
                      <p className="text-sm mt-3 mb-2"><strong>System Actions:</strong></p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Stores rating and review in database</li>
                        <li>• Updates driver's overall rating</li>
                        <li>• Generates trip receipt</li>
                        <li>• Adds trip to user's history</li>
                        <li>• May suggest booking return trip</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Edge Cases */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-700">Edge Cases & Error Handling</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-red-500 pl-4 py-2">
                  <p className="font-semibold text-sm">Payment Fails</p>
                  <p className="text-sm text-gray-700">Release seat hold, notify user, allow retry or different payment method</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4 py-2">
                  <p className="font-semibold text-sm">User Doesn't Show Up (No-Show)</p>
                  <p className="text-sm text-gray-700">Driver can mark as no-show after 10 min grace period. Seat may be resold. User charged cancellation fee or booking non-refundable.</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4 py-2">
                  <p className="font-semibold text-sm">User Cancels Before Departure</p>
                  <p className="text-sm text-gray-700">Allow cancellation up to 30 min before estimated departure with partial refund. Release seat for rebooking.</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4 py-2">
                  <p className="font-semibold text-sm">Vehicle Breaks Down</p>
                  <p className="text-sm text-gray-700">Driver updates status. System finds alternative vehicle, transfers passengers, or processes refunds.</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4 py-2">
                  <p className="font-semibold text-sm">Duplicate Seat Booking (Race Condition)</p>
                  <p className="text-sm text-gray-700">Redis lock prevents this. First payment to complete gets the seat. Second user notified to select different seat.</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4 py-2">
                  <p className="font-semibold text-sm">Poor Internet Connection</p>
                  <p className="text-sm text-gray-700">SMS backup for critical notifications. Ticket QR code cached offline. Can show even without internet.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* COORDINATOR INTERFACE */}
        {activeTab === 'coordinator-interface' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Coordinator/Fleet Manager Interface</h2>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
              <h3 className="font-bold text-blue-900 mb-2">👥 Who are Coordinators?</h3>
              <p className="text-sm text-gray-700">
                Coordinators are fleet managers employed by bus companies who oversee multiple vehicles, manage drivers,
                coordinate departures, and ensure smooth operations. Unlike individual taxi drivers who manage their own vehicle,
                bus companies typically have dedicated staff to handle logistics and customer service.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Coordinator App Screens</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Fleet Dashboard */}
                <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
                  <div className="bg-blue-600 text-white p-3 font-semibold">Fleet Dashboard</div>
                  <div className="p-4 space-y-3">
                    <div className="bg-blue-50 border-2 border-blue-500 p-3 rounded">
                      <p className="text-xs text-gray-600">Company</p>
                      <p className="text-xl font-bold text-blue-700">Gateway Bus Services</p>
                      <p className="text-sm">Central Bus Station</p>
                    </div>

                    <div className="bg-gray-100 p-3 rounded">
                      <p className="text-xs text-gray-600 mb-2">Today's Fleet Status</p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Active Buses:</span>
                          <span className="font-bold text-green-700">8</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>In Transit:</span>
                          <span className="font-bold text-blue-700">5</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>At Station:</span>
                          <span className="font-bold">3</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Under Maintenance:</span>
                          <span className="font-bold text-red-700">1</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-green-50 p-2 rounded text-center">
                        <p className="text-xs text-gray-600">Total Bookings</p>
                        <p className="text-xl font-bold text-green-700">342</p>
                      </div>
                      <div className="bg-yellow-50 p-2 rounded text-center">
                        <p className="text-xs text-gray-600">Revenue Today</p>
                        <p className="text-xl font-bold text-yellow-700">12M</p>
                      </div>
                    </div>

                    <button className="w-full bg-blue-600 text-white py-2 rounded font-semibold text-sm">
                      View All Vehicles
                    </button>
                  </div>
                </div>

                {/* Vehicle Management */}
                <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
                  <div className="bg-blue-600 text-white p-3 font-semibold">Vehicle Management</div>
                  <div className="p-4 space-y-2">
                    <div className="bg-gray-100 p-2 rounded">
                      <p className="font-semibold text-sm mb-1">Active Buses Today</p>
                      <p className="text-xs text-gray-600">Kampala → Mbale Route</p>
                    </div>

                    <div className="space-y-2 max-h-96 overflow-y-auto">
                      {[
                        { id: 'Bus 1', reg: 'UAZ 123B', driver: 'Moses Okello', status: 'ready', bookings: '58/64', time: '2:30 PM' },
                        { id: 'Bus 2', reg: 'UAZ 456C', driver: 'Sarah Namuli', status: 'in_transit', bookings: '64/64', time: 'Departed' },
                        { id: 'Bus 3', reg: 'UAZ 789D', driver: 'Patrick Ssenteza', status: 'ready', bookings: '23/64', time: '~2 hrs' },
                        { id: 'Bus 4', reg: 'UAZ 234E', driver: 'Grace Atim', status: 'loading', bookings: '41/64', time: '45 min' },
                      ].map(vehicle => (
                        <div key={vehicle.id} className={`border rounded p-3 ${vehicle.status === 'in_transit' ? 'bg-blue-50 border-blue-500' :
                          vehicle.status === 'ready' ? 'bg-green-50 border-green-500' :
                            'bg-yellow-50 border-yellow-500'
                          }`}>
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <p className="font-semibold text-sm">🚌 {vehicle.id}</p>
                              <p className="text-xs text-gray-600">{vehicle.reg}</p>
                              <p className="text-xs text-gray-700">Driver: {vehicle.driver}</p>
                            </div>
                            <div className="text-right">
                              <span className={`text-xs px-2 py-1 rounded ${vehicle.status === 'in_transit' ? 'bg-blue-600 text-white' :
                                vehicle.status === 'ready' ? 'bg-green-600 text-white' :
                                  'bg-yellow-600 text-white'
                                }`}>
                                {vehicle.bookings}
                              </span>
                              <p className="text-xs mt-1 text-gray-600">{vehicle.time}</p>
                            </div>
                          </div>
                          <div className="flex gap-1">
                            <button className="flex-1 bg-white border py-1 rounded text-xs">View Details</button>
                            <button className="flex-1 bg-white border py-1 rounded text-xs">Passengers</button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <button className="w-full bg-blue-600 text-white py-2 rounded font-semibold text-sm">
                      + Add New Bus to Route
                    </button>
                  </div>
                </div>

                {/* Real-Time Monitoring */}
                <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
                  <div className="bg-blue-600 text-white p-3 font-semibold">Live Monitoring</div>
                  <div className="p-4 space-y-3">
                    <div className="bg-gray-100 p-3 rounded text-center">
                      <div className="text-4xl mb-2">🗺️</div>
                      <p className="text-sm font-semibold">Fleet Map View</p>
                      <p className="text-xs text-gray-600 mt-1">Track all vehicles in real-time</p>
                    </div>

                    <div className="space-y-2">
                      <div className="bg-blue-50 border border-blue-300 p-2 rounded">
                        <p className="text-xs font-semibold">🚌 Bus 2 - In Transit</p>
                        <p className="text-xs text-gray-700">Kampala → Mbale</p>
                        <div className="flex justify-between mt-1">
                          <span className="text-xs">Progress: 45%</span>
                          <span className="text-xs text-blue-700">ETA: 1h 30m</span>
                        </div>
                      </div>

                      <div className="bg-green-50 border border-green-300 p-2 rounded">
                        <p className="text-xs font-semibold">🚌 Bus 1 - Boarding</p>
                        <p className="text-xs text-gray-700">58/64 passengers</p>
                        <div className="flex justify-between mt-1">
                          <span className="text-xs">6 seats left</span>
                          <span className="text-xs text-green-700">Departs soon</span>
                        </div>
                      </div>

                      <div className="bg-yellow-50 border border-yellow-300 p-2 rounded">
                        <p className="text-xs font-semibold">⚠️ Bus 4 - Delayed</p>
                        <p className="text-xs text-gray-700">Mechanical issue</p>
                        <div className="flex justify-between mt-1">
                          <span className="text-xs">41 passengers affected</span>
                          <span className="text-xs text-red-700">Action needed</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <button className="w-full bg-blue-600 text-white py-2 rounded text-sm font-semibold">
                        Broadcast to All Drivers
                      </button>
                      <button className="w-full bg-white border border-gray-300 py-2 rounded text-sm">
                        Generate Reports
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coordinator Features */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Key Coordinator Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold mb-2">Fleet Oversight</h4>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Monitor all company vehicles in real-time</li>
                    <li>• View booking status across entire fleet</li>
                    <li>• Track revenue and performance metrics</li>
                    <li>• Assign vehicles to routes</li>
                    <li>• Manage vehicle schedules and rotations</li>
                    <li>• View maintenance schedules and alerts</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold mb-2">Driver Management</h4>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Assign drivers to specific buses/routes</li>
                    <li>• Monitor driver performance and ratings</li>
                    <li>• Track driver work hours and shifts</li>
                    <li>• Communicate directly with drivers</li>
                    <li>• Handle driver issues and complaints</li>
                    <li>• View driver location and status</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold mb-2">Passenger Management</h4>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• View all bookings across fleet</li>
                    <li>• Handle customer service issues</li>
                    <li>• Process refunds and rebookings</li>
                    <li>• Send bulk notifications to passengers</li>
                    <li>• Manage group bookings</li>
                    <li>• Handle special requests (wheelchair, luggage, etc.)</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold mb-2">Operations & Analytics</h4>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Daily, weekly, monthly revenue reports</li>
                    <li>• Route performance analysis</li>
                    <li>• Occupancy rate tracking</li>
                    <li>• Peak time identification</li>
                    <li>• Competitor pricing monitoring</li>
                    <li>• Demand forecasting</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Coordinator vs Driver Comparison */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Coordinator vs Driver: Key Differences</h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-3 text-left">Feature</th>
                      <th className="p-3 text-left bg-green-50">Driver App</th>
                      <th className="p-3 text-left bg-blue-50">Coordinator App</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="p-3 font-semibold">Scope</td>
                      <td className="p-3">Single vehicle</td>
                      <td className="p-3">Multiple vehicles (fleet)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">User Type</td>
                      <td className="p-3">Individual taxi drivers, bus drivers</td>
                      <td className="p-3">Bus company managers, fleet supervisors</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Primary Tasks</td>
                      <td className="p-3">
                        • Manage own trips<br />
                        • Verify passengers<br />
                        • Update trip status
                      </td>
                      <td className="p-3">
                        • Oversee all company vehicles<br />
                        • Assign drivers to routes<br />
                        • Handle operations issues
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Passenger View</td>
                      <td className="p-3">Own passengers only</td>
                      <td className="p-3">All passengers across fleet</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Analytics</td>
                      <td className="p-3">Personal earnings & ratings</td>
                      <td className="p-3">Company-wide revenue, trends, forecasts</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Permissions</td>
                      <td className="p-3">Limited to own vehicle</td>
                      <td className="p-3">Full access to company operations</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Vehicle Control</td>
                      <td className="p-3">Can start/end own trips</td>
                      <td className="p-3">Can reassign vehicles, change schedules</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Communication</td>
                      <td className="p-3">Contact individual passengers</td>
                      <td className="p-3">Broadcast to all drivers/passengers, company announcements</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Workflow Example */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Typical Bus Company Workflow</h3>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div className="flex-1">
                    <p className="font-semibold">Morning Setup</p>
                    <p className="text-sm text-gray-700">Coordinator assigns 8 buses to Kampala-Mbale route, assigns drivers to each bus</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div className="flex-1">
                    <p className="font-semibold">Bookings Start Coming In</p>
                    <p className="text-sm text-gray-700">Passengers book seats across different buses. Coordinator monitors fill rates in real-time</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div className="flex-1">
                    <p className="font-semibold">Driver Checks In</p>
                    <p className="text-sm text-gray-700">Driver opens their app, sees 58/64 passengers booked, begins boarding process</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div className="flex-1">
                    <p className="font-semibold">Issue Arises</p>
                    <p className="text-sm text-gray-700">Bus 4 has mechanical problem. Coordinator sees alert, contacts driver, decides to transfer 41 passengers to other buses</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">5</div>
                  <div className="flex-1">
                    <p className="font-semibold">Coordinator Takes Action</p>
                    <p className="text-sm text-gray-700">Sends bulk SMS to Bus 4 passengers, rebooksanks them to Bus 3 and Bus 5, notifies those drivers</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">6</div>
                  <div className="flex-1">
                    <p className="font-semibold">Departure & Monitoring</p>
                    <p className="text-sm text-gray-700">Drivers mark departures, coordinator tracks all buses in transit on map view</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">7</div>
                  <div className="flex-1">
                    <p className="font-semibold">End of Day</p>
                    <p className="text-sm text-gray-700">Coordinator reviews analytics: 342 total passengers, 12M UGX revenue, 94% on-time performance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* DRIVER INTERFACE */}
        {activeTab === 'driver-interface' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Driver/Operator Interface</h2>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Driver Mobile App Screens</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Dashboard */}
                <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
                  <div className="bg-blue-600 text-white p-3 font-semibold">Driver Dashboard</div>
                  <div className="p-4 space-y-3">
                    <div className="bg-green-50 border-2 border-green-500 p-3 rounded">
                      <p className="text-xs text-gray-600">Today's Status</p>
                      <p className="text-2xl font-bold text-green-700">Active</p>
                      <p className="text-sm">Vehicle #1 - UBE 234A</p>
                    </div>

                    <div className="bg-gray-100 p-3 rounded">
                      <p className="text-xs text-gray-600 mb-2">Current Trip</p>
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold">Kampala → Mbale</span>
                        <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">12/14</span>
                      </div>
                      <p className="text-xs text-gray-600">New Taxi Park - Bay 12</p>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-blue-50 p-2 rounded text-center">
                        <p className="text-xs text-gray-600">Bookings</p>
                        <p className="text-xl font-bold text-blue-700">12</p>
                      </div>
                      <div className="bg-yellow-50 p-2 rounded text-center">
                        <p className="text-xs text-gray-600">Revenue</p>
                        <p className="text-xl font-bold text-yellow-700">300K</p>
                      </div>
                    </div>

                    <button className="w-full bg-green-600 text-white py-3 rounded font-semibold">
                      View Passenger List
                    </button>

                    <button className="w-full bg-blue-600 text-white py-2 rounded font-semibold text-sm">
                      Start New Trip
                    </button>
                  </div>
                </div>

                {/* Passenger Manifest */}
                <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
                  <div className="bg-blue-600 text-white p-3 font-semibold">Passenger Manifest</div>
                  <div className="p-4 space-y-2">
                    <div className="bg-gray-100 p-2 rounded">
                      <p className="font-semibold text-sm">Kampala → Mbale</p>
                      <p className="text-xs text-gray-600">12 Confirmed | 2 Available</p>
                    </div>

                    <div className="space-y-2 max-h-96 overflow-y-auto">
                      {[
                        { seat: 1, name: 'John Mukasa', phone: '0772***123', status: 'boarded' },
                        { seat: 2, name: 'Sarah Nambi', phone: '0701***456', status: 'boarded' },
                        { seat: 3, name: 'Peter Okello', phone: '0782***789', status: 'confirmed' },
                        { seat: 4, name: 'Mary Akello', phone: '0712***234', status: 'confirmed' },
                        { seat: 5, name: 'David Kato', phone: '0752***567', status: 'confirmed' },
                        { seat: 8, name: 'Grace Tumwesigye', phone: '0762***890', status: 'boarded' },
                      ].map(passenger => (
                        <div key={passenger.seat} className={`border rounded p-2 ${passenger.status === 'boarded' ? 'bg-green-50 border-green-500' : 'bg-white border-gray-300'}`}>
                          <div className="flex justify-between items-start mb-1">
                            <div>
                              <p className="font-semibold text-sm">{passenger.name}</p>
                              <p className="text-xs text-gray-600">{passenger.phone}</p>
                            </div>
                            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">#{passenger.seat}</span>
                          </div>
                          {passenger.status === 'boarded' ? (
                            <div className="flex items-center gap-1 text-green-700 text-xs">
                              <CheckCircle size={14} />
                              <span>Boarded</span>
                            </div>
                          ) : (
                            <button className="text-xs bg-gray-200 px-2 py-1 rounded w-full">
                              Scan Ticket
                            </button>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-gray-300">
                      <button className="w-full bg-green-600 text-white py-2 rounded font-semibold">
                        Ready to Depart
                      </button>
                    </div>
                  </div>
                </div>

                {/* Ticket Scanner & Trip Control */}
                <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
                  <div className="bg-blue-600 text-white p-3 font-semibold">Scan & Control</div>
                  <div className="p-4 space-y-3">
                    <div className="bg-gray-100 p-4 rounded text-center">
                      <div className="text-6xl mb-2">📷</div>
                      <p className="text-sm font-semibold">QR Code Scanner</p>
                      <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded">
                        Scan Passenger Ticket
                      </button>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-400 rounded p-3">
                      <p className="text-xs font-semibold mb-1">⚠️ Boarding Status</p>
                      <p className="text-sm">8/12 passengers boarded</p>
                      <p className="text-xs text-gray-700 mt-1">4 passengers pending</p>
                    </div>

                    <div className="space-y-2">
                      <button className="w-full bg-green-600 text-white py-3 rounded font-semibold">
                        Start Trip
                      </button>
                      <button className="w-full bg-gray-300 text-gray-700 py-2 rounded font-semibold text-sm">
                        Mark Delay
                      </button>
                      <button className="w-full bg-red-100 text-red-700 py-2 rounded font-semibold text-sm border border-red-300">
                        Report Issue
                      </button>
                    </div>

                    <div className="bg-blue-50 border border-blue-300 rounded p-3">
                      <p className="text-xs font-semibold mb-2">Trip Controls (In Transit)</p>
                      <div className="space-y-1">
                        <button className="w-full bg-white border py-1 rounded text-xs">GPS Tracking: ON</button>
                        <button className="w-full bg-white border py-1 rounded text-xs">Add Rest Stop</button>
                        <button className="w-full bg-green-600 text-white py-2 rounded text-sm font-semibold">Complete Trip</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Driver Features List */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Key Driver App Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold mb-2">Trip Management</h4>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Set route and destination for the day</li>
                    <li>• View real-time booking status</li>
                    <li>• Manage passenger list</li>
                    <li>• Override departure time if needed</li>
                    <li>• Handle walk-in passengers (if seats available)</li>
                  </ul>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold mb-2">Passenger Verification</h4>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• QR code scanner for ticket validation</li>
                    <li>• Manual booking reference entry</li>
                    <li>• Mark passengers as boarded</li>
                    <li>• Handle no-shows</li>
                    <li>• Contact passengers via in-app call/SMS</li>
                  </ul>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold mb-2">Earnings & Analytics</h4>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Daily/weekly/monthly revenue tracking</li>
                    <li>• Trip history and statistics</li>
                    <li>• Passenger ratings and feedback</li>
                    <li>• Performance metrics (on-time %, fill rate)</li>
                  </ul>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold mb-2">Communication</h4>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Send departure updates to all passengers</li>
                    <li>• Notify about delays</li>
                    <li>• Emergency broadcast messages</li>
                    <li>• Support/help chat with platform admins</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* DISPATCH ALGORITHM */}
        {activeTab === 'dispatch-algorithm' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Dispatch Algorithm & Logic</h2>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Core Algorithm Principles</h3>

              <div className="space-y-4">
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4">
                  <h4 className="font-bold text-green-900 mb-2">Primary Goal</h4>
                  <p className="text-sm">Optimize vehicle utilization by filling taxis as quickly and efficiently as possible while ensuring passenger convenience and predictable departure times.</p>
                </div>

                <div className="bg-blue-50 border-2 border-blue-500 rounded-lg p-4">
                  <h4 className="font-bold text-blue-900 mb-3">Algorithm Flow</h4>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded">
                      <p className="font-semibold text-sm mb-1">1. Route Matching</p>
                      <p className="text-xs text-gray-700">When passenger selects destination, query all vehicles assigned to that route</p>
                      <code className="text-xs bg-gray-100 p-1 rounded block mt-1">
                        SELECT * FROM vehicles WHERE route='Kampala-Mbale' AND status='ready' AND seats_available {'>'} 0
                      </code>
                    </div>

                    <div className="bg-white p-3 rounded">
                      <p className="font-semibold text-sm mb-1">2. Priority Scoring</p>
                      <p className="text-xs text-gray-700">Score each vehicle based on multiple factors:</p>
                      <ul className="text-xs mt-2 space-y-1 ml-4">
                        <li>• Fill Rate: Vehicles closer to full get higher priority (weight: 40%)</li>
                        <li>• Time Waiting: How long vehicle has been waiting (weight: 30%)</li>
                        <li>• Driver Rating: Higher rated drivers get slight boost (weight: 20%)</li>
                        <li>• Historical Performance: On-time record (weight: 10%)</li>
                      </ul>
                      <code className="text-xs bg-gray-100 p-1 rounded block mt-2">
                        score = (fill_rate * 0.4) + (wait_time_score * 0.3) + (rating * 0.2) + (on_time_pct * 0.1)
                      </code>
                    </div>

                    <div className="bg-white p-3 rounded">
                      <p className="font-semibold text-sm mb-1">3. Smart Display Order</p>
                      <p className="text-xs text-gray-700">Present vehicles to passenger in optimized order:</p>
                      <ul className="text-xs mt-2 space-y-1 ml-4">
                        <li>• Priority 1: Vehicles 10+ seats filled (imminent departure)</li>
                        <li>• Priority 2: Vehicles 7-9 seats filled (moderate wait)</li>
                        <li>• Priority 3: Vehicles &lt;7 seats (longer wait, but available)</li>
                      </ul>
                    </div>

                    <div className="bg-white p-3 rounded">
                      <p className="font-semibold text-sm mb-1">4. Departure Time Prediction</p>
                      <p className="text-xs text-gray-700">Calculate estimated departure using historical data:</p>
                      <code className="text-xs bg-gray-100 p-1 rounded block mt-1">
                        avg_fill_rate = historical_avg_bookings_per_hour(route, time_of_day)
                        seats_remaining = 14 - current_bookings
                        estimated_minutes = (seats_remaining / avg_fill_rate) * 60
                      </code>
                    </div>

                    <div className="bg-white p-3 rounded">
                      <p className="font-semibold text-sm mb-1">5. Real-Time Updates</p>
                      <p className="text-xs text-gray-700">WebSocket push updates when:</p>
                      <ul className="text-xs mt-2 space-y-1 ml-4">
                        <li>• New booking occurs (update fill status)</li>
                        <li>• Seat gets released (cancellation/no-show)</li>
                        <li>• Vehicle reaches capacity threshold</li>
                        <li>• Estimated departure time changes significantly</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Seat Assignment Logic */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Seat Assignment & Locking Mechanism</h3>

              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded border-l-4 border-green-500">
                  <h4 className="font-semibold mb-2">Redis-Based Seat Locking</h4>
                  <p className="text-sm mb-3">Prevents double-booking through distributed locking:</p>
                  <div className="bg-white p-3 rounded font-mono text-xs">
                    <p className="text-gray-600">// When user selects seat</p>
                    <p>SETNX seat:vehicle_id:seat_number user_id EX 300</p>
                    <p className="text-gray-600">// 300 seconds (5 min) temporary lock</p>
                    <p className="mt-2 text-gray-600">// If payment successful</p>
                    <p>SET seat:vehicle_id:seat_number user_id // Permanent</p>
                    <p className="mt-2 text-gray-600">// If payment fails or timeout</p>
                    <p>DEL seat:vehicle_id:seat_number // Release</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded border-l-4 border-blue-500">
                  <h4 className="font-semibold mb-2">Race Condition Handling</h4>
                  <p className="text-sm mb-2">What happens if two users try to book the same seat simultaneously:</p>
                  <ol className="text-sm space-y-1 ml-4">
                    <li>1. User A clicks seat #5 → Redis SETNX succeeds → Lock acquired</li>
                    <li>2. User B clicks seat #5 0.5 sec later → Redis SETNX fails → Seat unavailable</li>
                    <li>3. User B shown error: "Seat just taken, please select another"</li>
                    <li>4. User A has 5 minutes to complete payment</li>
                    <li>5. If User A doesn't pay, lock expires, seat becomes available again</li>
                  </ol>
                </div>

                <div className="bg-gray-50 p-4 rounded border-l-4 border-yellow-500">
                  <h4 className="font-semibold mb-2">Capacity Management</h4>
                  <div className="text-sm space-y-2">
                    <p><strong>Threshold-Based Departure:</strong></p>
                    <ul className="ml-4 space-y-1">
                      <li>• Minimum: 10/14 seats (71% capacity)</li>
                      <li>• Ideal: 14/14 seats (100% capacity)</li>
                      <li>• Driver can override and depart with fewer seats during off-peak</li>
                    </ul>
                    <p className="mt-2"><strong>Dynamic Pricing (Future Feature):</strong></p>
                    <ul className="ml-4 space-y-1">
                      <li>• Last 2 seats can be priced slightly higher</li>
                      <li>• Early bird discount for booking when vehicle is empty</li>
                      <li>• Peak hour surge pricing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Route Optimization */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Route & Schedule Optimization</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-2 border-gray-200 rounded p-4">
                  <h4 className="font-semibold mb-3 text-blue-700">Peak Time Prediction</h4>
                  <p className="text-sm mb-2">System learns demand patterns:</p>
                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <p className="font-semibold mb-1">Kampala → Mbale Route</p>
                    <p>• Morning (6am-10am): High demand (8-10 vehicles/hour)</p>
                    <p>• Midday (10am-3pm): Medium (3-5 vehicles/hour)</p>
                    <p>• Evening (3pm-7pm): High (6-8 vehicles/hour)</p>
                    <p>• Night (7pm-6am): Low (1-2 vehicles/hour)</p>
                  </div>
                  <p className="text-xs mt-2 text-gray-600">Algorithm suggests drivers when to queue based on predicted demand</p>
                </div>

                <div className="border-2 border-gray-200 rounded p-4">
                  <h4 className="font-semibold mb-3 text-blue-700">Multi-Stop Routing (Future)</h4>
                  <p className="text-sm mb-2">Optimize for intermediate stops:</p>
                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <p className="font-semibold mb-1">Example: Kampala → Jinja → Mbale</p>
                    <p>• Pick up 8 passengers to Jinja</p>
                    <p>• Pick up 6 more to Mbale</p>
                    <p>• Drop Jinja passengers (8 seats free)</p>
                    <p>• Pick up 8 new Jinja → Mbale passengers</p>
                    <p>• Arrive Mbale with full capacity</p>
                  </div>
                  <p className="text-xs mt-2 text-gray-600">Maximizes revenue per trip while serving multiple destinations</p>
                </div>

                <div className="border-2 border-gray-200 rounded p-4">
                  <h4 className="font-semibold mb-3 text-blue-700">Load Balancing</h4>
                  <p className="text-sm mb-2">Distribute passengers across vehicles:</p>
                  <ul className="text-xs space-y-1 ml-4">
                    <li>• If 3 vehicles are 11/14, 8/14, 3/14</li>
                    <li>• New booking prioritized to 11/14 vehicle (fastest departure)</li>
                    <li>• Once full, automatically shift to 8/14 vehicle</li>
                    <li>• Prevents one vehicle from sitting empty while others fill</li>
                  </ul>
                </div>

                <div className="border-2 border-gray-200 rounded p-4">
                  <h4 className="font-semibold mb-3 text-blue-700">Fairness Algorithm</h4>
                  <p className="text-sm mb-2">Ensure all drivers get fair opportunity:</p>
                  <ul className="text-xs space-y-1 ml-4">
                    <li>• Track wait time for each vehicle in queue</li>
                    <li>• If driver waits &gt;2 hours, boost priority score</li>
                    <li>• Rotate featured vehicles on home screen</li>
                    <li>• Prevent "popular driver" monopoly</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Notification Logic */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Intelligent Notification System</h3>

              <div className="space-y-3">
                <div className="bg-blue-50 p-4 rounded">
                  <h4 className="font-semibold mb-2">Trigger-Based Notifications</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-blue-100">
                        <tr>
                          <th className="p-2 text-left">Trigger Event</th>
                          <th className="p-2 text-left">Notification</th>
                          <th className="p-2 text-left">Channels</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr>
                          <td className="p-2">Booking confirmed</td>
                          <td className="p-2">Ticket details & QR code</td>
                          <td className="p-2">SMS + Push + Email</td>
                        </tr>
                        <tr>
                          <td className="p-2">Vehicle 10/14 full</td>
                          <td className="p-2">"Filling up fast"</td>
                          <td className="p-2">Push</td>
                        </tr>
                        <tr>
                          <td className="p-2">Vehicle 14/14 full</td>
                          <td className="p-2">"Departing in 15 min"</td>
                          <td className="p-2">SMS + Push</td>
                        </tr>
                        <tr>
                          <td className="p-2">30 min to departure</td>
                          <td className="p-2">"Head to taxi park"</td>
                          <td className="p-2">SMS + Push</td>
                        </tr>
                        <tr>
                          <td className="p-2">10 min to departure</td>
                          <td className="p-2">"Final boarding call"</td>
                          <td className="p-2">SMS + Push + Call</td>
                        </tr>
                        <tr>
                          <td className="p-2">Trip started</td>
                          <td className="p-2">"In transit - Track live"</td>
                          <td className="p-2">Push</td>
                        </tr>
                        <tr>
                          <td className="p-2">Trip completed</td>
                          <td className="p-2">"Arrived - Please rate"</td>
                          <td className="p-2">Push</td>
                        </tr>
                        <tr>
                          <td className="p-2">Delay reported</td>
                          <td className="p-2">"Delayed by X minutes"</td>
                          <td className="p-2">SMS + Push</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded border border-yellow-300">
                  <h4 className="font-semibold mb-2">⚡ Smart Notification Timing</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Don't spam: Max 1 notification per 15 minutes per user</li>
                    <li>• Respect quiet hours: No SMS between 10pm-7am unless critical</li>
                    <li>• User preferences: Allow opt-out of non-critical notifications</li>
                    <li>• Language preference: Luganda, English, or other local languages</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Database Schema Preview */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Database Schema (Simplified)</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
                <div className="bg-gray-50 p-3 rounded border">
                  <p className="font-bold text-sm mb-2 text-blue-700">users</p>
                  <ul className="space-y-1">
                    <li>• id (UUID)</li>
                    <li>• phone_number</li>
                    <li>• name</li>
                    <li>• email</li>
                    <li>• user_type (passenger/driver/coordinator/admin)</li>
                    <li>• company_id (FK → companies, nullable)</li>
                    <li>• created_at</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-3 rounded border">
                  <p className="font-bold text-sm mb-2 text-blue-700">companies</p>
                  <ul className="space-y-1">
                    <li>• id (UUID)</li>
                    <li>• name (e.g. "Gateway Bus Services")</li>
                    <li>• registration_number</li>
                    <li>• contact_phone</li>
                    <li>• contact_email</li>
                    <li>• station_location</li>
                    <li>• logo_url</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-3 rounded border">
                  <p className="font-bold text-sm mb-2 text-blue-700">vehicles</p>
                  <ul className="space-y-1">
                    <li>• id (UUID)</li>
                    <li>• registration_number</li>
                    <li>• driver_id (FK → users, nullable)</li>
                    <li>• company_id (FK → companies, nullable)</li>
                    <li>• capacity (14 for taxi, 64 for bus)</li>
                    <li>• vehicle_type (taxi/bus/boda)</li>
                    <li>• status (active/inactive/maintenance)</li>
                    <li>• amenities (JSON: AC, WiFi, etc.)</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-3 rounded border">
                  <p className="font-bold text-sm mb-2 text-blue-700">routes</p>
                  <ul className="space-y-1">
                    <li>• id (UUID)</li>
                    <li>• origin</li>
                    <li>• destination</li>
                    <li>• base_price_taxi</li>
                    <li>• base_price_bus</li>
                    <li>• estimated_duration</li>
                    <li>• distance_km</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-3 rounded border">
                  <p className="font-bold text-sm mb-2 text-blue-700">trips</p>
                  <ul className="space-y-1">
                    <li>• id (UUID)</li>
                    <li>• vehicle_id (FK → vehicles)</li>
                    <li>• route_id (FK → routes)</li>
                    <li>• driver_id (FK → users)</li>
                    <li>• company_id (FK → companies, nullable)</li>
                    <li>• scheduled_departure</li>
                    <li>• actual_departure</li>
                    <li>• arrival_time</li>
                    <li>• status (ready/boarding/in_transit/completed/cancelled)</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-3 rounded border">
                  <p className="font-bold text-sm mb-2 text-blue-700">bookings</p>
                  <ul className="space-y-1">
                    <li>• id (UUID)</li>
                    <li>• trip_id (FK → trips)</li>
                    <li>• user_id (FK → users)</li>
                    <li>• seat_number</li>
                    <li>• booking_reference</li>
                    <li>• payment_status</li>
                    <li>• boarding_status (pending/boarded/no_show)</li>
                    <li>• qr_code</li>
                    <li>• created_at</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-3 rounded border">
                  <p className="font-bold text-sm mb-2 text-blue-700">payments</p>
                  <ul className="space-y-1">
                    <li>• id (UUID)</li>
                    <li>• booking_id (FK → bookings)</li>
                    <li>• amount</li>
                    <li>• service_fee</li>
                    <li>• payment_method</li>
                    <li>• transaction_id</li>
                    <li>• status (pending/success/failed/refunded)</li>
                    <li>• created_at</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-3 rounded border">
                  <p className="font-bold text-sm mb-2 text-blue-700">coordinator_actions</p>
                  <ul className="space-y-1">
                    <li>• id (UUID)</li>
                    <li>• coordinator_id (FK → users)</li>
                    <li>• company_id (FK → companies)</li>
                    <li>• action_type (assign_driver, cancel_trip, rebook, etc.)</li>
                    <li>• target_id (trip_id, vehicle_id, etc.)</li>
                    <li>• details (JSON)</li>
                    <li>• created_at</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TranspoDispatchSystem;