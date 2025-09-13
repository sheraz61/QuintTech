import React from 'react'

function AdditionalServicesCard({serviceId, tdelay, icon, title, desc}) {
  return (
            <div
                key={serviceId}
                className="group p-6 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${tdelay}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 group-hover:text-indigo-700 transition-colors duration-300">
                      {title}
                    </h4>
                    <p className="text-sm text-slate-600 mt-1">{desc}</p>
                  </div>
                </div>
              </div>
  )
}

export default AdditionalServicesCard