import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Camera, X, ChevronRight, Check, Sparkles, MapPin } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { CATEGORIES } from '../data/mockData'

const STEPS = ['Category', 'Details', 'Price & Photos', 'Review']
const CONDITIONS = ['Like New', 'Good', 'Fair']

export default function PostAd() {
  const navigate = useNavigate()
  const { location } = useApp()
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({
    category: '',
    title: '',
    description: '',
    condition: '',
    price: '',
    negotiable: false,
    photos: [],
    name: '',
    phone: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  const set = (key, val) => setForm(prev => ({ ...prev, [key]: val }))

  const handleSubmit = () => {
    setSubmitting(true)
    setTimeout(() => { setSubmitting(false); setDone(true) }, 2000)
  }

  const progress = ((step + 1) / STEPS.length) * 100

  if (done) {
    return (
      <div className="page-content flex flex-col items-center justify-center min-h-[70vh] text-center px-6 animate-scale-in">
        <div className="w-20 h-20 bg-green-100 rounded-3xl flex items-center justify-center mb-5 shadow-card">
          <Check size={36} className="text-green-600" strokeWidth={3} />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2" style={{ fontFamily: 'Fraunces, serif' }}>
          Ad Posted! 🎉
        </h2>
        <p className="text-slate-500 text-sm mb-6 max-w-xs">
          Your listing is live in <span className="text-green-700 font-semibold">{location.name}</span>.
          Buyers can now find and contact you.
        </p>
        <button onClick={() => navigate('/')} className="btn-primary w-full max-w-xs">
          Go to Home
        </button>
        <button onClick={() => { setDone(false); setStep(0); setForm({ category:'',title:'',description:'',condition:'',price:'',negotiable:false,photos:[],name:'',phone:'' }) }}
          className="btn-ghost mt-3 text-sm">
          Post another ad
        </button>
      </div>
    )
  }

  return (
    <div className="page-content">
      {/* Progress bar */}
      <div className="sticky top-[61px] z-30 bg-white border-b border-slate-100 px-4 py-3">
        <div className="flex items-center justify-between mb-2">
          {STEPS.map((s, i) => (
            <div key={s} className="flex items-center gap-1.5">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all
                ${i < step ? 'bg-green-600 text-white' : i === step ? 'bg-green-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                {i < step ? <Check size={12} strokeWidth={3} /> : i + 1}
              </div>
              <span className={`text-xs font-medium hidden sm:block ${i === step ? 'text-green-700' : 'text-slate-400'}`}>{s}</span>
              {i < STEPS.length - 1 && <div className="w-4 sm:w-8 h-px bg-slate-200 mx-1" />}
            </div>
          ))}
        </div>
        <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-green-500 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="px-4 py-5">
        {/* Step 0: Category */}
        {step === 0 && (
          <div className="animate-fade-up">
            <h2 className="font-bold text-slate-800 text-xl mb-1" style={{ fontFamily: 'Fraunces, serif' }}>
              What are you selling?
            </h2>
            <p className="text-slate-500 text-sm mb-5">Pick the best category for your item</p>
            <div className="grid grid-cols-3 gap-3">
              {CATEGORIES.map(cat => (
                <button key={cat.id} onClick={() => { set('category', cat.id); setStep(1) }}
                  className={`p-3 rounded-2xl border-2 flex flex-col items-center gap-2 transition-all
                    ${form.category === cat.id ? 'border-green-500 bg-green-50' : 'border-slate-200 bg-white hover:border-green-300 hover:bg-green-50'}`}>
                  <span className="text-2xl">{cat.icon}</span>
                  <span className="text-[10px] font-semibold text-slate-600 text-center leading-tight">{cat.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 1: Details */}
        {step === 1 && (
          <div className="animate-fade-up space-y-5">
            <div>
              <h2 className="font-bold text-slate-800 text-xl mb-1" style={{ fontFamily: 'Fraunces, serif' }}>
                Tell us about it
              </h2>
              <p className="text-slate-500 text-sm">Good details = faster sale</p>
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700 mb-1.5 block">Title *</label>
              <input className="input-field" placeholder="e.g. iPhone 13 Pro – 256GB Blue"
                value={form.title} onChange={e => set('title', e.target.value)} maxLength={70} />
              <p className="text-xs text-slate-400 mt-1 text-right">{form.title.length}/70</p>
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700 mb-1.5 block">Description *</label>
              <textarea className="input-field min-h-[100px] resize-none" placeholder="Describe condition, features, reason for selling..."
                value={form.description} onChange={e => set('description', e.target.value)} maxLength={500} />
              <p className="text-xs text-slate-400 mt-1 text-right">{form.description.length}/500</p>
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700 mb-2 block">Condition *</label>
              <div className="grid grid-cols-3 gap-2">
                {CONDITIONS.map(c => (
                  <button key={c} onClick={() => set('condition', c)}
                    className={`py-2.5 rounded-xl text-sm font-semibold border-2 transition-all
                      ${form.condition === c ? 'bg-green-600 text-white border-green-600' : 'bg-white text-slate-600 border-slate-200 hover:border-green-300'}`}>
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Price & Photos */}
        {step === 2 && (
          <div className="animate-fade-up space-y-5">
            <div>
              <h2 className="font-bold text-slate-800 text-xl mb-1" style={{ fontFamily: 'Fraunces, serif' }}>
                Price & Photos
              </h2>
              <p className="text-slate-500 text-sm">Items with photos sell 3× faster</p>
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700 mb-1.5 block">Price (₹) *</label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-600 font-bold">₹</span>
                <input type="number" className="input-field pl-7" placeholder="0"
                  value={form.price} onChange={e => set('price', e.target.value)} />
              </div>
            </div>
            <label className="flex items-center gap-3 cursor-pointer">
              <div className={`w-11 h-6 rounded-full transition-colors ${form.negotiable ? 'bg-green-500' : 'bg-slate-200'}`}
                onClick={() => set('negotiable', !form.negotiable)}>
                <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform mt-0.5 ${form.negotiable ? 'translate-x-5.5' : 'translate-x-0.5'}`} />
              </div>
              <span className="text-sm font-medium text-slate-700">Price is negotiable</span>
            </label>
            <div>
              <label className="text-sm font-semibold text-slate-700 mb-2 block">Photos (up to 8)</label>
              <div className="grid grid-cols-3 gap-2">
                <button className="aspect-square rounded-2xl border-2 border-dashed border-green-300 bg-green-50 flex flex-col items-center justify-center gap-1 hover:border-green-500 hover:bg-green-100 transition-colors">
                  <Camera size={22} className="text-green-500" />
                  <span className="text-xs font-medium text-green-600">Add Photo</span>
                </button>
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="aspect-square rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 flex items-center justify-center">
                    <Camera size={18} className="text-slate-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Review */}
        {step === 3 && (
          <div className="animate-fade-up space-y-5">
            <div>
              <h2 className="font-bold text-slate-800 text-xl mb-1" style={{ fontFamily: 'Fraunces, serif' }}>
                Review & Publish
              </h2>
              <p className="text-slate-500 text-sm">Almost done! Check your details</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 font-medium">Category</span>
                <span className="text-slate-800 font-semibold capitalize">{form.category || '—'}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 font-medium">Title</span>
                <span className="text-slate-800 font-semibold text-right max-w-[60%]">{form.title || '—'}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 font-medium">Condition</span>
                <span className="text-slate-800 font-semibold">{form.condition || '—'}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 font-medium">Price</span>
                <span className="text-green-700 font-bold text-base">₹{Number(form.price).toLocaleString('en-IN') || '—'}{form.negotiable && ' (Neg.)'}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 font-medium">Location</span>
                <span className="text-slate-800 font-semibold flex items-center gap-1">
                  <MapPin size={12} className="text-green-500" />{location.name}
                </span>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-2xl p-4 flex items-start gap-3">
              <Sparkles size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-green-800 leading-relaxed">
                Your ad will be <strong>free</strong> and visible to all buyers in <strong>{location.name}</strong>. 
                You'll receive buyer messages directly in your chat.
              </p>
            </div>
            <button onClick={handleSubmit} disabled={submitting}
              className="btn-primary w-full flex items-center justify-center gap-2">
              {submitting ? (
                <><div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Publishing…</>
              ) : (
                <><Check size={16} /> Publish Ad</>
              )}
            </button>
          </div>
        )}

        {/* Navigation */}
        {step > 0 && (
          <div className="flex gap-3 mt-6">
            <button onClick={() => setStep(s => s - 1)} className="btn-outline flex-1">
              Back
            </button>
            {step < STEPS.length - 1 && (
              <button
                onClick={() => setStep(s => s + 1)}
                disabled={
                  (step === 1 && (!form.title || !form.description || !form.condition)) ||
                  (step === 2 && !form.price)
                }
                className="btn-primary flex-1 flex items-center justify-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-btn">
                Continue <ChevronRight size={16} />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
